import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Flame, 
  Target, 
  Award,
  BarChart3
} from 'lucide-react';
import { ReviewSessionStats, Flashcard } from '../types';

interface StatsDashboardProps {
  stats: ReviewSessionStats;
  queueLength: number;
  totalCardsCount: number;
  allCards: Flashcard[];
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({
  stats,
  queueLength,
  totalCardsCount,
  allCards,
}) => {
  const { totalRevisados, erreiCount, dificilCount, bomCount, facilCount, cardsDominados } = stats;

  // Accuracy calculation: Bom (1.0), Facil (1.0), Dificil (0.5), Errei (0.0)
  const acertosTotal = bomCount + facilCount + (dificilCount * 0.5);
  const accuracyPercent = totalRevisados > 0 
    ? Math.round((acertosTotal / totalRevisados) * 100) 
    : 0;

  // Breakdown by Banca
  const bancaCounts = allCards.reduce((acc, card) => {
    acc[card.banca] = (acc[card.banca] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {/* 1. Cards na Fila Ativa */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-xs font-medium">Fila Ativa (SRS)</span>
          <Layers className="w-4 h-4 text-blue-400" />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-white">{queueLength}</span>
          <span className="text-xs text-slate-500">/ {totalCardsCount} cards</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
          <div 
            className="bg-blue-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${totalCardsCount > 0 ? (queueLength / totalCardsCount) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* 2. Taxa de Acerto */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-xs font-medium">Taxa de Acerto</span>
          <Target className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className={`text-2xl font-bold ${
            accuracyPercent >= 70 ? 'text-emerald-400' : accuracyPercent >= 50 ? 'text-amber-400' : 'text-slate-200'
          }`}>
            {accuracyPercent}%
          </span>
          <span className="text-xs text-slate-500">desempenho</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-300 ${
              accuracyPercent >= 70 ? 'bg-emerald-500' : accuracyPercent >= 50 ? 'bg-amber-500' : 'bg-rose-500'
            }`}
            style={{ width: `${accuracyPercent}%` }}
          />
        </div>
      </div>

      {/* 3. Revisões na Sessão */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-xs font-medium">Revisões Feitas</span>
          <Flame className="w-4 h-4 text-amber-400" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white">{totalRevisados}</span>
          <div className="flex items-center gap-1 text-[11px]">
            <span className="text-emerald-400 flex items-center">+{bomCount + facilCount}</span>
            <span className="text-rose-400 flex items-center">-{erreiCount}</span>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 mt-1">
          {erreiCount > 0 ? `${erreiCount} re-enfileirados` : 'Sem erros na rodada'}
        </p>
      </div>

      {/* 4. Cards Dominados */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-xs font-medium">Dominados (Fácil)</span>
          <Award className="w-4 h-4 text-purple-400" />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-purple-400">{cardsDominados}</span>
          <span className="text-xs text-slate-500">
            ({totalCardsCount > 0 ? Math.round((cardsDominados / totalCardsCount) * 100) : 0}%)
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-1">
          Retirados da fila atual
        </p>
      </div>
    </div>
  );
};
