import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('Dúvida sobre Conteúdo');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !mensagem.trim()) return;
    
    // Simulate sending message or opening mailto
    setEnviado(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Fale Conosco & Suporte</h2>
              <p className="text-xs text-slate-400">Dúvidas, sugestões de questões e contato institucional</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300">
          {enviado ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Mensagem Recebida com Sucesso!</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Agradecemos o seu contato. Nossa equipe pedagógica e de suporte responderá em até 24 horas úteis no e-mail informado.
              </p>
              <button
                onClick={() => {
                  setEnviado(false);
                  setNome('');
                  setEmail('');
                  setMensagem('');
                  onClose();
                }}
                className="mt-4 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-400 flex items-center justify-between">
                <span>E-mail direto para suporte:</span>
                <span className="font-mono text-indigo-300 font-semibold">eduardolessa2011@gmail.com</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Seu Nome *</label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Carlos Silva"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Seu E-mail *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: seuemail@exemplo.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Assunto</label>
                <select
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Dúvida sobre Conteúdo">Dúvida sobre Conteúdo / Questão</option>
                  <option value="Sugestão de Novo Tópico">Sugestão de Novo Tópico ou Flashcard</option>
                  <option value="Reportar Inconsistência">Reportar Inconsistência de Gabarito</option>
                  <option value="Privacidade e Dados (LGPD)">Privacidade e Dados (LGPD)</option>
                  <option value="Outro">Outro Assunto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Mensagem *</label>
                <textarea
                  required
                  rows={4}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Escreva sua mensagem com detalhes..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  Enviar Mensagem
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
