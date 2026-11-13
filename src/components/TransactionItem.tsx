import type { Transaction } from '../data/types'
import { currency } from '../data/format'
import { Link } from 'react-router-dom'

type Props = { transaction: Transaction; favorite: boolean; onToggleFavorite: (id: number) => void }

export default function TransactionItem({ transaction, favorite, onToggleFavorite }: Props) {
  const income = transaction.kind === 'income'
  return (
    <li className={`transaction ${transaction.kind}`}>
      <span className="direction" aria-hidden="true">{income ? '↙' : '↗'}</span>
      <span className="description transaction-name"><button className="favorite-button" type="button" aria-label={`${favorite ? 'Desfavoritar' : 'Favoritar'} ${transaction.description}`} aria-pressed={favorite} onClick={() => onToggleFavorite(transaction.id)}>{favorite ? '★' : '☆'}</button><Link to={`/transacao/${transaction.id}`}>{transaction.description}</Link></span>
      <span className="category">{transaction.category}</span>
      <time dateTime={transaction.date}>{transaction.date.slice(8)}/{transaction.date.slice(5, 7)}</time>
      <strong className="amount">{income ? '+' : '−'}{currency(transaction.amount)}</strong>
    </li>
  )
}
