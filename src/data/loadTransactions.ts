import type { Transaction } from './types'

export async function loadTransactions(signal: AbortSignal): Promise<Transaction[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}transacoes.json`, { signal })
  if (!response.ok) throw new Error('Falha ao buscar transações')
  const data: unknown = await response.json()
  if (!Array.isArray(data) || !data.every(item =>
    item && Number.isInteger(item.id) && typeof item.description === 'string' &&
    typeof item.category === 'string' && typeof item.date === 'string' &&
    Number.isFinite(item.amount) && (item.kind === 'income' || item.kind === 'expense')
  )) throw new Error('Formato de transações inválido')
  return data
}
