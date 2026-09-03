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
          title: 'Quadro Negro: Raio-X de Tabela Verdade & Condicional Falso em Prova FGV',
          topicTag: '✍️ Análise de Proposição Composta',
          paperStyle: 'grid',
          colorTheme: 'yellow',
          headerNote: '🎯 O segredo do Condicional Falso: Vera Fischer (V → F = F)',
          handwrittenContent: `No quadro negro, o raciocínio proposicional resume-se aos 4 conectivos fundamentais:

1) ==CONJUNÇÃO "E" (∧)==: Exigência máxima!
   -> Só dá VERDADE quando ambas as partes forem V: [ V ∧ V = V ].
   -> Qualquer falso derruba tudo para Falso.

2) ==DISJUNÇÃO "OU" (∨)==: Generosidade lógica!
   -> Basta UMA verdade para validar a sentença: [ V ∨ F = V ].
   -> Só dá FALSO se ambas forem falsas: [ F ∨ F = F ].

3) ==CONDICIONAL "SE... ENTÃO" (→)==: A rainha das pegadinhas de concurso!
   -> Só existe UM caso em que o condicional é FALSO:
      [ ==V → F = F== ] (O famoso caso Vera Fischer!)
   -> Se o antecedente for FALSO, a proposição é AUTOMATICAMENTE VERDADEIRA (Princípio da Vacuidade)!
      [ F → V = V ] e [ F → F = V ].

4) ==BICONDICIONAL "SE E SOMENTE SE" (↔)==:
   -> Proposições com o mesmo valor geram V: [ V ↔ V = V ] e [ F ↔ F = V ].
   -> Valores opostos geram F: [ V ↔ F = F ].`,
          annotations: [
            'Fórmula de Linhas: 2^n (n = proposições simples). Ex: 3 proposições = 2³ = 8 linhas.',
            'Cuidado: p → q NÃO é simétrico a q → p (A recíproca não é uma equivalência!)',
            'Tautologia: sempre V | Contradição: sempre F | Contingência: assume V e F.'
          ],
          diagramFormula: `TABELA VERDADE COMPARATIVA:
p | q | p ∧ q | p ∨ q | p → q | p ↔ q | p ⊕ q
V | V |   V   |   V   |   V   |   V   |   F
V | F |   F   |   V   |   F   |   F   |   V  <-- CASO VERA FISCHER (ÚNICO F NO CONDICIONAL)
F | V |   F   |   V   |   V   |   F   |   V
F | F |   F   |   F   |   V   |   V   |   F`,
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'SEFAZ-MG – Auditor Fiscal da Receita Estadual (Tecnologia da Informação) – 2023',
            enunciado: `Considere a seguinte afirmação condicional a respeito dos procedimentos de homologação de um sistema:

"==Se o analista executou os testes unitários== E ==o código foi revisado pelo líder técnico==, ENTÃO ==a nova versão foi implantada em produção com segurança==."

Sabe-se que a afirmação condicional acima é ==FALSA==.

A partir unicamente dessa informação, é logicamente CORRETO concluir que:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'O código não foi revisado pelo líder técnico da equipe.',
                correta: false,
                comentario: 'INCORRETA: Para o condicional ser falso, o antecedente inteiro deve ser estritamente VERDADEIRO. Como o antecedente é uma conjunção ("executou os testes" E "código foi revisado"), AMBAS são necessariamente verdadeiras. Logo, o código FOI sim revisado.'
              },
              {
                letra: 'B',
                texto: 'A nova versão do sistema foi implantada em produção com segurança.',
                correta: false,
                comentario: 'INCORRETA: Pelo caso Vera Fischer (V → F = F), o consequente DEVE ser FALSO. Portanto, a afirmação de que a nova versão foi implantada com segurança é FALSA.'
              },
              {
                letra: 'C',
                texto: 'O analista não executou os testes unitários previstos.',
                correta: false,
                comentario: 'INCORRETA: Como demonstrado, na conjunção do antecedente (p ∧ q) = V, a proposição "o analista executou os testes unitários" é obrigatoriamente VERDADEIRA.'
              },
              {
                letra: 'D',
                texto: '==O analista executou os testes unitários e o código foi revisado pelo líder técnico==, mas a nova versão não foi implantada com segurança.',
                correta: true,
                comentario: 'CORRETA: O único caso de condicional falso é Vera Fischer: Antecedente (p ∧ q) = V e Consequente r = F. Para (p ∧ q) ser V, obrigatoriamente p = V (executou testes) e q = V (código foi revisado). E como r = F, a versão NÃO foi implantada com segurança.'
              },
              {
                letra: 'E',
                texto: 'A nova versão foi implantada em produção ou o analista não executou os testes unitários.',
                correta: false,
                comentario: 'INCORRETA: A disjunção "r ∨ ~p" avalia: r é Falsa (não foi implantada) e ~p é Falsa (pois p é Verdadeira). Como ambas são Falsas, F ∨ F = Falsa.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Se... ENTÃO',
                papel: 'Operador Condicional Principal (→)',
                regra: 'O operador macro que rege a sentença inteira: [ (p ∧ q) → r ]. Sua tabela só é falsa se V → F.',
                cor: 'yellow'
              },
              {
                termo: 'o analista executou os testes E o código foi revisado',
                papel: 'Antecedente Composto por Conjunção (p ∧ q)',
                regra: 'Para o condicional ser falso, o bloco do antecedente TEM que ser 100% VERDADEIRO (V ∧ V = V).',
                cor: 'green'
              },
              {
                termo: 'a nova versão foi implantada em produção',
                papel: 'Consequente do Condicional (r)',
                regra: 'Para configurar a falsidade do condicional, o consequente TEM que ser obrigatoriamente FALSO (r = F).',
                cor: 'rose'
              },
              {
                termo: 'é FALSA',
                papel: 'Hipótese de Falsidade dada pela Banca',
                regra: 'Gatilho imediato para invocar o caso VERA FISCHER (V → F = F) sem hesitação.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE A ESTRUTURA LÓGICA: A proposição tem a forma [ (p ∧ q) → r ], onde o conectivo central que une os dois blocos é o condicional "Se... então".',
              '2. APLIQUE A REGRA DA FALSIDADE DO CONDICIONAL: O enunciado afirma categoricamente que a sentença é FALSA. Na tabela verdade, o condicional SÓ é falso se o ANTECEDENTE for VERDADEIRO e o CONSEQUENTE for FALSO (V → F = F).',
              '3. DESMEMBRE O ANTECEDENTE CONJUNTIVO: Para (p ∧ q) ser VERDADEIRO em uma conjunção "E", ambas as proposições atômicas devem ser verdadeiras: p = V ("executou os testes") e q = V ("código foi revisado").',
              '4. DEDUTA O VALOR DO CONSEQUENTE: Para o condicional ser falso, o consequente r DEVE ser FALSO ("a nova versão NÃO foi implantada com segurança").',
              '5. CONCLUA E MARQUE: Verificamos que p=V, q=V e r=F. A única alternativa que traduz essa dedução com precisão matemática é a Letra D.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA D',
            conclusaoPedagogica: 'PADRÃO FGV DE OURO: Sempre que a banca disser que um "Se... então" é falso, você já sabe de olhos fechados que a primeira parte aconteceu (V) e a segunda não aconteceu (F). Se a primeira for composta por "E", todas as suas partes aconteceram!'
          }
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
        'Equivalência Contrapositiva do Condicional: (p → q) ≡ (~q → ~p) (Inverte de posição e nega ambas!).',
        'Equivalência do Condicional com OU (Regra do NEYMAR): (p → q) ≡ (~p ∨ q) (NEga a primeira OU MAnteve a segunda).',
        'Negação de Quantificadores: A negação de "TODO" é "Pelo menos um NÃO" (PEA + NÃO). NUNCA use "Nenhum"!'
      ],
      summary: `Negações e equivalências do condicional representam mais de 60% das questões de lógica da FGV, FCC e Cebraspe. Dominar a Regra do MANÉ e a Contrapositiva garante acerto rápido sem desenhar tabela verdade.`,
      mnemonics: 'NEGAÇÃO DO CONDICIONAL: Regra do "MANÉ" (MAntém a primeira E NEga a segunda). EQUIVALÊNCIA: Regra do "NEYMAR" (NEga a 1ª OU MAnteve a 2ª) ou Contrapositiva (Inverte e nega).',
      examPitfalls: [
        'A negação de "Se chove, fico em casa" NUNCA é outro "Se... então"! A negação é "Chove E eu NÃO fico em casa".',
        'Contrapositiva: "Se sou auditor, ganho bem" equivale a "Se NÃO ganho bem, NÃO sou auditor".',
        'Pegadinha Clássica: "A negação de \'Todos os gatos são pardos\' é \'Nenhum gato é pardo\'" -> FALSO! O correto é "Pelo menos um gato não é pardo".'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Raio-X da Regra do MANÉ & Negação de Quantificadores na FGV',
          topicTag: '✍️ Fórmulas Práticas & Equivalências',
          paperStyle: 'lined',
          colorTheme: 'green',
          headerNote: '⭐ O macete que elimina alternativas em 15 segundos!',
          handwrittenContent: `No quadro negro, você só precisa de 3 regras de ouro para gabaritar negações e equivalências:

