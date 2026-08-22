import React, { useState, useEffect, useRef } from 'react';
import { Flashcard, FeedbackType } from '../types';
import { 
  RotateCw, 
  Lightbulb, 
  Check, 
  X, 
  Code2, 
  GraduationCap,
  Sparkles,
  HelpCircle,
  CornerDownLeft
} from 'lucide-react';

interface FlashcardViewProps {
  card: Flashcard;
  currentIndex: number;
  totalInQueue: number;
  onFeedback: (feedback: FeedbackType) => void;
  onSkip?: () => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  card,
  currentIndex,
  totalInQueue,
  onFeedback,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
    setShowHint(false);
  }, [card.id]);

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped) {
        if (e.key === '1') {
          e.preventDefault();
          onFeedback('errei');
        } else if (e.key === '2') {
          e.preventDefault();
          onFeedback('dificil');
        } else if (e.key === '3') {
          e.preventDefault();
          onFeedback('bom');
        } else if (e.key === '4') {
          e.preventDefault();
          onFeedback('facil');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, onFeedback]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const getBancaBadgeStyle = (banca: string) => {
    switch (banca) {
      case 'Cebraspe':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'FGV':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Cesgranrio':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      default:
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      {/* 3D Flip Card Container with Ambient Glow */}
      <div className="relative group w-full h-[380px] sm:h-[400px] perspective-1000 select-none mb-8">
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl opacity-30 pointer-events-none transition-opacity group-hover:opacity-40" />
        
        <div
          ref={cardRef}
          onClick={handleCardClick}
          className={`relative w-full h-full rounded-[28px] sm:rounded-[32px] cursor-pointer transition-transform duration-500 transform-style-3d shadow-2xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* ================= FRONT OF CARD ================= */}
          <div className="absolute inset-0 w-full h-full bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between backface-hidden shadow-2xl transition-colors overflow-hidden">
            {/* Top Sleek Indicators & Badges */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                {/* 3-dot Window Indicator */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${getBancaBadgeStyle(card.banca)}`}>
                    {card.banca}
                  </span>
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 rounded-full">
                    {card.topico}
                  </span>
                  {card.tipo === 'certo_errado' ? (
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full">
                      Certo / Errado
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 rounded-full">
                      Conceitual
                    </span>
                  )}
                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Virar</span>
                </div>
              </div>

              {/* Subtopic banner */}
              <div className="text-xs text-indigo-400 font-medium mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="truncate">{card.subtopico}</span>
                {card.concurso && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 truncate">{card.concurso} {card.ano ? `(${card.ano})` : ''}</span>
                  </>
                )}
              </div>

              {/* Question Text */}
              <div className="max-h-[190px] sm:max-h-[200px] overflow-y-auto pr-1">
                <p className="text-slate-100 text-base sm:text-xl font-medium leading-relaxed">
                  {card.pergunta}
                </p>

                {/* Optional Code Snippet */}
                {card.trechoCodigo && (
                  <div className="mt-3 p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-emerald-300 overflow-x-auto">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1 border-b border-slate-800 pb-1">
                      <span className="flex items-center gap-1"><Code2 className="w-3 h-3 text-emerald-400" /> Código / Exemplo</span>
                    </div>
                    <pre className="whitespace-pre-wrap">{card.trechoCodigo}</pre>
                  </div>
                )}
              </div>
            </div>

            {/* Front Footer */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              {card.dica ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowHint(!showHint);
                  }}
                  className="flex items-center gap-1.5 text-xs text-amber-400/90 hover:text-amber-300 transition-colors bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-full border border-amber-500/20"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{showHint ? 'Ocultar Dica' : 'Ver Dica'}</span>
                </button>
              ) : <div />}

              <button
                type="button"
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs sm:text-sm font-bold transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2"
              >
                <span>VER RESPOSTA</span>
                <CornerDownLeft className="w-3.5 h-3.5 text-indigo-200" />
              </button>
            </div>

            {/* Hint Drawer */}
            {showHint && card.dica && (
              <div className="absolute inset-x-4 bottom-16 bg-slate-950/95 border border-amber-500/40 text-amber-200 text-xs p-4 rounded-2xl backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-bottom-2 z-10">
                <div className="flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5 text-amber-300">Dica de Especialista:</strong>
                    <p className="text-slate-300 leading-relaxed">{card.dica}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================= BACK OF CARD ================= */}
          <div className="absolute inset-0 w-full h-full bg-slate-900 border border-indigo-500/30 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between rotate-y-180 backface-hidden shadow-2xl overflow-hidden">
            {/* Back Header */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Gabarito & Análise:</span>
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${getBancaBadgeStyle(card.banca)}`}>
                    {card.banca}
                  </span>
                </div>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <RotateCw className="w-3 h-3" />
                  <span className="hidden sm:inline">Voltar à pergunta</span>
                </span>
              </div>

              {/* Core Answer */}
              <div className="my-2">
                {card.tipo === 'certo_errado' ? (
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-1.5 rounded-full font-black text-sm tracking-wider flex items-center gap-1.5 shadow-md ${
                      card.gabaritoOficial === 'CERTO'
                        ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-400/50'
                        : 'bg-rose-500 text-white ring-2 ring-rose-400/50'
                    }`}>
                      {card.gabaritoOficial === 'CERTO' ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <X className="w-4 h-4 stroke-[3]" />
                      )}
                      {card.gabaritoOficial}
                    </span>
                    <span className="text-xs text-slate-400">
                      Gabarito Oficial {card.banca}
                    </span>
                  </div>
                ) : (
                  <div className="p-3 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
                    <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-0.5">Resposta Direta:</span>
                    <p className="text-slate-100 text-base font-semibold">{card.resposta}</p>
                  </div>
                )}
              </div>

              {/* In-depth Rationale */}
              <div className="max-h-[170px] sm:max-h-[180px] overflow-y-auto pr-1 mt-2.5">
                <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Comentário e Fundamentação Teórica:
                  </span>
                  <p className="whitespace-pre-line text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {card.explicacao}
                  </p>
                </div>
              </div>
            </div>

            {/* Back Footer */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest">
              <span>Como foi seu desempenho? Avalie abaixo:</span>
              <span className="text-indigo-400 font-bold">SRS Leitner Ativo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sleek Learning Feedback Section */}
      <div className="w-full max-w-xl flex flex-col items-center">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">
          Feedback de Aprendizado
        </p>

        <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full">
          {/* 1. ERREI */}
          <button
            id="btn-feedback-errei"
            onClick={() => onFeedback('errei')}
            className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border transition-all group ${
              isFlipped
                ? 'border-red-500/30 bg-red-500/10 hover:bg-red-500/20 shadow-lg shadow-red-500/10 cursor-pointer active:scale-95'
                : 'border-red-500/20 bg-red-500/5 hover:bg-red-500/10 opacity-70 hover:opacity-100 cursor-pointer'
            }`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-base group-hover:scale-110 transition-transform">
              ✕
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-red-400 block">Errei</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">Repetir no fim (1)</span>
            </div>
          </button>

          {/* 2. DIFÍCIL */}
          <button
            id="btn-feedback-dificil"
            onClick={() => onFeedback('dificil')}
            className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border transition-all group ${
              isFlipped
                ? 'border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 shadow-lg shadow-orange-500/10 cursor-pointer active:scale-95'
                : 'border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10 opacity-70 hover:opacity-100 cursor-pointer'
            }`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-base group-hover:scale-110 transition-transform">
              !
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-orange-400 block">Difícil</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">Revisar no meio (2)</span>
            </div>
          </button>

          {/* 3. BOM */}
          <button
            id="btn-feedback-bom"
            onClick={() => onFeedback('bom')}
            className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border transition-all group ${
              isFlipped
                ? 'border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 shadow-lg shadow-blue-500/10 cursor-pointer active:scale-95'
                : 'border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 opacity-70 hover:opacity-100 cursor-pointer'
            }`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-base group-hover:scale-110 transition-transform">
              ✓
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-blue-400 block">Bom</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">Avançar fila (3)</span>
            </div>
          </button>

          {/* 4. FÁCIL */}
          <button
            id="btn-feedback-facil"
            onClick={() => onFeedback('facil')}
            className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border transition-all group ${
              isFlipped
                ? 'border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 shadow-lg shadow-emerald-500/10 cursor-pointer active:scale-95'
                : 'border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 opacity-70 hover:opacity-100 cursor-pointer'
            }`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-base group-hover:scale-110 transition-transform">
              ★
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-emerald-400 block">Fácil</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">Dominado (4)</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

