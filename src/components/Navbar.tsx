import React from 'react';
import { 
  BookOpen, 
  RotateCcw, 
  PlusCircle, 
  ListFilter, 
  Download, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  queueCount: number;
  totalCards: number;
  masteredCount: number;
  accuracyRate: number;
  onResetSession: () => void;
  onOpenAddModal: () => void;
  onOpenListModal: () => void;
  onOpenExportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  queueCount,
  totalCards,
  masteredCount,
  accuracyRate,
  onResetSession,
  onOpenAddModal,
  onOpenListModal,
  onOpenExportModal,
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-30 px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
              <BookOpen className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Flashcards TI Concursos
                </h1>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                  Dev & SRS
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                FGV • Cebraspe • Cesgranrio | Engenharia, Linguagens, BD & Arquitetura
              </p>
            </div>
          </div>

          {/* Mobile Quick Stats */}
          <div className="flex md:hidden items-center gap-2 text-xs">
            <span className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300">
              Fila: <strong className="text-blue-400">{queueCount}</strong>
            </span>
            <span className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300">
              Acerto: <strong className="text-emerald-400">{accuracyRate}%</strong>
            </span>
          </div>
        </div>

        {/* Action Controls & Navigation */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            title="Criar novo flashcard"
          >
            <PlusCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Novo Card</span>
          </button>

          <button
            onClick={onOpenListModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            title="Gerenciar banco de questões"
          >
            <ListFilter className="w-3.5 h-3.5 text-indigo-400" />
            <span>Banco ({totalCards})</span>
          </button>

          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            title="Gerar código HTML único (Tailwind + JS Vanilla)"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>HTML Único</span>
          </button>

          <button
            onClick={onResetSession}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            title="Reiniciar fila de repetição espaçada"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Reiniciar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
