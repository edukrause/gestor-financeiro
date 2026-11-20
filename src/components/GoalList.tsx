import type { Goal } from '../data/types'
import GoalCard from './GoalCard'
import FixedCosts from './FixedCosts'

type Props = { goals: Goal[] }

export default function GoalList({ goals }: Props) {
  return (
    <aside className="panel goals-area" aria-labelledby="goals-title">
      <div className="section-heading"><h2 id="goals-title">Metas</h2><span className="count">{goals.length} ativas</span></div>
      <ul className="goals-list">{goals.map(goal => <GoalCard key={goal.id} goal={goal} />)}</ul>
      <FixedCosts />
    </aside>
  )
}
