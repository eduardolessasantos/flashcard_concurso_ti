import { StudyGuideTopic } from '../../types';

export const DATABASES_TOPIC: StudyGuideTopic = {
  id: 'Bancos de Dados',
  title: 'Bancos de Dados Relacionais e NoSQL',
  category: 'especificos_ti',
  description: 'Normalização (1FN até BCNF), Transações ACID, Índices B+Tree, Isolamento SQL e Bancos NoSQL (Documento, Chave-Valor, Grafos).',
  badge: 'Peso Máximo em TI',
  iconName: 'Database',
  generalUsefulLinks: [
    {
      title: 'PostgreSQL Official Documentation',
      url: 'https://www.postgresql.org/docs/',
      category: 'official',
      badgeLabel: 'Docs PostgreSQL',
      description: 'Documentação completa de transações, índices B-Tree, particionamento e comandos SQL.'
    },
    {
      title: 'Use The Index, Luke!',
      url: 'https://use-the-index-luke.com/',
      category: 'doc',
      badgeLabel: 'Guia de Índices',
      description: 'Explicação aprofundada de como índices B-Tree funcionam por dentro e como evitar Full Table Scans.'
    }
  ],
  lessons: [
    {
      id: 'bd-normalizacao',
      title: 'Formas Normais (1FN, 2FN, 3FN e BCNF)',
      subtopic: 'Modelagem Relacional',
      readTimeMinutes: 8,
      keyTakeaways: [
        '1FN: Eliminar atributos multivalorados e compostos (valores atômicos; tuplas únicas).',
        '2FN: Estar na 1FN E eliminar Dependências Parciais (todo atributo não-chave deve depender de TODA a chave primária composta).',
        '3FN: Estar na 2FN E eliminar Dependências Transitivas (atributos não-chave não podem depender de outros atributos não-chave).',
        'BCNF (Boyce-Codd): Para toda dependência funcional não trivial X -> Y, X DEVE ser uma Superchave.'
      ],
      summary: `A normalização visa eliminar redundâncias indesejadas e anomalias de inserção, atualização e exclusão em tabelas relacionais.`,
      mnemonics: '"The key, the whole key, and nothing but the key, so help me Codd" (1FN: The key; 2FN: The whole key; 3FN: Nothing but the key).',
      examPitfalls: [
        'Se a chave primária for SIMPLES (apenas uma coluna), a tabela na 1FN já está AUTOMATICAMENTE na 2FN!',
        '3FN vs BCNF: BCNF resolve casos raros onde existem múltiplas chaves candidatas sobrepostas.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: O Juramento das Formas Normais de Edgar F. Codd',
          topicTag: '✍️ Frase Sagrada',
          paperStyle: 'lined',
          colorTheme: 'yellow',
          headerNote: '📜 O macete internacional de Normalização',
          handwrittenContent: `"Every non-key attribute must depend on:
1) The KEY (1FN - Atributos atômicos e identificados pela chave)
2) The WHOLE KEY (2FN - Não pode depender só de METADE de chave composta!)
3) And NOTHING BUT THE KEY (3FN - Não pode depender de outro atributo comum!)
... So help me Codd!"

Resumo Relâmpago:
• 1FN -> Nada de arrays ou campos repetidos em uma mesma célula (atomicidade).
• 2FN -> Sem dependência PARCIAL da chave composta. (Se a PK tem 1 coluna só, já está na 2FN!).
• 3FN -> Sem dependência TRANSITIVA (A -> B -> C).`,
          annotations: [
            'BCNF: Toda determinante é uma Superchave.',
            'Desnormalização é usada em Data Warehouses para leitura rápida.',
            'Dica de ouro: Se a PK é simples (1 campo só), não pode haver dependência parcial (já está na 2FN!).'
          ],
          diagramFormula: '1FN: Valores Atômicos\n2FN: 1FN + Sem Dependência Parcial (Todo não-chave depende de TODA a PK composta)\n3FN: 2FN + Sem Dependência Transitiva (Atributo não-chave depende só da PK)',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'SEFAZ-MT – Auditor Fiscal da Receita Estadual (Tecnologia da Informação) – 2023',
            enunciado: `Considere uma relação relacional \`MatriculaCurso\` definida com o seguinte esquema e restrições:

\`\`\`sql
MatriculaCurso (num_inscricao, cod_curso, data_matricula, nome_aluno, nome_curso, carga_horaria)
\`\`\`

Sabe-se que:
- A chave primária é composta por =={num_inscricao, cod_curso}==;
- A relação já atende a todos os requisitos da Primeira Forma Normal (1FN);
- São válidas as seguintes dependências funcionais:
  1) \`{num_inscricao, cod_curso} -> data_matricula\`
  2) ==\`num_inscricao -> nome_aluno\`==
  3) ==\`cod_curso -> {nome_curso, carga_horaria}\`==

Com base unicamente nessas informações sobre o modelo relacional, a relação \`MatriculaCurso\`:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Está na 3FN, mas não alcança a BCNF.',
                correta: false,
                comentario: 'INCORRETA: A tabela nem sequer atinge a 2FN, pois possui dependências funcionais parciais.'
              },
              {
                letra: 'B',
                texto: 'Está na 2FN, mas viola a 3FN por apresentar dependência transitiva.',
                correta: false,
                comentario: 'INCORRETA: A 2FN exige a eliminação total de dependências parciais. Como \`nome_aluno\` depende apenas de \`num_inscricao\` (e não da chave primária inteira), ela está violando frontalmente a 2FN.'
              },
              {
                letra: 'C',
                texto: '==Viola a 2FN porque apresenta atributos não-chave que dependem parcialmente da chave primária composta==.',
                correta: true,
                comentario: 'CORRETA: A chave primária é composta por \`{num_inscricao, cod_curso}\`. Para estar na 2FN, TODO atributo não-chave deveria depender da chave inteira. Como \`nome_aluno\` depende apenas de \`num_inscricao\`, e \`nome_curso\` depende apenas de \`cod_curso\`, temos dependências parciais explícitas, violando a Segunda Forma Normal!'
              },
              {
                letra: 'D',
                texto: 'Viola a 1FN, pois não é permitido que uma tabela possua duas colunas derivadas.',
                correta: false,
                comentario: 'INCORRETA: O enunciado afirma textualmente que a relação já atende a todos os requisitos da 1FN (atributos atômicos).'
              },
              {
                letra: 'E',
                texto: 'Está na BCNF (Forma Normal de Boyce-Codd), pois todas as dependências são funcionais.',
                correta: false,
                comentario: 'INCORRETA: Para estar na BCNF, todo determinante deve ser uma superchave. Aqui, \`num_inscricao\` e \`cod_curso\` sozinhos não são superchaves.'
              }
            ],
            termosGrifados: [
              {
                termo: '{num_inscricao, cod_curso}',
                papel: 'Chave Primária Composta',
                regra: 'Alerta vermelho para 2FN: havendo PK composta, deve-se verificar se algum campo depende de apenas parte dela.',
                cor: 'yellow'
              },
              {
                termo: 'num_inscricao -> nome_aluno',
                papel: 'Dependência Funcional Parcial',
                regra: 'O atributo não-chave depende de apenas um dos membros da PK composta, violando a 2FN.',
                cor: 'rose'
              },
              {
                termo: 'cod_curso -> {nome_curso, carga_horaria}',
                papel: 'Segunda Dependência Parcial',
                regra: 'Mais atributos dependendo de apenas metade da PK composta, reforçando a quebra da 2FN.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1. OLHE A CHAVE PRIMÁRIA (PK): A chave é composta por 2 colunas: {num_inscricao, cod_curso}.',
              '2. CONFERÊNCIA DA 1FN: O enunciado já garantiu que está na 1FN.',
              '3. TESTE DA 2FN (A REGRA DE OURO): Para estar na 2FN, todo atributo comum tem que depender da chave TODA. Se depender de um pedaço só, VIOLA A 2FN!',
              '4. ANALISE AS DEPENDÊNCIAS DO ENUNCIADO: "nome_aluno" depende apenas de "num_inscricao" (pedaço da PK). "nome_curso" depende apenas de "cod_curso" (outro pedaço da PK).',
              '5. CONCLUSÃO IMEDIATA: Violação clássica e direta da 2FN (Segunda Forma Normal). Marque Letra C.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'JURAMENTO DE CODD NA PRÁTICA: O atributo deve depender de "the whole key" (da chave inteira). Se depender de um pedaço da chave composta, é dependência parcial -> viola a 2FN!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Normalização de Banco de Dados Passo a Passo',
          url: 'https://www.youtube.com/results?search_query=formas+normais+1fn+2fn+3fn+concursos',
          category: 'video',
          badgeLabel: 'Vídeo Aulas',
          description: 'Resolução de questões da FGV e Cesgranrio identificando violações da 1FN, 2FN e 3FN.'
        }
      ],
      sampleQuestion: {
        banca: 'Cesgranrio',
        statement: 'Uma tabela na 1FN cuja chave primária é composta por (Matricula, CodCurso) e possui a coluna NomeAluno (que depende apenas de Matricula) viola qual forma normal?',
        answer: 'Viola a 2FN (Segunda Forma Normal)',
        explanation: 'Existe uma dependência parcial: NomeAluno depende de apenas uma parte da chave primária composta, caracterizando violação direta da 2FN.'
      }
    },
    {
      id: 'bd-acid-indices',
      title: 'Propriedades ACID e Níveis de Isolamento',
      subtopic: 'Processamento de Transações',
      readTimeMinutes: 7,
      keyTakeaways: [
        'A - Atomicidade: A transação executa por completo ("tudo ou nada"). Garantida pelo Undo Log / Rollback.',
        'C - Consistência: Leva o banco de um estado válido para outro estado válido, respeitando todas as constraints.',
        'I - Isolamento: Transações concorrentes não interferem indevidamente no estado intermediário umas das outras.',
        'D - Durabilidade: Uma vez comitada, as alterações persistem mesmo em falha de energia (Redo Log / WAL).'
      ],
      summary: `O padrão SQL define 4 níveis de isolamento para transações: Read Uncommitted, Read Committed, Repeatable Read e Serializable.`,
      examPitfalls: [
        'Read Uncommitted permite Leitura Suja (Dirty Read).',
        'Repeatable Read impede Leituras Sujas e Não-repetíveis, mas no padrão ANSI SQL ainda permite Leituras Fantasma (Phantom Read).',
        'PostgreSQL implementa Serializable via SSI (Serializable Snapshot Isolation).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Níveis de Isolamento x Anomalias',
          topicTag: '✍️ ANSI SQL Isolations',
          paperStyle: 'grid',
          colorTheme: 'cyan',
          headerNote: '📊 Matriz Cobrada em Concursos',
          handwrittenContent: `Níveis do mais fraco ao mais forte:

1) READ UNCOMMITTED:
   -> Permite: Leitura Suja ❌, Leitura Não-Repetível ❌, Fantasma ❌.

2) READ COMMITTED (Padrão no PostgreSQL/Oracle):
   -> Evita: Leitura Suja ✅.
   -> Permite: Leitura Não-Repetível ❌, Leitura Fantasma ❌.

3) REPEATABLE READ (Padrão no MySQL InnoDB):
   -> Evita: Leitura Suja ✅, Leitura Não-Repetível ✅.
   -> Permite: Leitura Fantasma (no padrão ANSI) ❌.

4) SERIALIZABLE:
   -> Evita TUDO! Executa como se fosse uma transação por vez. Mais seguro, porém mais lento.`,
          annotations: [
            'PostgreSQL usa MVCC (Multi-Version Concurrency Control) com snapshots.',
            'WAL (Write-Ahead Logging) garante a Durabilidade (D do ACID).'
          ],
          diagramFormula: 'Leitura Suja: Lê dado de transação não comitada\nNão-Repetível: SELECT repetido lê valores modificados (UPDATE)\nFantasma: SELECT repetido vê novas linhas inseridas (INSERT)',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'SEFAZ-MG – Auditor Fiscal da Receita Estadual (Auditoria e TI) – 2023',
            enunciado: `Em um banco de dados relacional que processa transações concorrentes de arrecadação tributária, considere a seguinte sequência temporal de operações:

