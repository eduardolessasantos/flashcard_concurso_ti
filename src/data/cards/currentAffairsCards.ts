import { Flashcard } from '../../types';

export const CURRENT_AFFAIRS_CARDS: Flashcard[] = [
  {
    id: 'at-cebraspe-01',
    banca: 'Cebraspe',
    topico: 'Atualidades & IA',
    subtopico: 'Inteligência Artificial - RAG vs Fine-Tuning',
    tipo: 'certo_errado',
    gabaritoOficial: 'ERRADO',
    pergunta: 'A técnica de Geração Aumentada por Recuperação (Retrieval-Augmented Generation - RAG) em sistemas de IA Generativa requer o retreinamento integral de todos os parâmetros e pesos do Large Language Model (LLM) a cada atualização da base de conhecimento da organização.',
    resposta: 'ERRADO',
    explicacao: 'Incorreto. O RAG NÃO altera os parâmetros nem os pesos neurais do modelo fundacional. O RAG opera buscando documentos relevantes em uma base de dados externa (banco vetorial) por similaridade semântica e injetando esse contexto recuperado dinamicamente dentro do prompt enviado ao LLM.',
    concurso: 'Dataprev - Engenheiro de Inteligência Artificial',
    ano: 2024,
    dica: 'RAG = Recupera contexto do banco vetorial e anexa ao prompt (Sem retreinar o modelo!).',
    statusSRS: 'novo'
  },
  {
    id: 'at-cebraspe-02',
    banca: 'Cebraspe',
    topico: 'Atualidades & IA',
    subtopico: 'Arquitetura Transformer & Self-Attention',
    tipo: 'certo_errado',
    gabaritoOficial: 'CERTO',
    pergunta: 'A inovação central da arquitetura Transformer em Processamento de Linguagem Natural (NLP) reside no mecanismo de autoatenção (self-attention), que permite ao modelo processar todos os tokens de uma sequência em paralelo e ponderar a importância relativa entre qualquer par de palavras, independentemente de sua distância no texto.',
    resposta: 'CERTO',
    explicacao: 'Correto. Introduzido no artigo "Attention Is All You Need" (2017), o mecanismo de Self-Attention substituiu a recorrência sequencial das RNNs/LSTMs, permitindo processamento massivamente paralelo em GPUs e captura de dependências contextuais de longo alcance entre os tokens.',
    concurso: 'SERPRO - Cientista de Dados (IA)',
    ano: 2023,
    dica: 'Transformer = Autoatenção (Self-Attention) + Processamento Paralelo de Tokens.',
    statusSRS: 'novo'
  },
  {
    id: 'at-fgv-01',
    banca: 'FGV',
    topico: 'Atualidades & IA',
    subtopico: 'Geopolítica e Sustentabilidade - Matriz Energética Brasileira',
    tipo: 'conceitual',
    pergunta: 'Qual a diferença crucial entre Matriz Energética e Matriz Elétrica, e qual o posicionamento percentual do Brasil no cenário de energias renováveis?',
    resposta: 'Matriz Elétrica refere-se apenas à eletricidade (>80% renovável no Brasil); Matriz Energética inclui transportes e indústrias (~48% renovável no Brasil, contra ~15% da média mundial).',
    explicacao: '• Matriz Elétrica: Conjunto de fontes usadas exclusivamente para gerar energia elétrica. No Brasil, mais de 80% provém de fontes renováveis (hidrelétrica, eólica, solar e biomassa).\n• Matriz Energética: Representa todas as fontes de energia consumidas no país (inclui gasolina e diesel nos transportes, carvão em siderúrgicas, lenha, etc.). No Brasil, cerca de 48% é renovável, muito superior à média global de cerca de 15%.',
    concurso: 'Receita Federal - Auditor Fiscal',
    ano: 2023,
    dica: 'Matriz Elétrica Brasil > 80% renovável. Matriz Energética Brasil ~ 48% renovável (mundo ~15%).',
    statusSRS: 'novo'
  },
  {
    id: 'at-cesgranrio-01',
    banca: 'Cesgranrio',
    topico: 'Atualidades & IA',
    subtopico: 'Segurança de IA - Prompt Injection e Alucinações',
    tipo: 'conceitual',
    pergunta: 'O que caracterizam, respectivamente, os fenômenos de Alucinação (Hallucination) e o ataque de Prompt Injection em Grandes Modelos de Linguagem (LLMs)?',
    resposta: 'Alucinação é a geração de informações factualmente falsas com tom convincente; Prompt Injection é a manipulação maliciosa das instruções do prompt para burlar diretrizes do sistema.',
    explicacao: '• Alucinação: Ocorre quando o LLM gera respostas incorretas, inventadas ou sem embasamento na realidade com alta confiança linguística aparente, devido à natureza probabilística de predição de tokens.\n• Prompt Injection: Ataque de segurança em que uma entrada maliciosa inserida pelo usuário (ou contida em dados externos lidos pelo modelo) substitui ou contorna as instruções de sistema originais (system prompt), forçando o modelo a executar comandos não autorizados ou vazar dados confidenciais.',
    concurso: 'Petrobras - Analista de Tecnologia e Inovação',
    ano: 2024,
    dica: 'Alucinação = LLM inventa fatos. Prompt Injection = Usuário hackeia as instruções do LLM via texto.',
    statusSRS: 'novo'
  }
];
