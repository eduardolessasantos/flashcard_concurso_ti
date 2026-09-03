import React, { useState, useRef, useEffect } from 'react';
import { HandwrittenNote, HighlightedTerm } from '../types';
import { 
  Sparkles, 
  Pin, 
  Tag, 
  Lightbulb, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Compass, 
  BookOpen, 
  ArrowRight, 
  GraduationCap,
  ChevronsUpDown,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface HandwrittenNoteViewProps {
  note: HandwrittenNote;
}

export const HandwrittenNoteView: React.FC<HandwrittenNoteViewProps> = ({ note }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

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

  const getScrollbarClass = () => {
    switch (note.colorTheme) {
      case 'green':
        return 'scrollbar-chalk-green';
      case 'rose':
      case 'pink':
        return 'scrollbar-chalk-rose';
      case 'cyan':
        return 'scrollbar-chalk-cyan';
      case 'yellow':
      default:
        return 'scrollbar-chalk-yellow';
    }
  };

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const checkScroll = () => {
      if (el) {
        setHasScroll(el.scrollHeight > el.clientHeight + 10);
      }
    };
    checkScroll();
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => ro.disconnect();
  }, [note, isExpanded]);

  // Helper to render text with ==highlighted== spans in chalk style
  const renderFormattedHandwritten = (content: string) => {
    const parts = content.split(/(==[^=]+==)/g);
    return parts.map((part, index) => {
      if (part.startsWith('==') && part.endsWith('==')) {
        const text = part.slice(2, -2);
        return (
          <span 
            key={index} 
            className="bg-amber-400/20 text-amber-200 border-b-2 border-amber-400 px-1 py-0.5 rounded font-bold shadow-xs mx-0.5"
          >
            {text}
          </span>
        );
      }
      return part;
    });
  };

  const getTermBadgeStyle = (cor?: HighlightedTerm['cor']) => {
    switch (cor) {
      case 'green':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'cyan':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'rose':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case 'yellow':
      case 'amber':
      default:
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    }
  };

  return (
    <div className="relative my-5 group">
      {/* Decorative Chalkboard Tag / Rail Header */}
      <div 
        className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full border ${styleConfig.chalkTape} shadow-md z-10 backdrop-blur-sm flex items-center justify-center`}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          QUADRO DE ANOTAÇÕES & ANÁLISE DE PROVA
        </span>
      </div>

      {/* Main Chalkboard Card (Quadro Negro com Altura Uniforme e Barra de Rolagem) */}
      <div 
        className={`w-full rounded-2xl border-2 ${styleConfig.border} ${styleConfig.cardBg} p-5 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-indigo-400/50 flex flex-col ${
          isExpanded ? 'max-h-none' : 'max-h-[480px] sm:max-h-[510px]'
        }`}
      >
        {/* Header with Title and Topic Tag (Fixo no Topo do Quadro) */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <Pin className="w-4 h-4 text-amber-400 rotate-45 shrink-0" />
            <h4 className={`text-base sm:text-lg font-bold font-handwriting tracking-wide truncate ${styleConfig.title}`}>
              {note.title}
            </h4>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${styleConfig.badge} flex items-center gap-1 font-sans`}>
              <Tag className="w-3 h-3" />
              {note.topicTag}
            </span>

            {/* Scroll Indicator Pill */}
            {hasScroll && !isExpanded && (
              <span className="hidden sm:flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800/90 text-amber-300 border border-amber-500/30">
                <ChevronsUpDown className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>Rolagem Ativa</span>
              </span>
            )}

            {/* Height Expand/Collapse Button */}
            {(hasScroll || isExpanded) && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 sm:px-2 sm:py-0.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-colors flex items-center gap-1 text-xs cursor-pointer"
                title={isExpanded ? "Recolher para tamanho padrão uniforme" : "Expandir quadro completo"}
              >
                {isExpanded ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] font-mono hidden sm:inline">Padrão</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-[10px] font-mono hidden sm:inline">Expandir</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Content Container (Área Rolável com Barra Estilizada) */}
        <div 
          ref={contentRef}
          tabIndex={0}
          className={`overflow-y-auto pr-2 sm:pr-3 space-y-4 flex-1 ${getScrollbarClass()} focus:outline-none`}
        >

        {/* Optional Header Note / Chalk Callout */}
        {note.headerNote && (
          <div className={`mb-3.5 px-3.5 py-2 rounded-xl border ${styleConfig.calloutBg} text-xs font-handwriting font-bold flex items-center gap-2`}>
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="leading-snug">{note.headerNote}</span>
          </div>
        )}

        {/* Handwritten Body Content (Quadro Negro com Letras Claras) */}
        <div className={`text-sm sm:text-base font-handwriting leading-relaxed ${styleConfig.body} whitespace-pre-line tracking-wide drop-shadow-xs`}>
          {renderFormattedHandwritten(note.handwrittenContent)}
        </div>

        {/* ================= REAL EXAM QUESTION ANALYSIS (RAIO-X DE PROVA NO QUADRO) ================= */}
        {note.realExamQuestion && (
          <div className="mt-6 pt-5 border-t-2 border-dashed border-slate-700/80 space-y-5">
            {/* Exam Header */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-inner">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-300 font-black text-xs">
                  {note.realExamQuestion.banca}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                      Questão Real de Concurso
                    </span>
                    <span className="text-xs font-bold text-slate-200">
                      {note.realExamQuestion.banca}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    {note.realExamQuestion.orgaoAno}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-handwriting">
                <BookOpen className="w-4 h-4" />
                <span>Raio-X Analítico de Concurso</span>
              </div>
            </div>

            {/* Question Statement with chalk style */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 font-sans text-xs sm:text-sm text-slate-200 leading-relaxed shadow-md">
              <p className="font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-2 font-mono">
                Enunciado Oficial:
              </p>
              <div className="whitespace-pre-line">
                {renderFormattedHandwritten(note.realExamQuestion.enunciado)}
              </div>
            </div>

            {/* Highlighted Terms & Structural Roles (Termos Grifados) */}
            {note.realExamQuestion.termosGrifados && note.realExamQuestion.termosGrifados.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 font-sans">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Termos Grifados da Questão & Análise Estrutural / Regras:</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {note.realExamQuestion.termosGrifados.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-slate-700 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${getTermBadgeStyle(item.cor)}`}>
                          {item.termo}
                        </span>
                        <span className="text-[10px] font-sans text-slate-400 uppercase tracking-wider font-semibold">
                          Item #{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-indigo-300 font-sans">
                        {item.papel}
                      </p>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {item.regra}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Alternatives Breakdown */}
            {note.realExamQuestion.alternativas && note.realExamQuestion.alternativas.length > 0 && (
              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">
                  Análise Crítica das Alternativas de Prova:
                </p>
                <div className="space-y-2">
                  {note.realExamQuestion.alternativas.map((alt, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl border text-xs leading-relaxed transition-colors ${
                        alt.correta 
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200' 
                          : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold font-mono ${
                          alt.correta 
                            ? 'bg-emerald-500 text-slate-950' 
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {alt.letra}
                        </span>
                        <div className="space-y-1 flex-1">
                          <p className="font-semibold text-slate-200">
                            {renderFormattedHandwritten(alt.texto)}
                          </p>
                          <p className={`text-[11px] ${alt.correta ? 'text-emerald-300' : 'text-slate-400'}`}>
                            {alt.correta ? '✅ ' : '❌ '} {alt.comentario}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How to Read & Solve Step-by-Step ("Como Ler e Responder na Hora da Prova") */}
            {note.realExamQuestion.comoLerPassoAPasso && note.realExamQuestion.comoLerPassoAPasso.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-950 border border-indigo-900/50 space-y-3 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 font-sans uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-indigo-400" />
                  <span>Método de Resolução: Como Ler Esta Questão e Acertar com Segurança</span>
                </div>

                <div className="space-y-2">
                  {note.realExamQuestion.comoLerPassoAPasso.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center shrink-0 text-[11px] font-bold font-mono">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed font-sans pt-0.5">
                        {renderFormattedHandwritten(step)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Official Answer & Pedagogical Conclusion */}
            <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-emerald-300 font-sans">Gabarito Oficial da Banca:</span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono font-black text-xs shadow-xs">
                  {note.realExamQuestion.gabaritoOficial}
                </span>
              </div>
              {note.realExamQuestion.conclusaoPedagogica && (
                <p className="text-emerald-200/90 font-sans text-xs w-full sm:w-auto">
                  💡 {note.realExamQuestion.conclusaoPedagogica}
                </p>
              )}
            </div>
          </div>
        )}

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

        {/* Bottom Scroll Indicator Bar (Exibido quando há rolagem ativa) */}
        {hasScroll && !isExpanded && (
          <div className="shrink-0 pt-2.5 mt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-sans">
            <span className="flex items-center gap-1.5 text-amber-300/80 font-handwriting">
              <ChevronsUpDown className="w-3.5 h-3.5 text-amber-400" />
              Role no quadro para navegar por todos os esquemas e análises
            </span>
            <button
              onClick={() => setIsExpanded(true)}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              Expandir
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

