import React, { useState } from 'react';
import { 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  Brain, 
  TrendingUp, 
  Briefcase, 
  BookOpen, 
  Shield, 
  Database, 
  Server, 
  Code2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Building2, 
  Scale, 
  Clock, 
  Laptop, 
  Compass, 
  Zap, 
  Check, 
  ChevronRight, 
  Lock, 
  Cpu, 
  FileCheck,
  AlertCircle,
  GraduationCap
} from 'lucide-react';
import { Topico, Banca } from '../types';

interface HomePageLandingProps {
  onStartStudy: (topic?: Topico) => void;
  onNavigateToConcursos: () => void;
  onNavigateToCarreira: () => void;
  onNavigateToGuides: () => void;
  onNavigateToStatic: (route: 'sobre' | 'privacidade' | 'termos' | 'contato') => void;
  onOpenAuthModal?: () => void;
}

// Sample interactive cards for the Live Preview widget
interface InteractivePreviewCard {
  id: string;
  banca: Banca;
  topico: Topico;
  subtopico: string;
  concurso: string;
  ano: number;
  pergunta: string;
  resposta: 'CERTO' | 'ERRADO';
  explicacao: string;
  dica: string;
}

const SAMPLE_PREVIEW_CARDS: InteractivePreviewCard[] = [
  {
    id: 'p1',
    banca: 'Cebraspe',
    topico: 'Engenharia de Software',
    subtopico: 'Scrum (Guia Oficial 2020)',
    concurso: 'TCU - Auditor Federal de TI',
    ano: 2023,
    pergunta: 'No framework Scrum oficial (2020), o Scrum Master é o único membro com autoridade formal para cancelar uma Sprint caso a meta (Sprint Goal) se torne obsoleta antes do prazo.',
    resposta: 'ERRADO',
    explicacao: 'Conforme o Scrum Guide 2020 oficial, SOMENTE o Product Owner (PO) detém a autoridade para cancelar a Sprint se a meta (Sprint Goal) se tornar obsoleta. O Scrum Master atua como líder servidor e facilitador do processo, mas não tem poder decisório sobre o cancelamento.',
    dica: 'Pegadinha clássica do Cebraspe: cancelamento de Sprint é atribuição exclusiva do Product Owner!'
  },
  {
    id: 'p2',
    banca: 'Cebraspe',
    topico: 'Linguagens (Java/Python)',
    subtopico: 'Python 3 - Estruturas de Dados',
    concurso: 'SERPRO - Analista de Tecnologia',
    ano: 2023,
    pergunta: 'Em Python 3, tuplas e listas são tipos sequenciais e ambos suportam mutabilidade in-place, permitindo que qualquer elemento seja reatribuído diretamente via índice (ex: a[0] = 99).',
    resposta: 'ERRADO',
    explicacao: 'Em Python, tuplas (tuple) são estritamente IMUTÁVEIS (immutable sequence types). Tentativas de atribuir valor por índice a uma tupla geram TypeError: \'tuple\' object does not support item assignment. Apenas listas são mutáveis.',
    dica: 'Tuplas, strings e frozensets são sempre imutáveis em Python!'
  },
  {
    id: 'p3',
    banca: 'FGV',
    topico: 'Segurança da Informação',
    subtopico: 'ISO/IEC 27002:2022',
    concurso: 'Receita Federal - Analista de TI',
    ano: 2023,
    pergunta: 'A nova revisão da norma ABNT NBR ISO/IEC 27002:2022 estruturou os controles de segurança em 4 temas centrais: Organizacionais, Pessoas, Físicos e Tecnológicos, reduzindo a quantidade total para 93 controles.',
    resposta: 'CERTO',
    explicacao: 'Exato! A ISO/IEC 27002:2022 substituiu as antigas 14 seções da versão 2013 por 4 grandes temas (Organizacionais, Pessoas, Físicos e Tecnológicos) e consolidou os controles de 114 para 93, introduzindo atributos para filtragem dinâmica.',
    dica: 'Lembre-se dos 4 temas da 27002:2022: Organizacionais (37), Pessoas (8), Físicos (14) e Tecnológicos (34).'
  },
  {
    id: 'p4',
    banca: 'Cesgranrio',
    topico: 'Governança & Gestão de TI',
    subtopico: 'COBIT 2019 vs ITIL 4',
    concurso: 'Dataprev - Engenharia de Software',
    ano: 2024,
    pergunta: 'No framework COBIT 2019, o domínio EDM (Evaluate, Direct and Monitor) pertence ao escopo de Governança, enquanto os domínios APO, BAI, DSS e MEA pertencem estritamente ao escopo de Gestão.',
    resposta: 'CERTO',
    explicacao: 'Correto. O COBIT 2019 separa rigorosamente Governança Corporativa de TI (domínio EDM sob responsabilidade do Conselho/Diretoria) de Gestão de TI (domínios APO, BAI, DSS, MEA sob responsabilidade da gerência executiva).',
    dica: 'EDM = Governança (Avaliar, Dirigir, Monitorar). Todos os outros 4 domínios são de Gestão!'
  }
];

