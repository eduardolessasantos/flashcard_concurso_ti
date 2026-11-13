import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  ShieldCheck, 
  Scale, 
  FileText, 
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Topico } from '../types';

export interface FeaturedCarouselItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
  gradient: string;
  borderHover: string;
  buttonLabel: string;
  action: () => void;
  isExternalLink?: boolean;
  linkUrl?: string;
}

interface ContentCarouselProps {
  onStartStudy: (topic?: Topico) => void;
  onNavigateToConcursos: () => void;
  onNavigateToCarreira: () => void;
  onNavigateToGuides: () => void;
}

export const ContentCarousel: React.FC<ContentCarouselProps> = ({
  onStartStudy,
  onNavigateToConcursos,
  onNavigateToCarreira,
  onNavigateToGuides,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const items: FeaturedCarouselItem[] = [
    {
      id: 'srs-cards',
      badge: 'Metodologia Ativa',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      title: 'Flashcards com Repetição Espaçada (SRS)',
      description: 'Mais de 1.200 cartões comentados pelo algoritmo Leitner. Fixe conceitos de TI antes da curva do esquecimento de Ebbinghaus.',
      tag: 'Prática Ativa • Algoritmo SRS',
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      gradient: 'from-indigo-950/40 via-slate-900/90 to-slate-950',
      borderHover: 'hover:border-indigo-500/40',
      buttonLabel: 'Praticar Flashcards Agora',
      action: () => onStartStudy(),
    },
    {
      id: 'guia-iso27002',
      badge: 'Segurança da Informação',
      badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      title: 'Guia ABNT NBR ISO/IEC 27002:2022',
      description: 'Análise profunda da nova estrutura: 4 temas, 93 controles, os 11 controles inéditos (Threat Intelligence, Cloud, DevSecOps) e questões comentadas.',
      tag: 'Artigo Dedicado • Edital 2026',
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      gradient: 'from-rose-950/30 via-slate-900/90 to-slate-950',
      borderHover: 'hover:border-rose-500/40',
      buttonLabel: 'Ler Caderno Teórico ISO 27002',
      isExternalLink: true,
      linkUrl: '/guias/iso-27002-2022/',
      action: () => { window.location.href = '/guias/iso-27002-2022/'; },
    },
    {
      id: 'guia-lgpd',
      badge: 'Legislação Aplicada',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      title: 'LGPD Esquematizada para Concursos de TI',
      description: 'As 10 bases legais de tratamento de dados, distinção entre Controlador, Operador e DPO, dados sensíveis vs anonimizados e pegadinhas de bancas.',
      tag: 'Artigo Dedicado • Lei 13.709/18',
      icon: <Scale className="w-5 h-5 text-cyan-400" />,
      gradient: 'from-cyan-950/30 via-slate-900/90 to-slate-950',
      borderHover: 'hover:border-cyan-500/40',
      buttonLabel: 'Ler Caderno Teórico LGPD',
      isExternalLink: true,
      linkUrl: '/guias/lgpd-concursos/',
      action: () => { window.location.href = '/guias/lgpd-concursos/'; },
    },
    {
      id: 'guia-itil-cobit',
      badge: 'Governança de TI',
      badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
      title: 'Governança Descomplicada: ITIL 4 vs COBIT 2019',
      description: 'Matriz comparativa completa: distinção entre Governança e Gestão, os 5 domínios do COBIT 2019 (EDM/APO/BAI/DSS/MEA) e o SVS do ITIL 4.',
      tag: 'Artigo Dedicado • ISACA & Axelos',
      icon: <FileText className="w-5 h-5 text-violet-400" />,
      gradient: 'from-violet-950/30 via-slate-900/90 to-slate-950',
      borderHover: 'hover:border-violet-500/40',
      buttonLabel: 'Ler Comparativo ITIL vs COBIT',
      isExternalLink: true,
      linkUrl: '/guias/itil4-cobit2019/',
      action: () => { window.location.href = '/guias/itil4-cobit2019/'; },
    },
    {
      id: 'guia-carreira',
      badge: 'Planejamento Profissional',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      title: 'Guia da Carreira Pública de TI 2026',
      description: 'Salários reais de R$ 10k a R$ 35k em Tribunais, Carreiras Fiscais e Bancos Públicos, plano de estudos de 6 meses e rotina do cargo.',
      tag: 'Carreiras de Estado • Remunerações',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      gradient: 'from-emerald-950/30 via-slate-900/90 to-slate-950',
      borderHover: 'hover:border-emerald-500/40',
      buttonLabel: 'Explorar Salários & Carreiras',
      action: onNavigateToCarreira,
    },
    {
      id: 'preparatorios-comparator',
      badge: 'Cursos & Provas de TI',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      title: 'Comparador de Preparatórios & Cursos Modulares',
      description: 'Análise imparcial de plataformas (Provas de TI, Gran Cursos, Estratégia), módulos avulsos de Engenharia de Software e materiais recomendados.',
      tag: 'Vitrine • Análise de Mercado',
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      gradient: 'from-amber-950/30 via-slate-900/90 to-slate-950',
      borderHover: 'hover:border-amber-500/40',
      buttonLabel: 'Comparar Cursos & Apostilas',
      action: onNavigateToConcursos,
    },
    {
      id: 'biblioteca-guias',
      badge: 'Acervo Geral',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      title: 'Hub de Cadernos Teóricos & Resumos de Bolso',
      description: 'Coleção estruturada cobrindo Engenharia de Software, Modelagem Dimensional, SOLID, Redes, Inteligência Artificial e Direito Aplicado.',
      tag: 'Resumos Esquematizados • E-E-A-T',
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      gradient: 'from-blue-950/30 via-slate-900/90 to-slate-950',
      borderHover: 'hover:border-blue-500/40',
      buttonLabel: 'Acessar Biblioteca de Guias',
      action: onNavigateToGuides,
    },
  ];

  // Auto-slide effect every 5 seconds unless hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={containerRef}
    >
      {/* Header com título e controles manuais */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span>Navegue pelos Destaques & Conteúdos Principais</span>
            </h3>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Acesse flashcards, cadernos teóricos e pesquisas essenciais com 1 clique
            </p>
          </div>
        </div>

        {/* Botões de Navegação Anterior / Próximo */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Item anterior"
            className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Próximo item"
            className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Principal do Carrossel */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`w-full flex-shrink-0 p-6 sm:p-8 bg-gradient-to-br ${item.gradient} flex flex-col justify-between min-h-[240px] sm:min-h-[210px]`}
            >
              <div>
                {/* Badges superiores */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-800">
                    {item.icon}
                  </div>
                </div>

                {/* Título & Descrição */}
                <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>

              {/* Botão de Ação */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                <button
                  onClick={item.action}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/25 hover:scale-[1.02] active:scale-95"
                >
                  <span>{item.buttonLabel}</span>
                  {item.isExternalLink ? (
                    <ExternalLink className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>

                <div className="text-[11px] text-slate-500 font-mono">
                  {currentIndex + 1} de {items.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de Pontinhos (Dots) e Mini-Tabs */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para slide ${idx + 1}: ${item.title}`}
            className={`transition-all rounded-full ${
              idx === currentIndex
                ? 'w-7 h-2 bg-indigo-500'
                : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
