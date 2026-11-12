
export default function Report() {
  return (
<section id="relatorio" aria-labelledby="report-title" className="report">
          <div className="report-heading">
            <div>
              <p className="eyebrow">Seu mês em números</p>
              <h2 id="report-title">Relatório de outubro de 2026</h2>
              <p>Dados de 01/10 a 13/10 · 10 lançamentos</p>
            </div>
            <span className="month">Outubro 2026</span>
          </div>
          <div className="report-grid">
            <section className="panel category-report" aria-labelledby="category-title">
              <div className="section-heading">
                <h3 id="category-title">Gastos por categoria</h3>
                <span>R$ 2.554,10</span>
              </div>
              <p className="category-item">Moradia <span>R$ 1.456,70 · 57,0%</span>
                <progress value="57" max="100">57%</progress>
              </p>
              <p className="category-item">Alimentação <span>R$ 487,30 · 19,1%</span>
                <progress value="19.1" max="100">19,1%</progress>
              </p>
              <p className="category-item">Lazer <span>R$ 335,60 · 13,1%</span>
                <progress value="13.1" max="100">13,1%</progress>
              </p>
              <p className="category-item">Transporte <span>R$ 210,00 · 8,2%</span>
                <progress value="8.2" max="100">8,2%</progress>
              </p>
              <p className="category-item">Saúde <span>R$ 64,50 · 2,5%</span>
                <progress value="2.5" max="100">2,5%</progress>
              </p>
              <p className="report-note">Moradia concentra mais da metade dos gastos do mês.</p>
            </section>
            <section className="panel" aria-labelledby="weekly-title">
              <h3 id="weekly-title">Entradas e saídas por semana</h3>
              <p className="legend">
                <span>● Entradas</span>
                <span>● Saídas</span>
              </p>
              <div className="chart" role="img" aria-label="Semana 1: entradas de 4.500 reais e saídas de 1.687,30. Semana 2: entradas de 1.300 reais e saídas de 866,80. Semanas 3 e 4 sem lançamentos.">
                <div className="chart-column">
                  <div className="bars">
                    <i style={{height:'90%'}}>
                    </i>
                    <i style={{height:'34%'}}>
                    </i>
                  </div>
                  <span>Sem 1</span>
                </div>
                <div className="chart-column">
                  <div className="bars">
                    <i style={{height:'26%'}}>
                    </i>
                    <i style={{height:'17%'}}>
                    </i>
                  </div>
                  <span>Sem 2</span>
                </div>
                <div className="chart-column">
                  <div className="bars">
                    <i>
                    </i>
                    <i>
                    </i>
                  </div>
                  <span>Sem 3</span>
                </div>
                <div className="chart-column">
                  <div className="bars">
                    <i>
                    </i>
                    <i>
                    </i>
                  </div>
                  <span>Sem 4</span>
                </div>
              </div>
            </section>
            <section className="panel" aria-labelledby="ranking-title">
              <h3>Renda x gastos</h3>
              <div className="income-split">
                <span>Gasto<strong>R$ 2.554,10</strong>
                </span>
                <span>Ainda livre<strong>R$ 3.245,90</strong>
                </span>
              </div>
              <progress value="44" max="100" aria-label="44% da renda gasta">44%</progress>
              <h3 id="ranking-title" className="ranking-title">Maiores gastos</h3>
              <ol className="ranking">
                <li>
                  <span>Aluguel<small>Moradia</small>
                  </span>
                  <strong>R$ 1.200,00</strong>
                </li>
                <li>
                  <span>Mercado<small>Alimentação</small>
                  </span>
                  <strong>R$ 487,30</strong>
                </li>
                <li>
                  <span>Restaurante<small>Lazer</small>
                  </span>
                  <strong>R$ 295,70</strong>
                </li>
                <li>
                  <span>Combustível<small>Transporte</small>
                  </span>
                  <strong>R$ 210,00</strong>
                </li>
                <li>
                  <span>Conta de luz<small>Moradia</small>
                  </span>
                  <strong>R$ 156,80</strong>
                </li>
              </ol>
            </section>
          </div>
        </section>
  )
}
