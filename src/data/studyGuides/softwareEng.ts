import { StudyGuideTopic } from '../../types';

export const SOFTWARE_ENG_TOPIC: StudyGuideTopic = {
  id: 'Engenharia de Software',
  title: 'Engenharia de Software',
  category: 'especificos_ti',
  description: 'Metodologias Ágeis (Scrum 2020, Kanban, XP), Engenharia de Requisitos, Padrões GoF, Princípios SOLID e Qualidade de Software.',
  badge: 'Alta Cobrança (FGV & Cebraspe)',
  iconName: 'Layout',
  generalUsefulLinks: [
    {
      title: 'Scrum Guide Oficial 2020 (Em Português - PDF)',
      url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Portuguese-BR.pdf',
      category: 'official',
      badgeLabel: 'Guia Oficial',
      description: 'O texto canônico de Ken Schwaber e Jeff Sutherland com a definição oficial do Scrum.'
    },
    {
      title: 'Refactoring Guru - Padrões de Projeto GoF',
      url: 'https://refactoring.guru/pt-br/design-patterns',
      category: 'doc',
      badgeLabel: 'Guia Visual',
      description: 'Exemplos visuais e explicações claras dos 23 padrões criacionais, estruturais e comportamentais.'
    }
  ],
  lessons: [
    {
      id: 'es-scrum-2020',
      title: 'Scrum Guide (Atualização 2020) & Compromissos de Artefatos',
      subtopic: 'Frameworks Ágeis',
      readTimeMinutes: 7,
      keyTakeaways: [
        'Scrum Master é um "true leader who serves" (Líder Servidor).',
        'O time Scrum é uma unidade coesa de profissionais focados em uma meta por vez (Não há mais subtimes como "Development Team", agora são apenas "Developers").',
        'Cancelamento da Sprint: Prerrogativa EXCLUSIVA do Product Owner caso a Sprint Goal fique obsoleta.',
        'Daily Scrum: Timebox de 15 minutos para os Developers inspecionarem o progresso rumo à Sprint Goal.',
        '3 Compromissos: Product Goal (para o Product Backlog), Sprint Goal (para o Sprint Backlog), Definition of Done (para o Increment).'
      ],
      summary: `O Scrum 2020 simplificou o framework: 3 Papéis (PO, Scrum Master, Developers), 4 Eventos formais dentro da Sprint, e 3 Artefatos com seus 3 respectivos compromissos formais.`,
      mnemonics: 'PILARES DO SCRUM: Transparência, Inspeção e Adaptação (TIA).',
      examPitfalls: [
        'Cebraspe adora afirmar que o Scrum Master pode cancelar a Sprint (FALSO: apenas o PO).',
        'FGV costuma confundir o compromisso do Increment (Definition of Done) com o critério de aceitação de uma estória individual.',
        'Cesgranrio testa se a Sprint Retrospective ocorre antes da Review (FALSO: a Review ocorre antes da Retrospectiva).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: O Scrum 2020 (3 Papéis, 3 Artefatos, 3 Metas)',
          topicTag: '✍️ Esquema Mental',
          paperStyle: 'lined',
          colorTheme: 'yellow',
          headerNote: '📌 Estrutura Completa do Guia 2020',
          handwrittenContent: `O Triângulo de Ouro do Scrum 2020:

1) ARTEFATO: Product Backlog  ===> COMPROMISSO: Product Goal (Meta do Produto)
2) ARTEFATO: Sprint Backlog   ===> COMPROMISSO: Sprint Goal (Meta da Sprint)
3) ARTEFATO: Incremento       ===> COMPROMISSO: Definition of Done (DoD)

3 Papéis (Scrum Team):
• Product Owner (PO): Dono da priorização e ÚNICO que cancela Sprint.
• Scrum Master (SM): Líder servidor, remove impedimentos, facilita eventos.
• Developers: Criam o incremento pronto (fazem a Daily Scrum).`,
          annotations: [
            'Daily Scrum: 15 min, foco na Meta da Sprint.',
            'Sprint Review: Inspeciona o Incremento com Stakeholders.'
          ],
          diagramFormula: 'Pilares: Transparência + Inspeção + Adaptação (TIA)'
        }
      ],
      usefulLinks: [
        {
          title: 'Scrum Guide 2020 em Português - Download Oficial',
          url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Portuguese-BR.pdf',
          category: 'official',
          badgeLabel: 'PDF Oficial',
          description: 'Documento original de 14 páginas essencial para gabaritar questões de métodos ágeis.'
        }
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
      handwrittenNotes: [
        {
          title: 'Quadro de Giz: Resumo dos 5 Princípios SOLID',
          topicTag: '✍️ Clean Architecture',
          paperStyle: 'grid',
          colorTheme: 'green',
          headerNote: '🛠️ As 5 Leis do Tio Bob',
          handwrittenContent: `S -> Responsabilidade Única: Uma classe faz UMA coisa bem feita.
O -> Aberto/Fechado: Adicione novas classes/plugins, não mexa no código velho que já funciona!
L -> Substituição de Liskov: O filho não pode quebrar o contrato do pai (ex: Quadrado herdando de Retângulo é violação clássica!).
I -> Segregação de Interfaces: Crie várias interfaces pequenas em vez de um monólito com 30 métodos vazios.
D -> Inversão de Dependência: Dependa de Interfaces/Abstrações, NUNCA de implementações concretas (classes com 'new').`,
          annotations: [
            'OCP é garantido através de Polimorfismo.',
            'DIP permite mockar repositórios em testes unitários.'
          ]
        }
      ],
      codeExample: {
        language: 'java',
        code: `// Violação do OCP & LSP:\nif (funcionario instanceof Gerente) { calcularBonusGerente(); }\n\n// Solução SOLID (Polimorfismo & OCP):\ninterface Remuneravel { double calcularBonus(); }\nclass Gerente implements Remuneravel { ... }`,
        explanation: 'O uso de polimorfismo permite adicionar novos cargos sem modificar o código do serviço de folha de pagamento existente.'
      },
      usefulLinks: [
        {
          title: 'Os Princípios SOLID Explicados com Exemplos Reais',
          url: 'https://www.youtube.com/results?search_query=solid+principios+java+design+patterns',
          category: 'video',
          badgeLabel: 'Vídeo Aulas',
          description: 'Aprenda a identificar violações de SOLID em trechos de código Java e Python de provas.'
        }
      ],
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
        'Criacionais (5): Singleton, Factory Method, Abstract Factory, Builder, Prototype.',
        'Estruturais (7): Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.',
        'Comportamentais (11): Strategy, Observer, State, Command, Template Method, Chain of Responsibility, Iterator, Mediator, Memento, Visitor.'
      ],
      summary: `Os 23 padrões do Gang of Four categorizam soluções comprovadas para problemas recorrentes no design orientado a objetos.`,
      examPitfalls: [
        'Adapter vs Decorator: Adapter converte uma interface incompatível para outra existente; Decorator agrega novas responsabilidades sem alterar a interface.',
        'Strategy vs State: Strategy troca algoritmos independentes; State altera o comportamento da classe com base na transição do seu estado interno.',
        'Abstract Factory cria FAMÍLIAS de objetos relacionados; Factory Method cria UM tipo de objeto delegando a instanciação a subclasses.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Diferenciação dos Padrões GoF Mais Confusos',
          topicTag: '✍️ Pegadinhas Clássicas',
          paperStyle: 'lined',
          colorTheme: 'cyan',
          headerNote: '⚠️ Comparativo de Prova',
          handwrittenContent: `1) ADAPTER vs FACADE:
   -> Adapter: Converte uma interface existente para que duas classes incompatíveis conversem.
   -> Facade: Cria uma interface simples e amigável na frente de um subsistema complexo com dezenas de classes.

2) STRATEGY vs STATE:
   -> Strategy: O cliente escolhe qual algoritmo quer rodar (ex: cálculo de frete Sedex x PAC).
   -> State: O próprio objeto muda de comportamento sozinho quando seu estado interno muda (ex: Pedido Pendente -> Pago -> Enviado).

3) DECORATOR:
   -> Anexa novas responsabilidades dinamicamente em tempo de execução sem usar herança estática!`,
          annotations: [
            'Singleton: Apenas 1 instância global com construtor privado.',
            'Observer: Notificação 1-para-Muitos quando o Subject muda.'
          ]
        }
      ],
      usefulLinks: [
        {
          title: 'Catálogo Visual de Design Patterns - Refactoring Guru',
          url: 'https://refactoring.guru/pt-br/design-patterns/catalog',
          category: 'doc',
          badgeLabel: 'Catálogo GoF',
          description: 'Estrutura UML, intenção, aplicabilidade e código de cada um dos 23 padrões GoF.'
        }
      ],
      sampleQuestion: {
        banca: 'Cesgranrio',
        statement: 'Qual padrão GoF permite anexar dinamicamente novas responsabilidades a um objeto individual sem afetar os demais objetos da mesma classe e sem recorrer à herança estática?',
        answer: 'Decorator (ou Wrapper)',
        explanation: 'Decorator envolve o objeto original permitindo enriquecer seu comportamento dinamicamente em tempo de execução.'
      }
    }
  ]
};
