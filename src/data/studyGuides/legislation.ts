import { StudyGuideTopic } from '../../types';

export const LEGISLATION_TOPIC: StudyGuideTopic = {
  id: 'Legislação & Proteção de Dados',
  title: 'Legislação, LAI, LGPD e Marco Civil',
  category: 'conhecimentos_gerais',
  description: 'Lei de Acesso à Informação (12.527/2011 & Dec. 7.724), LGPD (13.709/2018), Marco Civil da Internet (12.965/2014) e Crimes Cibernéticos.',
  badge: 'Legislação Aplicada (Peso Máximo)',
  iconName: 'Scale',
  generalUsefulLinks: [
    {
      title: 'Portal da Lei de Acesso à Informação (CGU)',
      url: 'https://www.gov.br/acessoainformacao/pt-br',
      category: 'official',
      badgeLabel: 'Governo Federal',
      description: 'Orientações oficiais, prazos do e-SIC, manuais e decisões da Comissão Mista de Reavaliação de Informações (CMRI).'
    },
    {
      title: 'Autoridade Nacional de Proteção de Dados (ANPD)',
      url: 'https://www.gov.br/anpd/pt-br',
      category: 'official',
      badgeLabel: 'ANPD Oficial',
      description: 'Guias orientativos sobre Encarregado (DPO), bases legais, legítimo interesse e incidentes de segurança.'
    },
    {
      title: 'Marco Civil da Internet (Lei 12.965/2014 Comentada)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm',
      category: 'official',
      badgeLabel: 'Legislação Oficial',
      description: 'Texto integral da lei com regras de neutralidade de rede, guarda de registros e privacidade.'
    }
  ],
  lessons: [
    {
      id: 'leg-lai-decretos',
      title: 'Lei de Acesso à Informação (LAI 12.527/11), Prazos e Graus de Sigilo',
      subtopic: 'Transparência Pública & Sigilo da Informação',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Princípios da LAI: A publicidade é a REGRA geral e o sigilo é a EXCEÇÃO estrita; Divulgação de informações de interesse público independentemente de solicitações (Transparência Ativa); Utilização de meios de comunicação viabilizados pela TI com formatos abertos e legíveis por máquina.',
        'Transparência Ativa (órgão divulga por iniciativa própria em seu site: estrutura, despesas, licitações, repasses) vs Transparência Passiva (atendimento a pedidos específicos de cidadãos via SIC - Serviço de Informação ao Cidadão).',
        'Prazos de Atendimento: Resposta IMEDIATA se a informação estiver disponível. Caso contrário, prazo de 20 DIAS, prorrogável por mais 10 DIAS mediante justificativa expressa.',
        'Prazos Recursais da LAI: Em caso de negativa de acesso, o requerente pode interpor recurso no prazo de 10 DIAS à autoridade hierarquicamente superior, que deve decidir em 5 DIAS. Instâncias federais superiores: CGU e CMRI (Comissão Mista de Reavaliação de Informações).',
        'Graus e Prazos Máximos de Sigilo: 1. ULTRASSECRETA: 25 anos (competência: Presidente/Vice, Ministros, Comandantes das Forças Armadas e Chefes de Missão Diplomática permanente); 2. SECRETA: 15 anos; 3. RESERVADA: 5 anos. A informação ultrassecreta pode ter prorrogação única de mais 25 anos decidida pela CMRI.',
        'Informações Pessoais (Art. 31): Relativas à intimidade, vida privada, honra e imagem terão acesso restrito pelo prazo máximo de 100 ANOS a contar da data de sua produção.',
        'Instrumentos Técnicos: TCI (Termo de Classificação de Informação), CIDIC (Código de Indexação de Documento com Informação Classificada), Documento Controlado (DC) e Algoritmo de Estado (para cifra oficial).'
      ],
      summary: `A Lei 12.527/2011 consolidou o direito constitucional de acesso a documentos públicos, estabelecendo ritos céleres de transparência passiva (20+10 dias) e prazos rigorosos de sigilo (25, 15, 5 e 100 anos).`,
      mnemonics: 'PRAZOS DE SIGILO LAI: Ultra (25 anos) > Secreta (15 anos) > Reservada (5 anos) | Pessoais: 100 anos. RESPOSTA: 20 + 10 dias.',
      examPitfalls: [
        'Informações que versem sobre condutas que impliquem violação de direitos humanos praticada por agentes públicos NUNCA poderão ser objeto de restrição de acesso (sigilo proibido!).',
        'O cidadão NÃO precisa justificar o motivo do seu pedido de acesso à informação pública (vedada a exigência de motivação).',
        'Prorrogação de sigilo: apenas a classificação ULTRASSECRETA pode ser prorrogada (uma única vez por até 25 anos pela CMRI).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Prazos e Graus de Sigilo da LAI',
          topicTag: '✍️ LAI 12.527/11',
          paperStyle: 'lined',
          colorTheme: 'yellow',
          headerNote: '📌 Tabela Sagrada de Prazos da LAI',
          handwrittenContent: `1) PRAZOS DE ATENDIMENTO AO CIDADÃO:
   • Resposta Imediata (se já estiver pronta).
   • Prazo Padrão: 20 DIAS.
   • Prorrogação: + 10 DIAS (com justificativa).
   • Recurso do Cidadão: 10 DIAS -> Órgão decide em: 5 DIAS.

2) GRAUS DE CLASSIFICAÇÃO DE SIGILO:
   🛡️ ULTRASSECRETA = 25 ANOS (Presidente, Ministros, Comandantes).
   🔒 SECRETA        = 15 ANOS (Titulares de autarquias/fundações).
   📁 RESERVADA      =  5 ANOS (Diretores com delegação).
   👤 PESSOAIS       = 100 ANOS (Intimidade, honra e imagem).

3) PEGADINHAS FGV / CEBRASPE:
   • É proibido exigir o motivo do pedido do cidadão!
   • Violação de Direitos Humanos NUNCA pode ter sigilo decretado!`,
          annotations: [
            'Sigilo é exceção; publicidade é a regra geral da LAI.',
            'Prazos: Ultrassecreta (25a), Secreta (15a), Reservada (5a) e Dados Pessoais (100a).',
            'Tempo de resposta: Imediata ou 20 dias prorrogáveis por mais 10.'
          ],
          diagramFormula: 'Pedido Cidadão ---> [Imediata] ou [20 dias + 10 dias de prorrogação]\nSigilo: [Ultrassecreta: 25a] > [Secreta: 15a] > [Reservada: 5a] | [Pessoal: 100a]',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Receita Federal do Brasil (RFB) – Analista-Tributário da Receita Federal – 2023',
            enunciado: `Com base nas disposições da Lei nº 12.527/2011 (Lei de Acesso à Informação - LAI) acerca da transparência, classificação e prazos de restrição de acesso a documentos públicos, assinale a afirmativa CORRETA:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'O fornecimento de informações de interesse público solicitadas pelo cidadão fica condicionado à apresentação de justificativa idônea quanto à destinação dos dados.',
                correta: false,
                comentario: 'INCORRETA: O art. 10, § 3º da LAI veda expressamente quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.'
              },
              {
                letra: 'B',
                texto: '==Informações relativas à intimidade, vida privada, honra e imagem de indivíduos terão seu acesso restrito a agentes autorizados e à própria pessoa pelo prazo máximo de 100 anos==.',
                correta: true,
                comentario: 'CORRETA: Literalidade do art. 31, § 1º, I da Lei 12.527/2011: As informações pessoais relativas à intimidade, vida privada, honra e imagem terão seu acesso restrito, independentemente de classificação de sigilo e pelo prazo máximo de 100 (cem) anos a contar da sua produção.'
              },
              {
                letra: 'C',
                texto: 'O prazo máximo de sigilo para a informação classificada como ultrassecreta é de 15 anos, sendo terminantemente vedada qualquer prorrogação.',
                correta: false,
                comentario: 'INCORRETA: O prazo para ultrassecreta é de 25 anos (não 15), e pode ser prorrogado uma única vez por igual período pela CMRI.'
              },
              {
                letra: 'D',
                texto: 'Informações que versem sobre violação de direitos humanos praticada por agentes públicos poderão ser classificadas no grau reservado pelo prazo de 5 anos.',
                correta: false,
                comentario: 'INCORRETA: Informações sobre violação de direitos humanos NUNCA podem ter restrição de acesso decretada (art. 21, parágrafo único).'
              },
              {
                letra: 'E',
                texto: 'O prazo ordinário de atendimento a um pedido de acesso à informação é de 45 dias úteis, improrrogáveis.',
                correta: false,
                comentario: 'INCORRETA: O prazo é de resposta imediata se disponível, ou 20 dias corridos prorrogáveis por mais 10 mediante justificativa.'
              }
            ],
            termosGrifados: [
              {
                termo: 'prazo máximo de 100 anos a contar de sua produção',
                papel: 'Prazo Constitucional de Proteção Pessoal',
                regra: 'Aplica-se à intimidade, vida privada, honra e imagem (Art. 31, § 1º, I).',
                cor: 'cyan'
              },
              {
                termo: 'veda exigências relativas aos motivos da solicitação',
                papel: 'Princípio do Acesso Universal e Incondicionado',
                regra: 'O cidadão não é obrigado a justificar "por que" quer a informação.',
                cor: 'yellow'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE OS PRAZOS DA LAI: Ultra = 25a, Secreta = 15a, Reservada = 5a, Pessoais = 100a.',
              '2. ANALISE A LETRA A: Exigir justificativa? JAMAIS (Art. 10, § 3º proíbe).',
              '3. ANALISE A LETRA B: 100 anos para dados de honra/intimidade pessoal. Certo absoluto!',
              '4. ANALISE AS LETRAS C, D, E: Erros nos prazos e na falsa possibilidade de sigilo para violação de direitos humanos.',
              '5. MARQUE: Letra B.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA B',
            conclusaoPedagogica: 'CHAVE DE OURO DA LAI: Dados públicos = livres sem justificativa. Direitos humanos = sigilo zero. Dados íntimos = protegidos por até 100 anos!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Guia da LAI para Concursos - CGU',
          url: 'https://www.gov.br/acessoainformacao/pt-br',
          category: 'official',
          badgeLabel: 'Portal Oficial',
          description: 'Classificação de sigilo, transparência ativa e instâncias recursais.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'De acordo com a Lei nº 12.527/2011 (LAI), as informações relativas à intimidade, vida privada, honra e imagem das pessoas terão seu acesso restrito a agentes públicos legalmente autorizados e à própria pessoa pelo prazo máximo de:',
        answer: '100 (cem) anos a contar da data de sua produção.',
        explanation: 'Conforme o art. 31, § 1º, I da Lei 12.527/2011, as informações pessoais possuem prazo de restrição de acesso de até 100 anos.'
      }
    },
    {
      id: 'leg-lgpd-marco-civil',
      title: 'LGPD (Lei 13.709/18) e Marco Civil da Internet (Lei 12.965/14)',
      subtopic: 'Privacidade de Dados & Direitos Digitais',
      readTimeMinutes: 9,
      keyTakeaways: [
        'LGPD - 10 Princípios Fundamentais (Art. 6º): Finalidade (propósitos legítimos e específicos informados), Adequação (compatibilidade com a finalidade), Necessidade / Minimização (coleta restrita ao estritamente essencial), Livre Acesso, Qualidade dos Dados, Transparência, Segurança, Prevenção, Não Discriminação (vedado fins discriminatórios ilícitos) e Responsabilização/Prestação de Contas.',
        'Agentes de Tratamento: Controlador (toma as decisões sobre o tratamento), Operador (realiza o tratamento em nome do controlador) e Encarregado / DPO (canal de comunicação entre controlador, titulares e ANPD).',
        'Bases Legais para Tratamento (Art. 7º - 10 hipóteses): Consentimento expresso, Cumprimento de obrigação legal/regulatória, Execução de políticas públicas pela adm pública, Estudos por órgão de pesquisa (anonimização preferencial), Execução de contrato, Exercício regular de direitos em processo, Proteção da vida, Tutela da saúde, Legítimo Interesse do controlador (com LIA - teste de balanceamento) e Proteção do crédito.',
        'Sanções Administrativas da LGPD (Art. 52): Advertência, Multa simples de até 2% do faturamento da pessoa jurídica (limitada a R$ 50 milhões por infração), Multa diária, Publicização da infração, Bloqueio e Eliminação dos dados pessoais afetados, Suspensão parcial ou total do banco de dados.',
        'Marco Civil da Internet (Lei 12.965/2014): Neutralidade de Rede (Art. 9º - vedada discriminação ou degradação de tráfego por motivo comercial ou de conteúdo); Prazos de Guarda de Registros: Registros de Conexão (IP, data/hora) guardados por 1 ANO pelo provedor de conexão; Registros de Acesso a Aplicações (logs de acesso a sites/apps) guardados por 6 MESES pelos provedores de aplicação; Responsabilidade Civil por Conteúdo de Terceiros (Art. 19 - provedor só responde civilmente se, após ordem judicial específica, não remover o conteúdo, com exceção de pornografia de vingança no art. 21 que exige apenas notificação extrajudicial do ofendido).',
        'Lei Carolina Dieckmann (Lei 12.737/2012 / Art. 154-A do CP): Tipificou a Invasão de Dispositivo Informático alheio com violação indevida de mecanismo de segurança.'
      ],
      summary: `A LGPD e o Marco Civil estruturam a governança digital brasileira: a LGPD protege a autodeterminação informativa do titular com 10 princípios e bases legais estritas, enquanto o Marco Civil consagra a neutralidade de rede e os prazos legais de guarda de logs (1 ano para conexão e 6 meses para aplicações).`,
      mnemonics: 'PRAZOS DE LOGS NO MARCO CIVIL: Conexão = 1 ANO (12 meses); Aplicação = 6 MESES. MULTA LGPD: Até 2% faturamento ou R$ 50 Milhões.',
      examPitfalls: [
        'Consentimento NÃO é a única base legal da LGPD! Existem 10 bases legais autônomas (ex: obrigação legal, execução de contrato, legítimo interesse).',
        'No Marco Civil, provedor de conexão NUNCA guarda registros de aplicações nem sites navegados (vedada a guarda de logs de navegação no provedor de acesso à internet).',
        'Art. 19 do Marco Civil: remoção de conteúdo de terceiros por danos exige ordem JUDICIAL prévia, salvo nudez/sexo sem consentimento (Art. 21) que exige apenas notificação simples da vítima.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: LGPD (Bases Legais) & Marco Civil (Logs)',
          topicTag: '✍️ LGPD & Marco Civil',
          paperStyle: 'grid',
          colorTheme: 'green',
          headerNote: '⚖️ Resumo das Leis Digitais Brasileiras',
          handwrittenContent: `1) AGENTES DO TRATAMENTO (LGPD):
   • Titular: O dono dos dados (a pessoa física).
   • Controlador: A empresa que manda e decide o que fazer com os dados.
   • Operador: O terceiro/prestador que processa em nome do controlador.
   • Encarregado (DPO): A ponte entre a Empresa, o Titular e a ANPD.

2) MARCO CIVIL DA INTERNET (GUARDA DE REGISTROS):
   • Logs de CONEXÃO (Provedor Vivo/Claro/etc): 1 ANO (12 meses) de guarda obrigatória.
   • Logs de APLICAÇÃO (Sites, Redes Sociais): 6 MESES de guarda obrigatória.
   • Neutralidade de Rede: Provedor não pode cobrar mais caro para acessar YouTube vs Netflix!

3) SANÇÃO MÁXIMA DA LGPD:
   • Multa de até 2% do faturamento da empresa, limitada a R$ 50 MILHÕES por infração.`,
          annotations: [
            'Logs de Conexão = 1 ANO de guarda (Provedor de Acesso).',
            'Logs de Aplicação = 6 MESES de guarda (Sites/Apps).',
            'Multa máxima da LGPD = até 2% do faturamento, limitada a R$ 50 milhões por infração.'
          ],
          diagramFormula: 'Logs de Conexão: [Provedor de Acesso (IP)] ---> Guarda Obrigatória: 1 ANO\nLogs de Aplicação: [Provedores de Aplicações/Sites] ---> Guarda Obrigatória: 6 MESES',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Assembleia Legislativa de Minas Gerais (ALMG) – Analista de Sistemas – 2023',
            enunciado: `De acordo com a Lei nº 12.965/2014 (Marco Civil da Internet), na provisão de conexão à internet e na provisão de aplicações de internet, os prazos obrigatórios de guarda de registros de conexão e de registros de acesso a aplicações, respectivamente, ressalvada prorrogação requerida por autoridade policial ou judicial, são de:`,
            alternativas: [
              {
                letra: 'A',
                texto: '6 meses e 6 meses.',
                correta: false,
                comentario: 'INCORRETA: Registros de conexão devem ser guardados pelo prazo mínimo de 1 ano.'
              },
              {
                letra: 'B',
                texto: '==1 ano e 6 meses==.',
                correta: true,
                comentario: 'CORRETA: Conforme o art. 13 da Lei 12.965/2014 (Marco Civil), o provedor de CONEXÃO é obrigado a manter os registros de conexão pelo prazo de 1 (um) ano. Por sua vez, conforme o art. 15, os provedores de APLICAÇÕES de internet comerciais devem manter os registros de acesso a aplicações sob sigilo pelo prazo de 6 (seis) meses.'
              },
              {
                letra: 'C',
                texto: '5 anos e 2 anos.',
                correta: false,
                comentario: 'INCORRETA: Prazos exorbitantes e sem fundamento na legislação brasileira de internet.'
              },
              {
                letra: 'D',
                texto: '1 ano e 1 ano.',
                correta: false,
                comentario: 'INCORRETA: O prazo para aplicações é de 6 meses, não 1 ano.'
              },
              {
                letra: 'E',
                texto: '2 anos e 6 meses.',
                correta: false,
                comentario: 'INCORRETA: O prazo para conexão é de 1 ano.'
              }
            ],
            termosGrifados: [
              {
                termo: 'registros de conexão: 1 ano',
                papel: 'Obrigação do Provedor de Acesso',
                regra: 'Guarda sob sigilo de IPs e datas/horas de conexão por 12 meses (Art. 13).',
                cor: 'cyan'
              },
              {
                termo: 'registros de acesso a aplicações: 6 meses',
                papel: 'Obrigação do Provedor de Aplicação',
                regra: 'Guarda de acessos a sistemas, sites e apps por 6 meses (Art. 15).',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE A DUPLA: 1) Registros de Conexão; 2) Registros de Acesso a Aplicações.',
              '2. RECUPERE O MNEMÔNICO: "C de Conexão = 1 Ano completo (12 meses); A de Aplicação = metade (6 meses)".',
              '3. CONFIRA A ORDEM DO ENUNCIADO: "registros de conexão e registros de acesso a aplicações, respectivamente".',
              '4. MARQUE: Letra B (1 ano e 6 meses).'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA B',
            conclusaoPedagogica: 'PRAZOS SAGRADOS DO MARCO CIVIL: Conexão (IP à internet) = 1 ANO. Aplicação (acesso ao app/site) = 6 MESES!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Guia Oficial de Sanções e Bases Legais da LGPD - ANPD',
          url: 'https://www.gov.br/anpd/pt-br',
          category: 'official',
          badgeLabel: 'ANPD Oficial',
          description: 'Regulamento de dosimetria de sanções e hipóteses legais de tratamento.'
        }
      ],
      sampleQuestion: {
        banca: 'Cebraspe',
        statement: 'Nos termos da Lei Geral de Proteção de Dados Pessoais (LGPD), o consentimento do titular é a única hipótese legal autorizadora para o tratamento de dados pessoais no setor público e privado.',
        answer: 'ERRADO',
        explanation: 'O consentimento é apenas uma das dez bases legais previstas no art. 7º da LGPD. O tratamento também é plenamente legal para cumprimento de obrigação legal, execução de contratos, políticas públicas, legítimo interesse, entre outras.'
      }
    }
  ]
};
