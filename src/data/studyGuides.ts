import { StudyGuideTopic } from '../types';

export const STUDY_GUIDE_TOPICS: StudyGuideTopic[] = [
  {
    id: 'Engenharia de Software',
    title: 'Engenharia de Software',
    description: 'Metodologias Ágeis (Scrum, Kanban, XP), Engenharia de Requisitos, Padrões GoF, Princípios SOLID e Qualidade de Software.',
    badge: 'Alta Cobrança (FGV & Cebraspe)',
    iconName: 'Layout',
    lessons: [
      {
        id: 'es-scrum-2020',
        title: 'Scrum Guide (Atualização 2020)',
        subtopic: 'Frameworks Ágeis',
        readTimeMinutes: 6,
        keyTakeaways: [
          'Scrum Master é um "true leader who serves" (Líder Servidor).',
          'O time Scrum é uma unidade coesa de profissionais focados em uma meta por vez (Não há mais subtimes como "Development Team", agora são apenas "Developers").',
          'Cancelamento da Sprint: Prerrogativa EXCLUSIVA do Product Owner caso a Sprint Goal fique obsoleta.',
          'Daily Scrum: Timebox de 15 minutos para os Developers inspecionarem o progresso rumo à Sprint Goal (não há mais obrigatoriedade das 3 perguntas clássicas).'
        ],
        summary: `O Scrum é um framework estruturado em **3 Papéis** (Product Owner, Scrum Master, Developers), **4 Eventos formais** (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) contidos na Sprint, e **3 Artefatos** (Product Backlog, Sprint Backlog, Incremento), cada um com seu respectivo compromisso (Product Goal, Sprint Goal, Definition of Done).`,
        mnemonics: 'PILARES: Transparência, Inspeção e Adaptação (TIA).',
        examPitfalls: [
          'Cebraspe adora afirmar que o Scrum Master pode cancelar a Sprint (FALSO: apenas o PO).',
          'FGV costuma confundir o compromisso do Increment (Definition of Done) com o critério de aceitação de uma estória individual.',
          'Cesgranrio testa se a Sprint Retrospective ocorre antes da Review (FALSO: a Review ocorre antes da Retrospectiva).'
        ],
        sampleQuestion: {
          banca: 'Cebraspe',
          statement: 'No framework Scrum, cabe ao Scrum Master definir a meta da Sprint e aprovar o cancelamento antecipado das iterações.',
          answer: 'ERRADO',
          explanation: 'A definição da meta da Sprint é um esforço colaborativo de todo o Scrum Team durante a Sprint Planning, e a decisão de cancelar a Sprint é de competência EXCLUSIVA do Product Owner.'
        }
      },
      {
        id: 'es-solid',
        title: 'Princípios SOLID de Orientação a Objetos',
        subtopic: 'Arquitetura e Clean Code',
        readTimeMinutes: 8,
        keyTakeaways: [
          'S - Single Responsibility: Uma classe deve ter um, e apenas um, motivo para mudar.',
          'O - Open/Closed: Entidades de software devem estar abertas para extensão, mas fechadas para modificação.',
          'L - Liskov Substitution: Subtipos devem ser substituíveis pelos seus tipos base sem alterar o comportamento correto do programa.',
          'I - Interface Segregation: Muitas interfaces específicas são melhores que uma interface única e genérica ("gorda").',
          'D - Dependency Inversion: Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações.'
        ],
        summary: `Os princípios SOLID (Robert C. Martin / Uncle Bob) são a espinha dorsal de sistemas sustentáveis e testáveis. Eles minimizam acoplamento e maximizam coesão.`,
        mnemonics: 'SOLID: Single, Open/closed, Liskov, Interface, Dependency.',
        examPitfalls: [
          'FGV coloca cenários com "if (tipo instanceof Cachorro)" para testar violação de OCP e LSP.',
          'Cebraspe troca o conceito de Inversão de Dependência (Princípio arquitetural) por Injeção de Dependência (Padrão de projeto/técnica).'
        ],
        codeExample: {
          language: 'java',
          code: `// Violação do OCP & LSP:\nif (funcionario instanceof Gerente) { calcularBonusGerente(); }\n\n// Solução SOLID (Polimorfismo & OCP):\ninterface Remuneravel { double calcularBonus(); }\nclass Gerente implements Remuneravel { ... }`,
          explanation: 'O uso de polimorfismo permite adicionar novos cargos sem modificar o código do serviço de folha de pagamento existente.'
        },
        sampleQuestion: {
          banca: 'FGV',
          statement: 'Ao adicionar um novo método em uma interface que obriga dezenas de classes implementadoras a criarem corpos vazios sem necessidade, qual princípio SOLID é flagrantemente violado?',
          answer: 'Interface Segregation Principle (ISP)',
          explanation: 'O ISP preconiza que nenhuma classe deve ser forçada a depender de métodos que não utiliza.'
        }
      },
      {
        id: 'es-gof-patterns',
        title: 'Padrões de Projeto GoF (Design Patterns)',
        subtopic: 'Engenharia de Software',
        readTimeMinutes: 9,
        keyTakeaways: [
          'Criacionais: Singleton, Factory Method, Abstract Factory, Builder, Prototype.',
          'Estruturais: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.',
          'Comportamentais: Strategy, Observer, State, Command, Template Method, Chain of Responsibility, Iterator, Mediator, Memento, Visitor.'
        ],
        summary: `Os 23 padrões do Gang of Four categorizam soluções comprovadas para problemas recorrentes no design orientado a objetos.`,
        examPitfalls: [
          'Adapter vs Decorator: Adapter converte uma interface para outra existente; Decorator agrega novas responsabilidades sem alterar a interface.',
          'Strategy vs State: Strategy troca algoritmos independentes; State altera o comportamento da classe com base na transição do seu estado interno.',
          'Abstract Factory cria FAMÍLIAS de objetos relacionados; Factory Method cria UM tipo de objeto delegando a instanciação a subclasses.'
        ],
        sampleQuestion: {
          banca: 'Cesgranrio',
          statement: 'Qual padrão GoF permite anexar dinamicamente novas responsabilidades a um objeto individual sem afetar os demais objetos da mesma classe e sem recorrer à herança estática?',
          answer: 'Decorator (ou Wrapper)',
          explanation: 'Decorator envolve o objeto original permitindo enriquecer seu comportamento dinamicamente em tempo de execução.'
        }
      }
    ]
  },
  {
    id: 'Linguagens (Java/Python)',
    title: 'Linguagens (Java & Python)',
    description: 'Gestão de Memória JVM, Garbage Collection, Streams, Concorrência, GIL no Python, List Comprehensions e Tipagem.',
    badge: 'Essencial Prático',
    iconName: 'Code',
    lessons: [
      {
        id: 'lp-java-memory',
        title: 'Arquitetura de Memória JVM & Garbage Collection',
        subtopic: 'Java Core',
        readTimeMinutes: 7,
        keyTakeaways: [
          'Stack (Pilha): Aloca frames por Thread, variáveis locais de tipos primitivos e ponteiros de referência.',
          'Heap: Área compartilhada onde todos os objetos (instâncias) e arrays residem.',
          'Young Generation: Dividida em Eden, Survivor 0 (S0) e Survivor 1 (S1). Objetos novos nascem no Eden.',
          'Old (Tenured) Generation: Armazena objetos que sobreviveram a múltiplos ciclos de Minor GC.',
          'Metaspace (a partir do Java 8): Armazena metadados de classes fora da Heap, usando memória nativa do SO (substituiu o antigo PermGen).'
        ],
        summary: `A JVM automatiza o gerenciamento de memória através do Garbage Collector (GC), que identifica objetos inalcançáveis a partir das GC Roots (threads ativas, variáveis estáticas, referências da stack).`,
        examPitfalls: [
          'Cebraspe diz que tipos primitivos declarados como atributos de classe ficam na Stack. (FALSO: atributos de instância ficam dentro do objeto na Heap).',
          'PermGen causava OutOfMemoryError no Java 7; no Java 8+ o Metaspace cresce dinamicamente na memória nativa.'
        ],
        codeExample: {
          language: 'java',
          code: `public void metodo() {\n  int x = 10;           // Stack\n  String s = new String("Java"); // Referência 's' na Stack, Objeto na Heap\n}`,
          explanation: 'Variáveis locais e ponteiros na Stack são liberados assim que o método termina a execução.'
        },
        sampleQuestion: {
          banca: 'Cebraspe',
          statement: 'Na JVM, o coletor de lixo (Garbage Collector) é responsável por desalocar explicitamente variáveis primitivas alocadas na Stack de cada thread.',
          answer: 'ERRADO',
          explanation: 'A Stack é gerenciada automaticamente pelo fluxo de chamadas de métodos (push/pop). O Garbage Collector atua exclusivamente na Heap desalocando objetos sem referências ativas.'
        }
      },
      {
        id: 'lp-python-internals',
        title: 'Python Internals: GIL, Mutabilidade e Comprehensions',
        subtopic: 'Python 3',
        readTimeMinutes: 6,
        keyTakeaways: [
          'Objetos Imutáveis: int, float, str, tuple, frozenset, bool, bytes.',
          'Objetos Mutáveis: list, dict, set, bytearray.',
          'GIL (Global Interpreter Lock): Mecanismo no CPython que garante que apenas uma thread nativa execute bytecode Python por vez no mesmo processo.',
          'Multiprocessing vs Multithreading: Para tarefas CPU-bound em Python, use multiprocessing para contornar o GIL.'
        ],
        summary: `Python utiliza contagem de referências + coletor cíclico para gerenciamento de memória. A imutabilidade de tuplas e strings garante segurança em operações de chave de dicionários (hashing).`,
        examPitfalls: [
          'Argumentos padrão mutáveis em funções (ex: def f(x=[])) compartilham a mesma lista entre chamadas!',
          'Tuplas são imutáveis, mas se contiverem uma lista interna, os itens dentro da lista PODEM ser alterados.'
        ],
        codeExample: {
          language: 'python',
          code: `# Cuidado com Default Arg Mutável:\ndef append_to(element, target=[]):\n    target.append(element)\n    return target\n\nprint(append_to(1)) # [1]\nprint(append_to(2)) # [1, 2] -> Não é [2]!`,
          explanation: 'O objeto lista padrão é criado uma única vez na definição da função, não a cada execução.'
        },
        sampleQuestion: {
          banca: 'FGV',
          statement: 'Considere a tupla t = (1, [2, 3]). A instrução t[1].append(4) gerará uma exceção TypeError por violação da imutabilidade da tupla?',
          answer: 'NÃO GERA ERRO',
          explanation: 'A referência t[1] continua apontando para o mesmo objeto lista (imutabilidade da tupla preservada), mas o conteúdo interno da lista mutável pode ser alterado com sucesso.'
        }
      }
    ]
  },
  {
    id: 'Bancos de Dados',
    title: 'Bancos de Dados Relacionais e NoSQL',
    description: 'Normalização (1FN até BCNF), Transações ACID, Índices B+Tree, Isolamento SQL e Bancos NoSQL (Documento, Chave-Valor, Grafos).',
    badge: 'Peso Máximo em TI',
    iconName: 'Database',
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
        summary: `O padrão SQL define 4 níveis de isolamento para transações: Read Uncommitted, Read Committed, Repeatable Read e Serializable, tratando fenômenos de Dirty Read, Non-repeatable Read e Phantom Read.`,
        examPitfalls: [
          'Read Uncommitted permite Leitura Suja (Dirty Read).',
          'Repeatable Read impede Leituras Sujas e Não-repetíveis, mas no padrão ANSI SQL ainda permite Leituras Fantasma (Phantom Read) a menos que use Snapshot Isolation ou Serializable.',
          'PostgreSQL implementa Serializable via SSI (Serializable Snapshot Isolation).'
        ],
        sampleQuestion: {
          banca: 'FGV',
          statement: 'Qual fenômeno de concorrência ocorre quando uma Transação T1 lê uma linha alterada por T2, mas T2 subsequentemente aborta e executa Rollback?',
          answer: 'Leitura Suja (Dirty Read)',
          explanation: 'O dado lido por T1 nunca chegou a ser efetivado no banco de dados, configurando a clássica leitura suja.'
        }
      }
    ]
  },
  {
    id: 'Arquitetura de Software',
    title: 'Arquitetura de Software & Microsserviços',
    description: 'Arquitetura Hexagonal (Ports & Adapters), Clean Architecture, Microsserviços, API RESTful, Padrões Saga e Circuit Breaker.',
    badge: 'Top Provas Recentes',
    iconName: 'Server',
    lessons: [
      {
        id: 'arq-microservices-patterns',
        title: 'Padrões de Resiliência e Transações em Microsserviços',
        subtopic: 'Microsserviços',
        readTimeMinutes: 8,
        keyTakeaways: [
          'Circuit Breaker: Interrompe chamadas a um serviço com falhas repetidas (estados: Fechado, Aberto, Meio-Aberto).',
          'Padrão Saga: Gerencia transações distribuídas através de uma sequência de transações locais e transações de compensação (Coreografia ou Orquestração).',
          'API Gateway: Ponto único de entrada que gerencia roteamento, autenticação, rate limiting e terminação SSL.',
          'CQRS (Command Query Responsibility Segregation): Separa modelos de leitura (Query) e modelos de escrita (Command).'
        ],
        summary: `Microsserviços trocam transações ACID rígidas por Consistência Eventual (modelo BASE) e isolamento de banco de dados por serviço (Database per Service).`,
        examPitfalls: [
          '2PC (Two-Phase Commit) NÃO é recomendado em microsserviços modernos devido ao alto acoplamento e bloqueio síncrono. Prefere-se Saga.',
          'No Circuit Breaker: Estado ABERTO significa que as requisições NÃO chegam ao serviço degradado, retornando fallback imediato.'
        ],
        sampleQuestion: {
          banca: 'Cebraspe',
          statement: 'No padrão de projeto Circuit Breaker, quando o circuito transita para o estado aberto, as requisições continuam sendo enviadas normalmente ao serviço de destino para aferir se ele já se recuperou.',
          answer: 'ERRADO',
          explanation: 'No estado ABERTO, todas as requisições falham imediatamente (ou invocam um fallback rápido) sem sobrecarregar o serviço com problemas. É no estado MEIO-ABERTO (Half-Open) que um número limitado de requisições teste é liberado.'
        }
      },
      {
        id: 'arq-clean-hexagonal',
        title: 'Clean Architecture e Arquitetura Hexagonal',
        subtopic: 'Padrões Arquiteturais',
        readTimeMinutes: 7,
        keyTakeaways: [
          'Regra de Dependência: As dependências de código-fonte SEMPRE devem apontar para dentro, em direção às políticas de alto nível (Regras de Negócio/Entidades).',
          'O núcleo de negócio (Entidades e Casos de Uso) NÃO deve saber nada sobre frameworks, bancos de dados, UI ou APIs externas.',
          'Ports (Portas): Interfaces que definem como o domínio se comunica.',
          'Adapters (Adaptadores): Implementações concretas que conectam o mundo externo (ex: Repositório PostgreSQL, Controller REST).'
        ],
        summary: `Tanto a Clean Architecture de Robert Martin quanto a Arquitetura Hexagonal (Alistair Cockburn) garantem testabilidade independente e desacoplamento radical de infraestrutura.`,
        examPitfalls: [
          'FGV adora perguntar: "Se mudarmos o banco de dados de Oracle para MongoDB, quais camadas da Clean Architecture devem ser modificadas?" (RESPOSTA: Apenas a camada mais externa de Frameworks & Drivers / Interface Adapters, NUNCA as Entidades ou Casos de Uso!).'
        ],
        sampleQuestion: {
          banca: 'FGV',
          statement: 'Na Clean Architecture, a camada de Casos de Uso (Use Cases) depende diretamente de drivers de conexão com o banco de dados para otimizar queries relacionais.',
          answer: 'FALSO',
          explanation: 'Os Casos de Uso dependem apenas de abstrações (Interfaces/Ports). Os drivers concretos ficam isolados na camada mais externa.'
        }
      }
    ]
  }
];
