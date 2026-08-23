import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, FileCode } from 'lucide-react';
import { Flashcard } from '../types';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  cards: Flashcard[];
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({
  isOpen,
  onClose,
  cards,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateSingleFileHtml = () => {
    const cardsJson = JSON.stringify(cards, null, 2);

    return `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevConcursos - Flashcards TI Concursos (SRS)</title>
  <!-- Google AdSense -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1242153191500402" crossorigin="anonymous"></script>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    .perspective-1000 { perspective: 1000px; }
    .transform-style-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased flex flex-col">
  <!-- Header -->
  <header class="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-30 px-4 py-3">
    <div class="max-w-5xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <div class="p-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
          <i data-lucide="book-open" class="w-5 h-5"></i>
        </div>
        <div>
          <h1 class="text-base sm:text-lg font-bold text-white tracking-tight">Flashcards TI Concursos</h1>
          <p class="text-xs text-slate-400">FGV • Cebraspe • Cesgranrio | Engenharia, Linguagens, BD & Arquitetura</p>
        </div>
      </div>
      <button onclick="resetSession()" class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors">
        <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
        <span>Reiniciar Fila</span>
      </button>
    </div>
  </header>

  <!-- Main Container -->
  <main class="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 flex flex-col">
    <!-- Dashboard Stats -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 shadow-sm">
        <span class="text-xs text-slate-400 font-medium block mb-1">Fila Ativa (SRS)</span>
        <div class="flex items-baseline gap-1.5">
          <span id="stat-queue" class="text-2xl font-bold text-white">0</span>
          <span class="text-xs text-slate-500">cards</span>
        </div>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 shadow-sm">
        <span class="text-xs text-slate-400 font-medium block mb-1">Taxa de Acerto</span>
        <div class="flex items-baseline gap-1.5">
          <span id="stat-accuracy" class="text-2xl font-bold text-emerald-400">0%</span>
        </div>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 shadow-sm">
        <span class="text-xs text-slate-400 font-medium block mb-1">Revisões Feitas</span>
        <div class="flex items-baseline gap-1.5">
          <span id="stat-reviewed" class="text-2xl font-bold text-white">0</span>
        </div>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 shadow-sm">
        <span class="text-xs text-slate-400 font-medium block mb-1">Dominados (Fácil)</span>
        <div class="flex items-baseline gap-1.5">
          <span id="stat-mastered" class="text-2xl font-bold text-purple-400">0</span>
        </div>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-6 space-y-3">
      <div class="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
        <span class="text-xs font-semibold text-slate-400 shrink-0">Banca:</span>
        <div class="flex flex-wrap gap-1.5" id="banca-filter-buttons"></div>
      </div>
      <div class="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
        <span class="text-xs font-semibold text-slate-400 shrink-0">Assunto:</span>
        <div class="flex flex-wrap gap-1.5" id="topico-filter-buttons"></div>
      </div>
    </div>

    <!-- Active Card Arena -->
    <div id="card-arena" class="w-full max-w-3xl mx-auto flex flex-col items-center flex-1">
      <div class="w-full flex items-center justify-between text-xs text-slate-400 mb-3 px-1">
        <span id="card-progress-text" class="font-semibold text-slate-200">Card 1 de 1</span>
        <span id="card-origin-text" class="text-slate-400 truncate max-w-xs"></span>
      </div>

      <!-- 3D Card -->
      <div class="w-full h-[400px] perspective-1000 select-none mb-5">
        <div id="flashcard-element" onclick="flipCard()" class="relative w-full h-full rounded-2xl cursor-pointer transition-transform duration-500 transform-style-3d shadow-xl">
          <!-- Front -->
          <div class="absolute inset-0 w-full h-full bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-lg">
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <div class="flex items-center gap-2" id="card-front-badges"></div>
                <span class="text-xs text-slate-500 flex items-center gap-1">
                  <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i>
                  <span>Clique para virar</span>
                </span>
              </div>
              <div id="card-subtopico" class="text-xs text-slate-400 font-medium mb-3"></div>
              <div class="max-h-[220px] overflow-y-auto pr-1">
                <p id="card-question" class="text-slate-100 text-base sm:text-lg font-medium leading-relaxed"></p>
                <div id="card-code-container" class="hidden mt-3 p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-emerald-300"></div>
              </div>
            </div>
            <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span id="card-hint-text" class="text-amber-400/90 text-xs"></span>
              <span class="text-blue-400 font-medium">Ver Resposta ↵</span>
            </div>
          </div>

          <!-- Back -->
          <div class="absolute inset-0 w-full h-full bg-slate-900 border border-blue-900/40 rounded-2xl p-6 flex flex-col justify-between rotate-y-180 backface-hidden shadow-lg">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800">
                <span class="text-xs font-semibold text-slate-400">GABARITO & ANÁLISE</span>
                <span class="text-xs text-slate-500">Clique para voltar</span>
              </div>
              <div id="card-answer-container" class="my-2"></div>
              <div class="max-h-[190px] overflow-y-auto pr-1 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Comentário:</span>
                <p id="card-explanation" class="whitespace-pre-line text-slate-200"></p>
              </div>
            </div>
            <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Avalie seu nível de retenção:</span>
              <span class="text-blue-400 font-medium">SRS Repetição Espaçada</span>
            </div>
          </div>
        </div>
      </div>

      <!-- SRS Controls -->
      <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <button onclick="handleFeedback('errei')" class="flex flex-col items-center justify-center p-2.5 rounded-xl border border-rose-800/50 bg-rose-950/30 hover:bg-rose-900/50 text-rose-300 transition-all">
          <span class="font-bold text-sm text-rose-400">✕ Errei</span>
          <span class="text-[10px] text-slate-400">Volta ao fim da fila (1)</span>
        </button>
        <button onclick="handleFeedback('dificil')" class="flex flex-col items-center justify-center p-2.5 rounded-xl border border-amber-800/50 bg-amber-950/30 hover:bg-amber-900/50 text-amber-300 transition-all">
          <span class="font-bold text-sm text-amber-400">? Difícil</span>
          <span class="text-[10px] text-slate-400">Revisar no meio (2)</span>
        </button>
        <button onclick="handleFeedback('bom')" class="flex flex-col items-center justify-center p-2.5 rounded-xl border border-blue-800/50 bg-blue-950/30 hover:bg-blue-900/50 text-blue-300 transition-all">
          <span class="font-bold text-sm text-blue-400">✓ Bom</span>
          <span class="text-[10px] text-slate-400">Avança na fila (3)</span>
        </button>
        <button onclick="handleFeedback('facil')" class="flex flex-col items-center justify-center p-2.5 rounded-xl border border-emerald-800/50 bg-emerald-950/30 hover:bg-emerald-900/50 text-emerald-300 transition-all">
          <span class="font-bold text-sm text-emerald-400">★ Fácil</span>
          <span class="text-[10px] text-slate-400">Dominado / Concluído (4)</span>
        </button>
      </div>
    </div>

    <!-- Empty Queue State -->
    <div id="empty-state" class="hidden flex-1 flex-col items-center justify-center text-center p-8">
      <div class="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
        <i data-lucide="award" class="w-8 h-8"></i>
      </div>
      <h3 class="text-xl font-bold text-white mb-2">Parabéns! Sessão Concluída!</h3>
      <p class="text-sm text-slate-400 max-w-md mb-6">Todos os flashcards do filtro selecionado foram dominados ou revisados.</p>
      <button onclick="resetSession()" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors">
        Reiniciar Sessão
      </button>
    </div>
  </main>

  <script>
    // Initial Seed Data
    const SEED_CARDS = ${cardsJson};

    // State Variables
    let allCards = [...SEED_CARDS];
    let activeQueue = [];
    let currentIndex = 0;
    let isFlipped = false;
    let selectedBanca = 'TODAS';
    let selectedTopico = 'TODOS';
    let stats = {
      totalReviewed: 0,
      erreiCount: 0,
      dificilCount: 0,
      bomCount: 0,
      facilCount: 0,
      masteredCount: 0
    };

    function init() {
      applyFiltersAndResetQueue();
      renderFilterButtons();
      renderStats();
      renderCard();
      lucide.createIcons();
      setupKeyListeners();
    }

    function applyFiltersAndResetQueue() {
      let filtered = allCards.filter(c => {
        const matchBanca = selectedBanca === 'TODAS' || c.banca === selectedBanca;
        const matchTopico = selectedTopico === 'TODOS' || c.topico === selectedTopico;
        return matchBanca && matchTopico;
      });
      activeQueue = [...filtered];
      currentIndex = 0;
      isFlipped = false;
    }

    function renderFilterButtons() {
      const bancas = ['TODAS', 'Cebraspe', 'FGV', 'Cesgranrio'];
      const topicos = ['TODOS', 'Engenharia de Software', 'Linguagens (Java/Python)', 'Bancos de Dados', 'Arquitetura de Software'];

      const bancaContainer = document.getElementById('banca-filter-buttons');
      bancaContainer.innerHTML = bancas.map(b => \`
        <button onclick="setBanca('\${b}')" class="px-2.5 py-1 text-xs font-medium rounded-lg transition-all \${selectedBanca === b ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'}">\${b}</button>
      \`).join('');

      const topicoContainer = document.getElementById('topico-filter-buttons');
      topicoContainer.innerHTML = topicos.map(t => \`
        <button onclick="setTopico('\${t}')" class="px-2.5 py-1 text-xs font-medium rounded-lg transition-all \${selectedTopico === t ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'}">\${t}</button>
      \`).join('');
    }

    function setBanca(b) {
      selectedBanca = b;
      applyFiltersAndResetQueue();
      renderFilterButtons();
      renderStats();
      renderCard();
    }

    function setTopico(t) {
      selectedTopico = t;
      applyFiltersAndResetQueue();
      renderFilterButtons();
      renderStats();
      renderCard();
    }

    function renderCard() {
      const arena = document.getElementById('card-arena');
      const emptyState = document.getElementById('empty-state');

      if (activeQueue.length === 0) {
        arena.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        return;
      }

      arena.classList.remove('hidden');
      emptyState.classList.add('hidden');
      emptyState.classList.remove('flex');

      if (currentIndex >= activeQueue.length) {
        currentIndex = 0;
      }

      const card = activeQueue[currentIndex];
      isFlipped = false;
      document.getElementById('flashcard-element').classList.remove('rotate-y-180');

      document.getElementById('card-progress-text').innerText = \`Card \${currentIndex + 1} de \${activeQueue.length}\`;
      document.getElementById('card-origin-text').innerText = (card.concurso || '') + (card.ano ? \` (\${card.ano})\` : '');

      // Badges
      const badges = document.getElementById('card-front-badges');
      badges.innerHTML = \`
        <span class="px-2 py-0.5 text-xs font-bold rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">\${card.banca}</span>
        <span class="px-2 py-0.5 text-xs bg-slate-800 text-slate-300 rounded">\${card.topico}</span>
        <span class="px-2 py-0.5 text-[10px] font-semibold \${card.tipo === 'certo_errado' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-indigo-500/20 text-indigo-300'} rounded">\${card.tipo === 'certo_errado' ? 'Certo/Errado' : 'Conceitual'}</span>
      \`;

      document.getElementById('card-subtopico').innerText = '• ' + card.subtopico;
      document.getElementById('card-question').innerText = card.pergunta;

      const codeBox = document.getElementById('card-code-container');
      if (card.trechoCodigo) {
        codeBox.innerText = card.trechoCodigo;
        codeBox.classList.remove('hidden');
      } else {
        codeBox.classList.add('hidden');
      }

      document.getElementById('card-hint-text').innerText = card.dica ? '💡 Dica: ' + card.dica : '';

      // Back Answer
      const answerContainer = document.getElementById('card-answer-container');
      if (card.tipo === 'certo_errado') {
        const isCerto = card.gabaritoOficial === 'CERTO';
        answerContainer.innerHTML = \`
          <span class="px-3 py-1 rounded-xl font-black text-sm inline-block \${isCerto ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'}">\${card.gabaritoOficial}</span>
          <span class="text-xs text-slate-400 ml-2">Gabarito Cebraspe</span>
        \`;
      } else {
        answerContainer.innerHTML = \`
          <div class="p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
            <span class="text-xs text-blue-400 font-semibold block">Resposta:</span>
            <p class="text-slate-100 text-sm font-semibold">\${card.resposta}</p>
          </div>
        \`;
      }

      document.getElementById('card-explanation').innerText = card.explicacao;
      lucide.createIcons();
    }

    function flipCard() {
      isFlipped = !isFlipped;
      const el = document.getElementById('flashcard-element');
      if (isFlipped) el.classList.add('rotate-y-180');
      else el.classList.remove('rotate-y-180');
    }

    // SRS Logic (Spaced Repetition System)
    function handleFeedback(type) {
      if (activeQueue.length === 0) return;
      const currentCard = activeQueue[currentIndex];

      stats.totalReviewed++;

      if (type === 'errei') {
        stats.erreiCount++;
        // Remove from current position and append to end of queue to re-test in this session
        activeQueue.splice(currentIndex, 1);
        activeQueue.push(currentCard);
      } else if (type === 'dificil') {
        stats.dificilCount++;
        // Re-insert 3 positions ahead or at middle of queue
        activeQueue.splice(currentIndex, 1);
        const insertIdx = Math.min(currentIndex + 3, activeQueue.length);
        activeQueue.splice(insertIdx, 0, currentCard);
      } else if (type === 'bom') {
        stats.bomCount++;
        // Advance index or loop
        currentIndex = (currentIndex + 1) % activeQueue.length;
      } else if (type === 'facil') {
        stats.facilCount++;
        stats.masteredCount++;
        // Remove completely from active queue for this session
        activeQueue.splice(currentIndex, 1);
      }

      renderStats();
      renderCard();
    }

    function renderStats() {
      document.getElementById('stat-queue').innerText = activeQueue.length;
      document.getElementById('stat-reviewed').innerText = stats.totalReviewed;
      document.getElementById('stat-mastered').innerText = stats.masteredCount;

      const acertos = stats.bomCount + stats.facilCount + (stats.dificilCount * 0.5);
      const acc = stats.totalReviewed > 0 ? Math.round((acertos / stats.totalReviewed) * 100) : 0;
      document.getElementById('stat-accuracy').innerText = acc + '%';
    }

    function resetSession() {
      stats = { totalReviewed: 0, erreiCount: 0, dificilCount: 0, bomCount: 0, facilCount: 0, masteredCount: 0 };
      applyFiltersAndResetQueue();
      renderStats();
      renderCard();
    }

    function setupKeyListeners() {
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
          e.preventDefault();
          flipCard();
        } else if (e.key === '1') {
          handleFeedback('errei');
        } else if (e.key === '2') {
          handleFeedback('dificil');
        } else if (e.key === '3') {
          handleFeedback('bom');
        } else if (e.key === '4') {
          handleFeedback('facil');
        }
      });
    }

    window.onload = init;
  </script>
</body>
</html>`;
  };

  const handleCopy = () => {
    const html = generateSingleFileHtml();
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const html = generateSingleFileHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flashcards-ti-concursos.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-[28px] w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Código HTML Único (Standalone)</h2>
              <p className="text-xs text-slate-400">
                100% Funcional e autossuficiente (Tailwind CSS + JavaScript ES6+ Vanilla)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info & Code Preview */}
        <div className="p-5 sm:p-6 flex-1 overflow-y-auto space-y-4">
          <div className="p-4 bg-indigo-950/30 border border-indigo-800/40 rounded-2xl text-xs text-indigo-200">
            <p className="font-semibold mb-1">📦 Pronto para executar em qualquer navegador ou offline:</p>
            <p className="text-slate-300">
              Este arquivo contém todos os {cards.length} flashcards pré-carregados (Cebraspe, FGV, Cesgranrio), o algoritmo SRS, as animações de 3D flip e o painel de estatísticas, sem precisar de build ou servidor.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1 px-1">
              <span>Pré-visualização do código index.html:</span>
              <span className="font-mono text-[11px] text-slate-500">~15KB</span>
            </div>
            <pre className="p-4 bg-slate-950 border border-slate-800 rounded-2xl font-mono text-[11px] text-slate-300 max-h-[300px] overflow-auto select-all">
              {generateSingleFileHtml().slice(0, 1500)}...
              {'\n\n/* [Código completo pronto para download ou cópia] */'}
            </pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          >
            Fechar
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-all shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copiado para a Área de Transferência!' : 'Copiar Código HTML'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all shadow-lg shadow-indigo-600/20"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Arquivo .html</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
