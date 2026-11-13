# Gestor Financeiro

Aplicação de organização financeira pessoal em React, TypeScript e CSS: dez transações, três metas e relatório mensal. Os wireframes estão em `docs/`.

**Aplicação publicada:** https://edukrause.github.io/gestor-financeiro/

## Executar

```bash
npm install
npm run dev
```

`npm run build` verifica o TypeScript e gera `dist/`. `npm run preview` serve a versão de produção. O Vite usa a base `/gestor-financeiro/`, necessária para o GitHub Pages.

## Componentes, dados e estado

- `src/components/`: cabeçalho, resumo, listas e itens, metas, relatório, rodapé, skeleton e detalhe de transação. As props que recebem dados são tipadas.
- `src/data/types.ts`: tipos de transação, meta e filtro. As duas listagens usam `map` e `key` por ID.
- `App.tsx`: guarda estado e compõe os componentes, passando dados e funções por props.
- `public/transacoes.json`: fonte da listagem principal, carregada com `fetch` dentro de `useEffect`. Contém dez itens com ID, descrição, categoria, data, valor e tipo. Arquivo público demonstrativo, sem informações financeiras reais.
- `src/data/goals.ts`: vetor local com três metas; permanece local.
- `src/data/loadTransactions.ts`: acesso ao JSON, verificação de resposta e dos campos necessários. Falhas de rede ou formato exibem mensagem e botão para tentar novamente. A requisição é cancelada quando o efeito é limpo.
- O resumo e o relatório são demonstrativos do mês completo e não mudam com os filtros. Categorias e edição de renda são controles de apresentação desabilitados herdados do layout.
- CSS em `src/App.css`, com variáveis, estilos mobile first e media queries em 768px e 1024px. O layout e o modo escuro da última versão da Fase 2 foram preservados.

## Os seis desafios extras

| Desafio | Implementação e como conferir |
| --- | --- |
| Persistência local | Marque a estrela de uma transação e recarregue. Favoritos e tema são lidos ao iniciar e sincronizados com `localStorage` por `useEffect`. Use “Só favoritos” para filtrar. Dados locais inválidos não quebram a interface; armazenamento bloqueado mostra um aviso. |
| Página de detalhe | Clique no nome de uma transação: `#/transacao/:id`. `useParams` seleciona o item. A página mostra valor, tipo, categoria e data, permite favoritar e tem retorno à lista. ID desconhecido mostra mensagem. |
| Busca | Campo controlado que filtra descrição ou categoria em tempo real. Combina com entradas/saídas e favoritos. Inclui contador e mensagem sem resultados. |
| Esqueleto de carregamento | Dez linhas animadas enquanto o JSON é carregado, com anúncio acessível. Confira no DevTools com rede lenta. A animação respeita `prefers-reduced-motion`; não existe atraso artificial. |
| Publicação | GitHub Pages no link acima. `HashRouter` mantém as rotas de detalhe acessíveis após recarregar em hospedagem estática. |
| Modo escuro | Botão no cabeçalho alterna tema por estado e variáveis CSS. A preferência também persiste após recarregar. |

O regulamento limita a bonificação a dois desafios (+2 pontos), mesmo implementando os seis. Eles precisam ser indicados no PR e demonstrados no vídeo.

## Dependências

Além da base Vite/React/TypeScript, somente `react-router-dom` foi adicionado para o desafio de rota com parâmetro, conforme permitido pelo enunciado. Requisições usam `fetch` nativo. Não há backend, autenticação ou banco de dados necessário para executar o projeto.

## Separação das entregas

O PR #2 da Fase 2 já está na `main`. O PR #3 (`fase-3-componentes`) permanece preservado, sem novos commits. Esta evolução está em `melhorias-desafios`, criada a partir da `main` atualizada, para revisão separada.

Esta branch antecipa os requisitos de dados externos da Fase 4 para que o skeleton represente uma requisição real. Não substitui automaticamente o PR formal `fase-4-json` nem altera a entrega da Fase 3. O professor deve avaliar os desafios na fase em que forem apresentados.

Roteiro e checklist: `docs/roteiro-desafios.md`. O aluno ainda precisa gravar o vídeo de 3 a 5 minutos, publicar com acesso liberado, incluir o link na descrição do PR e enviar os links no ambiente da disciplina.

## Publicar uma atualização

O GitHub Pages serve o conteúdo compilado da branch `gh-pages`, na raiz. Para uma atualização, execute `npm run build` na branch de código, copie somente o conteúdo de `dist/` para um checkout da branch `gh-pages`, mantenha o arquivo `.nojekyll`, faça commit e push. Não publique os arquivos-fonte no lugar do build e não use push forçado.

Protótipo: https://www.figma.com/design/UknwSmhfMRSCsfGy6sUwk6/Sem-t%C3%ADtulo?node-id=0-1
