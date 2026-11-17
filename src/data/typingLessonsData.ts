import { LicaoDigitacao } from '../types';

export const TYPING_LESSONS: LicaoDigitacao[] = [
  {
    id: 'acid-banco-dados',
    titulo: 'Propriedades ACID em Bancos de Dados',
    topico: 'Bancos de Dados',
    banca: 'Cebraspe',
    dificuldade: 'iniciante',
    tempoEstimadoMin: 4,
    descricao: 'Domine as quatro propriedades fundamentais de transações em bancos relacionais: Atomicidade, Consistência, Isolamento e Durabilidade.',
    trechos: [
      {
        id: 'acid-1',
        texto: 'A atomicidade garante que todas as operações da transação sejam executadas como uma unidade única e indivisível.',
        palavraChave: 'Atomicidade',
        dicaProfessor: 'Excelente! O lema da atomicidade é "Tudo ou Nada". Se ocorrer qualquer erro antes do commit, todas as alterações anteriores são revertidas via Rollback.',
        alertaBanca: 'Cebraspe adora afirmar que se 99% das instruções forem salvas, a transação foi atômica. Falso! É 100% ou 0%.',
        perguntaFixacao: {
          pergunta: 'Se uma transação falhar na sua última instrução, a propriedade da atomicidade permite que o banco grave as instruções anteriores já concluídas?',
          gabarito: 'ERRADO',
          explicacao: 'Pela regra da atomicidade, se uma operação falha, toda a transação é abortada e desfeita integralmente.'
        }
      },
      {
        id: 'acid-2',
        texto: 'A consistência assegura que uma transação leve o banco de dados de um estado válido para outro estado válido.',
        palavraChave: 'Consistência',
        dicaProfessor: 'Muito bem! A consistência garante que nenhuma regra de integridade, chave primária, chave estrangeira ou trigger seja violada.',
        alertaBanca: 'Atenção com a FGV: ela costuma confundir consistência do ACID (regras de integridade relacional) com a consistência eventual de bancos NoSQL.',
        perguntaFixacao: {
          pergunta: 'A consistência do ACID garante a obediência às restrições de integridade definidas no esquema do banco de dados.',
          gabarito: 'CERTO',
          explicacao: 'Correto! Transações não podem quebrar regras de validação, unicidade ou integridade referencial.'
        }
      },
      {
        id: 'acid-3',
        texto: 'O isolamento determina que transações concorrentes não interfiram entre si antes de sua finalização.',
        palavraChave: 'Isolamento',
        dicaProfessor: 'Ótima digitação! É o isolamento que previne leitura suja (dirty read), leitura não repetível e leituras fantasmas.',
        alertaBanca: 'Fique atento aos 4 níveis ANSI SQL: Read Uncommitted, Read Committed, Repeatable Read e Serializable.'
      },
      {
        id: 'acid-4',
        texto: 'A durabilidade assegura que os resultados de uma transação confirmada sejam permanentes mesmo em caso de falha do sistema.',
        palavraChave: 'Durabilidade',
        dicaProfessor: 'Fechou com chave de ouro! Assim que o comando COMMIT é confirmado, o WAL (Write-Ahead Logging) assegura que os dados não serão perdidos nem se faltar energia no servidor.',
        alertaBanca: 'Pegadinha Cebraspe: Dizer que os dados duráveis ficam na memória RAM volátil. Eles obrigatoriamente precisam ser persistidos em disco não volátil.'
      }
    ]
  },
  {
    id: 'solid-srp-ocp',
    titulo: 'Princípios SOLID: SRP e OCP',
    topico: 'Arquitetura de Software',
    banca: 'FGV',
    dificuldade: 'intermediario',
    tempoEstimadoMin: 5,
    descricao: 'Fixe na ponta dos dedos os dois primeiros pilares do design orientado a objetos: Single Responsibility e Open/Closed.',
    trechos: [
      {
        id: 'solid-1',
        texto: 'Uma classe deve ter um, e apenas um, motivo para mudar, devendo ser responsável por um único ator de negócio.',
        palavraChave: 'Single Responsibility Principle (SRP)',
        dicaProfessor: 'Perfeito! Muitas pessoas acham que SRP significa que uma classe deve fazer apenas uma coisa, mas a definição de Robert C. Martin é sobre atores e motivos de mudança!',
        alertaBanca: 'A FGV frequentemente coloca no enunciado: "uma classe que formata relatórios e também executa a query no banco viola qual princípio?". Resposta: SRP!',
        perguntaFixacao: {
          pergunta: 'De acordo com o SRP, uma classe de funcionário que calcula o salário líquido e também gera a página HTML de exibição possui alta coesão e respeita o princípio.',
          gabarito: 'ERRADO',
          explicacao: 'Ela possui dois motivos distintos para mudar (regras de RH e regras de apresentação visual), violando flagrantemente o SRP.'
        }
      },
      {
        id: 'solid-2',
        texto: 'Entidades de software devem estar abertas para extensão, mas fechadas para modificação.',
        palavraChave: 'Open/Closed Principle (OCP)',
        dicaProfessor: 'Muito bom ritmo! Para aplicar o OCP, você cria abstrações (interfaces ou classes abstratas). Para adicionar um novo comportamento, você estende e não edita o código já testado.',
        alertaBanca: 'Dica de ouro: Se você vir um código com múltiplos switches ou if/else encadeados verificando tipos de objetos para aplicar comportamentos diferentes, o OCP está sendo violado!'
      }
    ]
  },
  {
    id: 'lgpd-principios',
    titulo: 'LGPD: Princípios Fundamentais (Art. 6º)',
    topico: 'Legislação & Proteção de Dados',
    banca: 'Cesgranrio',
    dificuldade: 'iniciante',
    tempoEstimadoMin: 4,
    descricao: 'Digite e memorize os princípios mais cobrados da Lei Geral de Proteção de Dados: Finalidade, Adequação e Necessidade.',
    trechos: [
      {
        id: 'lgpd-1',
        texto: 'O princípio da finalidade exige a realização do tratamento para propósitos legítimos, específicos e informados ao titular.',
        palavraChave: 'Finalidade',
        dicaProfessor: 'Mandou bem! Guarde a palavra-chave: "propósitos específicos". É expressamente proibido o tratamento genérico sem especificar a finalidade real.',
        alertaBanca: 'Cesgranrio costuma trocar as definições de Finalidade e Adequação nas alternativas. Fique esperto!'
      },
      {
        id: 'lgpd-2',
        texto: 'A necessidade impõe a limitação do tratamento ao mínimo necessário para o cumprimento de suas finalidades.',
        palavraChave: 'Necessidade (Minimização)',
        dicaProfessor: 'Exatamente! Este princípio também é internacionalmente chamado de "Minimização de Dados". Se um aplicativo de lanterna pede acesso aos seus contatos e GPS, fere a necessidade.',
        alertaBanca: 'Pegadinha comum: Afirmar que a empresa pode coletar qualquer dado preventivamente pensando em usos futuros. A LGPD veda isso terminantemente!',
        perguntaFixacao: {
          pergunta: 'O princípio da necessidade desobriga a empresa de pedir consentimento e permite a coleta de dados excedentes para fins estatísticos futuros não especificados.',
          gabarito: 'ERRADO',
          explicacao: 'A necessidade restringe a coleta estritamente ao mínimo indispensável para a finalidade declarada.'
        }
      }
    ]
  },
  {
    id: 'scrum-pilares-eventos',
    titulo: 'Scrum: Pilares e a Reunião Diária',
    topico: 'Engenharia de Software',
    banca: 'Cebraspe',
    dificuldade: 'iniciante',
    tempoEstimadoMin: 3,
    descricao: 'Pratique a digitação dos 3 pilares empíricos do Scrum e a finalidade da Daily Scrum segundo o Scrum Guide oficial.',
    trechos: [
      {
        id: 'scrum-1',
        texto: 'O controle de processo empírico do Scrum se apoia em três pilares fundamentais: transparência, inspeção e adaptação.',
        palavraChave: 'Tríade Empírica',
        dicaProfessor: 'Memorize o mnemônico TIA: Transparência, Inspeção e Adaptação. Sem esses 3 pilares, o Scrum perde sua essência ágil.',
        alertaBanca: 'Cebraspe adora inventar pilares como "Velocidade", "Previsibilidade" ou "Documentação". Lembre-se: é TIA!'
      },
      {
        id: 'scrum-2',
        texto: 'A reunião diária tem como objetivo inspecionar o progresso em direção à meta da sprint e adaptar o plano conforme necessário.',
        palavraChave: 'Daily Scrum',
        dicaProfessor: 'Show de digitação! A Daily Scrum dura no máximo 15 minutos e é um evento dos Desenvolvedores para os Desenvolvedores, não um relatório de status para chefes.',
        alertaBanca: 'Cuidado: Bancas dizem que a Daily serve para resolver detalhadamente problemas técnicos complexos. Não! Ela serve para alinhamento rápido; problemas complexos são tratados depois.'
      }
    ]
  }
];
