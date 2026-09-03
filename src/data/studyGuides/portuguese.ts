import { StudyGuideTopic } from '../../types';

export const PORTUGUESE_TOPIC: StudyGuideTopic = {
  id: 'Língua Portuguesa',
  title: 'Língua Portuguesa',
  category: 'conhecimentos_gerais',
  description: 'Crase & Regência, Pontuação estilo FGV, Concordância Verbal/Nominal, Conjunções & Conectivos, Ortografia Oficial e Coesão Textual.',
  badge: 'Conhecimentos Gerais (Peso Alto em TI)',
  iconName: 'BookMarked',
  generalUsefulLinks: [
    {
      title: 'Gramática Online & Dúvidas Frequentes',
      url: 'https://www.normaculta.com.br/',
      category: 'doc',
      badgeLabel: 'Referência',
      description: 'Guia de regras gramaticais e resolução comentada de dúvidas do português contemporâneo.'
    },
    {
      title: 'Dicionário Priberam da Língua Portuguesa',
      url: 'https://dicionario.priberam.org/',
      category: 'official',
      badgeLabel: 'Dicionário',
      description: 'Dicionário padrão e conjugador verbal com regras do Acordo Ortográfico.'
    },
    {
      title: 'Canal Português com Letícia (YouTube)',
      url: 'https://www.youtube.com/@PortuguescomLeticia',
      category: 'video',
      badgeLabel: 'Aulas Vídeo',
      description: 'Aulas didáticas focadas em pegadinhas e regras de gramática para concursos públicos.'
    }
  ],
  lessons: [
    // ================= LIÇÃO 1: CRASE & REGÊNCIA =================
    {
      id: 'lp-crase-regencia',
      title: 'Crase & Regência: Regras de Ouro e Casos de Prova',
      subtopic: 'Sintaxe & Morfologia',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Crase é a fusão da preposição "a" exigida pelo termo regente com o artigo feminino "a(s)" ou a vogal inicial dos pronomes demonstrativos (àquele, àquela, àquilo).',
        'NUNCA ocorre crase antes de palavras masculinas, verbos no infinitivo, pronomes de tratamento (salvo senhora/senhorita/dona), pronomes indefinidos/pessoais e entre palavras repetidas.',
        'Crase FACULTATIVA nos 3 casos clássicos: 1) Antes de nomes próprios femininos; 2) Antes de pronomes possessivos femininos singulares (minha, tua, sua); 3) Depois da preposição "até".',
        'Teste do Masculino: Troque a palavra feminina por uma masculina correspondente. Se surgir "AO", há crase (Fui à reunião -> Fui AO congresso). Se surgir apenas "O", não há crase (Conheço a cidade -> Conheço O país).'
      ],
      summary: `O acento grave indicativo de crase depende fundamentalmente da regência do termo anterior (verbo ou nome que exige a preposição 'a') somada à presença do artigo definido feminino 'a(s)' ou do pronome demonstrativo 'aquele(a)(s)/aquilo'. Dominar os casos proibidos e a substituição pelo masculino é o método mais rápido para gabaritar na FGV e Cebraspe.`,
      mnemonics: 'CASOS FACULTATIVOS: "Até a minha Maria" (Até + Pronome Possessivo Feminino + Nome Próprio Feminino). CASO PROIBIDO: "A" no singular diante de palavra no plural = crase nem a pau!',
      examPitfalls: [
        'Pegadinha FGV: Omissão da locução "à moda de / à maneira de" diante de palavras masculinas (ex: "Bife à cavalo" não tem crase, mas "Bife à moda da casa" ou "Gol à Pelé" [à moda de Pelé] leva crase!).',
        'Pegadinha Cebraspe: Diante dos pronomes demonstrativos "aquele/aquela/aquilo", o candidato acha que não leva crase por ser pronome, mas OCORRE se o regente exigir preposição (ex: "Obedeceu àquele regulamento").',
        'Se o "a" estiver no singular diante de palavra feminina plural sem artigo, NÃO há crase (ex: "Referiu-se a diretrizes antigas" -> apenas preposição; se fosse "às diretrizes", haveria crase).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Raio-X de Crase & Regência em Questão Real FGV',
          topicTag: '✍️ Análise Detalhada de Questão',
          paperStyle: 'lined',
          colorTheme: 'yellow',
          headerNote: '📌 Como o concurseiro lê a questão e elimina as armadilhas em 15 segundos',
          handwrittenContent: `No quadro negro, dissecamos a mecânica da Crase em duas etapas lógicas:
1) O ==Termo Regente== manda: Ele pede preposição "a"?
   -> Se o verbo for Transitivo Direto (VTD), NÃO HÁ CRASE (ex: "Acessei ==a== plataforma").
   -> Se for Transitivo Indireto (VTI regendo "a") ou Nome que pede "a", VAI HAVER PREPOSIÇÃO!
2) O ==Termo Regido== aceita: Ele admite artigo feminino "a" ou é pronome com "a-" inicial?
   -> Masculino, Verbo, Indefinido e Pronome Pessoal: BLOQUEIO TOTAL! ❌
   -> Substantivo Feminino ou Demonstrativo (aquele/aquela/aquilo): FUSÃO LIBERADA! ✅`,
          diagramFormula: `Regência: Termo Regente (Exige preposição A) + Termo Regido (Artigo A ou Aquele) = À / ÀQUELE
Teste Rápido: "Vou À feira" -> Troca por masculino: "Vou AO mercado" => Deu "AO"? Crase certa!`,
          annotations: [
            'Dica de Ouro: "A" no singular + palavra no plural = NUNCA USE CRASE!',
            'Pronomes de tratamento não aceitam artigo: "Entregou a Vossa Senhoria" (sem crase).'
          ],
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'TJ-DFT – Analista Judiciário (Especialidade: Tecnologia da Informação) – 2024',
            enunciado: `Considerando as normas gramaticais de regência verbal, regência nominal e o emprego do sinal indicativo de crase, assinale a opção em que a frase apresentada está INTEIRAMENTE CORRETA segundo a norma-padrão da língua portuguesa:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'O novo plano de contingência cibernética atende ==à todas== as exigências de segurança estabelecidas pela alta administração.',
                correta: false,
                comentario: 'INCORRETA: O termo "todas" é pronome indefinido e está no plural. Não ocorre crase antes de pronome indefinido e nunca se usa "à" com acento no singular antes de palavra no plural.'
              },
              {
                letra: 'B',
                texto: 'A equipe de analistas de infraestrutura começou ==à configurar== as permissões de acesso ao cluster de servidores.',
                correta: false,
                comentario: 'INCORRETA: "Configurar" é verbo no infinitivo. É regra gramatical absoluta: NUNCA ocorre crase antes de verbos, pois verbos não admitem artigo feminino.'
              },
              {
                letra: 'C',
                texto: 'O auditor-chefe solicitou ==acesso àquela== base de dados confidencial que armazenava os logs de autenticação dos usuários.',
                correta: true,
                comentario: 'CORRETA: O substantivo "acesso" rege a preposição "a" (quem tem acesso, tem acesso A algo). O pronome demonstrativo "aquela" inicia-se com "a-". A fusão da preposição "a" com o pronome gera a crase obrigatória: "àquela".'
              },
              {
                letra: 'D',
                texto: 'O coordenador de suporte encaminhou o memorando com as diretrizes de compliance ==à Vossa Senhoria== com antecedência.',
                correta: false,
                comentario: 'INCORRETA: Pronomes de tratamento (Vossa Senhoria, Vossa Excelência) recusam artigo definido. Logo, a crase é proibida (as únicas exceções são "senhora", "senhorita" e "dona").'
              },
              {
                letra: 'E',
                texto: 'O rascunho da topologia de rede foi elaborado ==à lápis== pelo engenheiro antes da digitalização formal.',
                correta: false,
                comentario: 'INCORRETA: "Lápis" é vocábulo masculino. Não se emprega crase antes de palavras masculinas, salvo se a expressão "à moda de" estiver claramente subentendida.'
              }
            ],
            termosGrifados: [
              {
                termo: 'solicitou acesso',
                papel: 'Termo Regente (Substantivo com Regência Nominal)',
                regra: 'O substantivo "acesso" exige obrigatoriamente a preposição "a" (acesso a alguma coisa).',
                cor: 'yellow'
              },
              {
                termo: 'àquela',
                papel: 'Termo Regido (Pronome Demonstrativo com Crase)',
                regra: 'A preposição "a" exigida por "acesso" funde-se com a vogal inicial do pronome "aquela" (a + aquela = àquela).',
                cor: 'green'
              },
              {
                termo: 'à todas',
                papel: 'Distrator de Prova (Caso Proibitivo 1: Pronome Indefinido)',
                regra: 'Pronomes indefinidos não aceitam artigo. Além disso, "a" no singular antes de plural proíbe crase.',
                cor: 'rose'
              },
              {
                termo: 'à configurar',
                papel: 'Distrator de Prova (Caso Proibitivo 2: Verbo no Infinitivo)',
                regra: 'Verbos nunca admitem artigo feminino. O acento grave antes de verbo é erro gramatical grosseiro.',
                cor: 'rose'
              },
              {
                termo: 'à Vossa Senhoria',
                papel: 'Distrator de Prova (Caso Proibitivo 3: Pronome de Tratamento)',
                regra: 'Pronomes de tratamento rejeitam artigo definido; deve-se usar apenas a preposição "a Vossa Senhoria".',
                cor: 'rose'
              },
              {
                termo: 'à lápis',
                papel: 'Distrator de Prova (Caso Proibitivo 4: Substantivo Masculino)',
                regra: 'A palavra masculina "lápis" repele o artigo feminino. Sem artigo, não existe fusão/crase.',
                cor: 'rose'
              }
            ],
            comoLerPassoAPasso: [
              '1º Passo – Rastreie o Termo Regente: Ao ler a frase, olhe a palavra que antecede a lacuna ou crase. Verifique se o verbo ou substantivo pede preposição "a". Se não pede preposição (ex: verbo transitivo direto), elimine a crase na hora.',
              '2º Passo – Varredura Rápida de Casos Proibidos: Olhe a palavra seguinte ao "a". Ela é um verbo? É masculina? É pronome indefinido ("todas", "qualquer")? É pronome de tratamento? Se SIM, corte sumariamente a alternativa!',
              '3º Passo – Reconheça os Demonstrativos (Aquele/Aquela/Aquilo): Diante de "aquele/aquela/aquilo", havendo preposição "a" antes, OCORRE CRASE no pronome ("àquele", "àquela", "àquilo"). A FGV usa muito isso porque muitos candidatos acham que pronome nunca tem crase.',
              '4º Passo – Aplicação do Teste do Masculino: Em substantivos comuns, substitua por um equivalente masculino (ex: "feira" -> "mercado"). Se der "ao", a crase é legítima e o acerto é garantido!'
            ],
            gabaritoOficial: 'Alternativa C',
            conclusaoPedagogica: 'Na FGV, mais de 75% dos erros em questões de crase são casos proibidos básicos (verbo no infinitivo, pronome de tratamento e palavra masculina). Eliminar os casos proibidos isola a resposta correta em menos de 20 segundos.'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Aula Completa de Crase para FGV & Cebraspe',
          url: 'https://www.youtube.com/results?search_query=crase+para+concursos+fgv+cebraspe',
          category: 'video',
          badgeLabel: 'Vídeo Aulas',
          description: 'Resolução das questões mais recorrentes de crase em concursos recentes de TI.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Assinale a opção em que o uso do sinal indicativo de crase é OBRIGATÓRIO de acordo com a norma-padrão:',
        answer: 'Refiro-me à servidora que assinou o relatório técnico.',
        explanation: 'O verbo referir-se exige a preposição "a" (referir-se a algo/alguém) e a palavra "servidora" aceita o artigo definido feminino "a", ocorrendo a fusão obrigatória (à servidora).'
      }
    },

    // ================= LIÇÃO 2: ORTOGRAFIA OFICIAL & OS 4 PORQUÊS =================
    {
      id: 'lp-ortografia-porques',
      title: 'Ortografia Oficial: Emprego de X/S/Z/Ç e os 4 Porquês',
      subtopic: 'Ortografia & Acentuação',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Uso do "X": Emprega-se após as sílabas iniciais "ME-" (mexer, mexilhão) e "EN-" (enxada, enxergar), após DITONGOS (caixa, peixe, frouxo) e em palavras indígenas/africanas (abacaxi, orixá). Exceções: mecha (cabelo) e derivados de cheio (encher, encharcar).',
        'Uso do "S" vs "Z": Verbos derivados mantêm a base (análise -> analisar com S; paralisia -> paralisar com S). Verbos formados pelo sufixo -izar recebem Z se a palavra primitiva não tiver S no radical (civil -> civilizar; canal -> canalizar).',
        'Por que: Pergunta direta/indireta ("Por que faltou?") ou pronome relativo ("o motivo por que lutei" = pelo qual).',
        'Porque: Conjunção explicativa/causal ("Não fui porque choveu" = pois/já que).',
        'Por quê: Fim de frase ou imediatamente antes de pontuação ("Você não compareceu, por quê?").',
        'Porquê: Substantivo determinado por artigo/pronome ("Não compreendi o porquê de tanta pressa" = a razão).'
      ],
      summary: `A ortografia oficial nas bancas examinadoras avalia a morfologia das palavras (sufixos -isar vs -izar), regras fonéticas consolidadas pós-ditongo e a correta aplicação contextual dos quatro tipos de porquês em períodos compostos.`,
      mnemonics: 'RADICAL COM "S"? Continua com "S" (pesquisa -> pesquisar). SEM "S" NO RADICAL? Usa o sufixo com "Z" (organização -> organizar).',
      examPitfalls: [
        'Pegadinha Clássica: "Encher", "enxovalhar" e "enxoval": "Encher" e "encharcar" são com CH porque derivam de "cheio" e "charco"!',
        'Pegadinha Cebraspe: "Recauchutar" e "guache" são grafadas com CH, mesmo estando após ditongo (exceções à regra do ditongo).',
        'Viagem (substantivo) é com G; Viajem (forma verbal do subjuntivo: que eles viajem) é com J.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Raio-X dos 4 Porquês em Questão Real FGV',
          topicTag: '✍️ Ortografia Aplicada a Questões',
          paperStyle: 'lined',
          colorTheme: 'cyan',
          headerNote: '📌 Como identificar o tipo de "porquê" sem hesitação na prova',
          handwrittenContent: `No quadro, organizamos o mapa mental dos 4 Porquês para você nunca mais errar:
1) ==POR QUE== (Separado e Sem Acento):
   -> Pergunta direta ou indireta: "Por que o sistema caiu?" (Por qual razão).
   -> Pronome Relativo: "Os motivos por que fomos contratados..." (= pelos quais).
2) ==PORQUE== (Junto e Sem Acento):
   -> Resposta, Causa e Explicação: "O deploy atrasou porque houve conflito de merge." (= pois / visto que).
3) ==POR QUÊ== (Separado e Com Acento):
   -> Colado ao ponto final, de interrogação ou exclamação: "O log falhou e ninguém sabe por quê."
