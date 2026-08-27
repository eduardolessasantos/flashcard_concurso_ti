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
            'Desnormalização é usada em Data Warehouses para leitura rápida.'
          ]
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
   -> Evita TUDO! Executa como se fosse uma transação por vez. Mais seguro, porém mais lento.`
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
    }
  ]
};
