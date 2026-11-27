export type Transaction = {
  id: number
  kind: 'expense' | 'income'
  description: string
  category: string
  date: string
  amount: number
  fixed?: boolean
}

export type Goal = {
  id: number
  name: string
  deadline: string
  saved: number
  target: number
}

export type TransactionFilter = 'all' | Transaction['kind']