1) ==NEGAÇÃO DO "SE... ENTÃO" (p → q)==:
   -> Use a infalível ==Regra do MANÉ==:
      ==MA== (Mantém a 1ª) + ==E== (Conectivo de conjunção) + ==NÉ== (Nega a 2ª)
   -> Fórmula: ~(p → q) ≡ p ∧ ~q
   -> 🚨 ALERTA DE PROVA: A negação do condicional NUNCA começa com "Se..."! Elimine na hora as opções que mantêm o "Se"!

2) ==EQUIVALÊNCIA DO "SE... ENTÃO" (p → q)==:
   -> Caminho A (Contrapositiva): Inverte a ordem e nega tudo!
      (p → q) ≡ (~q → ~p)
      Ex: "Se estudo, passo" ≡ "Se não passei, não estudei".
   -> Caminho B (Regra do NEYMAR):
      ==NE== (Nega a 1ª) + ==OU== + ==MA== (Mantém a 2ª)
      (p → q) ≡ (~p ∨ q)

3) ==LEIS DE AUGUSTUS DE MORGAN (Negação de E e OU)==:
   -> ~(p ∧ q) ≡ ~p ∨ ~q (Nega ambas e troca E por OU)
   -> ~(p ∨ q) ≡ ~p ∧ ~q (Nega ambas e troca OU por E)

