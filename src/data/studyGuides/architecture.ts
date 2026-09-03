import { StudyGuideTopic } from '../../types';

export const ARCHITECTURE_TOPIC: StudyGuideTopic = {
  id: 'Arquitetura de Software',
  title: 'Arquitetura de Software & Microsserviços',
  category: 'especificos_ti',
  description: 'Arquitetura Hexagonal (Ports & Adapters), Clean Architecture, Microsserviços, API RESTful, Padrões Saga e Circuit Breaker.',
  badge: 'Top Provas Recentes',
  iconName: 'Server',
  generalUsefulLinks: [
    {
      title: 'Martin Fowler - Guia de Padrões para Microsserviços',
      url: 'https://martinfowler.com/articles/microservices.html',
      category: 'article',
      badgeLabel: 'Artigo Canônico',
      description: 'O artigo original de Martin Fowler e James Lewis definindo as características dos microsserviços.'
    },
    {
      title: 'AWS Architecture Center - Padrões de Resiliência',
      url: 'https://aws.amazon.com/architecture/',
      category: 'official',
      badgeLabel: 'AWS Guide',
      description: 'Padrões de Circuit Breaker, Retry, Dead Letter Queues e Sagas em sistemas distribuídos.'
    }
  ],
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
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Máquina de Estados do Circuit Breaker',
          topicTag: '✍️ Resiliência',
          paperStyle: 'lined',
          colorTheme: 'rose',
          headerNote: '⚡ Como proteger serviços contra efeito cascata',
          handwrittenContent: `Os 3 Estados do Circuit Breaker:

1) FECHADO (Closed):
   -> Operação normal! As requisições passam direto para o microsserviço.
   -> Se o número de falhas ultrapassar o limite configurado (threshold)...
   ===> Pula para o estado ABERTO!

2) ABERTO (Open):
   -> O circuito desarma! NENHUMA requisição bate no serviço que está caindo.
   -> Retorna erro ou fallback instantâneo (evita sobrecarga).
   -> Após um tempo de espera (timeout)...
   ===> Pula para MEIO-ABERTO!

3) MEIO-ABERTO (Half-Open):
   -> Deixa passar um pequeno número de requisições de teste.
   -> Se derem sucesso? => Circuito FECHA novamente! ✅
   -> Se falharem? => Circuito volta a ficar ABERTO! ❌`,
          annotations: [
            'No estado ABERTO, requisições NÃO chegam ao serviço degradado.',
            'Fallback (degradação graciosa) é executado imediatamente.',
            'Padrão Saga resolve transações distribuídas (Coreografada ou Orquestrada).'
          ],
          diagramFormula: 'FECHADO (Normal) --[Muitas Falhas]--> ABERTO (Corta Requisições)\nABERTO --[Timeout de Espera]--> MEIO-ABERTO (Testes Piloto)\nMEIO-ABERTO --[Sucesso]--> FECHADO | MEIO-ABERTO --[Falha]--> ABERTO',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'TCE-ES – Auditor de Controle Externo (Tecnologia da Informação) – 2023',
            enunciado: `Em uma arquitetura de microsserviços distribuídos de alta volumetria, um serviço de pagamento começou a apresentar lentidão extrema e erros intermitentes de timeout devido à sobrecarga de conexões com a autorizadora de cartões. 

Para impedir que a degradação desse serviço se propague em efeito cascata e derrube todo o ecossistema da aplicação, a equipe de engenharia implementou o padrão ==Circuit Breaker==.

Sobre o funcionamento desse padrão de resiliência, assinale a afirmativa CORRETA:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Quando o circuito atinge o limite de falhas e transita para o estado ABERTO, as chamadas continuam sendo despachadas ao serviço externo para verificar se ele normalizou.',
                correta: false,
                comentario: 'INCORRETA: No estado ABERTO, as chamadas são IMEDIATAMENTE interceptadas e abortadas antes de tocar o serviço externo, devolvendo erro ou fallback rápido para evitar sobrecarga.'
              },
              {
                letra: 'B',
                texto: '==No estado ABERTO, as requisições falham imediatamente ou acionam uma resposta alternativa (fallback), sem repassar carga ao serviço degradado==.',
                correta: true,
                comentario: 'CORRETA: Essa é a essência do disjuntor elétrico (Circuit Breaker)! Ao abrir o circuito, o tráfego é bloqueado e uma resposta imediata (fallback/mock/cache) é devolvida ao chamador, dando tempo para o serviço dependente se recuperar sem sofrer estresse adicional.'
              },
              {
                letra: 'C',
                texto: 'A transição direta do estado FECHADO para MEIO-ABERTO ocorre de forma automática a cada ciclo de relógio do processador.',
                correta: false,
                comentario: 'INCORRETA: O circuito vai de FECHADO para ABERTO quando a taxa de erros estoura a tolerância (threshold). Apenas após um intervalo de cooldown no estado ABERTO é que ele transita para MEIO-ABERTO.'
              },
              {
                letra: 'D',
                texto: 'O padrão Circuit Breaker substitui a necessidade de bancos de dados relacionais garantindo transações ACID globais em tempo real.',
                correta: false,
                comentario: 'INCORRETA: Circuit Breaker é um padrão de resiliência e tolerância a falhas em chamadas de rede, nada tendo a ver com ACID de banco de dados.'
              },
              {
                letra: 'E',
                texto: 'No estado FECHADO, o circuito bloqueia todas as mensagens que chegam da fila assíncrona Kafka.',
                correta: false,
                comentario: 'INCORRETA: No estado FECHADO a operação é absolutamente normal (tudo flui normalmente).'
              }
            ],
            termosGrifados: [
              {
                termo: 'Circuit Breaker',
                papel: 'Padrão de Resiliência Distribuída',
                regra: 'Disjuntor que protege contra lentidão e falha em cascata (cascading failure).',
                cor: 'rose'
              },
              {
                termo: 'No estado ABERTO, as requisições falham imediatamente',
                papel: 'Comportamento do Circuito Desarmado',
                regra: 'Estado Aberto = Bloqueio total de chamadas externas + Fallback instantâneo.',
                cor: 'green'
              },
              {
                termo: 'efeito cascata',
                papel: 'Problema Mitigado',
                regra: 'Threads presas aguardando timeout de um serviço derrubam os serviços que os chamaram.',
                cor: 'yellow'
              }
            ],
            comoLerPassoAPasso: [
              '1. LEMBRE-SE DA ANALOGIA DO DISJUNTOR DA SUA CASA: Quando há curto-circuito, o disjuntor "abre" e corta a energia para não incendiar a casa.',
              '2. ANALISE OS ESTADOS: Fechado = corrente passa (normal). Aberto = energia cortada (falha imediata/fallback). Meio-Aberto = teste com poucos elétrons.',
              '3. AVALIE A LETRA A: Afirma que o estado Aberto continua enviando requisições. FALSO (isso é o estado Meio-Aberto)!',
              '4. AVALIE A LETRA B: Define perfeitamente o estado Aberto (falha rápida ou fallback sem sobrecarregar).',
              '5. MARQUE: Letra B com tranquilidade.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA B',
            conclusaoPedagogica: 'PEGADINHA FREQUENTE: Pensar que "ABERTO" significa porta aberta para passar tráfego. NÃO! Disjuntor aberto significa circuito elétrico INTERROMPIDO (tráfego cortado)!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Microservices Patterns - Chris Richardson',
          url: 'https://microservices.io/patterns/index.html',
          category: 'doc',
          badgeLabel: 'Catálogo de Padrões',
          description: 'Padrões Saga, API Gateway, CQRS, Database per Service e Event Sourcing.'
        }
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
      handwrittenNotes: [
        {
          title: 'Quadro Negro: As 4 Camadas da Clean Architecture',
          topicTag: '✍️ Arquitetura Limpa',
          paperStyle: 'grid',
          colorTheme: 'cyan',
          headerNote: '🎯 A Regra de Dependência é Sagrada',
          handwrittenContent: `Camadas concêntricas (A seta aponta sempre para DENTRO!):

1. 🟡 ENTIDADES (Enterprise Business Rules):
   -> Regras de negócio globais da empresa (não mudam por capricho de tela).

2. 🟢 CASOS DE USO (Application Business Rules):
   -> Fluxos da aplicação (ex: CadastrarConcurso, EfetuarPagamento).

3. 🔵 ADAPTADORES DE INTERFACE (Controllers, Gateways, Presenters):
   -> Convertem dados do formato do Use Case para a Web/DB.

4. ⚪ FRAMEWORKS & DRIVERS (DB, UI, Dispositivos, Web):
   -> A camada mais externa e volátil (onde vive o Spring, React, Postgres).

Regra de Ouro: O que está dentro NUNCA conhece o que está fora!`,
          annotations: [
            'A Regra de Dependência aponta estritamente para o centro.',
            'Entidades e Casos de Uso são 100% agnósticos a banco de dados e UI.'
          ],
          diagramFormula: '[Frameworks & DB] ---> [Interface Adapters] ---> [Use Cases] ---> [Entities (Enterprise Rules)]',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'TJ-DFT – Analista Judiciário (Desenvolvimento de Sistemas) – 2022',
            enunciado: `Considere que uma equipe de tecnologia de um tribunal decidiu migrar o banco de dados de sua aplicação principal de um modelo relacional corporativo (Oracle) para um banco NoSQL em nuvem (MongoDB), mantendo inalteradas todas as regras de negócio judiciais.

Segundo os preceitos fundamentais da ==Clean Architecture (Arquitetura Limpa de Robert C. Martin)==, a camada interna da aplicação que ==NÃO deve sofrer qualquer alteração no seu código-fonte== em decorrência dessa substituição de tecnologia de banco de dados é:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Frameworks e Drivers.',
                correta: false,
                comentario: 'INCORRETA: Essa é a camada mais externa onde justamente reside o driver do banco de dados; ela certamente será modificada para plugar o driver do MongoDB.'
              },
              {
                letra: 'B',
                texto: 'Interface Adapters (Adaptadores de Interface).',
                correta: false,
                comentario: 'INCORRETA: Os adaptadores de repositório (implementações concretas de acesso a dados que serializam documentos BSON/JSON) sofrem ajustes para atender às novas classes do MongoDB.'
              },
              {
                letra: 'C',
                texto: '==Entidades e Casos de Uso (Entities & Use Cases)==.',
                correta: true,
                comentario: 'CORRETA: A regra de ouro da Clean Architecture estabelece que as camadas mais internas (Entidades e Casos de Uso) encapsulam exclusivamente as regras de negócio e a lógica da aplicação, sendo totalmente agnósticas e cegas em relação à infraestrutura externa. Trocar banco, UI ou servidor web não pode impactar nem uma linha das regras centrais!'
              },
              {
                letra: 'D',
                texto: 'Apenas a camada de Apresentação (UI Presenters).',
                correta: false,
                comentario: 'INCORRETA: Apresentação lida com a interface do usuário.'
              },
              {
                letra: 'E',
                texto: 'Todas as camadas da arquitetura deverão ser reescritas integralmente.',
                correta: false,
                comentario: 'INCORRETA: Se fosse necessário reescrever todas as camadas, a arquitetura limpa teria falhado em seu propósito de desacoplamento.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Clean Architecture (Arquitetura Limpa de Robert C. Martin)',
                papel: 'Referencial Teórico',
                regra: 'Arquitetura centrada no domínio onde dependências apontam para dentro.',
                cor: 'cyan'
              },
              {
                termo: 'migrar o banco de dados de Oracle para MongoDB',
                papel: 'Mudança de Infraestrutura Externa',
                regra: 'Banco de dados é detalhe de implementação periférico na camada 4 (mais externa).',
                cor: 'yellow'
              },
              {
                termo: 'NÃO deve sofrer qualquer alteração no seu código-fonte',
                papel: 'Princípio do Desacoplamento Nuclear',
                regra: 'O núcleo (Use Cases & Entities) não conhece banco, framework nem telas.',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE O EVENTO: Troca de banco de dados (Oracle por MongoDB).',
              '2. EM QUAL CAMADA FICA O BANCO DE DADOS? Fica na camada mais externa: Frameworks & Drivers.',
              '3. LEMBRE-SE DA REGRA DE DEPENDÊNCIA: O que está fora depende do que está dentro. O que está dentro NUNCA sabe o que está fora!',
              '4. DEDUÇÃO DIRETA: Casos de Uso e Entidades nem sabem que existe banco de dados (eles falam com interfaces/abstrações). Logo, NÃO sofrem alteração!',
              '5. MARQUE: Letra C.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'ESSÊNCIA DA CLEAN ARCHITECTURE: Banco de dados, Web, UI e Frameworks são DETALHES que orbitam em volta do domínio de negócio protegido no centro!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'The Clean Architecture - Uncle Bob Blog',
          url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
          category: 'article',
          badgeLabel: 'Artigo Original',
          description: 'O diagrama original e a explicação da Dependency Inversion na arquitetura de software.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Na Clean Architecture, a camada de Casos de Uso (Use Cases) depende diretamente de drivers de conexão com o banco de dados para otimizar queries relacionais.',
        answer: 'FALSO',
        explanation: 'Os Casos de Uso dependem apenas de abstrações (Interfaces/Ports). Os drivers concretos ficam isolados na camada mais externa.'
      }
    },
    {
      id: 'arq-rest-cloud-native',
      title: 'APIs RESTful, Richardson Maturity Model e 12-Factor App',
      subtopic: 'Arquitetura Web & Cloud-Native',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Modelo de Maturidade de Richardson (RMM): Nível 0 (The Swamp of POX - único endpoint RPC via POST); Nível 1 (Recursos - URIs individuais para cada recurso, ex: /contas/123); Nível 2 (Verbos HTTP - GET, POST, PUT, DELETE, PATCH com status codes adequados); Nível 3 (HATEOAS - Hypermedia As The Engine Of Application State, links navegáveis no payload).',
        'Idempotência HTTP: GET, PUT, DELETE, HEAD e OPTIONS são idempotentes (múltiplas execuções produzem o mesmo efeito no estado do servidor). POST NÃO é idempotente.',
        '12-Factor App (Aplicações Cloud-Native): 1. Codebase único rastreado em controle de versão; 2. Dependências isoladas e explícitas; 3. Configurações guardadas em variáveis de ambiente (ENV), NUNCA no código; 4. Backing services tratados como recursos anexados; 5. Separação estrita de Build, Release e Run; 6. Processos stateless e sem compartilhamento de memória (share-nothing).'
      ],
      summary: `APIs modernas seguem os princípios RESTful de Richardson e as boas práticas de portabilidade e escalabilidade horizontal preconizadas pelos Doze Fatores (12-Factor App).`,
      mnemonics: 'MATURIDADE DE RICHARDSON: 0: Pântano RPC | 1: Recursos (URIs) | 2: Verbos HTTP + Status | 3: HATEOAS (Links hiper-mídia).',
      examPitfalls: [
        'PUT substitui o recurso por completo; PATCH realiza atualização parcial de atributos específicos.',
        'No 12-Factor App, credenciais e portas de conexão DEVEM ser injetadas via variáveis de ambiente, nunca commitadas em arquivos de propriedades.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Níveis de Richardson & Idempotência HTTP',
          topicTag: '✍️ REST & Cloud',
          paperStyle: 'lined',
          colorTheme: 'green',
          headerNote: '🌐 O padrão cobrado pelas bancas',
          handwrittenContent: `1) OS 4 NÍVEIS DE RICHARDSON:
   • Nível 0: "The Swamp of POX" - 1 URL única para tudo (ex: /api rodando tudo via POST).
   • Nível 1: RECURSOS - URIs substantivas (/clientes, /pedidos/10).
   • Nível 2: VERBOS HTTP - GET (busca), POST (cria), PUT (substitui), DELETE (remove).
   • Nível 3: HATEOAS - Resposta inclui links (_links.self, _links.pagamento) guiando o cliente!

2) TABELA DE IDEMPOTÊNCIA:
   • GET: Seguro ✅ | Idempotente ✅
   • PUT: Não seguro ❌ | Idempotente ✅
   • DELETE: Não seguro ❌ | Idempotente ✅
   • POST: Não seguro ❌ | NÃO idempotente ❌ (dois POSTs criam dois registros!)
   • PATCH: Geralmente NÃO idempotente ❌ (ex: "somar 10 ao saldo").`,
          annotations: [
            '12-Factor: Processos devem ser Stateless e descartáveis (Disposability).',
            'Status 201 Created com header Location; 204 No Content para exclusão.'
          ],
          diagramFormula: 'RMM: Nível 0 (URI única) -> Nível 1 (URIs de Recursos) -> Nível 2 (Métodos HTTP) -> Nível 3 (HATEOAS)',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Receita Federal do Brasil (RFB) – Analista-Tributário da Receita Federal – 2023',
            enunciado: `Ao projetar uma API web para consulta e pagamento de guias de importação, a equipe técnica adotou os preceitos da arquitetura RESTful. 

Durante a revisão de design, o líder técnico solicitou que a resposta JSON da consulta à guia não apenas retornasse os dados tributários, mas ==também incluísse dinamicamente os links de hipermídia (URLs navegáveis)== com as ações permitidas para o contribuinte naquele momento específico (ex.: link para download do PDF da guia e link para parcelamento).

No Modelo de Maturidade de Richardson (Richardson Maturity Model), a inclusão desses controles hipermídia dinâmicos eleva a API para o:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Nível 0.',
                correta: false,
                comentario: 'INCORRETA: Nível 0 é o "pântano de POX", onde se utiliza apenas um endpoint e método POST para tudo, sem conceitos REST.'
              },
              {
                letra: 'B',
                texto: 'Nível 1.',
                correta: false,
                comentario: 'INCORRETA: Nível 1 introduz o uso de Recursos com URIs individuais, mas ainda não emprega verbos nem hipermídia.'
              },
              {
                letra: 'C',
                texto: 'Nível 2.',
                correta: false,
                comentario: 'INCORRETA: Nível 2 introduz os Verbos HTTP padronizados (GET, POST, PUT, DELETE) e códigos de status HTTP (200, 201, 404), sem links de navegação automática.'
              },
              {
                letra: 'D',
                texto: '==Nível 3 (Glória do REST / HATEOAS)==.',
                correta: true,
                comentario: 'CORRETA: O nível 3 é o patamar máximo de maturidade REST, definido pelo conceito HATEOAS (Hypermedia As The Engine Of Application State). Nele, o payload devolve links que ensinam o cliente quais são os próximos passos possíveis no fluxo de negócio.'
              },
              {
                letra: 'E',
                texto: 'Nível 4 (GraphQL e WebSockets).',
                correta: false,
                comentario: 'INCORRETA: O modelo de Richardson vai apenas do Nível 0 ao Nível 3.'
              }
            ],
            termosGrifados: [
              {
                termo: 'links de hipermídia (URLs navegáveis)',
                papel: 'Característica Central do HATEOAS',
                regra: 'HATEOAS insere links de navegação dinâmica no corpo da resposta.',
                cor: 'green'
              },
              {
                termo: 'Modelo de Maturidade de Richardson',
                papel: 'Framework de Avaliação',
                regra: 'Classifica a aderência REST em 4 níveis: 0 (RPC), 1 (Recursos), 2 (Verbos), 3 (HATEOAS).',
                cor: 'yellow'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE O CONCEITO COBRADO: Modelo de Maturidade de Richardson.',
              '2. BUSQUE O ELEMENTO DIFERENCIADOR: O enunciado pede a inclusão de "links de hipermídia" orientando as próximas ações do cliente.',
              '3. RECORDE O SIGNIFICADO DE HATEOAS: Hypermedia As The Engine Of Application State = Nível 3 (o ápice do REST).',
              '4. DESCARTE NÍVEL 4: O modelo de Richardson só possui níveis 0, 1, 2 e 3.',
              '5. MARQUE: Letra D (Nível 3).'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA D',
            conclusaoPedagogica: 'ESCADA DE RICHARDSON: Degrau 1 = URIs; Degrau 2 = Verbos HTTP + Status Codes; Degrau 3 = HATEOAS (Links dinâmicos). Guarde essa sequência!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Richardson Maturity Model - Martin Fowler',
          url: 'https://martinfowler.com/articles/richardsonMaturityModel.html',
          category: 'article',
          badgeLabel: 'Artigo Canônico',
          description: 'A explicação passo a passo dos 4 estágios rumo ao REST glorioso por Martin Fowler.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Qual nível do Modelo de Maturidade de Richardson introduz o conceito de HATEOAS (Hypermedia As The Engine Of Application State)?',
        answer: 'Nível 3',
        explanation: 'O Nível 3 é caracterizado pelo uso de hipermídia para guiar a transição de estado da aplicação através de links no corpo da mensagem.'
      }
    }
  ]
};
