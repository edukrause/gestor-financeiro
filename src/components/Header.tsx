import { Link } from 'react-router-dom'
type Props = { darkMode: boolean; reportPage: boolean; onToggleTheme: () => void }
export default function Header({ darkMode, reportPage, onToggleTheme }: Props) {
  return (<header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/">
            <span className="brand-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h19v20H3Z"/><path d="m5 24 7-7 5 4L29 5m-9 0h9v9"/><path d="M6 5h14"/></svg></span>Gestor Financeiro</Link>
          <nav aria-label="Navegação principal">
            <Link to="/" aria-current={!reportPage ? 'page' : undefined}>Visão geral</Link>
            <Link to="/relatorio" aria-current={reportPage ? 'page' : undefined}>Relatório</Link>
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
            <button className="header-button theme-toggle" type="button" onClick={onToggleTheme} aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'} aria-pressed={darkMode} title={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}>
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
      </header>)
}
