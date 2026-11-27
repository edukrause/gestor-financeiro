import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const currentUrl = new URL(window.location.href)
if (currentUrl.searchParams.get('pagina') === 'relatorio' && !currentUrl.hash) {
  currentUrl.searchParams.delete('pagina')
  currentUrl.hash = '/relatorio'
  window.history.replaceState(window.history.state, '', currentUrl)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
