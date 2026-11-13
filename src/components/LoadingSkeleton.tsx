export default function LoadingSkeleton() {
  return (
    <section className="panel" aria-busy="true" aria-label="Carregando transações">
      <p className="sr-only" role="status">Carregando transações…</p>
      <div className="skeleton skeleton-heading" aria-hidden="true" />
      <ul className="skeleton-list" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => <li className="skeleton-row" key={index}>
          <span className="skeleton" /><span className="skeleton" /><span className="skeleton" />
        </li>)}
      </ul>
    </section>
  )
}