4) ==O PORQUÊ== (Junto e Com Acento):
   -> Substantivo, antecedido de artigo ("o", "um") ou pronome: "Explique o porquê do bug." (= o motivo).`,
          diagramFormula: `Regra Sintética:
[Pergunta / Pela qual razão] -> POR QUE
[Resposta / Pois / Já que]   -> PORQUE
[Fim de Frase + Pontuação]   -> POR QUÊ?
[Substantivo / Artigo "O"]   -> O PORQUÊ`,
          annotations: [
            '"Anexo" e "Incluso" concordam: As planilhas seguem anexas.',
            '"Menos" e "Alerta" são palavras invariáveis!'
          ],
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'SEFAZ – Auditor Fiscal da Receita Estadual (Área Tecnologia da Informação) – 2023',
            enunciado: `Assinale a alternativa que preenche, de forma gramaticalmente CORRETA e segundo o padrão culto, as lacunas numeradas nas frases do relatório de auditoria abaixo:

I. O comitê de segurança não compreendeu _________ (1) o protocolo TLS 1.3 ainda não havia sido ativado em produção.
II. O servidor proxy recusou a conexão _________ (2) o certificado digital expirou durante o fim de semana.
III. Os técnicos constataram o incidente de vazamento, mas não souberam explicar por _________ (3).
IV. A diretoria de TI exigiu um relatório conclusivo para esclarecer o _________ (4) das recorrentes falhas de replicação no banco de dados.`,
            alternativas: [
              {
                letra: 'A',
                texto: '1: porque | 2: por que | 3: por que | 4: por quê',
                correta: false,
                comentario: 'INCORRETA: Inverteu os valores de causalidade e interrogação indireta.'
              },
              {
                letra: 'B',
                texto: '1: por que | 2: porque | 3: por quê | 4: porquê',
                correta: true,
                comentario: 'CORRETA: 1) "por que" em oração interrogativa indireta (= por qual razão); 2) "porque" conjunção causal explicativa (= pois/já que); 3) "por quê" em final de período antes de ponto final; 4) "porquê" substantivo determinado pelo artigo "o" (= o motivo/a razão).'
              },
              {
                letra: 'C',
                texto: '1: por quê | 2: porque | 3: por que | 4: o por que',
                correta: false,
                comentario: 'INCORRETA: "Por quê" acentuado só pode ser usado em fim de período, e "o porquê" substantivo deve ser grafado junto com acento circunflexo.'
              },
              {
                letra: 'D',
                texto: '1: por que | 2: por que | 3: por quê | 4: porquê',
                correta: false,
                comentario: 'INCORRETA: A lacuna 2 introduz a causa da recusa da conexão, exigindo a conjunção "porque" (junto).'
              }
            ],
            termosGrifados: [
              {
                termo: 'por que (Lacuna 1)',
                papel: 'Interrogativa Indireta',
                regra: 'Equivale a "por qual razão" ou "por qual motivo". Grafia separada e sem acento circunflexo.',
                cor: 'yellow'
              },
              {
                termo: 'porque (Lacuna 2)',
                papel: 'Conjunção Subordinativa Causal / Explicativa',
                regra: 'Introduz a justificativa do fato antecedente. Pode ser substituído perfeitamente por "pois" ou "visto que". Grafia junta e sem acento.',
                cor: 'green'
              },
              {
                termo: 'por quê (Lacuna 3)',
                papel: 'Pronome Interrogativo Tônico de Fim de Período',
                regra: 'Quando a palavra "que" fica isolada no final da frase ou imediatamente antes do ponto, torna-se tônica e exige acento circunflexo. Grafia separada.',
                cor: 'cyan'
              },
              {
                termo: 'o porquê (Lacuna 4)',
                papel: 'Substantivo Masculino Determinado por Artigo',
                regra: 'Precedido pelo artigo "o", funciona como substantivo pleno com o sentido de "a razão" ou "o motivo". Grafia junta e com acento.',
                cor: 'rose'
              }
            ],
            comoLerPassoAPasso: [
              '1º Passo – Procure o Substantivo com Artigo (Atalho Imediato): Olhe a lacuna 4. Há o artigo "o" antes ("esclarecer o _____")? Se há artigo definido, trata-se de um substantivo: a resposta É "o porquê" (junto e com circunflexo). Isso já elimina quase todas as alternativas!',
              '2º Passo – Verifique a Pontuação Final: Olhe a lacuna 3. Está colada ao ponto final (".")? Estando no final do período, a pronúncia é tônica: DEVE SER "por quê" (separado e com acento).',
              '3º Passo – Teste do "Pois" na Causa: Olhe a lacuna 2. Posso trocar por "pois" ou "já que" ("...recusou a conexão POIS o certificado expirou")? Se couber "pois", É causal/explicativa: use "porque" (junto e sem acento).',
              '4º Passo – Interrogativa Indireta: A lacuna 1 não tem ponto de interrogação explícito, mas traz verbo de dúvida ("não compreendeu"). Equivale a "por qual razão": use "por que" (separado e sem acento).'
            ],
            gabaritoOficial: 'Alternativa B',
            conclusaoPedagogica: 'Ao resolver questões de porquês da FGV ou Cesgranrio, comece sempre pelas pontas: identifique primeiro a lacuna final (com ponto) e a lacuna com artigo ("o porquê"). Com esses dois pontos ancorados, a questão é respondida com 100% de precisão em menos de 30 segundos.'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Guia do Novo Acordo Ortográfico - ABL',
          url: 'https://www.academia.org.br/nossa-lingua/acordo-ortografico',
          category: 'official',
          badgeLabel: 'Academia Brasileira de Letras',
          description: 'Regras oficiais sobre uso do hífen, acentuação gráfica e novas letras K, W, Y.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Assinale a frase em que o emprego do porquê está grafado de acordo com a norma-padrão:',
        answer: 'Não compreendemos por que as medidas foram suspensas pelo colegiado.',
        explanation: '"Por que" separado e sem acento é o correto em orações interrogativas indiretas (equivalente a "por qual razão").'
      }
    },

    // ================= LIÇÃO 3: CONCORDÂNCIA VERBAL & NOMINAL =================
    {
      id: 'lp-concordancia',
      title: 'Concordância Verbal & Nominal: Casos Críticos de Prova',
      subtopic: 'Sintaxe de Concordância',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Verbo HAVER no sentido de existir, ocorrer ou indicando tempo transcorrido é IMPESSOAL: não possui sujeito e permanece OBRIGATORIAMENTE no singular (Houve problemas; Haverá reuniões; Havia falhas).',
        'Verbo FAZER indicando tempo transcorrido ou fenômeno meteorológico também é IMPESSOAL e fica no singular (Faz cinco anos que trabalho aqui; Fazia meses que o servidor não reiniciava).',
        'Partícula "SE" Apassivadora: Quando acompanha verbo transitivo direto (VTD), o termo posterior é o SUJEITO PACIENTE, e o verbo concorda com ele (Alugam-se servidores; Desenvolvem-se soluções).',
        'Partícula "SE" Índice de Indeterminação do Sujeito: Quando acompanha verbo transitivo indireto (VTI + preposição), o sujeito é indeterminado e o verbo fica SEMPRE no singular (Precisa-se de analistas; Trata-se de vulnerabilidades).',
        'Expressões Partitivas (A maioria de, A maior parte de, Metade dos): Admitem dupla concordância quando seguidas de substantivo plural (A maioria dos analistas concordou [lógica] OU concordaram [atrativa]).'
      ],
      summary: `A concordância verbal e nominal é um dos eixos mais disputados nos concursos de TI. As bancas montam orações longas com termos intercalados para mascarar a concordância do sujeito, além de explorar a impessoalidade dos verbos 'haver' e 'fazer' e a diferenciação da partícula 'se'.`,
      mnemonics: 'PARTÍCULA SE: Com preposição (VTI) -> VERBO NO SINGULAR SEMPRE ("Trata-se de dados"). Sem preposição (VTD) -> CONCORDA COM O SUJEITO ("Processam-se os dados").',
      examPitfalls: [
        'Pegadinha Cebraspe: Tentar pluralizar o verbo auxiliar em locuções verbais com HAVER impessoal (ex: "Devem haver soluções" está ERRADO! O correto é "Deve haver soluções", pois o verbo haver transmite sua impessoalidade ao auxiliar).',
        'Pegadinha FGV: Confundir "Haver" (impessoal no singular) com "Existir" (verbo pessoal que vai para o plural: "Existiam muitos problemas" vs "Havia muitos problemas").',
        '"É proibido" / "É necessário" / "É bom": Sem artigo antes do substantivo, ficam no masculino singular ("É proibido entrada de pessoas"). Com artigo definido, concordam ("É proibida A entrada").'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Raio-X de Concordância Verbal em Questão Real FGV',
          topicTag: '✍️ Análise Sintática no Quadro',
          paperStyle: 'lined',
          colorTheme: 'green',
          headerNote: '📌 Como não cair no erro do sujeito no plural falso e verbos impessoais',
          handwrittenContent: `No quadro negro, o professor de concurso ensina o teste dos 3 filtros de concordância:
