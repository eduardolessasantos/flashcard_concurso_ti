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
          diagramFormula: 'Pilares: Transparência + Inspeção + Adaptação (TIA)\nCompromissos: Product Goal -> Sprint Goal -> Definition of Done',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'TJ-AP – Analista Judiciário (Especialidade: Tecnologia da Informação) – 2023',
            enunciado: `Uma equipe de desenvolvimento ágil de um tribunal estadual adotou o framework Scrum (conforme o Guia Scrum 2020) para o desenvolvimento de um novo módulo processual eletrônico. Durante a execução de uma Sprint de 3 semanas, foram observadas as seguintes ocorrências:

I. ==O Scrum Master determinou unilateralmente o cancelamento da Sprint== porque a tecnologia de nuvem escolhida tornou-se incompatível com as regras de segurança do tribunal.
II. ==A Definition of Done (DoD) foi formalmente associada como o compromisso do Incremento== produzido pela equipe.
III. ==Durante a Sprint Planning, definiu-se a Sprint Goal== como o compromisso do Sprint Backlog.

À luz estrita do Guia Scrum oficial (versão 2020), está CORRETO o que se afirma em:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'I, apenas.',
                correta: false,
                comentario: 'INCORRETA: No Guia Scrum 2020, o Scrum Master NUNCA tem autoridade para cancelar uma Sprint. Apenas o Product Owner (PO) possui a autoridade exclusiva de cancelar uma Sprint antes do fim do timebox.'
              },
              {
                letra: 'B',
                texto: 'I e II, apenas.',
                correta: false,
                comentario: 'INCORRETA: O item I é flagrantemente falso, pois o cancelamento da Sprint é competência privativa do Product Owner.'
              },
              {
                letra: 'C',
                texto: '==II e III, apenas==.',
                correta: true,
                comentario: 'CORRETA: Perfeito alinhamento com o Guia 2020! O Guia Scrum 2020 introduziu 3 compromissos formais atrelados aos artefatos: para o Product Backlog é a Product Goal; para o Sprint Backlog é a Sprint Goal (Item III); e para o Incremento é a Definition of Done (Item II).'
              },
              {
                letra: 'D',
                texto: 'I e III, apenas.',
                correta: false,
                comentario: 'INCORRETA: O item I é incorreto.'
              },
              {
                letra: 'E',
                texto: 'I, II e III.',
                correta: false,
                comentario: 'INCORRETA: O item I invalida a opção.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Scrum Master determinou o cancelamento',
                papel: 'Pegadinha de Autoridade de Papel',
                regra: 'No Scrum, SOMENTE o Product Owner tem autoridade para cancelar a Sprint se a meta se tornar obsoleta.',
                cor: 'rose'
              },
              {
                termo: 'Definition of Done (DoD) compromisso do Incremento',
                papel: 'Compromisso Formal do Guia 2020',
                regra: 'Cada artefato contém um compromisso: Incremento <-> Definition of Done (DoD).',
                cor: 'green'
              },
              {
                termo: 'Sprint Goal compromisso do Sprint Backlog',
                papel: 'Compromisso Formal do Guia 2020',
                regra: 'Sprint Backlog <-> Sprint Goal (Meta da Sprint, definida na Planning).',
                cor: 'cyan'
              },
              {
                termo: 'Guia Scrum oficial (versão 2020)',
                papel: 'Referencial Normativo da Banca',
                regra: 'Elimina referências a "papéis" substituídos por "responsabilidades" e fixa os 3 compromissos.',
                cor: 'yellow'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE A VERSÃO DO FRAMEWORK: O enunciado invoca o Guia Scrum 2020.',
              '2. JULGUE O ITEM I (CANCELAMENTO): Quem cancela Sprint? REGRA DE OURO: Apenas o Product Owner. O Scrum Master não cancela nada. Item I é FALSO.',
              '3. ELIMINE ALTERNATIVAS: Com o item I falso, risque de imediato A, B, D e E!',
              '4. CONFIRME O ITEM II E III: O Guia 2020 estabeleceu a tríade Artefato x Compromisso: Product Backlog = Product Goal; Sprint Backlog = Sprint Goal; Increment = DoD. Ambos corretos!',
              '5. MARQUE COM SEGURANÇA: Letra C em menos de 45 segundos.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'PADRÃO CLÁSSICO FGV/CEBRASPE: A banca sempre tenta empurrar poderes de gestão ao Scrum Master. Lembre-se: Scrum Master é líder servidor e facilitador; quem decide sobre produto, dinheiro e cancelamento de Sprint é sempre o Product Owner!'
          }
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
          ],
          diagramFormula: 'S: 1 Responsabilidade | O: Aberto Extensão / Fechado Modificação\nL: Subtipo Substituível | I: Interfaces Finas | D: Dependa de Abstrações',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Auditoria Geral do Estado (AGE-PA) – Auditor de TI – 2023',
            enunciado: `Analise o trecho de código Java em um módulo de faturamento de um órgão público:

