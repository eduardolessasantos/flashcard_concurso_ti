import React from 'react';
import { Banca, Topico } from '../types';
import { Filter, Shuffle, Search, Tag, Building2, BookOpen } from 'lucide-react';

interface FilterBarProps {
  selectedBanca: Banca | 'TODAS';
  selectedTopico: Topico | 'TODOS';
  searchQuery: string;
  onSelectBanca: (banca: Banca | 'TODAS') => void;
  onSelectTopico: (topico: Topico | 'TODOS') => void;
  onSearchChange: (query: string) => void;
  onShuffle: () => void;
  bancaCounts: Record<string, number>;
  topicoCounts: Record<string, number>;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedBanca,
  selectedTopico,
  searchQuery,
  onSelectBanca,
  onSelectTopico,
  onSearchChange,
  onShuffle,
  bancaCounts,
  topicoCounts,
}) => {
  const bancas: (Banca | 'TODAS')[] = ['TODAS', 'Cebraspe', 'FGV', 'Cesgranrio'];
  
  const topicos: (Topico | 'TODOS')[] = [
    'TODOS',
    'Engenharia de Software',
    'Linguagens (Java/Python)',
    'Bancos de Dados',
    'Arquitetura de Software'
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-6 shadow-sm space-y-3.5">
      {/* Top row: Search + Shuffle button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por termo (ex: Scrum, B+Tree, Python, Docker, Saga)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950/60 border border-slate-700/80 rounded-xl text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>

        <button
          onClick={onShuffle}
          className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-colors shadow-sm"
          title="Embaralhar ordem dos cartões na fila"
        >
          <Shuffle className="w-3.5 h-3.5 text-blue-400" />
          <span>Embaralhar Fila</span>
        </button>
      </div>

      {/* Row 2: Filter by Banca */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 shrink-0">
          <Building2 className="w-3.5 h-3.5 text-blue-400" />
          Banca:
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          {bancas.map((banca) => {
            const isSelected = selectedBanca === banca;
            const count = banca === 'TODAS' 
              ? Object.values(bancaCounts).reduce((a: number, b: number) => a + b, 0)
              : bancaCounts[banca] || 0;

            return (
              <button
                key={banca}
                onClick={() => onSelectBanca(banca)}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-500/30'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                <span>{banca}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-900 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 3: Filter by Tópico */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 shrink-0">
          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
          Assunto:
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          {topicos.map((topico) => {
            const isSelected = selectedTopico === topico;
            const count = topico === 'TODOS'
              ? Object.values(topicoCounts).reduce((a: number, b: number) => a + b, 0)
              : topicoCounts[topico] || 0;

            const shortLabel = topico === 'TODOS' 
              ? 'Todos os Assuntos' 
              : topico === 'Engenharia de Software'
              ? 'Eng. Software'
              : topico === 'Linguagens (Java/Python)'
              ? 'Java & Python'
              : topico === 'Bancos de Dados'
              ? 'Bancos de Dados'
              : 'Arquitetura';

            return (
              <button
                key={topico}
                onClick={() => onSelectTopico(topico)}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-500/30'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                <span>{shortLabel}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-900 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
