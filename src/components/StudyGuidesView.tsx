import React, { useState, useEffect } from 'react';
import { STUDY_GUIDE_TOPICS } from '../data/studyGuides';
import { Topico, StudyGuideLesson, UsefulLink } from '../types';
import { HandwrittenNoteView } from './HandwrittenNoteView';
import { useAuth } from '../context/AuthContext';
import { 
  BookOpen, 
  ChevronRight, 
  Clock, 
  Lightbulb, 
  AlertTriangle, 
  Code2, 
  HelpCircle, 
  CheckCircle2, 
  Layers, 
  Search,
  Database,
  Layout,
  Server,
  Code,
  BookMarked,
  Calculator,
  Globe,
  ExternalLink,
  Video,
  FileText,
  Bookmark,
  Sparkles,
  PenTool,
  CheckCircle,
  GraduationCap
} from 'lucide-react';

interface StudyGuidesViewProps {
  onStartFlashcardTopic: (topic: Topico) => void;
}

export const StudyGuidesView: React.FC<StudyGuidesViewProps> = ({ onStartFlashcardTopic }) => {
  const { user, loadUserLessonProgress, saveUserLessonProgress } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState<'TODOS' | 'conhecimentos_gerais' | 'especificos_ti'>('TODOS');
  const [selectedTopicId, setSelectedTopicId] = useState<Topico>('Língua Portuguesa');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('lp-crase-regencia');
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Personalized user progress per lesson
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [bookmarkedLessonIds, setBookmarkedLessonIds] = useState<string[]>([]);
  const [userNotes, setUserNotes] = useState<Record<string, string>>({});
  const [currentNoteInput, setCurrentNoteInput] = useState<string>('');
  const [isSavingNote, setIsSavingNote] = useState<boolean>(false);

  // Load progress from cloud/local on mount
  useEffect(() => {
    async function fetchProgress() {
      if (user) {
        const cloudProgress = await loadUserLessonProgress();
        if (cloudProgress) {
          setCompletedLessonIds(cloudProgress.completedLessonIds || []);
          setBookmarkedLessonIds(cloudProgress.bookmarkedLessonIds || []);
          setUserNotes(cloudProgress.userNotes || {});
        }
      }
    }
    fetchProgress();
  }, [user]);

  // Update currentNoteInput when switching lesson
  useEffect(() => {
    setCurrentNoteInput(userNotes[selectedLessonId] || '');
  }, [selectedLessonId, userNotes]);

  const currentTopic = STUDY_GUIDE_TOPICS.find((t) => t.id === selectedTopicId) || STUDY_GUIDE_TOPICS[0];
  const currentLesson = currentTopic.lessons.find((l) => l.id === selectedLessonId) || currentTopic.lessons[0];

  const getTopicIcon = (id: Topico) => {
    switch (id) {
      case 'Língua Portuguesa':
        return <BookMarked className="w-4 h-4 text-emerald-400" />;
      case 'Raciocínio Lógico e Matemática':
        return <Calculator className="w-4 h-4 text-amber-400" />;
      case 'Língua Inglesa':
        return <Globe className="w-4 h-4 text-sky-400" />;
      case 'Engenharia de Software':
        return <Layout className="w-4 h-4 text-indigo-400" />;
      case 'Linguagens (Java/Python)':
        return <Code className="w-4 h-4 text-violet-400" />;
      case 'Bancos de Dados':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Arquitetura de Software':
        return <Server className="w-4 h-4 text-rose-400" />;
    }
  };

  const getLinkIcon = (category: UsefulLink['category']) => {
    switch (category) {
      case 'video':
        return <Video className="w-4 h-4 text-rose-400" />;
      case 'official':
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case 'doc':
      case 'article':
      default:
        return <FileText className="w-4 h-4 text-emerald-400" />;
    }
  };

  const toggleRevealAnswer = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCompleteLesson = async (lessonId: string) => {
    const isCompleted = completedLessonIds.includes(lessonId);
    const newCompleted = isCompleted
      ? completedLessonIds.filter((id) => id !== lessonId)
      : [...completedLessonIds, lessonId];
    
    setCompletedLessonIds(newCompleted);

    if (user) {
      await saveUserLessonProgress({
        completedLessonIds: newCompleted,
        bookmarkedLessonIds,
        userNotes
      });
    }
  };

  const toggleBookmarkLesson = async (lessonId: string) => {
    const isBookmarked = bookmarkedLessonIds.includes(lessonId);
    const newBookmarked = isBookmarked
      ? bookmarkedLessonIds.filter((id) => id !== lessonId)
      : [...bookmarkedLessonIds, lessonId];
    
    setBookmarkedLessonIds(newBookmarked);

    if (user) {
      await saveUserLessonProgress({
        completedLessonIds,
        bookmarkedLessonIds: newBookmarked,
        userNotes
      });
    }
  };

  const handleSavePersonalNote = async () => {
    setIsSavingNote(true);
    const newNotes = {
      ...userNotes,
      [selectedLessonId]: currentNoteInput
    };
    setUserNotes(newNotes);

    if (user) {
      await saveUserLessonProgress({
        completedLessonIds,
        bookmarkedLessonIds,
        userNotes: newNotes
      });
    }
    setTimeout(() => setIsSavingNote(false), 500);
  };

  // Filter topics and lessons
  const filteredTopics = STUDY_GUIDE_TOPICS.filter((topic) => {
    if (selectedCategory === 'TODOS') return true;
    return topic.category === selectedCategory;
  }).map((topic) => {
    if (!searchQuery.trim()) return topic;
    const query = searchQuery.toLowerCase();
    const matchingLessons = topic.lessons.filter(
      (l) =>
        l.title.toLowerCase().includes(query) ||
        l.summary.toLowerCase().includes(query) ||
        l.subtopic.toLowerCase().includes(query) ||
        l.keyTakeaways.some((k) => k.toLowerCase().includes(query))
    );
    return { ...topic, lessons: matchingLessons };
  }).filter((t) => t.lessons.length > 0);

  const isCurrentLessonCompleted = completedLessonIds.includes(currentLesson.id);
  const isCurrentLessonBookmarked = bookmarkedLessonIds.includes(currentLesson.id);

  // Combine general links of the topic + lesson specific links
  const combinedUsefulLinks = [
    ...(currentLesson.usefulLinks || []),
    ...(currentTopic.generalUsefulLinks || [])
  ];

  return (
    <div className="w-full h-full flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-950">
      {/* ================= LEFT TOPIC & LESSON BROWSER ================= */}
      <div className="w-full md:w-80 lg:w-96 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/80 flex flex-col shrink-0 overflow-hidden">
        {/* Search Header & Category Filters */}
        <div className="p-4 border-b border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-tight">Estudo Teórico & Resumos</h2>
              <p className="text-[11px] text-slate-400">Conhecimentos Gerais & Específicos de TI</p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar crase, RLM, SOLID, BCNF..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Category Toggle Tabs */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-[11px]">
            <button
              onClick={() => setSelectedCategory('TODOS')}
              className={`py-1 rounded-lg font-semibold transition-all ${
                selectedCategory === 'TODOS'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedCategory('conhecimentos_gerais')}
              className={`py-1 rounded-lg font-semibold transition-all ${
                selectedCategory === 'conhecimentos_gerais'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Gerais
            </button>
            <button
              onClick={() => setSelectedCategory('especificos_ti')}
              className={`py-1 rounded-lg font-semibold transition-all ${
                selectedCategory === 'especificos_ti'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              TI
            </button>
          </div>
        </div>

        {/* Topic & Lesson List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {filteredTopics.map((topic) => {
            const isTopicSelected = selectedTopicId === topic.id;
            return (
              <div key={topic.id} className="space-y-1.5">
                {/* Topic Header pill */}
                <button
                  onClick={() => {
                    setSelectedTopicId(topic.id);
                    if (topic.lessons.length > 0) {
                      setSelectedLessonId(topic.lessons[0].id);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                    isTopicSelected
                      ? 'bg-indigo-600/20 border border-indigo-500/30 text-indigo-300'
                      : 'text-slate-300 hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span>{getTopicIcon(topic.id)}</span>
                    <span className="truncate">{topic.title}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                    {topic.lessons.length}
                  </span>
                </button>

                {/* Sub-lessons */}
                <div className="pl-3 space-y-1 border-l border-slate-800 ml-3">
                  {topic.lessons.map((lesson) => {
                    const isLessonActive = selectedLessonId === lesson.id;
                    const isCompleted = completedLessonIds.includes(lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setSelectedTopicId(topic.id);
                          setSelectedLessonId(lesson.id);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between group ${
                          isLessonActive
                            ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/20'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="truncate flex items-center gap-1.5">
                          {isCompleted ? (
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isLessonActive ? 'text-emerald-300' : 'text-emerald-400'}`} />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-slate-700 shrink-0" />
                          )}
                          <div className="truncate">
                            <p className="truncate">{lesson.title}</p>
                            <p className={`text-[10px] ${isLessonActive ? 'text-indigo-200' : 'text-slate-500'}`}>
                              {lesson.subtopic}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 ml-2">
                          <span className={`text-[10px] ${isLessonActive ? 'text-indigo-100' : 'text-slate-500'}`}>
                            {lesson.readTimeMinutes}m
                          </span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isLessonActive ? 'translate-x-0.5' : 'opacity-0 group-hover:opacity-100'}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer Copyright & Version */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/60 text-center space-y-0.5">
          <p className="text-[10px] text-slate-400 font-medium tracking-wide">
            Developed by <span className="text-slate-200 font-semibold">Eduardo Lessa</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500">
            <span>DevConcursos</span>
            <span>•</span>
            <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-indigo-300 border border-slate-700/80 font-mono font-bold text-[9px]">
              v1.0.0
            </span>
          </div>
        </div>
      </div>

      {/* ================= RIGHT LESSON VIEWER & STUDY ARENA ================= */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 p-4 sm:p-8 lg:p-10">
        <div className="max-w-4xl w-full mx-auto space-y-6">
          
          {/* Breadcrumb & Action Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium border border-slate-700 flex items-center gap-1.5">
                {getTopicIcon(currentTopic.id)}
                <span>{currentTopic.title}</span>
              </span>
              <span>/</span>
              <span className="text-indigo-400 font-medium">{currentLesson.subtopic}</span>
              <span>/</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3 h-3" />
                {currentLesson.readTimeMinutes} min de leitura
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Mark as Completed Button */}
              <button
                onClick={() => toggleCompleteLesson(currentLesson.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  isCurrentLessonCompleted
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{isCurrentLessonCompleted ? 'Lição Concluída' : 'Marcar como Concluída'}</span>
              </button>

              {/* Bookmark Button */}
              <button
                onClick={() => toggleBookmarkLesson(currentLesson.id)}
                className={`p-1.5 rounded-full border transition-all ${
                  isCurrentLessonBookmarked
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                }`}
                title="Favoritar lição"
              >
                <Bookmark className="w-3.5 h-3.5" />
              </button>

              {/* Start Flashcards for Topic */}
              <button
                onClick={() => onStartFlashcardTopic(currentTopic.id)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs font-semibold transition-all shadow-md shadow-indigo-600/20 active:scale-98"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Praticar Flashcards</span>
              </button>
            </div>
          </div>

          {/* Lesson Title & Core Summary */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              {currentLesson.title}
            </h1>
            <div className="p-4 sm:p-5 bg-slate-900/80 border border-slate-800 rounded-2xl text-sm text-slate-300 leading-relaxed shadow-lg">
              <p>{currentLesson.summary}</p>
              {currentLesson.mnemonics && (
                <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-start gap-2.5 text-xs text-amber-300">
                  <Lightbulb className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-amber-200">Mnemônico / Regra de Ouro:</strong>{' '}
                    <span>{currentLesson.mnemonics}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= HANDWRITTEN NOTES (ANOTAÇÕES À MÃO DE CONCURSEIRO) ================= */}
          {currentLesson.handwrittenNotes && currentLesson.handwrittenNotes.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-amber-400" />
                  <span>Quadro Negro Didático: Esquemas & Anotações em Giz</span>
                </h3>
                <span className="text-[11px] font-script text-amber-300/90">
                  📋 Anotações em giz sobre fundo escuro
                </span>
              </div>

              <div className="space-y-4">
                {currentLesson.handwrittenNotes.map((note, idx) => (
                  <HandwrittenNoteView key={idx} note={note} />
                ))}
              </div>
            </div>
          )}

          {/* Key Takeaways Checklist */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>Pontos Decisivos Para Memorizar (Checklist de Prova)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentLesson.keyTakeaways.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-start gap-3 hover:border-slate-700 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0 text-[11px] font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Example (if available) */}
          {currentLesson.codeExample && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Exemplo Prático de Código</span>
              </h3>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{currentLesson.codeExample.language.toUpperCase()}</span>
                  <span>Sintaxe Comentada</span>
                </div>
                <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto bg-slate-950/50">
                  {currentLesson.codeExample.code}
                </pre>
                <div className="p-3 bg-slate-900 text-xs text-slate-400 border-t border-slate-800">
                  💡 {currentLesson.codeExample.explanation}
                </div>
              </div>
            </div>
          )}

          {/* Exam Pitfalls & Pegadinhas de Banca */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Pegadinhas Clássicas das Bancas (FGV, Cebraspe, Cesgranrio)</span>
            </h3>
            <div className="space-y-2">
              {currentLesson.examPitfalls.map((pitfall, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-xs text-rose-200 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="font-bold text-rose-400">⚠️</span>
                  <span>{pitfall}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= USEFUL LINKS SECTION (VÍDEOS & DOCUMENTOS) ================= */}
          {combinedUsefulLinks.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-indigo-400" />
                  <span>Links Úteis, Vídeo Aulas & Documentação Recomendada</span>
                </h3>
                <span className="text-[11px] text-slate-500">Material de aprofundamento</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {combinedUsefulLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 rounded-2xl transition-all group flex flex-col justify-between shadow-md"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-indigo-400">
                          {getLinkIcon(link.category)}
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                            {link.badgeLabel || link.category}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                        {link.title}
                      </h4>
                      {link.description && (
                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                          {link.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center text-[10px] text-indigo-400 group-hover:text-indigo-300 font-semibold">
                      <span>Acessar conteúdo externo</span>
                      <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Sample Question */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              <span>Questão de Aplicação Imediata</span>
            </h3>
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Banca: {currentLesson.sampleQuestion.banca}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                {currentLesson.sampleQuestion.statement}
              </p>

              <div>
                <button
                  onClick={() => toggleRevealAnswer(currentLesson.id)}
                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full text-xs font-semibold border border-slate-700 transition-all"
                >
                  {revealedAnswers[currentLesson.id] ? 'Ocultar Gabarito Comentado' : 'Ver Gabarito Comentado'}
                </button>

                {revealedAnswers[currentLesson.id] && (
                  <div className="mt-3 p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-400">Gabarito Oficial:</span>
                      <span className="text-xs font-mono font-bold text-white px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded">
                        {currentLesson.sampleQuestion.answer}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentLesson.sampleQuestion.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= PERSONAL USER NOTES SECTION ================= */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Minhas Anotações Pessoais Desta Lição (Salvas na sua Conta)</span>
            </h3>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <textarea
                value={currentNoteInput}
                onChange={(e) => setCurrentNoteInput(e.target.value)}
                placeholder="Escreva aqui seus próprios macetes, dúvidas ou pontos de atenção para consultar depois..."
                className="w-full h-24 p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 font-sans leading-relaxed resize-none"
              />
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {userNotes[selectedLessonId] ? '✓ Anotação gravada na nuvem' : 'Suas anotações são privadas e exclusivas do seu login'}
                </span>
                <button
                  onClick={handleSavePersonalNote}
                  disabled={isSavingNote}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-all shadow-sm active:scale-98"
                >
                  {isSavingNote ? 'Salvando...' : 'Salvar Anotação'}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
