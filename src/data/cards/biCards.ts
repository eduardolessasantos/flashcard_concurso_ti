import { Flashcard } from '../../types';

export const BI_CARDS: Flashcard[] = [
  {
    id: 'bi-cebraspe-01',
    banca: 'Cebraspe',
    topico: 'Inteligência de Negócios (BI)',
    subtopico: 'Data Lake vs Data Warehouse',
    tipo: 'certo_errado',
    gabaritoOficial: 'ERRADO',
    pergunta: 'Em arquiteturas de Big Data, os Data Lakes exigem a aplicação rigorosa do paradigma Schema-on-Write, de modo que os dados devem ser limpos, transformados e estruturados previamente antes de sua persistência no repositório.',
    resposta: 'ERRADO',
    explicacao: 'Incorreto! Data Lakes utilizam o paradigma Schema-on-Read (os dados brutos em formatos estruturados, semiestruturados ou não estruturados são armazenados primeiro em formato original; a estruturação/esquema é aplicada apenas no momento da leitura/consulta). Quem adota Schema-on-Write são os Data Warehouses tradicionais.',
    concurso: 'Dataprev - Cientista de Dados',
    ano: 2023,
    dica: 'Data Lake = Schema-on-Read (guarda bruto primeiro). Data Warehouse = Schema-on-Write (limpa antes).',
    statusSRS: 'novo'
  },
  {
    id: 'bi-cebraspe-02',
    banca: 'Cebraspe',
    topico: 'Inteligência de Negócios (BI)',
    subtopico: 'Data Warehouse - Propriedades de Inmon',
    tipo: 'certo_errado',
    gabaritoOficial: 'CERTO',
    pergunta: 'Segundo a definição clássica de W. H. Inmon, um Data Warehouse corporativo é uma coleção de dados orientada por assunto, integrada, não volátil e variável no tempo, destinada a apoiar o processo de tomada de decisões gerenciais.',
    resposta: 'CERTO',
    explicacao: 'Correto. As 4 propriedades fundamentais de Inmon para o Data Warehouse:\n1. Orientado a Assuntos (Subject-oriented - focado em áreas de negócio como vendas, clientes);\n2. Integrado (Integrated - padrões consistentes de nomes, unidades e códigos vindos de várias fontes);\n3. Não-volátil (Non-volatile - dados históricos são apenas inseridos e lidos, não sofrem updates transacionais);\n4. Variável no tempo (Time-variant - mantém histórico de séries temporais com registros datados).',
    concurso: 'SERPRO - Analista de Tecnologia',
    ano: 2023,
    dica: 'Mnemônico de Inmon: S-I-N-T (Subject-oriented, Integrated, Non-volatile, Time-variant).',
    statusSRS: 'novo'
  },
  {
    id: 'bi-fgv-01',
    banca: 'FGV',
    topico: 'Inteligência de Negócios (BI)',
    subtopico: 'Modelagem Dimensional - Star vs Snowflake',
    tipo: 'conceitual',
    pergunta: 'Na modelagem dimensional para Data Warehouses, qual a diferença estrutural e de performance em consultas entre o Esquema Estrela (Star Schema) e o Esquema Floco de Neve (Snowflake Schema)?',
    resposta: 'Star Schema possui dimensões desnormalizadas (consultas mais rápidas com poucos JOINs); Snowflake normaliza as dimensões em hierarquias (menos redundância, porém mais JOINs e menor velocidade).',
    explicacao: '• Star Schema: A tabela Fato fica no centro ligada diretamente a tabelas de Dimensão completamente desnormalizadas (1 nível). Vantagem: Queries SQL simples e execução veloz com menos junções.\n• Snowflake Schema: As dimensões são normalizadas em sub-dimensões hierárquicas (ex: Produto -> Categoria -> Departamento). Vantagem: Economia de espaço e integridade; Desvantagem: Consultas mais lentas devido a múltiplos JOINs complexos.',
    concurso: 'Receita Federal - Auditor Fiscal de TI',
    ano: 2023,
    dica: 'Star = Desnormalizado (Rápido). Snowflake = Normalizado (Mais JOINs).',
    statusSRS: 'novo'
  },
  {
    id: 'bi-fgv-02',
    banca: 'FGV',
    topico: 'Inteligência de Negócios (BI)',
    subtopico: 'Operações OLAP',
    tipo: 'conceitual',
    pergunta: 'Quais são as operações analíticas básicas executadas sobre cubos de dados OLAP e o que fazem o Drill-down, Roll-up, Slice e Dice?',
    resposta: 'Drill-down detalha os dados; Roll-up agrega/sumariza; Slice seleciona 1 fatia fixando 1 dimensão; Dice extrai um subcubo com múltiplas dimensões.',
    explicacao: '• Drill-down (ou Drill-through): Aumenta o nível de detalhe descendo na hierarquia (ex: de Ano para Mês).\n• Roll-up (ou Drill-up): Sumariza/agrega dados subindo na hierarquia (ex: de Cidade para Estado).\n• Slice: Corta o cubo fixando uma única dimensão (ex: filtro onde Ano = 2024).\n• Dice: Cria um subcubo recortando valores em duas ou mais dimensões (ex: Região = "Sul" E Trimestre = "T1").\n• Pivot (ou Rotate): Gira a visualização para alternar linhas e colunas.',
    concurso: 'TCU - Auditor Federal de Controle Externo',
    ano: 2022,
    dica: 'Drill-down = Zoom In. Roll-up = Zoom Out. Slice = 1 dimensão. Dice = Múltiplas dimensões.',
    statusSRS: 'novo'
  },
  {
    id: 'bi-cesgranrio-01',
    banca: 'Cesgranrio',
    topico: 'Inteligência de Negócios (BI)',
    subtopico: 'Data Mining - Tarefas e Algoritmos',
    tipo: 'conceitual',
    pergunta: 'Na Mineração de Dados (Data Mining), qual a diferença essencial entre as tarefas de Classificação, Regressão, Agrupamento (Clustering) e Associação?',
    resposta: 'Classificação e Regressão são supervisionadas (prevêem classes discretas e números contínuos); Clustering é não-supervisionado (grupos naturais); Associação descobre regras de coocorrência de itens.',
    explicacao: '• Classificação (Supervisionada): Prevê rótulos discretos pré-definidos (ex: Cliente Bom vs Mau pagador - Árvores de Decisão, SVM, Naive Bayes).\n• Regressão (Supervisionada): Prevê valores numéricos contínuos (ex: Previsão de faturamento - Regressão Linear).\n• Agrupamento / Clustering (Não-supervisionada): Descobre agrupamentos naturais intrínsecos sem rótulo prévio (ex: Segmentação de clientes - K-Means, DBSCAN).\n• Associação: Descobre relações de compra conjunta (ex: Quem compra fralda compra cerveja - Algoritmo Apriori, métricas de Suporte e Confiança).',
    concurso: 'Petrobras - Ciência de Dados',
    ano: 2024,
    dica: 'Supervisionado = Tem gabarito (Classificação/Regressão). Não Supervisionado = Sem gabarito (Clustering/K-Means).',
    statusSRS: 'novo'
  }
];
