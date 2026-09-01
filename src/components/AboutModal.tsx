import React from 'react';
import { X, Info, Layers, BookOpen, Brain, Zap, Target, Award } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Sobre o DevConcursos TI</h2>
              <p className="text-xs text-slate-400">Missão, Metodologia de Estudo Ativo e Repetição Espaçada</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-400" />
              Nossa Missão
            </h3>
            <p className="text-xs text-slate-300">
              O <strong>DevConcursos TI</strong> nasceu para transformar a preparação de candidatos e profissionais de Tecnologia da Informação para concursos públicos de alto nível (Tribunais, Carreiras Fiscais, Bancárias, Policiais e Órgãos Federais/Estaduais).
            </p>
            <p className="text-xs text-slate-300">
              Combinamos teoria aprofundada estruturada em tópicos de editais com a mais eficiente técnica de memorização científica: o <strong>Spaced Repetition System (SRS)</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Brain className="w-4 h-4 text-emerald-400" />
              Como Funciona a Metodologia SRS?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60">
                <div className="font-bold text-rose-400 mb-1 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Errei / Difícil
                </div>
                <p className="text-slate-400">
                  O algoritmo reintroduz o cartão imediatamente na sessão para consolidar o conceito antes de avançar.
                </p>
              </div>

              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60">
                <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Bom / Fácil
                </div>
                <p className="text-slate-400">
                  O intervalo de reexibição é espaçado, economizando seu tempo precioso e combatendo a curva do esquecimento de Ebbinghaus.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              Disciplinas Cobertas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-slate-800/40 rounded-lg border border-slate-700/40">🔒 Segurança da Informação</div>
              <div className="p-2 bg-slate-800/40 rounded-lg border border-slate-700/40">🏛️ Governança (ITIL/COBIT)</div>
              <div className="p-2 bg-slate-800/40 rounded-lg border border-slate-700/40">🤖 Inteligência Artificial & RAG</div>
              <div className="p-2 bg-slate-800/40 rounded-lg border border-slate-700/40">📊 BI & Data Warehouse</div>
              <div className="p-2 bg-slate-800/40 rounded-lg border border-slate-700/40">⚖️ Legislação (LGPD, LAI)</div>
              <div className="p-2 bg-slate-800/40 rounded-lg border border-slate-700/40">🔤 Português & RLM</div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
