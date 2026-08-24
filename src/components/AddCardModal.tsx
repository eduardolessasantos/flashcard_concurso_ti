import React, { useState } from 'react';
import { Banca, Topico, CardType, Flashcard } from '../types';
import { X, PlusCircle, Check } from 'lucide-react';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCard: (card: Flashcard) => void;
}

export const AddCardModal: React.FC<AddCardModalProps> = ({
  isOpen,
  onClose,
  onAddCard,
}) => {
  const [banca, setBanca] = useState<Banca>('Cebraspe');
  const [topico, setTopico] = useState<Topico>('Engenharia de Software');
  const [subtopico, setSubtopico] = useState('');
  const [tipo, setTipo] = useState<CardType>('certo_errado');
  const [gabarito, setGabarito] = useState<'CERTO' | 'ERRADO'>('CERTO');
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [explicacao, setExplicacao] = useState('');
  const [concurso, setConcurso] = useState('');
  const [ano, setAno] = useState<number>(2024);
  const [dica, setDica] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pergunta.trim() || (!resposta.trim() && tipo === 'conceitual') || !explicacao.trim()) {
      return;
    }

    const newCard: Flashcard = {
      id: `custom-${Date.now()}`,
      banca,
      topico,
      subtopico: subtopico.trim() || topico,
      tipo,
      gabaritoOficial: tipo === 'certo_errado' ? gabarito : undefined,
      pergunta: pergunta.trim(),
      resposta: tipo === 'certo_errado' ? gabarito : resposta.trim(),
      explicacao: explicacao.trim(),
      concurso: concurso.trim() || undefined,
      ano: ano || undefined,
      dica: dica.trim() || undefined,
      statusSRS: 'novo',
    };

    onAddCard(newCard);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-[28px] w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Criar Novo Flashcard</h2>
              <p className="text-xs text-slate-400">Adicione questões de concursos ou resumos práticos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Banca */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Banca</label>
              <select
                value={banca}
                onChange={(e) => {
                  const b = e.target.value as Banca;
                  setBanca(b);
                  if (b === 'Cebraspe') setTipo('certo_errado');
                  else setTipo('conceitual');
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                <option value="Cebraspe">Cebraspe (Cespe)</option>
                <option value="FGV">FGV</option>
                <option value="Cesgranrio">Cesgranrio</option>
              </select>
            </div>

            {/* Tópico */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Assunto / Matéria</label>
              <select
                value={topico}
                onChange={(e) => setTopico(e.target.value as Topico)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                <optgroup label="Conhecimentos Gerais">
                  <option value="Língua Portuguesa">Língua Portuguesa</option>
                  <option value="Raciocínio Lógico e Matemática">Raciocínio Lógico e Matemática</option>
                  <option value="Língua Inglesa">Língua Inglesa</option>
                </optgroup>
                <optgroup label="Específicos de TI">
                  <option value="Engenharia de Software">Engenharia de Software</option>
                  <option value="Linguagens (Java/Python)">Linguagens (Java/Python)</option>
                  <option value="Bancos de Dados">Bancos de Dados</option>
                  <option value="Arquitetura de Software">Arquitetura de Software</option>
                </optgroup>
              </select>
            </div>

            {/* Formato */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Formato da Questão</label>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value as CardType)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                <option value="certo_errado">Certo / Errado</option>
                <option value="conceitual">Pergunta Conceitual</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Subtópico / Conceito-chave</label>
              <input
                type="text"
                placeholder="Ex: Scrum Daily, B+Tree, Python Tuplas..."
                value={subtopico}
                onChange={(e) => setSubtopico(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Concurso (Órgão)</label>
                <input
                  type="text"
                  placeholder="Ex: TCU, BACEN..."
                  value={concurso}
                  onChange={(e) => setConcurso(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Ano</label>
                <input
                  type="number"
                  value={ano}
                  onChange={(e) => setAno(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Enunciado / Pergunta */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Enunciado / Pergunta <span className="text-rose-400">*</span>
            </label>
            <textarea
              rows={3}
              required
              placeholder="Digite o item da questão ou pergunta de TI..."
              value={pergunta}
              onChange={(e) => setPergunta(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Resposta / Gabarito */}
          {tipo === 'certo_errado' ? (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Gabarito Oficial</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setGabarito('CERTO')}
                  className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
                    gabarito === 'CERTO'
                      ? 'bg-emerald-600 text-white ring-2 ring-emerald-400/40 shadow-lg shadow-emerald-600/20'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ✓ CERTO
                </button>
                <button
                  type="button"
                  onClick={() => setGabarito('ERRADO')}
                  className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
                    gabarito === 'ERRADO'
                      ? 'bg-rose-600 text-white ring-2 ring-rose-400/40 shadow-lg shadow-rose-600/20'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ✕ ERRADO
                </button>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Resposta Direta <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Resposta sintética..."
                value={resposta}
                onChange={(e) => setResposta(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          )}

          {/* Explicação Fundamentada */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Explicação & Fundamentação Teórica <span className="text-rose-400">*</span>
            </label>
            <textarea
              rows={3}
              required
              placeholder="Explique o porquê do gabarito, regras oficiais e pegadinhas da banca..."
              value={explicacao}
              onChange={(e) => setExplicacao(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Dica Opcional */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Dica de Ouro / Mnemônico (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ex: Lembre-se que Somente o PO cancela a Sprint..."
              value={dica}
              onChange={(e) => setDica(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-600/20 transition-all"
            >
              Salvar Flashcard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
