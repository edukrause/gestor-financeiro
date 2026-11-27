import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Summary from './components/Summary'
import TransactionList from './components/TransactionList'
import TransactionDetail from './components/TransactionDetail'
import LoadingSkeleton from './components/LoadingSkeleton'
import GoalList from './components/GoalList'
import Report from './components/Report'
import Footer from './components/Footer'
import { loadTransactions } from './data/loadTransactions'
import { filterTransactions, getMonth, summarizeTransactions } from './data/finance'
import { readFavorites, readTheme } from './data/storage'
import { goals } from './data/goals'
import type { Transaction, TransactionFilter } from './data/types'
import './App.css'

export default function App() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<TransactionFilter>('all')
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [favorites, setFavorites] = useState<number[]>(readFavorites)
  const [darkMode, setDarkMode] = useState(readTheme)
  const [storageError, setStorageError] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchTransactions() {
      try {
        const data = await loadTransactions(controller.signal)
        if (!controller.signal.aborted) setTransactions(data)
      } catch {
        if (!controller.signal.aborted) setLoadError(true)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void fetchTransactions()
    return () => controller.abort()
  }, [attempt])

  useEffect(() => {
    try {
      localStorage.setItem('gestor:favorites', JSON.stringify(favorites))
      localStorage.setItem('gestor:theme', darkMode ? 'dark' : 'light')
      setStorageError(false)
    } catch {
      setStorageError(true)
    }
  }, [favorites, darkMode])

  function toggleFavorite(id: number) {
    setFavorites(current => current.includes(id)
      ? current.filter(item => item !== id)
      : [...current, id]
    )
  }

  function retryTransactions() {
    setLoadError(false)
    setLoading(true)
    setAttempt(current => current + 1)
  }

  const month = getMonth(transactions)
  const monthlyTransactions = transactions.filter(transaction => transaction.date.startsWith(month.key))
  const visibleTransactions = filterTransactions(monthlyTransactions, search, filter, favoritesOnly ? favorites : null)
  const isFiltered = Boolean(search.trim()) || filter !== 'all' || favoritesOnly
  const monthlyTotals = summarizeTransactions(monthlyTransactions)
  const visibleTotals = isFiltered ? summarizeTransactions(visibleTransactions) : monthlyTotals

  let transactionStatus = null
  if (loading) {
    transactionStatus = <LoadingSkeleton />
  } else if (loadError) {
    transactionStatus = (
      <section className="panel load-error">
        <h2>Transações indisponíveis</h2>
        <p role="alert">Não foi possível carregar as transações. Tente novamente.</p>
        <button className="header-button" type="button" onClick={retryTransactions}>Tentar novamente</button>
      </section>
    )
  }

  return (
    <div className="app" data-theme={darkMode ? 'dark' : 'light'}>
      <a className="skip-link" href="#conteudo" onClick={event => {
        event.preventDefault()
        document.getElementById('conteudo')?.focus()
      }}>Pular para o conteúdo</a>
      <Header darkMode={darkMode} onToggleTheme={() => setDarkMode(current => !current)} />
      <main id="conteudo" className="page" tabIndex={-1}>
        {storageError && (
          <p className="storage-warning" role="status">
            O navegador não permitiu salvar as preferências. Os favoritos e o tema funcionarão apenas nesta visita.
          </p>
        )}
        <Routes>
          <Route path="/" element={(
            <section id="visao-geral" aria-labelledby="overview-title">
              <h1 id="overview-title" className="sr-only">Visão geral financeira de {month.label}</h1>
              <Summary monthName={month.name} totals={transactionStatus ? null : visibleTotals} isFiltered={isFiltered} />
              <div className="dashboard">
                {transactionStatus ?? (
                  <TransactionList
                    transactions={visibleTransactions}
                    totalCount={monthlyTransactions.length}
                    monthLabel={month.label}
                    search={search}
                    filter={filter}
                    onSearchChange={setSearch}
                    onFilterChange={setFilter}
                    favorites={favorites}
                    favoritesOnly={favoritesOnly}
                    onFavoritesOnlyChange={setFavoritesOnly}
                    onToggleFavorite={toggleFavorite}
                  />
                )}
                <GoalList
                  goals={goals}
                  transactions={monthlyTransactions}
                  monthlyIncome={transactionStatus ? null : monthlyTotals.income}
                />
              </div>
            </section>
          )} />
          <Route path="/relatorio" element={transactionStatus ?? (
            <Report month={month} transactions={monthlyTransactions} totals={monthlyTotals} />
          )} />
          <Route path="/transacao/:id" element={
            transactionStatus ?? (
              <TransactionDetail transactions={transactions} favorites={favorites} onToggleFavorite={toggleFavorite} />
            )
          } />
          <Route path="*" element={(
            <section className="panel">
              <h1>Página não encontrada</h1>
              <Link to="/">Voltar às transações</Link>
            </section>
          )} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
