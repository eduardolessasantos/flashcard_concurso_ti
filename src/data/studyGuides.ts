import { StudyGuideTopic } from '../types';

export const STUDY_GUIDE_TOPICS: StudyGuideTopic[] = [
  // ================= CONHECIMENTOS GERAIS =================
  {
    id: 'Língua Portuguesa',
    title: 'Língua Portuguesa',
    category: 'conhecimentos_gerais',
    description: 'Crase, Regência Verbal e Nominal, Pontuação estilo FGV, Conjunções, Sintaxe e Concordância com partícula SE.',
    badge: 'Conhecimentos Gerais (Peso Alto)',
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
      {
        id: 'lp-crase-regencia',
        title: 'Crase & Regência: Regras de Ouro e Casos de Prova',
        subtopic: 'Sintaxe & Morfologia',
        readTimeMinutes: 7,
        keyTakeaways: [
          'Crase é a fusão da preposição "a" exigida pelo termo regente com o artigo feminino "a(s)" ou pronomes demonstrativos (aquele, aquela, aquilo).',
          'NUNCA ocorre crase antes de palavras masculinas, verbos no infinitivo, pronomes de tratamento (exceto senhora/senhorita/dona) e pronomes indefinidos/pessoais.',
          'Crase FACULTATIVA nos 3 casos clássicos: Antes de nomes próprios femininos, antes de pronomes possessivos femininos singulares (minha, tua, sua) e depois da palavra "até".',
          'Troca pelo masculino: se ao substituir a palavra feminina por uma masculina correspondente surgir "ao/aos", OCORRE crase (ex: Fui à praia -> Fui ao parque).'
        ],
        summary: `O acento grave indicativo de crase é um dos tópicos mais frequentes em todas as bancas (especialmente FGV e Cebraspe). Dominar os casos proibidos e o teste prático de substituição garante acerto imediato.`,
        mnemonics: 'CASOS FACULTATIVOS: "Até a minha Maria" (Até + Pronome Possessivo Feminino + Nome Próprio Feminino).',
        examPitfalls: [
          'FGV adora cobrar a expressão "à moda de / à maneira de" oculta antes de palavra masculina (ex: "Bife à [moda de] cavalo" -> Leva crase se a locução estiver subentendida!).',
          'Cebraspe testa o uso de crase antes de "terra" (oposição a bordo: sem crase) e "casa" (lar próprio desacompanhado de adjetivo: sem crase).',
          'Se a palavra "uma" for artigo indefinido, nunca há crase (ex: Chegou a uma conclusão).'
        ],
        handwrittenNotes: [
          {
            title: 'Caderno de Regras: Teste Prático da Crase',
            topicTag: '✍️ Rascunho de Prova',
            paperStyle: 'lined',
            colorTheme: 'yellow',
            headerNote: '📌 Macete infalível de Concurseiro',
            handwrittenContent: `Regra de Ouro da Substituição:
1) Pegue o substantivo feminino e troque por um masculino equivalente.
   -> "Fui ___ escola"  => Troca por "colégio"
   -> "Fui AO colégio"  => Deu "AO"? Então TEM CRASE: "Fui À escola!" ✅
   -> "Visitei ___ cidade" => Troca por "país"
   -> "Visitei O país"   => Deu só "O"? NÃO TEM CRASE: "Visitei A cidade!" ❌

⚠️ Diante de Verbo: NUNCA USE CRASE!
   -> "Começou a chorar" (chorar = verbo no infinitivo) -> SEM CRASE!
   -> "Disposto a ajudar" -> SEM CRASE!`,
            annotations: [
              'Vera foi à feira (foi ao mercado = crase certa)',
              'Não use crase antes de "todos", "ela", "ninguém"'
            ],
            diagramFormula: 'Preposição (A) + Artigo (A) = À (Acento Grave)'
          }
        ],
        usefulLinks: [
          {
            title: 'Aula Completa de Crase para FGV & Cebraspe',
            url: 'https://www.youtube.com/results?search_query=crase+para+concursos+fgv+cebraspe',
            category: 'video',
            badgeLabel: 'Vídeo Aulas',
            description: 'Resolução das questões mais recorrentes de crase em concursos recentes.'
          },
          {
            title: 'Guia Completo de Regência Verbal - Toda Matéria',
            url: 'https://www.todamateria.com.br/regencia-verbal/',
            category: 'article',
            badgeLabel: 'Artigo Didático',
            description: 'Tabela de verbos que mudam de sentido conforme a preposição (Assistir, Visar, Aspirar, Esquecer).'
          }
        ],
        sampleQuestion: {
          banca: 'FGV',
          statement: 'Assinale a opção em que o uso do sinal indicativo de crase é OBRIGATÓRIO de acordo com a norma-padrão:',
          answer: 'Refiro-me à servidora que assinou o relatório técnico.',
          explanation: 'O verbo referir-se exige a preposição "a" (referir-se a algo/alguém) e a palavra "servidora" aceita o artigo definido feminino "a", ocorrendo a fusão obrigatória (à servidora).'
        }
      },
      {
        id: 'lp-pontuacao-virgula',
        title: 'Pontuação & Emprego da Vírgula (Estilo FGV e Cebraspe)',
        subtopic: 'Sintaxe da Oração e do Período',
        readTimeMinutes: 8,
        keyTakeaways: [
          'Regra Sagrada: NUNCA se separa por vírgula o Sujeito do seu Verbo, nem o Verbo dos seus Complementos diretos/indiretos (Ordem Direta: SVC).',
          'Adjunto Adverbial Deslocado: Se for de grande extensão (3 ou mais palavras), a vírgula é OBRIGATÓRIA; se de curta extensão (1 ou 2 palavras), a vírgula é FACULTATIVA.',
          'Orações Adjetivas: Com vírgula = EXPLICATIVA (generaliza/explica todo o grupo); Sem vírgula = RESTRITIVA (limita apenas uma parcela do grupo).',
          'Vírgula antes do "E": Obrigatória se os sujeitos das orações coordenadas forem DISTINTOS ou com valor polissindético/adversativo.'
        ],
        summary: `Nas provas da FGV, pontuação não é apenas sobre pausas respiratórias, mas sobre análise sintática rigorosa e mudanças de sentido semântico provocadas pelo deslocamento de termos.`,
        mnemonics: 'ORDEM PROIBIDA DE VÍRGULA: S - V - C (Sujeito - Verbo - Complemento não se separam!).',
        examPitfalls: [
          'FGV adora perguntar: "A retirada da vírgula altera o sentido original do período?" -> Em Orações Adjetivas, a retirada da vírgula SEMPRE muda o sentido de Explicativa para Restritiva!',
          'Vírgula antes de conjunção aditiva "e": se os sujeitos forem diferentes, a vírgula é recomendada e aceita pela norma culta (ex: "O auditor analisou o código, e o analista homologou o banco").'
        ],
        handwrittenNotes: [
          {
            title: 'Esquema de Vírgula: Orações Adjetivas & Sentido',
            topicTag: '✍️ Análise Semântica',
            paperStyle: 'grid',
            colorTheme: 'cyan',
            headerNote: '⚠️ Pegadinha clássica FGV',
            handwrittenContent: `Diferença de Sentido Crucial:
1) "Os servidores de TI, que foram aprovados no concurso, receberam bônus."
   -> COM VÍRGULAS = Oração Explicativa.
   -> Significado: TODOS os servidores de TI foram aprovados no concurso.

2) "Os servidores de TI que foram aprovados no concurso receberam bônus."
   -> SEM VÍRGULAS = Oração Restritiva.
   -> Significado: Apenas UMA PARTE dos servidores foi aprovada (os outros não).

🚫 Nunca faça isso:
"O presidente da comissão de concurso [❌ VÍRGULA ERRADA] homologou o resultado."
-> Não separe o Sujeito longo do seu verbo!`,
            annotations: [
              'Vírgula isola vocativo: "Bom dia, Auditor!"',
              'Vírgula isola aposto explicativo: "Java, linguagem tipada, é robusta."'
            ]
          }
        ],
        usefulLinks: [
          {
            title: 'Pontuação e Emprego da Vírgula - Canal Português com Letícia',
            url: 'https://www.youtube.com/results?search_query=portugues+com+leticia+virgula',
            category: 'video',
            badgeLabel: 'Vídeo Aulas',
            description: 'Regras práticas sobre adjuntos adverbiais deslocados e orações explicativas.'
          }
        ],
        sampleQuestion: {
          banca: 'Cebraspe',
          statement: 'No trecho "Os desenvolvedores seniores, que possuem certificação em Cloud, lideraram a migração", a supressão de ambas as vírgulas manteria a correção gramatical do texto, mas alteraria seu sentido original.',
          answer: 'CERTO',
          explanation: 'Correto. Sem as vírgulas, a oração subordinada adjetiva passaria de explicativa (onde se afirma que todos os desenvolvedores seniores possuem certificação) para restritiva (restringindo a liderança apenas aos que possuem dita certificação).'
        }
      },
      {
        id: 'lp-conjuncoes-conectivos',
        title: 'Conjunções & Conectivos Lógicos: Valores Semânticos',
        subtopic: 'Coesão e Coerência',
        readTimeMinutes: 7,
        keyTakeaways: [
          'Concessivas (indicam quebra de expectativa sem anular o fato principal): embora, conquanto, ainda que, mesmo que, apesar de que, por mais que (+ Verbo no Subjuntivo).',
          'Adversativas (oposição direta entre ideias): mas, porém, contudo, todavia, entretanto, no entanto (+ Verbo no Indicativo).',
          'Causais (o motivo do fato principal): porque, visto que, já que, uma vez que, como (no início da frase), porquanto.',
          'Conformativas (acordo/conformidade): conforme, segundo, consoante, como.'
        ],
        summary: `As bancas costumam trocar conjunções causais por consecutivas, ou concessivas por adversativas, exigindo que o candidato identifique o valor semântico exato na oração.`,
        mnemonics: 'CUIDADO: "Porquanto" = PORQUE (Causa/Explicação); "Conquanto" = EMBORA (Concessão).',
        examPitfalls: [
          'Não confunda "Porquanto" (Causal) com "Portanto" (Conclusiva) nem com "Conquanto" (Concessiva)!',
          'O "Como" no início da frase tem valor CAUSAL ("Como não estudou, foi reprovado = Visto que não estudou").'
        ],
        handwrittenNotes: [
          {
            title: 'Tabela de Post-its: Conjunções Perigosas',
            topicTag: '✍️ Bizú de Ouro',
            paperStyle: 'postit',
            colorTheme: 'pink',
            headerNote: '📌 Não confunda na hora da prova!',
            handwrittenContent: `As 3 Irmãs Gêmeas Traiçoeiras:

1) PORQUANTO = "Visto que / Porque" (CAUSA)
   -> "Ele foi promovido, porquanto entregou o projeto no prazo."

2) CONQUANTO = "Embora / Ainda que" (CONCESSÃO)
   -> "Conquanto estivesse cansado, continuou revisando os flashcards."

3) PORTANTO = "Logo / Então / Por isso" (CONCLUSÃO)
   -> "Estudou com disciplina, portanto conquistou a vaga."`,
            annotations: [
              'Adversativa (MAS): Quebra forte, indicativo.',
              'Concessiva (EMBORA): Obstáculo superado, subjuntivo.'
            ]
          }
        ],
        usefulLinks: [
          {
            title: 'Quadro de Conjunções Coordenativas e Subordinativas',
            url: 'https://brasilescola.uol.com.br/gramatica/conjuncao.htm',
            category: 'article',
            badgeLabel: 'Tabela Completa',
            description: 'Lista categorizada de todas as conjunções e seus efeitos semânticos no texto.'
          }
        ],
        sampleQuestion: {
          banca: 'Cesgranrio',
          statement: 'A conjunção "conquanto" expressa a mesma relação lógico-semântica de qual dos seguintes conectivos?',
          answer: 'Embora (Concessão)',
          explanation: '"Conquanto" é uma conjunção subordinativa concessiva clássica, sinônima exata de "embora", "ainda que" e "posto que".'
        }
      }
    ]
  },

  // ================= RACIOCÍNIO LÓGICO E MATEMÁTICA =================
  {
    id: 'Raciocínio Lógico e Matemática',
    title: 'Raciocínio Lógico e Matemática (RLM)',
    category: 'conhecimentos_gerais',
    description: 'Tabela Verdade, Conectivos, Negação e Equivalência Lógica, Diagramas de Venn, Análise Combinatória e Probabilidade.',
    badge: 'Conhecimentos Gerais (Decisivo)',
    iconName: 'Calculator',
    generalUsefulLinks: [
      {
        title: 'Khan Academy Brasil - Matemática e Probabilidade',
        url: 'https://pt.khanacademy.org/math',
        category: 'official',
        badgeLabel: 'Plataforma Interativa',
        description: 'Exercícios práticos de análise combinatória, conjuntos e probabilidade com explicações passo a passo.'
      },
      {
        title: 'Canal Matemática Rio com Prof. Rafael Procopio (YouTube)',
        url: 'https://www.youtube.com/@matematicario',
        category: 'video',
        badgeLabel: 'Vídeo Aulas',
        description: 'Resoluções didáticas de questões de concursos e macetes para provas de raciocínio lógico.'
      },
      {
        title: 'Gerador de Tabelas Verdade Interativo',
        url: 'https://web.stanford.edu/class/cs103/tools/truth-table-tool/',
        category: 'doc',
        badgeLabel: 'Ferramenta Web',
        description: 'Simulador online para testar fórmulas proposicionais, tautologias e contradições.'
      }
    ],
    lessons: [
      {
        id: 'rlm-tabela-verdade-conectivos',
        title: 'Tabela Verdade & Operadores Lógicos Proposicionais',
        subtopic: 'Lógica Proposicional',
        readTimeMinutes: 8,
        keyTakeaways: [
          'Conjunção (p ∧ q): "E" -> Só é VERDADE se AMBAS as proposições forem verdadeiras.',
          'Disjunção Inclusiva (p ∨ q): "OU" -> Só é FALSA se AMBAS as proposições forem falsas.',
          'Disjunção Exclusiva (p ⊻ q): "OU... OU" -> Só é VERDADE quando os valores lógicos são DIFERENTES (um V e outro F).',
          'Condicional (p → q): "Se p, então q" -> Só é FALSA no caso VERA FISCHER (V antecedente e F consequente).',
          'Bicondicional (p ↔ q): "p se e somente se q" -> Só é VERDADE quando os valores lógicos são IGUAIS (V e V ou F e F).'
        ],
        summary: `A lógica proposicional avalia o valor-verdade de proposições compostas. O condicional ("Se... então") é o operador mais explorado em questões de concurso devido à sua assimetria lógica.`,
        mnemonics: 'CONDICIONAL FALSO: "Vera Fischer é Falsa" (V -> F = F). Nos demais casos, é sempre VERDADEIRO!',
        examPitfalls: [
          'No condicional (p → q), se o antecedente p for FALSO, a proposição inteira é AUTOMATICAMENTE VERDADEIRA (Princípio da Vacuidade), independentemente do valor de q!',
          'Tautologia: proposição composta sempre Verdadeira para qualquer atribuição.',
          'Contradição: proposição composta sempre Falsa.'
        ],
        handwrittenNotes: [
          {
            title: 'Resumo de Mesa: Tabela Verdade Express',
            topicTag: '✍️ Rascunho Rápido',
            paperStyle: 'grid',
            colorTheme: 'yellow',
            headerNote: '🎯 Decore para a prova!',
            handwrittenContent: `Resumo dos Conectivos em 4 Linhas:

1) E (∧)  -> Exigente! Só dá V se for (V ∧ V).
2) OU (∨) -> Generoso! Só dá F se for (F ∨ F).
3) SE... ENTÃO (→) -> Cuidado com a VERA FISCHER!
   [ V → F = F ]  |  [ V → V = V ]  |  [ F → V = V ]  |  [ F → F = V ]
4) SE E SOMENTE SE (↔) -> Iguais dão V, Diferentes dão F!

Número de Linhas da Tabela = 2^n (onde n é o número de proposições simples).
-> 3 proposições (p, q, r) = 2^3 = 8 linhas!`,
            annotations: [
              'p → q NÃO é o mesmo que q → p!',
              'Disjunção Exclusiva (⊻): Ou estudo TI ou durmo.'
            ],
            diagramFormula: 'p | q | p∧q | p∨q | p→q | p↔q\nV | V |  V  |  V  |  V  |  V\nV | F |  F  |  V  |  F  |  F\nF | V |  F  |  V  |  V  |  F\nF | F |  F  |  F  |  V  |  V'
          }
        ],
        usefulLinks: [
          {
            title: 'Tabela Verdade Descomplicada - Aula Completa',
            url: 'https://www.youtube.com/results?search_query=tabela+verdade+raciocinio+logico+fgv+cebraspe',
            category: 'video',
            badgeLabel: 'Vídeo Aulas',
            description: 'Aprenda a montar a tabela verdade em menos de 1 minuto na folha de rascunho.'
          }
        ],
        sampleQuestion: {
          banca: 'Cebraspe',
          statement: 'Se a proposição simples P for falsa e a proposição simples Q for falsa, então a proposição composta "P → Q" terá valor lógico verdadeiro.',
          answer: 'CERTO',
          explanation: 'Correto. Na tabela verdade do condicional (P → Q), o único caso que resulta em Falso é V → F. Quando o antecedente P é Falso (F → F), a proposição composta é estritamente Verdadeira.'
        }
      },
      {
        id: 'rlm-equivalencias-negacoes',
        title: 'Negações de Proposições & Equivalências Lógicas',
        subtopic: 'Equivalência e Negação',
        readTimeMinutes: 7,
        keyTakeaways: [
          'Negação do "E" e do "OU" (Leis de De Morgan): ~(p ∧ q) ≡ ~p ∨ ~q  |  ~(p ∨ q) ≡ ~p ∧ ~q (Nega tudo e inverte o conectivo).',
          'Negação do "Se... então" (Regra do MANÉ): ~(p → q) ≡ p ∧ ~q (MAntém a primeira E NEga a segunda).',
          'Equivalência Contrapositiva do Condicional: (p → q) ≡ (~q → ~p) (Inverte e nega ambas!).',
          'Equivalência do Condicional com OU (Regra do NEYMAR): (p → q) ≡ (~p ∨ q) (NEga a primeira OU MAnteve a segunda).'
        ],
        summary: `Negações e equivalências do condicional representam mais de 60% das questões de lógica da FGV e Cesgranrio. O macete do "MANÉ" e a "Contrapositiva" são essenciais.`,
        mnemonics: 'NEGAÇÃO DO CONDICIONAL: Regra do "MANÉ" (MAntém a primeira E NEga a segunda).',
        examPitfalls: [
          'A negação de "Se chove, fico em casa" NUNCA é outro "Se... então"! A negação é "Chove E eu NÃO fico em casa".',
          'Contrapositiva: "Se sou auditor, ganho bem" equivale a "Se NÃO ganho bem, NÃO sou auditor".'
        ],
        handwrittenNotes: [
          {
            title: 'Esquema de Negação e Equivalência: Bizús Rápidos',
            topicTag: '✍️ Fórmulas Práticas',
            paperStyle: 'lined',
            colorTheme: 'green',
            headerNote: '⭐ O macete mais cobrado em provas!',
            handwrittenContent: `1) Para NEGAR o "SE... ENTÃO" (p → q):
   -> Use a Regra do MANÉ:
      MA (Mantém a 1ª) + E (Conectivo 'E') + NÉ (Nega a 2ª)
   -> Exemplo: "Se estudo Python, passo no concurso."
   -> Negação: "Estudo Python E NÃO passo no concurso!" ✅

2) Para achar a EQUIVALÊNCIA do "SE... ENTÃO" (p → q):
   Opção A (Contrapositiva): Inverte e nega tudo! (~q → ~p)
      -> "Se não passei no concurso, então não estudei Python."
   Opção B (Regra do NEYMAR): NÉ (Nega a 1ª) + OU + MA (Mantém a 2ª)
      -> (~p ∨ q): "NÃO estudo Python OU passo no concurso."`,
            annotations: [
              'Negação do TODO: "Pelo menos um NÃO" (PEA + Não)',
              'NUNCA negue "Todo" com "Nenhum"!'
            ],
            diagramFormula: 'Negação: ~(p → q) ≡ p ∧ ~q\nEquivalência 1: p → q ≡ ~q → ~p\nEquivalência 2: p → q ≡ ~p ∨ q'
          }
        ],
        usefulLinks: [
          {
            title: 'Equivalências Lógicas e Negações - Prof. Guilherme Neves',
            url: 'https://www.youtube.com/results?search_query=equivalencias+logicas+guilherme+neves',
            category: 'video',
            badgeLabel: 'Vídeo Aulas',
            description: 'Macetes visuais para resolver questões de equivalência em menos de 30 segundos.'
          }
        ],
        sampleQuestion: {
          banca: 'FGV',
          statement: 'A negação lógica da sentença "Se o código foi revisado, então o deploy é seguro" é:',
          answer: 'O código foi revisado e o deploy não é seguro.',
          explanation: 'Aplicando a regra do MANÉ para negação do condicional: Mantém a primeira proposição ("O código foi revisado"), troca o "se...então" pelo conectivo "e", e nega a segunda proposição ("o deploy não é seguro").'
        }
      },
      {
        id: 'rlm-combinatoria-probabilidade',
        title: 'Análise Combinatória & Probabilidade para Concursos',
        subtopic: 'Contagem e Probabilidade',
        readTimeMinutes: 9,
        keyTakeaways: [
          'Princípio Fundamental da Contagem (PFC): Multiplicação do número de possibilidades de cada etapa independente.',
          'Arranjo vs Combinação: Se a ordem dos elementos importou para formar grupos diferentes -> ARRANJO ($A_{n,p} = \\frac{n!}{(n-p)!}$). Se a ordem NÃO importa (comissões, duplas, grupos) -> COMBINAÇÃO ($C_{n,p} = \\frac{n!}{p!(n-p)!}$).',
          'Permutação Simples: $P_n = n!$. Permutação com Repetição: Dividir pelo fatorial dos elementos repetidos.',
          'Probabilidade Clássica: $P(E) = \\frac{\\text{Casos Favoráveis}}{\\text{Casos Possíveis (Espaço Amostral)}}}$.'
        ],
        summary: `O segredo da análise combinatória em concursos é saber fazer a pergunta correta: "Se eu trocar a ordem dos elementos, o grupo muda?". Se mudar, é arranjo/permutação; se não mudar, é combinação.`,
        mnemonics: 'A ORDEM IMPORTA? "Aham! (Arranjo)" ou "Não! (Combinação)".',
        examPitfalls: [
          'Cebraspe adora colocar comissões de trabalho com restrições (ex: "comissão de 4 pessoas contendo OBRIGATORIAMENTE pelo menos 1 mulher" -> Calcule o Total e subtraia o caso de "nenhuma mulher").',
          'Probabilidade da União: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Não esqueça de subtrair a interseção!'
        ],
        handwrittenNotes: [
          {
            title: 'Mapa de Decisão: Arranjo vs Combinação',
            topicTag: '✍️ Passo a Passo',
            paperStyle: 'grid',
            colorTheme: 'cyan',
            headerNote: '🧮 Como saber qual fórmula usar',
            handwrittenContent: `Faça o Teste da Troca de Posição:

Exemplo 1: Escolher Presidente e Vice entre 5 analistas.
-> Grupo (Ana, Beto) = Ana Presidente, Beto Vice.
-> Inverte: (Beto, Ana) = Beto Presidente, Ana Vice.
-> Mudou o resultado? SIM! A ordem importa! => ARRANJO! 🏆

Exemplo 2: Escolher uma comissão de 2 analistas entre 5.
-> Grupo (Ana, Beto) = Comissão com Ana e Beto.
-> Inverte: (Beto, Ana) = Mesma comissão!
-> Mudou o resultado? NÃO! A ordem NÃO importa! => COMBINAÇÃO! 👥
-> Fórmula: C(5, 2) = (5 × 4) / (2 × 1) = 10 comissões!`,
            annotations: [
              'Pelo menos um = Total - Nenhum',
              'Probabilidade sempre varia de 0 (0%) a 1 (100%)'
            ],
            diagramFormula: 'Arranjo (Ordem SIM): A(n,p) = n! / (n-p)!\nCombinação (Ordem NÃO): C(n,p) = n! / [p!(n-p)!]'
          }
        ],
        usefulLinks: [
          {
            title: 'Análise Combinatória do Zero - Matemática Rio',
            url: 'https://www.youtube.com/results?search_query=matematica+rio+analise+combinatoria',
            category: 'video',
            badgeLabel: 'Vídeo Aulas',
            description: 'Explicação visual de permutações, arranjos e combinações sem decoreba.'
          }
        ],
        sampleQuestion: {
          banca: 'Cesgranrio',
          statement: 'De um grupo de 8 analistas de infraestrutura e 6 desenvolvedores, deseja-se formar uma equipe de projeto com 3 analistas e 2 desenvolvedores. De quantas maneiras distintas essa equipe pode ser formada?',
          answer: '840 maneiras',
          explanation: 'Como a ordem dentro da equipe não importa, usamos combinação: C(8, 3) para os analistas = (8×7×6)/(3×2×1) = 56; C(6, 2) para os desenvolvedores = (6×5)/(2×1) = 15. Pelo princípio multiplicativo: 56 × 15 = 840 maneiras distintas.'
        }
      }
    ]
  },

  // ================= LÍNGUA INGLESA (TI) =================
  {
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
      },
      {
        title: 'BBC Learning English - Tech Talks',
        url: 'https://www.bbc.co.uk/learningenglish/',
        category: 'article',
        badgeLabel: 'Artigos & Áudios',
        description: 'Artigos modernos sobre inteligência artificial, computação em nuvem e segurança da informação.'
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
            title: 'Tabela de Post-its: Top 8 Falsos Amigos de TI',
            topicTag: '✍️ Tradução Rápida',
            paperStyle: 'postit',
            colorTheme: 'pink',
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
            title: 'Escadinha de Requisitos Técnicos (RFC 2119)',
            topicTag: '✍️ Normas de TI',
            paperStyle: 'lined',
            colorTheme: 'yellow',
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
  },

  // ================= CONHECIMENTOS ESPECÍFICOS DE TI =================
  {
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
      },
      {
        title: 'Clean Craftsmanship - Princípios de Clean Code',
        url: 'https://clean-code-developer.com/',
        category: 'article',
        badgeLabel: 'Artigo',
        description: 'Práticas fundamentais de engenharia de software moderna, refatoração e testes.'
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
          'Daily Scrum: Timebox de 15 minutos para os Developers inspecionarem o progresso rumo à Sprint Goal (não há mais obrigatoriedade das 3 perguntas clássicas).',
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
            title: 'Mapa do Scrum 2020: 3 Papéis, 3 Artefatos, 3 Metas',
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
            title: 'Resumo Visual dos 5 Princípios SOLID',
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
            title: 'Esquema de Diferenciação dos Padrões GoF Mais Confusos',
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
  },

  // ================= LINGUAGENS (JAVA & PYTHON) =================
  {
    id: 'Linguagens (Java/Python)',
    title: 'Linguagens (Java & Python)',
    category: 'especificos_ti',
    description: 'Gestão de Memória JVM, Garbage Collection, Streams, Concorrência, GIL no Python, List Comprehensions e Tipagem.',
    badge: 'Essencial Prático',
    iconName: 'Code',
    generalUsefulLinks: [
      {
        title: 'Documentação Oficial do Java SE - Oracle',
        url: 'https://docs.oracle.com/en/java/',
        category: 'official',
        badgeLabel: 'Docs Oracle',
        description: 'Especificação oficial da linguagem Java, API docs e documentação da JVM.'
      },
      {
        title: 'Python.org - Documentação Oficial em Português',
        url: 'https://docs.python.org/pt-br/3/',
        category: 'official',
        badgeLabel: 'Docs Python',
        description: 'Tutorial oficial do Python 3, biblioteca padrão e referência de tipos de dados.'
      },
      {
        title: 'Baeldung - Tutoriais de Java e Spring Boot',
        url: 'https://www.baeldung.com/',
        category: 'doc',
        badgeLabel: 'Guia Técnico',
        description: 'Artigos detalhados sobre internals da JVM, Garbage Collectors e coleções do Java.'
      }
    ],
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
        handwrittenNotes: [
          {
            title: 'Esquema da Memória JVM: Stack vs Heap',
            topicTag: '✍️ Mapa de Memória',
            paperStyle: 'lined',
            colorTheme: 'yellow',
            headerNote: '🧠 Como a JVM divide a RAM',
            handwrittenContent: `1) STACK (Pilha):
   • Criada 1 por Thread (não compartilhada).
   • Armazena: Variáveis primitivas locais (int x = 10) e PONTEIROS (endereço na memória).
   • Desalocação automática e instantânea quando a função termina (pop da stack).

2) HEAP (Monte):
   • Única para toda a JVM (compartilhada entre todas as threads).
   • Armazena: Objetos reais criados via "new" (ex: new String(), new List()).
   • Limpeza feita pelo Garbage Collector quando o objeto perde as referências!

3) Divisões da Heap:
   [ Eden ] + [ S0 / S1 ] ===> Young Generation (Minor GC)
   [ Tenured / Old Gen ]  ===> Objetos duradouros (Major / Full GC)
   [ Metaspace ]          ===> Memória nativa do SO (metadados de classes)`,
            annotations: [
              'System.gc() apenas sugere ao GC a coleta, não garante execução imediata!',
              'String Pool vive dentro da Heap.'
            ]
          }
        ],
        codeExample: {
          language: 'java',
          code: `public void metodo() {\n  int x = 10;           // Stack\n  String s = new String("Java"); // Referência 's' na Stack, Objeto na Heap\n}`,
          explanation: 'Variáveis locais e ponteiros na Stack são liberados assim que o método termina a execução.'
        },
        usefulLinks: [
          {
            title: 'Memory Management in Java - Baeldung',
            url: 'https://www.baeldung.com/java-jvm-memory-model',
            category: 'doc',
            badgeLabel: 'Guia JVM',
            description: 'Como funciona a divisão da Heap, Stack, Metaspace e algoritmos de GC (G1, ZGC).'
          }
        ],
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
        handwrittenNotes: [
          {
            title: 'Lista de Tipos Mutáveis vs Imutáveis em Python',
            topicTag: '✍️ Python Memory',
            paperStyle: 'grid',
            colorTheme: 'green',
            headerNote: '🐍 Pegadinha clássica em provas de TI',
            handwrittenContent: `🛡️ IMUTÁVEIS (Não mudam in-place; geram novo objeto):
• int, float, complex
• str (Strings)
• tuple (Tuplas)
• frozenset
• bytes

⚡ MUTÁVEIS (Podem ser alterados in-place):
• list (Listas -> append, pop, sort)
• dict (Dicionários -> chaves precisam ser imutáveis!)
• set (Conjuntos)
• bytearray

⚠️ Exemplo de Prova:
t = (1, [10, 20])
t[1].append(30)  # Funciona! A tupla não mudou o ponteiro, mas a lista interna mudou!`
          }
        ],
        codeExample: {
          language: 'python',
          code: `# Cuidado com Default Arg Mutável:\ndef append_to(element, target=[]):\n    target.append(element)\n    return target\n\nprint(append_to(1)) # [1]\nprint(append_to(2)) # [1, 2] -> Não é [2]!`,
          explanation: 'O objeto lista padrão é criado uma única vez na definição da função, não a cada execução.'
        },
        usefulLinks: [
          {
            title: 'Python Memory Management & GIL Explained - Real Python',
            url: 'https://realpython.com/python-memory-management/',
            category: 'article',
            badgeLabel: 'Artigo Didático',
            description: 'Como funciona a contagem de referências, o coletor de lixo e a trava global do CPython.'
          }
        ],
        sampleQuestion: {
          banca: 'FGV',
          statement: 'Considere a tupla t = (1, [2, 3]). A instrução t[1].append(4) gerará uma exceção TypeError por violação da imutabilidade da tupla?',
          answer: 'NÃO GERA ERRO',
          explanation: 'A referência t[1] continua apontando para o mesmo objeto lista (imutabilidade da tupla preservada), mas o conteúdo interno da lista mutável pode ser alterado com sucesso.'
        }
      }
    ]
  },

  // ================= BANCOS DE DADOS =================
  {
    id: 'Bancos de Dados',
    title: 'Bancos de Dados Relacionais e NoSQL',
    category: 'especificos_ti',
    description: 'Normalização (1FN até BCNF), Transações ACID, Índices B+Tree, Isolamento SQL e Bancos NoSQL (Documento, Chave-Valor, Grafos).',
    badge: 'Peso Máximo em TI',
    iconName: 'Database',
    generalUsefulLinks: [
      {
        title: 'PostgreSQL Official Documentation',
        url: 'https://www.postgresql.org/docs/',
        category: 'official',
        badgeLabel: 'Docs PostgreSQL',
        description: 'Documentação completa de transações, índices B-Tree, particionamento e comandos SQL.'
      },
      {
        title: 'Use The Index, Luke! - Guia de Otimização de Queries',
        url: 'https://use-the-index-luke.com/',
        category: 'doc',
        badgeLabel: 'Guia de Índices',
        description: 'Explicação aprofundada de como índices B-Tree funcionam por dentro e como evitar Full Table Scans.'
      }
    ],
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
        handwrittenNotes: [
          {
            title: 'O Juramento das Formas Normais de Edgar F. Codd',
            topicTag: '✍️ Frase Sagrada',
            paperStyle: 'lined',
            colorTheme: 'yellow',
            headerNote: '📜 O macete internacional de Normalização',
            handwrittenContent: `"Every non-key attribute must depend on:
1) The KEY (1FN - Atributos atômicos e identificados pela chave)
2) The WHOLE KEY (2FN - Não pode depender só de METADE de chave composta!)
3) And NOTHING BUT THE KEY (3FN - Não pode depender de outro atributo comum!)
... So help me Codd!"

Resumo Relâmpago:
• 1FN -> Nada de arrays ou campos repetidos em uma mesma célula (atomicidade).
• 2FN -> Sem dependência PARCIAL da chave composta. (Se a PK tem 1 coluna só, já está na 2FN!).
• 3FN -> Sem dependência TRANSITIVA (A -> B -> C).`,
            annotations: [
              'BCNF: Toda determinante é uma Superchave.',
              'Desnormalização é usada em Data Warehouses para leitura rápida.'
            ]
          }
        ],
        usefulLinks: [
          {
            title: 'Normalização de Banco de Dados Passo a Passo',
            url: 'https://www.youtube.com/results?search_query=formas+normais+1fn+2fn+3fn+concursos',
            category: 'video',
            badgeLabel: 'Vídeo Aulas',
            description: 'Resolução de questões da FGV e Cesgranrio identificando violações da 1FN, 2FN e 3FN.'
          }
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
        handwrittenNotes: [
          {
            title: 'Tabela de Níveis de Isolamento x Anomalias de Concorrência',
            topicTag: '✍️ ANSI SQL Isolations',
            paperStyle: 'grid',
            colorTheme: 'cyan',
            headerNote: '📊 Matriz Cobrada em Concursos',
            handwrittenContent: `Níveis do mais fraco ao mais forte:

1) READ UNCOMMITTED:
   -> Permite: Leitura Suja ❌, Leitura Não-Repetível ❌, Fantasma ❌.

2) READ COMMITTED (Padrão no PostgreSQL/Oracle):
   -> Evita: Leitura Suja ✅.
   -> Permite: Leitura Não-Repetível ❌, Leitura Fantasma ❌.

3) REPEATABLE READ (Padrão no MySQL InnoDB):
   -> Evita: Leitura Suja ✅, Leitura Não-Repetível ✅.
   -> Permite: Leitura Fantasma (no padrão ANSI) ❌.

4) SERIALIZABLE:
   -> Evita TUDO! Executa como se fosse uma transação por vez. Mais seguro, porém mais lento.`
          }
        ],
        usefulLinks: [
          {
            title: 'PostgreSQL Concurrency Control & Isolation Levels',
            url: 'https://www.postgresql.org/docs/current/transaction-iso.html',
            category: 'doc',
            badgeLabel: 'Manual Oficial',
            description: 'Explicação detalhada dos fenômenos de Dirty Read, Non-repeatable Read e Serialization Anomalies.'
          }
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

  // ================= ARQUITETURA DE SOFTWARE =================
  {
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
            title: 'Máquina de Estados do Circuit Breaker',
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
            title: 'As 4 Camadas da Clean Architecture (De dentro para fora)',
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
  }
];
