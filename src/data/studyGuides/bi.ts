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
   • DIMENSÃO: Contexto, Filtros, "GroupBy" (Nome, Cidade, Mês, Ano).`,
          annotations: [
            'Star Schema: Dimensões desnormalizadas em 1 nível (Consultas rápidas).',
            'Snowflake Schema: Dimensões normalizadas em hierarquias (Economiza espaço, mas custa JOINs).',
            'Staging Area: Área técnica de limpeza intermediária sem acesso aos usuários finais.'
          ],
          diagramFormula: 'Star Schema: [Fato] <---1:N---> [Dimensão Desnormalizada]\nSnowflake: [Fato] <---1:N---> [Dimensão] <---1:N---> [Sub-Dimensão Normalizada]',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'SEFAZ-AM – Auditor Fiscal de Tributos Estaduais (Tecnologia da Informação) – 2022',
            enunciado: `Durante o projeto de modelagem dimensional de um Data Warehouse para a arrecadação tributária estadual, o arquiteto de dados avaliou a escolha entre o ==Esquema Estrela (Star Schema)== e o ==Esquema Floco de Neve (Snowflake Schema)==.

A respeito das características que diferenciam esses dois esquemas dimensionais, assinale a afirmativa CORRETA:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'No Star Schema, as tabelas de dimensão encontram-se normalizadas na terceira forma normal (3FN), reduzindo redundâncias ao custo de junções complexas.',
                correta: false,
                comentario: 'INCORRETA: O Star Schema mantém propositalmente as tabelas de dimensão DESNORMALIZADAS para acelerar o tempo de resposta das consultas analíticas com menos JOINs.'
              },
              {
                letra: 'B',
                texto: 'No Snowflake Schema, as tabelas de dimensão são mantidas totalmente desnormalizadas, enquanto a tabela fato é dividida em hierarquias subordinadas.',
                correta: false,
                comentario: 'INCORRETA: No Snowflake quem é normalizada são as tabelas de DIMENSÃO, nunca a tabela fato.'
              },
              {
                letra: 'C',
                texto: '==O Snowflake Schema normaliza as tabelas de dimensão gerando ramificações hierárquicas, o que reduz a redundância de dados mas exige junções adicionais nas consultas SQL==.',
                correta: true,
                comentario: 'CORRETA: Definição perfeita da modelagem dimensional! O esquema floco de neve (Snowflake) quebra as dimensões em sub-tabelas normalizadas (ex: DimProduto conecta em DimSubcategoria que conecta em DimCategoria). Isso economiza espaço em disco e elimina redundância, mas exige que as consultas realizem múltiplos JOINs na consulta, reduzindo o desempenho analítico em relação ao Star Schema.'
              },
              {
                letra: 'D',
                texto: 'O Star Schema não admite o uso de chaves substitutas (Surrogate Keys), exigindo obrigatoriamente as chaves primárias dos sistemas OLTP de origem.',
                correta: false,
                comentario: 'INCORRETA: O uso de Surrogate Keys (chaves numéricas inteiras sequenciais artificiais) é altamente recomendado e padrão na modelagem dimensional de Kimball.'
              },
              {
                letra: 'E',
                texto: 'A tabela fato no Snowflake Schema é dispensada, sendo as métricas financeiras calculadas dinamicamente dentro das dimensões normalizadas.',
                correta: false,
                comentario: 'INCORRETA: A tabela fato continua existindo no centro tanto no Star quanto no Snowflake.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Esquema Estrela (Star Schema)',
                papel: 'Modelo com Dimensões Desnormalizadas',
                regra: 'Cada dimensão conecta-se diretamente à tabela fato sem níveis intermediários.',
                cor: 'yellow'
              },
              {
                termo: 'Esquema Floco de Neve (Snowflake Schema)',
                papel: 'Modelo com Dimensões Normalizadas',
                regra: 'As dimensões são normalizadas em hierarquias ramificadas, exigindo mais JOINs.',
                cor: 'cyan'
              },
              {
                termo: 'reduz a redundância de dados mas exige junções adicionais',
                papel: 'Trade-off do Snowflake',
                regra: 'Menos espaço ocupado versus menor velocidade de consulta.',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. LEMBRE-SE DA GEOMETRIA: Estrela = 1 centro (Fato) e pontas diretas (Dimensões Desnormalizadas). Floco de Neve = ramificações pontiagudas (Dimensões Normalizadas).',
              '2. ANALISE O TRADE-OFF: Normalizar dimensões = menos repetição de texto, mas MUITO MAIS joins (consultas mais lentas).',
              '3. CONFIRA AS ALTERNATIVAS: A letra C sintetiza perfeitamente essa relação estrutural de causa e efeito.',
              '4. MARQUE: Letra C.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'RESUMO VISUAL: Star = 1 JOIN por dimensão (Desnormalizado / Rápido). Snowflake = Múltiplos JOINs em cascata (Normalizado / Lento).'
          }
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
   • Não Supervisionado: Não tem gabarito (Clustering / K-Means e Associação / Apriori).`,
          annotations: [
            'Drill-down: desce na hierarquia (detalha o dado).',
            'Roll-up: sobe na hierarquia (sumariza o dado).',
            'Slice fixa 1 dimensão; Dice seleciona intervalos em 2 ou mais dimensões.'
          ],
          diagramFormula: 'Drill-down: [Ano] ---> [Mês] ---> [Dia] (Aumenta Detalhe / Reduz Granularidade)\nRoll-up: [Dia] ---> [Mês] ---> [Ano] (Aumenta Agregação)',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Prefeitura de Niterói – Auditor Fiscal da Receita Municipal – 2023',
            enunciado: `Um analista de inteligência de negócios está interagindo com um cubo OLAP multidimensional contendo as dimensões Tempo, Geografia e Categoria de Produto, e a medida Faturamento.
