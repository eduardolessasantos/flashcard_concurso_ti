export type UserLevel = 
  | 'Nível 1 - Estagiário de TI' 
  | 'Nível 2 - Técnico Judiciário' 
  | 'Nível 3 - Analista Júnior' 
  | 'Nível 4 - Analista Pleno' 
  | 'Nível 5 - Analista Sênior' 
  | 'Nível 6 - Auditor Fiscal de TI';

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  unlockedAt?: string;
}

export interface DayActivity {
  date: string; // YYYY-MM-DD
  dayLabel: string; // 'Seg', 'Ter', etc.
  cardsReviewed: number;
  xpEarned: number;
}

export interface LeaderboardUser {
  id: string;
  name: string;
  targetRole: string;
  weeklyXp: number;
  avatarColor: string;
  isCurrentUser?: boolean;
}

export interface GamificationState {
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string; // YYYY-MM-DD
  totalCardsAnswered: number;
  totalCorrectAnswers: number;
  securityCardsAnswered: number;
  reviewedBancas: string[];
  unlockedBadgeIds: string[];
  recentActivities: Record<string, DayActivity>; // date -> DayActivity
}

const STORAGE_KEY_GAMIFICATION = 'devconcursos_gamification_v2';

export const ALL_BADGES: Badge[] = [
  {
    id: 'primeiro_passo',
    title: 'Primeiro Passo',
    description: 'Revise seu 1º flashcard na plataforma',
    iconName: 'Footprints'
  },
  {
    id: 'foco_total',
    title: 'Foco Total',
    description: 'Revise 20 flashcards em um único dia',
    iconName: 'Target'
  },
  {
    id: 'semana_de_ouro',
    title: 'Semana de Ouro',
    description: 'Mantenha um streak consecutivo de 7 dias',
    iconName: 'Flame'
  },
  {
    id: 'mestre_seguranca',
    title: 'Mestre da Segurança',
    description: 'Revise 50 cards de Segurança da Informação',
    iconName: 'ShieldCheck'
  },
  {
    id: 'gabaritando_bancas',
    title: 'Gabaritando Bancas',
    description: 'Revise cards de 3 bancas examinadoras diferentes',
    iconName: 'Award'
  },
  {
    id: 'madrugador',
    title: 'Madrugador',
    description: 'Revise cards antes das 8h da manhã',
    iconName: 'Sunrise'
  }
];

