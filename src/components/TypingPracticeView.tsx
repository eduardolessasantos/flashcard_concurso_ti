import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Keyboard, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  ArrowRight, 
  GraduationCap, 
  Zap, 
  Trophy, 
  Lightbulb, 
  HelpCircle,
  Clock,
  ArrowLeft,
  Flame,
  Volume2,
  VolumeX
} from 'lucide-react';
import { LicaoDigitacao, TrechoConceito } from '../types';
import { TYPING_LESSONS } from '../data/typingLessonsData';

interface TypingPracticeViewProps {
  onNavigateHome?: () => void;
  onSelectTopicForFlashcards?: (topic: string) => void;
}

export const TypingPracticeView: React.FC<TypingPracticeViewProps> = ({
  onNavigateHome,
}) => {
  // Lesson Selection State
  const [selectedLesson, setSelectedLesson] = useState<LicaoDigitacao | null>(null);
  const [currentTrechoIndex, setCurrentTrechoIndex] = useState(0);

  // Typing Input State
  const [typedText, setTypedText] = useState('');
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [totalErrors, setTotalErrors] = useState(0);
  const [totalKeyStrokes, setTotalKeyStrokes] = useState(0);

  // Sound toggle (synthesized / web audio clicks)
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Quiz fixacao state for current trecho
  const [quizAnswer, setQuizAnswer] = useState<'CERTO' | 'ERRADO' | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  // Entire Lesson Finish State
  const [isLessonFinished, setIsLessonFinished] = useState(false);

  // Input element ref for autofocus
  const inputRef = useRef<HTMLInputElement>(null);

  // Current Trecho
  const currentTrecho: TrechoConceito | undefined = selectedLesson?.trechos[currentTrechoIndex];
  const targetText = currentTrecho?.texto || '';

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (startTime && !isTypingCompleted && !isLessonFinished) {
      interval = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startTime, isTypingCompleted, isLessonFinished]);

  // Focus input automatically whenever trecho changes or user clicks container
  useEffect(() => {
    if (selectedLesson && !isTypingCompleted && !isLessonFinished) {
      inputRef.current?.focus();
    }
  }, [selectedLesson, currentTrechoIndex, isTypingCompleted, isLessonFinished]);

  // Audio feedback using Web Audio API (gentle click & success chime)
  const playClickSound = (isError: boolean) => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = isError ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(isError ? 180 : 540, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // AudioContext might be blocked until user gesture, ignore silently
    }
  };

  const playSuccessSound = () => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const notes = [440, 554, 659]; // A major chord
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.08);
        osc.stop(audioCtx.currentTime + idx * 0.08 + 0.25);
      });
    } catch {
      // Ignore
    }
  };

  // Typing change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isTypingCompleted || !currentTrecho) return;
    const value = e.target.value;

    // Start timer on first keystroke
    if (!startTime) {
      setStartTime(Date.now());
    }

    setTotalKeyStrokes(prev => prev + 1);

    // Detect if this stroke was correct or error
    const lastCharIndex = value.length - 1;
    if (lastCharIndex >= 0 && lastCharIndex < targetText.length) {
      const isMismatch = value[lastCharIndex] !== targetText[lastCharIndex];
      if (isMismatch) {
        setTotalErrors(prev => prev + 1);
        playClickSound(true);
      } else {
        playClickSound(false);
      }
    }

    setTypedText(value);

    // Check completion condition
    if (value === targetText) {
      setIsTypingCompleted(true);
      playSuccessSound();
    }
  };

  // Keydown to support Enter for next trecho
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isTypingCompleted && e.key === 'Enter') {
      // If there's a quiz that isn't answered yet, don't advance automatically
      if (currentTrecho?.perguntaFixacao && !isQuizSubmitted) {
        return;
      }
      handleNextTrecho();
    }
  };

  // Advance to next trecho or finish lesson
  const handleNextTrecho = () => {
    if (!selectedLesson) return;

    if (currentTrechoIndex + 1 < selectedLesson.trechos.length) {
      setCurrentTrechoIndex(prev => prev + 1);
      setTypedText('');
      setIsTypingCompleted(false);
      setQuizAnswer(null);
      setIsQuizSubmitted(false);
    } else {
      setIsLessonFinished(true);
    }
  };

  // Reset entire lesson
  const handleRestartLesson = () => {
    setCurrentTrechoIndex(0);
    setTypedText('');
    setIsTypingCompleted(false);
    setStartTime(null);
    setElapsedSeconds(0);
    setTotalErrors(0);
    setTotalKeyStrokes(0);
    setQuizAnswer(null);
    setIsQuizSubmitted(false);
    setIsLessonFinished(false);
  };

  // Metrics calculations
  const { wpm, accuracy } = useMemo(() => {
    const minutes = Math.max(elapsedSeconds / 60, 0.05);
    const correctChars = typedText.split('').filter((c, i) => c === targetText[i]).length;
    const calculatedWpm = Math.round((correctChars / 5) / minutes);
    const calculatedAccuracy = totalKeyStrokes > 0 
      ? Math.max(0, Math.round(((totalKeyStrokes - totalErrors) / totalKeyStrokes) * 100))
      : 100;
    return { wpm: calculatedWpm || 0, accuracy: calculatedAccuracy };
  }, [elapsedSeconds, typedText, targetText, totalKeyStrokes, totalErrors]);

  // Overall lesson progress percentage
  const lessonProgress = useMemo(() => {
    if (!selectedLesson) return 0;
    const completedParts = currentTrechoIndex + (isTypingCompleted ? 1 : typedText.length / Math.max(targetText.length, 1));
    return Math.round((completedParts / selectedLesson.trechos.length) * 100);
  }, [selectedLesson, currentTrechoIndex, isTypingCompleted, typedText.length, targetText.length]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-20 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {selectedLesson ? (
              <button
                onClick={() => setSelectedLesson(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Ver Outros Temas</span>
              </button>
            ) : (
              <button
                onClick={onNavigateHome}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Início</span>
              </button>
            )}

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-500/20 text-indigo-400 rounded-lg border border-indigo-500/30">
                <Keyboard className="w-4 h-4" />
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                  Aprenda por Digitação
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Com Mentor
                  </span>
                </h1>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  Memorização ativa com feedback pedagógico a cada trecho concluído
                </p>
              </div>
            </div>
          </div>

          {/* Sound & Stats quick toggles */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(prev => !prev)}
              className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1.5 ${
                soundEnabled 
                  ? 'bg-indigo-600/20 border-indigo-500/40 text-indigo-300' 
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
              title={soundEnabled ? 'Sons ativados' : 'Sons desativados'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[11px] hidden md:inline">{soundEnabled ? 'Áudio Ligado' : 'Mudo'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        {!selectedLesson ? (
          /* ================= SCREEN 1: LESSON SELECTOR ================= */
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fixação Muscular e Cognitiva</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Escolha um Conceito para Digitar & Dominar
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Digite os conceitos mais cobrados de TI caractere por caractere. A cada parágrafo completado, o professor analisa a teoria com você e alerta sobre pegadinhas de bancas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TYPING_LESSONS.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLesson(lesson);
                    handleRestartLesson();
                  }}
                  className="group relative bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {lesson.topico}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        {lesson.banca && (
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px] font-bold">
                            {lesson.banca}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {lesson.tempoEstimadoMin} min
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {lesson.titulo}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {lesson.descricao}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
                    <span>{lesson.trechos.length} trechos conceituais</span>
                    <span className="flex items-center gap-1 text-slate-200 group-hover:text-indigo-300">
                      Iniciar Treino <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Methodology Explanatory Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/20 flex flex-col sm:flex-row items-center gap-4 text-xs">
              <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-sm">Por que a digitação orientada funciona?</h4>
                <p className="text-slate-400 leading-relaxed">
                  A digitação ativa estimula o córtex motor enquanto a leitura passiva gera falsa impressão de domínio. Ao unir a cadência do teclado à intervenção pontual do professor, sua mente associa palavras exatas com o contexto das questões de prova.
                </p>
              </div>
            </div>
          </div>
        ) : isLessonFinished ? (
          /* ================= SCREEN 3: LESSON FINISHED CELEBRATION ================= */
          <div className="max-w-xl mx-auto w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/30">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-white">
                Parabéns! Conceito Dominado!
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Você concluiu todos os trechos de <strong className="text-indigo-400">{selectedLesson.titulo}</strong> com o acompanhamento do mentor.
              </p>
            </div>

            {/* Stats Summary Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/60 rounded-2xl border border-slate-800/80">
              <div className="space-y-1">
                <span className="text-[11px] text-slate-400 font-medium">Velocidade</span>
                <p className="text-xl sm:text-2xl font-black text-indigo-400">{wpm} <span className="text-xs font-normal text-slate-500">WPM</span></p>
              </div>
              <div className="space-y-1 border-x border-slate-800">
                <span className="text-[11px] text-slate-400 font-medium">Precisão</span>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">{accuracy}%</p>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] text-slate-400 font-medium">Tempo</span>
                <p className="text-xl sm:text-2xl font-black text-slate-200">
                  {Math.floor(elapsedSeconds / 60)}:{(elapsedSeconds % 60).toString().padStart(2, '0')}
                </p>
              </div>
            </div>

            {/* Teacher Final Words */}
            <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-2xl p-4 text-left flex items-start gap-3">
              <div className="p-2 bg-indigo-600/30 rounded-xl text-indigo-300 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <p className="font-bold text-indigo-300">Mensagem do Professor:</p>
                <p className="text-slate-300 leading-relaxed">
                  "Você fixou a estrutura exata das frases que as bancas usam em pegadinhas. Revise esses conceitos com frequência para consolidar na memória de longo prazo!"
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleRestartLesson}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-slate-700"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Repetir este Tema</span>
              </button>
              <button
                onClick={() => setSelectedLesson(null)}
                className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
              >
                <span>Escolher Outro Tema</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ================= SCREEN 2: ACTIVE TYPING ARENA & MENTOR ================= */
          <div className="space-y-6">
            {/* Top Bar Stats & Progress */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-indigo-400">
                    Trecho {currentTrechoIndex + 1} de {selectedLesson.trechos.length}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-medium text-slate-300">
                    {currentTrecho?.palavraChave || selectedLesson.titulo}
                  </span>
                </div>
              </div>

              {/* Live Metric Pills */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{wpm}</span>
                  <span className="text-[10px] text-slate-500">WPM</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{accuracy}%</span>
                  <span className="text-[10px] text-slate-500">precisão</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{Math.floor(elapsedSeconds / 60)}:{(elapsedSeconds % 60).toString().padStart(2, '0')}</span>
                </div>
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${lessonProgress}%` }}
              />
            </div>

            {/* Typing Canvas Box */}
            <div
              onClick={() => inputRef.current?.focus()}
              className={`relative bg-slate-900/90 rounded-2xl border transition-all duration-300 p-6 sm:p-8 cursor-text select-none shadow-xl ${
                isTypingCompleted
                  ? 'border-emerald-500/50 bg-emerald-950/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Invisible native input for cross-platform typing and mobile keyboards */}
              <input
                ref={inputRef}
                type="text"
                value={typedText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 opacity-0 cursor-default pointer-events-none"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
              />

              {/* Target Text Render with Real-Time Character Highlighting */}
              <div className="text-lg sm:text-xl md:text-2xl font-mono leading-relaxed tracking-wide min-h-[90px] flex flex-wrap items-center">
                {targetText.split('').map((char, index) => {
                  let charClass = 'text-slate-500 transition-colors duration-100';
                  const isCurrent = index === typedText.length && !isTypingCompleted;

                  if (index < typedText.length) {
                    const isCorrect = typedText[index] === char;
                    if (isCorrect) {
                      charClass = 'text-emerald-400 bg-emerald-500/15 font-semibold';
                    } else {
                      charClass = 'text-rose-400 bg-rose-500/20 underline decoration-rose-500 decoration-2 font-bold';
                    }
                  }

                  return (
                    <span
                      key={index}
                      className={`relative inline-block ${charClass} ${
                        isCurrent ? 'bg-indigo-500/20 text-indigo-200 border-b-2 border-indigo-400 animate-pulse' : ''
                      }`}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  );
                })}
              </div>

              {/* Status Hint Footer of the typing canvas */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  {isTypingCompleted 
                    ? 'Trecho concluído com sucesso!' 
                    : 'Clique e digite o texto acima no seu ritmo...'}
                </span>
                <span className="font-mono text-[11px]">
                  {typedText.length} / {targetText.length} caracteres
                </span>
              </div>
            </div>

            {/* ================= TEACHER / MENTOR PANEL ================= */}
            <div className={`transition-all duration-500 ${
              isTypingCompleted 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-70 translate-y-1'
            }`}>
              <div className={`rounded-2xl border p-5 sm:p-6 transition-all shadow-xl ${
                isTypingCompleted
                  ? 'bg-slate-900 border-indigo-500/50 shadow-indigo-500/10'
                  : 'bg-slate-900/60 border-slate-800/80'
              }`}>
                <div className="flex items-start gap-4">
                  {/* Teacher Avatar */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                    isTypingCompleted
                      ? 'bg-gradient-to-br from-indigo-600 to-violet-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  {/* Teacher Feedback Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">
                          Professor Mentor
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                          {isTypingCompleted ? 'Explicando o trecho' : 'Acompanhando você...'}
                        </span>
                      </div>
                    </div>

                    {!isTypingCompleted ? (
                      <p className="text-xs text-slate-400 italic">
                        "Estou aqui acompanhando sua digitação. Assim que você completar este parágrafo, vou te passar os detalhes de como as bancas cobram essa teoria e as principais pegadinhas!"
                      </p>
                    ) : (
                      <div className="space-y-3 animate-in fade-in duration-300">
                        {/* Concept explanation */}
                        <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-xl p-3.5 text-xs text-indigo-200 leading-relaxed flex items-start gap-2.5">
                          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white block mb-0.5">Visão do Professor:</strong>
                            {currentTrecho?.dicaProfessor}
                          </div>
                        </div>

                        {/* Exam alert */}
                        {currentTrecho?.alertaBanca && (
                          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-300 leading-relaxed flex items-start gap-2.5">
                            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-amber-200 block mb-0.5">Alerta de Prova ({selectedLesson.banca || 'Geral'}):</strong>
                              {currentTrecho.alertaBanca}
                            </div>
                          </div>
                        )}

                        {/* Quick Fixation Quiz (Active Recall Bridge) */}
                        {currentTrecho?.perguntaFixacao && (
                          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold text-white">
                              <HelpCircle className="w-4 h-4 text-indigo-400" />
                              <span>Pergunta Relâmpago de Fixação:</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              "{currentTrecho.perguntaFixacao.pergunta}"
                            </p>

                            {!isQuizSubmitted ? (
                              <div className="flex gap-2 pt-1">
                                <button
                                  onClick={() => {
                                    setQuizAnswer('CERTO');
                                    setIsQuizSubmitted(true);
                                  }}
                                  className="flex-1 py-2 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-all"
                                >
                                  CERTO
                                </button>
                                <button
                                  onClick={() => {
                                    setQuizAnswer('ERRADO');
                                    setIsQuizSubmitted(true);
                                  }}
                                  className="flex-1 py-2 px-3 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 border border-rose-500/40 text-rose-300 text-xs font-bold transition-all"
                                >
                                  ERRADO
                                </button>
                              </div>
                            ) : (
                              <div className={`p-3 rounded-lg border text-xs leading-relaxed ${
                                quizAnswer === currentTrecho.perguntaFixacao.gabarito
                                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                                  : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                              }`}>
                                <div className="font-bold mb-1 flex items-center gap-1.5">
                                  {quizAnswer === currentTrecho.perguntaFixacao.gabarito ? (
                                    <>
                                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                      <span>Parabéns, você acertou! (Gabarito: {currentTrecho.perguntaFixacao.gabarito})</span>
                                    </>
                                  ) : (
                                    <>
                                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                                      <span>Atenção! O gabarito é {currentTrecho.perguntaFixacao.gabarito}.</span>
                                    </>
                                  )}
                                </div>
                                <p className="text-slate-300 text-[11px]">
                                  {currentTrecho.perguntaFixacao.explicacao}
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Continue Button */}
                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={handleNextTrecho}
                            className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 group active:scale-98"
                          >
                            <span>
                              {currentTrechoIndex + 1 < selectedLesson.trechos.length
                                ? 'Próximo Trecho Conceitual'
                                : 'Finalizar e Ver Desempenho'}
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-indigo-800/80 rounded border border-indigo-400/40 text-indigo-200 font-mono">
                              Enter ↵
                            </kbd>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
