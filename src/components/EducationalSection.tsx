import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Brain, 
  Shield, 
  Database, 
  Server, 
  Code, 
  FileText, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  ExternalLink,
  Target,
  Layers,
  Award
} from 'lucide-react';
import { Topico } from '../types';

interface EducationalSectionProps {
  onSelectTopic?: (topic: Topico) => void;
  onOpenEducationalGuideModal?: () => void;
  onNavigateToGuides?: () => void;
}

export const EducationalSection: React.FC<EducationalSectionProps> = ({
  onSelectTopic,
  onOpenEducationalGuideModal,
  onNavigateToGuides
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const topicsList = [
    {
      title: 'Segurança da Informação',
      topic: 'Segurança da Informação' as Topico,
      badge: 'ISO 27002:2022 • CIDAN',
      icon: Shield,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      description: 'Pilares CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não-repúdio), gestão de riscos ISO 31000 e os 4 novos temas da ISO 27002:2022 (Organizacionais, Pessoas, Físicos e Tecnológicos).'
    },
    {
      title: 'Governança e Gestão de TI',
      topic: 'Governança & Gestão de TI' as Topico,
      badge: 'ITIL 4 • COBIT 2019',
      icon: Server,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      description: 'Sistema de Valor de Serviço (SVS) do ITIL 4 com 4 dimensões e 34 práticas de gestão; Framework COBIT 2019 separando rigorosamente Governança (domínio EDM) de Gestão (APO, BAI, DSS, MEA).'
    },
    {
      title: 'Bancos de Dados & Big Data',
      topic: 'Bancos de Dados' as Topico,
      badge: 'SQL • Star vs Snowflake',
      icon: Database,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'Propriedades ACID, níveis de isolamento de transações, índices B-Tree, modelagem dimensional OLAP com Esquema Estrela (desnormalizado) vs Floco de Neve (normalizado) e arquiteturas de Data Lake.'
    },
    {
      title: 'Engenharia de Software & Ágil',
      topic: 'Engenharia de Software' as Topico,
      badge: 'SOLID • Padrões GoF • Scrum',
      icon: Code,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'Princípios SOLID de POO, padrões de projeto clássicos Gang of Four (GoF criacionais, estruturais e comportamentais), práticas de Scrum/Kanban e ciclo de testes automatizados (TDD).'
    },
    {
      title: 'Legislação Aplicada à TI',
      topic: 'Legislação' as Topico,
      badge: 'LGPD • LAI • Marco Civil',
      icon: FileText,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      description: 'Princípios e bases legais da LGPD (Lei 13.709/18), prazos e graus de sigilo da LAI (Lei 12.527/11) e obrigações de guarda de logs de conexão e aplicação do Marco Civil da Internet (Lei 12.965/14).'
    },
    {
      title: 'Inteligência Artificial & Atualidades',
      topic: 'Atualidades & IA' as Topico,
      badge: 'LLMs • RAG • Transformers',
      icon: Sparkles,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      description: 'Modelos de linguagem de grande escala (LLMs), arquitetura Transformer com mecanismo de atenção, Retrieval-Augmented Generation (RAG) para reduzir alucinações e métricas de avaliação de modelos.'
    }
  ];

  const faqs = [
    {
      question: 'Por que o método de Active Recall (Recordação Ativa) com Flashcards é superior à releitura?',
      answer: 'A releitura passiva de PDFs e videoaulas gera o fenômeno cognitivo chamado "ilusão de competência": o cérebro reconhece a informação ao vê-la, mas não consegue resgatá-la de memória durante a prova. O flashcard força o esforço ativo de recuperação antes de revelar o gabarito, consolidando trilhas neurais duradouras e aumentando a retenção em até 300% segundo pesquisas de psicologia cognitiva.'
    },
    {
      question: 'Como funciona a Repetição Espaçada (SRS) contra a Curva do Esquecimento?',
      answer: 'Descoberta por Hermann Ebbinghaus, a Curva do Esquecimento mostra que o cérebro descarta até 70% das novas informações em menos de 48 horas se não houver revisão calculada. O algoritmo SRS do DevConcursos TI programa repetições em intervalos progressivos (Errei, Difícil, Bom, Fácil), restabelecendo a curva no momento exato antes do esquecimento e movendo os conteúdos para a memória de longo prazo.'
    },
    {
      question: 'Os flashcards e guias cobrem os editais das principais bancas de concurso?',
      answer: 'Sim. Todo o conteúdo é curado especificamente para o perfil das bancas mais rigorosas do Brasil, com destaque para Cebraspe (pegadinhas conceituais e itens Certo/Errado com penalidade), FGV (enunciados longos com cenários corporativos práticos) e Cesgranrio (literalidade de normas e arquitetura de sistemas bancários).'
    },
    {
      question: 'Qual a recomendação diária de tempo de estudo na plataforma?',
      answer: 'Recomendamos entre 20 a 40 minutos diários de flashcards com consistência contínua. Sessões curtas diárias superam maratonas desgastantes de fim de semana. Antes de iniciar as baterias de repetição, utilize nossos Cadernos Teóricos para compreender os conceitos e normas fundamentais.'
    }
  ];

  return (
    <section id="portal-educacional" className="border-t border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header do Portal */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>Portal Pedagógico & Guia de Estudos Oficial</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Metodologia Ativa de Alta Retenção para Concursos de TI
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Combinamos a ciência da <strong>Repetição Espaçada (SRS)</strong> com cadernos teóricos aprofundados para você dominar as minúcias das normas, frameworks e leis mais cobradas em tribunais, carreiras fiscais e órgãos de controle.
          </p>
        </div>

        {/* Grade de Ementa de TI */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                Ementa Completa e Disciplinas Cobertas
              </h3>
              <p className="text-xs text-slate-400">Clique em qualquer disciplina para praticar diretamente os flashcards relacionados</p>
            </div>
            {onNavigateToGuides && (
              <button
                onClick={onNavigateToGuides}
                className="self-start sm:self-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <span>Acessar Cadernos Teóricos Completos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topicsList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl border ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
                    {onSelectTopic && (
                      <button
                        onClick={() => {
                          onSelectTopic(item.topic);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>Praticar Flashcards</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Banner Metodologia SRS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-indigo-950/70 border border-indigo-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
              <Brain className="w-4 h-4" />
              <span>A Ciência por Trás da Aprovação</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Curva do Esquecimento e a Força da Repetição Espaçada
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              O concurseiro de TI precisa reter milhares de regras, comandos, padrões e leis. O nosso algoritmo organiza suas revisões com base no seu domínio real, impedindo que você esqueça detalhes que diferenciam os primeiros colocados dos eliminados.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            {onOpenEducationalGuideModal && (
              <button
                onClick={onOpenEducationalGuideModal}
                className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Abrir Guia Educacional Completo</span>
              </button>
            )}
            <a
              href="/guias"
              className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver Biblioteca Teórica</span>
            </a>
          </div>
        </div>

        {/* Perguntas Frequentes (FAQ) */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Perguntas Frequentes de Concurseiros</h3>
            <p className="text-xs text-slate-400">Esclarecimentos práticos sobre metodologia de estudo ativo e utilização da plataforma</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={faq.question}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-sm text-slate-200">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