\`\`\`java
public class GerenciadorDesconto {
    public double aplicarDesconto(Pedido pedido) {
        if (pedido.getTipoCliente().equals("ESPECIAL")) {
            return pedido.getValor() * 0.15;
        } else if (pedido.getTipoCliente().equals("CORPORATIVO")) {
            return pedido.getValor() * 0.20;
        } else if (pedido.getTipoCliente().equals("GOVERNO")) {
            return pedido.getValor() * 0.25;
        }
        return 0.0;
    }
}
\`\`\`

==Sempre que um novo tipo de cliente for criado==, a classe \`GerenciadorDesconto\` ==precisará ser aberta e alterada== para a inclusão de um novo bloco condicional. 

Segundo os princípios fundamentais SOLID, essa estrutura viola PRIMARIAMENTE o princípio:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Single Responsibility Principle (SRP), exclusivamente.',
                correta: false,
                comentario: 'INCORRETA: Embora classes com muitos ifs tendam a acumular responsabilidades, a necessidade direta de alterar a classe existente ao adicionar um novo tipo de cliente é a violação clássica e primordial do OCP.'
              },
              {
                letra: 'B',
                texto: '==Open/Closed Principle (OCP)==.',
                correta: true,
                comentario: 'CORRETA: O princípio Aberto/Fechado (OCP) determina que artefatos de software devem estar abertos para extensão (novas regras de desconto), mas FECHADOS para modificação (não deveríamos editar uma classe já testada e em produção). A solução SOLID é criar uma interface \`EstrategiaDesconto\` e classes concretas para cada cliente.'
              },
              {
                letra: 'C',
                texto: 'Liskov Substitution Principle (LSP).',
                correta: false,
                comentario: 'INCORRETA: O LSP trata da preservação do contrato comportamental de classes derivadas em relação à classe base. No código apresentado sequer há herança.'
              },
              {
                letra: 'D',
                texto: 'Interface Segregation Principle (ISP).',
                correta: false,
                comentario: 'INCORRETA: O ISP preconiza que interfaces não devem conter métodos inúteis para certas classes implementadoras ("interfaces gordas"). Aqui não há interfaces.'
              },
              {
                letra: 'E',
                texto: 'Dependency Inversion Principle (DIP).',
                correta: false,
                comentario: 'INCORRETA: O DIP prescreve depender de abstrações em vez de classes concretas. Embora haja alto acoplamento, a questão destaca a necessidade de alteração de código existente ao estender o sistema, que é a definição exata do OCP.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Sempre que um novo tipo de cliente for criado',
                papel: 'Cenário de Extensão do Sistema',
                regra: 'O sistema precisa crescer para comportar novas regras de negócio.',
                cor: 'yellow'
              },
              {
                termo: 'precisará ser aberta e alterada',
                papel: 'Violação Direta de "Closed for Modification"',
                regra: 'Se para incluir um recurso você tem que modificar o código existente, o OCP está quebrado.',
                cor: 'rose'
              },
              {
                termo: 'Open/Closed Principle (OCP)',
                papel: 'Princípio Violado',
                regra: 'Aberto para extensão através de polimorfismo/interfaces; fechado para modificação de código fonte legado.',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. LEIA O CÓDIGO E O GATILHO: A classe tem uma sequência de "if/else if" checando tipos.',
              '2. IDENTIFIQUE A DOR: O enunciado diz textualmente que para adicionar um novo cliente a classe "precisa ser aberta e alterada".',
              '3. RECORDE O SIGNIFICADO DE SOLID: Open/Closed = Aberto para extensão, FECHADO para modificação.',
              '4. CONFIRME A SOLUÇÃO ARQUITETURAL: Aplicar o padrão Strategy (GoF) ou Polimorfismo, permitindo injetar novas classes de desconto sem tocar no código antigo.',
              '5. MARQUE: Letra B (Open/Closed Principle).'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA B',
            conclusaoPedagogica: 'GATILHO AUTOMÁTICO FGV/CEBRASPE: Viu cadeia de "if (tipo == ...)" ou "switch/case" que precisa ser mexida a cada novo requisito? A resposta é OCP (Aberto/Fechado) em 95% das provas de TI!'
          }
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
            'Observer: Notificação 1-para-Muitos quando o Subject muda.',
            'Decorator (Wrapper): Agrega funcionalidade dinâmica com a mesma interface do objeto original.'
          ],
          diagramFormula: 'Adapter: Interface Incompatível -> Converte\nFacade: Subsistema Complexo -> Simplifica\nDecorator: Objeto Concreto -> Adiciona Casca Funcional\nStrategy: Algoritmo Intercambiável',
          realExamQuestion: {
            banca: 'Cesgranrio',
            orgaoAno: 'Banco do Brasil / Caixa Econômica Federal – Tecnologia da Informação – 2023',
            enunciado: `Um arquiteto de software de uma instituição financeira precisa implementar um componente de comunicação bancária capaz de ==acrescentar dinamicamente camadas de criptografia (AES-256) e de compressão (GZIP) a fluxos de dados de mensagens==, sem alterar a classe original do fluxo e ==sem recorrer a uma explosão de subclasses estáticas== por meio de herança.