export const getLevelInfo = (xp: number): {
  levelNumber: number;
  levelTitle: string;
  level: UserLevel;
  minXp: number;
  maxXp: number;
  nextLevelName?: UserLevel;
  progressPercent: number;
  color: string;
  badgeBg: string;
} => {
  if (xp <= 100) {
    return {
      levelNumber: 1,
      levelTitle: 'Estagiário de TI',
      level: 'Nível 1 - Estagiário de TI',
      minXp: 0,
      maxXp: 100,
      nextLevelName: 'Nível 2 - Técnico Judiciário',
      progressPercent: Math.min(100, Math.max(0, Math.round((xp / 100) * 100))),
      color: 'text-slate-300',
      badgeBg: 'bg-slate-800 border-slate-700 text-slate-300'
    };
  }
  if (xp <= 300) {
    return {
      levelNumber: 2,
      levelTitle: 'Técnico Judiciário',
      level: 'Nível 2 - Técnico Judiciário',
      minXp: 101,
      maxXp: 300,
      nextLevelName: 'Nível 3 - Analista Júnior',
      progressPercent: Math.min(100, Math.max(0, Math.round(((xp - 100) / 200) * 100))),
      color: 'text-sky-400',
      badgeBg: 'bg-sky-500/15 border-sky-500/30 text-sky-300'
    };
  }
  if (xp <= 700) {
    return {
      levelNumber: 3,
      levelTitle: 'Analista Júnior',
      level: 'Nível 3 - Analista Júnior',
      minXp: 301,
      maxXp: 700,
      nextLevelName: 'Nível 4 - Analista Pleno',
      progressPercent: Math.min(100, Math.max(0, Math.round(((xp - 300) / 400) * 100))),
      color: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300'
    };
  }
  if (xp <= 1500) {
    return {
      levelNumber: 4,
      levelTitle: 'Analista Pleno',
      level: 'Nível 4 - Analista Pleno',
      minXp: 701,
      maxXp: 1500,
      nextLevelName: 'Nível 5 - Analista Sênior',
      progressPercent: Math.min(100, Math.max(0, Math.round(((xp - 700) / 800) * 100))),
      color: 'text-purple-400',
      badgeBg: 'bg-purple-500/15 border-purple-500/30 text-purple-300'
    };
  }
  if (xp <= 3000) {
    return {
      levelNumber: 5,
      levelTitle: 'Analista Sênior',
      level: 'Nível 5 - Analista Sênior',
      minXp: 1501,
      maxXp: 3000,
      nextLevelName: 'Nível 6 - Auditor Fiscal de TI',
      progressPercent: Math.min(100, Math.max(0, Math.round(((xp - 1500) / 1500) * 100))),
      color: 'text-amber-400',
      badgeBg: 'bg-amber-500/15 border-amber-500/30 text-amber-300'
    };
  }
  return {
    levelNumber: 6,
    levelTitle: 'Auditor Fiscal de TI',
    level: 'Nível 6 - Auditor Fiscal de TI',
    minXp: 3001,
    maxXp: 5000,
    nextLevelName: undefined,
    progressPercent: 100,
    color: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
  };
};

const getTodayDateString = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getDayLabel = (dateStr: string): string => {
  const parts = dateStr.split('-');
  if (parts.length < 3) return '';
  const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  const labels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  return labels[d.getDay()] || '';
};

export const loadGamificationState = (): GamificationState => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_GAMIFICATION);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        totalXp: parsed.totalXp ?? 45,
        currentStreak: parsed.currentStreak ?? 1,
        longestStreak: parsed.longestStreak ?? 2,
        lastStudyDate: parsed.lastStudyDate || getTodayDateString(),
        totalCardsAnswered: parsed.totalCardsAnswered ?? 3,
        totalCorrectAnswers: parsed.totalCorrectAnswers ?? 3,
        securityCardsAnswered: parsed.securityCardsAnswered ?? 2,
        reviewedBancas: Array.isArray(parsed.reviewedBancas) ? parsed.reviewedBancas : ['Cebraspe'],
        unlockedBadgeIds: Array.isArray(parsed.unlockedBadgeIds) ? parsed.unlockedBadgeIds : ['primeiro_passo'],
        recentActivities: parsed.recentActivities || {}
      };
    }
  } catch (err) {
    console.error('Error loading gamification state', err);
  }

  // Initial seed state: Level 1 (Estagiário de TI, 45 XP) with 1st badge unlocked
  const today = getTodayDateString();
  return {
    totalXp: 45,
    currentStreak: 1,
    longestStreak: 2,
    lastStudyDate: today,
    totalCardsAnswered: 3,
    totalCorrectAnswers: 3,
    securityCardsAnswered: 2,
    reviewedBancas: ['Cebraspe'],
    unlockedBadgeIds: ['primeiro_passo'],
    recentActivities: {
      [today]: {
        date: today,
        dayLabel: getDayLabel(today),
        cardsReviewed: 3,
        xpEarned: 45
      }
    }
  };
};

export const saveGamificationState = (state: GamificationState): void => {
  try {
    localStorage.setItem(STORAGE_KEY_GAMIFICATION, JSON.stringify(state));
  } catch (err) {
    console.error('Error saving gamification state', err);
  }
};

