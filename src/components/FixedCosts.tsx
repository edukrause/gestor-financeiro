import { summarizeTransactions } from '../data/finance'
import { currency } from '../data/format'
import type { Transaction } from '../data/types'

const upcoming = [
  { name: 'Academia', day: 20, amount: 89.90 },
  { name: 'Celular', day: 25, amount: 49.90 },
]

type Props = { transactions: Transaction[]; monthlyIncome: number | null }

export default function FixedCosts({ transactions, monthlyIncome }: Props) {
  const fixedExpenses = transactions.filter(transaction => transaction.kind === 'expense' && transaction.fixed)
  const pending = upcoming.filter(cost => !fixedExpenses.some(transaction => transaction.description === cost.name))
  const { expenses } = summarizeTransactions(fixedExpenses)
  const fixedTotal = expenses + pending.reduce((total, cost) => total + cost.amount, 0)
  const spent = monthlyIncome !== null && monthlyIncome > 0 ? Math.round(fixedTotal / monthlyIncome * 100) : null

  return (
    <section className="fixed-costs" aria-labelledby="fixed-title">
      <div className="fixed-summary">
        <div className="section-heading">
          <h3 id="fixed-title">Gastos fixos</h3>
          <span><strong>{monthlyIncome === null ? '—' : currency(fixedTotal)}</strong>/mês</span>
        </div>
        {spent !== null && (
          <>
            <progress value={Math.min(spent, 100)} max={100} aria-label="Renda comprometida com gastos fixos">{spent}%</progress>
            <p>{spent}% da renda do mês está comprometida com contas fixas.</p>
          </>
        )}
      </div>
      <div className="fixed-upcoming">
        <h4>Vencimentos recorrentes</h4>
        {upcoming.map(cost => (
          <p className="due" key={cost.name}>
            <span>{cost.name} · dia {cost.day}</span>
            <strong>{currency(cost.amount)}</strong>
          </p>
        ))}
      </div>
    </section>
  )
}
