# Gestor Financeiro

Página acadêmica de organização financeira pessoal, com visão geral das receitas e despesas, transações, metas e relatório mensal. Implementação da Fase 2 do TCD com React, TypeScript e CSS, baseada nos wireframes em `docs/`.

## Executar

```bash
npm install
npm run dev
```

Para validar e gerar a versão de produção: `npm run build`.

## Organização da Fase 2

- Toda a interface está em `src/App.tsx`, com dez transações e três metas escritas diretamente no JSX.
- Estilos em `src/App.css`, com variáveis CSS em `:root` e media queries para 768px e 1024px.
- Visão geral e relatório na mesma página, acessíveis pelos links do cabeçalho.
- Valores, gráficos e barras de progresso são demonstrativos e estáticos. Filtros, formulários, modais e alternância de tema ficam para a evolução do projeto com estado.
- Sem bibliotecas de componentes, backend, Tailwind ou carregamento externo de dados nesta fase.

## Layout e referências

Os três wireframes estão em `docs/`, em PDF. No celular, as seções ficam empilhadas. A partir de 768px, o resumo e as metas usam duas colunas. A partir de 1024px, o resumo usa quatro colunas e as metas ficam ao lado das transações.

A listagem principal tem dez transações, cada uma com descrição, categoria, data e valor. A secundária tem três metas, com nome, prazo, valores e progresso.

O projeto segue os conceitos de JSX semântico, classes CSS e variáveis apresentados no DAW-2026, com tema e layout próprios.

Protótipo no Figma: https://www.figma.com/design/UknwSmhfMRSCsfGy6sUwk6/Sem-t%C3%ADtulo?node-id=0-1
