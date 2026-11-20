# Gestor Financeiro

Aplicação de organização financeira pessoal em React, TypeScript e CSS. A visão geral apresenta transações e metas de economia. O relatório reúne os indicadores do mês de demonstração.

[Aplicação no GitHub Pages](https://edukrause.github.io/gestor-financeiro/)

## Executar

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite. Para validar o TypeScript e gerar a versão de produção, use `npm run build`. Para abrir o build localmente, use `npm run preview`.

## Dados da Fase 4

- **Transações.** A listagem principal tem dez itens de demonstração em `public/transacoes.json`, com ID, descrição, categoria, data, valor e tipo. O `useEffect` do `App.tsx` chama `loadTransactions`, que usa o `fetch` nativo para ler o arquivo. O estado recebe `Transaction[]`.
- **Carregamento e erro.** A lista mostra um esqueleto animado durante a requisição. Se o arquivo estiver indisponível ou inválido, aparece uma mensagem com o botão **Tentar novamente**.
- **Metas.** As três metas continuam em um vetor local tipado em `src/data/goals.ts` e aparecem mesmo quando a consulta de transações falha.
- **Interface.** Os estilos usam variáveis CSS e media queries mobile first em 768px e 1024px. Os wireframes originais estão em `docs/`. Os controles de edição de renda e de categorias são ilustrativos. O resumo e o relatório exibem os números fixos do mês demonstrado.

## Desafios implementados

| Desafio | Como conferir |
| --- | --- |
| Persistência local | Favorite uma transação, recarregue e ative **Só favoritos**. Favoritos e preferência de tema são sincronizados com `localStorage` por `useEffect`. |
| Página de detalhe | Clique no nome de uma transação. Na rota `#/transacao/:id`, confira valor, tipo, categoria e data. Abra o mesmo endereço depois de recarregar. |
| Busca | Digite `farmacia` para encontrar **Farmácia**. A busca controlada filtra por descrição ou categoria e combina com os filtros de tipo e favoritos. |
| Esqueleto de carregamento | Use uma rede lenta no DevTools e recarregue. As linhas animadas aparecem enquanto o JSON está em trânsito. A opção de movimento reduzido do sistema desativa a animação. |
| Publicação | Abra o link do GitHub Pages e acesse uma rota de detalhe diretamente. |
| Modo escuro | Alterne o tema no cabeçalho. As cores mudam por variáveis CSS e a escolha permanece após recarregar. |

`react-router-dom` foi adicionado para a rota de detalhe. O `HashRouter` permite abrir e recarregar essa rota no GitHub Pages, que hospeda arquivos estáticos. O Vite usa a base `/gestor-financeiro/` para os recursos e para o JSON.

[Roteiro do vídeo da Fase 4](docs/roteiro-fase-4.md) · [Protótipo no Figma](https://www.figma.com/design/UknwSmhfMRSCsfGy6sUwk6/Sem-t%C3%ADtulo?node-id=0-1)
