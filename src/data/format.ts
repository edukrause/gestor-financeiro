export function currency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function signedCurrency(value: number) {
  const sign = value > 0 ? '+' : value < 0 ? '−' : ''
  return `${sign}${currency(Math.abs(value))}`
}

export function transactionCount(count: number) {
  return `${count} ${count === 1 ? 'lançamento' : 'lançamentos'}`
}