export const HomePageLanding: React.FC<HomePageLandingProps> = ({
  onStartStudy,
  onNavigateToConcursos,
  onNavigateToCarreira,
  onNavigateToGuides,
  onNavigateToStatic,
  onOpenAuthModal
}) => {
  // Interactive widget state
  const [selectedSampleIndex, setSelectedSampleIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<'CERTO' | 'ERRADO' | null>(null);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const currentSample = SAMPLE_PREVIEW_CARDS[selectedSampleIndex];

  const handleSelectSample = (index: number) => {
    setSelectedSampleIndex(index);
    setIsCardFlipped(false);
    setUserAnswer(null);
  };

  const handleAnswerSample = (ans: 'CERTO' | 'ERRADO') => {
    setUserAnswer(ans);
    setIsCardFlipped(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950">
        {/* Glow ambient effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-36 right-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header pill badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Plataforma de Estudo Ativo para Concursos de TI • Foco em Bancas 2026</span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="text-center max-w-4xl mx-auto space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Da Incerteza do Mercado Privado à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
                Estabilidade Pública em TI
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              Domine as pegadinhas de bancas examinadoras (<strong className="text-white font-semibold">Cebraspe, FGV, Cesgranrio</strong>) e 
              memorize a densa ementa de Tecnologia da Informação com o método científico de 
              <strong className="text-indigo-300 font-semibold"> Repetição Espaçada (SRS)</strong>.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <button
                onClick={() => onStartStudy()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-2.5 group"
              >
                <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
                <span>Começar a Estudar Agora (Grátis)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onNavigateToConcursos}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 hover:border-slate-600"
              >
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Radar de Concursos Abertos</span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Edição 2026
                </span>
              </button>

              <button
                onClick={onNavigateToCarreira}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Guia de Salários & Carreiras</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> +1.200 Questões de TI Catalogadas
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> Algoritmo Leitner de Repetição Espaçada
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> Salários de R$ 10.000 a R$ 33.000
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> 100% Gratuito para Começar
              </span>
            </div>
          </div>

          {/* ================= LIVE SAMPLE FLASHCARD WIDGET ================= */}
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {/* Widget Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Experimente na Prática: Teste de Conhecimento Ativo</span>
                      <span className="text-[10px] font-normal px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Interativo
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Veja como o método de flashcards desmascara as pegadinhas de bancas
                    </p>
                  </div>
                </div>

                {/* Question selector tabs */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 overflow-x-auto scrollbar-none">
                  {SAMPLE_PREVIEW_CARDS.map((card, idx) => (
                    <button
                      key={card.id}
                      onClick={() => handleSelectSample(idx)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                        selectedSampleIndex === idx
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {card.banca} #{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* The Card Body */}
              <div className="py-5">
                {/* Meta info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 font-mono font-medium border border-indigo-500/30">
                      {currentSample.banca}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-300 font-medium">{currentSample.topico}</span>
                    <span className="text-slate-500 hidden sm:inline">({currentSample.subtopico})</span>
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono">
                    {currentSample.concurso} ({currentSample.ano})
                  </div>
                </div>

                {/* Question Statement */}
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 sm:p-5 mb-4">
                  <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                    {currentSample.pergunta}
                  </p>
                </div>

                {/* Card Back / Answer (Conditional or Flipped) */}
                {isCardFlipped ? (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                      currentSample.resposta === 'CERTO'
                        ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                        : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                    }`}>
                      <div className="shrink-0 pt-0.5">
                        {currentSample.resposta === 'CERTO' ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-400" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider">
                          Gabarito Oficial: <span className="underline">{currentSample.resposta}</span>
                          {userAnswer && (
                            <span className="ml-2 font-normal text-slate-300">
                              (Você escolheu: <strong className={userAnswer === currentSample.resposta ? 'text-emerald-400' : 'text-rose-400'}>{userAnswer}</strong> — {userAnswer === currentSample.resposta ? 'Você acertou!' : 'Você errou!'})
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                          {currentSample.explicacao}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-indigo-950/30 border border-indigo-500/20 rounded-xl flex items-center gap-2.5 text-xs text-indigo-300">
                      <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                      <span><strong>Dica de Memorização:</strong> {currentSample.dica}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => setIsCardFlipped(false)}
                        className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                      >
                        Ocultar Gabarito
                      </button>

                      <button
                        onClick={() => onStartStudy(currentSample.topico)}
                        className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <span>Praticar mais questões deste tópico</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Action Buttons to trigger answer */
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => handleAnswerSample('CERTO')}
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Julgar CERTO</span>
                      </button>

                      <button
                        onClick={() => handleAnswerSample('ERRADO')}
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95"
                      >
                        <XCircle className="w-4 h-4 text-rose-400" />
                        <span>Julgar ERRADO</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setIsCardFlipped(true)}
                      className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 py-1"
                    >
                      <span>Ver explicação sem responder</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Widget Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Algoritmo Leitner: repetições calculadas pelo nível de domínio</span>
                <span className="text-indigo-400 font-medium">Flashcards com Modo Escuro Nativo</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. POR QUE CONCURSO PÚBLICO DE TI? (COMPARAÇÃO REALISTA) ================= */}
      <section className="py-16 lg:py-24 bg-slate-900/50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>Transição Estratégica de Carreira</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Iniciativa Privada vs. Concurso Público de TI
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Entenda por que milhares de engenheiros de software, especialistas em cloud e dados estão trocando a instabilidade corporativa pelo serviço público.
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Column 1: Mercado Privado */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 pb-5 border-b border-slate-800 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-200">Mercado Corporativo & Startups</h3>
                  <p className="text-xs text-slate-400">Incerteza, pressão por entregas e rotatividade</p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200">Layoffs & Cortes em Massa:</strong> Risco constante de demissões coletivas causadas por oscilações macroeconômicas ou corte de investimentos em venture capital.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200">Jornadas Exaustivas:</strong> Sobrecarga de plantões noturnos, sprints agressivas e horas extras não remuneradas sob o modelo PJ sem direitos.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200">Etarismo & Insegurança aos 40+:</strong> Pressão para se manter jovem e atualizado em frameworks descartáveis, com descartabilidade acelerada.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200">Aumentos Arbitrários:</strong> Promoções e aumentos dependem do humor de gestores, politicagem corporativa ou metas financeiras da empresa.
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 2: Carreira Pública em TI */}
            <div className="bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-slate-950 border-2 border-indigo-500/30 rounded-2xl p-6 sm:p-8 relative shadow-xl shadow-indigo-950/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 pb-5 border-b border-indigo-500/20 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>Carreira Pública em TI</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Recomendado
                    </span>
                  </h3>
                  <p className="text-xs text-indigo-300/80">Estabilidade, salários de elite e teletrabalho</p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Estabilidade Constitucional:</strong> Proteção do Artigo 41 da CF/88 contra perseguições e demissões sem justa causa em cargos estatutários e estabilidade regulamentada.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Jornada 30h ou 40h Regulamentada:</strong> Carga horária estrita por lei, sem plantão gratuito. Qualidade de vida e tempo real para família, esportes e projetos pessoais.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Teletrabalho Institucionalizado:</strong> Órgãos como BACEN, Receita, TCU, TRTs e DATAPREV contam com programas consolidados de Home Office integral ou híbrido.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Progressão Salarial por Lei:</strong> Salários de R$ 10.000 a mais de R$ 30.000 mensais com plano de carreira público, adicionais de qualificação (Pós/Mestrado/Doutorado) e auxílios generosos.
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-indigo-500/20 flex items-center justify-between">
                <span className="text-xs text-indigo-300">Quer ver a tabela salarial completa?</span>
                <button
                  onClick={onNavigateToCarreira}
                  className="text-xs font-bold text-white hover:text-indigo-200 flex items-center gap-1 group"
                >
                  <span>Abrir Guia de Carreiras</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 3. RADAR DE CONCURSOS EM DESTAQUE ================= */}
      <section className="py-16 lg:py-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Oportunidades Mapeadas 2026</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Principais Editais de TI em Pauta
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Confira os órgãos que estão contratando ou com editais iminentes para carreiras de tecnologia em âmbito nacional.
              </p>
            </div>

            <button
              onClick={onNavigateToConcursos}
              className="self-start md:self-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 group"
            >
              <span>Ver todos os 12 concursos mapeados</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: BACEN */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all hover:translate-y-[-2px] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Banca: Cebraspe
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-bold">R$ 20.924,80</span>
                </div>
                <h3 className="text-lg font-bold text-white">Banco Central do Brasil (BACEN)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cargo de Analista de TI com foco em Arquitetura de Sistemas, Segurança da Informação, Infraestrutura de Nuvem e Pix/Open Finance.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500">Nível Superior (Qualquer TI)</span>
                <button
                  onClick={() => onStartStudy('Arquitetura de Software')}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                >
                  Estudar Tópicos <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: SERPRO / DATAPREV */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all hover:translate-y-[-2px] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Banca: Cebraspe / FGV
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-bold">R$ 10.500 a R$ 16.000 + PLR</span>
                </div>
                <h3 className="text-lg font-bold text-white">SERPRO & DATAPREV</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Gigantes estatais de dados. Carreiras em Desenvolvimento de Software (Java, Python, C#), Engenharia de Dados, Nuvem Soberana e IA Governamental.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500">Teletrabalho Híbrido/Integral</span>
                <button
                  onClick={() => onStartStudy('Engenharia de Software')}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                >
                  Estudar Tópicos <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Tribunais Federais (TRTs/TRFs/TJ) */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all hover:translate-y-[-2px] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    Banca: FCC / FGV
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-bold">R$ 15.387,88 Inicial</span>
                </div>
                <h3 className="text-lg font-bold text-white">Tribunais Federais & Estaduais</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Analista Judiciário de TI. Processo Judicial Eletrônico (PJe), Banco de Dados, Segurança e Governança de TI com plano de carreira judiciário federal.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500">Regime Estatutário (Lei 8.112)</span>
                <button
                  onClick={() => onStartStudy('Governança & Gestão de TI')}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                >
                  Estudar Tópicos <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. A METODOLOGIA DO DEVCONCURSOS TI ================= */}
      <section className="py-16 lg:py-24 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Brain className="w-3.5 h-3.5" />
              <span>Neurociência Aplicada aos Concursos</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Por Que Ler PDFs de 600 Páginas Não Funciona Para TI?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Em TI, a matéria é densa, técnica e repleta de siglas, normas ISO e pegadinhas literais. 
              A leitura passiva perde mais de 80% do conteúdo em 48 horas segundo a Curva do Esquecimento.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 relative space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Zap className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-bold text-white">1. Evocação Ativa (Active Recall)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ao invés de ler a resposta pronta, seu cérebro é forçado a recuperar a informação da memória. Essa sinapse fortalece os caminhos neurais e transforma memória de curto prazo em conhecimento definitivo para o dia da prova.
              </p>
              <div className="pt-2 text-xs text-indigo-400 font-semibold flex items-center gap-1">
                <span>+300% de retenção comprovada</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 relative space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Repetição Espaçada (Algoritmo SRS)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Você revisa cada questão no momento exato em que seu cérebro está prestes a esquecê-la (1 dia, 3 dias, 7 dias, 14 dias). Os cartões difíceis aparecem com frequência e os fáceis são espaçados, poupando seu tempo precioso.
              </p>
              <div className="pt-2 text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <span>Baseado no Método Leitner e Ebbinghaus</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 relative space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Engenharia Reversa de Bancas</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Nossos flashcards não são resumos genéricos: são baseados estritamente no estilo de cobrança do Cebraspe, FGV e Cesgranrio, destacando as pegadinhas semânticas mais recorrentes em editais de tribunais e fiscais.
              </p>
              <div className="pt-2 text-xs text-purple-400 font-semibold flex items-center gap-1">
                <span>Mapeamento Cirúrgico de Pegadinhas</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 5. GRANDES EIXOS TEMÁTICOS ================= */}
      <section className="py-16 lg:py-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Ementa Completa de TI</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Especialidades e Tópicos Estratégicos
            </h2>
            <p className="text-sm text-slate-400">
              Escolha uma disciplina para mergulhar nos flashcards comentados com dicas imediatas de memorização.
            </p>
          </div>

          {/* Grid of Subjects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card: Engenharia de Software */}
            <div 
              onClick={() => onStartStudy('Engenharia de Software')}
              className="bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.01] group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Engenharia de Software & Ágil
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Scrum Guide 2020, Kanban, XP, TDD, Clean Architecture, Design Patterns GoF, Microsserviços e Testes de Software.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-indigo-400 font-semibold">
                <span>Praticar Flashcards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card: Segurança da Informação */}
            <div 
              onClick={() => onStartStudy('Segurança da Informação')}
              className="bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 hover:border-rose-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.01] group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                  Segurança da Informação & Cibernética
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pilares CIDAN, ISO 27001 e ISO 27002:2022 (4 temas), Criptografia Simétrica/Assimétrica, OWASP Top 10 e Gestão de Incidentes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-rose-400 font-semibold">
                <span>Praticar Flashcards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card: Bancos de Dados */}
            <div 
              onClick={() => onStartStudy('Bancos de Dados')}
              className="bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.01] group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Bancos de Dados Relacionais & NoSQL
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  SQL ANSI, Modelo Entidade-Relacionamento, Formas Normais (1FN a BCNF), Propriedades ACID, Índices B-Tree e NoSQL (MongoDB/Redis).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span>Praticar Flashcards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card: Governança & Gestão de TI */}
            <div 
              onClick={() => onStartStudy('Governança & Gestão de TI')}
              className="bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.01] group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  Governança & Gestão de TI
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  ITIL 4 (Sistema de Valor de Serviço e 34 Práticas), COBIT 2019 (EDM vs APO/BAI/DSS/MEA), BPMN 2.0 e Contratações de TI na Lei 14.133.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-sky-400 font-semibold">
                <span>Praticar Flashcards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card: Inteligência de Negócios (BI) */}
            <div 
              onClick={() => onStartStudy('Inteligência de Negócios (BI)')}
              className="bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.01] group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  Ciência de Dados & BI
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Data Warehouse, Modelagem Dimensional (Star vs Snowflake), ETL, Data Lakes, Mineração de Dados, Python Pandas e Machine Learning.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span>Praticar Flashcards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card: Legislação & Proteção de Dados */}
            <div 
              onClick={() => onStartStudy('Legislação & Proteção de Dados')}
              className="bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.01] group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  LGPD & Legislação Digital
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Lei Geral de Proteção de Dados (Lei 13.709/18), Marco Civil da Internet (Lei 12.965/14) e Lei de Acesso à Informação (LAI).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-purple-400 font-semibold">
                <span>Praticar Flashcards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          {/* Theoretical Guides link */}
          <div className="mt-10 p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-300 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Prefere resumos teóricos aprofundados?</h4>
                <p className="text-xs text-slate-400">
                  Acesse nossos Cadernos Teóricos com esquemas, tabelas comparativas e resumos de bolso.
                </p>
              </div>
            </div>
            <button
              onClick={onNavigateToGuides}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors whitespace-nowrap"
            >
              Abrir Cadernos Teóricos
            </button>
          </div>

        </div>
      </section>

      {/* ================= 6. PERFIL DAS BANCAS EXAMINADORAS ================= */}
      <section className="py-16 lg:py-24 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Estratégia de Prova</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              O Comportamento das Bancas de TI
            </h2>
            <p className="text-sm text-slate-400">
              Não basta saber tecnologia. Você precisa saber exatamente como o examinador monta a pegadinha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Cebraspe */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-white">CEBRASPE</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">
                  1 Erro Anula 1 Acerto
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rei dos itens de <strong>Certo ou Errado</strong>. Gosta de generalizações absolutas (&quot;sempre&quot;, &quot;nunca&quot;, &quot;exclusivamente&quot;) e pegadinhas sobre pequenas alterações nas definições oficiais de RFCs, guias ágeis e normas ABNT.
              </p>
              <div className="text-xs text-indigo-400 font-semibold">
                Órgãos típicos: TCU, BACEN, SERPRO, Dataprev, Polícia Federal.
              </div>
            </div>

            {/* FGV */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-white">FGV</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                  Múltipla Escolha Complexa
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Enunciados longos com cenários corporativos fictícios. Cobra <strong>arquitetura de microsserviços, governança ITIL/COBIT</strong> e questões de código com sutilezas de herança múltipla, ponteiros ou complexidade assintótica (Big-O).
              </p>
              <div className="text-xs text-amber-400 font-semibold">
                Órgãos típicos: Receita Federal, Senado, OAB, Tribunais Estaduais.
              </div>
            </div>

            {/* Cesgranrio */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-white">CESGRANRIO</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  Pragmática e Direta
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Foco tradicional em concursos do setor bancário e estatais. Cobra <strong>sintaxe real de Java, SQL, Python</strong>, estruturas de dados clássicas, modelagem de banco de dados e testes de software com gabaritos bem objetivos.
              </p>
              <div className="text-xs text-emerald-400 font-semibold">
                Órgãos típicos: Caixa Econômica, Banco do Brasil, Petrobras, CNU.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 7. PERGUNTAS FREQUENTES (FAQ) - ALTO VALOR ADSENSE ================= */}
      <section className="py-16 lg:py-24 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Tire Suas Dúvidas</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Perguntas Frequentes de Concurseiros de TI
            </h2>
            <p className="text-sm text-slate-400">
              Respostas claras e transparentes sobre a plataforma, requisitos de concursos e preparação.
            </p>
          </div>

          <div className="space-y-3">
            
            {/* FAQ Item 1 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-white">
                  Diploma de Tecnólogo (curso superior de 2 a 3 anos em TI) é aceito em concursos públicos?
                </span>
                {openFaqIndex === 1 ? (
                  <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaqIndex === 1 && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed animate-in fade-in duration-150">
                  <strong>Sim, na esmagadora maioria dos casos.</strong> O Ministério da Educação (MEC) reconhece cursos de Tecnologia (Tecnólogo) como cursos de graduação de nível superior. Apenas concursos muito específicos cujo edital exija expressamente &quot;Bacharelado de no mínimo 4 anos&quot; (raro em TI) restringem tecnólogos. Tribunais, SERPRO, Dataprev, BACEN e agências federais aceitam tecnólogos reconhecidos pelo MEC.
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-white">
                  Eu trabalho 8 horas por dia como programador/analista. Consigo conciliar com o estudo?
                </span>
                {openFaqIndex === 2 ? (
                  <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaqIndex === 2 && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed animate-in fade-in duration-150">
                  <strong>Com certeza.</strong> O método de repetição espaçada por flashcards foi desenhado exatamente para quem tem pouco tempo livre. Em sessões de 20 a 30 minutos no transporte, no intervalo de almoço ou antes de dormir, você consegue revisar de 40 a 60 cartões com altíssima taxa de retenção, sem precisar carregar livros pesados.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-white">
                  A plataforma DevConcursos TI / Flash Concurso TI é gratuita?
                </span>
                {openFaqIndex === 3 ? (
                  <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaqIndex === 3 && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed animate-in fade-in duration-150">
                  <strong>Sim, é 100% gratuita para os candidatos.</strong> Nossa missão é democratizar o acesso à preparação de alto nível em tecnologia. Mantemos os custos de infraestrutura e hospedagem por meio de parcerias e anúncios não intrusivos veiculados pelo Google AdSense. Você pode estudar todos os cartões e cadernos teóricos livremente.
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-white">
                  Os flashcards substituem o estudo teórico dos livros e PDFs?
                </span>
                {openFaqIndex === 4 ? (
                  <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaqIndex === 4 && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed animate-in fade-in duration-150">
                  <strong>Eles são complementares e potencializadores.</strong> O primeiro contato com matérias nunca vistas (como a separação entre EDM e APO no COBIT 2019) pode ser feito pelos nossos Cadernos Teóricos. Uma vez compreendido o conceito, os flashcards entram como ferramenta diária de fixação para garantir que você não esqueça os detalhes e pegadinhas até o dia da prova.
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-colors">
              <button
                onClick={() => toggleFaq(5)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-white">
                  Como funciona o salvamento do meu progresso na nuvem?
                </span>
                {openFaqIndex === 5 ? (
                  <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaqIndex === 5 && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed animate-in fade-in duration-150">
                  Você pode estudar sem login usando a memória local do seu navegador. Mas caso queira sincronizar seu histórico entre computador, tablet e celular, basta criar uma conta gratuita pelo botão &quot;Entrar / Cadastrar&quot; para que todo o seu histórico de revisões seja sincronizado com segurança na nuvem Firebase.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ================= 8. FINAL CTA BANNER ================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-indigo-400 mx-auto shadow-lg shadow-indigo-600/20">
            <GraduationCap className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Sua vaga de R$ 15k a R$ 25k em TI pública começa na próxima revisão
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Não espere a publicação do edital para começar a reter o conteúdo. Crie sua rotina diária de estudo ativo com nossos flashcards especializados.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onStartStudy()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base transition-all shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-98 flex items-center justify-center gap-2.5"
            >
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
              <span>Abrir o Simulador de Flashcards</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToCarreira}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Ver Guia de Carreiras & Salários</span>
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-500 flex items-center justify-center gap-4 flex-wrap">
            <button onClick={() => onNavigateToStatic('sobre')} className="hover:text-slate-400 underline">Sobre o Projeto</button>
            <span>•</span>
            <button onClick={() => onNavigateToStatic('privacidade')} className="hover:text-slate-400 underline">Privacidade & LGPD</button>
            <span>•</span>
            <button onClick={() => onNavigateToStatic('termos')} className="hover:text-slate-400 underline">Termos de Uso</button>
            <span>•</span>
            <button onClick={() => onNavigateToStatic('contato')} className="hover:text-slate-400 underline">Contato com a Equipe</button>
          </div>
        </div>
      </section>

    </div>
  );
};
