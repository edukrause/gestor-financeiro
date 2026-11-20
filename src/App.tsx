import { useEffect, useState } from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import TransactionList from './components/TransactionList'
import LoadingSkeleton from './components/LoadingSkeleton'
import GoalList from './components/GoalList'
import Report from './components/Report'
import Footer from './components/Footer'
import { loadTransactions } from './data/loadTransactions'
import { goals } from './data/goals'
import type { Transaction, TransactionFilter } from './data/types'
import './App.css'

export default function App() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<TransactionFilter>('all')
  const [darkMode, setDarkMode] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const reportPage = new URLSearchParams(window.location.search).get('pagina') === 'relatorio'

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

  function retryTransactions() {
    setLoadError(false)
    setLoading(true)
    setAttempt(current => current + 1)
  }

  return (
    <div className="app" data-theme={darkMode ? 'dark' : 'light'}>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header darkMode={darkMode} reportPage={reportPage} onToggleTheme={() => setDarkMode(current => !current)} />
      <main id="conteudo" className="page">
        {reportPage ? <Report /> : <section id="visao-geral" aria-labelledby="overview-title">
          <h1 id="overview-title" className="sr-only">Visão geral financeira de outubro de 2026</h1>
          <Summary />
          <div className="dashboard">
            {loading ? (
              <LoadingSkeleton />
            ) : loadError ? (
              <section className="panel load-error">
                <h2>Transações indisponíveis</h2>
                <p role="alert">Não foi possível carregar as transações. Tente novamente.</p>
                <button className="header-button" type="button" onClick={retryTransactions}>Tentar novamente</button>
              </section>
            ) : (
              <TransactionList transactions={transactions} search={search} filter={filter} onSearchChange={setSearch} onFilterChange={setFilter} />
            )}
            <GoalList goals={goals} />
          </div>
        </section>}
      </main>
      <Footer />
    </div>
  )
}
