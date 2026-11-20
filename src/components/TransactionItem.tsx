import type { Transaction } from '../data/types'
import { currency } from '../data/format'

type Props = { transaction: Transaction }

export default function TransactionItem({ transaction }: Props) {
  const income = transaction.kind === 'income'
  return (
    <li className={`transaction ${transaction.kind}`}>
      <span className="direction" aria-hidden="true">{income ? '↙' : '↗'}</span>
      <strong className="description">{transaction.description}</strong>
      <span className="category">{transaction.category}</span>
      <time dateTime={transaction.date}>{transaction.date.slice(8)}/{transaction.date.slice(5, 7)}</time>
      <strong className="amount">{income ? '+' : '−'}{currency(transaction.amount)}</strong>
    </li>
  )
}
