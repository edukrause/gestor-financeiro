## Fase 4: Dados externos

**Tema do projeto:** Gestor Financeiro pessoal, com transações, metas de economia e relatório mensal.

**Vídeo explicativo:** [Inserir link público da gravação da Fase 4]

### O que foi feito nesta fase

- As dez transações são lidas de `public/transacoes.json`. Cada item tem ID, descrição, categoria, data, valor e tipo.
- O efeito em `App.tsx` carrega os dados com `fetch` nativo e atualiza o estado tipado `Transaction[]`.
- O carregamento exibe um esqueleto. Em caso de falha, a interface explica o que ocorreu e permite tentar novamente.
- A listagem secundária mantém três metas em um vetor local. A busca e os filtros continuam disponíveis para a listagem principal.
- O README documenta a execução, a fonte dos dados e o endereço da aplicação publicada.

### Decisões técnicas

- O arquivo JSON é servido via HTTP pelo próprio Vite e pelo GitHub Pages. A listagem passa por uma requisição real sem exigir credenciais ou um servidor adicional.
- `loadTransactions` verifica a resposta HTTP e o formato dos itens. O efeito cancela a requisição quando é limpo. A nova tentativa reinicia o carregamento.
- Favoritos e tema são sincronizados com `localStorage` por `useEffect`. Busca e filtros calculam as transações visíveis a partir do vetor recebido.
- O `HashRouter` permite recarregar uma URL de detalhe no GitHub Pages. O layout preserva as adaptações em 768px e 1024px.

### Desafios bonificados entregues nesta fase (se houver)

- Persistência local dos favoritos e página de detalhe por parâmetro, priorizados para a bonificação.
- Esqueleto de carregamento animado e publicação no GitHub Pages.
- Busca em tempo real e modo escuro, que já existiam nas fases anteriores, com busca por palavras sem acento e persistência da preferência de tema.

### Dependências adicionadas e justificativa (se houver)

- `react-router-dom`, permitido pelo enunciado para implementar `/transacao/:id`. A requisição utiliza `fetch` nativo.

**Aplicação publicada:** [Gestor Financeiro](https://edukrause.github.io/gestor-financeiro/)
