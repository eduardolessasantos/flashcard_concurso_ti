import React, { useState, useEffect, useMemo } from 'react';
import { Flashcard, Banca, Topico, FeedbackType, ReviewSessionStats, UserCardProgressMap } from './types';
import { INITIAL_FLASHCARDS } from './data/seedCards';
import { FlashcardView } from './components/FlashcardView';
import { CardListModal } from './components/CardListModal';
import { AddCardModal } from './components/AddCardModal';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { AuthModal } from './components/AuthModal';
import { ProfileModal } from './components/ProfileModal';
import { StudyGuidesView } from './components/StudyGuidesView';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsModal } from './components/TermsModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { EducationalGuideModal } from './components/EducationalGuideModal';
import { EducationalSection } from './components/EducationalSection';
import { StaticPageView, StaticRoute } from './components/StaticPageView';
import { ConcursosAbertosView } from './components/ConcursosAbertosView';
import { GuiaCarreiraView } from './components/GuiaCarreiraView';
import { HomePageLanding } from './components/HomePageLanding';
import { GamificationDashboardModal } from './components/GamificationDashboardModal';
import { 
  loadGamificationState, 
  saveGamificationState, 
  registerCardAnswer, 
  getLevelInfo, 
  GamificationState 
} from './services/gamification';
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
  Cloud,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Flame,
  Crown,
  Trophy,
  ChevronRight,
  Zap,
  Home
} from 'lucide-react';

const STORAGE_KEY_CARDS = 'flashcards_ti_cards_v2';
const STORAGE_KEY_STATS = 'flashcards_ti_stats_v2';

export type ExtendedViewMode = 'home' | 'flashcards' | 'guides' | 'concursos-abertos' | 'guia-carreira-ti' | StaticRoute;

