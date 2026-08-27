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
   -> Se falharem? => Circuito volta a ficar ABERTO! ❌`
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

Regra de Ouro: O que está dentro NUNCA conhece o que está fora!`
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
    }
  ]
};