1) Verbos ==HAVER e FAZER== (Sem Sujeito):
   -> Sentido de existir/ocorrer/tempo? Fica no SINGULAR ABSOLUTO!
   -> "Houve muitas dúvidas" (Certo) | "Houveram muitas dúvidas" (ERRO GRAVE! ❌)
2) A Dança da ==Partícula SE==:
   -> VTD + SE = Voz Passiva Sintética -> O verbo concorda com o sujeito:
      ==Identificaram-se== graves falhas no firewall. (Falhas foram identificadas)
   -> VTI + SE (com preposição) = Indeterminação -> O verbo fica no SINGULAR:
      ==Necessita-se== de novos analistas de dados. (Tem "de"? Fica no singular!)`,
          diagramFormula: `Regra de Ouro:
VTD + SE + Substantivo Plural  => VERBO NO PLURAL   ("Consertam-se computadores")
VTI + SE + Preposição + Plural => VERBO NO SINGULAR ("Precisa-se de computadores")
Haver (= existir / tempo)      => SINGULAR SEMPRE   ("Houve dois acidentes")`,
          annotations: [
            '"Existir" tem sujeito: Se for existir, vai para o plural ("Existiam falhas").',
            'Com porcentagem: "1% aprovou", mas "1% dos alunos aprovaram / aprovou".'
          ],
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Receita Federal do Brasil – Auditor-Fiscal da Receita Federal – 2023',
            enunciado: `Assinale a frase em que a concordância verbal obedece rigorosamente às regras da norma-padrão da língua portuguesa:`,
            alternativas: [
              {
                letra: 'A',
                texto: '==Houveram== muitos incidentes críticos de vazamento de credenciais durante a migração dos sistemas legado para a nuvem.',
                correta: false,
                comentario: 'INCORRETA: O verbo "haver" no sentido de "ocorrer/acontecer" é impessoal. Não admite plural: o correto é "Houve muitos incidentes".'
              },
              {
                letra: 'B',
                texto: '==Faziam== mais de três anos que o comitê de governança não realizava uma auditoria independente na infraestrutura.',
                correta: false,
                comentario: 'INCORRETA: O verbo "fazer" quando exprime tempo decorrido é impessoal e não flexiona no plural: o correto é "Fazia mais de três anos".'
              },
              {
                letra: 'C',
                texto: '==A maioria dos auditores== de segurança da informação ==aprovaram== o novo modelo de autenticação multifator.',
                correta: true,
                comentario: 'CORRETA: Com expressões partitivas ("a maioria de", "grande parte de") seguidas de substantivo no plural ("auditores"), a gramática normativa aceita DUPLA CONCORDÂNCIA: tanto no singular concordando com o núcleo "a maioria aprovou", quanto no plural concordando com o termo especificador "auditores aprovaram".'
              },
              {
                letra: 'D',
                texto: '==Aluga-se== salas climatizadas e servidores dedicados para instalação dos novos centros de dados governamentais.',
                correta: false,
                comentario: 'INCORRETA: O verbo "alugar" é transitivo direto (VTD). O pronome "se" atua como partícula apassivadora. O sujeito paciente ("salas e servidores") é composto e está no plural: a concordância correta exige "Alugam-se salas e servidores".'
              },
              {
                letra: 'E',
                texto: '==Precisam-se== de profissionais certificados nas novas ferramentas de inteligência artificial generativa.',
                correta: false,
                comentario: 'INCORRETA: O verbo "precisar" é transitivo indireto (VTI), regendo a preposição "de". O "se" é índice de indeterminação do sujeito, tornando o verbo OBRIGATORIAMENTE no singular: "Precisa-se de profissionais".'
              }
            ],
            termosGrifados: [
              {
                termo: 'A maioria dos auditores aprovaram',
                papel: 'Expressão Partitiva com Dupla Concordância',
                regra: 'Sujeito formado por expressão partitiva ("a maioria de", "grande parte de") + especificador no plural permite concordância lógica (no singular com "a maioria") ou atrativa (no plural com "auditores"). Ambas são corretas segundo a norma-padrão.',
                cor: 'green'
              },
              {
                termo: 'Houveram',
                papel: 'Distrator de Prova (Haver Impessoal no Plural Indevido)',
                regra: 'O verbo haver com sentido de existir ou ocorrer não possui sujeito e deve permanecer sempre na 3ª pessoa do singular ("Houve muitos incidentes").',
                cor: 'rose'
              },
              {
                termo: 'Faziam mais de três anos',
                papel: 'Distrator de Prova (Fazer Temporal Impessoal)',
                regra: 'O verbo fazer indicando tempo decorrido não flexiona no plural: o correto é "Fazia mais de três anos".',
                cor: 'rose'
              },
              {
                termo: 'Aluga-se salas',
                papel: 'Distrator de Prova (Voz Passiva Sintética Desconforme)',
                regra: 'Com VTD + SE, o termo "salas" é o sujeito paciente (Salas são alugadas). O verbo deve ir obrigatoriamente para o plural: "Alugam-se salas".',
                cor: 'yellow'
              },
              {
                termo: 'Precisam-se de',
                papel: 'Distrator de Prova (Índice de Indeterminação com Plural Indevido)',
                regra: 'Com verbo transitivo indireto (VTI) + preposição "de", o pronome "se" indetermina o sujeito e o verbo NUNCA vai para o plural: o correto é "Precisa-se de".',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1º Passo – Procure Imediatamente os Verbos Haver e Fazer: Na primeira leitura das alternativas, procure formas como "houveram" ou "faziam anos". Viu "houveram incidentes" ou "faziam dois meses"? Risque essas opções imediatamente sem perder nenhum segundo!',
              '2º Passo – Faça o Teste da Partícula SE (Tem preposição depois?): Se encontrar o "se", olhe se há preposição imediatamente após. "Precisa-se DE..." -> tem preposição? Então é sujeito indeterminado: verbo OBRIGATORIAMENTE no singular. "Aluga-se salas..." -> não tem preposição e o termo seguinte é plural? Então é voz passiva: o verbo tem que ir para o plural ("Alugam-se salas").',
              '3º Passo – Valide as Expressões Partitivas: Se encontrar expressões como "a maioria de", "a maior parte de", "metade dos", lembre-se da regra de ouro: a banca quer te pegar achando que só pode o singular! A concordância com o substantivo no plural ("aprovaram") é consagrada e legítima!',
              '4º Passo – Verifique a Locução Verbal: Em locuções com verbo impessoal (ex: "vai haver", "deve fazer"), quem manda é o verbo principal: ele não flexiona e impede o auxiliar de flexionar ("deve haver", "vai fazer").'
            ],
            gabaritoOficial: 'Alternativa C',
            conclusaoPedagogica: 'A FGV frequentemente usa o caso da expressão partitiva ("A maioria dos auditores aprovaram") como alternativa correta porque o concurseiro desatento acha que apenas o singular ("aprovou") é aceito. Dominar a legitimidade da concordância atrativa garante a questão.'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Concordância Verbal & Nominal Descomplicada',
          url: 'https://www.youtube.com/results?search_query=concordancia+verbal+e+nominal+concursos+fgv',
          category: 'video',
          badgeLabel: 'Vídeo Aulas',
          description: 'Resolução das questões mais traiçoeiras de concordância verbal da FGV e Cebraspe.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Assinale a opção em que a concordância verbal está em desacordo com a norma-padrão da língua portuguesa:',
        answer: 'Houveram muitos recursos contra o gabarito preliminar da prova discursiva.',
        explanation: 'O verbo haver com sentido de ocorrer é impessoal e não admite a flexão de plural "houveram", devendo ser grafado "Houve muitos recursos".'
      }
    },

    // ================= LIÇÃO 4: PONTUAÇÃO & O SEGREDO DA VÍRGULA =================
    {
      id: 'lp-pontuacao-fgv',
      title: 'Pontuação & O Segredo da Vírgula (Estilo FGV & Cebraspe)',
      subtopic: 'Sintaxe de Pontuação',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Proibição Absoluta nº 1: NUNCA se separa por vírgula o Sujeito do seu Predicado (Ordem Direta SVC: Sujeito + Verbo + Complemento). Nem mesmo quando o sujeito for longo!',
        'Proibição Absoluta nº 2: NUNCA se separa por vírgula o Verbo do seu Complemento Direto ou Indireto.',
        'Adjunto Adverbial Deslocado: Se estiver no início ou meio da frase e tiver pequena extensão (1 ou 2 palavras), a vírgula é FACULTATIVA ("Hoje, estudamos" ou "Hoje estudamos"). Se tiver longa extensão (3 ou mais palavras), a vírgula é OBRIGATÓRIA ("Durante a madrugada de ontem, o servidor caiu").',
        'Orações Adjetivas: COM vírgula é EXPLICATIVA (generaliza para todo o grupo: "Os servidores de TI, que foram treinados, aprovaram a migração" = todos foram treinados). SEM vírgula é RESTRITIVA (limita a apenas alguns: "Os servidores de TI que foram treinados..." = apenas os treinados aprovaram).',
        'Vírgula antes do "E": É permitida e recomendada quando as orações tiverem SUJEITOS DIFERENTES ("O analista revisou o código, e o auditor emitiu o laudo final").'
      ],
      summary: `Esqueça o mito escolar de que 'a vírgula serve para respirar'. Em concursos públicos, a pontuação é 100% sintática. As bancas avaliam o conhecimento das proibições de quebra da ordem direta (SVC), a correta marcação de adjuntos adverbiais deslocados e a alteração de sentido decorrente da presença ou ausência de vírgula em orações adjetivas.`,
      mnemonics: 'ORDEM DIRETA SAGRADA: [Sujeito] + [Verbo] + [Complemento] -> JAMAIS coloque vírgula no meio desse bloco!',
      examPitfalls: [
        'Pegadinha Cebraspe: Afirmar que a retirada da vírgula em uma oração adjetiva explicativa mantém o sentido original do texto (ERRADO! A correção gramatical pode ser mantida, mas o SENTIDO MUDA de generalização para restrição!).',
        'Pegadinha FGV: Colocar um adjunto adverbial longo intercalado entre o sujeito e o verbo com apenas UMA vírgula (ex: "O diretor de TI, após a reunião extraordinária homologou o edital" -> ERRO GRAVE! Ou se usam duas vírgulas para isolar o termo intercalado, ou nenhuma vírgula!).',
        'Vírgula antes de "ou", "nem", "mas": Conjunções adversativas (mas, porém, contudo) exigem vírgula anterior obrigatória.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Raio-X da Vírgula em Questão Real FGV',
          topicTag: '✍️ Análise Sintática de Pontuação',
          paperStyle: 'lined',
          colorTheme: 'yellow',
          headerNote: '📌 Como enxergar a estrutura sintática da oração sem cair no mito da respiração',
          handwrittenContent: `No quadro negro, mapeamos as 3 Regras de Ferro da Pontuação:
