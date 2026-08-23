import React, { useState, useEffect, useMemo } from 'react';
import { Flashcard, Banca, Topico, FeedbackType, ReviewSessionStats } from './types';
import { INITIAL_FLASHCARDS } from './data/seedCards';
import { FlashcardView } from './components/FlashcardView';
import { CardListModal } from './components/CardListModal';
import { AddCardModal } from './components/AddCardModal';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { AuthModal } from './components/AuthModal';
import { ProfileModal } from './components/ProfileModal';
import { StudyGuidesView } from './components/StudyGuidesView';
import { AuthGateView } from './components/AuthGateView';
import { useAuth } from './context/AuthContext';
import { 
  PlusCircle, 
  ListFilter, 
  Download, 
  RotateCcw, 
  Shuffle, 
  Search, 
  Award,
  Layers,
  Sparkles,
  BookOpen,
  LogIn,
  UserCheck,
  GraduationCap,
  Cloud,
  Check
} from 'lucide-react';

const STORAGE_KEY_CARDS = 'flashcards_ti_cards_v1';
const STORAGE_KEY_STATS = 'flashcards_ti_stats_v1';

export default function App() {
  const { 
    user, 
    userProfile, 
    isGuest, 
    loading, 
    saveCloudStats, 
    loadCloudStats, 
    loadUserCustomCards, 
    addCustomCardToCloud 
  } = useAuth();

  const isAuthenticated = !!user || isGuest;

  // Active View Mode: Flashcards practice or Detailed Study Guides
  const [currentView, setCurrentView] = useState<'flashcards' | 'guides'>('flashcards');

  // Load saved cards or default to seed data
  const [cards, setCards] = useState<Flashcard[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_CARDS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error('Error loading cards from storage', e);
      }
    }
    return INITIAL_FLASHCARDS;
  });

  // Filter state
  const [selectedBanca, setSelectedBanca] = useState<Banca | 'TODAS'>('TODAS');
  const [selectedTopico, setSelectedTopico] = useState<Topico | 'TODOS'>('TODOS');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Cloud Sync notification toast
  const [cloudSynced, setCloudSynced] = useState(false);

  // Session timer
  const [sessionSeconds, setSessionSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSessionTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Stats state
  const [stats, setStats] = useState<ReviewSessionStats>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_STATS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error loading stats from storage', e);
      }
    }
    return {
      totalRevisados: 0,
      erreiCount: 0,
      dificilCount: 0,
      bomCount: 0,
      facilCount: 0,
      cardsDominados: 0,
      historicoRespostas: [],
    };
  });

  // Sync with Firestore Cloud when user logs in
  useEffect(() => {
    async function syncUserData() {
      if (user) {
        // 1. Load custom cards from cloud
        const customCards = await loadUserCustomCards();
        if (customCards.length > 0) {
          setCards((prev) => {
            const existingIds = new Set(prev.map((c) => c.id));
            const newToAdd = customCards.filter((c) => !existingIds.has(c.id));
            return [...newToAdd, ...prev];
          });
        }

        // 2. Load cloud stats if exist
        const cloudStats = await loadCloudStats();
        if (cloudStats && cloudStats.totalRevisados >= stats.totalRevisados) {
          setStats(cloudStats);
        } else if (stats.totalRevisados > 0) {
          // If local stats have more progress, upload to cloud
          await saveCloudStats(stats);
        }

        setCloudSynced(true);
        setTimeout(() => setCloudSynced(false), 3000);
      }
    }
    syncUserData();
  }, [user]);

  // Filtered master list based on filters
  const filteredCards = useMemo(() => {
    return cards.filter((c) => {
      const matchBanca = selectedBanca === 'TODAS' || c.banca === selectedBanca;
      const matchTopico = selectedTopico === 'TODOS' || c.topico === selectedTopico;
      const matchSearch =
        !searchQuery.trim() ||
        c.pergunta.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.resposta.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.subtopico.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.concurso && c.concurso.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchBanca && matchTopico && matchSearch;
    });
  }, [cards, selectedBanca, selectedTopico, searchQuery]);

  // Active SRS Queue for current session
  const [activeQueue, setActiveQueue] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Initialize or re-sync active queue when filters change or cards reset
  useEffect(() => {
    setActiveQueue([...filteredCards]);
    setCurrentIndex(0);
  }, [filteredCards]);

  // Save cards and stats to localStorage & Firestore
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CARDS, JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
    if (user && stats.totalRevisados > 0) {
      saveCloudStats(stats);
    }
  }, [stats, user]);

  // SRS Feedback Handler
  const handleFeedback = (feedback: FeedbackType) => {
    if (activeQueue.length === 0) return;

    const currentCard = activeQueue[currentIndex];

    // 1. Update stats
    setStats((prev) => {
      const isErrei = feedback === 'errei';
      const isDificil = feedback === 'dificil';
      const isBom = feedback === 'bom';
      const isFacil = feedback === 'facil';

      return {
        ...prev,
        totalRevisados: prev.totalRevisados + 1,
        erreiCount: prev.erreiCount + (isErrei ? 1 : 0),
        dificilCount: prev.dificilCount + (isDificil ? 1 : 0),
        bomCount: prev.bomCount + (isBom ? 1 : 0),
        facilCount: prev.facilCount + (isFacil ? 1 : 0),
        cardsDominados: prev.cardsDominados + (isFacil ? 1 : 0),
        historicoRespostas: [
          ...prev.historicoRespostas,
          {
            cardId: currentCard.id,
            banca: currentCard.banca,
            topico: currentCard.topico,
            feedback,
            timestamp: Date.now(),
          },
        ],
      };
    });

    // 2. Apply Spaced Repetition logic to queue
    const updatedQueue = [...activeQueue];

    if (feedback === 'errei') {
      updatedQueue.splice(currentIndex, 1);
      updatedQueue.push(currentCard);
      setActiveQueue(updatedQueue);
      if (currentIndex >= updatedQueue.length) {
        setCurrentIndex(0);
      }
    } else if (feedback === 'dificil') {
      updatedQueue.splice(currentIndex, 1);
      const reinsertPos = Math.min(currentIndex + 3, updatedQueue.length);
      updatedQueue.splice(reinsertPos, 0, currentCard);
      setActiveQueue(updatedQueue);
      if (currentIndex >= updatedQueue.length) {
        setCurrentIndex(0);
      }
    } else if (feedback === 'bom') {
      if (updatedQueue.length > 1) {
        setCurrentIndex((prev) => (prev + 1) % updatedQueue.length);
      }
    } else if (feedback === 'facil') {
      updatedQueue.splice(currentIndex, 1);
      setActiveQueue(updatedQueue);
      if (currentIndex >= updatedQueue.length && updatedQueue.length > 0) {
        setCurrentIndex(0);
      }
    }
  };

  // Shuffle Queue
  const handleShuffle = () => {
    const shuffled = [...activeQueue].sort(() => Math.random() - 0.5);
    setActiveQueue(shuffled);
    setCurrentIndex(0);
  };

  // Reset Session
  const handleResetSession = () => {
    setActiveQueue([...filteredCards]);
    setCurrentIndex(0);
    setStats({
      totalRevisados: 0,
      erreiCount: 0,
      dificilCount: 0,
      bomCount: 0,
      facilCount: 0,
      cardsDominados: 0,
      historicoRespostas: [],
    });
    setSessionSeconds(0);
  };

  // Add Card
  const handleAddCard = async (newCard: Flashcard) => {
    const updated = [newCard, ...cards];
    setCards(updated);
    if (user) {
      await addCustomCardToCloud(newCard);
    }
  };

  // Select card directly from list
  const handleSelectCardToStudy = (cardId: string) => {
    const target = cards.find((c) => c.id === cardId);
    if (target) {
      setActiveQueue([target, ...cards.filter((c) => c.id !== cardId)]);
      setCurrentIndex(0);
      setCurrentView('flashcards');
    }
  };

  // Jump from Study Guide to Flashcards with filtered Topic
  const handleStartFlashcardTopic = (topic: Topico) => {
    setSelectedTopico(topic);
    setCurrentView('flashcards');
  };

  const acertos = stats.bomCount + stats.facilCount + stats.dificilCount * 0.5;
  const accuracyRate =
    stats.totalRevisados > 0 ? Math.round((acertos / stats.totalRevisados) * 100) : 0;

  const currentCard = activeQueue[currentIndex];

  const bancas: (Banca | 'TODAS')[] = ['TODAS', 'FGV', 'Cebraspe', 'Cesgranrio'];
  const topicos: (Topico | 'TODOS')[] = [
    'TODOS',
    'Engenharia de Software',
    'Linguagens (Java/Python)',
    'Bancos de Dados',
    'Arquitetura de Software',
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-9 h-9 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs text-slate-400 font-medium tracking-wide">Carregando DevConcursos...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col antialiased selection:bg-indigo-600 selection:text-white">
      {/* ================= TOP NAVIGATION BAR ================= */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-8 flex items-center justify-between shadow-lg">
        {/* Brand & Mode Switcher */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <span className="font-black text-white text-sm">IT</span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                DevConcursos
                <span className="text-[10px] hidden sm:inline-block px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-normal">
                  TI & Concursos
                </span>
              </h1>
            </div>
          </div>

          {/* View Toggle Tabs - Active when logged in or guest */}
          {isAuthenticated && (
            <div className="flex items-center p-1 bg-slate-950/80 rounded-full border border-slate-800">
              <button
                onClick={() => setCurrentView('flashcards')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentView === 'flashcards'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Flashcards (SRS)</span>
              </button>

              <button
                onClick={() => setCurrentView('guides')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentView === 'guides'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Estudo Teórico</span>
                <span className="text-[9px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                  Novo
                </span>
              </button>
            </div>
          )}
        </div>

        {/* User Auth & Actions */}
        <div className="flex items-center gap-2.5">
          {cloudSynced && user && (
            <div className="hidden md:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full animate-in fade-in">
              <Cloud className="w-3.5 h-3.5" />
              <span>Nuvem Sincronizada</span>
            </div>
          )}

          {/* User Button */}
          {isAuthenticated ? (
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-full transition-all shadow-sm group"
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={userProfile?.displayName || 'User'}
                  className="w-5 h-5 rounded-full object-cover"
                />
              ) : (
                <div className={`w-5 h-5 rounded-full ${isGuest ? 'bg-amber-600' : 'bg-indigo-600'} text-white text-[10px] font-bold flex items-center justify-center`}>
                  {(userProfile?.displayName || user?.email || 'V')[0].toUpperCase()}
                </div>
              )}
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white max-w-[100px] sm:max-w-[140px] truncate">
                {userProfile?.displayName || user?.email?.split('@')[0] || 'Visitante'}
              </span>
              {isGuest && (
                <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.2 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
                  Visitante
                </span>
              )}
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs font-bold transition-all shadow-md shadow-indigo-600/20 active:scale-98"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Entrar / Cadastrar</span>
            </button>
          )}

          {/* Quick actions in top bar - for logged in users */}
          {isAuthenticated && (
            <div className="hidden sm:flex items-center gap-1.5 border-l border-slate-800 pl-2.5">
              <button
                onClick={() => setIsExportModalOpen(true)}
                className="p-1.5 text-slate-400 hover:text-emerald-400 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-full transition-colors"
                title="Exportar HTML autônomo"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ================= VIEW CONTAINER ================= */}
      {!isAuthenticated ? (
        <AuthGateView />
      ) : currentView === 'guides' ? (
        <StudyGuidesView onStartFlashcardTopic={handleStartFlashcardTopic} />
      ) : (
        /* ================= FLASHCARD WORKSPACE ================= */
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col p-5 sm:p-6 shadow-2xl shrink-0 overflow-y-auto">
            {/* Sidebar Sections */}
            <div className="space-y-6 flex-1">
              {/* Section: Seu Desempenho */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Seu Desempenho
                  </h2>
                  {user && (
                    <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                      Cloud Sync
                    </span>
                  )}
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 shadow-sm">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-3xl font-bold text-indigo-400">{accuracyRate}%</span>
                    <span className="text-xs text-slate-500 font-medium">Aproveitamento</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full mb-4 overflow-hidden">
                    <div
                      className="bg-indigo-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${accuracyRate}%` }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-700/40">
                    <div>
                      <p className="text-xs text-slate-500">Revisados</p>
                      <p className="font-semibold text-sm text-slate-200">
                        {stats.totalRevisados} <span className="text-slate-500 text-xs">/ {cards.length}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Sessão Atual</p>
                      <p className="font-semibold text-sm text-slate-200 font-mono">
                        {formatSessionTime(sessionSeconds)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Fila Ativa</p>
                      <p className="font-semibold text-sm text-indigo-300">
                        {activeQueue.length} cards
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Dominados</p>
                      <p className="font-semibold text-sm text-emerald-400">
                        {stats.cardsDominados}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Filtros Rápidos */}
              <section>
                <h2 className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-widest">
                  Filtros Rápidos
                </h2>
                <div className="space-y-3">
                  {/* Banca Filters */}
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1.5 font-medium">Bancas:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {bancas.map((banca) => {
                        const isSelected = selectedBanca === banca;
                        return (
                          <button
                            key={banca}
                            onClick={() => setSelectedBanca(banca)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shadow-sm'
                                : 'bg-slate-800 border border-slate-700 text-slate-400 opacity-60 hover:opacity-100'
                            }`}
                          >
                            {banca}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Topico Filters */}
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1.5 font-medium">Assuntos:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {topicos.map((topico) => {
                        const isSelected = selectedTopico === topico;
                        const label = topico === 'TODOS' 
                          ? 'Todos' 
                          : topico === 'Engenharia de Software' 
                          ? 'Eng. Software' 
                          : topico === 'Linguagens (Java/Python)'
                          ? 'Java/Python'
                          : topico === 'Bancos de Dados'
                          ? 'Banco Dados'
                          : 'Arquitetura';

                        return (
                          <button
                            key={topico}
                            onClick={() => setSelectedTopico(topico)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shadow-sm'
                                : 'bg-slate-800 border border-slate-700 text-slate-400 opacity-60 hover:opacity-100'
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="relative pt-1">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Buscar termo..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-slate-950/60 border border-slate-700/80 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>
              </section>

              {/* Promo Banner / Info Box */}
              <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-800/30 text-xs text-indigo-300 space-y-2">
                <div className="flex items-center gap-2 font-bold text-indigo-200">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>Dica de Especialista TI</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  Alterne entre a leitura das <strong>Trilhas Teóricas</strong> e a repetição ativa nos flashcards para fixar o vocabulário das bancas FGV e Cebraspe.
                </p>
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="mt-auto pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium">Modo de Estudo Ativo</span>
              </div>
            </div>
          </aside>

          {/* Main Flashcard Arena */}
          <main className="flex-1 flex flex-col min-w-0 relative">
            {/* Toolbar Header */}
            <header className="h-14 border-b border-slate-800 flex items-center justify-between px-4 sm:px-8 bg-slate-900/30 backdrop-blur z-20 shrink-0">
              <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                <span className="text-xs sm:text-sm text-slate-400 truncate">
                  Assunto: <strong className="text-slate-200 font-semibold">{selectedTopico}</strong>
                </span>
                <span className="text-slate-700">|</span>
                <span className="text-xs sm:text-sm text-slate-400 truncate">
                  Banca: <strong className="text-slate-200 font-semibold">{selectedBanca}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {activeQueue.length > 0 && (
                  <div className="text-xs font-mono bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 text-slate-300 whitespace-nowrap shadow-inner">
                    Card #{String(currentIndex + 1).padStart(2, '0')} de {activeQueue.length}
                  </div>
                )}

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                    title="Criar novo flashcard"
                  >
                    <PlusCircle className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="hidden sm:inline">Novo</span>
                  </button>

                  <button
                    onClick={() => setIsListModalOpen(true)}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                    title="Ver banco de questões"
                  >
                    <ListFilter className="w-3.5 h-3.5 text-slate-400" />
                    <span className="hidden sm:inline">Banco</span>
                  </button>

                  <button
                    onClick={handleShuffle}
                    className="p-1 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                    title="Embaralhar"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleResetSession}
                    className="p-1 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                    title="Reiniciar sessão"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </header>

            {/* Central Radial Gradient Arena */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-950 to-slate-950 overflow-y-auto">
              {activeQueue.length > 0 && currentCard ? (
                <FlashcardView
                  key={currentCard.id + '-' + currentIndex}
                  card={currentCard}
                  currentIndex={currentIndex}
                  totalInQueue={activeQueue.length}
                  onFeedback={handleFeedback}
                />
              ) : (
                /* Queue Completed State */
                <div className="my-8 p-8 sm:p-10 text-center bg-slate-900/80 border border-slate-800 rounded-[32px] max-w-lg mx-auto flex flex-col items-center shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/10">
                    <Award className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Fila de Estudos Concluída!
                  </h2>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    Você revisou todos os flashcards selecionados.{' '}
                    {stats.cardsDominados > 0 && (
                      <span className="text-emerald-400 font-semibold block mt-1">
                        {stats.cardsDominados} cards dominados com sucesso nesta rodada.
                      </span>
                    )}
                  </p>

                  <div className="grid grid-cols-2 gap-3 w-full mb-6 text-xs">
                    <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                      <span className="text-slate-500 block mb-0.5">Taxa de Acerto</span>
                      <span className="text-xl font-bold text-indigo-400">{accuracyRate}%</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                      <span className="text-slate-500 block mb-0.5">Total de Revisões</span>
                      <span className="text-xl font-bold text-slate-200">{stats.totalRevisados}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 justify-center">
                    <button
                      onClick={handleResetSession}
                      className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-xs transition-all shadow-lg shadow-indigo-600/20"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reiniciar Rodada</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedBanca('TODAS');
                        setSelectedTopico('TODOS');
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full font-semibold text-xs border border-slate-700 transition-all"
                    >
                      <span>Limpar Filtros</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <footer className="h-12 border-t border-slate-800 bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 text-[10px] text-slate-500 uppercase tracking-widest shrink-0">
              <span>Lógica SRS: Leitner System Modificado</span>
              <span>Atalhos: [Espaço] Virar • [1-4] Nível de Retenção</span>
            </footer>
          </main>
        </div>
      )}

      {/* ================= MODALS ================= */}
      <CardListModal
        isOpen={isListModalOpen}
        onClose={() => setIsListModalOpen(false)}
        cards={cards}
        onSelectCardToStudy={handleSelectCardToStudy}
      />

      <AddCardModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddCard={handleAddCard}
      />

      <ExportHtmlModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        cards={cards}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        accuracyRate={accuracyRate}
        totalCardsCount={cards.length}
      />
    </div>
  );
}
