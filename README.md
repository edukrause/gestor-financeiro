# Gestor Financeiro

Aplicação de organização financeira pessoal com transações, metas de economia e relatório mensal, desenvolvida com React, TypeScript e CSS.

## Executar

```bash
npm install
npm run dev
```

`npm run build` verifica o TypeScript e gera a versão de produção. `npm run preview` serve essa versão.

## Fase 3: componentes, dados e estado

- `src/components/`: cabeçalho, resumo financeiro, listagens, itens, relatório, gastos fixos e rodapé.
- `src/data/types.ts`: tipos `Transaction`, `Goal` e `TransactionFilter`; props que recebem dados também são tipadas.
- `src/data/transactions.ts`: vetor local com dez transações, cada uma com ID, tipo, descrição, categoria, data e valor.
- `src/data/goals.ts`: vetor local com três metas. As duas listagens usam `map` e `key` pelo ID.
- `App.tsx` guarda os estados da busca, do filtro e do tema, e compõe os componentes passando dados e funções por props.
- Busca controlada por descrição ou categoria, combinada com filtros de entradas/saídas, contagem de resultados e mensagem para busca vazia.
- Resumo e relatório são demonstrativos do mês completo e não mudam com a busca.
- CSS em `src/App.css`, com variáveis e media queries em 768px e 1024px. O modo escuro e o relatório separado da última versão da Fase 2 foram preservados na integração com a `main`.
- Nenhuma dependência adicional. Dados locais; backend não é necessário para executar a entrega.

## Entrega e vídeo

- PR da Fase 3: https://github.com/edukrause/gestor-financeiro/pull/3
- Vídeo: https://drive.google.com/file/d/192J5GtrviY1ZBW3zDf1W8Zpu5qM1Fthb/view?usp=drivesdk
- Roteiro: `docs/roteiro-fase-3.md`.

A versão original do PR foi preservada no histórico em `90d38d0`; o commit de integração posterior resolve os conflitos com a Fase 2, preservando o layout, o relatório separado e o modo escuro.

Os demais desafios estão no PR separado https://github.com/edukrause/gestor-financeiro/pull/4 e na aplicação https://edukrause.github.io/gestor-financeiro/. A leitura de JSON, o skeleton, as rotas de detalhe e os favoritos pertencem à evolução adicional; esta branch mantém as duas listagens em vetores locais.

O envio dos links no ambiente da disciplina continua sendo feito pelo aluno. O merge deve ocorrer após a apresentação, conforme o regulamento.

Protótipo: https://www.figma.com/design/UknwSmhfMRSCsfGy6sUwk6/Sem-t%C3%ADtulo?node-id=0-1