- Transação T1 executa: \`SELECT saldo FROM contribuinte WHERE id = 100;\` (Retorna R$ 5.000,00).
- Em seguida, a transação concorrente T2 executa: \`UPDATE contribuinte SET saldo = 8.000,00 WHERE id = 100;\` e ==executa COMMIT com sucesso==.
- Posteriormente, ainda dentro do seu bloco de execução, a transação T1 executa novamente a mesma consulta: \`SELECT saldo FROM contribuinte WHERE id = 100;\` e ==obtém o valor atualizado de R$ 8.000,00==.

O fenômeno anômalo de concorrência descrito acima e o nível mínimo de isolamento SQL capaz de impedi-lo são, respectivamente:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Leitura Suja (Dirty Read) e Read Committed.',
                correta: false,
                comentario: 'INCORRETA: Não é leitura suja porque a transação T2 EFETUOU COMMIT antes da segunda leitura de T1. A leitura suja ocorre quando se lê dados de transações NÃO comitadas.'
              },
              {
                letra: 'B',
                texto: '==Leitura Não-Repetível (Non-Repeatable Read) e Repeatable Read==.',
                correta: true,
                comentario: 'CORRETA: O fenômeno em que uma transação lê a mesma linha duas vezes e encontra valores diferentes (porque outra transação fez commit de um UPDATE/DELETE no intervalo) chama-se Leitura Não-Repetível (Fuzzy Read). O nível mínimo de isolamento ANSI SQL que garante a prevenção dessa anomalia é o REPEATABLE READ.'
              },
              {
                letra: 'C',
                texto: 'Leitura Fantasma (Phantom Read) e Serializable.',
                correta: false,
                comentario: 'INCORRETA: Leitura fantasma ocorre quando uma consulta com cláusula WHERE de intervalo traz um conjunto de linhas diferente porque outra transação inseriu (INSERT) ou excluiu novas tuplas no intervalo, e não quando uma tupla existente teve seu valor alterado.'
              },
              {
                letra: 'D',
                texto: 'Perda de Atualização (Lost Update) e Read Uncommitted.',
                correta: false,
                comentario: 'INCORRETA: Read Uncommitted é o nível mais fraco e permite praticamente todas as anomalias.'
              },
              {
                letra: 'E',
                texto: 'Leitura Não-Repetível (Non-Repeatable Read) e Read Committed.',
                correta: false,
                comentario: 'INCORRETA: O nível Read Committed justamente PERMITE leituras não-repetíveis (ele só protege contra leituras sujas).'
              }
            ],
            termosGrifados: [
              {
                termo: 'executa COMMIT com sucesso',
                papel: 'Descarte de Leitura Suja',
                regra: 'Como houve commit, o dado lido não é "sujo", mas sim consolidado por outra transação.',
                cor: 'green'
              },
              {
                termo: 'obtém o valor atualizado de R$ 8.000,00',
                papel: 'Anomalia de Leitura Não-Repetível',
                regra: 'Dentro da mesma transação T1, a mesma tupla mudou de valor entre dois SELECTs.',
                cor: 'yellow'
              },
              {
                termo: 'nível mínimo de isolamento SQL capaz de impedi-lo',
                papel: 'Nível ANSI Exigido (Repeatable Read)',
                regra: 'Repeatable Read garante que toda linha lida permaneça idêntica durante toda a transação.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE AS OPERAÇÕES: T1 lê (5000), T2 altera e COMITA (8000), T1 lê de novo e vê 8000.',
              '2. DESCARTE DE LEITURA SUJA: Houve COMMIT? Sim! Então NUNCA pode ser Leitura Suja (Dirty Read). Elimine a Letra A.',
              '3. DIFERENCIE FANTASMA DE NÃO-REPETÍVEL: Fantasma é INSERT de novas linhas com WHERE. Aqui foi um UPDATE na mesma linha. Logo, é LEITURA NÃO-REPETÍVEL (Non-Repeatable Read)!',
              '4. RECORDE A TABELA ANSI: Read Committed evita Leitura Suja, mas PERMITE Não-Repetível. O nível mínimo que IMPEDE a Leitura Não-Repetível é o REPEATABLE READ!',
              '5. MARQUE: Letra B com absoluta convicção.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA B',
            conclusaoPedagogica: 'MATRIZ DE ISOLAMENTO NA CABEÇA: Read Committed mata Leitura Suja. Repeatable Read mata Leitura Suja + Não-Repetível. Serializable mata Leitura Suja + Não-Repetível + Fantasma!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'PostgreSQL Concurrency Control & Isolation Levels',
          url: 'https://www.postgresql.org/docs/current/transaction-iso.html',
          category: 'doc',
          badgeLabel: 'Manual Oficial',
          description: 'Explicação detalhada dos fenômenos de Dirty Read, Non-repeatable Read e Serialization Anomalies.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Qual fenômeno de concorrência ocorre quando uma Transação T1 lê uma linha alterada por T2, mas T2 subsequentemente aborta e executa Rollback?',
        answer: 'Leitura Suja (Dirty Read)',
        explanation: 'O dado lido por T1 nunca chegou a ser efetivado no banco de dados, configurando a clássica leitura suja.'
      }
    },
    {
      id: 'bd-nosql-cap',
      title: 'Bancos de Dados NoSQL e Teorema CAP',
      subtopic: 'Modelos NoSQL & Sistemas Distribuídos',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Teorema CAP (Eric Brewer): Em qualquer sistema distribuído de dados, é IMPOSSÍVEL garantir simultaneamente Consistência Forte (C), Disponibilidade (A) e Tolerância a Particionamento de Rede (P). Como a partição de rede (P) é inevitável no mundo real, o sistema deve escolher entre CP ou AP!',
        'Modelos NoSQL Principais: 1) Documento (MongoDB, CouchDB - JSON/BSON flexível); 2) Chave-Valor (Redis, Memcached - altíssima velocidade em memória); 3) Família de Colunas / Wide-Column (Apache Cassandra, HBase - petabytes e séries temporais); 4) Grafos (Neo4j - nós, arestas e propriedades para redes sociais e detecção de fraudes).',
        'Modelo BASE vs ACID: NoSQL prioriza Basically Available, Soft-state e Eventual consistency (consistência eventual em detrimento da consistência imediata).'
      ],
      summary: `A ascensão do Big Data exigiu bancos não relacionais com escalabilidade horizontal (scale-out). Compreender o Teorema CAP e as 4 famílias NoSQL é pré-requisito mandatório em concursos atuais.`,
      mnemonics: 'TEOREMA CAP: Escolha 2 entre Consistência (C), Disponibilidade (A) e Partição (P). Na prática em rede: Escolha CP ou AP!',
      examPitfalls: [
        'Cebraspe e FGV adoram afirmar que o Neo4j é banco de documentos (FALSO: Neo4j é de Grafos).',
        'Redis é puramente Chave-Valor com suporte a estruturas de dados em memória; Cassandra é Wide-Column.',
        'No Teorema CAP, a Tolerância a Partições (P) não pode ser ignorada em redes físicas reais sujeitas a perda de pacotes.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Teorema CAP & As 4 Famílias de NoSQL',
          topicTag: '✍️ Sistemas Distribuídos',
          paperStyle: 'grid',
          colorTheme: 'green',
          headerNote: '🌐 O triângulo de Brewer e as famílias NoSQL',
          handwrittenContent: `No quadro negro, a arquitetura NoSQL divide-se em:

