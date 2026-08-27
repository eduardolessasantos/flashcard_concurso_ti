import { Flashcard } from '../../types';

export const LEGISLATION_CARDS: Flashcard[] = [
  {
    id: 'leg-cebraspe-01',
    banca: 'Cebraspe',
    topico: 'Legislação & Proteção de Dados',
    subtopico: 'LAI (Lei 12.527/11) - Graus de Sigilo',
    tipo: 'certo_errado',
    gabaritoOficial: 'CERTO',
    pergunta: 'De acordo com a Lei de Acesso à Informação (LAI - Lei nº 12.527/2011), os prazos máximos de restrição de acesso a informações públicas classificadas nos graus Ultrassecreto, Secreto e Reservado são de 25 anos, 15 anos e 5 anos, respectivamente.',
    resposta: 'CERTO',
    explicacao: 'Correto. Os prazos máximos de sigilo definidos no art. 24 da LAI são:\n• Ultrassecreta: 25 anos (admite uma única prorrogação por mais 25 anos decidida pela CMRI);\n• Secreta: 15 anos;\n• Reservada: 5 anos.\n* Informações Pessoais (art. 31): restrição máxima de até 100 anos.',
    concurso: 'Polícia Federal - Agente Administrativo',
    ano: 2023,
    dica: 'Prazos de sigilo LAI: 25 anos (Ultra) > 15 anos (Secreta) > 5 anos (Reservada) | Pessoal = 100 anos.',
    statusSRS: 'novo'
  },
  {
    id: 'leg-cebraspe-02',
    banca: 'Cebraspe',
    topico: 'Legislação & Proteção de Dados',
    subtopico: 'LGPD (Lei 13.709/18) - Bases Legais',
    tipo: 'certo_errado',
    gabaritoOficial: 'ERRADO',
    pergunta: 'Nos termos da Lei Geral de Proteção de Dados Pessoais (LGPD), o consentimento formal e inequívoco do titular constitui a única hipótese legal autorizadora para o tratamento de dados pessoais no âmbito da administração pública.',
    resposta: 'ERRADO',
    explicacao: 'Incorreto. O consentimento é apenas UMA das 10 bases legais previstas no art. 7º da LGPD. Para o setor público, o tratamento é frequentemente fundamentado na execução de políticas públicas previstas em leis e regulamentos (art. 7º, III) ou no cumprimento de obrigação legal ou regulatória (art. 7º, II), sem necessidade de consentimento.',
    concurso: 'TCU - Auditor Federal de Controle Externo',
    ano: 2023,
    dica: 'Consentimento NÃO é a única base da LGPD. Há 10 bases legais autônomas no art. 7º.',
    statusSRS: 'novo'
  },
  {
    id: 'leg-fgv-01',
    banca: 'FGV',
    topico: 'Legislação & Proteção de Dados',
    subtopico: 'LAI (Lei 12.527/11) - Prazos de Resposta e Recursos',
    tipo: 'conceitual',
    pergunta: 'Sob as regras da Lei nº 12.527/2011 (LAI), qual é o prazo legal para a administração pública responder a um pedido de acesso à informação e qual o prazo para o cidadão interpor recurso em caso de negativa?',
    resposta: 'Prazo de resposta: Imediata ou em até 20 dias (prorrogável por +10 dias justificadamente). Prazo de recurso: 10 dias da ciência da negativa, com decisão em até 5 dias.',
    explicacao: '• Atendimento: Imediato se a informação estiver disponível. Não sendo possível, o prazo é de 20 DIAS, prorrogável por mais 10 DIAS mediante justificativa expressa encaminhada ao solicitante.\n• Recurso administrativo: No prazo de 10 DIAS a contar da ciência da decisão de negativa, dirigido à autoridade hierarquicamente superior, que deverá se manifestar no prazo de 5 DIAS.',
    concurso: 'Receita Federal - Auditor Fiscal',
    ano: 2023,
    dica: 'Prazos da LAI: 20 + 10 dias para responder; 10 dias para o cidadão recorrer; 5 dias para o órgão julgar o recurso.',
    statusSRS: 'novo'
  },
  {
    id: 'leg-fgv-02',
    banca: 'FGV',
    topico: 'Legislação & Proteção de Dados',
    subtopico: 'Marco Civil da Internet (Lei 12.965/14) - Guarda de Registros',
    tipo: 'conceitual',
    pergunta: 'Quais são os prazos de guarda obrigatória de registros estabelecidos pelo Marco Civil da Internet para Provedores de Conexão à Internet e Provedores de Aplicações de Internet?',
    resposta: 'Provedores de Conexão guardam registros de conexão por 1 ANO (12 meses); Provedores de Aplicação guardam registros de acesso por 6 MESES.',
    explicacao: '• Provedor de Conexão (ex: Vivo, Claro, provedores de banda larga): Deve manter os registros de conexão (endereço IP, data/hora de início e fim da conexão) sob sigilo pelo prazo mínimo de 1 ANO (Art. 13).\n• Provedor de Aplicação (ex: redes sociais, sites, e-commerces constituídos como PJ): Deve manter os registros de acesso a aplicações sob sigilo pelo prazo de 6 MESES (Art. 15).\n* Nota: Provedor de conexão é expressamente PROIBIDO de guardar logs de sites visitados (aplicações).',
    concurso: 'Senado Federal - Consultor Legislativo (TI)',
    ano: 2022,
    dica: 'Marco Civil: Conexão = 1 ANO. Aplicação = 6 MESES.',
    statusSRS: 'novo'
  },
  {
    id: 'leg-cesgranrio-01',
    banca: 'Cesgranrio',
    topico: 'Legislação & Proteção de Dados',
    subtopico: 'LGPD (Lei 13.709/18) - Agentes de Tratamento & Sanções',
    tipo: 'conceitual',
    pergunta: 'Na LGPD, qual a distinção entre Controlador, Operador e Encarregado (DPO), e qual é o valor máximo da multa simples aplicável pela ANPD?',
    resposta: 'Controlador toma as decisões; Operador executa em nome do controlador; Encarregado é o canal de comunicação (DPO). Multa simples máxima de até 2% do faturamento limitada a R$ 50 milhões por infração.',
    explicacao: '• Controlador (Art. 5º, VI): Pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais.\n• Operador (Art. 5º, VII): Pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador.\n• Encarregado / DPO (Art. 5º, VIII): Pessoa indicada pelo controlador/operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD.\n• Sanção máxima (Art. 52, II): Multa simples de até 2% do faturamento da pessoa jurídica, grupo ou conglomerado no Brasil, limitada a R$ 50.000.000,00 (cinquenta milhões de reais) por infração.',
    concurso: 'Petrobras - Analista de Governança e Compliance',
    ano: 2024,
    dica: 'Multa máxima da LGPD = 2% do faturamento, até o teto de R$ 50 milhões por infração.',
    statusSRS: 'novo'
  }
];