export interface RegisterAnswerResult {
  newState: GamificationState;
  xpEarned: number;
  streakIncremented: boolean;
  newBadgesUnlocked: Badge[];
  leveledUp: boolean;
  previousLevel: UserLevel;
  currentLevel: UserLevel;
}

export const registerCardAnswer = (
  currentState: GamificationState,
  feedback: 'errei' | 'dificil' | 'bom' | 'facil',
  topicName?: string,
  bancaName?: string
): RegisterAnswerResult => {
  const previousLevel = getLevelInfo(currentState.totalXp).level;
  const today = getTodayDateString();
  const currentHour = new Date().getHours();

  // Sistema de XP:
  // - Acertar card (Fácil): +20 XP
  // - Acertar card (Bom): +15 XP
  // - Difícil: +10 XP
  // - Errei: +5 XP (recompensa o esforço)
  // - Manter streak diário: +50 XP bônus
  let xp = 0;
  const isCorrect = feedback === 'bom' || feedback === 'facil';
  if (feedback === 'facil') xp = 20;
  else if (feedback === 'bom') xp = 15;
  else if (feedback === 'dificil') xp = 10;
  else xp = 5; // Errei: +5 XP

  let newStreak = currentState.currentStreak;
  let streakIncremented = false;

  // Streak logic & 50 XP bonus
  if (!currentState.lastStudyDate) {
    newStreak = 1;
    streakIncremented = true;
    xp += 50; // Manter streak diário: +50 XP bônus
  } else if (currentState.lastStudyDate !== today) {
    const lastDate = new Date(currentState.lastStudyDate);
    const todayDate = new Date(today);
    const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      newStreak += 1;
      streakIncremented = true;
      xp += 50; // Manter streak diário: +50 XP bônus
    } else if (diffDays > 1) {
      newStreak = 1;
    }
  }

  const longestStreak = Math.max(currentState.longestStreak, newStreak);
  const totalCardsAnswered = currentState.totalCardsAnswered + 1;
  const totalCorrectAnswers = currentState.totalCorrectAnswers + (isCorrect ? 1 : 0);
  const totalXp = currentState.totalXp + xp;

  // Track security cards
  const isSecurity = topicName && topicName.toLowerCase().includes('seguran');
  const securityCardsAnswered = currentState.securityCardsAnswered + (isSecurity ? 1 : 0);

  // Track bancas
  const reviewedBancas = [...currentState.reviewedBancas];
  if (bancaName && !reviewedBancas.includes(bancaName)) {
    reviewedBancas.push(bancaName);
  }

  // Update daily activity
  const recentActivities = { ...currentState.recentActivities };
  const existingTodayActivity = recentActivities[today] || {
    date: today,
    dayLabel: getDayLabel(today),
    cardsReviewed: 0,
    xpEarned: 0
  };

  const updatedTodayCards = existingTodayActivity.cardsReviewed + 1;

  recentActivities[today] = {
    ...existingTodayActivity,
    cardsReviewed: updatedTodayCards,
    xpEarned: existingTodayActivity.xpEarned + xp
  };

  // Check Badges
  // 1. "Primeiro Passo": Revise 1 flashcard
  // 2. "Foco Total": Revise 20 cards em um dia
  // 3. "Semana de Ouro": Streak de 7 dias
  // 4. "Mestre da Segurança": Revise 50 cards de Segurança da Informação
  // 5. "Gabaritando Bancas": Revise cards de 3 bancas diferentes
  // 6. "Madrugador": Revise cards antes das 8h da manhã
  const newBadgesUnlocked: Badge[] = [];
  const currentUnlockedIds = new Set(currentState.unlockedBadgeIds);

  if (totalCardsAnswered >= 1 && !currentUnlockedIds.has('primeiro_passo')) {
    currentUnlockedIds.add('primeiro_passo');
    const b = ALL_BADGES.find(x => x.id === 'primeiro_passo');
    if (b) newBadgesUnlocked.push({ ...b, unlockedAt: today });
  }

  if (updatedTodayCards >= 20 && !currentUnlockedIds.has('foco_total')) {
    currentUnlockedIds.add('foco_total');
    const b = ALL_BADGES.find(x => x.id === 'foco_total');
    if (b) newBadgesUnlocked.push({ ...b, unlockedAt: today });
  }

  if (newStreak >= 7 && !currentUnlockedIds.has('semana_de_ouro')) {
    currentUnlockedIds.add('semana_de_ouro');
    const b = ALL_BADGES.find(x => x.id === 'semana_de_ouro');
    if (b) newBadgesUnlocked.push({ ...b, unlockedAt: today });
  }

  if (securityCardsAnswered >= 50 && !currentUnlockedIds.has('mestre_seguranca')) {
    currentUnlockedIds.add('mestre_seguranca');
    const b = ALL_BADGES.find(x => x.id === 'mestre_seguranca');
    if (b) newBadgesUnlocked.push({ ...b, unlockedAt: today });
  }

  if (reviewedBancas.length >= 3 && !currentUnlockedIds.has('gabaritando_bancas')) {
    currentUnlockedIds.add('gabaritando_bancas');
    const b = ALL_BADGES.find(x => x.id === 'gabaritando_bancas');
    if (b) newBadgesUnlocked.push({ ...b, unlockedAt: today });
  }

  if (currentHour < 8 && !currentUnlockedIds.has('madrugador')) {
    currentUnlockedIds.add('madrugador');
    const b = ALL_BADGES.find(x => x.id === 'madrugador');
    if (b) newBadgesUnlocked.push({ ...b, unlockedAt: today });
  }

  const newState: GamificationState = {
    totalXp,
    currentStreak: newStreak,
    longestStreak,
    lastStudyDate: today,
    totalCardsAnswered,
    totalCorrectAnswers,
    securityCardsAnswered,
    reviewedBancas,
    unlockedBadgeIds: Array.from(currentUnlockedIds),
    recentActivities
  };

  saveGamificationState(newState);

  const currentLevel = getLevelInfo(totalXp).level;
  const leveledUp = currentLevel !== previousLevel;

  return {
    newState,
    xpEarned: xp,
    streakIncremented,
    newBadgesUnlocked,
    leveledUp,
    previousLevel,
    currentLevel
  };
};

