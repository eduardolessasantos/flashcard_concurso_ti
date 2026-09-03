import { StudyGuideTopic } from '../../types';

export const GOVERNANCE_TOPIC: StudyGuideTopic = {
  id: 'Governança & Gestão de TI',
  title: 'Governança & Gestão de TI',
  category: 'especificos_ti',
  description: 'ITIL v4 (SVS, Cadeia de Valor, 7 Princípios), COBIT 2019 (EDM, APO, BAI, DSS, MEA), Gestão Ágil e Gestão de Processos BPMN.',
  badge: 'Governança Corporativa (FGV & Cesgranrio)',
  iconName: 'Building2',
  generalUsefulLinks: [
    {
      title: 'Axelos - ITIL 4 Foundation Overview',
      url: 'https://www.axelos.com/certifications/itil-service-management',
      category: 'official',
      badgeLabel: 'Axelos Oficial',
      description: 'Estrutura oficial do ITIL 4, Sistema de Valor de Serviço (SVS) e 34 práticas de gerenciamento.'
    },
    {
      title: 'ISACA - COBIT 2019 Framework',
      url: 'https://www.isaca.org/resources/cobit',
      category: 'official',
      badgeLabel: 'ISACA Oficial',
      description: 'Framework de governança corporativa de informação e tecnologia, 40 objetivos e fatores de design.'
    },
    {
      title: 'BPM CBOK Guia para o Gerenciamento de Processos de Negócio',
      url: 'https://www.abpmp.org/',
      category: 'doc',
      badgeLabel: 'ABPMP Oficial',
      description: 'Guia canônico de modelagem, análise e desenho de processos de negócio com notação BPMN.'
    }
  ],
  lessons: [
    {
      id: 'gov-itil-v4-svs',
      title: 'ITIL v4: Conceito de Serviço, SVS, 7 Princípios e Cadeia de Valor',
      subtopic: 'Gerenciamento de Serviços de TI (ITSM)',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Conceito de Serviço e Valor: Serviço é um meio de permitir a COCRIAÇÃO DE VALOR facilitando os resultados que os clientes desejam alcançar, sem que eles precisem gerenciar custos e riscos específicos.',
        'Utilidade vs Garantia: Utilidade é a adequação ao propósito ("o que o serviço faz" / fit for purpose); Garantia é a adequação ao uso ("como o serviço desempenha" / fit for use - disponibilidade, capacidade, segurança e continuidade). O valor exige AMBOS!',
        'SVS (Service Value System - Sistema de Valor de Serviço): Representa como todos os componentes e atividades da organização trabalham juntos como um sistema para viabilizar a criação de valor. Componentes: Princípios Orientadores, Governança, Cadeia de Valor de Serviço, Práticas e Melhoria Contínua.',
        'Os 7 Princípios Orientadores: 1. Foco no Valor, 2. Começar de onde você está, 3. Progredir iterativamente com feedback, 4. Colaborar e promover visibilidade, 5. Pensar e trabalhar holisticamente, 6. Manter de forma simples e prática, 7. Otimizar e automatizar.',
        'Cadeia de Valor do Serviço (6 Atividades): Plan (Planejar), Improve (Melhorar), Engage (Engajar), Design and Transition (Desenho e Transição), Obtain/Build (Obter/Construir), Deliver and Support (Entregar e Suportar) - mnemônico PIEDOD.',
        'As 34 Práticas da ITIL v4: 14 Práticas de Gerenciamento Geral, 17 Práticas de Gerenciamento de Serviço (ex: Incidentes, Problemas, Mudanças, Service Desk), 3 Práticas de Gerenciamento Técnico.'
      ],
      summary: `A ITIL v4 evoluiu do modelo linear de ciclo de vida (ITIL v3) para um Sistema de Valor de Serviço (SVS) dinâmico e focado em cocriação de valor, sustentado por 7 princípios universais e 6 atividades flexíveis de cadeia de valor.`,
      mnemonics: '7 PRINCÍPIOS ITIL: Valor, De onde está, Iterativo, Colaborar, Holístico, Simples, Automatizar. CADEIA DE VALOR: PIEDOD (Plan, Improve, Engage, Design/Transition, Obtain/Build, Deliver/Support).',
      examPitfalls: [
        'Utilidade ("o que faz") vs Garantia ("como funciona com disponibilidade/segurança") -> Bancas trocam esses dois conceitos sistematicamente!',
        'Na ITIL v4, "Incidente" (interrupção não planejada de um serviço) é diferente de "Problema" (a causa-raiz desconhecida de um ou mais incidentes).',
        'Erro Conhecido (Known Error): Problema que já teve sua causa-raiz identificada e para o qual existe uma Solução de Contorno (Workaround).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: ITIL 4 (Utilidade x Garantia & 7 Princípios)',
          topicTag: '✍️ ITIL v4 Express',
          paperStyle: 'lined',
          colorTheme: 'yellow',
          headerNote: '📌 Diferenças fundamentais em provas',
          handwrittenContent: `1) O BINÔMIO DO VALOR NA ITIL:
   • UTILIDADE (Fit for Purpose)  = "O que o software FAZ" (Funcionalidades, requisitos).
   • GARANTIA  (Fit for Use)      = "Como ele se COMPORTA" (Disponibilidade, Segurança, Capacidade, Continuidade).
   -> Valor só existe se tiver Utilidade E Garantia juntas!

2) OS 7 PRINCÍPIOS ORIENTADORES:
   1. Foco no valor (Sempre perguntar: quem é o cliente?)
   2. Começar de onde você está (Não jogue fora o que já funciona!)
   3. Progredir iterativamente com feedback (Abordagem ágil)
   4. Colaborar e promover visibilidade (Fim dos silos)
   5. Pensar e trabalhar holisticamente (Visão sistêmica)
   6. Manter simples e prático (Eliminar desperdícios)
   7. Otimizar e automatizar (Automatize apenas processos padronizados)

3) INCIDENTE vs PROBLEMA vs WORKAROUND:
   • Incidente: O servidor caiu! (Meta: Restaurar rápido!).
   • Problema: Por que o servidor caiu? (Meta: Achar a causa raiz).
   • Workaround: Reiniciar resolve provisoriamente (Solução de contorno).`,
          annotations: [
            'Utilidade = Fit for Purpose (O que o serviço faz).',
            'Garantia = Fit for Use (Disponibilidade, Segurança, Continuidade, Capacidade).',
            'SVS é o Sistema de Valor de Serviço centrado em Cocriação de Valor.'
          ],
          diagramFormula: 'Valor = Utilidade (Funcionalidade) + Garantia (Disponibilidade + Segurança + Capacidade + Continuidade)\nIncidente (Restauração Rápida) != Problema (Causa Raiz) != Workaround (Contorno)',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'SEFAZ-MG – Auditor Fiscal da Receita Estadual (Tecnologia da Informação) – 2023',
            enunciado: `No âmbito da biblioteca de boas práticas ITIL 4 (Information Technology Infrastructure Library), o valor de um serviço entregue aos contribuintes e à administração tributária é cocriado a partir de duas dimensões centrais complementares:

"A dimensão I refere-se à ==adequação ao propósito (fit for purpose)==, ou seja, as funcionalidades que o serviço oferece para atender às necessidades específicas do negócio. Por sua vez, a dimensão II refere-se à ==adequação ao uso (fit for use)==, garantindo níveis satisfatórios de disponibilidade, capacidade, continuidade e segurança da informação."

As dimensões I e II correspondem, respectiva e formalmente, aos conceitos de:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Garantia e Eficácia.',
                correta: false,
                comentario: 'INCORRETA: A dimensão I é Utilidade e a II é Garantia.'
              },
              {
                letra: 'B',
                texto: '==Utilidade e Garantia==.',
                correta: true,
                comentario: 'CORRETA: Definição literal da ITIL 4! Utilidade (Utility) = fit for purpose (o que o serviço faz, funcionalidades e requisitos de negócio). Garantia (Warranty) = fit for use (como o serviço desempenha, assegurando disponibilidade, capacidade, continuidade e segurança). Ambas são indispensáveis para gerar valor.'
              },
              {
                letra: 'C',
                texto: 'Eficiência e Utilidade.',
                correta: false,
                comentario: 'INCORRETA: Inverte e substitui Garantia por Eficiência.'
              },
              {
                letra: 'D',
                texto: 'Garantia e Utilidade.',
                correta: false,
                comentario: 'INCORRETA: Inverteu a ordem respectiva dos conceitos I e II.'
              },
              {
                letra: 'E',
                texto: 'Cadeia de Valor e Prática de Gerenciamento.',
                correta: false,
                comentario: 'INCORRETA: Trata-se de outros componentes do Sistema de Valor de Serviço (SVS).'
              }
            ],
            termosGrifados: [
              {
                termo: 'adequação ao propósito (fit for purpose)',
                papel: 'Definição Canônica de Utilidade',
                regra: 'Utilidade = o que o serviço faz em termos de funcionalidade para cumprir seu objetivo.',
                cor: 'yellow'
              },
              {
                termo: 'adequação ao uso (fit for use)',
                papel: 'Definição Canônica de Garantia',
                regra: 'Garantia = disponibilidade, capacidade, segurança e continuidade operacional.',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. GRUPO MNEMÔNICO CENTRAL DA ITIL: "Utilidade é o propósito (Purpose); Garantia é o uso (Use)".',
              '2. ANALISE A DIMENSÃO I: "adequação ao propósito (fit for purpose)" = UTILIDADE.',
              '3. ANALISE A DIMENSÃO II: "adequação ao uso (fit for use - disponibilidade/segurança)" = GARANTIA.',
              '4. ATENÇÃO À PALAVRA "RESPECTIVAMENTE": I = Utilidade, II = Garantia.',
              '5. MARQUE: Letra B com total segurança.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA B',
            conclusaoPedagogica: 'PEGADINHA CLÁSSICA DE BANCAS: Trocar "Utilidade" por "Garantia" ou inverter a ordem "respectiva". Guarde o mantra: Utilidade = Propósito | Garantia = Uso seguro e disponível!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'ITIL 4 Guia Completo - Service Value System',
          url: 'https://www.axelos.com/itil-4',
          category: 'official',
          badgeLabel: 'Axelos Guide',
          description: 'Visão das 4 dimensões do gerenciamento de serviço e cadeia de valor.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'No âmbito do framework ITIL 4, a garantia de que um serviço atenderá aos requisitos de disponibilidade, capacidade, continuidade e segurança da informação refere-se ao conceito de:',
        answer: 'Garantia (Fit for use)',
        explanation: 'A Garantia representa a adequação ao uso (fit for use), assegurando que o serviço estará disponível, seguro e com capacidade adequada quando requerido.'
      }
    },
    {
      id: 'gov-cobit-2019-bpmn',
      title: 'COBIT 2019 (Governança vs Gestão) e Modelagem de Processos BPMN',
      subtopic: 'Governança de TIC & Gestão por Processos',
      readTimeMinutes: 9,
      keyTakeaways: [
        'COBIT 2019: Framework de Governança Corporativa de I&T desenvolvido pela ISACA. Separação categórica entre Governança e Gestão.',
        'Governança (EDM - Avaliar, Dirigir e Monitorar): Responsabilidade do Conselho de Administração / Alta Direção. Avalia necessidades estratégicas, direciona prioridades e monitora conformidade.',
        'Gestão (APO, BAI, DSS, MEA): Responsabilidade da Diretoria Executiva / Gestores de TI. Planeja, constrói, executa e monitora as atividades alinhadas à direção da governança.',
        'Os 5 Domínios e 40 Objetivos do COBIT 2019: 1. EDM (Evaluate, Direct, Monitor - 5 objetivos de Governança); 2. APO (Align, Plan, Organize - 14 objetivos); 3. BAI (Build, Acquire, Implement - 11 objetivos); 4. DSS (Deliver, Service, Support - 6 objetivos); 5. MEA (Monitor, Evaluate, Assess - 4 objetivos).',
        'Goals Cascade (Cascata de Objetivos): Alinha Necessidades das Partes Interessadas -> Objetivos Corporativos -> Objetivos de Alinhamento -> Objetivos de Governança e Gestão.',
        'Hierarquia de Processos (BPM CBOK): Macroprocessos (visão estratégica de ponta a ponta) -> Processos (conjunto de atividades encadeadas que geram valor ao cliente) -> Subprocessos -> Atividades -> Tarefas (unidade elementar indivisível de trabalho).',
        'Notação BPMN: Piscinas (Pools - organizações/entidades participantes), Raias (Lanes - departamentos/papéis internos), Eventos (Início, Intermediário, Fim - círculos), Atividades (retângulos com cantos arredondados), Gateways (losangos para desvios de fluxo: Exclusivo X, Paralelo +, Inclusivo O), Fluxos de Sequência (setas contínuas) e Fluxos de Mensagem (setas tracejadas entre pools diferentes).'
      ],
      summary: `O COBIT 2019 estabelece a governança corporativa de TI com 40 objetivos distribuídos em 5 domínios, enquanto o BPMN padroniza o desenho e a otimização dos fluxos operacionais da organização.`,
      mnemonics: 'DOMÍNIOS COBIT 2019: EDM (Governança - 5) | APO, BAI, DSS, MEA (Gestão - 35). Total = 40 Objetivos!',
      examPitfalls: [
        'Governança (Avalia, Dirige, Monitora - EDM) NÃO executa nem constrói software; quem planeja, constrói e roda é a GESTÃO (APO, BAI, DSS, MEA).',
        'Em BPMN: Fluxo de Mensagem (tracejado) conecta PISCINAS diferentes; NUNCA use fluxo de sequência contínuo para cruzar fronteiras de piscinas distintas!',
        'Gateway Exclusivo (XOR) toma apenas 1 caminho; Gateway Paralelo (AND) aciona todos os caminhos simultaneamente.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro de Giz: COBIT 2019 (5 Domínios) & BPMN',
          topicTag: '✍️ Governança & Processos',
          paperStyle: 'grid',
          colorTheme: 'cyan',
          headerNote: '📊 Estrutura do COBIT 2019 & Elementos BPMN',
          handwrittenContent: `1) COBIT 2019 - 5 DOMÍNIOS (40 Objetivos):
   🏛️ GOVERNANÇA (Conselho / Diretoria):
   • EDM (Evaluate, Direct, Monitor) -> 5 Objetivos

   ⚙️ GESTÃO (Operação / Equipes de TI):
   • APO (Align, Plan, Organize)     -> 14 Objetivos
   • BAI (Build, Acquire, Implement) -> 11 Objetivos
   • DSS (Deliver, Service, Support) -> 6 Objetivos
   • MEA (Monitor, Evaluate, Assess) -> 4 Objetivos

2) BPMN ELEMENTOS BÁSICOS:
   • Piscina (Pool): A empresa ou participante externo.
   • Raia (Lane): O departamento (ex: Financeiro, TI).
   • Eventos: Círculos (Início linha fina, Fim linha grossa).
   • Gateways (Losangos):
     [ X ] Exclusivo (XOR - apenas 1 rota).
     [ + ] Paralelo (AND - todas as rotas ao mesmo tempo).
     [ O ] Inclusivo (OR - 1 ou mais rotas possíveis).`,
          annotations: [
            'COBIT separa Governança (EDM - 5 objetivos) de Gestão (APO, BAI, DSS, MEA - 35 objetivos).',
            'No BPMN, Fluxos de Sequência NUNCA cruzam bordas de Piscinas (Pools).'
          ],
          diagramFormula: 'Governança (Avaliar, Dirigir, Monitorar) ---> Alinha Diretrizes\nGestão (Planejar, Construir, Entregar, Monitorar) ---> Executa Operações',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Auditor Federal de Controle Externo (TCU) – Tecnologia da Informação – 2022',
            enunciado: `De acordo com o framework COBIT 2019 da ISACA, a governança corporativa de informação e tecnologia exige uma clara distinção conceitual e prática entre as responsabilidades de Governança e as de Gestão.

A respeito dessa diferenciação fundamental, assinale a afirmativa CORRETA:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'A Gestão é de responsabilidade primária do Conselho de Administração (Board of Directors), incumbida de avaliar as necessidades estratégicas das partes interessadas.',
                correta: false,
                comentario: 'INCORRETA: Avaliar necessidades e definir o direcionamento estratégico do Conselho é atribuição exclusiva de GOVERNANÇA (EDM).'
              },
              {
                letra: 'B',
                texto: 'O domínio EDM (Evaluate, Direct and Monitor) agrega 14 objetivos de gestão executiva focados na construção e aquisição de soluções tecnológicas.',
                correta: false,
                comentario: 'INCORRETA: EDM tem 5 objetivos e pertence à GOVERNANÇA. Quem constrói e adquire é o domínio BAI (Build, Acquire, Implement), que pertence à Gestão.'
              },
              {
                letra: 'C',
                texto: '==A Governança garante que as necessidades das partes interessadas sejam avaliadas para definir objetivos corporativos acordados, direcionando prioridades e monitorando desempenho e conformidade==.',
                correta: true,
                comentario: 'CORRETA: Transcrição literal do COBIT 2019! A governança (sob responsabilidade da alta administração / Conselho) tem o tríplice papel EDM: Avaliar (Evaluate) necessidades, Dirigir (Direct) através de priorização/decisões e Monitorar (Monitor) desempenho e conformidade.'
              },
              {
                letra: 'D',
                texto: 'As atividades operacionais de suporte técnico, service desk e entrega diária de serviços integram o domínio EDM de governança.',
                correta: false,
                comentario: 'INCORRETA: Suporte e entrega integram o domínio DSS (Deliver, Service and Support) de GESTÃO.'
              },
              {
                letra: 'E',
                texto: 'O COBIT 2019 aboliu a distinção entre governança e gestão unificando todos os 40 processos em um comitê técnico consultivo.',
                correta: false,
                comentario: 'INCORRETA: A separação entre governança e gestão permanece como um dos princípios cardeais mais fortes do COBIT 2019.'
              }
            ],
            termosGrifados: [
              {
                termo: 'avaliadas para definir objetivos corporativos, direcionando prioridades e monitorando desempenho',
                papel: 'Tríade EDM de Governança',
                regra: 'Governança = Evaluate (Avaliar) + Direct (Dirigir) + Monitor (Monitorar).',
                cor: 'cyan'
              },
              {
                termo: 'distinção conceitual e prática entre Governança e Gestão',
                papel: 'Pilar Arquitetural do COBIT',
                regra: 'Governança dita a estratégia; Gestão planeja, constrói, entrega e opera.',
                cor: 'yellow'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE AS PALAVRAS-CHAVE DO COBIT: Governança = EDM (Avaliar, Dirigir, Monitorar). Gestão = Planejar, Construir, Executar, Monitorar.',
              '2. EXAMINE A LETRA A: Atribui avaliar necessidades à "Gestão". Errado!',
              '3. EXAMINE A LETRA B: Diz que EDM é domínio de "gestão executiva". Errado, é governança!',
              '4. EXAMINE A LETRA C: Descreve fielmente as 3 ações do EDM: avaliar necessidades, direcionar prioridades e monitorar desempenho.',
              '5. MARQUE: Letra C.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'RESUMO COBIT: Governança define o QUE deve ser feito e para ONDE a empresa vai (EDM). Gestão arregaça as mangas e faz acontecer (APO, BAI, DSS, MEA)!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'COBIT 2019 Guia de Governança - ISACA',
          url: 'https://www.isaca.org/resources/cobit',
          category: 'official',
          badgeLabel: 'ISACA Official',
          description: 'Princípios do sistema de governança e fatores de design.'
        }
      ],
      sampleQuestion: {
        banca: 'Cesgranrio',
        statement: 'No framework COBIT 2019, o domínio que compreende os objetivos de governança focados em avaliar, dirigir e monitorar o uso da informação e tecnologia pela organização é denominado:',
        answer: 'EDM (Evaluate, Direct and Monitor)',
        explanation: 'EDM é o único domínio de governança do COBIT 2019, subordinando os outros quatro domínios de gestão (APO, BAI, DSS e MEA).'
      }
    },
    {
      id: 'gov-projetos-scrum-kanban-xp',
      title: 'Gerenciamento de Projetos vs Operações, PMBOK, Kanban e XP',
      subtopic: 'Metodologias de Gestão de Projetos',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Projeto vs Operação: Projeto é um esforço temporário empreendido para criar um produto, serviço ou resultado exclusivo (possui início, meio e fim definidos); Operação é contínua, repetitiva e visa manter o negócio em funcionamento diário.',
        'Projetos, Programas e Portfólios: Projeto (resultado exclusivo único) -> Programa (grupo de projetos relacionados gerenciados de forma coordenada para obter benefícios não disponíveis individualmente) -> Portfólio (conjunto de projetos, programas e operações agrupados para atingir objetivos estratégicos do negócio).',
        'Kanban: Focado em fluxo contínuo, visualização do trabalho no quadro (Kanban Board), LIMITE DE TRABALHO EM PROGRESSO (WIP Limits - Work in Progress) para evitar gargalos e reduzir Lead Time / Cycle Time. Não possui papéis ou iterações fixas prescritas.',
        'XP (Extreme Programming): Metodologia ágil com foco rigoroso em engenharia de software e qualidade técnica. Práticas centrais: TDD (Test-Driven Development - ciclo Red-Green-Refactor), Pair Programming (Programação em Par: Piloto e Copiloto), Refatoração Contínua, Integração Contínua (CI), Design Simples, Propriedade Coletiva do Código, Cliente Presente (On-site Customer) e Ritmo Sustentável (40h semanais sem burnout).'
      ],
      summary: `O gerenciamento contemporâneo de TI combina a governança de portfólios corporativos com práticas ágeis adaptativas como Kanban (otimização de fluxo) e Extreme Programming (excelência técnica na codificação).`,
      mnemonics: 'PRÁTICAS XP: TDD (Red-Green-Refactor), Pair Programming, CI, Refatoração, Propriedade Coletiva.',
      examPitfalls: [
        'Scrum possui iterações (Sprints com timebox) e papéis definidos; Kanban NÃO possui iterações obrigatórias nem papéis formais pré-determinados, focando em fluxo contínuo e limites de WIP.',
        'TDD segue a ordem estrita: 1. Escreve o teste que falha (Red), 2. Escreve o código mínimo para passar (Green), 3. Melhora a arquitetura do código (Refactor).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Portfólio vs Programa & Ciclo TDD do XP',
          topicTag: '✍️ Gestão Ágil & PMBOK',
          paperStyle: 'lined',
          colorTheme: 'rose',
          headerNote: '🛠️ Comparativo Prático de Engenharia e Gestão',
          handwrittenContent: `1) HIERARQUIA CORPORATIVA:
   • Portfólio: Estratégia global (Seleciona os investimentos certos).
   • Programa: Grupo de projetos com sinergia e benefícios conjuntos.
   • Projeto: Temporário, cria produto único (Início e Fim).
   • Operação: Contínua, repetitiva (Sustentação/Suporte).

2) AS 3 ETAPAS DO TDD (Extreme Programming):
   🔴 1. RED: Escreva o teste unitário ANTES de codificar (ele vai falhar!).
   🟢 2. GREEN: Escreva a lógica mais simples possível para fazer o teste passar.
   🔵 3. REFACTOR: Limpe o código, elimine duplicações, mantendo o teste verde!

3) KANBAN - REGRA DE OURO:
   • "Pare de começar e comece a terminar!"
   • Limite o WIP (Work In Progress) para destravar gargalos.`,
          annotations: [
            'No TDD, o teste SEMPRE antecede a implementação do código.',
            'Kanban usa limites de WIP (Work in Progress) para otimizar o fluxo contínuo.'
          ],
          diagramFormula: 'TDD: [1. Escreve Teste] -> [2. RED (Falha)] -> [3. Código Mínimo] -> [4. GREEN (Passou)] -> [5. REFACTOR (Otimiza)]',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Prefeitura de São Paulo – Auditor Fiscal Tributário Municipal (Tecnologia da Informação) – 2023',
            enunciado: `No contexto da engenharia de software ágil fundamentada na metodologia ==Extreme Programming (XP)==, o desenvolvimento orientado a testes (==TDD - Test-Driven Development==) orienta a rotina de codificação diária dos desenvolvedores.

Assinale a opção que descreve com exatidão a sequência cronológica de etapas preconizada pelo ciclo canônico do TDD:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Codificar a funcionalidade completa em produção -> Realizar testes manuais de aceitação -> Refatorar o código para remover warnings.',
                correta: false,
                comentario: 'INCORRETA: Isso é o modelo tradicional de desenvolvimento, oposto ao TDD.'
              },
              {
                letra: 'B',
                texto: 'Elaborar a suíte completa de testes de carga -> Solicitar aprovação do cliente on-site -> Escrever os testes unitários após o deploy.',
                correta: false,
                comentario: 'INCORRETA: Testes unitários no TDD são escritos antes de qualquer deploy ou linha de código produtivo.'
              },
              {
                letra: 'C',
                texto: '==Escrever um teste automatizado que falha (Red) -> Escrever o código de produção mínimo para fazê-lo passar (Green) -> Refatorar o código para melhorar a estrutura mantendo os testes passando (Refactor)==.',
                correta: true,
                comentario: 'CORRETA: Esse é o ciclo Red-Green-Refactor, pedra fundamental do TDD formulado por Kent Beck no Extreme Programming! Primeiro o teste que falha (Red), depois o código mínimo estritamente necessário para aprovação (Green) e, por fim, a melhoria do design eliminando duplicações sem alterar o comportamento externo (Refactor).'
              },
              {
                letra: 'D',
                texto: 'Executar testes de estresse SAST e DAST -> Refatorar os microserviços -> Implementar o código e aguardar o resultado do linter.',
                correta: false,
                comentario: 'INCORRETA: SAST e DAST são ferramentas de segurança de aplicação, não o ciclo TDD.'
              },
              {
                letra: 'E',
                texto: 'Refatorar a arquitetura de classes -> Escrever o código produtivo -> Executar os testes unitários ao final da sprint.',
                correta: false,
                comentario: 'INCORRETA: A refatoração é a última etapa, nunca a primeira.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Extreme Programming (XP)',
                papel: 'Metodologia Ágil de Engenharia',
                regra: 'Focada em excelência técnica, código limpo, testes automáticos e ritmo sustentável.',
                cor: 'cyan'
              },
              {
                termo: 'TDD - Test-Driven Development',
                papel: 'Prática de Desenvolvimento Guiado por Testes',
                regra: 'O teste antecede o código de produção e orienta o design.',
                cor: 'green'
              },
              {
                termo: 'Red -> Green -> Refactor',
                papel: 'Ciclo Canônico de 3 Passos',
                regra: '1. Teste falha (Red) -> 2. Código mínimo passa (Green) -> 3. Limpeza do código (Refactor).',
                cor: 'yellow'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE O TEMA: TDD no Extreme Programming.',
              '2. LEMBRE-SE DO SEMÁFORO DO TDD: Vermelho (Red) -> Verde (Green) -> Refatora (Refactor).',
              '3. CONFIRA A SEQUÊNCIA: 1) Teste antes do código (Red); 2) Código mínimo para aprovação (Green); 3) Refatoração com segurança dos testes verdes.',
              '4. ANALISE AS ALTERNATIVAS: A letra C é a única que reproduz com precisão esse ciclo.',
              '5. MARQUE: Letra C com 100% de convicção.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'MANTRA DO TDD: "Teste primeiro, código mínimo depois, limpeza sempre!" Se o teste não existia antes do código, NÃO foi TDD!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Extreme Programming Rules & Practices',
          url: 'http://www.extremeprogramming.org/',
          category: 'doc',
          badgeLabel: 'XP Guide',
          description: 'Regras de planejamento, design, codificação e testes no Extreme Programming.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'No Extreme Programming (XP), a prática de desenvolvimento guiado por testes (TDD) preconiza qual sequência de atividades pelo desenvolvedor?',
        answer: 'Escrever o teste primeiro, vê-lo falhar, implementar o código para passar no teste e depois refatorar.',
        explanation: 'O ciclo canônico do TDD é Red (falha inicial do teste), Green (código mínimo para aprovação) e Refactor (refatoração e limpeza do design).'
      }
    }
  ]
};