4) ==NEGAÇÃO DOS QUANTIFICADORES LÓGICOS==:
   -> Todo A é B  ---> Negação: ==PEA + NÃO== (Pelo menos um / Existe um / Algum A NÃO é B)
   -> Nenhum A é B ---> Negação: Algum A É B.`,
          annotations: [
            'Dica Crucial: "Todo" NUNCA se nega com "Nenhum"!',
            'Contrapositiva preserva o mesmo valor lógico; a recíproca (q → p) não!'
          ],
          diagramFormula: `RESUMO VISUAL DE EQUIVALÊNCIAS & NEGAÇÕES:
┌─────────────────────────┬───────────────────────────────────────┐
│ Operação Desejada       │ Forma Lógica Equivalente              │
├─────────────────────────┼───────────────────────────────────────┤
│ Negação de (p → q)      │ p ∧ ~q        (Regra do MANÉ)         │
│ Equivalência de (p → q) │ ~q → ~p       (Contrapositiva)        │
│ Equivalência com "OU"   │ ~p ∨ q        (Regra do NEYMAR)       │
│ Negação de (p ∧ q)      │ ~p ∨ ~q       (De Morgan)             │
│ Negação de (p ∨ q)      │ ~p ∧ ~q       (De Morgan)             │
│ Negação de "Todo A é B" │ Algum A NÃO é B (PEA + NÃO)           │
└─────────────────────────┴───────────────────────────────────────┘`,
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'TCU / TCE-SC – Auditor Federal de Controle Externo (Especialidade: TI) – 2024',
            enunciado: `Considere a proposição afirmativa formulada pelo coordenador de segurança de dados de um tribunal:

"==Se o cluster principal de banco de dados sofrer sobrecarga de requisições==, ENTÃO ==todos os serviços de pagamento online serão suspensos imediatamente==."

