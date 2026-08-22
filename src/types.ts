export type Banca = 'FGV' | 'Cebraspe' | 'Cesgranrio';

export type Topico = 
  | 'Engenharia de Software' 
  | 'Linguagens (Java/Python)' 
  | 'Bancos de Dados' 
  | 'Arquitetura de Software';

export type CardType = 'certo_errado' | 'conceitual';

export type FeedbackType = 'errei' | 'dificil' | 'bom' | 'facil';

export interface Flashcard {
  id: string;
  banca: Banca;
  topico: Topico;
  subtopico: string;
  tipo: CardType;
  pergunta: string;
  resposta: string;
  explicacao: string;
  gabaritoOficial?: 'CERTO' | 'ERRADO';
  trechoCodigo?: string;
  concurso?: string;
  ano?: number;
  dica?: string;
  revisoes?: number;
  acertos?: number;
  erros?: number;
  statusSRS?: 'novo' | 'em_revisao' | 'dominado';
}

export interface ReviewSessionStats {
  totalRevisados: number;
  erreiCount: number;
  dificilCount: number;
  bomCount: number;
  facilCount: number;
  cardsDominados: number;
  historicoRespostas: {
    cardId: string;
    banca: Banca;
    topico: Topico;
    feedback: FeedbackType;
    timestamp: number;
  }[];
}
