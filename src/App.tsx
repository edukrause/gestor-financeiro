import { useState } from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import TransactionList from './components/TransactionList'
import GoalList from './components/GoalList'
import Report from './components/Report'
import Footer from './components/Footer'
import { transactions } from './data/transactions'
import { goals } from './data/goals'
import type { TransactionFilter } from './data/types'
import './App.css'

export default function App() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<TransactionFilter>('all')
  const [darkMode, setDarkMode] = useState(false)
  const reportPage = new URLSearchParams(window.location.search).get('pagina') === 'relatorio'

  return (
    <div className="app" data-theme={darkMode ? 'dark' : 'light'}>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header darkMode={darkMode} reportPage={reportPage} onToggleTheme={() => setDarkMode(current => !current)} />
      <main id="conteudo" className="page">
        {reportPage ? <Report /> : <section id="visao-geral" aria-labelledby="overview-title">
          <h1 id="overview-title" className="sr-only">Visão geral financeira de outubro de 2026</h1>
          <Summary />
          <div className="dashboard">
            <TransactionList transactions={transactions} search={search} filter={filter} onSearchChange={setSearch} onFilterChange={setFilter} />
            <GoalList goals={goals} />
          </div>
        </section>}
      </main>
      <Footer />
    </div>
  )
}
