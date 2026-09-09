import React, { useEffect } from 'react';
import { 
  X, 
  GraduationCap, 
  BookOpen, 
  Brain, 
  Layers, 
  Shield, 
  Code, 
  Database, 
  Server, 
  Cpu, 
  FileText, 
  CheckCircle2, 
  Award, 
  ArrowRight,
  Sparkles,
  Flame,
  Target,
  ExternalLink
} from 'lucide-react';

interface EducationalGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateRoute?: (route: 'sobre' | 'privacidade' | 'termos' | 'contato') => void;
  onSelectView?: (view: 'flashcards' | 'guides') => void;
}

export const EducationalGuideModal: React.FC<EducationalGuideModalProps> = ({
  isOpen,
  onClose,
  onNavigateRoute,
  onSelectView
}) => {
  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="educational-guide-title"
    >
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl shadow-black/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= MODAL HEADER ================= */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 shadow-inner">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Documentação Pedagógica Oficial
                </span>
              </div>
              <h2 id="educational-guide-title" className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                Guia Educacional Oficial & Plataforma de Estudos
              </h2>
              <p className="text-xs text-slate-400 hidden sm:block">
                Flash Concurso TI – Estudo Ativo, Repetição Espaçada (SRS) e Metodologia para Concursos de TI
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Fechar Guia"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ================= MODAL SCROLLABLE CONTENT ================= */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 text-sm text-slate-300 leading-relaxed font-sans">
          
          {/* Apresentação Principal */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-900/40 space-y-3">
            <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
              Flash Concurso TI – Metodologia Científica para a sua Aprovação
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              O <strong>Flash Concurso TI (DevConcursos TI)</strong> é um portal educacional gratuito de alta performance, desenvolvido exclusivamente para concurseiros e profissionais de tecnologia que buscam a aprovação em cargos de TI em Tribunais (STJ, TSE, TRF, TRT), Carreiras Fiscais (Receita Federal e SEFAZ), Bancos Públicos (Banco do Brasil, Caixa Econômica Federal e BNDES), Órgãos Federais e Estaduais.
            </p>
          </div>

          {/* Seção 1: O que é e qual a finalidade */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-2">
              <Target className="w-5 h-5 text-indigo-400 shrink-0" />
              1. O que é o Flash Concurso TI e qual a sua finalidade?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Os editais contemporâneos de concursos públicos na área de Tecnologia da Informação tornaram-se notórios pela extensão e profundidade exorbitantes de suas ementas. Um candidato aos cargos de Analista em Tecnologia da Informação ou Auditor de Controle e Fiscalização necessita dominar simultaneamente centenas de conceitos técnicos: normas de Segurança da Informação (como a ABNT NBR ISO/IEC 27002:2022), frameworks de governança e gestão (ITIL v4 e COBIT 2019), modelagem de processos com notação BPMN 2.0, engenharia de software com práticas ágeis e testes automatizados, inteligência de negócios, Data Warehousing, Data Lakes, arquiteturas modernas de Inteligência Artificial e Processamento de Linguagem Natural, além de uma rigorosa legislação de dados (LGPD, LAI e Marco Civil da Internet).
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              O <strong>Flash Concurso TI</strong> tem como finalidade primordial resolver o colapso cognitivo do concurseiro de TI. Através de um repositório curado de flashcards inteligentes e cadernos temáticos de resumos comentados, a plataforma transforma o estudo passivo e desestruturado em uma rotina de <em>Active Recall</em> (recordação ativa) com base científica, permitindo consolidar os detalhes minuciosos e as armadilhas mais cobradas pelas bancas examinadoras.
            </p>
          </section>

          {/* Seção 2: Active Recall */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-2">
              <Brain className="w-5 h-5 text-emerald-400 shrink-0" />
              2. Por que estudar com Flashcards para Concursos de TI? A Ciência da Recordação Ativa
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              A maioria dos concurseiros comete o erro clássico de praticar o estudo passivo: ler apostilas volumosas em PDF, grifar páginas inteiras com marca-texto ou assistir a horas seguidas de videoaulas. Estudos consagrados na psicologia cognitiva demonstram que esse comportamento produz a chamada <strong>ilusão de competência</strong>: o estudante reconhece a informação quando ela está diante dos seus olhos, mas é incapaz de evocá-la espontaneamente no dia da prova quando confrontado com uma folha em branco ou com enunciados ardilosos.
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              O estudo com flashcards inverte essa lógica através do <strong>Active Recall</strong> (recuperação ativa). Ao visualizar apenas a pergunta ou a situação-problema no cartão (por exemplo: <em>"Quais são os 4 temas de controles da ISO/IEC 27002:2022?"</em> ou <em>"Qual a diferença entre Star Schema e Snowflake Schema no Data Warehouse?"</em>), o cérebro é forçado a reativar os circuitos neurais de longo prazo para formular a resposta antes de virar o cartão. Esse esforço de recuperação fortalece as conexões sinápticas e multiplica a taxa de retenção da memória em até 300% em relação à simples releitura.
            </p>
          </section>

          {/* Seção 3: Repetição Espaçada SRS */}
          <section className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-2">
              <Layers className="w-5 h-5 text-cyan-400 shrink-0" />
              3. A Ciência da Repetição Espaçada (SRS) e a Curva do Esquecimento
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Em 1885, o pioneiro psicólogo alemão Hermann Ebbinghaus publicou sua pesquisa sobre a <strong>Curva do Esquecimento</strong>, demonstrando que o cérebro humano descarta naturalmente cerca de 50% a 70% das novas informações aprendidas nas primeiras 24 horas caso não haja um reforço deliberado. Em poucos dias, a retenção residual pode cair para menos de 20%.
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              O <strong>Sistema de Repetição Espaçada (Spaced Repetition System - SRS)</strong> utilizado no Flash Concurso TI combate esse decaimento calculando os momentos matematicamente ótimos para a revisão. Sempre que o estudante revisa um cartão imediatamente antes do ponto em que ele seria esquecido, a curva se reinicia com um declínio muito mais suave, transferindo gradativamente a informação da memória de trabalho (curto prazo) para a memória declarativa de longo prazo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-1">
                <div className="font-bold text-rose-400 text-xs flex items-center gap-1.5">
                  <Flame className="w-4 h-4" /> Errei
                </div>
                <p className="text-xs text-slate-300">
                  Reinserção imediata do cartão na fila da sessão ativa para consolidação cognitiva obrigatória antes da conclusão do bloco.
                </p>
              </div>

              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-1">
                <div className="font-bold text-amber-400 text-xs flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> Difícil
                </div>
                <p className="text-xs text-slate-300">
                  O intervalo é encurtado, programando uma revisão rápida (em 24 a 48 horas) para reforçar conceitos que geraram hesitação.
                </p>
              </div>

              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-1">
                <div className="font-bold text-blue-400 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Bom
                </div>
                <p className="text-xs text-slate-300">
                  Progressão normal do intervalo de revisão espaçada, poupando seu tempo para outros tópicos vitais do edital.
                </p>
              </div>

              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-1">
                <div className="font-bold text-emerald-400 text-xs flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Fácil
                </div>
                <p className="text-xs text-slate-300">
                  Grande salto temporal no agendamento da próxima repetição, garantindo que você não gaste energia revisando temas já dominados.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 4: Guia Prático de Estudo */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-2">
              <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
              4. Como Estudar com Flashcards para Concursos de TI: Guia Prático
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Para extrair o rendimento máximo da nossa plataforma e acelerar a sua aprovação, recomendamos o seguinte fluxo de estudos:
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                <div>
                  <strong className="text-white">Consistência sobre Intensidade:</strong> Pratique diariamente de 20 a 30 minutos de flashcards. Sessões curtas e constantes todos os dias produzem resultados infinitamente superiores a maratonas esporádicas de 8 horas no final de semana.
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                <div>
                  <strong className="text-white">Honestidade Rigorosa no Feedback:</strong> Nunca assinale "Fácil" se você titubeou ou se precisou 'chutar'. A eficácia do algoritmo SRS depende integralmente da sua honestidade cognitiva ao admitir quando um cartão necessita de reforço.
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                <div>
                  <strong className="text-white">Leitura Ativa do Comentário Pedagógico:</strong> Após virar o cartão, dedique alguns segundos para ler o comentário explicativo, a base normativa e a dica de banca inclusa no verso do flashcard.
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                <div>
                  <strong className="text-white">Integração com os Cadernos Teóricos:</strong> Utilize nossa aba de <em>Cadernos e Guias Teóricos</em> para compreender a teoria global da disciplina antes de iniciar as rodadas intensivas de memorização por flashcards.
                </div>
              </div>
            </div>
          </section>

          {/* Seção 5: Disciplinas Cobertas */}
          <section className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-2">
              <Cpu className="w-5 h-5 text-indigo-400 shrink-0" />
              5. Disciplinas e Conteúdo Programático Especializado em TI
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              O acervo pedagógico do Flash Concurso TI cobre de forma aprofundada os tópicos de maior peso nos editais das principais carreiras de TI:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-bold text-indigo-400">Segurança da Informação & Criptografia</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ABNT NBR ISO/IEC 27002:2022 estruturada nos 4 novos temas (Organizacionais, Pessoas, Físicos e Tecnológicos); OWASP Top 10:2021 com ênfase em Broken Access Control, Injection e Cryptographic Failures; Criptografia simétrica (AES, DES), assimétrica (RSA, Curvas Elípticas), funções hash seguras (SHA-256) e Autenticação Multifator (MFA).
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-bold text-indigo-400">Governança e Gestão de TI</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ITIL v4 detalhando o Sistema de Valor de Serviço (SVS), as 4 Dimensões do Gerenciamento de Serviços, a distinção entre Utilidade ('fit for purpose') e Garantia ('fit for use'), além dos 7 Princípios Orientadores; COBIT 2019 com a separação entre Governança (EDM) e Gestão (APO, BAI, DSS, MEA); e BPMN 2.0.
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-bold text-indigo-400">Banco de Dados, BI e Big Data</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Modelagem Dimensional com Esquema Estrela (Star Schema desnormalizado) versus Floco de Neve (Snowflake normalizado); Data Warehouse comparando Inmon vs Kimball; Operações multidimensionais OLAP (Drill-down, Roll-up, Slice, Dice, Pivot); e arquiteturas de Data Lake baseadas em Schema-on-Read.
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-bold text-indigo-400">Legislação e Proteção de Dados</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  LGPD (Lei 13.709/18) cobrindo os 10 princípios fundamentais, bases legais de tratamento e ANPD; LAI (Lei 12.527/11) com prazos de resposta (20 + 10 dias) e graus de sigilo (Reservada 5a, Secreta 15a, Ultrassecreta 25a, Pessoais 100a); e Marco Civil da Internet (Lei 12.965/14).
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-bold text-indigo-400">Inteligência Artificial & Arquiteturas Modernas</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Redes Neurais Artificiais, arquitetura Transformer e Autoatenção (Self-Attention); abordagens de RAG (Retrieval-Augmented Generation) versus Fine-Tuning de LLMs; e vulnerabilidades em sistemas de IA como Prompt Injection e mitigação de alucinações.
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-bold text-indigo-400">Engenharia de Software & Métodos Ágeis</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Práticas ágeis de Scrum (Sprint, Product Backlog, Daily, Retrospectiva) e XP (Programação em Par, Integração Contínua); ciclo do TDD (Red, Green, Refactor); princípios SOLID; e arquiteturas de Microsserviços com APIs RESTful.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 6: Bancas Examinadoras */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-2">
              <Award className="w-5 h-5 text-indigo-400 shrink-0" />
              6. Análise Estratégica das Principais Bancas Examinadoras
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              O Flash Concurso TI organiza questões e mnemônicos mapeados para as particularidades das bancas mais atuantes:
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-800 space-y-1">
                <div className="text-sm font-bold text-indigo-300">Cebraspe (Cespe)</div>
                <p className="text-xs text-slate-300">
                  Modelo característico de itens Certo/Errado com penalização por erro (uma errada anula uma certa). A banca é mestre em alterar uma única palavra na definição de um controle da ISO 27002 ou inverter os papéis de governança e gestão no COBIT 2019. Nossos flashcards treinam o olho do estudante para identificar essas pegadinhas com precisão cirúrgica.
                </p>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-800 space-y-1">
                <div className="text-sm font-bold text-indigo-300">FGV (Fundação Getulio Vargas)</div>
                <p className="text-xs text-slate-300">
                  Notória por enunciados longos e contextualizados que simulam situações corporativas complexas (por exemplo, falhas de segurança após deploy ou implementação de incidentes na ITIL). Os flashcards para FGV estimulam o raciocínio prático e a identificação rápida do princípio subjacente.
                </p>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-800 space-y-1">
                <div className="text-sm font-bold text-indigo-300">Fundação Cesgranrio</div>
                <p className="text-xs text-slate-300">
                  Predominante em concursos da área bancária (Caixa, Banco do Brasil) e estatais de energia e petróleo. A banca prioriza a literalidade das normas e conceitos de arquitetura de dados e transações seguras.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 7: Páginas Institucionais */}
          <section className="space-y-3 border-t border-slate-800 pt-6">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-indigo-400" />
              7. Navegação Rápida & Páginas Institucionais
            </h3>
            <p className="text-xs text-slate-400">
              Acesse diretamente os documentos oficiais de conformidade e suporte do DevConcursos TI:
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                onClick={() => {
                  onClose();
                  if (onNavigateRoute) onNavigateRoute('sobre');
                }}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition-colors border border-slate-700/80 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Sobre Nós & Metodologia</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  if (onNavigateRoute) onNavigateRoute('privacidade');
                }}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition-colors border border-slate-700/80 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Política de Privacidade & LGPD</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  if (onNavigateRoute) onNavigateRoute('termos');
                }}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition-colors border border-slate-700/80 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Termos de Uso</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  if (onNavigateRoute) onNavigateRoute('contato');
                }}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition-colors border border-slate-700/80 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Fale Conosco & Suporte</span>
              </button>
            </div>
          </section>

        </div>

        {/* ================= MODAL FOOTER ================= */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/70 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>DevConcursos TI – Estudo com repetição espaçada e alto rendimento</span>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {onSelectView && (
              <button
                onClick={() => {
                  onClose();
                  onSelectView('guides');
                }}
                className="flex-1 sm:flex-none px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ver Cadernos Teóricos</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Fechar Guia</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
