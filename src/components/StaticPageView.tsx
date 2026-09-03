import React from 'react';
import { ArrowLeft, Shield, FileText, Info, Mail, CheckCircle2, Sparkles } from 'lucide-react';

export type StaticRoute = 'sobre' | 'privacidade' | 'termos' | 'contato';

interface StaticPageViewProps {
  route: StaticRoute;
  onNavigateHome: () => void;
  onNavigateRoute: (route: StaticRoute) => void;
}

export const StaticPageView: React.FC<StaticPageViewProps> = ({
  route,
  onNavigateHome,
  onNavigateRoute,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 animate-in fade-in duration-300">
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 px-3.5 py-2 rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para os Flashcards & Estudos</span>
        </button>

        {/* Tab switcher */}
        <div className="hidden sm:flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
          <button
            onClick={() => onNavigateRoute('sobre')}
            className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
              route === 'sobre' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sobre Nós
          </button>
          <button
            onClick={() => onNavigateRoute('privacidade')}
            className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
              route === 'privacidade' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Privacidade
          </button>
          <button
            onClick={() => onNavigateRoute('termos')}
            className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
              route === 'termos' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Termos
          </button>
          <button
            onClick={() => onNavigateRoute('contato')}
            className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
              route === 'contato' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Contato
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {route === 'sobre' && (
        <article className="space-y-6 text-slate-300 leading-relaxed">
          <header className="space-y-2 border-b border-slate-800/80 pb-6">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Institucional & Pedagogia</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Sobre o Flash Concurso TI e a Metodologia SRS</h1>
            <p className="text-sm text-slate-400">
              Transformando o estudo de alta densidade técnica com memorização ativa e repetição científica.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Propósito e Metodologia</h2>
            <p className="text-sm">
              O <strong>Flash Concurso TI (DevConcursos TI)</strong> foi estruturado para resolver um dos maiores desafios de concurseiros da área de Tecnologia da Informação: a retenção a longo prazo de conteúdos extensos, incluindo normas internacionais (ISO 27002), frameworks de gestão e governança (ITIL v4, COBIT 2019), arquiteturas de Big Data, inteligência artificial e legislação federal (LGPD, LAI e Marco Civil).
            </p>
            <p className="text-sm">
              Diferente de métodos passivos de leitura ou resumo linear, nossa plataforma emprega o sistema de <strong>Repetição Espaçada (SRS - Spaced Repetition System)</strong>, inspirado nos estudos da Curva do Esquecimento de Hermann Ebbinghaus. Ao intercalar revisões com base no grau de dificuldade assinalado pelo estudante, a curva de retenção é continuamente reiniciada e consolidada.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Como os Intervalos SRS Funcionam</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                <span className="font-bold text-rose-400">Feedback: Errei</span>
                <p className="text-slate-400">O cartão volta imediatamente para a fila da sessão ativa, garantindo fixação antes de avançar.</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                <span className="font-bold text-amber-400">Feedback: Difícil</span>
                <p className="text-slate-400">Intervalo de reexibição reduzido, programando nova cobrança em prazo curto.</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                <span className="font-bold text-indigo-400">Feedback: Bom</span>
                <p className="text-slate-400">Crescimento regular do intervalo de repetição, ideal para conceitos assimilados.</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                <span className="font-bold text-emerald-400">Feedback: Fácil</span>
                <p className="text-slate-400">Salto de intervalo maior, liberando sua carga cognitiva para novos tópicos do edital.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Foco nas Principais Bancas</h2>
            <p className="text-sm">
              Os cartões e cadernos detalham armadilhas recorrentes das três bancas mais presentes em concursos de TI do país:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
              <li><strong>Cebraspe:</strong> Foco em assertivas conceituais de Certo/Errado com trocas sutis de termos de normas.</li>
              <li><strong>FGV:</strong> Questões contextuais com cenários práticos de governança corporativa e engenharia de software.</li>
              <li><strong>Cesgranrio:</strong> Perguntas literais sobre definições normativas e arquitetura de sistemas bancários.</li>
            </ul>
          </section>
        </article>
      )}

      {route === 'privacidade' && (
        <article className="space-y-6 text-slate-300 leading-relaxed">
          <header className="space-y-2 border-b border-slate-800/80 pb-6">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Conformidade Legal & LGPD</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Política de Privacidade & Cookies</h1>
            <p className="text-sm text-slate-400">
              Transparência total no tratamento de dados e conformidade com o Google AdSense e a Lei nº 13.709/2018.
            </p>
          </header>

          <div className="bg-indigo-950/30 border border-indigo-500/20 p-4 rounded-xl text-xs text-indigo-200">
            <strong>Última atualização:</strong> Setembro de 2026. Seus dados e seu ritmo de estudo são tratados com absoluto sigilo.
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Informações Coletadas</h2>
            <p className="text-sm">
              A navegação, resolução de flashcards e leitura de cadernos teóricos no DevConcursos TI são totalmente acessíveis sem necessidade de identificação. Caso o usuário decida vincular uma conta de autenticação (Firebase Auth com Google ou e-mail/senha), coletamos apenas nome público e e-mail para viabilizar a sincronização de estatísticas no banco de dados Firestore.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Cookies e Google AdSense</h2>
            <p className="text-sm">
              Utilizamos o serviço <strong>Google AdSense</strong> para a exibição de anúncios. O Google pode utilizar cookies, incluindo o cookie DART, para veicular publicidade com base no histórico de visitas anteriores a este ou a outros websites.
            </p>
            <p className="text-sm">
              Você pode desativar a personalização de anúncios do Google acessando diretamente as <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">Configurações de Anúncios do Google</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Seus Direitos (LGPD)</h2>
            <p className="text-sm">
              Nos termos do Art. 18 da LGPD, o usuário tem direito à confirmação da existência de tratamento, acesso aos dados, retificação de dados incorretos e exclusão integral da sua conta e de suas métricas a qualquer momento.
            </p>
            <p className="text-sm">
              Contato do Encarregado pelo tratamento de dados (DPO): <strong className="text-white font-mono">eduardolessa2011@gmail.com</strong>.
            </p>
          </section>
        </article>
      )}

      {route === 'termos' && (
        <article className="space-y-6 text-slate-300 leading-relaxed">
          <header className="space-y-2 border-b border-slate-800/80 pb-6">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Termos de Uso</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Termos de Uso do Serviço</h1>
            <p className="text-sm text-slate-400">
              Diretrizes de utilização pedagógica e limites de responsabilidade da plataforma.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Condições de Uso</h2>
            <p className="text-sm">
              Ao acessar a plataforma DevConcursos TI, você concorda em utilizar seus recursos exclusivamente para fins de preparação pessoal e educacional. É expressamente vedada a revenda de materiais didáticos, bem como a extração automatizada de dados em massa sem autorização prévia por escrito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Isenção e Responsabilidade</h2>
            <p className="text-sm">
              Os flashcards, resumos e cadernos de estudo são elaborados com rigor com base em editais públicos e bibliografia padrão de Tecnologia da Informação. Contudo, a plataforma não se responsabiliza por eventuais alterações supervenientes em editais ou divergências de interpretação de bancas examinadoras.
            </p>
          </section>
        </article>
      )}

      {route === 'contato' && (
        <article className="space-y-6 text-slate-300 leading-relaxed">
          <header className="space-y-2 border-b border-slate-800/80 pb-6">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-4 h-4" />
              <span>Suporte & Comunicação</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Fale Conosco</h1>
            <p className="text-sm text-slate-400">
              Canal aberto para sugestões pedagógicas, dúvidas sobre gabaritos e suporte técnico.
            </p>
          </header>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <h2 className="text-lg font-bold text-white">Canais de Contato</h2>
            <div className="space-y-2 text-sm">
              <p><strong className="text-slate-300">E-mail Institucional:</strong> <a href="mailto:eduardolessa2011@gmail.com" className="font-mono text-indigo-400 hover:underline">eduardolessa2011@gmail.com</a></p>
              <p><strong className="text-slate-300">Horário de Atendimento:</strong> Segunda a Sexta, das 08h às 18h (Horário de Brasília)</p>
              <p><strong className="text-slate-300">Tempo de Resposta:</strong> Até 24 horas úteis</p>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">Temas Atendidos</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-300">
              <li>Envio de sugestões de novas questões ou temas para inclusão no acervo.</li>
              <li>Reportar possíveis divergências de gabarito em questões de bancas.</li>
              <li>Dúvidas sobre o funcionamento do algoritmo SRS de repetição espaçada.</li>
              <li>Solicitações relacionadas à LGPD e exclusão de conta.</li>
            </ul>
          </section>
        </article>
      )}
    </div>
  );
};
