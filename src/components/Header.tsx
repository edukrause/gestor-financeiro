
export default function Header() {
  return (
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
  )
}