1) O Bloco Intocável ==S - V - C==:
   -> [Sujeito] [Verbo] [Complemento]
   -> É PROIBIDO colocar uma vírgula isolada entre Sujeito e Verbo ou entre Verbo e Objeto!
2) Termo Intercalado: Se entrar um termo no meio, use ==DUAS VÍRGULAS==:
   -> "O auditor, ==após rigorosa análise==, assinou o laudo." (Correto: 2 vírgulas isolando o adjunto).
   -> "O auditor, ==após rigorosa análise== assinou o laudo." (ERRO GRAVE: esqueceu a segunda vírgula! ❌)
3) Orações Adjetivas (Cuidado com a Mudança de Sentido):
   -> COM vírgula: Explicativa (Refere-se à totalidade).
   -> SEM vírgula: Restritiva (Limita a uma parte específica).`,
          diagramFormula: `Regra Visual:
Sujeito ❌ [VÍRGULA PROIBIDA] ❌ Verbo ❌ [VÍRGULA PROIBIDA] ❌ Complemento
Adjunto Adverbial Deslocado Longo (3+ palavras) => [VÍRGULA OBRIGATÓRIA]`,
          annotations: [
            'Vocativo é SEMPRE isolado por vírgula: "Atenção, candidatos, iniciem a prova."',
            'Aposto explicativo vem sempre entre vírgulas ou travessões.'
          ],
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Senado Federal – Analista Legislativo (Informática Legislativa) – 2022',
            enunciado: `Assinale a opção em que o emprego das vírgulas está em INTEIRA CONFORMIDADE com as regras sintáticas da norma-padrão da língua portuguesa:`,
            alternativas: [
              {
                letra: 'A',
                texto: '==Todos os membros da comissão de licitação de tecnologia==, compareceram pontualmente à sessão pública de abertura dos envelopes.',
                correta: false,
                comentario: 'INCORRETA: Separou o sujeito ("Todos os membros da comissão de licitação de tecnologia") do seu predicado/verbo ("compareceram") com uma vírgula. Isso constitui erro sintático absoluto na norma culta.'
              },
              {
                letra: 'B',
                texto: 'O arquiteto de soluções em nuvem informou aos gestores, ==que os custos operacionais seriam reduzidos== com a nova arquitetura.',
                correta: false,
                comentario: 'INCORRETA: Separou o verbo transitivo direto e indireto ("informou aos gestores") da sua oração subordinada substantiva objetiva direta ("que os custos seriam reduzidos"). Não se separa o verbo de seu complemento.'
              },
              {
                letra: 'C',
                texto: '==Durante o período de manutenção preventiva dos servidores==, a equipe técnica aplicou todos os patches de segurança homologados.',
                correta: true,
                comentario: 'CORRETA: A oração inicia-se com um adjunto adverbial de tempo de longa extensão ("Durante o período de manutenção preventiva dos servidores" = 8 palavras). Por estar deslocado para o início do período e ter longa extensão, o emprego da vírgula é estritamente obrigatório segundo o padrão culto.'
              },
              {
                letra: 'D',
                texto: 'O diretor de segurança cibernética, ==após detectar a tentativa de intrusão== autorizou o bloqueio imediato dos endereços IP suspeitos.',
                correta: false,
                comentario: 'INCORRETA: A oração adverbial temporal intercalada ("após detectar a tentativa de intrusão") foi aberta com vírgula, mas não foi fechada antes do verbo principal ("autorizou"). Termos intercalados exigem duas vírgulas.'
              },
              {
                letra: 'E',
                texto: 'Os engenheiros de software finalizaram o módulo de pagamento, ==e o analista de garantia da qualidade== iniciou a bateria de testes automatizados.',
                correta: false,
                comentario: 'NOTA: Em orações com sujeitos diferentes ligadas pela conjunção "e", a vírgula é facultativa/recomendada, porém a alternativa C apresenta um caso de obrigatoriedade canônica e irrebatível de adjunto adverbial de grande extensão deslocado.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Durante o período de manutenção preventiva dos servidores,',
                papel: 'Adjunto Adverbial Temporal Deslocado de Longa Extensão',
                regra: 'Expressão adverbial de longa extensão (três ou mais vocábulos) posicionada no início do período exige obrigatoriamente vírgula para marcar o deslocamento sintático.',
                cor: 'green'
              },
              {
                termo: 'Todos os membros [...], compareceram',
                papel: 'Distrator de Prova (Quebra Proibida Sujeito - Verbo)',
                regra: 'É expressamente vedado separar o sujeito do predicado por vírgula, independentemente do número de palavras que compõem o sujeito.',
                cor: 'rose'
              },
              {
                termo: 'informou aos gestores, que',
                papel: 'Distrator de Prova (Quebra Verbo - Objeto Direto)',
                regra: 'Não se coloca vírgula entre o verbo e a oração subordinada substantiva que atua como seu objeto direto ("que os custos seriam reduzidos").',
                cor: 'rose'
              },
              {
                termo: 'após detectar [...], autorizou (apenas 1 vírgula)',
                papel: 'Distrator de Prova (Intercalação Incompleta)',
                regra: 'Termos ou orações intercaladas entre o sujeito e o verbo exigem marcação dupla (duas vírgulas): uma no início e outra no término da intercalação.',
                cor: 'yellow'
              }
            ],
            comoLerPassoAPasso: [
              '1º Passo – Identifique a Ordem Direta (SVC): Ao ler cada oração, faça a pergunta: "Quem pratica a ação?" (Sujeito) e "Qual é a ação?" (Verbo). Se houver uma vírgula solta entre o sujeito e o verbo, risque a alternativa na mesma hora!',
              '2º Passo – Verifique a Junção Verbo + Conjunção "QUE": Se houver um verbo transitivo seguido de vírgula antes da palavra "que" que introduz objeto direto ("afirmou, que..."; "disse, que..."; "informou, que..."), elimine! Não se separa verbo de complemento.',
              '3º Passo – Conte as Palavras do Adjunto Deslocado: Se a frase começar com circunstância de tempo, lugar ou modo (ex: "Durante a madrugada de ontem...", "No âmbito do datacenter central..."), conte as palavras: tendo 3 ou mais palavras, a vírgula é OBRIGATÓRIA.',
              '4º Passo – Regra do Par de Vírgulas: Encontrou um termo no meio da frase? Verifique se ele tem as DUAS vírgulas (abertura e fechamento). Se tiver apenas uma vírgula e a outra estiver faltando antes do verbo, a frase está incorreta!'
            ],
            gabaritoOficial: 'Alternativa C',
            conclusaoPedagogica: 'Na pontuação das bancas FGV e Cebraspe, a pergunta principal que o candidato deve se fazer nunca é "onde eu respiro?", mas sim "onde está o sujeito, onde está o verbo e onde está o complemento?". Isolar a estrutura sintática é a chave para o gabarito.'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Uso da Vírgula Sem Mistérios para Concursos',
          url: 'https://www.youtube.com/results?search_query=uso+da+virgula+fgv+concursos',
          category: 'video',
          badgeLabel: 'Vídeo Aulas',
          description: 'Aprenda a aplicar as regras de pontuação e resolver questões da FGV sem ler pela entonação.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Assinale a frase em que o emprego da vírgula decorre da mesma regra que justifica o seu uso em: "Na manhã de ontem, os fiscais interditaram o local."',
        answer: 'Durante os meses de recesso parlamentar, as comissões técnicas continuaram os trabalhos.',
        explanation: 'Em ambas as frases, a vírgula justifica-se pelo deslocamento de um adjunto adverbial de tempo de longa extensão para o início da oração.'
      }
    },

    // ================= LIÇÃO 5: CONJUNÇÕES & CONECTIVOS LÓGICOS =================
    {
      id: 'lp-conjuncoes-oracoes',
      title: 'Conjunções & Conectivos Lógicos: Valores Semânticos em Prova',
      subtopic: 'Morfossintaxe & Semântica',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Concessivas vs Adversativas (O Duelo Mais Cobrado): Ambas indicam oposição, mas com comportamentos sintáticos distintos. ADVERSATIVAS (mas, porém, contudo, todavia, no entanto) introduzem oração coordenada e quebram a expectativa dando maior força ao segundo argumento. CONCESSIVAS (embora, conquanto, ainda que, posto que, a despeito de, não obstante) introduzem oração subordinada e cedem temporariamente sem anular a força da tese principal.',
        'Causais vs Consecutivas: Causa é o motivo anterior (já que, visto que, como no início, porquanto); Consequência é o efeito posterior resultante (tanto... que, tão... que, de forma que).',
        'Conformativas: Indicam acordo com uma norma, modelo ou declaração (conforme, segundo, consoante, como).',
        'Proporcionais: Indicam gradação simultânea (à medida que, à proporção que). Cuidado: a expressão "na medida em que" tem valor CAUSAL (= já que), e a expressão "à medida em que" NÃO EXISTE na norma culta!',
        'Condicionais: Expressam hipótese (se, caso, contanto que, desde que + subjuntivo).'
      ],
      summary: `Nenhuma prova de concurso público em língua portuguesa é aplicada sem ao menos duas questões de conjunções. As bancas avaliam tanto a classificação morfológica do conectivo quanto a sua capacidade de substituição por sinônimos sem prejuízo do sentido original do texto e sem alteração do tempo verbal.`,
      mnemonics: 'CONCESSIVAS DE OURO: "Embora, conquanto, ainda que, posto que, a despeito de" -> Troque sempre uma pela outra para confirmar o valor de concessão!',
      examPitfalls: [
        'Pegadinha Cebraspe: "Posto que" tem valor predominantemente CONCESSIVO (= embora), mas muitos candidatos acham que significa "já que" ou "porque" e erram a questão.',
        'Pegadinha FGV: "Conquanto" é CONCESSIVA (= embora). "Portanto" é CONCLUSIVA. As bancas exploram a semelhança sonora para induzir o candidato a marcar como conclusão!',
        '"Como" polissêmico: No início da oração ("Como choveu, não fui") é CAUSAL (= já que). No meio ("Ele agiu como o diretor orientou") é CONFORMATIVO (= conforme). Comparando ("Forte como um touro") é COMPARATIVO.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Raio-X de Conjunções em Questão Real Cebraspe',
          topicTag: '✍️ Análise Semântica de Conectivos',
          paperStyle: 'lined',
          colorTheme: 'cyan',
          headerNote: '📌 Como identificar o valor semântico e testar substituições seguras na prova',
          handwrittenContent: `No quadro negro, dissecamos as Conjunções e suas Trocas Equivalentes:
