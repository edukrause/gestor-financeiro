import type { Goal } from '../data/types'
import { currency } from '../data/format'

type Props = { goal: Goal }

export default function GoalCard({ goal }: Props) {
  const progress = Math.round(goal.saved / goal.target * 100)
  return (
    <li className="goal">
      <div><h3>{goal.name}</h3><span className="deadline">até {goal.deadline}</span></div>
      <p><span><strong>{currency(goal.saved)}</strong> de {currency(goal.target)}</span><strong className="blue">{progress}%</strong></p>
      <progress value={progress} max="100" aria-label={`Progresso: ${goal.name}`}>{progress}%</progress>
    </li>
  )
}
