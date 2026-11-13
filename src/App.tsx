import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Summary from './components/Summary'
import TransactionList from './components/TransactionList'
import TransactionDetail from './components/TransactionDetail'
import LoadingSkeleton from './components/LoadingSkeleton'
import GoalList from './components/GoalList'
import Report from './components/Report'
import Footer from './components/Footer'
import { goals } from './data/goals'
import { loadTransactions } from './data/loadTransactions'
import { readFavorites, readTheme } from './data/storage'
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
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError('')
    loadTransactions(controller.signal)
      .then(data => { if (!controller.signal.aborted) setTransactions(data) })
      .catch(() => {
        if (!controller.signal.aborted) setError('Não foi possível carregar as transações. Verifique sua conexão e tente novamente.')
      })
      .finally(() => { if (!controller.signal.aborted) setLoading(false) })
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
    setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id])
  }

  const transactionContent = loading ? <LoadingSkeleton /> : error ? (
    <section className="panel load-error" role="alert">
      <h2>Transações indisponíveis</h2><p>{error}</p>
      <button className="header-button" type="button" onClick={() => setAttempt(current => current + 1)}>Tentar novamente</button>
    </section>
  ) : (
    <TransactionList transactions={transactions} search={search} filter={filter}
      onSearchChange={setSearch} onFilterChange={setFilter} favorites={favorites}
      favoritesOnly={favoritesOnly} onFavoritesOnlyChange={setFavoritesOnly} onToggleFavorite={toggleFavorite} />
  )

  return (
    <div className="app" data-theme={darkMode ? 'dark' : 'light'}>
      <a className="skip-link" href="#conteudo" onClick={event => {
        event.preventDefault()
        document.getElementById('conteudo')?.focus()
      }}>Pular para o conteúdo</a>
      <Header darkMode={darkMode} reportPage={location.pathname === '/relatorio'} onToggleTheme={() => setDarkMode(current => !current)} />
      <main id="conteudo" className="page" tabIndex={-1}>
        {storageError && <p className="storage-warning" role="status">O navegador não permitiu salvar as preferências. Os favoritos e o tema funcionarão apenas nesta visita.</p>}
        <Routes>
          <Route path="/" element={<section aria-labelledby="overview-title">
            <h1 id="overview-title" className="sr-only">Visão geral financeira de outubro de 2026</h1>
            <Summary />
            <div className="dashboard">{transactionContent}<GoalList goals={goals} /></div>
          </section>} />
          <Route path="/relatorio" element={<Report />} />
          <Route path="/transacao/:id" element={loading ? <LoadingSkeleton /> : error ? transactionContent :
            <TransactionDetail transactions={transactions} favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="*" element={<section className="panel"><h1>Página não encontrada</h1><Link to="/">Voltar às transações</Link></section>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
