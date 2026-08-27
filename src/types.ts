export type Banca = 'FGV' | 'Cebraspe' | 'Cesgranrio';

export type Topico = 
  | 'Engenharia de Software' 
  | 'Linguagens (Java/Python)' 
  | 'Bancos de Dados' 
  | 'Arquitetura de Software'
  | 'Segurança da Informação'
  | 'Governança & Gestão de TI'
  | 'Inteligência de Negócios (BI)'
  | 'Legislação & Proteção de Dados'
  | 'Língua Portuguesa'
  | 'Raciocínio Lógico e Matemática'
  | 'Língua Inglesa'
  | 'Atualidades & IA';

export type CardType = 'certo_errado' | 'conceitual';

export type FeedbackType = 'errei' | 'dificil' | 'bom' | 'facil';

export interface Flashcard {
  id: string;
  userId?: string; // If custom card authored by user
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
  cardMastery?: Record<string, {
    box: number; // Leitner box 1-5
    lastReviewed: number;
    consecutiveCorrect: number;
  }>;
}

export interface UserProfileData {
  userId: string;
  displayName: string;
  email: string;
  photoURL?: string;
  targetBanca: Banca | 'TODAS';
  targetConcurso?: string;
  dailyGoalCards: number;
  createdAt: string;
  lastActiveAt: string;
}

export interface UsefulLink {
  title: string;
  url: string;
  category: 'video' | 'doc' | 'article' | 'official';
  badgeLabel?: string;
  description?: string;
}

export interface HandwrittenNote {
  title: string;
  topicTag: string;
  paperStyle?: 'lined' | 'grid' | 'postit';
  colorTheme?: 'yellow' | 'green' | 'cyan' | 'pink' | 'purple' | 'rose';
  headerNote?: string;
  handwrittenContent: string; // Text formatted with handwritten vibe
  annotations?: string[]; // Bullet annotations or sticky tags
  diagramFormula?: string; // Schematic formula or table
}

export interface StudyGuideLesson {
  id: string;
  title: string;
  subtopic: string;
  readTimeMinutes: number;
  keyTakeaways: string[];
  summary: string;
  mnemonics?: string;
  examPitfalls: string[]; // Pegadinhas de bancas (FGV, Cebraspe, Cesgranrio)
  handwrittenNotes?: HandwrittenNote[];
  codeExample?: {
    language: string;
    code: string;
    explanation: string;
  };
  usefulLinks?: UsefulLink[];
  sampleQuestion: {
    banca: Banca;
    statement: string;
    answer: string;
    explanation: string;
  };
}

export interface StudyGuideTopic {
  id: Topico;
  title: string;
  category: 'especificos_ti' | 'conhecimentos_gerais';
  description: string;
  badge: string;
  iconName: string;
  generalUsefulLinks?: UsefulLink[];
  lessons: StudyGuideLesson[];
}

export interface UserLessonProgress {
  userId: string;
  completedLessonIds: string[];
  bookmarkedLessonIds: string[];
  userNotes: Record<string, string>; // lessonId -> personal note
  updatedAt: string;
}

export interface UserCardProgressMap {
  [cardId: string]: {
    statusSRS: 'novo' | 'em_revisao' | 'dominado';
    box: number;
    revisoes: number;
    acertos: number;
    erros: number;
    lastReviewedAt: number;
    nextReviewDate?: string;
  };
}