1) O Bloco das ==CONCESSIVAS== (Ideia de contraste que não impede a ação):
   -> Conectivos: ==embora==, ==conquanto==, ==ainda que==, ==posto que==, ==a despeito de==, ==não obstante==.
   -> Dica: Exigem verbo no modo SUBJUNTIVO ("Embora o prazo ==seja== curto...").
2) O Bloco das ==ADVERSATIVAS== (Quebra brusca de expectativa com ênfase):
   -> Conectivos: ==mas==, ==porém==, ==contudo==, ==todavia==, ==entretanto==, ==no entanto==.
   -> Dica: O "mas" fica estritamente no início da oração e não aceita vírgula depois!
3) A Armadilha Clássica de Prova:
   -> "À medida que" = PROPORCIONALIDADE (À proporção que).
   -> "Na medida em que" = CAUSA (Já que / Visto que).
   -> "À medida em que" = ERRO GRAMATICAL (Mistura proibida! ❌)`,
          diagramFormula: `Tabela de Equivalência Semântica:
[Embora / Conquanto / Posto que]   <=> Concessão (Subordinada)
[Mas / Porém / Contudo / Todavia]  <=> Oposição / Quebra (Coordenada)
[Já que / Visto que / Visto como]   <=> Causa
[Portanto / Logo / Por conseguinte] <=> Conclusão`,
          annotations: [
            '"Porquanto" = Causal / Explicativo (equivale a porque/pois).',
            '"Conquanto" = Concessivo (equivale a embora/ainda que).'
          ],
          realExamQuestion: {
            banca: 'Cebraspe',
            orgaoAno: 'TCU – Auditor Federal de Controle Externo (Especialidade: TI) – 2022',
            enunciado: `Texto de referência:
