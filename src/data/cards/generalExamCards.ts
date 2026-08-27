import { Flashcard } from '../../types';

export const ADDITIONAL_EXAM_CARDS: Flashcard[] = [
  // ================= PORTUGUÊS ADICIONAL =================
  {
    id: 'portugues-fgv-02',
    banca: 'FGV',
    topico: 'Língua Portuguesa',
    subtopico: 'Pontuação & Uso da Vírgula',
    tipo: 'conceitual',
    pergunta: 'Segundo a norma culta, em quais situações sintáticas é expressamente PROIBIDO o uso da vírgula?',
    resposta: '1) Entre Sujeito e Predicado; 2) Entre Verbo e seu Objeto (direto ou indireto); 3) Entre Nome e seu Complemento Nominal ou Adjunto Adnominal.',
    explicacao: 'A pontuação segue a estrutura sintática canônica. É proibido separar por vírgula os termos que possuem dependência sintática direta e imediata: [Sujeito] + [Verbo] + [Complementos]. Qualquer vírgula isolada que quebre essa cadeia constitui erro gramatical grave.',
    concurso: 'Receita Federal - Analista Tributário',
    ano: 2023,
    dica: 'Regra de ouro: NUNCA separe Sujeito de Verbo, nem Verbo de seu Objeto com uma vírgula!',
    statusSRS: 'novo'
  },
  {
    id: 'portugues-cebraspe-02',
    banca: 'Cebraspe',
    topico: 'Língua Portuguesa',
    subtopico: 'Concordância Verbal & Voz Passiva Sintética',
    tipo: 'certo_errado',
    gabaritoOficial: 'CERTO',
    pergunta: 'Na frase "Identificaram-se novas vulnerabilidades críticas no código da aplicação", o vocábulo "se" funciona como partícula apassivadora (pronome apassivador), estando o verbo "identificar" no plural para concordar obrigatoriamente com o sujeito paciente "novas vulnerabilidades críticas".',
    resposta: 'CERTO',
    explicacao: 'Correto. Na voz passiva sintética (VTD + se), o termo após o verbo é o SUJEITO PACIENTE ("novas vulnerabilidades críticas"). Se o sujeito estiver no plural, o verbo deve obrigatoriamente flexionar-se no plural: "Identificaram-se vulnerabilidades" equivale a "Vulnerabilidades foram identificadas".',
    concurso: 'TCU - Auditor Federal de Controle Externo',
    ano: 2023,
    dica: 'VTD + se = Voz Passiva Sintética (o verbo concorda com o sujeito: Vende-se casa / Vendem-se casas).',
    statusSRS: 'novo'
  },

  // ================= RACIOCÍNIO LÓGICO ADICIONAL =================
  {
    id: 'rlm-fgv-02',
    banca: 'FGV',
    topico: 'Raciocínio Lógico e Matemática',
    subtopico: 'Lógica Proposicional - Leis de De Morgan',
    tipo: 'conceitual',
    pergunta: 'Quais são as duas Leis de De Morgan para a negação de conjunções (E) e disjunções (OU)?',
    resposta: '1. ~(P ∧ Q) ≡ ~P ∨ ~Q (Negação do E vira OU com tudo negado); 2. ~(P ∨ Q) ≡ ~P ∧ ~Q (Negação do OU vira E com tudo negado).',
    explicacao: '• Negação do "E" (Conjunção): "Nego que [Estudo E Trabalho]" equivale a "NÃO estudo OU NÃO trabalho".\n• Negação do "OU" (Disjunção): "Nego que [Viajo OU Descanso]" equivale a "NÃO viajo E NÃO descanso".',
    concurso: 'SEFAZ-SP - Auditor Fiscal da Receita Estadual',
    ano: 2023,
    dica: 'De Morgan: Troca o E pelo OU (ou o OU pelo E) e NEGA cada uma das partes.',
    statusSRS: 'novo'
  },
  {
    id: 'rlm-cebraspe-02',
    banca: 'Cebraspe',
    topico: 'Raciocínio Lógico e Matemática',
    subtopico: 'Quantificadores Lógicos - Todo, Algum e Nenhum',
    tipo: 'certo_errado',
    gabaritoOficial: 'ERRADO',
    pergunta: 'A negação lógica correta da proposição universal afirmativa "Todo desenvolvedor de software domina algoritmos e estruturas de dados" é a proposição "Nenhum desenvolvedor de software domina algoritmos e estruturas de dados".',
    resposta: 'ERRADO',
    explicacao: 'Incorreto! A negação de "Todo A é B" NUNCA é "Nenhum A é B". A negação lógica de uma universal afirmativa é uma particular negativa (PEA + NÃO): "Existe pelo menos um / Algum desenvolvedor de software que NÃO domina algoritmos e estruturas de dados".',
    concurso: 'Polícia Federal - Agente de Polícia',
    ano: 2021,
    dica: 'Negação do TODO = PEA + NÃO (Pelo menos um NÃO / Existe um que NÃO / Algum NÃO).',
    statusSRS: 'novo'
  }
];
