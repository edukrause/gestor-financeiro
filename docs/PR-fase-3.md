## Fase 3: Componentes, dados e estado

**Tema do projeto:** Gestor Financeiro pessoal, com transações, metas de economia e relatório mensal.

**Vídeo explicativo:** [Fase3-Componentes-Gestor-Financeiro.mp4](https://drive.google.com/file/d/192J5GtrviY1ZBW3zDf1W8Zpu5qM1Fthb/view?usp=drivesdk)

### O que foi feito nesta fase
- Extração do cabeçalho, resumo, listagens, itens, relatório, gastos fixos e rodapé para componentes com responsabilidades separadas.
- Dez transações e três metas em vetores locais, renderizados com `map` e `key` pelo ID.
- Tipos `Transaction`, `Goal` e `TransactionFilter`, com props tipadas nos componentes que recebem dados.
- Busca por descrição/categoria e filtros de entradas/saídas, controlados por `useState` no App.
- Contador de resultados, mensagem para busca sem resultados e indicação visual do filtro ativo.
- Integração com a última versão da Fase 2 já mesclada na main, preservando o layout, o relatório separado e o modo escuro.
- CSS com variáveis e responsividade mobile first, com adaptações em 768px e 1024px.

### Decisões técnicas
- O App concentra os estados e compõe os componentes, passando dados e funções por props.
- Os itens visíveis são calculados a partir dos dados, da busca e do filtro, sem duplicar o vetor em outro estado.
- IDs estáveis identificam os itens com `key`.
- As duas listagens permanecem em vetores locais, conforme a Fase 3; backend e consumo externo não são necessários.
- Resumo e relatório são demonstrativos do mês completo e não mudam com os filtros.
- Navegação entre visão geral e relatório pelo parâmetro `pagina` da URL, preservando a solução da Fase 2 sem adicionar biblioteca de rotas.

### Desafios bonificados entregues nesta fase
- Busca: campo controlado que filtra a listagem em tempo real.
- Modo escuro da Fase 2 preservado na integração; alternância por estado e variáveis CSS.
- Os demais desafios estão separados no [PR #4](https://github.com/edukrause/gestor-financeiro/pull/4). O vídeo anexado explica a componentização e os dados e mostra os filtros na versão adicional da aplicação; não demonstra todos os seis extras.

### Dependências adicionadas e justificativa
- Nenhuma.

### Validação
- `npm run build`: TypeScript e build Vite passaram.
- `git diff --check`: passou.
- Chrome: dez transações, três metas, busca combinada com filtros, resultado vazio, modo escuro e navegação para o relatório funcionando, sem erros de execução.
- Visão geral e relatório em 320, 360, 390, 767, 768, 1023, 1024, 1280, 1440 e 1920px, sem rolagem horizontal.
- Vídeo no Drive com acesso de leitura para qualquer pessoa com o link.

### Integração
- O PR #2 da Fase 2 já foi mesclado na main.
- O commit original desta entrega (`90d38d0`) permanece no histórico. Um commit posterior integra a main e resolve os conflitos com a versão mais recente da Fase 2.
- Merge após a apresentação, conforme o fluxo da disciplina.

