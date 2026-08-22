import React, { useState } from 'react';
import { Flashcard } from '../types';
import { X, Search, BookOpen, Layers } from 'lucide-react';

interface CardListModalProps {
  isOpen: boolean;
  onClose: () => void;
  cards: Flashcard[];
  onSelectCardToStudy?: (cardId: string) => void;
}

export const CardListModal: React.FC<CardListModalProps> = ({
  isOpen,
  onClose,
  cards,
  onSelectCardToStudy,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBanca, setFilterBanca] = useState<string>('TODAS');

  if (!isOpen) return null;

  const filteredCards = cards.filter((c) => {
    const matchesSearch = 
      c.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.resposta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subtopico.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.topico.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBanca = filterBanca === 'TODAS' || c.banca === filterBanca;
    return matchesSearch && matchesBanca;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-[28px] w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Banco de Flashcards ({cards.length})</h2>
              <p className="text-xs text-slate-400">Explore todos os conceitos cadastrados</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar inside modal */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/40 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por termo ou conceito..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['TODAS', 'Cebraspe', 'FGV', 'Cesgranrio'].map((b) => (
              <button
                key={b}
                onClick={() => setFilterBanca(b)}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-all whitespace-nowrap ${
                  filterBanca === b
                    ? 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shadow-sm'
                    : 'bg-slate-800 border border-slate-700 text-slate-400 opacity-60 hover:opacity-100'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* List of cards */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredCards.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              Nenhum flashcard encontrado com os filtros atuais.
            </div>
          ) : (
            filteredCards.map((c, idx) => (
              <div
                key={c.id}
                className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col gap-2"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500">#{String(idx + 1).padStart(2, '0')}</span>
                    <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${
                      c.banca === 'Cebraspe' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                      c.banca === 'FGV' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                      'bg-blue-500/10 text-blue-400 border-blue-500/30'
                    }`}>
                      {c.banca}
                    </span>
                    <span className="px-2.5 py-0.5 text-[11px] font-medium bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                      {c.topico}
                    </span>
                    <span className="text-xs text-indigo-400">• {c.subtopico}</span>
                  </div>

                  {c.concurso && (
                    <span className="text-[11px] text-slate-500">
                      {c.concurso} {c.ano ? `(${c.ano})` : ''}
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-slate-200 line-clamp-2">
                  {c.pergunta}
                </p>

                <div className="mt-1 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-semibold">Resposta:</span>
                    {c.tipo === 'certo_errado' ? (
                      <span className={`font-bold ${c.gabaritoOficial === 'CERTO' ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {c.gabaritoOficial}
                      </span>
                    ) : (
                      <span className="text-slate-300 font-medium truncate max-w-md">
                        {c.resposta}
                      </span>
                    )}
                  </div>

                  {onSelectCardToStudy && (
                    <button
                      onClick={() => {
                        onSelectCardToStudy(c.id);
                        onClose();
                      }}
                      className="px-3 py-1 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-semibold transition-colors"
                    >
                      Estudar este Card
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Mostrando {filteredCards.length} de {cards.length} cards</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