export default function App() {
  const { 
    user, 
    userProfile, 
    loading, 
    saveCloudStats, 
    loadCloudStats, 
    loadUserCustomCards, 
    addCustomCardToCloud,
    saveUserCardProgress,
    loadUserCardProgress
  } = useAuth();

  const isAuthenticated = !!user;

  // Active View Mode: Home Landing, Flashcards, Study Guides, Concursos Abertos, Guia de Carreira, or Institutional Static
  const [currentView, setCurrentView] = useState<ExtendedViewMode>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
      if (path === 'sobre') return 'sobre';
      if (path === 'privacidade') return 'privacidade';
      if (path === 'termos') return 'termos';
      if (path === 'contato') return 'contato';
      if (path === 'concursos-abertos') return 'concursos-abertos';
      if (path === 'guia-carreira-ti') return 'guia-carreira-ti';
      if (path === 'guias' || path === 'cadernos') return 'guides';
      if (path === 'flashcards' || path === 'estudar' || path === 'praticar') return 'flashcards';
      if (path === '' || path === 'index.html' || path === 'home') return 'home';
    }
    return 'home';
  });

  // Keep view in sync with browser URL and history
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
      if (path === 'sobre') setCurrentView('sobre');
      else if (path === 'privacidade') setCurrentView('privacidade');
      else if (path === 'termos') setCurrentView('termos');
      else if (path === 'contato') setCurrentView('contato');
      else if (path === 'concursos-abertos') setCurrentView('concursos-abertos');
      else if (path === 'guia-carreira-ti') setCurrentView('guia-carreira-ti');
      else if (path === 'guias' || path === 'cadernos') setCurrentView('guides');
      else if (path === 'flashcards' || path === 'estudar' || path === 'praticar') setCurrentView('flashcards');
      else if (path === '' || path === 'index.html' || path === 'home') setCurrentView('home');
    };
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  const navigateToView = (view: ExtendedViewMode) => {
    const url = view === 'home' ? '/' : `/${view}`;
    window.history.pushState({}, '', url);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => navigateToView('home');
  const navigateToFlashcards = (topic?: Topico) => {
    if (topic) {
      setSelectedTopico(topic);
    }
    navigateToView('flashcards');
  };
  const navigateToGuides = () => navigateToView('guides');
  const navigateToConcursos = () => navigateToView('concursos-abertos');
  const navigateToCarreira = () => navigateToView('guia-carreira-ti');

  // Gamification state from localStorage: devconcursos_gamification_v2
  const [gamification, setGamification] = useState<GamificationState>(() => loadGamificationState());
  const [isGamificationModalOpen, setIsGamificationModalOpen] = useState(false);
  const [gamificationNotification, setGamificationNotification] = useState<{ message: string; type: 'xp' | 'badge' | 'level' } | null>(null);

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
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEducationalGuideOpen, setIsEducationalGuideOpen] = useState(false);

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

        // 2. Load personalized card progress from cloud
        const cloudCardProgress = await loadUserCardProgress();
        if (cloudCardProgress) {
          setCards((prev) =>
            prev.map((card) => {
              const state = cloudCardProgress[card.id];
              if (state) {
                return {
                  ...card,
                  statusSRS: state.statusSRS,
                  revisoes: state.revisoes,
                  acertos: state.acertos,
                  erros: state.erros,
                };
              }
              return card;
            })
          );
        }

        // 3. Load cloud stats if exist
        const cloudStats = await loadCloudStats();
        if (cloudStats && cloudStats.totalRevisados >= stats.totalRevisados) {
          setStats(cloudStats);
        } else if (stats.totalRevisados > 0) {
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

  // SRS Feedback Handler with Gamification XP & Badges
  const handleFeedback = (feedback: FeedbackType) => {
    if (activeQueue.length === 0) return;

    const currentCard = activeQueue[currentIndex];

    // Determine new SRS status
    let newStatusSRS: 'novo' | 'em_revisao' | 'dominado' = 'em_revisao';
    if (feedback === 'facil') newStatusSRS = 'dominado';
    else if (feedback === 'errei') newStatusSRS = 'em_revisao';
    else if (feedback === 'bom') newStatusSRS = 'em_revisao';

    // 1. Update card in state and prepare cloud sync
    const updatedCards = cards.map((c) =>
      c.id === currentCard.id
        ? {
            ...c,
            statusSRS: newStatusSRS,
            revisoes: (c.revisoes || 0) + 1,
            acertos: (c.acertos || 0) + (feedback === 'bom' || feedback === 'facil' ? 1 : 0),
            erros: (c.erros || 0) + (feedback === 'errei' ? 1 : 0),
          }
        : c
    );
    setCards(updatedCards);

    // Save progress mapping to Firestore under authenticated user's ID
    if (user) {
      const progressMap: UserCardProgressMap = {};
      updatedCards.forEach((c) => {
        if (c.statusSRS && c.statusSRS !== 'novo') {
          progressMap[c.id] = {
            statusSRS: c.statusSRS,
            box: feedback === 'facil' ? 5 : feedback === 'bom' ? 3 : 1,
            revisoes: c.revisoes || 1,
            acertos: c.acertos || 0,
            erros: c.erros || 0,
            lastReviewedAt: Date.now(),
            nextReviewDate: new Date(Date.now() + 86400000).toISOString()
          };
        }
      });
      saveUserCardProgress(progressMap);
    }

    // 2. Update stats
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

    // 3. Register Gamification Result (XP, Badges, Level, Streak)
    const gamificationResult = registerCardAnswer(
      gamification,
      feedback,
      currentCard.topico,
      currentCard.banca
    );
    setGamification(gamificationResult.newState);

    // Check level up or new badges notification
    if (gamificationResult.leveledUp) {
      setGamificationNotification({
        message: `Parabéns! Você subiu para ${gamificationResult.currentLevel}! 🎉`,
        type: 'level'
      });
      setTimeout(() => setGamificationNotification(null), 4500);
    } else if (gamificationResult.newBadgesUnlocked.length > 0) {
      setGamificationNotification({
        message: `Nova Conquista Desbloqueada: ${gamificationResult.newBadgesUnlocked[0].title}! 🏆`,
        type: 'badge'
      });
      setTimeout(() => setGamificationNotification(null), 4000);
    }

    // 4. Apply Spaced Repetition queue re-ordering
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
        updatedQueue.splice(currentIndex, 1);
        const reinsertPos = Math.min(currentIndex + 8, updatedQueue.length);
        updatedQueue.splice(reinsertPos, 0, currentCard);
        setActiveQueue(updatedQueue);
        if (currentIndex >= updatedQueue.length) {
          setCurrentIndex(0);
        }
      }
    } else if (feedback === 'facil') {
      updatedQueue.splice(currentIndex, 1);
      setActiveQueue(updatedQueue);
      if (currentIndex >= updatedQueue.length) {
        setCurrentIndex(0);
      }
    }
  };

  const handleResetSession = () => {
    setActiveQueue([...filteredCards]);
    setCurrentIndex(0);
  };

  const handleShuffle = () => {
    const shuffled = [...activeQueue].sort(() => Math.random() - 0.5);
    setActiveQueue(shuffled);
    setCurrentIndex(0);
  };

  const handleAddCard = async (newCardData: Omit<Flashcard, 'id'>) => {
    const newCard: Flashcard = {
      ...newCardData,
      id: `custom-${Date.now()}`,
    };
    setCards([newCard, ...cards]);

    if (user) {
      await addCustomCardToCloud(newCard);
    }
  };

  const handleSelectCardToStudy = (cardId: string) => {
    const target = cards.find((c) => c.id === cardId);
    if (target) {
      setActiveQueue([target, ...cards.filter((c) => c.id !== cardId)]);
      setCurrentIndex(0);
      setCurrentView('flashcards');
    }
  };

  const handleStartFlashcardTopic = (topic: Topico) => {
    setSelectedTopico(topic);
    setCurrentView('flashcards');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const acertos = stats.bomCount + stats.facilCount + stats.dificilCount * 0.5;
  const accuracyRate =
    stats.totalRevisados > 0 ? Math.round((acertos / stats.totalRevisados) * 100) : 0;

  const currentCard = activeQueue[currentIndex];
  const levelInfo = getLevelInfo(gamification.totalXp);

  const bancas: (Banca | 'TODAS')[] = ['TODAS', 'FGV', 'Cebraspe', 'Cesgranrio'];
  const topicosGerais: Topico[] = [
    'Língua Portuguesa',
    'Raciocínio Lógico e Matemática',
    'Língua Inglesa',
    'Atualidades & IA',
    'Legislação & Proteção de Dados'
  ];
  const topicosTI: Topico[] = [
    'Engenharia de Software',
    'Linguagens (Java/Python)',
    'Bancos de Dados',
    'Arquitetura de Software',
    'Segurança da Informação',
    'Governança & Gestão de TI',
    'Inteligência de Negócios (BI)'
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-9 h-9 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs text-slate-400 font-medium tracking-wide">Carregando Flash Concurso TI...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col antialiased selection:bg-indigo-600 selection:text-white">
      
      {/* ================= BARRA SUPERIOR DE PROGRESSO FIXA (GAMIFICAÇÃO ADSENSE) ================= */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs px-3 sm:px-6 py-2 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Nível do Usuário */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs border border-indigo-500/30">
              <Crown className="w-3.5 h-3.5" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-white text-xs flex items-center gap-1.5">
                <span>{levelInfo.level}</span>
              </div>
              <div className="text-[10px] text-slate-400 hidden sm:block">
                {gamification.totalXp} XP Acumulados
              </div>
            </div>
          </div>

          {/* Barra de XP com progresso para o próximo nível */}
          <div className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-4">
            <div className="flex justify-between items-center text-[10px] mb-1 font-semibold">
              <span className="text-slate-400 hidden xs:inline">{levelInfo.minXp} XP</span>
              <span className="text-indigo-400 font-bold">{levelInfo.progressPercent}% para o próx. nível</span>
              <span className="text-slate-400 hidden xs:inline">{levelInfo.maxXp} XP</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-all duration-300"
                style={{ width: `${Math.max(4, levelInfo.progressPercent)}%` }}
              />
            </div>
          </div>

          {/* Streak Counter & Conquistas Modal Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Streak com tooltip nativo e visual de fogo */}
            <div 
              className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/25 rounded-full text-amber-400 font-bold cursor-default"
              title={`Ofensiva de ${gamification.currentStreak} dias consecutivos de estudo! Estude diariamente para manter seu bônus de +50 XP.`}
            >
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
              <span className="text-xs">{gamification.currentStreak}d</span>
            </div>

            {/* Botão Ver Conquistas */}
            <button
              onClick={() => setIsGamificationModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 rounded-full font-bold text-xs transition-all shadow-sm active:scale-98"
              title="Abrir painel de conquistas, badges e ranking semanal"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Ver Conquistas</span>
              <span className="md:hidden">Badges</span>
            </button>
          </div>

        </div>
      </div>

      {/* ================= TOP BRAND & NAV BAR ================= */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between shadow-lg">
        {/* Brand & Mode Switcher */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div 
            onClick={navigateHome}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
              <span className="font-black text-white text-sm">FC</span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                Flash Concurso TI
              </h1>
            </div>
          </div>

          {/* View Navigation Tabs */}
          <nav className="hidden lg:flex items-center p-1 bg-slate-950/80 rounded-full border border-slate-800 text-xs">
            <button
              onClick={navigateHome}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                currentView === 'home'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>

            <button
              onClick={() => navigateToFlashcards()}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                currentView === 'flashcards'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Flashcards (SRS)</span>
            </button>

            <button
              onClick={navigateToConcursos}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                currentView === 'concursos-abertos'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>Concursos Abertos</span>
              <span className="text-[9px] px-1.5 py-0.2 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
                2026
              </span>
            </button>

            <button
              onClick={navigateToCarreira}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                currentView === 'guia-carreira-ti'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Guia de Carreira</span>
            </button>

            <button
              onClick={navigateToGuides}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                currentView === 'guides'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Cadernos Teóricos</span>
            </button>
          </nav>
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
                <div className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {(userProfile?.displayName || user?.email || 'U')[0].toUpperCase()}
                </div>
              )}
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white max-w-[100px] sm:max-w-[140px] truncate">
                {userProfile?.displayName || user?.email?.split('@')[0] || 'Meu Perfil'}
              </span>
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

          {/* Quick actions in top bar */}
          <div className="hidden sm:flex items-center gap-1.5 border-l border-slate-800 pl-2.5">
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="p-1.5 text-slate-400 hover:text-emerald-400 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-full transition-colors"
              title="Exportar HTML autônomo"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden bg-slate-900/90 border-b border-slate-800 px-4 py-2 flex items-center gap-1 overflow-x-auto text-xs scrollbar-none">
        <button
          onClick={navigateHome}
          className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
            currentView === 'home' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          Início
        </button>
        <button
          onClick={() => navigateToFlashcards()}
          className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
            currentView === 'flashcards' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          Flashcards (SRS)
        </button>
        <button
          onClick={navigateToConcursos}
          className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
            currentView === 'concursos-abertos' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          Concursos Abertos
        </button>
        <button
          onClick={navigateToCarreira}
          className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
            currentView === 'guia-carreira-ti' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          Guia de Carreira
        </button>
        <button
          onClick={navigateToGuides}
          className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
            currentView === 'guides' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          Cadernos Teóricos
        </button>
      </div>

      {/* Gamification Floating Toast Notification */}
      {gamificationNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-indigo-500/50 shadow-2xl rounded-2xl px-4 py-3 text-xs text-white font-bold flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-300">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0">
            <Trophy className="w-4 h-4 text-amber-300" />
          </div>
          <span>{gamificationNotification.message}</span>
        </div>
      )}

      {/* ================= VIEW CONTAINER ================= */}
      {currentView === 'home' ? (
        <HomePageLanding
          onStartStudy={(topic) => {
            if (topic) {
              setSelectedTopico(topic);
            }
            navigateToFlashcards(topic);
          }}
          onNavigateToConcursos={navigateToConcursos}
          onNavigateToCarreira={navigateToCarreira}
          onNavigateToGuides={navigateToGuides}
          onNavigateToStatic={(route) => navigateToView(route as ExtendedViewMode)}
          onOpenAuthModal={() => setIsAuthModalOpen(true)}
        />
      ) : ['sobre', 'privacidade', 'termos', 'contato'].includes(currentView) ? (
        <StaticPageView
          route={currentView as StaticRoute}
          onNavigateHome={navigateHome}
          onNavigateRoute={(r) => navigateToView(r as ExtendedViewMode)}
        />
      ) : currentView === 'concursos-abertos' ? (
        <ConcursosAbertosView
          onSelectTopicForStudy={handleStartFlashcardTopic}
          onNavigateHome={navigateHome}
        />
      ) : currentView === 'guia-carreira-ti' ? (
        <GuiaCarreiraView
          onSelectTopicForStudy={handleStartFlashcardTopic}
          onNavigateHome={navigateHome}
        />
      ) : currentView === 'guides' ? (
        <StudyGuidesView onStartFlashcardTopic={handleStartFlashcardTopic} />
      ) : (
        /* ================= FLASHCARD WORKSPACE ================= */
        <div className="flex-1 flex flex-col lg:flex-row min-h-[680px]">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col p-5 sm:p-6 shadow-2xl shrink-0 overflow-y-auto">
            <div className="space-y-6 flex-1">
              
              {/* Section: Seu Desempenho */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Seu Desempenho
                  </h2>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 font-bold">
                    {gamification.totalXp} XP
                  </span>
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
                  Filtros por Disciplina & Banca
                </h2>
                <div className="space-y-4">
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

                  {/* Topico Filters - Conhecimentos Gerais */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">Conhecimentos Gerais:</p>
                      {selectedTopico !== 'TODOS' && (
                        <button
                          onClick={() => setSelectedTopico('TODOS')}
                          className="text-[10px] text-indigo-400 hover:underline"
                        >
                          Limpar filtro
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {topicosGerais.map((topico) => {
                         const isSelected = selectedTopico === topico;
                         const labelMap: Record<string, string> = {
                           'Língua Portuguesa': 'Português',
                           'Raciocínio Lógico e Matemática': 'RLM',
                           'Língua Inglesa': 'Inglês',
                           'Atualidades & IA': 'Atualidades & IA',
                           'Legislação & Proteção de Dados': 'Legislação / LGPD'
                         };
                         return (
                           <button
                             key={topico}
                             onClick={() => setSelectedTopico(isSelected ? 'TODOS' : topico)}
                             className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                               isSelected
                                 ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-sm'
                                 : 'bg-slate-800 border border-slate-700 text-slate-400 opacity-70 hover:opacity-100'
                             }`}
                           >
                             {labelMap[topico] || topico}
                           </button>
                         );
                       })}
                    </div>
                  </div>

                  {/* Topico Filters - Específicos TI */}
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1.5 font-medium">Específicos de TI:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {topicosTI.map((topico) => {
                         const isSelected = selectedTopico === topico;
                         const labelMap: Record<string, string> = {
                           'Engenharia de Software': 'Eng. Software',
                           'Linguagens (Java/Python)': 'Java / Python',
                           'Bancos de Dados': 'Bancos de Dados',
                           'Arquitetura de Software': 'Arquitetura',
                           'Segurança da Informação': 'Segurança Info',
                           'Governança & Gestão de TI': 'Governança & ITIL',
                           'Inteligência de Negócios (BI)': 'BI & Data Warehouse'
                         };
                         return (
                           <button
                             key={topico}
                             onClick={() => setSelectedTopico(isSelected ? 'TODOS' : topico)}
                             className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                               isSelected
                                 ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-sm'
                                 : 'bg-slate-800 border border-slate-700 text-slate-400 opacity-70 hover:opacity-100'
                             }`}
                           >
                             {labelMap[topico] || topico}
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
                      placeholder="Buscar termos em questões..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-slate-950/60 border border-slate-700/80 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>
              </section>

              {/* Promo Banners for New Sections */}
              <div className="space-y-2">
                <button
                  onClick={navigateToConcursos}
                  className="w-full p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-left hover:border-amber-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-300">Concursos Abertos</div>
                      <div className="text-[10px] text-slate-400">TRT, Bacen, TCU e Dataprev</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </button>

                <button
                  onClick={navigateToCarreira}
                  className="w-full p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-left hover:border-indigo-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-indigo-300">Guia de Carreira & Salários</div>
                      <div className="text-[10px] text-slate-400">Tabela salarial até R$ 35 mil</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </button>
              </div>

            </div>

            {/* Bottom Actions inside Sidebar */}
            <div className="pt-4 border-t border-slate-800 space-y-2 mt-4">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white rounded-full font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Criar Novo Flashcard</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setIsListModalOpen(true)}
                  className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5"
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span>Ver Todos</span>
                </button>

                <button
                  onClick={handleShuffle}
                  className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Embaralhar</span>
                </button>
              </div>

              {/* Sidebar Footer Copyright */}
              <div className="pt-3.5 mt-2 border-t border-slate-800/80 text-center space-y-1">
                <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                  Developed by <span className="text-slate-200 font-semibold">Eduardo Lessa</span>
                </p>
                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500">
                  <span>Flash Concurso TI</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-800/80 text-indigo-300 border border-slate-700/80 font-mono font-bold">
                    v2.0
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Flashcard Arena */}
          <main className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8 lg:p-12 overflow-y-auto bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950">
            {activeQueue.length > 0 && currentCard ? (
              <div className="w-full max-w-2xl flex flex-col items-center">
                {/* SRS Queue Indicator & Breadcrumb */}
                <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-4 px-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-indigo-400">
                      Card {currentIndex + 1} de {activeQueue.length}
                    </span>
                    <span>•</span>
                    <span className="text-slate-400">{currentCard.topico}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleResetSession}
                      className="p-1 text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
                      title="Reiniciar Sessão"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span className="text-[11px] hidden sm:inline">Reiniciar</span>
                    </button>
                  </div>
                </div>

                {/* The Flashcard View */}
                <FlashcardView
                  key={currentCard.id}
                  card={currentCard}
                  currentIndex={currentIndex}
                  totalInQueue={activeQueue.length}
                  onFeedback={handleFeedback}
                />
              </div>
            ) : (
              <div className="max-w-md text-center p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4 shadow-2xl animate-in fade-in zoom-in-95">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/20">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white">Sessão Concluída!</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Você revisou todos os flashcards do filtro selecionado. Continue praticando outros tópicos ou reinicie a fila!
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleResetSession}
                    className="flex-1 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reiniciar Filtro</span>
                  </button>
                  <button
                    onClick={() => {
                      setSelectedBanca('TODAS');
                      setSelectedTopico('TODOS');
                    }}
                    className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full font-semibold text-xs border border-slate-700 transition-all"
                  >
                    Ver Todas as Questões
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      )}

      {/* ================= PORTAL EDUCACIONAL & EMENTA TI (ALTO VALOR PEDAGÓGICO) ================= */}
      {currentView === 'flashcards' && (
        <EducationalSection
          onSelectTopic={(topic) => {
            setSelectedTopico(topic);
            handleResetSession();
          }}
          onOpenEducationalGuideModal={() => setIsEducationalGuideOpen(true)}
          onNavigateToGuides={navigateToGuides}
        />
      )}

      {/* ================= FOOTER ================= */}
      <Footer
        onOpenPrivacy={() => navigateToView('privacidade')}
        onOpenTerms={() => navigateToView('termos')}
        onOpenAbout={() => navigateToView('sobre')}
        onOpenContact={() => navigateToView('contato')}
        onOpenEducationalGuide={() => setIsEducationalGuideOpen(true)}
        onNavigateRoute={(route) => navigateToView(route as ExtendedViewMode)}
        onSelectView={(v) => navigateToView(v as ExtendedViewMode)}
      />

      {/* ================= MODALS ================= */}
      <GamificationDashboardModal
        isOpen={isGamificationModalOpen}
        onClose={() => setIsGamificationModalOpen(false)}
        gamification={gamification}
        userName={userProfile?.displayName || user?.email?.split('@')[0] || 'Eduardo Lessa'}
      />

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
        stats={stats}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <EducationalGuideModal
        isOpen={isEducationalGuideOpen}
        onClose={() => setIsEducationalGuideOpen(false)}
        onNavigateRoute={(r) => navigateToView(r as ExtendedViewMode)}
        onSelectView={(v) => navigateToView(v as ExtendedViewMode)}
      />
    </div>
  );
}