export const getWeeklyChartData = (activities: Record<string, DayActivity>): DayActivity[] => {
  const result: DayActivity[] = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    const dayLabel = getDayLabel(dateStr);

    const existing = activities[dateStr];
    if (existing) {
      result.push(existing);
    } else {
      result.push({
        date: dateStr,
        dayLabel,
        cardsReviewed: 0,
        xpEarned: 0
      });
    }
  }

  return result;
};

export const MOCK_LEADERBOARD: LeaderboardUser[] = [
  {
    id: 'user_1',
    name: 'Carlos Mendes',
    targetRole: 'Auditor Federal de Controle (TCU TI)',
    weeklyXp: 1840,
    avatarColor: 'bg-emerald-500'
  },
  {
    id: 'user_2',
    name: 'Juliana Rocha',
    targetRole: 'Analista Judiciário (TRF TI)',
    weeklyXp: 1520,
    avatarColor: 'bg-indigo-500'
  },
  {
    id: 'user_3',
    name: 'Matheus Vieira',
    targetRole: 'Analista do Banco Central (Bacen TI)',
    weeklyXp: 1390,
    avatarColor: 'bg-amber-500'
  },
  {
    id: 'user_4',
    name: 'Renata Albuquerque',
    targetRole: 'Perita Criminal Federal (PF TI)',
    weeklyXp: 1120,
    avatarColor: 'bg-purple-500'
  },
  {
    id: 'user_5',
    name: 'Felipe Santos',
    targetRole: 'Analista de Sistemas (Dataprev)',
    weeklyXp: 980,
    avatarColor: 'bg-sky-500'
  }
];
