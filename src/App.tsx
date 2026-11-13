import { useState } from 'react'
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const reportPage = new URLSearchParams(window.location.search).get('pagina') === 'relatorio'

  return (
    <div className="app" data-theme={darkMode ? 'dark' : 'light'}>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="?pagina=visao-geral">
            <span className="brand-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h19v20H3Z"/><path d="m5 24 7-7 5 4L29 5m-9 0h9v9"/><path d="M6 5h14"/></svg></span>Gestor Financeiro</a>
          <nav aria-label="Navegação principal">
            <a href="?pagina=visao-geral" aria-current={!reportPage ? 'page' : undefined}>Visão geral</a>
            <a href="?pagina=relatorio" aria-current={reportPage ? 'page' : undefined}>Relatório</a>
          </nav>
          <div className="header-actions">
            <button className="header-button desktop-action" type="button" disabled title="Gerenciamento de categorias previsto para a Fase 3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M3 3h7l11 11-7 7L3 10Z"/><circle cx="7.5" cy="7.5" r="1"/></svg>
              Categorias
            </button>
            <button className="header-button header-button-primary desktop-action" type="button" disabled title="Edição da renda prevista para a Fase 3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 10v4m12-4v4"/></svg>
              Definir renda
            </button>
            <button className="header-button theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'} aria-pressed={darkMode} title={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}>
              {darkMode ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z"/></svg>
              )}
            </button>
            <details className="mobile-menu">
              <summary className="header-button" aria-label="Abrir menu de ações"><span aria-hidden="true">☰</span></summary>
              <div className="mobile-menu-content">
                <button type="button" disabled title="Disponível na Fase 3">Categorias</button>
                <button type="button" disabled title="Disponível na Fase 3">Definir renda</button>
              </div>
            </details>
          </div>
        </div>
      </header>
      <main id="conteudo" className="page">
        {!reportPage && <section id="visao-geral" aria-labelledby="overview-title">
          <h1 id="overview-title" className="sr-only">Visão geral financeira de outubro de 2026</h1>
          <div className="summary">
            <article className="metric balance">
              <h2>Saldo atual · outubro</h2>
              <strong>R$ 3.245,90</strong>
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
              <div className="metric-heading"><h2>Renda mensal</h2><button className="text-button" type="button" disabled title="Edição disponível na Fase 3">Editar</button></div>
              <div>
                <strong>R$ 5.800,00</strong>
                <span>44% já gasto</span>
              </div>
              <progress value="44" max="100" aria-label="Renda mensal gasta">44%</progress>
            </article>
          </div>
          <div className="dashboard">
            <section className="panel transactions" aria-labelledby="transactions-title">
              <div className="transactions-toolbar">
                <div className="section-heading">
                  <h2 id="transactions-title">Transações</h2>
                  <span>Outubro de 2026</span>
                </div>
                <div className="transaction-controls" aria-label="Prévia dos filtros de transações">
                  <div className="filter-buttons" role="group" aria-label="Tipo de transação">
                    <button className="filter-button selected" type="button" disabled title="Filtros disponíveis na Fase 3">Todas</button>
                    <button className="filter-button" type="button" disabled title="Filtros disponíveis na Fase 3">Entradas</button>
                    <button className="filter-button" type="button" disabled title="Filtros disponíveis na Fase 3">Saídas</button>
                  </div>
                  <label className="search-field">
                    <span className="sr-only">Buscar transação (disponível na Fase 3)</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg>
                    <input type="search" placeholder="Buscar transação" disabled title="Busca disponível na Fase 3"/>
                  </label>
                </div>
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
                <div className="fixed-summary">
                <div className="section-heading">
                  <h3 id="fixed-title">Gastos fixos</h3>
                  <span>
                    <strong>R$ 1.479,60</strong>/mês</span>
                </div>
                <progress value="26" max="100" aria-label="Renda comprometida com gastos fixos">26%</progress>
                <p>26% da sua renda já está comprometida com contas fixas.</p>
                <button className="text-button manage-fixed" type="button" disabled title="Gerenciamento disponível na Fase 3">Gerenciar gastos fixos <span aria-hidden="true">→</span></button>
                </div>
                <div className="fixed-upcoming">
                <h4>Próximos vencimentos</h4>
                <p className="due">
                  <span>Academia · dia 20</span>
                  <strong>R$ 89,90</strong>
                </p>
                <p className="due">
                  <span>Celular · dia 25</span>
                  <strong>R$ 49,90</strong>
                </p>
                </div>
              </section>
            </aside>
          </div>
        </section>}
        {reportPage && <section id="relatorio" aria-labelledby="report-title" className="report">
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
        </section>}
      </main>
      <footer className="site-footer">
        <span>Gestor Financeiro — projeto acadêmico · Eduardo Krause</span>
        <a href="https://github.com/edukrause">github.com/edukrause</a>
      </footer>
    </div>
  )
}