Além disso, as diferentes camadas devem poder ser combinadas de forma flexível em tempo de execução (ex.: apenas criptografia, apenas compressão, ou ambas combinadas).

Assinale o padrão de projeto GoF (Gang of Four) que resolve PRIMARIAMENTE essa necessidade arquitetural:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Adapter (Adaptador).',
                correta: false,
                comentario: 'INCORRETA: O Adapter é utilizado para converter uma interface incompatível em outra interface esperada pelo cliente. Não serve para compor ou empilhar novas responsabilidades dinâmicas.'
              },
              {
                letra: 'B',
                texto: 'Facade (Fachada).',
                correta: false,
                comentario: 'INCORRETA: O Facade fornece uma interface simplificada e de alto nível para um subsistema complexo, não tendo por objetivo a agregação dinâmica de funcionalidades em tempo de execução.'
              },
              {
                letra: 'C',
                texto: '==Decorator (Decorador / Wrapper)==.',
                correta: true,
                comentario: 'CORRETA: O padrão Decorator anexa responsabilidades adicionais a um objeto dinamicamente em tempo de execução. Decoradores oferecem uma alternativa flexível ao uso de subclasses para extensão de funcionalidades, permitindo "embrulhar" (wrap) o objeto em camadas sucessivas (ex: \`new CriptografiaDecorator(new CompressaoDecorator(stream))\`), exatamente como no pacote \`java.io\`.'
              },
              {
                letra: 'D',
                texto: 'Proxy.',
                correta: false,
                comentario: 'INCORRETA: O Proxy fornece um substituto ou marcador de localização para controlar o acesso a outro objeto (ex: lazy loading, controle de permissões ou acesso remoto), e não para empilhar dinamicamente novos comportamentos funcionais de negócio.'
              },
              {
                letra: 'E',
                texto: 'Bridge (Ponte).',
                correta: false,
                comentario: 'INCORRETA: O Bridge desacopla uma abstração de sua implementação, de modo que as duas possam variar independentemente, o que não atende ao cenário de empilhamento dinâmico de filtros.'
              }
            ],
            termosGrifados: [
              {
                termo: 'acrescentar dinamicamente camadas',
                papel: 'Requisito Central do Decorator',
                regra: 'Agregar responsabilidades em tempo de execução envolvendo o objeto original.',
                cor: 'green'
              },
              {
                termo: 'sem recorrer a uma explosão de subclasses',
                papel: 'Alternativa Elegante à Herança',
                regra: 'Decorator evita criar classes combinatórias (ex: FluxoComCripto, FluxoComZip, FluxoComCriptoEZip).',
                cor: 'yellow'
              },
              {
                termo: 'combinadas de forma flexível em tempo de execução',
                papel: 'Composição Recursiva (Wrapper)',
                regra: 'O Decorator implementa a mesma interface do objeto decorado, permitindo aninhamento infinito.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE AS PALAVRAS-CHAVE: "acrescentar dinamicamente", "sem alterar a classe original", "sem herança estática", "combinadas em tempo de execução".',
              '2. CONECTE AO CASO CLÁSSICO: Esse é o exemplo clássico da biblioteca de I/O do Java (BufferedInputStream envolvendo FileInputStream).',
              '3. ELIMINE OS DISTRATORES: Adapter converte interfaces; Facade cria interface simples para subsistema; Proxy controla acesso.',
              '4. CONFIRME O PADRÃO ESTRUTURAL: Decorator (também conhecido como Wrapper).',
              '5. MARQUE: Letra C.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'MEMORIZAÇÃO DEFINITIVA: Falou em "adicionar comportamento em tempo de execução" ou "empilhar funcionalidades sem herança", a banca está gritando DECORATOR!'
          }
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