Inicialmente, a tela exibe as vendas agregadas por ==Estado==. O analista clica sobre o estado do Rio de Janeiro e passa a visualizar as vendas detalhadas por ==Município== e, em seguida, por ==Bairro==.

As duas operações analíticas sequenciais realizadas pelo usuário sobre a dimensão Geografia correspondem tecnicamente a:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Roll-up e Dice.',
                correta: false,
                comentario: 'INCORRETA: Roll-up sobe a hierarquia (agregando); o usuário desceu nos detalhes.'
              },
              {
                letra: 'B',
                texto: '==Drill-down e Drill-down==.',
                correta: true,
                comentario: 'CORRETA: A operação de Drill-down (ou Drill-through descendente) navega de um nível menos detalhado para um nível mais detalhado ao longo de uma hierarquia dimensional predefinida. Passar de Estado para Município é um Drill-down; passar de Município para Bairro é um segundo Drill-down sucessivo.'
              },
              {
                letra: 'C',
                texto: 'Slice e Pivot.',
                correta: false,
                comentario: 'INCORRETA: Slice extrai uma fatia e Pivot gira os eixos; nenhuma dessas foi a ação primária descrita.'
              },
              {
                letra: 'D',
                texto: 'Drill-up e Slice.',
                correta: false,
                comentario: 'INCORRETA: Drill-up é sinônimo de Roll-up (agrega), o oposto do que foi feito.'
              },
              {
                letra: 'E',
                texto: 'Dice e Roll-up.',
                correta: false,
                comentario: 'INCORRETA: Não houve operação de sumarização (Roll-up).'
              }
            ],
            termosGrifados: [
              {
                termo: 'Estado -> Município -> Bairro',
                papel: 'Descida na Hierarquia Dimensional',
                regra: 'Aumenta o nível de detalhe (granularidade mais fina) = Operação de Drill-down.',
                cor: 'cyan'
              },
              {
                termo: 'duas operações analíticas sequenciais',
                papel: 'Movimento em Cadeia',
                regra: 'Cada salto para baixo na hierarquia é um Drill-down individual.',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE A DIREÇÃO DO MOVIMENTO: Estado (Macro) -> Município (Médio) -> Bairro (Micro/Detalhe).',
              '2. DEFINA O CONCEITO OLAP: Descer no detalhe = Drill-down. Subir para o resumo = Roll-up.',
              '3. CONTE OS PASSOS: Passo 1 (Estado -> Município) = 1º Drill-down; Passo 2 (Município -> Bairro) = 2º Drill-down.',
              '4. MARQUE: Letra B (Drill-down e Drill-down).'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA B',
            conclusaoPedagogica: 'MACETE DO OLAP: "Down" é descer no detalhe (dar zoom). "Up" é subir para o resumo executivo (afastar o zoom)!'
          }
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
   • ELT: Extrai -> Carrega direto na Nuvem -> Transforma usando SQL no Cloud Warehouse (Modelo Moderno!).`,
          annotations: [
            'Data Lake = Schema-on-Read; Data Warehouse = Schema-on-Write.',
            'Sem governança, o Data Lake apodrece e vira um Data Swamp.',
            'Kafka e Flink operam ingestão em Streaming contínuo; Spark/MapReduce em Batch.'
          ],
          diagramFormula: 'Data Lake: [Dados Brutos] ---> Schema-on-Read ---> [Consulta Flexível]\nData Warehouse: [Dados Estruturados] ---> Schema-on-Write ---> [Relatórios Executivos]',
          realExamQuestion: {
            banca: 'Cebraspe',
            orgaoAno: 'Polícia Federal – Perito Criminal Federal (Área 3 - Tecnologia da Informação) – 2021',
            enunciado: `No que concerne aos conceitos de Big Data, arquiteturas de armazenamento distribuído e repositórios de dados corporativos, julgue o item que se segue:

"Ao contrário dos Data Warehouses tradicionais, que exigem a definição e validação estrita prévia da estrutura e tipagem dos dados antes de sua carga física (==Schema-on-Write==), os repositórios do tipo ==Data Lake== armazenam dados brutos em formatos variados e aplicam a interpretação e estruturação somente no momento da leitura ou consulta dos dados, em um modelo denominado ==Schema-on-Read==."`,
            alternativas: [
              {
                letra: 'C',
                texto: '==CERTO==',
                correta: true,
                comentario: 'CORRETO (ITEM CERTO): Impecável! O Data Warehouse tradicional exige ETL completo com validação de esquema rígido antes da gravação (Schema-on-Write). Já o Data Lake armazena os dados em seu formato nativo bruto (JSON, Parquet, texto, logs, imagens) sem forçar um esquema antecipado; a estrutura e os tipos de dados são interpretados dinamicamente apenas no instante em que as ferramentas de analytics ou queries SQL realizam a leitura (Schema-on-Read).'
              },
              {
                letra: 'E',
                texto: 'ERRADO',
                correta: false,
                comentario: 'INCORRETO: A assertiva é irretocável e representa a distinção primordial entre DW e Data Lake.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Data Warehouses tradicionais (...) Schema-on-Write',
                papel: 'Característica do DW',
                regra: 'O esquema é imposto na gravação (Write); dados inconsistentes são rejeitados na carga.',
                cor: 'yellow'
              },
              {
                termo: 'Data Lake (...) Schema-on-Read',
                papel: 'Característica do Data Lake',
                regra: 'O dado entra bruto; o esquema só é aplicado no momento da leitura (Read).',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE AS PALAVRAS-CHAVE: DW vs Data Lake; Schema-on-Write vs Schema-on-Read.',
              '2. CONFRONTE COM A TEORIA: Data Warehouse = Write rígido. Data Lake = Read flexível no momento da consulta.',
              '3. VERIFIQUE SE HÁ PEGADINHA OU INVERSÃO: O texto associou DW a Schema-on-Write e Data Lake a Schema-on-Read de forma exata.',
              '4. MARQUE: Item CERTO.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: CERTO',
            conclusaoPedagogica: 'MEMORIZE EM 1 FRASE: DW grava com regra (Write); Lake lê com regra (Read)!'
          }
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
