
export default function Summary() {
  return (
<div className="summary">
            <article className="metric balance">
              <h2>Saldo atual · outubro</h2>
              <strong>R$ 3.245,90</strong>
              <span>Disponível neste mês</span>
            </article>
            <article className="metric revenue">
              <div>
                <h2>Entradas</h2>
                <span>2 lançamentos</span>
              </div>
              <strong>+R$ 5.800,00</strong>
            </article>
            <article className="metric expenses">
              <div>
                <h2>Saídas</h2>
                <span>8 lançamentos</span>
              </div>
              <strong>−R$ 2.554,10</strong>
            </article>
            <article className="metric budget">
              <h2>Renda mensal</h2>
              <div>
                <strong>R$ 5.800,00</strong>
                <span>44% já gasto</span>
              </div>
              <progress value="44" max="100" aria-label="Renda mensal gasta">44%</progress>
            </article>
          </div>
  )
}