Assinale a opção que apresenta a correta ==NEGAÇÃO LÓGICA== dessa proposição condicional segundo os princípios da lógica sentencial:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Se o cluster principal de banco de dados não sofrer sobrecarga de requisições, então nenhum serviço de pagamento online será suspenso imediatamente.',
                correta: false,
                comentario: 'INCORRETA: Pegadinha clássica! A negação de uma proposição condicional "Se... então" NUNCA é outra proposição condicional ("Se... então"). A negação transforma a sentença em uma conjunção "E" pela regra do MANÉ.'
              },
              {
                letra: 'B',
                texto: 'O cluster principal de banco de dados não sofrerá sobrecarga de requisições ou todos os serviços de pagamento online serão suspensos imediatamente.',
                correta: false,
                comentario: 'INCORRETA: Essa proposição (~p ∨ q) é uma EQUIVALÊNCIA lógica do condicional (Regra do Neymar), e NÃO a sua negação! O candidato desatento confunde equivalência com negação.'
              },
              {
                letra: 'C',
                texto: '==O cluster principal de banco de dados sofreu sobrecarga de requisições== E ==pelo menos um serviço de pagamento online não foi suspenso imediatamente==.',
                correta: true,
                comentario: 'CORRETA: Aplicação perfeita da Regra do MANÉ: Mantém a primeira proposição ("o cluster sofreu sobrecarga"), troca o "se... então" pelo conectivo "E", e NEGA a segunda proposição. A negação do quantificador universal "todos os serviços serão suspensos" é "pelo menos um serviço NÃO foi suspenso".'
              },
              {
                letra: 'D',
                texto: 'Se pelo menos um serviço de pagamento online não foi suspenso imediatamente, então o cluster principal de banco de dados não sofreu sobrecarga.',
                correta: false,
                comentario: 'INCORRETA: Esta é a contrapositiva (~q → ~p), que representa uma EQUIVALÊNCIA do condicional e não a sua negação.'
              },
              {
                letra: 'E',
                texto: 'O cluster principal de banco de dados não sofreu sobrecarga de requisições e nenhum serviço de pagamento online foi suspenso imediatamente.',
                correta: false,
                comentario: 'INCORRETA: A regra do MANÉ exige manter a primeira (p) e não negá-la (~p). Além disso, a negação de "todos" não é "nenhum".'
              }
            ],
            termosGrifados: [
              {
                termo: 'Se... ENTÃO',
                papel: 'Condicional Original a ser Negado (p → q)',
                regra: 'O condicional deve ser quebrado pela regra do MANÉ: a nova sentença DEVE ter o conectivo "E".',
                cor: 'yellow'
              },
              {
                termo: 'o cluster principal sofrer sobrecarga',
                papel: 'Primeira Proposição p (MANTIDA)',
                regra: 'Pelo "MA" do MANÉ, a proposição p permanece exatamente como está: "o cluster sofreu sobrecarga".',
                cor: 'green'
              },
              {
                termo: 'todos os serviços serão suspensos',
                papel: 'Segunda Proposição com Quantificador Universal (q)',
                regra: 'Pelo "NÉ" do MANÉ, q deve ser negada. A negação do quantificador "TODO" é "PELO MENOS UM NÃO".',
                cor: 'cyan'
              },
              {
                termo: 'NEGAÇÃO LÓGICA',
                papel: 'Comando Central da Banca',
                regra: 'Exige encontrar a sentença contraditória: ~(p → q) ≡ p ∧ ~q.',
                cor: 'rose'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE O COMANDO: A questão pede a NEGAÇÃO de um condicional "Se P, então Q".',
              '2. ELIMINAÇÃO IMEDIATA (5 SEGUNDOS): A negação do condicional NUNCA começa com "Se... então". Risque de imediato as alternativas A e D.',
              '3. APLIQUE A REGRA DO MANÉ: Mantenha a primeira parte idêntica: "O cluster de banco de dados sofreu sobrecarga". Troque o conectivo por "E".',
              '4. NEGUE O QUANTIFICADOR DA SEGUNDA PARTE: A segunda parte diz "TODOS os serviços serão suspensos". A negação de "Todos" é "Existe pelo menos um que NÃO foi suspenso" (PEA + NÃO).',
              '5. CONFERÊNCIA FINAL: A frase completa fica: "O cluster sofreu sobrecarga E pelo menos um serviço não foi suspenso". Gabarito exato na Letra C.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'MANVEIRA DE CONCURSEIRO DE ELITE: Em 10 segundos, ao ver "Negação de Se... então", seu cérebro procura a conjunção "E" onde a primeira parte foi mantida intacta e a segunda foi contrariada. Se tiver o quantificador "todo", procure "pelo menos um não". Acerto garantido!'
          }
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
        'Proposições Categóricas Clássicas: Todo A é B (Universal Afirmativa A ⊂ B), Nenhum A é B (Universal Negativa A ∩ B = ∅), Algum A é B (Particular Afirmativa A ∩ B ≠ ∅), Algum A não é B (Particular Negativa).',
        'Negação de Quantificadores: A negação de "TODO A é B" é "ALGUM A NÃO É B" (PEA + NÃO). NUNCA use "Nenhum" para negar "Todo"!',
        'Validade de Argumentos: Um argumento é válido quando a conclusão é CONSEQUÊNCIA NECESSÁRIA das premissas. Se houver um único contraexemplo possível no diagrama, o argumento é INVÁLIDO!',
        'Regras de Inferência: Modus Ponens (Se p→q e p, logo q) e Modus Tollens (Se p→q e ~q, logo ~p).'
      ],
      summary: `Silogismos e lógica de diagramas testam a capacidade de extrair conclusões estritamente necessárias a partir de premissas categóricas. O desenho de círculos de Venn permite testar rapidamente se uma dedução é forçosa ou mera possibilidade.`,
      mnemonics: 'NEGAÇÃO DE QUANTIFICADORES: "PEA + NÃO" (Pelo menos um / Existe um / Algum + NÃO). CUIDADO: Todo A é B NÃO significa que Todo B é A!',
      examPitfalls: [
        'Pegadinha Cebraspe: "Se Todo A é B, então Todo B é A" -> FALSO! Todo engenheiro é ser humano, mas nem todo ser humano é engenheiro.',
        'Se a banca disser "Alguns programadores usam Linux", NUNCA conclua que "Alguns programadores NÃO usam Linux" (na lógica pura, pode ser que todos usem!).',
        'Premissa universal negativa ("Nenhum A é B") separa totalmente os dois conjuntos (conjuntos disjuntos).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Raio-X de Silogismos & Diagramas de Venn na FGV',
          topicTag: '✍️ Análise Categórica & Conjuntos',
          paperStyle: 'grid',
          colorTheme: 'cyan',
          headerNote: '📊 Círculos lógicos para testar necessidade vs possibilidade',
          handwrittenContent: `No quadro negro, o método dos círculos resolve qualquer silogismo sem dúvidas:

1) ==TODO A É B (Universal Afirmativa)==:
   -> O círculo [ A ] está TOTALMENTE CONTIDO dentro do círculo [ B ].
   -> Consequência: Se alguém está em A, obrigatoriamente está em B.
   -> Contrapositiva: Se alguém NÃO está em B, com certeza NÃO está em A (~B → ~A).

2) ==NENHUM A É B (Universal Negativa)==:
   -> Os círculos [ A ] e [ B ] são TOTALMENTE SEPARADOS (Disjuntos: A ∩ B = ∅).
   -> Consequência: Se alguém está em A, é IMPOSSÍVEL estar em B.

3) ==ALGUM A É B (Particular Afirmativa)==:
   -> Existe pelo menos uma pesssoa na ==interseção== entre A e B (A ∩ B ≠ ∅).
   -> 🚨 ATENÇÃO: Dizer "Algum A é B" garante a interseção, mas NÃO garante que exista alguém fora dela!

4) ==REGRAS DE INFERÊNCIA VÁLIDAS==:
   • ==Modus Ponens== (Afirmação do Antecedente):
     Premissas: (p → q) e p  ===> Conclusão necessária: q!
   • ==Modus Tollens== (Negação do Consequente):
     Premissas: (p → q) e ~q ===> Conclusão necessária: ~p!`,
          annotations: [
            'Dica de Ouro: Uma dedução só é CORRETA se for OBRIGATÓRIA em 100% dos diagramas possíveis.',
            'Se existir um desenho em que a conclusão falhe, ela é falsa!'
          ],
          diagramFormula: `DIAGRAMAS DE VENN E INFERÊNCIAS:
┌─────────────────┐       ┌─────────────────┐
│   B (Maior)     │       │ [ A ]     [ B ] │
│   ┌─────────┐   │       │                 │
│   │  A      │   │       │   (Disjuntos)   │
│   └─────────┘   │       │   A ∩ B = ∅     │
└─────────────────┘       └─────────────────┘
   "TODO A é B"             "NENHUM A é B"

MODUS PONENS:  p → q , p  ===> q   (Válido)
MODUS TOLLENS: p → q , ~q ===> ~p  (Válido)
FALÁCIA:       p → q , q  ===> p   (INVÁLIDO! Afirmação do consequente)`,
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Senado Federal – Analista Legislativo (Informática Legislativa e Ciência de Dados) – 2023',
            enunciado: `Considere como verdadeiras as três premissas a respeito dos colaboradores de uma diretoria de inovação e tecnologia:

1. "==Todo especialista em ciência de dados é programador em Python==."
2. "==Alguns programadores em Python dominam arquitetura de microsserviços==."
3. "==Nenhum profissional que domina arquitetura de microsserviços realiza trabalho puramente manual==."

A partir unicamente dessas premissas, assinale a opção que expressa uma dedução que é necessariamente VERDADEIRA e logicamente VÁLIDA:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Todo especialista em ciência de dados domina arquitetura de microsserviços.',
                correta: false,
                comentario: 'INCORRETA: O conjunto de especialistas em ciência de dados está dentro de "programadores em Python". Apenas "alguns" programadores em Python dominam microsserviços. Os cientistas de dados podem estar situados na parte dos programadores que NÃO dominam microsserviços. É uma possibilidade, não uma certeza.'
              },
              {
                letra: 'B',
                texto: 'Nenhum especialista em ciência de dados realiza trabalho puramente manual.',
                correta: false,
                comentario: 'INCORRETA: Generalização indevida. Apenas quem domina microsserviços tem garantia de não realizar trabalho manual. Como não sabemos se os cientistas de dados dominam microsserviços, não podemos deduzir que nenhum deles realiza trabalho manual.'
              },
              {
                letra: 'C',
                texto: '==Pelo menos um programador em Python não realiza trabalho puramente manual==.',
                correta: true,
                comentario: 'CORRETA: Dedução infalível! Pela premissa 2, existe pelo menos um programador em Python que domina arquitetura de microsserviços. Pela premissa 3, nenhum profissional que domina arquitetura de microsserviços realiza trabalho manual. Logo, esse(s) programador(es) em Python que domina(m) microsserviços obrigatoriamente NÃO realiza(m) trabalho puramente manual!'
              },
              {
                letra: 'D',
                texto: 'Todo programador em Python é especialista em ciência de dados.',
                correta: false,
                comentario: 'INCORRETA: Falácia da conversão ilícita. Dizer que "Todo A é B" não autoriza concluir que "Todo B é A". Podem existir muitos programadores em Python que não atuam com ciência de dados.'
              },
              {
                letra: 'E',
                texto: 'Quem realiza trabalho puramente manual não é programador em Python.',
                correta: false,
                comentario: 'INCORRETA: A premissa 3 diz que quem domina microsserviços não faz trabalho manual. Porém, podem perfeitamente existir programadores em Python que NÃO dominam microsserviços e realizam trabalho manual.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Todo cientista é programador em Python',
                papel: 'Universal Afirmativa (Inclusão Total A ⊂ B)',
                regra: 'O conjunto A (ciência de dados) é subconjunto estrito de B (programador em Python).',
                cor: 'yellow'
              },
              {
                termo: 'Alguns programadores dominam microsserviços',
                papel: 'Particular Afirmativa (Interseção Garantida B ∩ C ≠ ∅)',
                regra: 'Garante a existência de elementos na interseção de programadores em Python e especialistas em microsserviços.',
                cor: 'green'
              },
              {
                termo: 'Nenhum microsserviços realiza trabalho manual',
                papel: 'Universal Negativa (Conjuntos Disjuntos C ∩ D = ∅)',
                regra: 'O conjunto C (microsserviços) e D (trabalho manual) possuem interseção nula: não há elemento comum.',
                cor: 'rose'
              },
              {
                termo: 'Pelo menos um programador não realiza trabalho manual',
                papel: 'Conclusão Válida Necessária',
                regra: 'Os elementos garantidos na interseção B ∩ C estão proibidos de pertencer a D.',
                cor: 'cyan'
              }
            ],
            comoLerPassoAPasso: [
              '1. DESENHE OS CÍRCULOS NA FOLHA DE RASCUNHO: Crie o círculo de Programadores em Python (B) contendo dentro dele o círculo de Cientistas de Dados (A).',
              '2. ADICIONE A INTERSEÇÃO: Desenhe o círculo de Microsserviços (C) sobrepondo-se parcialmente com Programadores em Python (B). Marque um ponto "X" nessa área comum.',
              '3. RESTRINJA O CONJUNTO DISJUNTO: O conjunto Trabalho Manual (D) fica totalmente isolado de Microsserviços (C). Logo, o ponto "X" NUNCA poderá encostar em D.',
              '4. ANALISE O PONTO "X": Quem é esse "X"? É um Programador em Python que domina microsserviços. Como ele domina microsserviços, ele NÃO realiza trabalho manual.',
              '5. FORMULE A CONCLUSÃO INFALÍVEL: "Existe pelo menos um programador em Python que não realiza trabalho manual". Isso corresponde exatamente à Letra C!'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'MÉTODO DO PONTO EXISTENCIAL: Em questões de silogismo com "Algum", posicione um elemento físico (o "X") na interseção obrigatória. Em seguida, veja onde esse elemento "X" pode e não pode ir. A dedução necessária sempre gira em torno do elemento garantido!'
          }
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
    },
    {
      id: 'rlm-analise-combinatoria-probabilidade',
      title: 'Análise Combinatória & Teoria das Probabilidades',
      subtopic: 'Contagem, Combinações & Probabilidade',
      readTimeMinutes: 9,
      keyTakeaways: [
        'Princípio Fundamental da Contagem (PFC): Se um evento ocorre em etapas independentes com n1, n2, ... escolhas, o total de possibilidades é o produto (n1 × n2 × ...).',
        'A Ordem Importa? Se SIM -> Arranjo ou Permutação [A(n,p) = n! / (n-p)!]. Se NÃO -> Combinação [C(n,p) = n! / (p!(n-p)!)]. Dica: Em comissões, equipes e grupos, a ordem NÃO importa -> use Combinação!',
        'Permutação com Repetição: P(n)^(a,b,c) = n! / (a! × b! × c!). Essencial para anagramas de palavras com letras repetidas.',
        'Probabilidade Clássica: P(E) = Número de Casos Favoráveis / Número de Casos Possíveis.',
        'União de Eventos: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Se forem mutuamente exclusivos, P(A ∩ B) = 0.',
        'Regra do Evento Complementar (Ouro para Concurso): P(Pelo menos 1) = 1 - P(Nenhum). Reduz problemas de 10 minutos para 30 segundos!'
      ],
      summary: `Análise combinatória e probabilidade são assuntos de alto poder discriminatório em concursos de TI e Auditoria. O segredo está em saber classificar imediatamente se a ordem dos elementos altera o agrupamento (Arranjo vs Combinação) e em utilizar o método do evento complementar.`,
      mnemonics: 'A ORDEM IMPORTA? "Aham! -> Arranjo!" / "Não! -> Combinação!". PARA PROBABILIDADE: "Quero / Total" (Favoráveis sobre Possíveis).',
      examPitfalls: [
        'Confundir Arranjo com Combinação: Escolher presidente e vice-presidente (a ordem importa -> Arranjo). Escolher uma comissão de 2 auditores (a ordem não importa -> Combinação).',
        'Ao calcular comissões com restrição ("pelo menos X"), dividir em casos disjuntos e somar, ou subtrair os casos proibidos do total geral.',
        'Não esquecer de descontar a interseção na probabilidade da união P(A ∪ B) quando os eventos puderem ocorrer simultaneamente.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Raio-X de Combinação vs Arranjo & Probabilidade na FGV',
          topicTag: '✍️ Análise Combinatória & Probabilidade',
          paperStyle: 'grid',
          colorTheme: 'rose',
          headerNote: '🎲 Como desarmar questões de contagem e equipes com restrição',
          handwrittenContent: `No quadro negro, o roteiro decisório de contagem é direto:

1) ==PERGUNTA CRUCIAL: A ORDEM DOS ELEMENTOS GERA NOVO GRUPO?==
   • ==SIM== (A ordem importa!) ---> ==ARRANJO / PERMUTAÇÃO==
     -> Ex: Senhas, placas, pódio (1º, 2º e 3º lugares), números.
     -> Arranjo: A(n, p) = n! / (n - p)!
     -> Permutação simples: P_n = n!

   • ==NÃO== (A ordem NÃO importa!) ---> ==COMBINAÇÃO==
     -> Ex: Comissões, equipes de trabalho, grupos de estudo, cartas na mão.
     -> Combinação: C(n, p) = n! / [ p! · (n - p)! ]
     -> Macete de Cálculo Rápido:
        C(10, 3) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120!

