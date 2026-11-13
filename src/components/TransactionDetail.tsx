import { Link, useParams } from 'react-router-dom'
import type { Transaction } from '../data/types'
import { currency } from '../data/format'

type Props = { transactions: Transaction[]; favorites: number[]; onToggleFavorite: (id: number) => void }

export default function TransactionDetail({ transactions, favorites, onToggleFavorite }: Props) {
  const { id } = useParams()
  const transaction = transactions.find(item => String(item.id) === id)
  if (!transaction) return <section className="panel"><h1>Transação não encontrada</h1><p>Este lançamento não existe.</p><Link to="/">Voltar às transações</Link></section>
  const favorite = favorites.includes(transaction.id)
  return (
    <article className="panel transaction-detail">
      <Link to="/">← Voltar às transações</Link>
      <div className="detail-heading"><h1>{transaction.description}</h1>
        <button className="header-button" type="button" aria-pressed={favorite} onClick={() => onToggleFavorite(transaction.id)}>
          {favorite ? '★ Remover dos favoritos' : '☆ Favoritar transação'}
        </button>
      </div>
      <dl>
        <div><dt>Valor</dt><dd>{transaction.kind === 'income' ? '+' : '−'}{currency(transaction.amount)}</dd></div>
        <div><dt>Tipo</dt><dd>{transaction.kind === 'income' ? 'Entrada' : 'Saída'}</dd></div>
        <div><dt>Categoria</dt><dd>{transaction.category}</dd></div>
        <div><dt>Data</dt><dd><time dateTime={transaction.date}>{transaction.date.split('-').reverse().join('/')}</time></dd></div>
      </dl>
    </article>
  )
}
