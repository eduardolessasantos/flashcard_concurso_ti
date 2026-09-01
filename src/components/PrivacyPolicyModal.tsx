import React from 'react';
import { X, Shield, Lock, Eye, Cookie, HelpCircle, CheckCircle } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Política de Privacidade & Cookies</h2>
              <p className="text-xs text-slate-400">Em conformidade com a LGPD (Lei nº 13.709/2018) e Google AdSense</p>
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
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
          <div className="bg-indigo-950/30 border border-indigo-500/20 p-4 rounded-xl text-xs text-indigo-200">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')} — A sua privacidade é de extrema importância para nós. Esta política descreve como o <strong>DevConcursos TI</strong> coleta, utiliza, armazena e protege suas informações.
          </div>

          {/* 1. Informações Coletadas */}
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-400" />
              1. Informações que Coletamos
            </h3>
            <p>
              O <strong>DevConcursos TI</strong> preza pela minimização de coleta de dados pessoais. Podemos coletar as seguintes categorias:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
              <li><strong>Dados de Conta e Autenticação (opcional):</strong> Nome de exibição, e-mail e foto de perfil quando você opta por criar uma conta via Firebase Authentication (Google ou e-mail/senha) para sincronizar seu progresso na nuvem.</li>
              <li><strong>Dados de Desempenho e Estudo:</strong> Histórico de revisões de flashcards, acertos/erros, tempo de estudo e cartões dominados armazenados localmente no seu navegador (<code className="text-indigo-300">localStorage</code>) ou sincronizados no Firestore.</li>
              <li><strong>Dados de Navegação e Logs Técnicos:</strong> Endereço IP aproximado, tipo de navegador, sistema operacional e páginas visualizadas, coletados automaticamente para fins de segurança e estatísticas.</li>
            </ul>
          </section>

          {/* 2. Google AdSense e Cookies de Terceiros */}
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Cookie className="w-4 h-4 text-amber-400" />
              2. Google AdSense e Cookies de Publicidade
            </h3>
            <p>
              Este site utiliza o <strong>Google AdSense</strong>, um serviço de veiculação de anúncios fornecido pela Google LLC.
            </p>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
              <p>
                • O Google, como fornecedor terceirizado, utiliza <strong>cookies</strong> (incluindo o cookie DART) para veicular anúncios neste site com base nas visitas anteriores dos usuários a este ou a outros sites na internet.
              </p>
              <p>
                • Os usuários podem desativar a publicidade personalizada acessando as <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline hover:text-indigo-300">Configurações de Anúncios do Google</a> ou através do site <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline hover:text-indigo-300">www.aboutads.info</a>.
              </p>
              <p>
                • Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de marketing direto não relacionado ao serviço.
              </p>
            </div>
          </section>

          {/* 3. Finalidades do Tratamento (LGPD) */}
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              3. Finalidades e Bases Legais (LGPD)
            </h3>
            <p>
              O tratamento dos dados pessoais coletados baseia-se nas seguintes finalidades e hipóteses da Lei Geral de Proteção de Dados (Lei nº 13.709/2018):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
              <li><strong>Execução de Contrato e Prestação de Serviço (Art. 7º, V):</strong> Fornecer as funcionalidades de repetição espaçada, métricas de estudo e sincronização de progresso.</li>
              <li><strong>Legítimo Interesse (Art. 7º, IX):</strong> Aperfeiçoamento pedagógico das ferramentas, segurança contra abusos e análise de tráfego.</li>
              <li><strong>Consentimento (Art. 7º, I):</strong> Para cookies não essenciais e personalização publicitária via AdSense.</li>
            </ul>
          </section>

          {/* 4. Direitos do Usuário Titular dos Dados */}
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-400" />
              4. Seus Direitos como Titular de Dados
            </h3>
            <p className="text-xs">
              Conforme o Artigo 18 da LGPD, você tem direito de solicitar a qualquer momento: confirmação de tratamento de dados, acesso aos seus dados, correção de dados incompletos ou inexatos, anonimização, bloqueio ou eliminação de dados desnecessários, e a exclusão definitiva da sua conta e progresso de estudo.
            </p>
          </section>

          {/* 5. Contato e Encarregado de Dados (DPO) */}
          <section className="space-y-2 bg-slate-800/40 p-4 rounded-xl border border-slate-700">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              5. Contato do Encarregado de Dados (DPO)
            </h3>
            <p className="text-xs text-slate-300">
              Para exercer seus direitos de privacidade ou esclarecer dúvidas sobre esta política, entre em contato diretamente pelo e-mail:
            </p>
            <p className="text-xs font-mono text-indigo-300">
              eduardolessa2011@gmail.com
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