2) ==PROBABILIDADE CLÁSSICA==:
   -> P(A) = Casos Favoráveis / Casos Totais (Possíveis)
   -> 0 ≤ P(A) ≤ 1 (ou 0% a 100%).

3) ==O SUPER MACETE DO COMPLEMENTAR (Pelo menos um)==:
   -> Em vez de calcular caso por caso:
      ==P(Pelo menos um) = 1 - P(Nenhum)==
   -> Exemplo: Probabilidade de sair pelo menos uma cara em 3 lançamentos de moeda:
      P(Nenhuma cara = Coroa-Coroa-Coroa) = 1/2 × 1/2 × 1/2 = 1/8.
      P(Pelo menos 1 cara) = 1 - 1/8 = ==7/8==!`,
          annotations: [
            'Fatorial de Zero: 0! = 1 por definição matemática.',
            'Combinações Complementares: C(n, p) = C(n, n - p). Ex: C(10, 8) = C(10, 2) = 45.'
          ],
          diagramFormula: `MAPA MENTAL DE CONTAGEM & PROBABILIDADE:
                  [ Problema de Agrupamento ]
                               │
               ¿A ordem dos elementos importa?
               ┌───────────────┴───────────────┐
             [ SIM ]                         [ NÃO ]
                │                               │
        ARRANJO / PERMUTAÇÃO               COMBINAÇÃO
    A(n,p) = n! / (n-p)!           C(n,p) = n! / [p!(n-p)!]
    (Cargos distintos / Senhas)    (Comissões / Subconjuntos)

