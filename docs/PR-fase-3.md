## Fase 3: Componentes, dados e estado

**Tema do projeto:** Gestor Financeiro pessoal, com transações e metas.

**Vídeo explicativo:** PREENCHER COM O LINK DO VÍDEO DO ALUNO ANTES DA ENTREGA

### O que foi feito nesta fase
- Extração do cabeçalho, resumo, listagens, itens, relatório, gastos fixos e rodapé para componentes.
- Dez transações e três metas em vetores locais, renderizados com map e key por ID.
- Tipos dos itens e props de todos os componentes que recebem dados.
- Busca por descrição/categoria e filtro de entradas/saídas com useState no App.
- Contagem dos resultados, mensagem para busca sem resultados e botões com indicação visual do filtro ativo.
- Preservação do CSS e dos breakpoints de 768px e 1024px.

### Decisões técnicas
- App centraliza o estado e passa dados e callbacks por props.
- IDs estáveis identificam cada item com key.
- Busca e filtro se combinam; os resultados são derivados dos dados, sem estado duplicado.
- Resumo e relatório mostram os valores do mês completo e a interface informa essa escolha.
- Os dados permanecem locais, conforme a Fase 3; o backend adicional está separado desta entrega.

### Desafios bonificados entregues nesta fase
- Busca: campo de texto controlado que filtra a listagem em tempo real.

### Dependências adicionadas e justificativa
- Nenhuma.

### Validação
- npm run build (TypeScript e build Vite): passou.
- git diff --check: passou.
- Roteiro de conferência manual em docs/roteiro-fase-3.md; a interação no navegador deve ser demonstrada no vídeo.
