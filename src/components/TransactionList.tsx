import type { Transaction, TransactionFilter } from '../data/types'
import { transactionCount } from '../data/format'
import TransactionItem from './TransactionItem'

type Props = {
  transactions: Transaction[]
  totalCount: number
  monthLabel: string
  search: string
  filter: TransactionFilter
  onSearchChange: (value: string) => void
  onFilterChange: (value: TransactionFilter) => void
  favorites: number[]
  favoritesOnly: boolean
  onFavoritesOnlyChange: (value: boolean) => void
  onToggleFavorite: (id: number) => void
}

export default function TransactionList({
  transactions,
  totalCount,
  monthLabel,
  search,
  filter,
  onSearchChange,
  onFilterChange,
  favorites,
  favoritesOnly,
  onFavoritesOnlyChange,
  onToggleFavorite,
}: Props) {
  return (
    <section className="panel transactions" aria-labelledby="transactions-title">
      <div className="transactions-toolbar">
        <div className="section-heading">
          <h2 id="transactions-title">Transações</h2>
          <span>{monthLabel}</span>
        </div>
        <div className="transaction-controls">
          <div className="filter-buttons" role="group" aria-label="Filtrar por tipo">
            <button className="filter-button" type="button" aria-pressed={filter === 'all'} onClick={() => onFilterChange('all')}>Todas</button>
            <button className="filter-button" type="button" aria-pressed={filter === 'income'} onClick={() => onFilterChange('income')}>Entradas</button>
            <button className="filter-button" type="button" aria-pressed={filter === 'expense'} onClick={() => onFilterChange('expense')}>Saídas</button>
          </div>
          <label className="search-field">
            <span className="sr-only">Buscar transação</span>
            <input type="search" value={search} onChange={event => onSearchChange(event.target.value)} placeholder="Descrição ou categoria" />
          </label>
        </div>
      </div>
      <div className="list-options">
        <label>
          <input type="checkbox" checked={favoritesOnly} onChange={event => onFavoritesOnlyChange(event.target.checked)} />
          Só favoritos
        </label>
        <span role="status">{transactions.length} de {transactionCount(totalCount)}</span>
      </div>
      <div className="table-heading" aria-hidden="true">
        <span>Descrição</span><span>Categoria</span><span>Data</span><span>Valor</span>
      </div>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            favorite={favorites.includes(transaction.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </ul>
      {transactions.length === 0 && <p className="empty-state">Nenhuma transação encontrada. Tente outra busca ou filtro.</p>}
      <p className="filter-note">Os filtros atualizam a lista e o resumo. O relatório reúne todos os lançamentos do mês.</p>
    </section>
  )
}
