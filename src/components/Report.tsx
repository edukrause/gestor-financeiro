export default function Report() {
  return (<section id="relatorio" aria-labelledby="report-title" className="report">
          <div className="report-heading">
            <div>
              <h1 id="report-title">Relatório de outubro de 2026</h1>
              <p>Dados de 01/10 a 13/10 · 10 lançamentos</p>
            </div>
            <div className="month-picker" aria-label="Mês do relatório">
              <button className="header-button" type="button" disabled aria-label="Mês anterior" title="Seleção de mês disponível em uma próxima fase">‹</button>
              <span>Outubro 2026</span>
              <button className="header-button" type="button" disabled aria-label="Próximo mês" title="Seleção de mês disponível em uma próxima fase">›</button>
            </div>
          </div>
          <div className="summary report-summary">
            <article className="metric revenue"><h2>Receitas</h2><strong>+R$ 5.800,00</strong></article>
            <article className="metric expenses"><h2>Despesas</h2><strong>−R$ 2.554,10</strong></article>
            <article className="metric report-result"><div><h2>Resultado do mês</h2><span>sobrou 56% da renda</span></div><strong>+R$ 3.245,90</strong></article>
            <article className="metric report-budget"><div><h2>Renda comprometida</h2><span>de R$ 5.800,00</span></div><strong>44%</strong><progress value="44" max="100" aria-label="44% da renda comprometida">44%</progress></article>
          </div>
          <div className="report-grid">
            <section className="panel category-report" aria-labelledby="category-title">
              <div className="section-heading">
                <h2 id="category-title">Gastos por categoria</h2>
                <span>R$ 2.554,10</span>
              </div>
              <p className="category-item">Moradia <span>R$ 1.456,70 · 57,0%</span>
                <progress value="57" max="100" aria-label="Moradia: 57% dos gastos">57%</progress>
              </p>
              <p className="category-item">Alimentação <span>R$ 487,30 · 19,1%</span>
                <progress value="19.1" max="100" aria-label="Alimentação: 19,1% dos gastos">19,1%</progress>
              </p>
              <p className="category-item">Lazer <span>R$ 335,60 · 13,1%</span>
                <progress value="13.1" max="100" aria-label="Lazer: 13,1% dos gastos">13,1%</progress>
              </p>
              <p className="category-item">Transporte <span>R$ 210,00 · 8,2%</span>
                <progress value="8.2" max="100" aria-label="Transporte: 8,2% dos gastos">8,2%</progress>
              </p>
              <p className="category-item">Saúde <span>R$ 64,50 · 2,5%</span>
                <progress value="2.5" max="100" aria-label="Saúde: 2,5% dos gastos">2,5%</progress>
              </p>
              <p className="report-note">Moradia concentra mais da metade dos gastos do mês.</p>
            </section>
            <section className="panel" aria-labelledby="weekly-title">
              <h2 id="weekly-title">Entradas e saídas por semana</h2>
              <p className="legend">
                <span>● Entradas</span>
                <span>● Saídas</span>
              </p>
              <div className="chart" role="img" aria-label="Semana 1: entradas de 4.500 reais e saídas de 1.687,30. Semana 2: entradas de 1.300 reais e saídas de 866,80. Semanas 3 e 4 sem lançamentos.">
                <div className="chart-column">
                  <div className="bars">
                    <i className="bar-week-one-income"><span>4.500</span></i>
                    <i className="bar-week-one-expense"><span>1.687</span></i>
                  </div>
                  <span>Sem 1<small>01–07/10</small></span>
                </div>
                <div className="chart-column">
                  <div className="bars">
                    <i className="bar-week-two-income"><span>1.300</span></i>
                    <i className="bar-week-two-expense"><span>867</span></i>
                  </div>
                  <span>Sem 2<small>08–14/10</small></span>
                </div>
                <div className="chart-column">
                  <div className="bars">
                    <i>
                    </i>
                    <i>
                    </i>
                  </div>
                  <span>Sem 3<small>15–21/10</small></span>
                </div>
                <div className="chart-column">
                  <div className="bars">
                    <i>
                    </i>
                    <i>
                    </i>
                  </div>
                  <span>Sem 4<small>22–31/10</small></span>
                </div>
              </div>
            </section>
            <div className="report-sidebar">
            <section className="panel income-panel" aria-labelledby="income-title">
              <div className="section-heading"><h2 id="income-title">Renda x gastos</h2><button className="text-button" type="button" disabled title="Edição disponível na Fase 3">Editar renda</button></div>
              <progress value="44" max="100" aria-label="44% da renda gasta">44%</progress>
              <div className="income-split">
                <span>Gasto<strong>R$ 2.554,10</strong>
                </span>
                <span>Ainda livre<strong>R$ 3.245,90</strong>
                </span>
              </div>
            </section>
            <section className="panel ranking-panel" aria-labelledby="ranking-title">
              <h2 id="ranking-title">Maiores gastos</h2>
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
          </div>
        </section>)
}