1) ==TEOREMA CAP (Brewer)==:
   • ==C (Consistency)==: Todos os nós veem os mesmos dados no mesmo instante (Consistência Forte).
   • ==A (Availability)==: Toda requisição não-errônea recebe resposta (sem garantia de ser a mais recente).
   • ==P (Partition Tolerance)==: O cluster continua operando mesmo com queda de cabos de rede entre nós.
   -> 🚨 REGRA DE OURO: A partição (P) é inevitável. Logo, o banco escolhe entre ==CP== (ex: MongoDB, HBase) ou ==AP== (ex: Cassandra, DynamoDB, CouchDB).

2) ==AS 4 FAMÍLIAS NOSQL==:
   • ==Documento==: JSON, BSON, XML. Ex: MongoDB, CouchDB. Consultas ricas com índices secundários.
   • ==Chave-Valor (Key-Value)==: Chave única aponta para um valor binário/string. Ex: Redis, Memcached. Caching ultra-rápido.
   • ==Família de Colunas (Wide-Column)==: Linhas com número dinâmico de colunas agrupadas. Ex: Cassandra, ScyllaDB, HBase. Escrita massiva.
   • ==Grafos (Graph Database)==: Nós (Nodes) e Relações (Edges/Arestas). Ex: Neo4j, Amazon Neptune. Análise de vínculos e fraudes.`,
          annotations: [
            'BASE: Basically Available, Soft-state, Eventual Consistency.',
            'MongoDB é tradicionalmente CP (eleva consistência sobre disponibilidade durante partição).'
          ],
          diagramFormula: `TRIÂNGULO CAP:
                Consistência (C)
                     /\
                    /  \
                   / CA \ (Bancos Relacionais Tradicionais em nó único)
                  /      \
                 /        \
        CP      /          \     AP
    (MongoDB,  /            \ (Cassandra,
     HBase)   /              \ DynamoDB)
             /   P é obrigatório \
            /______________________\
