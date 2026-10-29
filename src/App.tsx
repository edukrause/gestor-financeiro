import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#visao-geral">
            <span className="brand-icon" aria-hidden="true">↗</span>Gestor Financeiro</a>
          <nav aria-label="Navegação principal">
            <a href="#visao-geral">Visão geral</a>
            <a href="#relatorio">Relatório</a>
          </nav>
          <span className="header-note">Seu dinheiro, com clareza.</span>
        </div>
      </header>
      <main id="conteudo" className="page">
        <section id="visao-geral" aria-labelledby="overview-title">
          <h1 id="overview-title" className="sr-only">Visão geral financeira de outubro de 2026</h1>
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
          <div className="dashboard">
            <section className="panel transactions" aria-labelledby="transactions-title">
              <div className="section-heading">
                <h2 id="transactions-title">Transações</h2>
                <span>Outubro de 2026</span>
                <span className="count">10 lançamentos</span>
              </div>
              <div className="table-heading" aria-hidden="true">
                <span>Descrição</span>
                <span>Categoria</span>
                <span>Data</span>
                <span>Valor</span>
              </div>
              <ul className="transaction-list">
                <li className="transaction expense">
                  <span className="direction" aria-hidden="true">↗</span>
                  <strong className="description">Restaurante</strong>
                  <span className="category">Lazer › Restaurantes</span>
                  <time dateTime="2026-10-13">13/10</time>
                  <strong className="amount">−R$ 295,70</strong>
                </li>
                <li className="transaction expense">
                  <span className="direction" aria-hidden="true">↗</span>
                  <strong className="description">Streaming</strong>
                  <span className="category">Lazer › Streaming</span>
                  <time dateTime="2026-10-12">12/10</time>
                  <strong className="amount">−R$ 39,90</strong>
                </li>
                <li className="transaction expense">
                  <span className="direction" aria-hidden="true">↗</span>
                  <strong className="description">Farmácia</strong>
                  <span className="category">Saúde › Farmácia</span>
                  <time dateTime="2026-10-12">12/10</time>
                  <strong className="amount">−R$ 64,50</strong>
                </li>
                <li className="transaction expense">
                  <span className="direction" aria-hidden="true">↗</span>
                  <strong className="description">Combustível</strong>
                  <span className="category">Transporte › Combustível</span>
                  <time dateTime="2026-10-11">11/10</time>
                  <strong className="amount">−R$ 210,00</strong>
                </li>
                <li className="transaction expense">
                  <span className="direction" aria-hidden="true">↗</span>
                  <strong className="description">Internet</strong>
                  <span className="category">Moradia › Internet</span>
                  <time dateTime="2026-10-10">10/10</time>
                  <strong className="amount">−R$ 99,90</strong>
                </li>
                <li className="transaction expense">
                  <span className="direction" aria-hidden="true">↗</span>
                  <strong className="description">Conta de luz</strong>
                  <span className="category">Moradia › Energia</span>
                  <time dateTime="2026-10-09">09/10</time>
                  <strong className="amount">−R$ 156,80</strong>
                </li>
                <li className="transaction income">
                  <span className="direction" aria-hidden="true">↙</span>
                  <strong className="description">Freelance site</strong>
                  <span className="category">Renda › Freelance</span>
                  <time dateTime="2026-10-08">08/10</time>
                  <strong className="amount">+R$ 1.300,00</strong>
                </li>
                <li className="transaction expense">
                  <span className="direction" aria-hidden="true">↗</span>
                  <strong className="description">Mercado</strong>
                  <span className="category">Alimentação › Mercado</span>
                  <time dateTime="2026-10-07">07/10</time>
                  <strong className="amount">−R$ 487,30</strong>
                </li>
                <li className="transaction expense">
                  <span className="direction" aria-hidden="true">↗</span>
                  <strong className="description">Aluguel</strong>
                  <span className="category">Moradia › Aluguel</span>
                  <time dateTime="2026-10-06">06/10</time>
                  <strong className="amount">−R$ 1.200,00</strong>
                </li>
                <li className="transaction income">
                  <span className="direction" aria-hidden="true">↙</span>
                  <strong className="description">Salário</strong>
                  <span className="category">Renda › Salário</span>
                  <time dateTime="2026-10-05">05/10</time>
                  <strong className="amount">+R$ 4.500,00</strong>
                </li>
              </ul>
            </section>
            <aside className="panel goals-area" aria-labelledby="goals-title">
              <div className="section-heading">
                <h2 id="goals-title">Metas</h2>
                <span className="count">3 ativas</span>
              </div>
              <ul className="goals-list">
                <li className="goal">
                  <div>
                    <h3>Reserva de emergência</h3>
                    <span className="deadline">até dez/2026</span>
                  </div>
                  <p>
                    <span>
                      <strong>R$ 4.000,00</strong> de R$ 10.000,00</span>
                    <strong className="blue">40%</strong>
                  </p>
                  <progress value="40" max="100" aria-label="Progresso: Reserva de emergência">40%</progress>
                </li>
                <li className="goal">
                  <div>
                    <h3>Viagem</h3>
                    <span className="deadline">até jan/2027</span>
                  </div>
                  <p>
                    <span>
                      <strong>R$ 1.800,00</strong> de R$ 3.000,00</span>
                    <strong className="blue">60%</strong>
                  </p>
                  <progress value="60" max="100" aria-label="Progresso: Viagem">60%</progress>
                </li>
                <li className="goal">
                  <div>
                    <h3>Notebook novo</h3>
                    <span className="deadline">até mar/2027</span>
                  </div>
                  <p>
                    <span>
                      <strong>R$ 900,00</strong> de R$ 4.500,00</span>
                    <strong className="blue">20%</strong>
                  </p>
                  <progress value="20" max="100" aria-label="Progresso: Notebook novo">20%</progress>
                </li>
              </ul>
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
            </aside>
          </div>
        </section>
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
      </main>
      <footer className="site-footer">
        <span>Gestor Financeiro — projeto acadêmico · Eduardo Krause</span>
        <a href="https://github.com/edukrause">github.com/edukrause</a>
      </footer>
    </>
  )
}
