import { StudyGuideTopic } from '../../types';

export const LOGIC_MATH_TOPIC: StudyGuideTopic = {
  id: 'Raciocínio Lógico e Matemática',
  title: 'Raciocínio Lógico e Matemática (RLM)',
  category: 'conhecimentos_gerais',
  description: 'Tabela Verdade, Conectivos, Negação, Equivalências, Silogismos, Diagramas de Venn, Associação Lógica e Aritmética.',
  badge: 'Conhecimentos Gerais (Decisivo)',
  iconName: 'Calculator',
  generalUsefulLinks: [
    {
      title: 'Khan Academy Brasil - Matemática e Lógica',
      url: 'https://pt.khanacademy.org/math',
      category: 'official',
      badgeLabel: 'Plataforma Interativa',
      description: 'Exercícios práticos de análise combinatória, conjuntos e probabilidade com explicações passo a passo.'
    },
    {
      title: 'Canal Matemática Rio (YouTube)',
      url: 'https://www.youtube.com/@matematicario',
      category: 'video',
      badgeLabel: 'Vídeo Aulas',
      description: 'Resoluções didáticas de questões de concursos e macetes para provas de raciocínio lógico.'
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
        'Disjunção Exclusiva (p ⊕ q): "OU... OU" -> Só é VERDADE quando os valores lógicos são DIFERENTES (um V e outro F).',
        'Condicional (p → q): "Se p, então q" -> Só é FALSA no caso VERA FISCHER (V antecedente e F consequente).',
        'Bicondicional (p ↔ q): "p se e somente se q" -> Só é VERDADE quando os valores lógicos são IGUAIS (V e V ou F e F).'
      ],
      summary: `A lógica proposicional avalia o valor-verdade de proposições compostas. O condicional ("Se... então") é o operador mais explorado em questões de concurso devido à sua assimetria lógica.`,
      mnemonics: 'CONDICIONAL FALSO: "Vera Fischer é Falsa" (V -> F = F). Nos demais casos, é sempre VERDADEIRO!',
      examPitfalls: [
        'No condicional (p → q), se o antecedente p for FALSO, a proposição inteira é AUTOMATICAMENTE VERDADEIRA (Princípio da Vacuidade), independentemente do valor de q!',
        'Tautologia: proposição composta sempre Verdadeira para qualquer linha da tabela.',
        'Contradição: proposição composta sempre Falsa.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Tabela Verdade Express',
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
            'Disjunção Exclusiva (⊕): Ou estudo TI ou durmo.'
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
          title: 'Quadro em Giz: Negação e Equivalência: Bizús Rápidos',
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
      id: 'rlm-silogismos-diagramas',
      title: 'Silogismos, Quantificadores & Diagramas de Venn',
      subtopic: 'Lógica Categórica & Conjuntos',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Proposições Categóricas: Todo A é B (Universal Afirmativa A - conjunto A contido em B), Nenhum A é B (Universal Negativa E - conjuntos disjuntos A ∩ B = ∅), Algum A é B (Particular Afirmativa I - existe interseção), Algum A não é B (Particular Negativa O).',
        'Negação de Quantificadores: A negação de "TODO A é B" é "ALGUM A NÃO É B" (ou "Existe pelo menos um A que não é B"). NUNCA use "Nenhum" para negar "Todo"!',
        'Validade de Argumentos: Um argumento dedutivo é válido quando sua conclusão decorre necessariamente das premissas, mesmo que as premissas sejam materialmente falsas no mundo real.',
        'Regras de Inferência Clássicas: Modus Ponens (Se p->q e p, logo q) e Modus Tollens (Se p->q e ~q, logo ~p).'
      ],
      summary: `A validação de argumentos categóricos com círculos e diagramas de Venn permite resolver silogismos sem equívocos conceituais.`,
      mnemonics: 'NEGAÇÃO DE QUANTIFICADORES: "PEA + NÃO" (Pelo menos um / Existe um / Algum + NÃO).',
      examPitfalls: [
        'Pegadinha Cebraspe: "A negação de \'Todos os servidores são concursados\' é \'Nenhum servidor é concursado\'" -> ERRADO! O correto é "Pelo menos um servidor não é concursado".',
        '"Algum A é B" é equivalente a "Algum B é A". Mas "Todo A é B" NÃO equivale a "Todo B é A"!'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Diagramas Lógicos e Regras de Inferência',
          topicTag: '✍️ Diagramas de Venn',
          paperStyle: 'grid',
          colorTheme: 'cyan',
          headerNote: '📊 Regras dos Quantificadores',
          handwrittenContent: `1) TODO A é B:
   -> [ A ] está totalmente dentro de [ B ].
   -> Negação: "Algum A NÃO é B".

2) NENHUM A é B:
   -> [ A ] e [ B ] totalmente separados (disjuntos).
   -> Negação: "Algum A É B".

3) ALGUM A é B:
   -> Existe pelo menos 1 elemento na interseção de A e B.

4) MODUS PONENS vs MODUS TOLLENS:
   • Modus Ponens: (p → q) e p  ===> Logo, q!
   • Modus Tollens: (p → q) e ~q ===> Logo, ~p!`
        }
      ],
      usefulLinks: [
        {
          title: 'Diagramas Lógicos e Quantificadores para FGV e Cebraspe',
          url: 'https://www.youtube.com/results?search_query=diagramas+logicos+quantificadores+concursos',
          category: 'video',
          badgeLabel: 'Vídeo Aulas',
          description: 'Aprenda a desenhar diagramas de Venn para resolver silogismos rapidamente.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Considere as premissas: "Todo cinema é casa de cultura" e "Existem teatros que não são cinemas". É correto afirmar logicamente que:',
        answer: 'Todo teatro que não é casa de cultura não é cinema.',
        explanation: 'Pela contrapositiva: como Todo Cinema é Casa de Cultura, qualquer elemento que NÃO seja casa de cultura obrigatoriamente NÃO pode ser cinema.'
      }
    }
  ]
};
