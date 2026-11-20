import type { Transaction, TransactionFilter } from '../data/types'
import TransactionItem from './TransactionItem'

type Props = {
  transactions: Transaction[]
  search: string
  filter: TransactionFilter
  onSearchChange: (value: string) => void
  onFilterChange: (value: TransactionFilter) => void
}

export default function TransactionList({ transactions, search, filter, onSearchChange, onFilterChange }: Props) {
  const visible = transactions.filter(transaction =>
    (filter === 'all' || transaction.kind === filter) &&
    `${transaction.description} ${transaction.category}`.toLocaleLowerCase('pt-BR').includes(search.trim().toLocaleLowerCase('pt-BR'))
  )
  return (
    <section className="panel transactions" aria-labelledby="transactions-title">
      <div className="section-heading">
        <h2 id="transactions-title">Transações</h2>
        <span>Outubro de 2026</span>
        <span className="count" role="status">{visible.length} de {transactions.length} lançamentos</span>
      </div>
      <div className="transaction-controls">
        <label>Buscar transação
          <input type="search" value={search} onChange={event => onSearchChange(event.target.value)} placeholder="Descrição ou categoria" />
        </label>
        <div className="filter-buttons" role="group" aria-label="Filtrar por tipo">
          <button type="button" aria-pressed={filter === 'all'} onClick={() => onFilterChange('all')}>Todas</button>
          <button type="button" aria-pressed={filter === 'income'} onClick={() => onFilterChange('income')}>Entradas</button>
          <button type="button" aria-pressed={filter === 'expense'} onClick={() => onFilterChange('expense')}>Saídas</button>
        </div>
      </div>
      <div className="table-heading" aria-hidden="true"><span>Descrição</span><span>Categoria</span><span>Data</span><span>Valor</span></div>
      <ul className="transaction-list">
        {visible.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)}
      </ul>
      {visible.length === 0 && <p className="empty-state" role="status">Nenhuma transação encontrada. Tente outra busca ou filtro.</p>}
      <p className="filter-note">Os filtros alteram esta lista; o resumo e o relatório mostram o mês completo.</p>
    </section>
  )
}