Disponibilidade (A)        Tolerância a Partição (P)`,
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Receita Federal do Brasil (RFB) – Auditor-Fiscal da Receita Federal – 2023',
            enunciado: `Uma equipe de arquitetura de dados da fiscalização tributária precisa projetar uma solução para ==análise de redes de relacionamentos societários complexos, participações cruzadas em empresas e rastreamento de laranjas e lavagem de dinheiro== envolvendo milhões de transações interligadas.

Simultaneamente, para o repositório de telemetria de notas fiscais eletrônicas em tempo real (milhões de inserções por segundo com alta tolerância a falhas e sem ponto único de falha no modelo AP do Teorema CAP), a equipe selecionou outro mecanismo.

Os modelos de bancos de dados NoSQL mais adequados para a análise de vínculos societários e para a telemetria em tempo real AP são, respectivamente:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Bancos de Documentos (ex: MongoDB) e Bancos Relacionais (ex: PostgreSQL).',
                correta: false,
                comentario: 'INCORRETA: Documentos não são especializados em consultas recursivas de relacionamentos complexos de múltiplos graus de profundidade. Além disso, PostgreSQL tradicional não é modelo AP distribuído.'
              },
              {
                letra: 'B',
                texto: 'Bancos Chave-Valor (ex: Redis) e Bancos de Documentos (ex: CouchDB).',
                correta: false,
                comentario: 'INCORRETA: Chave-valor não suporta navegação por arestas e travessia de grafos.'
              },
              {
                letra: 'C',
                texto: '==Bancos Orientados a Grafos (ex: Neo4j) e Bancos de Família de Colunas (ex: Apache Cassandra)==.',
                correta: true,
                comentario: 'CORRETA: Para relacionamentos complexos, cruzamentos societários e caminhos em redes, o modelo ideal é Grafos (Neo4j), que trata relacionamentos como cidadãos de primeira classe (índice livre de travessia). Para escrita massiva em tempo real com alta disponibilidade e tolerância a partições (AP no Teorema CAP), o Apache Cassandra (Wide-Column) é a referência mundial.'
              },
              {
                letra: 'D',
                texto: 'Bancos de Família de Colunas (ex: HBase) e Bancos Orientados a Grafos (ex: Neo4j).',
                correta: false,
                comentario: 'INCORRETA: A ordem está invertida. Grafos é para a análise de vínculos societários, e não família de colunas.'
              },
              {
                letra: 'E',
                texto: 'Bancos de Grafos (ex: Neo4j) e Bancos Relacionais Normalizados na 3FN.',
                correta: false,
                comentario: 'INCORRETA: Bancos relacionais normalizados não são desenhados para escritas na escala de milhões de inserts por segundo com partição AP do CAP.'
              }
            ],
            termosGrifados: [
              {
                termo: 'análise de redes de relacionamentos societários complexos',
                papel: 'Requisito Óbvio para Grafos',
                regra: 'Travessia de múltiplos graus (quem é sócio de quem, triangulações) exige modelo de Grafo (Nós e Arestas).',
                cor: 'yellow'
              },
              {
                termo: 'telemetria em tempo real com modelo AP do Teorema CAP',
                papel: 'Requisito para Cassandra / Wide-Column',
                regra: 'Apache Cassandra é o exemplo clássico de banco NoSQL de Colunas Largas operando no modo AP (Alta Disponibilidade + Tolerância a Partição).',
                cor: 'green'
              },
              {
                termo: 'Neo4j e Apache Cassandra',
                papel: 'Combinação Vencedora',
                regra: 'Grafos para rede social/vínculos; Família de Colunas para escrita maciça de telemetria.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE O PRIMEIRO REQUISITO: "redes de relacionamentos", "participações societárias cruzadas", "rastreamento de laranjas". Qual modelo NoSQL faz isso por excelência? BANCO DE GRAFOS (ex: Neo4j)!',
              '2. ELIMINE ALTERNATIVAS: As únicas que começam com Grafos são C e E.',
              '3. ANALISE O SEGUNDO REQUISITO: "telemetria em tempo real", "milhões de inserções por segundo", "modelo AP do Teorema CAP".',
              '4. LEMBRE-SE DO CASSANDRA: O Apache Cassandra (Família de Colunas) foi projetado exatamente para escrita massiva distribuída sem ponto único de falha com consistência eventual (AP).',
              '5. MARQUE: Letra C com 100% de precisão.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'MAPEAMENTO MENTAL NO SQL: Viu "rede social", "fraudes", "relacionamentos societários"? Marque GRAFOS (Neo4j). Viu "telemetria", "IoT", "milhões de escritas/segundo", "AP no CAP"? Marque COLUNAR/CASSANDRA!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Graph Databases e Teorema CAP - Martin Fowler',
          url: 'https://martinfowler.com/nosql.html',
          category: 'doc',
          badgeLabel: 'Artigo Clássico',
          description: 'Visão geral arquitetural dos 4 estilos de NoSQL e do Teorema CAP por Martin Fowler.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'No contexto do Teorema CAP, qual compromisso é prioritariamente assumido pelo banco NoSQL Apache Cassandra em cenários de particionamento de rede?',
        answer: 'Disponibilidade (Availability - modelo AP)',
        explanation: 'O Cassandra prioriza a disponibilidade e a tolerância a partições (AP), adotando consistência eventual (modelo BASE).'
      }
    }
  ]
};