PROBABILIDADE: P(A) = Favoráveis / Total
UNIÃO:         P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
COMPLEMENTAR:  P(Ao menos um) = 1 - P(Nenhum)`,
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Receita Federal do Brasil (RFB) – Auditor-Fiscal da Receita Federal – 2023',
            enunciado: `Para auditar o código-fonte e as vulnerabilidades de uma plataforma fazendária, será formada uma comissão técnica de ==4 auditores== selecionados a partir de um grupo disponível de ==6 analistas de segurança cibernética== e ==4 arquitetos de banco de dados==.

A diretoria estabeleceu a restrição de que a comissão constituída deve conter, obrigatoriamente, ==pelo menos 2 analistas de segurança cibernética==.

O número total de comissões distintas que podem ser constituídas atendendo rigorosamente a essa exigência é:`,
            alternativas: [
              {
                letra: 'A',
                texto: '90 comissões.',
                correta: false,
                comentario: 'INCORRETA: 90 é apenas o número de comissões formadas exatamente por 2 analistas de segurança e 2 arquitetos de banco de dados [C(6,2) × C(4,2) = 15 × 6 = 90]. A restrição pede "pelo menos 2", o que engloba também comissões com 3 e com 4 analistas de segurança!'
              },
              {
                letra: 'B',
                texto: '120 comissões.',
                correta: false,
                comentario: 'INCORRETA: Cálculo incorreto decorrente de omissão de combinações ou uso equivocado de arranjo.'
              },
              {
                letra: 'C',
                texto: '165 comissões.',
                correta: false,
                comentario: 'INCORRETA: Omissão de um dos subcasos ou erro aritmético na soma dos blocos.'
              },
              {
                letra: 'D',
                texto: '==185 comissões==.',
                correta: true,
                comentario: 'CORRETA: A condição "pelo menos 2 de segurança" divide-se em 3 casos mutuamente exclusivos:\n• Caso 1 (2 Seg e 2 Arq): C(6,2) × C(4,2) = 15 × 6 = 90\n• Caso 2 (3 Seg e 1 Arq): C(6,3) × C(4,1) = 20 × 4 = 80\n• Caso 3 (4 Seg e 0 Arq): C(6,4) × C(4,0) = 15 × 1 = 15\nTotal = 90 + 80 + 15 = 185 comissões!\n(Pelo método complementar: Total C(10,4) = 210. Casos proibidos: 0 Seg = C(4,4) = 1; 1 Seg = C(6,1) × C(4,3) = 24. Total = 210 - 25 = 185).'
              },
              {
                letra: 'E',
                texto: '210 comissões.',
                correta: false,
                comentario: 'INCORRETA: 210 é o número TOTAL de comissões possíveis sem nenhuma restrição [C(10,4) = 210]. O candidato que marca 210 desconsiderou por completo a exigência de "pelo menos 2 analistas de segurança".'
              }
            ],
            termosGrifados: [
              {
                termo: 'comissão técnica de 4 auditores',
                papel: 'Tipo de Agrupamento: Combinação Simples',
                regra: 'Em comissões e grupos de pessoas, a ordem de escolha não altera a comissão (A, B, C, D é a mesma que D, C, B, A).',
                cor: 'yellow'
              },
              {
                termo: '6 analistas de segurança e 4 arquitetos',
                papel: 'Grupos Disponíveis (Total = 10 pessoas)',
                regra: 'O pool de candidatos é estratificado em duas categorias com quantidades conhecidas (6 e 4).',
                cor: 'cyan'
              },
              {
                termo: 'pelo menos 2 analistas de segurança',
                papel: 'Restrição Lógica da Questão',
                regra: 'Permite 2, 3 ou 4 analistas de segurança na equipe final. Devem ser somados os casos ou excluído o complementar.',
                cor: 'green'
              },
              {
                termo: '185 comissões',
                papel: 'Gabarito Numérico Exato',
                regra: 'Soma dos três casos: 90 + 80 + 15 = 185 (ou 210 - 25 = 185).',
                cor: 'rose'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE A NATUREZA DO PROBLEMA: Escolher 4 membros para uma comissão. A ordem não importa, portanto é um problema de COMBINAÇÃO SIMPLES [C(n, p)].',
              '2. ANALISE A RESTRIÇÃO "PELO MENOS 2": A comissão de 4 pode ter: Exatamente 2 de Segurança (e 2 de BD), Exatamente 3 de Segurança (e 1 de BD), ou Exatamente 4 de Segurança (e 0 de BD).',
              '3. MÉTODO DIRETO (CÁLCULO DOS CASOS):',
              '   • Caso 1 (2 Seg e 2 BD): C(6,2) × C(4,2) = 15 × 6 = 90 comissões.',
              '   • Caso 2 (3 Seg e 1 BD): C(6,3) × C(4,1) = 20 × 4 = 80 comissões.',
              '   • Caso 3 (4 Seg e 0 BD): C(6,4) × C(4,0) = 15 × 1 = 15 comissões.',
              '4. SOMA DOS CASOS DISJUNTOS: 90 + 80 + 15 = 185 comissões distintas.',
              '5. MÉTODO DO COMPLEMENTAR (PROVA REAL EM 15s): Total irrestrito C(10,4) = 210. Casos proibidos: 0 de Seg = C(4,4) = 1; 1 de Seg = C(6,1) × C(4,3) = 24. Proibidos = 25. Válidos = 210 - 25 = 185! Marque Letra D.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA D',
            conclusaoPedagogica: 'DUPLO MÉTODO DE RESOLUÇÃO: Sempre que uma questão trouxer "pelo menos X", avalie os dois caminhos: somar os casos válidos ou subtrair os casos proibidos do total geral. O método do complementar serve como prova real para garantir a questão sem margem de erro!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Análise Combinatória e Probabilidade para Concursos - Prof. Morgado',
          url: 'https://www.youtube.com/results?search_query=analise+combinatoria+probabilidade+fgv+concursos',
          category: 'video',
          badgeLabel: 'Vídeo Aulas',
          description: 'Aprenda a diferenciar combinações, arranjos e aplicar o evento complementar.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Uma urna contém 5 bolas brancas e 3 pretas. Retirando-se 2 bolas sucessivamente sem reposição, a probabilidade de ambas serem brancas é:',
        answer: '5/14 (ou aprox. 35,7%)',
        explanation: 'P(1ª branca) = 5/8. P(2ª branca | 1ª branca) = 4/7. Logo, P = (5/8) × (4/7) = 20/56 = 5/14.'
      }
    }
  ]
};