"O Tribunal de Contas da União tem ampliado consideravelmente a auditoria automatizada em bases de dados governamentais com o emprego de inteligência artificial. Conquanto os algoritmos apresentem índices crescentes de acurácia na detecção de indícios de sobrepreço em licitações públicas, a homologação final dos apontamentos técnicos permanece sob a responsabilidade indelegável do auditor humano."

Com relação aos aspectos coesivos e semânticos do texto, julgue o item seguinte:
A substituição do conectivo "Conquanto" por "Embora" preservaria a correção gramatical e as relações de sentido originais do texto, uma vez que ambos introduzem uma circunstância subordinada concessiva.`,
            alternativas: [
              {
                letra: 'CERTO',
                texto: 'Item CERTO: "Conquanto" e "Embora" são conjunções subordinativas concessivas estritas e sinônimas perfeitas, ambas regendo o verbo no modo subjuntivo ("apresentem").',
                correta: true,
                comentario: 'O conectivo "conquanto" expressa exatamente o mesmo valor semântico de "embora", "ainda que" ou "posto que", admitindo uma objeção que não é suficiente para anular a conclusão da oração principal (a responsabilidade permanece com o auditor humano).'
              },
              {
                letra: 'ERRADO',
                texto: 'Item ERRADO: Se alegasse que "conquanto" tem valor conclusivo ou explicativo.',
                correta: false,
                comentario: 'A pegadinha típica do Cebraspe é sugerir que "conquanto" possui valor de conclusão (confundindo com "portanto") ou de conformidade (confundindo com "conforme").'
              }
            ],
            termosGrifados: [
              {
                termo: 'Conquanto',
                papel: 'Conjunção Subordinativa Concessiva',
                regra: 'Introduz oração subordinada adverbial concessiva, indicando uma concessão ou fato que se admite em contraste com a oração principal, sem invalidá-la. É sinônimo perfeito de "embora", "ainda que" e "posto que".',
                cor: 'green'
              },
              {
                termo: 'apresentem (Verbo no Subjuntivo)',
                papel: 'Flexão Verbal Exigida pela Concessão',
                regra: 'Conjunções concessivas como "conquanto" e "embora" exigem o verbo no modo subjuntivo (presente do subjuntivo: "que eles apresentem"). Como o verbo já está no subjuntivo, a substituição direta por "Embora" não altera em nada a regência verbal.',
                cor: 'yellow'
              },
              {
                termo: 'a homologação final [...] permanece',
                papel: 'Oração Principal (Tese Prevalecente)',
                regra: 'A oração principal mantém o peso argumentativo dominante do parágrafo: mesmo com a alta acurácia dos algoritmos, o auditor humano continua indispensável.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1º Passo – Isole o Conectivo e Faça a Identificação Morfológica: Viu "Conquanto"? Lembre-se imediatamente da lista de concessivas: "embora, conquanto, ainda que, posto que". Não confunda "conquanto" com "portanto" (conclusão) nem com "consoante" (conformidade).',
              '2º Passo – Verifique o Modo Verbal da Oração: O verbo que acompanha o conectivo está no subjuntivo ("apresentem")? Como "embora" também exige subjuntivo, a troca direta não quebra a concordância e nem exige ajuste de tempo verbal.',
              '3º Passo – Avalie a Relação de Sentido (Concessão vs Causa): Há um contraste sendo admitido? Sim: os algoritmos são precisos (fato positivo), mas a decisão continua humana (fato principal). Isso caracteriza a concessão pura.',
              '4º Passo – Confirmação Rápida de Julgamento (Certo/Errado): Se o enunciado diz que mantém a correção gramatical e o sentido original, o item está rigorosamente CERTO.'
            ],
            gabaritoOficial: 'Item CERTO',
            conclusaoPedagogica: 'No Cebraspe, a conjunção "conquanto" é uma das preferidas da banca porque sua sonoridade lembra "portanto" e "conforme". Gravar a equivalência direta [CONQUANTO = EMBORA] garante o acerto imediato dessa questão.'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Tabela Completa de Conjunções para Concursos',
          url: 'https://www.youtube.com/results?search_query=conjuncoes+para+concursos+tabela+resumo',
          category: 'video',
          badgeLabel: 'Vídeo Aulas',
          description: 'Macetes para memorizar todas as conjunções coordenativas e subordinativas em menos de 20 minutos.'
        }
      ],
      sampleQuestion: {
        banca: 'Cebraspe',
        statement: 'No fragmento "Embora houvesse indícios de invasão no servidor, o fluxo de transações não foi interrompido", a oração iniciada por "Embora" expressa circunstância de:',
        answer: 'Concessão',
        explanation: 'A conjunção "embora" introduz uma oração subordinada adverbial concessiva, admitindo um fato que não foi suficiente para impedir o fluxo das transações.'
      }
    },

    // ================= LIÇÃO 6: COESÃO TEXTUAL & COERÊNCIA =================
    {
      id: 'lp-coesao-coerencia',
      title: 'Mecanismos de Coesão Textual & Princípios de Coerência',
      subtopic: 'Texto & Discurso',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Coesão Referencial Anafórica: Retoma um termo ou ideia anteriormente expressa no texto (movimento retrospectivo: "O auditor elaborou o laudo. Este documento comprovou as falhas").',
        'Coesão Referencial Catafórica: Antecipa um termo ou conceito que ainda será apresentado no texto (movimento prospectivo: "A premissa da governança é esta: entregar valor ao negócio").',
        'Coesão Lexical por Hiperonímia e Hiponímia: Substituição por termos de maior abrangência (hiperônimo: "veículo", "software") ou menor abrangência (hipônimo: "caminhão", "PostgreSQL") para evitar repetição desnecessária.',
        'Elipse e Zeugma: Omissão de termo facilmente subentendido pelo contexto. Zeugma é a elipse de um termo que já foi expressamente mencionado antes na frase.',
        'Pronomes Demonstrativos no Texto: "Este/Esta/Isto" refere-se ao termo mais próximo ou ao que vai ser dito; "Aquele/Aquela/Aquilo" refere-se ao termo mais distante; "Esse/Essa/Isso" retoma o que acabou de ser dito.'
      ],
      summary: `A coesão textual diz respeito aos conectivos gramaticais de superfície que amarram as frases (pronomes, sinônimos, conjunções e elipses), enquanto a coerência refere-se à lógica e não contradição do significado global. As bancas examinam se o candidato sabe identificar o referente exato de pronomes demonstrativos e relativos no texto.`,
      mnemonics: 'ANÁFORA (A de Atrás / Antes) = Olha para o que já foi dito. CATÁFORA (C de Começo da Frente) = Olha para o que virá depois!',
      examPitfalls: [
        'Pegadinha FGV: Empregar "este" x "aquele" para retomar dois elementos mencionados anteriormente: "Aquele" retoma o primeiro (mais distante); "Este" retoma o segundo (mais recente). Inverter essa ordem é erro grave!',
        'Pegadinha Cebraspe: Afirmar que a elipse de um verbo compromete a clareza textual (geralmente não compromete, tratando-se de recurso estilístico e coesivo legítimo).',
        'Parônimos em relatórios técnicos: "Tráfego" (trânsito de pacotes na rede) vs "Tráfico" (comércio ilegal); "Ratificar" (confirmar/validar) vs "Retificar" (corrigir/alinhar).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Raio-X de Coesão Referencial em Questão Real FGV',
          topicTag: '✍️ Análise Textual no Quadro',
          paperStyle: 'lined',
          colorTheme: 'green',
          headerNote: '📌 Como identificar com precisão o referente de pronomes demonstrativos',
          handwrittenContent: `No quadro negro, mapeamos a regra dos Pronomes Demonstrativos na Coesão Textual:
