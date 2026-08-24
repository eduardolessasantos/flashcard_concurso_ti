import React from 'react';
import { HandwrittenNote } from '../types';
import { Sparkles, Pin, Tag, Lightbulb } from 'lucide-react';

interface HandwrittenNoteViewProps {
  note: HandwrittenNote;
}

export const HandwrittenNoteView: React.FC<HandwrittenNoteViewProps> = ({ note }) => {
  const isPostIt = note.paperStyle === 'postit';
  const isGrid = note.paperStyle === 'grid';

  const getColorClasses = () => {
    switch (note.colorTheme) {
      case 'yellow':
        return {
          cardBg: isGrid ? 'bg-chalkboard-grid' : 'bg-chalkboard',
          border: 'border-amber-500/40 shadow-amber-950/20',
          chalkTape: 'bg-amber-950/80 border-amber-500/50 text-amber-200',
          title: 'text-amber-200',
          body: 'text-slate-100',
          badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          calloutBg: 'bg-amber-950/40 border-amber-500/30 text-amber-200',
          annotationBg: 'bg-slate-900/90 border-amber-500/40 text-amber-200 shadow-sm'
        };
      case 'green':
        return {
          cardBg: isGrid ? 'bg-chalkboard-grid' : 'bg-chalkboard',
          border: 'border-emerald-500/40 shadow-emerald-950/20',
          chalkTape: 'bg-emerald-950/80 border-emerald-500/50 text-emerald-200',
          title: 'text-emerald-200',
          body: 'text-slate-100',
          badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          calloutBg: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200',
          annotationBg: 'bg-slate-900/90 border-emerald-500/40 text-emerald-200 shadow-sm'
        };
      case 'pink':
      case 'rose':
        return {
          cardBg: isGrid ? 'bg-chalkboard-grid' : 'bg-chalkboard',
          border: 'border-rose-500/40 shadow-rose-950/20',
          chalkTape: 'bg-rose-950/80 border-rose-500/50 text-rose-200',
          title: 'text-rose-200',
          body: 'text-slate-100',
          badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
          calloutBg: 'bg-rose-950/40 border-rose-500/30 text-rose-200',
          annotationBg: 'bg-slate-900/90 border-rose-500/40 text-rose-200 shadow-sm'
        };
      case 'cyan':
      default:
        return {
          cardBg: isGrid ? 'bg-chalkboard-grid' : 'bg-chalkboard',
          border: 'border-cyan-500/40 shadow-cyan-950/20',
          chalkTape: 'bg-cyan-950/80 border-cyan-500/50 text-cyan-200',
          title: 'text-cyan-200',
          body: 'text-slate-100',
          badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          calloutBg: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-200',
          annotationBg: 'bg-slate-900/90 border-cyan-500/40 text-cyan-200 shadow-sm'
        };
    }
  };

  const styleConfig = getColorClasses();

  return (
    <div className="relative my-5 group">
      {/* Decorative Chalkboard Tag / Rail Header */}
      <div 
        className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full border ${styleConfig.chalkTape} shadow-md z-10 backdrop-blur-sm flex items-center justify-center`}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          QUADRO DE ANOTAÇÕES
        </span>
      </div>

      {/* Main Chalkboard Card (Quadro Negro) */}
      <div className={`w-full rounded-2xl border-2 ${styleConfig.border} ${styleConfig.cardBg} p-5 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-indigo-400/50`}>
        
        {/* Header with Title and Topic Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <Pin className="w-4 h-4 text-amber-400 rotate-45 shrink-0" />
            <h4 className={`text-base sm:text-lg font-bold font-handwriting tracking-wide ${styleConfig.title}`}>
              {note.title}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${styleConfig.badge} flex items-center gap-1 font-sans`}>
              <Tag className="w-3 h-3" />
              {note.topicTag}
            </span>
          </div>
        </div>

        {/* Optional Header Note / Chalk Callout */}
        {note.headerNote && (
          <div className={`mb-3.5 px-3.5 py-2 rounded-xl border ${styleConfig.calloutBg} text-xs font-handwriting font-bold flex items-center gap-2`}>
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="leading-snug">{note.headerNote}</span>
          </div>
        )}

        {/* Handwritten Body Content (Quadro Negro com Letras Claras) */}
        <div className={`text-sm sm:text-base font-handwriting leading-relaxed ${styleConfig.body} whitespace-pre-line tracking-wide drop-shadow-xs`}>
          {note.handwrittenContent}
        </div>

        {/* Optional Formula / Diagram Box (Quadro Técnico Escuro) */}
        {note.diagramFormula && (
          <div className="mt-4 p-4 rounded-xl bg-slate-950/90 text-emerald-300 border border-slate-800 font-mono text-xs overflow-x-auto shadow-inner">
            <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1.5 pb-1 border-b border-slate-800/80 font-sans uppercase tracking-wider">
              <span>Esquema / Fórmula em Quadro</span>
            </div>
            <pre className="font-mono whitespace-pre leading-relaxed">{note.diagramFormula}</pre>
          </div>
        )}

        {/* Optional Chalk Annotations / Dicas Rápidas */}
        {note.annotations && note.annotations.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2.5">
            {note.annotations.map((ann, idx) => (
              <div 
                key={idx}
                className={`px-3 py-1.5 rounded-xl border ${styleConfig.annotationBg} font-handwriting text-xs sm:text-sm font-bold shadow-xs rotate-[-0.5deg] hover:rotate-0 transition-transform flex items-center gap-2`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{ann}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
