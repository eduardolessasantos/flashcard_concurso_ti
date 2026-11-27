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
              O <strong>Flash Concurso TI</strong> foi estruturado para resolver um dos maiores desafios de concurseiros da área de Tecnologia da Informação: a retenção a longo prazo de conteúdos extensos, incluindo normas internacionais (ISO 27002), frameworks de gestão e governança (ITIL v4, COBIT 2019), arquiteturas de Big Data, inteligência artificial e legislação federal (LGPD, LAI e Marco Civil).
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
              Transparência total no tratamento de dados e conformidade com o Google AdSense e a Lei nº 13.709/2018 (LGPD).
            </p>
          </header>

          <div className="bg-indigo-950/30 border border-indigo-500/20 p-4 rounded-xl text-xs text-indigo-200">
            <strong>Última atualização:</strong> Novembro de 2026. Seus dados e seu ritmo de estudo são tratados com transparência e segurança.
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Dados Coletados e Finalidades</h2>
            <p className="text-sm">
              A navegação, resolução de flashcards e leitura de cadernos teóricos no Flash Concurso TI são acessíveis sem necessidade de cadastro. Coletamos ou processamos apenas os dados necessários para o funcionamento da plataforma:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
              <li><strong>Armazenamento Local (LocalStorage):</strong> progresso de estudos, revisões SRS, preferências de interface e sua escolha de consentimento de cookies ficam gravados localmente no navegador.</li>
              <li><strong>Conta Opcional (Firebase Auth e Firestore):</strong> caso você escolha criar conta ou entrar com Google, coletamos nome público e e-mail exclusivamente para autenticar seu acesso e sincronizar suas estatísticas de estudo.</li>
              <li><strong>Métricas de Navegação (Google Analytics 4):</strong> mediante seu consentimento no banner de cookies, coletamos dados agregados de tráfego, páginas acessadas, dispositivo e endereço IP anonimizado para melhorar a experiência e o conteúdo pedagógico.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Cookies, Google AdSense e Links de Afiliados</h2>
            <p className="text-sm">
              Utilizamos o serviço <strong>Google AdSense</strong> para manter o acesso gratuito aos estudos. Você pode aceitar ou recusar cookies não essenciais de análise e publicidade personalizada no banner exibido ao acessar o site ou alterar sua preferência a qualquer momento pelo link <strong>"Gerenciar preferências de cookies"</strong> no rodapé.
            </p>
            <p className="text-sm">
              Quando autorizados, o Google e seus parceiros podem utilizar cookies (incluindo o cookie DART) para exibir anúncios relevantes. Você também pode gerenciar ou desativar anúncios personalizados diretamente nas <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">Configurações de Anúncios do Google</a>.
            </p>
            <p className="text-sm">
              <strong>Divulgação de Afiliados:</strong> Este site contém links de afiliado (Programa de Afiliados Mercado Livre). Ao comprar por eles, podemos receber uma pequena comissão, sem custo extra para você. Todos os links patrocinados utilizam marcação <code>rel=&quot;sponsored&quot;</code>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Seus Direitos como Titular (LGPD) e Exclusão de Dados</h2>
            <p className="text-sm">
              Nos termos do Art. 18 da LGPD (Lei nº 13.709/2018), você tem direito a confirmar a existência de tratamento, acessar seus dados, corrigir informações incompletas, revogar o consentimento de cookies e solicitar a <strong>exclusão integral da sua conta e dos seus dados</strong> a qualquer momento.
            </p>
            <p className="text-sm">
              Para exercer seus direitos ou solicitar exclusão de dados, entre em contato com o Encarregado de Dados (DPO): <strong className="text-white font-mono">eduardolessa2011@gmail.com</strong>.
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
              Diretrizes de utilização pedagógica, direitos autorais e limites de responsabilidade da plataforma.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Natureza Educacional e Ausência de Garantia de Aprovação</h2>
            <p className="text-sm">
              O <strong>Flash Concurso TI</strong> é uma ferramenta auxiliar de revisão ativa com finalidade estritamente educacional. A utilização dos flashcards, resumos e guias <strong>não garante aprovação em concursos públicos</strong> nem substitui a leitura oficial dos editais vigentes. O planejamento, a dedicação e o desempenho nas avaliações são de integral responsabilidade do usuário.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Direitos Autorais e Independência Institucional</h2>
            <p className="text-sm">
              Os flashcards, resumos teóricos e comentários pedagógicos são elaborados de forma autoral ou adaptados para fins didáticos, de estudo e comentário crítico nos termos do Art. 46 da Lei nº 9.610/1998 (Lei de Direitos Autorais). O <strong>Flash Concurso TI</strong> é uma iniciativa independente e <strong>não possui qualquer vínculo oficial, parceria ou endosso</strong> de bancas examinadoras (como FGV, Cebraspe ou Cesgranrio) ou de órgãos públicos.
            </p>
            <p className="text-sm">
              É vedada a revenda de materiais didáticos, bem como a extração automatizada de conteúdo em massa (scraping) sem autorização prévia por escrito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Publicidade, Afiliados e Atualização de Editais</h2>
            <p className="text-sm">
              Este site exibe anúncios de terceiros e contém links de afiliado (Mercado Livre); ao realizar compras por meio desses links, podemos receber uma pequena comissão, sem custo adicional para você. Embora o acervo seja revisado periodicamente com base em normas técnicas e bibliografia de TI, não nos responsabilizamos por alterações supervenientes em editais, legislação ou entendimentos de bancas.
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