1) Retomando dois termos anteriores (Duplo Referente):
   -> "O Tribunal adquiriu ==novos servidores== e ==licenças de software==: ==estas== [mais próximas = licenças] custaram caro; ==aqueles== [mais distantes = servidores] demandaram espaço no rack."
2) Anáfora vs Catáfora:
   -> ==ANÁFORA== (Retoma o passado): "O ataque DDoS foi mitigado; ==esse evento== foi registrado no log."
   -> ==CATÁFORA== (Anuncia o futuro): "A nossa meta em TI é ==esta==: zerar o tempo de inatividade."`,
          diagramFormula: `Regra de Referenciação Espacial no Texto:
Primeiro Termo Mencionado (Mais Longe)  => AQUELE / AQUELA / AQUILO
Segundo Termo Mencionado (Mais Perto)   => ESTE / ESTA / ISTO
Termo Imediatamente Anterior (Geral)    => ESSE / ESSA / ISSO`,
          annotations: [
            '"Ratificar" = Confirmar o que foi dito (Dar razão).',
            '"Retificar" = Fazer uma retífica / Corrigir um erro.'
          ],
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'MPU – Analista do MPU (Especialidade: Tecnologia da Informação) – 2023',
            enunciado: `Considere o fragmento textual retirado de um relatório técnico de infraestrutura:
