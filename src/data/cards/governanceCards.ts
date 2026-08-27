import { Flashcard } from '../../types';

export const GOVERNANCE_CARDS: Flashcard[] = [
  {
    id: 'gov-cebraspe-01',
    banca: 'Cebraspe',
    topico: 'Governança & Gestão de TI',
    subtopico: 'COBIT 2019 - Governança vs Gestão',
    tipo: 'certo_errado',
    gabaritoOficial: 'CERTO',
    pergunta: 'No framework COBIT 2019, a Governança é de responsabilidade da alta direção (Conselho de Administração), competindo-lhe avaliar, dirigir e monitorar (EDM), enquanto a Gestão é de responsabilidade da diretoria executiva, encarregada de planejar, construir, executar e monitorar as atividades operacionais.',
    resposta: 'CERTO',
    explicacao: 'Correto. O COBIT 2019 separa estritamente Governança e Gestão. O domínio de Governança é o EDM (Evaluate, Direct and Monitor). Os domínios de Gestão são APO (Align, Plan, Organize), BAI (Build, Acquire, Implement), DSS (Deliver, Service, Support) e MEA (Monitor, Evaluate, Assess).',
    concurso: 'TCU - Auditor Federal de Controle Externo',
    ano: 2023,
    dica: 'Governança = EDM (Conselho). Gestão = APO, BAI, DSS, MEA (Diretoria Operacional).',
    statusSRS: 'novo'
  },
  {
    id: 'gov-fgv-01',
    banca: 'FGV',
    topico: 'Governança & Gestão de TI',
    subtopico: 'ITIL v4 - Utilidade e Garantia',
    tipo: 'conceitual',
    pergunta: 'No framework ITIL 4, qual a distinção conceitual entre Utilidade (Utility) e Garantia (Warranty) na entrega de valor de um serviço?',
    resposta: 'Utilidade é o "fit for purpose" (o que o serviço faz / funcionalidades); Garantia é o "fit for use" (como o serviço desempenha em disponibilidade, capacidade, continuidade e segurança).',
    explicacao: '• Utilidade (Fit for purpose): Representa a funcionalidade oferecida por um produto ou serviço para atender a uma necessidade específica (aumenta o desempenho ou reduz restrições).\n• Garantia (Fit for use): Assegura que o serviço estará disponível quando necessário, com capacidade suficiente, seguro e contínuo. O valor para o cliente requer ambos simultaneamente.',
    concurso: 'Receita Federal - Auditor Fiscal (TI)',
    ano: 2023,
    dica: 'Utilidade = "O que faz" (Propósito). Garantia = "Como funciona" (Disponibilidade e Segurança).',
    statusSRS: 'novo'
  },
  {
    id: 'gov-fgv-02',
    banca: 'FGV',
    topico: 'Governança & Gestão de TI',
    subtopico: 'Modelagem BPMN - Piscinas e Raias',
    tipo: 'conceitual',
    pergunta: 'Na notação BPMN (Business Process Model and Notation), qual a diferença entre Piscinas (Pools) e Raias (Lanes), e como deve ser feita a conexão entre participantes de piscinas distintas?',
    resposta: 'Piscinas representam organizações/participantes independentes; Raias subdividem a piscina em departamentos/papéis internos. Entre piscinas distintas, usa-se Fluxo de Mensagem (linha tracejada).',
    explicacao: '• Piscina (Pool): Delimita um processo completo de uma entidade/empresa independente.\n• Raia (Lane): Divisão interna dentro de uma piscina (ex: Setor Financeiro, Almoxarifado) conectadas por Fluxos de Sequência (linha contínua).\n• Entre piscinas diferentes: É expressamente proibido usar fluxo de sequência contínuo; deve-se usar Fluxo de Mensagem (Message Flow - linha tracejada com círculo na origem e seta vazia no destino).',
    concurso: 'SEFAZ-MG - Auditor Fiscal de TI',
    ano: 2023,
    dica: 'Entre piscinas diferentes: SEMPRE fluxo de mensagem tracejado!',
    statusSRS: 'novo'
  },
  {
    id: 'gov-cesgranrio-01',
    banca: 'Cesgranrio',
    topico: 'Governança & Gestão de TI',
    subtopico: 'ITIL v4 - Gerenciamento de Incidentes vs Problemas',
    tipo: 'conceitual',
    pergunta: 'Segundo a ITIL 4, qual a diferença entre Incidente, Problema e Erro Conhecido (Known Error)?',
    resposta: 'Incidente é a interrupção não planejada do serviço; Problema é a causa desconhecida de incidentes; Erro Conhecido é o problema cuja causa-raiz foi identificada com solução de contorno (workaround).',
    explicacao: '• Incidente: Interrupção não planejada ou redução da qualidade de um serviço. Meta: Restaurar a operação normal o mais rápido possível.\n• Problema: Causa ou causa potencial de um ou mais incidentes. Meta: Investigar e eliminar a causa raiz.\n• Erro Conhecido: Problema que já foi analisado com sucesso e possui uma causa raiz documentada e uma solução de contorno (workaround).',
    concurso: 'Petrobras - Analista de TI',
    ano: 2024,
    dica: 'Incidente = Apagar o fogo rápido. Problema = Descobrir quem colocou fogo.',
    statusSRS: 'novo'
  },
  {
    id: 'gov-cesgranrio-02',
    banca: 'Cesgranrio',
    topico: 'Governança & Gestão de TI',
    subtopico: 'Extreme Programming (XP) - TDD',
    tipo: 'conceitual',
    pergunta: 'No Extreme Programming (XP), qual é o ciclo de três fases do Desenvolvimento Orientado a Testes (TDD)?',
    resposta: '1. Red (Escrever o teste que falha); 2. Green (Escrever o código mínimo para passar no teste); 3. Refactor (Melhorar o design do código mantendo o teste passando).',
    explicacao: 'O ciclo canônico do TDD (Red-Green-Refactor):\n1. Red: Cria-se um teste unitário automatizado para a funcionalidade desejada antes de existir a implementação (o teste falha).\n2. Green: Implementa-se a lógica mínima estritamente necessária para que o teste passe com sucesso.\n3. Refactor: Limpa-se o código, eliminando duplicações e aplicando boas práticas arquiteturais sem alterar o comportamento externo.',
    concurso: 'BNDES - Tecnologia da Informação',
    ano: 2024,
    dica: 'TDD = Red (falha) -> Green (passa) -> Refactor (limpa).',
    statusSRS: 'novo'
  }
];
