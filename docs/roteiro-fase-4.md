# Roteiro da Fase 4

Gravação de tela de **3 a 5 minutos** com sua voz. Abra a aplicação, o código e o DevTools antes de gravar. Use os tempos abaixo como guia.

| Tempo | O que mostrar e explicar |
| --- | --- |
| 0:00–0:35 | Abra a aplicação publicada. Mostre o resumo de novembro de 2026, as dez transações, as três metas e a reorganização da página ao diminuir a largura. |
| 0:35–1:25 | Abra `public/transacoes.json`, `src/App.tsx` e `src/data/loadTransactions.ts`. Aponte o `useEffect`, o `fetch` e o `useState<Transaction[]>`. Explique que o JSON é servido em uma URL, enquanto as metas vêm do vetor `goals`. |
| 1:25–2:10 | No DevTools, ative uma rede lenta e recarregue para mostrar o esqueleto. Bloqueie só a URL de `transacoes.json` e recarregue para mostrar a mensagem de erro com as metas ainda visíveis. Desbloqueie a URL e clique em **Tentar novamente**. |
| 2:10–3:10 | Digite `farmacia`, combine com o filtro **Saídas** e mostre o resumo se atualizar. Clique em **Farmácia** e explique como `useParams` identifica a transação. Favorite na página de detalhe, recarregue, volte à lista e marque **Só favoritos**. |
| 3:10–3:55 | Alterne para o modo escuro e recarregue. Mostre onde o efeito grava favoritos e tema no `localStorage`. Abra a URL direta de uma transação no GitHub Pages e explique por que o `HashRouter` permite recarregá-la. |

## Pontos para explicar na apresentação

- O efeito executa a requisição na montagem. O botão de retentativa incrementa `attempt`, uma dependência do efeito, e inicia outra requisição.
- O carregamento começa antes de o JSON chegar. O estado de erro aparece se o servidor falhar ou os dados tiverem formato inválido. O `AbortController` cancela a requisição cuja execução foi encerrada.
- O `useState` mantém a seleção de favoritos durante a execução. O `localStorage` conserva os IDs entre visitas, e o `useEffect` sincroniza o navegador quando a seleção muda.
- A opção por um JSON em `public/` permite demonstrar o fluxo completo de rede em qualquer cópia do projeto. A fonte tem dados de exemplo.

## Entrega

1. Publique a gravação no YouTube como não listada ou no Google Drive com leitura para qualquer pessoa com o link.
2. Complete o [modelo de PR](PR-fase-4.md) com o link da gravação. Abra o PR de `fase-4-json` para `main` até **27/11/2026, às 18h**, conforme o enunciado.
3. Envie o link do PR e o link do vídeo no ambiente da disciplina.
