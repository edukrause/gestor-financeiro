export function readFavorites(): number[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem('gestor:favorites') ?? '[]')
    return Array.isArray(saved) ? saved.filter((id): id is number => typeof id === 'number' && Number.isInteger(id) && id > 0) : []
  } catch {
    return []
  }
}

export function readTheme(): boolean {
  try {
    return localStorage.getItem('gestor:theme') === 'dark'
  } catch {
    return false
  }
}
