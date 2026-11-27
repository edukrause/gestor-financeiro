import type { Transaction, TransactionFilter } from './types'

export function getMonth(transactions: Transaction[]) {
  const latestDate = transactions.reduce(
    (latest, transaction) => transaction.date > latest ? transaction.date : latest,
    '',
  )
  const today = new Date()
  const key = latestDate
    ? latestDate.slice(0, 7)
    : `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`
  const date = new Date(`${key}-01T00:00:00Z`)
  const name = date.toLocaleDateString('pt-BR', { month: 'long', timeZone: 'UTC' })
  const label = date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric', timeZone: 'UTC' })
  date.setUTCMonth(date.getUTCMonth() + 1, 0)

  return { key, name, label, lastDay: date.getUTCDate() }
}

function normalizeSearch(value: string) {
  return value.trim().toLocaleLowerCase('pt-BR').normalize('NFD').replace(/\p{M}/gu, '')
}

export function filterTransactions(
  transactions: Transaction[],
  search: string,
  filter: TransactionFilter,
  favoriteIds: number[] | null,
) {
  const query = normalizeSearch(search)
  return transactions.filter(transaction =>
    (filter === 'all' || transaction.kind === filter) &&
    (favoriteIds === null || favoriteIds.includes(transaction.id)) &&
    (normalizeSearch(transaction.description).includes(query) || normalizeSearch(transaction.category).includes(query)),
  )
}

export function summarizeTransactions(transactions: Transaction[]) {
  let incomeCents = 0
  let expenseCents = 0
  let incomeCount = 0
  let expenseCount = 0

  for (const transaction of transactions) {
    const cents = Math.round(transaction.amount * 100)
    if (transaction.kind === 'income') {
      incomeCents += cents
      incomeCount += 1
    } else {
      expenseCents += cents
      expenseCount += 1
    }
  }

  return {
    income: incomeCents / 100,
    expenses: expenseCents / 100,
    balance: (incomeCents - expenseCents) / 100,
    incomeCount,
    expenseCount,
    spentPercent: incomeCents > 0 ? Math.round(expenseCents / incomeCents * 100) : null,
  }
}

export type FinanceMonth = ReturnType<typeof getMonth>
export type FinanceTotals = ReturnType<typeof summarizeTransactions>
