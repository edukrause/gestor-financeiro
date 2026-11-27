import type { FinanceTotals } from '../data/finance'
import { currency, signedCurrency, transactionCount } from '../data/format'

type Props = { monthName: string; totals: FinanceTotals | null; isFiltered: boolean }

export default function Summary({ monthName, totals, isFiltered }: Props) {
  const spent = totals?.spentPercent ?? null

  return (
    <div className="summary">
      <article className="metric balance">
        <h2>{isFiltered ? 'Saldo filtrado' : 'Saldo atual'} · {monthName}</h2>
        <strong>{totals ? currency(totals.balance) : '—'}</strong>
      </article>
      <article className="metric revenue">
        <div>
          <h2>Entradas</h2>
          {totals && <span>{transactionCount(totals.incomeCount)}</span>}
        </div>
        <strong>{totals ? signedCurrency(totals.income) : '—'}</strong>
      </article>
      <article className="metric expenses">
        <div>
          <h2>Saídas</h2>
          {totals && <span>{transactionCount(totals.expenseCount)}</span>}
        </div>
        <strong>{totals ? signedCurrency(-totals.expenses) : '—'}</strong>
      </article>
      <article className="metric budget">
        <div className="metric-heading">
          <h2>{isFiltered ? 'Renda filtrada' : 'Renda mensal'}</h2>
          <button className="text-button" type="button" disabled title="Edição de renda indisponível">Editar</button>
        </div>
        <div>
          <strong>{totals ? currency(totals.income) : '—'}</strong>
          {totals && <span>{spent === null ? 'Sem entradas' : `${spent}% já gasto`}</span>}
        </div>
        {spent !== null && (
          <progress value={Math.min(spent, 100)} max={100} aria-label={`${spent}% da renda gasta`}>{spent}%</progress>
        )}
      </article>
    </div>
  )
}
