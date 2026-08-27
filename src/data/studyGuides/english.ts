import { StudyGuideTopic } from '../../types';

export const ENGLISH_TOPIC: StudyGuideTopic = {
  id: 'Língua Inglesa',
  title: 'Língua Inglesa para TI',
  category: 'conhecimentos_gerais',
  description: 'Falsos Cognatos (False Friends), Leitura Técnica (Skimming/Scanning), Modal Verbs normativos (RFC 2119) e Vocabulário de Cloud/DevOps.',
  badge: 'Conhecimentos Gerais (Foco Técnico)',
  iconName: 'Globe',
  generalUsefulLinks: [
    {
      title: 'RFC 2119 - Key words for use in RFCs to Indicate Requirement Levels',
      url: 'https://datatracker.ietf.org/doc/html/rfc2119',
      category: 'official',
      badgeLabel: 'Padrão IETF',
      description: 'Definições normativas oficiais dos verbos técnicos: MUST, MUST NOT, REQUIRED, SHALL, SHOULD, MAY.'
    },
    {
      title: 'Cambridge Technical Dictionary Online',
      url: 'https://dictionary.cambridge.org/',
      category: 'doc',
      badgeLabel: 'Dicionário Oficial',
      description: 'Pronúncia, definições contextuais e exemplos práticos de vocabulário técnico em inglês.'
    }
  ],
  lessons: [
    {
      id: 'ing-false-friends-ti',
      title: 'False Friends (Falsos Cognatos) Cruciais em TI & Concursos',
      subtopic: 'Vocabulário & Semântica Técnica',
      readTimeMinutes: 7,
      keyTakeaways: [
        '"Actually" significa "Na verdade / Realmente" (e NUNCA "Atualmente" -> que em inglês é "Currently" ou "Nowadays").',
        '"Eventually" significa "No final das contas / Com o tempo" (e NUNCA "Eventualmente / Às vezes" -> que é "Occasionally").',
        '"Pretend" significa "Fingir / Simular" (e NUNCA "Pretender / Ter intenção" -> que é "Intend").',
        '"Comprehensive" significa "Amplo / Abrangente / Completo" (e NUNCA "Compreensivo / Tolerante" -> que é "Understanding").',
        '"Resume" significa "Retomar / Reiniciar" (e NUNCA "Resumir" -> que é "Summarize").'
      ],
      summary: `As bancas exploram palavras em inglês que se parecem graficamente com termos em português, mas possuem significados completamente distintos em documentações e enunciados técnicos.`,
      mnemonics: 'ACTUALLY: Não é atualmente, é NA VERDADE! EVENTUALLY: Não é às vezes, é NO FINAL DAS CONTAS!',
      examPitfalls: [
        'FGV adora colocar questões de substituição de palavras ("The word \'actually\' in line 12 can be correctly replaced by:"). Se marcar "currently", erra a questão! O correto é "in fact" ou "really".',
        '"Library" em TI é Biblioteca de código (não livraria, que é Bookstore).',
        '"Policy" é Política/Diretriz de segurança (não Polícia, que é Police).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Top 8 Falsos Amigos de TI',
          topicTag: '✍️ Tradução Rápida',
          paperStyle: 'lined',
          colorTheme: 'yellow',
          headerNote: '⚠️ Atenção aos falsos cognatos!',
          handwrittenContent: `Não caia na armadilha da tradução literal:

1) ACTUALLY    -> Significa: NA VERDADE / DE FATO (≠ Atualmente = Currently)
2) EVENTUALLY  -> Significa: COM O TEMPO / NO FIM (≠ Eventualmente = Occasionally)
3) PRETEND     -> Significa: FINGIR / SIMULAR    (≠ Pretender = Intend)
4) INTEND      -> Significa: TER INTENÇÃO DE     (≠ Entender = Understand)
5) RESUME      -> Significa: REINICIAR / RETOMAR (≠ Resumir = Summarize)
6) COMPREHENSIVE -> Significa: COMPLETO / AMPLO  (≠ Compreensivo = Understanding)
7) NOTICE      -> Significa: NOTAR / PERCEBER    (≠ Notícia = News)
8) APPOINTMENT -> Significa: COMPROMISSO / HORA MARCADA (≠ Apontamento = Note)`,
          annotations: [
            'Data (dados) é plural de datum.',
            'Facilities = instalações/recursos, não facilidades.'
          ]
        }
      ],
      usefulLinks: [
        {
          title: 'Falsos Cognatos Mais Cobrados em Concursos - Vídeo Aulas',
          url: 'https://www.youtube.com/results?search_query=falsos+cognatos+ingles+concursos',
          category: 'video',
          badgeLabel: 'Vídeo Aulas',
          description: 'Dicas práticas para não cair em pegadinhas de tradução nas provas.'
        }
      ],
      sampleQuestion: {
        banca: 'Cebraspe',
        statement: 'In the sentence "The system will eventually recover from transient network partitions", the word "eventually" conveys the idea that recovery is uncertain and may only occur occasionally.',
        answer: 'ERRADO',
        explanation: 'Errado. "Eventually" significa "com o passar do tempo / ao final", indicando que a recuperação certamente ocorrerá após determinado período (consistência eventual), e não que ocorrerá "ocasionalmente" (que seria "occasionally").'
      }
    },
    {
      id: 'ing-rfc2119-modal-verbs',
      title: 'Modal Verbs Normativos & Requisitos Técnicos (RFC 2119)',
      subtopic: 'Inglês Instrumental & Normas Técnicas',
      readTimeMinutes: 6,
      keyTakeaways: [
        'MUST / SHALL / REQUIRED: Indica uma exigência absoluta e inegociável (Obrigatório).',
        'MUST NOT / SHALL NOT: Proibição absoluta na arquitetura ou especificação.',
        'SHOULD / RECOMMENDED: Recomendação forte de boas práticas, mas admite exceções caso haja justificativa técnica clara.',
        'SHOULD NOT / NOT RECOMMENDED: Desaconselhado, mas tolerado em cenários excepcionais.',
        'MAY / OPTIONAL: Item puramente opcional; a implementação pode decidir incluir ou não.'
      ],
      summary: `As especificações da IETF, W3C, ISO e normas de segurança da informação adotam a RFC 2119 como convenção padrão para redação de requisitos de software e protocolos.`,
      mnemonics: 'ESCALA DE OBRIGAÇÃO: MUST (100% Obrigatório) > SHOULD (Recomendado) > MAY (Opcional).',
      examPitfalls: [
        'Bancas trocam o sentido de "SHOULD" (recomendação) por "obrigação estrita" (que seria "MUST").',
        '"SHALL" na linguagem jurídica e técnica tem valor de imposição mandatória (igual a MUST), e não mero tempo futuro.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro de Giz: Escadinha de Requisitos Técnicos (RFC 2119)',
          topicTag: '✍️ Normas de TI',
          paperStyle: 'lined',
          colorTheme: 'cyan',
          headerNote: '📋 Padrão de Engenharia de Requisitos',
          handwrittenContent: `Níveis de Força Normativa:

🔴 Nível 1: IMPOSIÇÃO (Sem negociação)
   -> MUST / SHALL / REQUIRED = "DEVE / OBRIGATÓRIO"
   -> "The server MUST validate the JWT token on every API call."

🟡 Nível 2: RECOMENDAÇÃO (Boas Práticas)
   -> SHOULD / RECOMMENDED = "DEVERIA / RECOMENDADO"
   -> "Microservices SHOULD use asynchronous messaging for high throughput."

🟢 Nível 3: PERMISSÃO (Livre escolha)
   -> MAY / OPTIONAL = "PODE / OPCIONAL"
   -> "Clients MAY cache the response headers for up to 300 seconds."`,
          annotations: [
            'MUST NOT = PROIBIDO terminantemente.',
            'SHALL em contratos e RFPs = Obrigatório.'
          ]
        }
      ],
      usefulLinks: [
        {
          title: 'Texto Original da RFC 2119 - IETF',
          url: 'https://datatracker.ietf.org/doc/html/rfc2119',
          category: 'official',
          badgeLabel: 'Documento IETF',
          description: 'Guia clássico de terminologia de requisitos para engenharia de software e protocolos.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'According to technical specifications following RFC 2119, when a protocol specification states that "An endpoint MAY verify the TLS certificate fingerprint", it implies that the verification is strictly mandatory for security compliance.',
        answer: 'FALSO',
        explanation: 'Falso. Pela RFC 2119, o termo "MAY" (ou "OPTIONAL") indica que o recurso é puramente opcional, ficando a critério do implementador incluí-lo ou não.'
      }
    }
  ]
};
