# Gestor Financeiro

Página de organização financeira pessoal com transações, metas e relatório mensal. Fase 3 do TCD: React, TypeScript e CSS, preservando os wireframes em `docs/` e o layout da Fase 2.

## Executar

```bash
npm install
npm run dev
```

Validação e produção: `npm run build`. Prévia da produção: `npm run preview`.

## Componentes, dados e estado

- `src/components/`: Header, Summary, TransactionList, TransactionItem, GoalList, GoalCard, FixedCosts, Report e Footer.
- `src/data/types.ts`: tipos `Transaction`, `Goal` e `TransactionFilter`.
- `src/data/transactions.ts`: dez transações com ID, descrição, categoria, data, valor e tipo.
- `src/data/goals.ts`: três metas com ID, nome, prazo, valor guardado e objetivo.
- As duas listagens usam `map`, `key` pelo ID e props tipadas.
- `App.tsx` guarda a busca e o filtro em `useState` e passa os valores e funções para os componentes.
- A busca controlada filtra descrição ou categoria em tempo real; pode ser combinada com Todas, Entradas ou Saídas. Há contador de resultados e mensagem para busca vazia.
- Resumo e relatório continuam demonstrativos do mês completo, independentemente dos filtros da lista.
- CSS em `src/App.css`, variáveis em `:root`, mobile first e media queries para 768px e 1024px.
- Desafio bonificado: busca em tempo real. Nenhuma dependência adicionada.

A Fase 3 usa somente vetores locais. A API Spring é um projeto adicional separado e não é necessária para executar esta entrega.

## Entrega

Branch: `fase-3-componentes`. Modelo da descrição: `docs/PR-fase-3.md`. Roteiro de vídeo: `docs/roteiro-fase-3.md`.

O vídeo precisa ser gravado pelo aluno, publicado com acesso liberado e incluído na descrição do PR e no ambiente da disciplina. Não há vídeo gravado automaticamente.

A referência local de `main` ainda contém a Fase 1; a Fase 3 foi preparada sobre a Fase 2 existente para preservar o trabalho anterior. Antes da entrega, confirme no GitHub o merge da Fase 2 e a base do PR da Fase 3. Não houve atualização remota nesta sessão porque o terminal não conseguiu resolver o domínio do GitHub.

As instruções gerais dizem 18h, enquanto a atividade específica da Fase 3 informa 13/11/2026 às 23h. Para evitar essa divergência, entregue até 18h.

Protótipo: https://www.figma.com/design/UknwSmhfMRSCsfGy6sUwk6/Sem-t%C3%ADtulo?node-id=0-1
