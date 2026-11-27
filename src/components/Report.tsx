import { summarizeTransactions } from '../data/finance'
import type { FinanceMonth, FinanceTotals } from '../data/finance'
import { currency, signedCurrency, transactionCount } from '../data/format'
import type { Transaction } from '../data/types'

type Props = { month: FinanceMonth; transactions: Transaction[]; totals: FinanceTotals }

function categoryName(transaction: Transaction) {
  return transaction.category.split('›')[0].trim()
}

function shortDate(date: string) {
  return `${date.slice(8)}/${date.slice(5, 7)}`
}

export default function Report({ month, transactions, totals }: Props) {
  const { income, expenses, balance, spentPercent } = totals
  const dates = transactions.map(transaction => transaction.date).sort()
  const expenseItems = transactions.filter(transaction => transaction.kind === 'expense')
  const categories = new Map<string, number>()
  for (const transaction of expenseItems) {
    const category = categoryName(transaction)
    categories.set(category, (categories.get(category) ?? 0) + Math.round(transaction.amount * 100))
  }
  const rankedCategories = [...categories].sort((first, second) => second[1] - first[1])
  const biggestExpenses = [...expenseItems].sort((first, second) => second.amount - first.amount).slice(0, 5)
  const weeks = [1, 8, 15, 22].map((start, index) => {
    const end = index === 3 ? month.lastDay : start + 6
    const week = transactions.filter(transaction => {
      const day = Number(transaction.date.slice(8))
      return day >= start && day <= end
    })
    return { start, end, ...summarizeTransactions(week) }
  })
  const chartMax = Math.max(1, ...weeks.map(week => Math.max(week.income, week.expenses)))
  const chartLabel = weeks.map((week, index) =>
    `Semana ${index + 1}, entradas de ${currency(week.income)} e saídas de ${currency(week.expenses)}`,
  ).join('. ')
  const incomeResult = spentPercent === null
    ? 'Sem entradas no mês'
    : balance < 0
      ? `gastos superaram a renda em ${spentPercent - 100}%`
      : `sobrou ${100 - spentPercent}% da renda`

  return (
    <section id="relatorio" aria-labelledby="report-title" className="report">
      <div className="report-heading">
        <div>
          <h1 id="report-title">Relatório de {month.label}</h1>
          <p>{dates.length
            ? `Dados de ${shortDate(dates[0])} a ${shortDate(dates[dates.length - 1])} · ${transactionCount(dates.length)}`
            : 'Nenhum lançamento neste mês'}</p>
        </div>
        <div className="month-picker" aria-label="Mês do relatório">
          <button className="header-button" type="button" disabled aria-label="Mês anterior">‹</button>
          <span>{month.label}</span>
          <button className="header-button" type="button" disabled aria-label="Próximo mês">›</button>
        </div>
      </div>

      <div className="summary report-summary">
        <article className="metric revenue">
          <h2>Receitas</h2><strong>{signedCurrency(income)}</strong>
        </article>
        <article className="metric expenses">
          <h2>Despesas</h2><strong>{signedCurrency(-expenses)}</strong>
        </article>
        <article className="metric report-result">
          <div><h2>Resultado do mês</h2><span>{incomeResult}</span></div>
          <strong>{signedCurrency(balance)}</strong>
        </article>
        <article className="metric report-budget">
          <div><h2>Renda comprometida</h2><span>de {currency(income)}</span></div>
          <strong>{spentPercent === null ? '—' : `${spentPercent}%`}</strong>
          {spentPercent !== null && (
            <progress value={Math.min(spentPercent, 100)} max={100} aria-label={`${spentPercent}% da renda comprometida`}>
              {spentPercent}%
            </progress>
          )}
        </article>
      </div>

      <div className="report-grid">
        <section className="panel category-report" aria-labelledby="category-title">
          <div className="section-heading">
            <h2 id="category-title">Gastos por categoria</h2><span>{currency(expenses)}</span>
          </div>
          {rankedCategories.map(([category, cents]) => {
            const amount = cents / 100
            const percent = expenses > 0 ? amount / expenses * 100 : 0
            const label = percent.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            return (
              <p className="category-item" key={category}>
                {category} <span>{currency(amount)} · {label}%</span>
                <progress value={percent} max={100} aria-label={`${category}, ${label}% dos gastos`}>{label}%</progress>
              </p>
            )
          })}
          {rankedCategories.length > 0
            ? <p className="report-note">{rankedCategories[0][0]} é a categoria com mais gastos no mês.</p>
            : <p className="report-note">Nenhuma despesa neste mês.</p>}
        </section>

        <section className="panel" aria-labelledby="weekly-title">
          <h2 id="weekly-title">Entradas e saídas por semana</h2>
          <p className="legend"><span>● Entradas</span><span>● Saídas</span></p>
          <div className="chart" role="img" aria-label={chartLabel}>
            {weeks.map((week, index) => (
              <div className="chart-column" key={week.start}>
                <div className="bars">
                  <i style={{ height: `${week.income / chartMax * 90}%` }}>
                    {week.income > 0 && <span>{Math.round(week.income).toLocaleString('pt-BR')}</span>}
                  </i>
                  <i style={{ height: `${week.expenses / chartMax * 90}%` }}>
                    {week.expenses > 0 && <span>{Math.round(week.expenses).toLocaleString('pt-BR')}</span>}
                  </i>
                </div>
                <span>Sem {index + 1}<small>{String(week.start).padStart(2, '0')}–{week.end}/{month.key.slice(5)}</small></span>
              </div>
            ))}
          </div>
        </section>

        <div className="report-sidebar">
          <section className="panel income-panel" aria-labelledby="income-title">
            <div className="section-heading">
              <h2 id="income-title">Renda x gastos</h2>
              <button className="text-button" type="button" disabled title="Edição de renda indisponível">Editar renda</button>
            </div>
            {spentPercent !== null && (
              <progress value={Math.min(spentPercent, 100)} max={100} aria-label={`${spentPercent}% da renda gasta`}>
                {spentPercent}%
              </progress>
            )}
            <div className="income-split">
              <span>Gasto<strong>{currency(expenses)}</strong></span>
              <span>{balance < 0 ? 'Acima da renda' : 'Ainda livre'}<strong>{currency(Math.abs(balance))}</strong></span>
            </div>
          </section>
          <section className="panel ranking-panel" aria-labelledby="ranking-title">
            <h2 id="ranking-title">Maiores gastos</h2>
            {biggestExpenses.length > 0 ? (
              <ol className="ranking">
                {biggestExpenses.map(transaction => (
                  <li key={transaction.id}>
                    <span>{transaction.description}<small>{categoryName(transaction)}</small></span>
                    <strong>{currency(transaction.amount)}</strong>
                  </li>
                ))}
              </ol>
            ) : <p className="report-note">Nenhuma despesa neste mês.</p>}
          </section>
        </div>
      </div>
    </section>
  )
}
