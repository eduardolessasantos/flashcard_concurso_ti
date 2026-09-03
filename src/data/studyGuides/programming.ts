import { StudyGuideTopic } from '../../types';

export const PROGRAMMING_TOPIC: StudyGuideTopic = {
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
      title: 'Python.org - Documentação Oficial',
      url: 'https://docs.python.org/pt-br/3/',
      category: 'official',
      badgeLabel: 'Docs Python',
      description: 'Tutorial oficial do Python 3, biblioteca padrão e referência de tipos de dados.'
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
      summary: `A JVM automatiza o gerenciamento de memória através do Garbage Collector (GC), que identifica objetos inalcançáveis a partir das GC Roots.`,
      examPitfalls: [
        'Cebraspe diz que tipos primitivos declarados como atributos de classe ficam na Stack. (FALSO: atributos de instância ficam dentro do objeto na Heap).',
        'PermGen causava OutOfMemoryError no Java 7; no Java 8+ o Metaspace cresce dinamicamente na memória nativa.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Memória JVM (Stack vs Heap)',
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
            'String Pool vive dentro da Heap.',
            'Objetos (instâncias) e arrays SEMPRE residem na Heap.'
          ],
          diagramFormula: 'Stack: Variáveis Locais + Ponteiros de Referência (1 por Thread)\nHeap: Instâncias de Objetos + Arrays (Compartilhada entre Threads)',
          realExamQuestion: {
            banca: 'Cebraspe',
            orgaoAno: 'SEFAZ-CE – Auditor Fiscal da Receita Estadual (Tecnologia da Informação) – 2021',
            enunciado: `No que se refere à arquitetura de execução da máquina virtual Java (JVM) e ao gerenciamento de memória em tempo de execução, julgue o item subsequente:

"Na JVM, a área de memória denominada ==Stack (Pilha) é compartilhada globalmente entre todas as threads da aplicação== e armazena todas as instâncias de classes (objetos) criadas pelo operador new, enquanto a ==Heap é uma área privativa de cada thread== encarregada de armazenar exclusivamente variáveis locais de tipos primitivos."`,
            alternativas: [
              {
                letra: 'C',
                texto: 'CERTO',
                correta: false,
                comentario: 'INCORRETO: O item inverteu exatamente os conceitos de Stack e Heap.'
              },
              {
                letra: 'E',
                texto: '==ERRADO==',
                correta: true,
                comentario: 'CORRETO (ITEM ERRADO): Inversão completa! A Stack (Pilha) é PRIVATIVA DE CADA THREAD (thread-safe, armazenando frames de execução, variáveis locais primitivas e referências de ponteiros). Por outro lado, a HEAP (Monte) é a área COMPARTILHADA GLOBALMENTE entre todas as threads, onde residem todos os objetos criados pelo operador "new" e onde atua o Garbage Collector.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Stack (Pilha) é compartilhada globalmente entre todas as threads',
                papel: 'Inversão Conceitual 1',
                regra: 'Stack é privativa por Thread; cada thread tem sua própria pilha de execução.',
                cor: 'rose'
              },
              {
                termo: 'Heap é uma área privativa de cada thread',
                papel: 'Inversão Conceitual 2',
                regra: 'Heap é o espaço comum e compartilhado onde os objetos vivem.',
                cor: 'yellow'
              }
            ],
            comoLerPassoAPasso: [
              '1. LEMBRE-SE DO MAPA MENTAL DA JVM: Stack = Pilha rápida da thread (privativa). Heap = Monte compartilhado (onde todos os objetos ficam).',
              '2. LEIA O INÍCIO DO ITEM: "Stack é compartilhada globalmente...". ERRO GRAVE! Stack é por thread.',
              '3. LEIA A SEGUNDA PARTE: "Heap é privativa de cada thread...". OUTRO ERRO! A Heap é compartilhada.',
              '4. CONCLUSÃO: O Cebraspe realizou o famoso "troca-troca" de conceitos.',
              '5. MARQUE: Item ERRADO.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: ERRADO',
            conclusaoPedagogica: 'REGRA INABALÁVEL DA JVM: Objetos criados com "new" vão para a HEAP (compartilhada). Variáveis locais do método ficam na STACK daquela thread específica!'
          }
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
          description: 'Como funciona a divisão da Heap, Stack, Metaspace e algoritmos de GC.'
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
      summary: `Python utiliza contagem de referências + coletor cíclico para gerenciamento de memória. A imutabilidade de tuplas e strings garante segurança em operações de hashing.`,
      examPitfalls: [
        'Argumentos padrão mutáveis em funções (ex: def f(x=[])) compartilham a mesma lista entre chamadas!',
        'Tuplas são imutáveis, mas se contiverem uma lista interna, os itens dentro da lista PODEM ser alterados.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Tipos Mutáveis vs Imutáveis em Python',
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
t[1].append(30)  # Funciona! A tupla não mudou o ponteiro, mas a lista interna mudou!`,
          annotations: [
            'Tuplas são imutáveis em seus ponteiros de referência.',
            'Objetos mutáveis dentro da tupla podem ser alterados livremente in-place.',
            'Chaves de dicionário e elementos de set DEVEM ser imutáveis (hashable).'
          ],
          diagramFormula: 't = (1, [10, 20]) ---> Ponteiro t[1] fixo (Imutável) ---> Objeto [10, 20] no heap (Mutável in-place)',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Receita Federal do Brasil (RFB) – Auditor-Fiscal da Receita Federal – 2023',
            enunciado: `Considere o seguinte trecho de código escrito em Python 3:

dados = (10, "FGV", [1, 2])
dados[2].append(3)
print(len(dados), len(dados[2]))

Ao executar esse programa no interpretador CPython padrão, o resultado impresso no console e o comportamento do interpretador serão:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'Será lançada uma exceção TypeError na linha 2, pois tuplas são estruturas de dados estritamente imutáveis.',
                correta: false,
                comentario: 'INCORRETA: A operação dados[2].append(3) altera o conteúdo do objeto lista existente na memória, sem tentar reatribuir o ponteiro dados[2]. Nenhuma exceção é lançada.'
              },
              {
                letra: 'B',
                texto: '==O código executará com sucesso e imprimirá: 3 3==.',
                correta: true,
                comentario: 'CORRETA: Pegadinha clássica da FGV! A tupla `dados` possui 3 elementos: (10, "FGV", lista). A tupla é imutável no sentido de que não podemos alterar para onde seus índices apontam (ex.: dados[2] = [99] geraria TypeError). Porém, o terceiro elemento aponta para uma lista mutável. O método .append(3) modifica a lista internamente (ela passa de [1, 2] para [1, 2, 3]). Portanto, len(dados) continua sendo 3 (três elementos) e len(dados[2]) agora é 3.'
              },
              {
                letra: 'C',
                texto: 'O código executará com sucesso e imprimirá: 4 3.',
                correta: false,
                comentario: 'INCORRETA: O tamanho da tupla principal não aumenta, continua sendo 3.'
              },
              {
                letra: 'D',
                texto: 'Será lançada uma exceção AttributeError, pois tuplas não possuem o método append.',
                correta: false,
                comentario: 'INCORRETA: O append foi chamado em dados[2] (que é uma lista), não na tupla diretamente.'
              },
              {
                letra: 'E',
                texto: 'O código executará com sucesso e imprimirá: 3 2.',
                correta: false,
                comentario: 'INCORRETA: O elemento 3 foi devidamente adicionado à lista interna, então seu tamanho é 3.'
              }
            ],
            termosGrifados: [
              {
                termo: 'dados = (10, "FGV", [1, 2])',
                papel: 'Tupla com Elemento Mutável',
                regra: 'A tupla é imutável (suas referências não mudam), mas os objetos referenciados podem ser mutáveis.',
                cor: 'cyan'
              },
              {
                termo: 'dados[2].append(3)',
                papel: 'Mutação In-Place na Lista',
                regra: 'Invoca append na lista interna referenciada no índice 2, alterando seu conteúdo sem violar a tupla.',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE OS TIPOS: `dados` é uma TUPLA (parênteses) com 3 itens: int, str, list.',
              '2. ANALISE A LINHA CRUCIAL: `dados[2].append(3)` tenta adicionar à lista interna, NÃO está tentando fazer `dados[2] = algo`.',
              '3. AVALIE A IMUTABILIDADE: Uma tupla não permite reatribuição de índices, mas NÃO congela os objetos internos mutáveis!',
              '4. CALCULE AS SAÍDAS: len(dados) = 3 (número de elementos na tupla). len(dados[2]) = 3 (a lista agora tem [1, 2, 3]).',
              '5. MARQUE: Letra B (3 3).'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA B',
            conclusaoPedagogica: 'REGRA DE OURO PYTHON: A imutabilidade da tupla protege os SEUS PONTEIROS, não o estado interno dos objetos apontados! Lista dentro de tupla continua sendo lista mutável!'
          }
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
          description: 'Como funciona a contagem de referências, o coletor de lixo e o GIL.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'Considere a tupla t = (1, [2, 3]). A instrução t[1].append(4) gerará uma exceção TypeError por violação da imutabilidade da tupla?',
        answer: 'NÃO GERA ERRO',
        explanation: 'A referência t[1] continua apontando para o mesmo objeto lista (imutabilidade da tupla preservada), mas o conteúdo interno da lista mutável pode ser alterado com sucesso.'
      }
    },
    {
      id: 'lp-java-streams-concurrency',
      title: 'Java Streams API & Padrões de Concorrência',
      subtopic: 'Java 8+ & Concorrência',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Operações Intermediárias (Lazy/Preguiçosas): filter, map, flatMap, distinct, sorted, limit, skip. Não executam nada até que uma operação terminal seja invocada; retornam um novo Stream.',
        'Operações Terminais (Eager): forEach, collect, reduce, count, anyMatch, allMatch, noneMatch, findFirst, findAny. Consomem o Stream (não pode ser reutilizado) e disparam a computação.',
        'map vs flatMap: map transforma 1 elemento em 1 elemento (Function<T, R>); flatMap achata streams aninhados, transformando 1 elemento em um Stream de elementos (Function<T, Stream<R>>).',
        'Concorrência: synchronized (bloqueio intrínseco/monitor), Volatile (garante visibilidade de memória entre threads sem race condition de leitura), AtomicInteger/AtomicReference (operações lock-free via CAS - Compare-And-Swap).'
      ],
      summary: `A API de Streams introduziu o paradigma funcional no Java para processamento declarativo de coleções, enquanto as abstrações modernas de concorrência gerenciam sincronização de memória de forma eficiente.`,
      mnemonics: 'STREAMS: Intermediárias retornam Stream (Lazy); Terminais retornam valor ou void (Eager).',
      examPitfalls: [
        'Tentar reutilizar um Stream fechado lança IllegalStateException: stream has already been operated upon or closed.',
        'volatile garante Visibilidade imediata de leitura/escrita na RAM, mas NÃO garante Atomicidade (ex: i++ com volatile ainda sofre condição de corrida!).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Negro: Streams (Intermediárias vs Terminais) & Volatile',
          topicTag: '✍️ Java Moderno',
          paperStyle: 'lined',
          colorTheme: 'cyan',
          headerNote: '☕ Java 8 a 21: Conceitos Essenciais',
          handwrittenContent: `1) OPERAÇÕES EM JAVA STREAMS:
   • Intermediárias (Lazy - Só armam o pipeline):
     -> filter(Predicate)  : filtra elementos
     -> map(Function)      : transforma 1 pra 1
     -> flatMap(Function)  : achata listas dentro de listas
     -> sorted(), limit(n), distinct()

   • Terminais (Eager - Disparam a execução e fecham o Stream!):
     -> collect(Collectors.toList())
     -> reduce(BinaryOperator)
     -> count(), forEach(Consumer), anyMatch(Predicate)

2) VOLATILE vs SYNCHRONIZED:
   • volatile: Grava direto na memória principal (RAM), ignorando o cache L1/L2 da CPU. Garante VISIBILIDADE, mas NÃO atomicidade!
   • synchronized: Garante VISIBILIDADE e ATOMICIDADE (exclusão mútua / Lock).`,
          annotations: [
            'Streams não alteram a coleção original (são imutáveis por design).',
            'Virtual Threads (Project Loom - Java 21) são gerenciadas pela JVM, não pelo kernel do SO.'
          ],
          diagramFormula: 'List -> stream() -> [filter] -> [map] -> (collect) -> Resultado\n[Lazy Intermediárias] ---> [Eager Terminal]',
          realExamQuestion: {
            banca: 'FGV',
            orgaoAno: 'Prefeitura de Belo Horizonte – Auditor Fiscal de Tributos Municipais – 2022',
            enunciado: `Considere a API java.util.stream introduzida no Java 8 para processamento funcional de sequências de elementos. Em relação às operações oferecidas por essa API, assinale a afirmativa CORRETA:`,
            alternativas: [
              {
                letra: 'A',
                texto: 'As operações intermediárias processam os elementos imediatamente no instante em que são declaradas no pipeline.',
                correta: false,
                comentario: 'INCORRETA: Operações intermediárias são LAZY (preguiçosas); elas não processam dados no momento da invocação, apenas constroem o plano de execução.'
              },
              {
                letra: 'B',
                texto: 'Um Stream pode ser reutilizado indefinidamente e processado por múltiplas operações terminais após sua criação.',
                correta: false,
                comentario: 'INCORRETA: Um Stream só pode ser consumido UMA única vez. Qualquer tentativa de reutilizá-lo após uma operação terminal dispara IllegalStateException.'
              },
              {
                letra: 'C',
                texto: '==Operações intermediárias retornam um novo Stream e não executam o processamento até que uma operação terminal (como collect ou reduce) seja invocada==.',
                correta: true,
                comentario: 'CORRETA: Definição canônica do paradigma de Streams no Java! Operações intermediárias (ex: filter, map, sorted) são estritamente LAZY: elas retornam uma nova instância de Stream e encadeiam a lógica, mas nenhum cálculo ocorre até que uma operação terminal (ex: collect, forEach, count, reduce) seja invocada, momento em que todo o pipeline é executado e o Stream é consumido/fechado.'
              },
              {
                letra: 'D',
                texto: 'O método map() aceita exclusivamente predicados booleanos, sendo utilizado para descartar elementos indesejados da lista.',
                correta: false,
                comentario: 'INCORRETA: Quem aceita predicados booleanos para descartar elementos é o método filter(Predicate<T>); o método map(Function<T,R>) transforma elementos.'
              },
              {
                letra: 'E',
                texto: 'O método forEach() é uma operação intermediária que altera diretamente os elementos da coleção original em memória.',
                correta: false,
                comentario: 'INCORRETA: forEach() é uma operação terminal (retorna void) e os Streams não alteram a coleção de origem subjacente.'
              }
            ],
            termosGrifados: [
              {
                termo: 'Operações intermediárias retornam um novo Stream',
                papel: 'Natureza das Intermediárias',
                regra: 'Permitem encadeamento fluente (fluent interface / builder pattern).',
                cor: 'cyan'
              },
              {
                termo: 'não executam o processamento até que uma operação terminal seja invocada',
                papel: 'Avaliação Preguiçosa (Lazy Evaluation)',
                regra: 'A execução só é acionada (eager) quando surge a operação terminal (collect, reduce, etc.).',
                cor: 'green'
              }
            ],
            comoLerPassoAPasso: [
              '1. IDENTIFIQUE OS DOIS GRUPOS: 1) Intermediárias (Lazy, retornam Stream); 2) Terminais (Eager, retornam valor/void e fecham o stream).',
              '2. EXAMINE A LETRA A: Diz que intermediárias processam imediatamente. FALSO (são preguiçosas/lazy)!',
              '3. EXAMINE A LETRA B: Diz que Stream pode ser reutilizado. FALSO (só se consome uma vez)!',
              '4. EXAMINE A LETRA C: Descreve com perfeição a avaliação preguiçosa e a dependência da operação terminal.',
              '5. MARQUE: Letra C sem hesitar.'
            ],
            gabaritoOficial: 'GABARITO OFICIAL: LETRA C',
            conclusaoPedagogica: 'LEI DOS STREAMS EM PROVAS: Sem operação terminal, o código NÃO faz nada! O Stream é preguiçoso (lazy) e de uso único (descartável após consumir)!'
          }
        }
      ],
      usefulLinks: [
        {
          title: 'Java Streams API Guide - Oracle Docs',
          url: 'https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/package-summary.html',
          category: 'official',
          badgeLabel: 'Oracle Oficial',
          description: 'Documentação oficial de java.util.stream com operações intermediárias e terminais.'
        }
      ],
      sampleQuestion: {
        banca: 'FGV',
        statement: 'No Java 8+, qual a principal diferença entre as operações intermediárias e as operações terminais na Streams API?',
        answer: 'Operações intermediárias são lazy e retornam um novo Stream; operações terminais executam a pipeline e fecham o Stream.',
        explanation: 'Operações intermediárias não são computadas até que uma operação terminal seja disparada.'
      }
    }
  ]
};
