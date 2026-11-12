
export default function FixedCosts() {
  return (
<section className="fixed-costs" aria-labelledby="fixed-title">
                <div className="section-heading">
                  <h3 id="fixed-title">Gastos fixos</h3>
                  <span>
                    <strong>R$ 1.479,60</strong>/mês</span>
                </div>
                <progress value="26" max="100" aria-label="Renda comprometida com gastos fixos">26%</progress>
                <p>26% da sua renda já está comprometida com contas fixas.</p>
                <h4>Próximos vencimentos</h4>
                <p className="due">
                  <span>Academia · dia 20</span>
                  <strong>R$ 89,90</strong>
                </p>
                <p className="due">
                  <span>Celular · dia 25</span>
                  <strong>R$ 49,90</strong>
                </p>
              </section>
  )
}
