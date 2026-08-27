import { StudyGuideTopic } from '../../types';

export const PORTUGUESE_TOPIC: StudyGuideTopic = {
  id: 'Língua Portuguesa',
  title: 'Língua Portuguesa',
  category: 'conhecimentos_gerais',
  description: 'Crase, Regência Verbal e Nominal, Pontuação estilo FGV, Conjunções, Concordância, Ortografia Oficial e Coesão Textual.',
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
          title: 'Quadro Negro: Teste Prático da Crase',
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
      id: 'lp-ortografia-porques',
      title: 'Ortografia Oficial: Emprego de X/S/Z/Ç e os 4 Porquês',
      subtopic: 'Ortografia & Acentuação',
      readTimeMinutes: 7,
      keyTakeaways: [
        'Uso do "X": Emprega-se após as sílabas "ME-" (mexer, mexilhão) e "EN-" (enxada, enxergar), após DITONGOS (caixa, peixe, frouxo) e em termos de origem indígena/africana (abacaxi, orixá).',
        'Uso do "S" vs "Z": Verbos derivados mantêm a base (análise -> analisar; paralisia -> paralisar com S). Verbos com sufixo -izar recebem Z quando a primitiva não tem S (civil -> civilizar; organizar -> organização).',
        'Por que: Pergunta direta ou indireta ("Por que faltou?") ou pronome relativo ("o motivo por que lutei" = pelo qual).',
        'Porque: Conjunção explicativa/causal ("Não fui porque choveu" = pois/já que).',
        'Por quê: Fim de frase ou isolado antes de pontuação ("Você não foi, por quê?").',
        'Porquê: Substantivo ("Não entendi o porquê da decisão" = o motivo/a razão).'
      ],
      summary: `A ortografia oficial cobra sistematicamente as regras pós-ditongo, a derivação de verbos em -isar/-izar e a distinção funcional dos quatro tipos de porquês.`,
      mnemonics: 'PORQUÊS: "Por que" pergunta; "Porque" responde; "Por quê" pontua; "O Porquê" substantiva!',
      examPitfalls: [
        'Pegadinha FGV: "Encher" e derivados grafa-se com CH porque vem do primitivo "cheio" (exceção à regra do EN-).',
        'Pegadinha Cebraspe: "Recauchutar" e "Guache" grafam-se com CH (exceção à regra pós-ditongo).',
        '"Mecha" (de cabelo) é com CH; "Mexa" (do verbo mexer) é com X.'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro de Giz: O Mapa Definitivo dos 4 Porquês',
          topicTag: '✍️ Ortografia Express',
          paperStyle: 'lined',
          colorTheme: 'cyan',
          headerNote: '📌 Diferencie em 10 segundos',
          handwrittenContent: `1) POR QUE (Separado e sem acento):
   -> Em perguntas diretas/indiretas: "Por que você não estudou?"
   -> Equivalente a "pelo qual / pela qual": "Os caminhos por que passei."
   -> Equivalente a "por qual razão": "Não sei por que ele atrasou."

2) PORQUE (Junto e sem acento):
   -> Respostas, causas e explicações: "Passei porque estudei muito." (= pois / visto que).

3) POR QUÊ (Separado e COM acento):
   -> Fim de período, antes de ponto: "Eles viajaram sem avisar, por quê?"

4) O PORQUÊ (Junto e COM acento):
   -> Substantivo com artigo/pronome: "Gostaria de saber o porquê de tudo." (= o motivo).`,
          annotations: [
            'Menos e Alerta são SEMPRE invariáveis!',
            'Anexo e Incluso concordam com o substantivo: As cartas seguem anexas.'
          ],
          diagramFormula: 'Por que = Pergunta | Porque = Resposta | Por quê? = Fim | O porquê = Substantivo'
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
    {
      id: 'lp-coesao-coerencia',
      title: 'Mecanismos de Coesão Textual & Princípios de Coerência',
      subtopic: 'Texto & Discurso',
      readTimeMinutes: 8,
      keyTakeaways: [
        'Coesão Referencial: Anáfora (retoma termo antecedente: "O diretor chegou. Ele discursou.") e Catáfora (antecipa termo posterior: "O recado é este: estudem!").',
        'Coesão por Substituição e Elipse: Omissão intencional de termos recuperáveis no contexto para evitar redundâncias.',
        'Coesão Lexical: Uso de sinônimos, hiperônimos (termo genérico: "veículo") e hipônimos (termo específico: "carro").',
        'Princípios de Coerência: Não Contradição (ideias não podem se anular), Não Tautologia (evitar repetições circulares óbvias) e Relevância Temática.'
      ],
      summary: `A coesão trata das amarras gramaticais e conectivos superficiais do texto, enquanto a coerência diz respeito à lógica e continuidade do sentido global.`,
      mnemonics: 'ANÁFORA olha para TRÁS (passado); CATÁFORA olha para FRENTE (futuro).',
      examPitfalls: [
        'FGV costuma perguntar se "este/isto" retoma ou antecipa. "Este/Isto" pode antecipar (catáfora) ou referir-se ao elemento mais próximo mencionado.',
        'Parônimos perigosos: Tráfego (trânsito de veículos) vs Tráfico (comércio ilícito); Cumprimento (saudação/execução) vs Comprimento (tamanho/extensão).'
      ],
      handwrittenNotes: [
        {
          title: 'Quadro Didático: Anáfora x Catáfora & Hiperonímia',
          topicTag: '✍️ Estrutura do Texto',
          paperStyle: 'grid',
          colorTheme: 'green',
          headerNote: '🔍 Mecanismos de Referenciação',
          handwrittenContent: `1) ANÁFORA (Movimento Retrospectivo ⬅️):
   -> "O servidor protocolou o pedido e ele foi analisado."
   -> 'Ele' retoma 'o pedido' já citado.

2) CATÁFORA (Movimento Prospectivo ➡️):
   -> "Só desejo isto: sua aprovação no concurso!"
   -> 'Isto' aponta para o que vem a seguir.

3) HIPERÔNIMO vs HIPÔNIMO (Hierarquia de Sentido):
   -> Hiperônimo (Geral): Fruta, Veículo, Linguagem.
   -> Hipônimo (Específico): Maçã, Caminhão, Python.`,
          annotations: [
            'Polissemia: Uma palavra com múltiplos sentidos no contexto.',
            'Homófonos: Mesmo som, grafia diferente (Cem x Sem, Seção x Cessão).'
          ]
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
