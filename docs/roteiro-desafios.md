# Demonstração dos desafios — 3 a 5 minutos

1. Abra a aplicação publicada e explique o tema. Mostre dez transações e três metas, e onde estão os componentes, os tipos e o `map` com `key` estável.
2. Digite “mercado”. Combine com o filtro Entradas para mostrar a mensagem sem resultados; volte para Todas e limpe a busca. Explique o campo controlado e como o estado no App chega à lista por props.
3. Favorite Mercado, marque “Só favoritos” e recarregue. Explique a leitura inicial e o `useEffect` que sincroniza o `localStorage`. Desmarque o filtro para mostrar os demais itens.
4. Clique no nome Mercado. Mostre `#/transacao/8`, seus atributos e o botão de favorito. Recarregue o detalhe. Explique `HashRouter`, rota `/transacao/:id` e `useParams`. Use `#/transacao/999` para mostrar o tratamento de ID inexistente.
5. Volte à lista, alterne o modo escuro e recarregue. Mostre o estado no App, `data-theme`, as variáveis CSS e a preferência persistida.
6. No DevTools, aba Network, desative o cache e selecione uma rede lenta. Recarregue para mostrar as linhas skeleton animadas. Explique o `fetch` de `public/transacoes.json` dentro de `useEffect`, o estado tipado e a listagem de metas local. Não há atraso artificial: numa rede rápida o skeleton pode aparecer por pouco tempo.
7. Bloqueie a URL `transacoes.json` no DevTools e recarregue. Mostre o erro compreensível, desbloqueie a URL e clique em “Tentar novamente”. Restaure a rede normal após a demonstração.
8. Mostre o relatório separado da visão geral e a adaptação da interface em celular e desktop. Explique que o resumo e o relatório são demonstrativos do mês completo.

## Decisões para explicar

- Somente `react-router-dom` foi acrescentado, para o desafio permitido de detalhe por rota.
- O `HashRouter` funciona em hospedagem estática e ao recarregar links de detalhe.
- Favoritos armazenam IDs e são compartilhados pela lista e pelo detalhe.
- A fonte JSON em `public/` antecipa a Fase 4 para permitir skeleton, erro e nova tentativa reais. As metas continuam no vetor local.
- O skeleton respeita a preferência por menos movimento e tem mensagem acessível.
- Dados de armazenamento inválidos ou acesso bloqueado não impedem o uso da aplicação.

## Antes da entrega

- Grave com sua própria voz e explique somente o que compreende.
- Declare os seis desafios na descrição do PR; a bonificação máxima continua em +2.
- Publique o vídeo com acesso liberado e inclua o link no PR e no ambiente da disciplina.
- Este trabalho adicional está separado do PR #3 para preservar o estado já entregue. Confirme com o professor qual fase receberá a demonstração; a Fase 4 exige sua branch e PR próprios.
