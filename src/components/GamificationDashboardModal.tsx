import React, { useState } from 'react';
import { 
  X, 
  Flame, 
  Trophy, 
  Award, 
  Target, 
  Footprints, 
  ShieldCheck, 
  Sunrise, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  Crown,
  Calendar,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { 
  GamificationState, 
  getLevelInfo, 
  ALL_BADGES, 
  getWeeklyChartData, 
  MOCK_LEADERBOARD 
} from '../services/gamification';

interface GamificationDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  gamification: GamificationState;
  userName?: string;
}

export const GamificationDashboardModal: React.FC<GamificationDashboardModalProps> = ({
  isOpen,
  onClose,
  gamification,
  userName = 'Você'
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'badges' | 'ranking'>('overview');

  if (!isOpen) return null;

  const levelInfo = getLevelInfo(gamification.totalXp);
  const weekActivities = getWeeklyChartData(gamification.recentActivities || {});
  const maxCardsInWeek = Math.max(...weekActivities.map(a => a.cardsReviewed), 15);

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints': return Footprints;
      case 'Target': return Target;
      case 'Flame': return Flame;
      case 'ShieldCheck': return ShieldCheck;
      case 'Award': return Award;
      case 'Sunrise': return Sunrise;
      default: return Trophy;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Painel de Gamificação & Conquistas
              </h2>
              <p className="text-xs text-slate-400">
                Acompanhe seu nível, ofensiva diária e ritmo de estudos
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 pt-3 border-b border-slate-800 bg-slate-900/50 flex gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Visão Geral & Gráfico
          </button>
          <button
            onClick={() => setActiveTab('badges')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'badges'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Conquistas</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-indigo-500/20 text-indigo-300">
              {gamification.unlockedBadgeIds.length}/{ALL_BADGES.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('ranking')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'ranking'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Ranking Semanal
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Main Level Hero Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border border-slate-800 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Nível Atual do Servidor em Treinamento
                    </span>
                    <h3 className="text-2xl font-black text-white flex items-center gap-2">
                      <Crown className="w-6 h-6 text-amber-400" />
                      <span>{levelInfo.level}</span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Você acumulou <strong className="text-indigo-400">{gamification.totalXp} XP</strong> no total.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800 self-start sm:self-auto">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {gamification.currentStreak} {gamification.currentStreak === 1 ? 'dia' : 'dias'}
                      </div>
                      <div className="text-[10px] text-slate-400">Ofensiva Atual (Streak)</div>
                    </div>
                  </div>
                </div>

                {/* Progress bar to next level */}
                <div className="mt-5 space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Progresso do Nível</span>
                    <span className="text-indigo-400">{levelInfo.progressPercent}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-all duration-500"
                      style={{ width: `${Math.max(4, levelInfo.progressPercent)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>{levelInfo.minXp} XP</span>
                    {levelInfo.nextLevelName ? (
                      <span>Próximo: {levelInfo.nextLevelName} ({levelInfo.maxXp} XP)</span>
                    ) : (
                      <span className="text-emerald-400 font-bold">Nível Máximo Atingido!</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Fast Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Cards Revisados</div>
                  <div className="text-lg font-bold text-white">{gamification.totalCardsAnswered}</div>
                </div>
                <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Taxa de Retenção</div>
                  <div className="text-lg font-bold text-emerald-400">
                    {gamification.totalCardsAnswered > 0 
                      ? `${Math.round((gamification.totalCorrectAnswers / gamification.totalCardsAnswered) * 100)}%` 
                      : '100%'}
                  </div>
                </div>
                <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Maior Ofensiva</div>
                  <div className="text-lg font-bold text-amber-400">{gamification.longestStreak} dias</div>
                </div>
                <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Conquistas</div>
                  <div className="text-lg font-bold text-indigo-400">
                    {gamification.unlockedBadgeIds.length} / {ALL_BADGES.length}
                  </div>
                </div>
              </div>

              {/* Weekly Activity Bar Chart */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-indigo-400" />
                      <span>Atividade dos Últimos 7 Dias</span>
                    </h4>
                    <p className="text-[11px] text-slate-400">Volume diário de flashcards revisados</p>
                  </div>
                  <span className="text-xs text-indigo-400 font-mono bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                    Semana Ativa
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-2 items-end h-36 pt-4 px-2">
                  {weekActivities.map((day, idx) => {
                    const heightPercent = maxCardsInWeek > 0 
                      ? Math.min(100, Math.max(8, Math.round((day.cardsReviewed / maxCardsInWeek) * 100)))
                      : 8;
                    const isToday = idx === 6;

                    return (
                      <div key={day.date} className="flex flex-col items-center gap-2 h-full justify-end group">
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-white transition-colors">
                          {day.cardsReviewed > 0 ? day.cardsReviewed : ''}
                        </span>
                        <div 
                          className={`w-full rounded-lg transition-all duration-300 ${
                            isToday 
                              ? 'bg-gradient-to-t from-indigo-600 to-sky-400 shadow-md shadow-indigo-500/30' 
                              : day.cardsReviewed > 0 
                                ? 'bg-indigo-500/50 group-hover:bg-indigo-500' 
                                : 'bg-slate-800/60'
                          }`}
                          style={{ height: `${heightPercent}%` }}
                        />
                        <span className={`text-[11px] font-semibold ${isToday ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>
                          {day.dayLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: BADGES */}
          {activeTab === 'badges' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400">
                Complete missões de estudo para desbloquear distintivos e acelerar seus ganhos de experiência:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ALL_BADGES.map((badge) => {
                  const isUnlocked = gamification.unlockedBadgeIds.includes(badge.id);
                  const IconComponent = getBadgeIcon(badge.iconName);

                  return (
                    <div 
                      key={badge.id}
                      className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                        isUnlocked 
                          ? 'bg-slate-900 border-indigo-500/40 shadow-sm' 
                          : 'bg-slate-950/60 border-slate-800 opacity-60'
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                        isUnlocked 
                          ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' 
                          : 'bg-slate-800 text-slate-500 border border-slate-700'
                      }`}>
                        {isUnlocked ? (
                          <IconComponent className="w-5 h-5" />
                        ) : (
                          <Lock className="w-5 h-5" />
                        )}
                      </div>

                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white truncate">{badge.title}</h4>
                          {isUnlocked && (
                            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              Concluído
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">{badge.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: RANKING */}
          {activeTab === 'ranking' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400">
                Ranking semanal dos concurseiros mais ativos em TI. Atualizado todo domingo à meia-noite:
              </div>

              <div className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
                {/* Current User Row */}
                <div className="p-3.5 bg-indigo-950/40 flex items-center justify-between border-b border-indigo-500/30">
                  <div className="flex items-center gap-3">
                    <span className="w-6 text-center font-bold text-sm text-indigo-400">#4</span>
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                      VC
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span>{userName} (Você)</span>
                        <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.2 rounded-full">Seu Perfil</span>
                      </div>
                      <div className="text-[10px] text-slate-400">{levelInfo.level}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-amber-400">{gamification.totalXp} XP</span>
                  </div>
                </div>

                {/* Other simulated top users */}
                {MOCK_LEADERBOARD.map((usr, i) => (
                  <div key={usr.id} className="p-3.5 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-center font-bold text-xs text-slate-400">
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
                      </span>
                      <div className={`w-8 h-8 rounded-full ${usr.avatarColor} flex items-center justify-center text-white font-bold text-xs`}>
                        {usr.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{usr.name}</div>
                        <div className="text-[10px] text-slate-400 truncate max-w-[200px]">{usr.targetRole}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-200">{usr.weeklyXp} XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Pratique diariamente para não zerar sua ofensiva</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all"
          >
            Continuar Estudando
          </button>
        </div>

      </div>
    </div>
  );
};
