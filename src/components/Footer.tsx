import React from 'react';
import { Shield, FileText, Info, Mail, Layers, BookOpen, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onSelectView?: (view: 'flashcards' | 'guides') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenAbout,
  onOpenContact,
  onSelectView
}) => {
  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-10 px-4 sm:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Coluna 1: Sobre a Plataforma */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-600/30">
              <span className="font-black text-white text-xs">IT</span>
            </div>
            <span className="font-bold text-white text-base tracking-tight">DevConcursos TI</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Plataforma educacional livre com flashcards inteligentes baseados em Repetição Espaçada (SRS) e cadernos de estudo teórico completos para concursos públicos de Tecnologia da Informação.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Conteúdo atualizado para Cebraspe, FGV e Cesgranrio</span>
          </div>
        </div>

        {/* Coluna 2: Módulos de Estudo */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Navegação de Estudo</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button 
                onClick={() => onSelectView && onSelectView('flashcards')}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                Treino de Flashcards (SRS)
              </button>
            </li>
            <li>
              <button 
                onClick={() => onSelectView && onSelectView('guides')}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                Cadernos & Guias Teóricos
              </button>
            </li>
            <li className="text-slate-500">Segurança da Informação & ISO 27002</li>
            <li className="text-slate-500">Governança (ITIL v4 & COBIT 2019)</li>
            <li className="text-slate-500">Banco de Dados, BI & Big Data</li>
            <li className="text-slate-500">Legislação (LGPD, LAI e Marco Civil)</li>
          </ul>
        </div>

        {/* Coluna 3: Institucional & Conformidade */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Legal & Transparência</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button 
                onClick={onOpenPrivacy}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                Política de Privacidade & Cookies
              </button>
            </li>
            <li>
              <button 
                onClick={onOpenTerms}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                Termos de Uso do Serviço
              </button>
            </li>
            <li>
              <button 
                onClick={onOpenAbout}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <Info className="w-3.5 h-3.5 text-indigo-400" />
                Sobre Nós & Metodologia SRS
              </button>
            </li>
            <li>
              <button 
                onClick={onOpenContact}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                Fale Conosco & Suporte
              </button>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Conformidade AdSense & LGPD */}
        <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Transparência & LGPD
          </h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Este site respeita a sua privacidade nos termos da LGPD (Lei 13.709/18). Utilizamos cookies e identificadores para personalizar conteúdos e veicular anúncios através do programa Google AdSense.
          </p>
          <p className="text-[11px] text-slate-500">
            Você pode gerenciar as preferências de cookies e anúncios a qualquer momento na nossa Política de Privacidade.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} DevConcursos TI. Todos os direitos reservados. Plataforma educacional aberta.</p>
        <p className="flex items-center gap-1">
          Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para concurseiros de TI
        </p>
      </div>
    </footer>
  );
};