"Durante a auditoria anual de conformidade, foram minuciosamente inspecionados o datacenter corporativo e a nuvem pública contratada: esta apresentou conformidade imediata com todos os controles da ISO 27001; aquele necessitou de intervenções urgentes na climatização física e no cabeamento estruturado."

Em relação aos mecanismos coesivos empregados no trecho, é CORRETO afirmar que:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'O termo "esta" retoma "o datacenter corporativo", e o termo "aquele" retoma "a nuvem pública contratada".',
                correta: false,
                comentario: 'INCORRETA: Inverteu a regra gramatical dos demonstrativos. "Esta" refere-se ao elemento mencionado por último (mais próximo = nuvem pública), enquanto "aquele" refere-se ao primeiro elemento mencionado (mais distante = datacenter corporativo).'
              },
              {
                letra: 'B',
                texto: 'O pronome "esta" refere-se anadicamente à "nuvem pública contratada" por ser o elemento mais próximo, enquanto "aquele" retoma "o datacenter corporativo" por ser o elemento mais remoto.',
                correta: true,
                comentario: 'CORRETA: Aplicação precisa da norma-padrão de referenciação distributiva com pronomes demonstrativos: "este/esta" recupera o antecedente mais próximo; "aquele/aquela" recupera o antecedente mais remoto no texto.'
              },
              {
                letra: 'C',
                texto: 'O uso de "aquele" configura uma catáfora, pois antecipa as intervenções que ainda seriam descritas no relatório.',
                correta: false,
                comentario: 'INCORRETA: "Aquele" está retomando um termo já citado ("o datacenter corporativo"), configurando um mecanismo anafórico, e não catafórico.'
              },
              {
                letra: 'D',
                texto: 'Haveria prejuízo gramatical se "esta" e "aquele" fossem substituídos respectivamente por "a primeira" e "a segunda".',
                correta: false,
                comentario: 'INCORRETA: "Esta" é a segunda mencionada, e "aquele" é o primeiro mencionado. A correspondência seria "a segunda" e "o primeiro", não havendo erro se mantida a correlação lógica.'
              }
            ],
            termosGrifados: [
              {
                termo: 'esta',
                papel: 'Pronome Demonstrativo Anafórico Distributivo (Mais Próximo)',
                regra: 'Na correlação entre dois termos antecedentes, "este/esta" recupera o elemento citado por último no texto (o mais próximo fisicamente = "a nuvem pública contratada").',
                cor: 'green'
              },
              {
                termo: 'aquele',
                papel: 'Pronome Demonstrativo Anafórico Distributivo (Mais Distante)',
                regra: 'Na correlação entre dois antecedentes, "aquele/aquela" recupera o primeiro elemento citado (o mais distante fisicamente no texto = "o datacenter corporativo").',
                cor: 'yellow'
              },
              {
                termo: 'o datacenter corporativo (1º) [...] e a nuvem pública (2º)',
                papel: 'Referentes Textuais Antecedentes',
                regra: 'Os dois núcleos nominais que formam o objeto da inspeção e que são distribuídos pelos pronomes demonstrativos seguintes para evitar a repetição dos substantivos.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1º Passo – Mapeie a Ordem dos Termos Mencionados: Encontre os dois elementos que foram comparados ou citados no texto. Termo 1 (mais antigo/mais longe): "datacenter corporativo". Termo 2 (mais recente/mais perto): "nuvem pública".',
              '2º Passo – Aplique a Regra da Distância Física dos Demonstrativos: "ESTE / ESTA" aponta para o que está perto (Termo 2 = nuvem). "AQUELE / AQUELA" aponta para o que está longe (Termo 1 = datacenter).',
              '3º Passo – Descarte as Alternativas Invertidas: A banca quase sempre traz uma alternativa que inverte os papéis (dizendo que "esta" retoma o primeiro). Identificou a inversão? Corte a alternativa na hora!',
              '4º Passo – Verifique a Terminologia (Anáfora x Catáfora): Como ambos estão recuperando termos que já haviam sido ditos anteriormente no texto, o movimento é ANÁFORA (retomada para trás).'
            ],
            gabaritoOficial: 'Alternativa B',
            conclusaoPedagogica: 'A FGV tem predileção especial por testar a coesão referencial por demonstrativos ("este" x "aquele") em relatórios técnicos e textos argumentativos. Ter a regra da proximidade na ponta da língua impede qualquer confusão.'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Coesão e Coerência Textual - Toda Matéria',
          url: 'https://www.todamateria.com.br/coesao-e-coerencia/',
          category: 'article',
          badgeLabel: 'Artigo',
          description: 'Exemplos práticos de coesão referencial, sequencial e elipses.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'No fragmento "O projeto foi aprovado rapidamente; apenas três ou quatro deputados votaram contra", a ausência da repetição do verbo "votaram" na primeira oração configura qual recurso estilístico e coesivo?',
        answer: 'Elipse (ou Zeugma)',
        explanation: 'A elipse consiste na omissão de um termo facilmente depreendido pelo contexto da oração.'
      }
    }
  ]
};
