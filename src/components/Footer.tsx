import React from 'react';
import { 
  Shield, 
  FileText, 
  Info, 
  Mail, 
  Layers, 
  BookOpen, 
  Heart, 
  Sparkles, 
  GraduationCap, 
  ArrowRight,
  Briefcase,
  TrendingUp
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenAbout?: () => void;
  onOpenContact?: () => void;
  onOpenEducationalGuide?: () => void;
  onNavigateRoute?: (route: 'sobre' | 'privacidade' | 'termos' | 'contato' | 'concursos-abertos' | 'guia-carreira-ti') => void;
  onSelectView?: (view: 'flashcards' | 'guides' | 'concursos-abertos' | 'guia-carreira-ti') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenAbout,
  onOpenContact,
  onOpenEducationalGuide,
  onNavigateRoute,
  onSelectView
}) => {
  const handleNav = (
    e: React.MouseEvent, 
    route: 'sobre' | 'privacidade' | 'termos' | 'contato' | 'concursos-abertos' | 'guia-carreira-ti', 
    fallbackModal?: () => void
  ) => {
    e.preventDefault();
    if (onNavigateRoute) {
      onNavigateRoute(route);
    } else if (fallbackModal) {
      fallbackModal();
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-10 px-4 sm:px-8 mt-auto">
      {/* Banner / Botão de Abertura do Guia Educacional Oficial */}
      {onOpenEducationalGuide && (
        <div className="max-w-7xl mx-auto mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-950 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-indigo-950/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0 shadow-inner">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Metodologia & Diretrizes Oficiais
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                Guia Educacional Oficial & Plataforma de Estudos
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 max-w-3xl">
                Acesse o guia completo sobre a ciência da recordação ativa (Active Recall), repetição espaçada (SRS), curva do esquecimento e análise estratégica de bancas (Cebraspe, FGV e Cesgranrio).
              </p>
            </div>
          </div>
          <button 
            onClick={onOpenEducationalGuide}
            className="w-full sm:w-auto whitespace-nowrap px-5 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Abrir Guia Educacional</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Coluna 1: Sobre a Plataforma */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-600/30">
              <span className="font-black text-white text-xs">FC</span>
            </div>
            <span className="font-bold text-white text-base tracking-tight">Flash Concurso TI</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Plataforma educacional livre com flashcards inteligentes baseados em Repetição Espaçada (SRS), cadernos de estudo teórico e monitoramento contínuo de concursos abertos de Tecnologia da Informação.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Conteúdo atualizado para Cebraspe, FGV e Cesgranrio</span>
          </div>
        </div>

        {/* Coluna 2: Módulos de Estudo */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Navegação & Conteúdo</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button 
                onClick={() => onSelectView && onSelectView('flashcards')}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                Treino de Flashcards (SRS)
              </button>
            </li>
            <li>
              <button 
                onClick={() => onSelectView && onSelectView('guides')}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                Cadernos & Guias Teóricos
              </button>
            </li>
            <li>
              <a 
                href="/concursos-abertos"
                onClick={(e) => handleNav(e, 'concursos-abertos')}
                className="hover:text-indigo-400 text-slate-300 transition-colors flex items-center gap-1.5 text-left"
              >
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                <span>Concursos Abertos & Editais 2026</span>
              </a>
            </li>
            <li>
              <a 
                href="/guia-carreira-ti"
                onClick={(e) => handleNav(e, 'guia-carreira-ti')}
                className="hover:text-indigo-400 text-slate-300 transition-colors flex items-center gap-1.5 text-left"
              >
                <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
                <span>Guia de Carreira & Tabela Salarial</span>
              </a>
            </li>
            {onOpenEducationalGuide && (
              <li>
                <button 
                  onClick={onOpenEducationalGuide}
                  className="hover:text-indigo-300 text-indigo-400 font-semibold transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  Guia Educacional Oficial (Modal)
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Coluna 3: Institucional & Conformidade */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Legal & Transparência</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a 
                href="/sobre"
                onClick={(e) => handleNav(e, 'sobre', onOpenAbout)}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <Info className="w-3.5 h-3.5 text-indigo-400" />
                <span>Sobre Nós & Metodologia SRS</span>
              </a>
            </li>
            <li>
              <a 
                href="/privacidade"
                onClick={(e) => handleNav(e, 'privacidade', onOpenPrivacy)}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                <span>Política de Privacidade & Cookies</span>
              </a>
            </li>
            <li>
              <a 
                href="/termos"
                onClick={(e) => handleNav(e, 'termos', onOpenTerms)}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Termos de Uso do Serviço</span>
              </a>
            </li>
            <li>
              <a 
                href="/contato"
                onClick={(e) => handleNav(e, 'contato', onOpenContact)}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>Fale Conosco & Suporte</span>
              </a>
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
            Este site respeita a sua privacidade nos termos da LGPD (Lei 13.709/18). Utilizamos cookies e identificadores para veicular anúncios através do Google AdSense (pub-124215391500402).
          </p>
          <p className="text-[11px] text-slate-500">
            Você pode gerenciar preferências de cookies a qualquer momento em nossa Política de Privacidade.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© 2026 Flash Concurso TI. Todos os direitos reservados. Plataforma educacional aberta.</p>
        <p className="flex items-center gap-1">
          Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para concurseiros de TI
        </p>
      </div>
    </footer>
  );
};
