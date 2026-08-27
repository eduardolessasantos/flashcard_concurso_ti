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
          description: 'Como funciona a contagem de referências, o coletor de lixo e o GIL.'
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
};
