import React from 'react';
import { X, FileText, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Termos de Uso do Serviço</h2>
              <p className="text-xs text-slate-400">Diretrizes de utilização da plataforma educacional DevConcursos TI</p>
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
          <section className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              1. Aceitação dos Termos
            </h3>
            <p className="text-xs text-slate-300">
              Ao acessar ou utilizar a plataforma <strong>DevConcursos TI</strong>, você concorda expressamente em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              2. Finalidade Educacional e Licença de Uso
            </h3>
            <p className="text-xs text-slate-300">
              O DevConcursos TI é uma ferramenta educacional voltada para o aprendizado ativo, memorização e estudo para concursos públicos nas áreas de Tecnologia da Informação, Governança, Segurança e Conhecimentos Gerais.
            </p>
            <p className="text-xs text-slate-300">
              É concedida permissão para usar e estudar os materiais disponibilizados na plataforma para uso estritamente pessoal, não comercial e preparatório.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              3. Isenção de Responsabilidade
            </h3>
            <p className="text-xs text-slate-300">
              Os materiais no site do DevConcursos TI são fornecidos "como estão". Embora todo o conteúdo seja elaborado e revisado com base nas principais bancas examinadoras (Cebraspe, FGV, Cesgranrio) e normas oficiais (ISO, ITIL, COBIT, Leis Federais), não garantimos a aprovação em concursos nem a ausência de divergências doutrinárias ou jurisprudenciais futuras.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-white">4. Modificações e Atualizações</h3>
            <p className="text-xs text-slate-300">
              O DevConcursos TI pode revisar estes termos de serviço a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atualizada destes Termos de Uso.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
