import { StudyGuideTopic } from '../../types';

export const BI_TOPIC: StudyGuideTopic = {
  id: 'Inteligência de Negócios (BI)',
  title: 'Inteligência de Negócios (BI) & Big Data',
  category: 'especificos_ti',
  description: 'Arquitetura de Data Warehouse (4 camadas, Kimball vs Inmon), Modelagem Dimensional (Star/Snowflake), OLAP, Data Mining, ETL/ELT e Data Lakes.',
  badge: 'Dados & Analytics (Peso Alto)',
  iconName: 'BarChart3',
  generalUsefulLinks: [
    {
      title: 'Kimball Group - Dimensional Modeling Techniques',
      url: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/',
      category: 'official',
      badgeLabel: 'Kimball Oficial',
      description: 'Guia definitivo de fatos, dimensões (SCD tipos 1, 2, 3), esquemas estrela e constelação.'
    },
    {
      title: 'Databricks - Data Lakehouse Guide',
      url: 'https://www.databricks.com/glossary/data-lakehouse',
      category: 'doc',
      badgeLabel: 'Guia Lakehouse',
      description: 'Arquitetura moderna unificando Data Lakes com a governança e transações ACID de Data Warehouses.'
    }
  ],
  lessons: [
    {
      id: 'bi-dss-arquitetura-dw',
      title: 'Data Warehouse: Arquitetura em 4 Camadas e Modelagem Dimensional',
      subtopic: 'Arquitetura de Dados & Modelagem Kimball',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Conceito de Data Warehouse (W. H. Inmon): Coleção de dados orientada por assuntos (Subject-Oriented), integrada (Integrated), não-volátil (Non-Volatile) e variável no tempo (Time-Variant), destinada a apoiar decisões gerenciais.',
        'As 4 Camadas da Arquitetura de DW: 1. Camada de Fontes de Dados (Sistemas transacionais OLTP, ERP, CRM, logs, arquivos externos); 2. Camada de Preparação / Staging Area (Área intermediária de extração, limpeza, enriquecimento e transformação - sem acesso direto aos usuários finais); 3. Camada do Data Warehouse Corporativo / Data Marts (Armazenamento central normalizado ou marts dimensionais departamentais); 4. Camada de Apresentação e Acesso (Ferramentas OLAP, relatórios, dashboards, visualizadores de BI e modelos analíticos).',
        'Abordagens Arquiteturais: Inmon (Top-down: constrói primeiro o DW corporativo normalizado em 3FN e depois deriva Data Marts) vs Kimball (Bottom-up: constrói Data Marts dimensionais integrados por um barramento de dimensões conformadas - Conformed Dimensions).',
        'Modelagem Dimensional: Tabela Fato (contém métricas numéricas quantitativas/medidas e chaves estrangeiras que apontam para as dimensões; granularidade fina e alta cardinalidade) vs Tabelas Dimensão (contêm atributos descritivos contextuais: Quem, Onde, Quando, O Quê).',
        'Esquema Estrela (Star Schema) vs Floco de Neve (Snowflake Schema): Star Schema possui dimensões desnormalizadas diretamente ligadas à Fato (queries SQL mais simples e rápidas); Snowflake Schema possui dimensões normalizadas em hierarquias com tabelas filhas (menos redundância de espaço, porém mais JOINs e menor desempenho analítico).'
      ],
      summary: `O Data Warehouse consolida dados históricos corporativos em estruturas dimensionais otimizadas para consultas analíticas complexas, distinguindo-se radicalmente dos bancos relacionais transacionais (OLTP).`,
      mnemonics: '4 PROPRIEDADES DO DW DE INMON: S-I-N-T (Subject-oriented, Integrated, Non-volatile, Time-variant).',
      examPitfalls: [
        'Bancas afirmam que os usuários finais consultam diretamente a Staging Area (FALSO: a Staging Area é restrita aos processos internos de ETL).',
        'Star Schema é desnormalizado (1 nível de dimensão); Snowflake é normalizado (dimensões ligadas a sub-dimensões).',
        'SCD (Slowly Changing Dimensions): Tipo 1 (Sobrescreve o dado antigo sem histórico); Tipo 2 (Cria nova linha com versionamento de datas/flags para preservar histórico completo).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Star Schema vs Snowflake Schema',
          topicTag: '✍️ Modelagem Dimensional',
          paperStyle: 'grid',
          colorTheme: 'yellow',
          headerNote: '📊 Estrutura de Tabelas em BI',
          handwrittenContent: `1) STAR SCHEMA (Esquema Estrela):
   • Centro: Tabela FATO (Vendas: Qtd, ValorTotal, FK_Cliente, FK_Tempo, FK_Produto).
   • Pontas: Tabelas DIMENSÃO desnormalizadas (DimCliente, DimTempo, DimProduto).
   • Vantagem: Joins simples (1 nível), consultas ultra-rápidas!

2) SNOWFLAKE SCHEMA (Floco de Neve):
   • As dimensões são NORMALIZADAS em sub-tabelas.
   • Ex: DimProduto -> Categoria -> Subcategoria.
   • Desvantagem: Exige múltiplos JOINs pesados para responder uma query.

3) TABELA FATO vs DIMENSÃO:
   • FATO: Números, Métricas, Medidas (Soma de Vendas, Quantidade).
   • DIMENSÃO: Contexto, Filtros, "GroupBy" (Nome, Cidade, Mês, Ano).`
        }
      ],
      usefulLinks: [
        {
          title: 'Modelagem Dimensional e Esquemas Estrela - Guia Completo',
          url: 'https://www.kimballgroup.com/',
          category: 'official',
          badgeLabel: 'Kimball Group',
          description: 'Padrões de design dimensional, chaves substitutas (Surrogate Keys) e granularidade.'
        }
      ],
      sampleQuestion: {
        banca: 'Cesgranrio',
        statement: 'Em um projeto de Data Warehouse que adota a modelagem dimensional, a principal distinção estrutural entre o Esquema Estrela (Star Schema) e o Esquema Floco de Neve (Snowflake Schema) reside no fato de que:',
        answer: 'No Snowflake Schema as tabelas de dimensão são normalizadas, enquanto no Star Schema elas permanecem desnormalizadas.',
        explanation: 'O Snowflake normaliza as tabelas de dimensão para reduzir redundâncias, gerando uma estrutura hierárquica com múltiplos níveis de relacionamento.'
      }
    },
    {
      id: 'bi-olap-data-mining-dashboards',
      title: 'Tecnologia OLAP, Operações em Cubos e Mineração de Dados',
      subtopic: 'Processamento Analítico & Data Mining',
      readTimeMinutes: 9,
      keyTakeaways: [
        'OLTP (Online Transaction Processing - Bancos Transacionais operacionais, 3FN, alta concorrência de INSERT/UPDATE, foco no dia a dia) vs OLAP (Online Analytical Processing - Bancos Dimensionais, leitura massiva, agregação de dados históricos para tomada de decisão).',
        'Tipos de Arquitetura OLAP: MOLAP (Multidimensional OLAP - dados pré-calculados em matrizes/cubos multidimensionais proprietários; performance máxima de consulta); ROLAP (Relational OLAP - dados armazenados em banco relacional padrão via SQL; suporta volumes maiores); HOLAP (Hybrid OLAP - agregações em MOLAP e dados detalhados na base relacional ROLAP).',
        'As 5 Operações Fundamentais em Cubos OLAP: 1. Drill-down (Desce o nível de detalhe: de Ano -> Mês -> Dia); 2. Roll-up / Drill-up (Sobe o nível de agregação: de Cidade -> Estado -> País); 3. Slice (Corta 1 fatia fixando 1 única dimensão, ex: Vendas de 2024); 4. Dice (Subcubo selecionando valores em 2 ou mais dimensões); 5. Pivot / Rotate (Gira os eixos de visualização da matriz).',
        'Tarefas de Mineração de Dados (Data Mining): Classificação (Supervisionada - categoriza em classes pré-definidas: Árvores de Decisão, SVM, Naive Bayes), Regressão (Supervisionada - prevê valores numéricos contínuos), Agrupamento / Clustering (Não Supervisionada - descobre grupos similares naturais: K-Means, DBSCAN), Associação (identifica itens comprados juntos: Algoritmo Apriori - Suporte, Confiança e Lift), Detecção de Anomalias/Outliers.'
      ],
      summary: `As ferramentas OLAP permitem a navegação interativa multidimensional por cubos de dados através de operações intuitivas como drill-down, slice e pivot, complementadas por algoritmos preditivos de data mining.`,
      mnemonics: 'OPERAÇÕES OLAP: Drill-down (Detalha), Roll-up (Agrega), Slice (Fatia 1 dimensão), Dice (Fatia múltiplas), Pivot (Gira).',
      examPitfalls: [
        'Drill-down AUMENTA o detalhe (diminui a granularidade); Roll-up DIMINUI o detalhe (aumenta o nível de sumarização).',
        'Slice fixa 1 dimensão (ex: só o estado de SP); Dice seleciona intervalos em 2 ou mais dimensões (subcubo 3D).',
        'Classificação é aprendizado SUPERVISIONADO (tem rótulos prévios); Agrupamento (Clustering) é NÃO SUPERVISIONADO (não tem rótulos).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro de Giz: As 5 Operações OLAP nos Dedos',
          topicTag: '✍️ Cubos OLAP',
          paperStyle: 'grid',
          colorTheme: 'cyan',
          headerNote: '🧊 Como manipular cubos de dados',
          handwrittenContent: `1) OPERAÇÕES OLAP:
   • DRILL-DOWN: "Dar um zoom!" -> De Ano para Mês -> De Mês para Dia.
   • ROLL-UP:    "Afastar o zoom!" -> De Loja para Região -> De Região para País.
   • SLICE:      "Fatiar 1 dimensão!" -> Filtrar apenas Ano = 2025.
   • DICE:       "Recortar um bloquinho!" -> Filtrar Ano in (2024, 2025) E Região in (Sul, Sudeste).
   • PIVOT:      "Girar a tabela!" -> Transformar Linhas em Colunas.

2) APRENDIZADO EM DATA MINING:
   • Supervisionado: Tem gabarito (Classificação e Regressão).
   • Não Supervisionado: Não tem gabarito (Clustering / K-Means e Associação / Apriori).`
        }
      ],
      usefulLinks: [
        {
          title: 'OLAP Operations and Architectures Explained',
          url: 'https://en.wikipedia.org/wiki/Online_analytical_processing',
          category: 'doc',
          badgeLabel: 'Enciclopédia Técnica',
          description: 'Comparações técnicas entre MOLAP, ROLAP e matrizes multidimensionais.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Em um sistema OLAP, a operação que permite a um diretor visualizar o faturamento consolidado por país após estar analisando os dados detalhados por cidade é denominada:',
        answer: 'Roll-up (ou Drill-up)',
        explanation: 'A operação de Roll-up realiza a agregação/sumarização dos dados, subindo na hierarquia dimensional (de cidade para país).'
      }
    },
    {
      id: 'bi-datalake-bigdata-ingestao',
      title: 'Data Lake, Big Data (5 Vs), ETL vs ELT e Pipelines de Ingestão',
      subtopic: 'Engenharia de Dados Moderna',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Data Lake: Repositório centralizado escalável que armazena dados em seu formato nativo bruto (estruturados, semiestruturados como JSON/XML, e não estruturados como PDFs, áudios e imagens) usando o paradigma Schema-on-Read. Se mal governado e sem catálogo de metadados, degrada-se em um Data Swamp (pântano de dados).',
        'Data Warehouse vs Data Lake: DW usa Schema-on-Write (dados limpos e estruturados antes de salvar); Data Lake usa Schema-on-Read (dados brutos gravados primeiro, esquema aplicado na hora da leitura).',
        'Os 5 Vs do Big Data: Volume (escala massiva de terabytes/petabytes), Velocidade (geração e ingestão em tempo real), Variedade (múltiplos formatos estruturados e não estruturados), Veracidade (qualidade e confiabilidade dos dados), Valor (o impacto e retorno para o negócio).',
        'ETL vs ELT: ETL (Extract, Transform, Load - tradicional de DWs físicos com computação dedicada prévia) vs ELT (Extract, Load, Transform - moderno de Cloud Data Warehouses como BigQuery/Snowflake, carregando tudo no lake/warehouse e transformando via poder de processamento em nuvem distribuído).',
        'Ingestão Batch (em lote - processamento periódico em grandes volumes: Apache Spark, MapReduce) vs Ingestão Streaming (tempo real contínuo evento a evento: Apache Kafka, Apache Flink).'
      ],
      summary: `A engenharia de dados contemporânea utiliza Data Lakes em nuvem com arquitetura ELT e ingestão distribuída via streaming para lidar com os 5 Vs do Big Data com alta flexibilidade analítica.`,
      mnemonics: '5 VS DO BIG DATA: Volume, Velocidade, Variedade, Veracidade e Valor.',
      examPitfalls: [
        'Data Lake aplica Schema-on-Read (não exige estrutura antes de gravar); Data Warehouse exige Schema-on-Write.',
        'Data Swamp é o Data Lake que perdeu sua governança, catalogação e linhagem de dados, tornando-se inutilizável.',
        'ELT é viável hoje devido ao barateamento do armazenamento em nuvem e ao poder massivo de processamento paralelo dos modernos cloud warehouses.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Data Lake vs Data Warehouse & ETL x ELT',
          topicTag: '✍️ Big Data & Engenharia de Dados',
          paperStyle: 'lined',
          colorTheme: 'rose',
          headerNote: '🌊 Modern Data Stack',
          handwrittenContent: `1) DATA LAKE vs DATA WAREHOUSE:
   • Data Lake:
     -> Guarda TUDO (JSON, CSV, Imagens, Áudios, Logs brutos).
     -> Schema-on-Read (Esquema definido só na hora que for rodar o select).
     -> Risco: Se não tiver governança vira Data Swamp (pântano!).

   • Data Warehouse:
     -> Guarda dados estruturados e limpos (Relacional/Dimensional).
     -> Schema-on-Write (Os dados só entram se estiverem no formato exato).

2) ETL vs ELT:
   • ETL: Extrai -> Transforma fora -> Carrega pronto no DW (Modelo tradicional).
   • ELT: Extrai -> Carrega direto na Nuvem -> Transforma usando SQL no Cloud Warehouse (Modelo Moderno!).`
        }
      ],
      usefulLinks: [
        {
          title: 'Data Lake Architecture Guide - AWS',
          url: 'https://aws.amazon.com/big-data/datalakes-and-analytics/',
          category: 'official',
          badgeLabel: 'AWS Guide',
          description: 'Diferenças entre Data Lakes, Data Warehouses e Lakehouses.'
        }
      ],
      sampleQuestion: {
        banca: 'Cebraspe',
        statement: 'Nos Data Lakes, os dados são estruturados e normalizados de acordo com um esquema pré-definido rigoroso antes de serem armazenados no repositório, adotando a abordagem Schema-on-Write.',
        answer: 'ERRADO',
        explanation: 'Os Data Lakes armazenam os dados em seu estado bruto original sem esquema prévio rígido, adotando o conceito de Schema-on-Read (a formatação e o esquema ocorrem no momento da leitura/análise).'
      }
    }
  ]
};
