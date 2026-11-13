# Roteiro do vídeo — 3 a 5 minutos

Use este roteiro depois de ler e entender o código. Grave sua tela e sua voz.

1. **0:00–0:45 — Aplicação:** apresente o tema, as dez transações e as três metas. Clique em Entradas (2 resultados), Saídas (8) e Todas (10). Digite “moradia” (3 resultados em Todas) e uma palavra inexistente (mensagem de nenhum resultado). Limpe a busca.
2. **0:45–1:30 — Dados e tipos:** abra `src/data/types.ts`, `transactions.ts` e `goals.ts`. Explique cada atributo, o uso de número para valores e os IDs.
3. **1:30–2:30 — Componentes:** mostre `TransactionList`, `TransactionItem`, `GoalList` e `GoalCard`. Explique que props trazem dados do pai para o filho; `map` transforma cada objeto em um componente; `key` permite que o React identifique cada item.
4. **2:30–3:30 — Estado:** abra `App.tsx`. `useState` guarda busca e filtro. Os callbacks atualizam esses valores; o React renderiza a tela novamente. No `TransactionList`, `filter` combina o tipo escolhido com o texto digitado. A lista filtrada é calculada, pois não precisa de outro estado.
5. **3:30–4:30 — Decisões:** explique que o resumo representa o mês todo; somente a lista muda com os filtros. Demonstre o desafio de busca, mostre os estilos e as media queries no App.css. Mostre a tela em 375px, 768px e 1024px e confira se há cortes ou rolagem horizontal.
6. **Final:** mostre o PR e seus commits. O backend Spring é independente e não faz parte da Fase 3.

## Perguntas para treinar

- Qual a diferença entre props e estado? Props são os valores recebidos; estado é a informação que o componente mantém e pode atualizar.
- Por que não usar a posição do array como key? O ID continua identificando a transação quando a lista é filtrada.
- Como adicionar uma meta? Adicione um objeto com ID único ao vetor `goals`; o map renderiza outro card.
- Como começa a página? Busca vazia e filtro `all`, exibindo os dez lançamentos.
- O que acontece ao recarregar? Busca e filtro voltam aos valores iniciais; não foi implementada persistência.

## Entrega no GitHub

A Fase 2 precisa estar concluída e integrada à main antes de entregar a Fase 3. Com acesso ao GitHub, confirme essa situação e atualize as referências remotas. A branch local da Fase 3 já contém o trabalho da Fase 2 existente.

```bash
git push -u origin fase-3-componentes
```

Abra o PR para main com o texto de `docs/PR-fase-3.md`, substituindo o campo do vídeo. Confira se a diferença do PR mostra somente a Fase 3. Após abrir o PR, não faça novos commits na branch da fase, conforme a regra da atividade. Envie os links do PR e vídeo no ambiente da disciplina.
