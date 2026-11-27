import type { Transaction } from './types'

export async function loadTransactions(signal: AbortSignal): Promise<Transaction[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}transacoes.json`, { signal })
  if (!response.ok) throw new Error('Falha ao buscar transações')
  const data: unknown = await response.json()
  if (!Array.isArray(data) || !data.every(item =>
    item && Number.isInteger(item.id) && typeof item.description === 'string' &&
    typeof item.category === 'string' && typeof item.date === 'string' &&
    /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(item.date) &&
    new Date(`${item.date}T00:00:00Z`).toISOString().slice(0, 10) === item.date &&
    Number.isFinite(item.amount) && item.amount >= 0 &&
    (item.kind === 'income' || item.kind === 'expense') &&
    (item.fixed === undefined || typeof item.fixed === 'boolean')
  )) throw new Error('Formato de transações inválido')
  return data
}
