import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  Star, 
  BookOpen, 
  Video, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  Info,
  Check,
  Award,
  Zap,
  Tag,
  Compass,
  ShoppingBag,
  FileText
} from 'lucide-react';
import { Topico } from '../types';

export type PreparatorioCategory = 'TODOS' | 'CURSINHOS_COMPLETOS' | 'QUESTOES' | 'PRATICA_TECNICA';

export interface PlanoItem {
  nome: string;
  precoEstimado: string;
  destaque?: boolean;
  caracteristicas: string[];
}

export interface PreparatorioItem {
  id: string;
  nome: string;
  categoria: PreparatorioCategory;
  categoriaLabel: string;
  slogan: string;
  descricao: string;
  notaAvaliacao: number;
  pontosFortes: string[];
  recursosPrincipais: string[];
  indicadoPara: string;
  planos: PlanoItem[];
  siteOficialUrl: string;
  badgeDestaque?: string;
  corBorda: string;
  corGradiente: string;
}

export const PREPARATORIOS_LISTA: PreparatorioItem[] = [
  {
    id: 'estrategia-concursos',
    nome: 'Estratégia Concursos (Estratégia TI)',
    categoria: 'CURSINHOS_COMPLETOS',
    categoriaLabel: 'Cursinho Completo (Foco em PDF)',
    slogan: 'Líder histórico em aprovações de alto rendimento para TI e Carreiras Fiscais',
    descricao: 'Reconhecido no mercado pelos seus Livros Digitais (PDFs) densos, exaustivos e altamente direcionados. Ideal para concurseiros de TI que absorvem melhor o conteúdo através de leitura estruturada, teoria e questões comentadas no próprio material.',
    notaAvaliacao: 4.9,
    badgeDestaque: 'Mais Tradicional em TI',
    corBorda: 'border-blue-500/40 hover:border-blue-500/70',
    corGradiente: 'from-blue-950/40 to-slate-900',
    pontosFortes: [
      'PDFs teóricos extremamente aprofundados com teoria completa e questões de bancas',
      'Trilhas Estratégicas semanais guiando o que estudar dia a dia',
      'Passo Estratégico (resumos com foco no que mais cai segundo estatísticas da banca)',
      'Bizu Estratégico de TI para revisões rápidas na véspera da prova'
    ],
    recursosPrincipais: ['Livros Digitais (PDF)', 'Videoaulas', 'Fórum de Dúvidas', 'Trilha Estratégica', 'Passo Estratégico'],
    indicadoPara: 'Candidatos a Tribunais (TRT, TRE, STJ), Carreiras Fiscais (Receita Federal/SEFAZ), Bacen e TCU que estudam prioritariamente por leitura de PDFs.',
    planos: [
      {
        nome: 'Assinatura Básica',
        precoEstimado: 'A partir de 12x de ~R$ 89',
        caracteristicas: ['Cursos completos em PDF e vídeo', 'Fórum de dúvidas ilimitado', 'Monitorias e simulados']
      },
      {
        nome: 'Assinatura Premium',
        precoEstimado: 'A partir de 12x de ~R$ 149',
        destaque: true,
        caracteristicas: ['Tudo da Básica', 'Trilhas Estratégicas guiadas', 'Passo Estratégico', 'Monitorias exclusivas']
      },
      {
        nome: 'Assinatura Platinum',
        precoEstimado: 'Mensalidade recorrente (~R$ 500/mês)',
        caracteristicas: ['Tudo da Premium', 'Acompanhamento com Coach especialista', 'Correções de discursivas']
      }
    ],
    siteOficialUrl: 'https://www.estrategiaconcursos.com.br/'
  },
  {
    id: 'gran-cursos',
    nome: 'Gran Cursos Online (Gran Tecnologia)',
    categoria: 'CURSINHOS_COMPLETOS',
    categoriaLabel: 'Cursinho Completo (Foco em Vídeo & App)',
    slogan: 'A plataforma com a melhor infraestrutura de videoaulas e recursos tecnológicos do país',
    descricao: 'Destaque absoluto em tecnologia educacional, aplicativo móvel com download de aulas, cronograma automatizado por inteligência artificial e corpo docente com referências consagradas no ensino de Redes, Segurança da Informação e Governança de TI.',
    notaAvaliacao: 4.8,
    badgeDestaque: 'Melhor App & Videoaulas',
    corBorda: 'border-red-500/40 hover:border-red-500/70',
    corGradiente: 'from-red-950/40 to-slate-900',
    pontosFortes: [
      'Videoaulas de altíssima qualidade com professores renomados de TI',
      'Gran Questões com milhões de itens e comentários de professores integrados',
      'Cronograma de estudos dinâmico gerado com base no edital',
      'App premiado com modo offline e audiobooks de legislação'
    ],
    recursosPrincipais: ['Videoaulas HD', 'PDFs Sintéticos', 'Gran Questões', 'Audiobooks', 'Gerenciador de Estudos IA'],
    indicadoPara: 'Quem prefere aprender assistindo videoaulas didáticas e dinâmicas, além de concurseiros que precisam estudar em trânsito pelo celular.',
    planos: [
      {
        nome: 'Assinatura Ilimitada Individual',
        precoEstimado: 'A partir de 12x de ~R$ 99',
        caracteristicas: ['Acesso a mais de 35.000 cursos', 'Gran Questões ilimitado', 'Download de aulas offline', 'Garantia de atualização pós-edital']
      },
      {
        nome: 'Ilimitada Social / Mulher',
        precoEstimado: 'A partir de 12x de ~R$ 59',
        destaque: true,
        caracteristicas: ['Todas as funcionalidades da Ilimitada com desconto social especial para elegíveis']
      },
      {
        nome: 'Ilimitada Dupla / Amigos',
        precoEstimado: 'Planos divididos em até 4 pessoas',
        caracteristicas: ['Acessos individuais independentes com valor reduzido por usuário']
      }
    ],
    siteOficialUrl: 'https://www.grancursosonline.com.br/'
  },
  {
    id: 'tec-concursos',
    nome: 'TEC Concursos (Plataforma Especializada)',
    categoria: 'QUESTOES',
    categoriaLabel: 'Sistema Especializado de Questões',
    slogan: 'O sistema de questões preferido pelos concurseiros de alta performance em TI',
    descricao: 'Considerado pelos estudantes experientes como a ferramenta mais refinada para resolução de questões. Destaca-se pelos comentários teóricos profundos de professores engenheiros e auditores em praticamente todas as questões de TI, além de filtros cirúrgicos por assunto e subtema.',
    notaAvaliacao: 4.9,
    badgeDestaque: 'Favorito dos Aprovados em TI',
    corBorda: 'border-emerald-500/40 hover:border-emerald-500/70',
    corGradiente: 'from-emerald-950/40 to-slate-900',
    pontosFortes: [
      'Comentários de professores extremamente técnicos e detalhados em TI',
      'Teoria sucinta embutida diretamente na aba de cada questão',
      'Filtros por árvore de assuntos muito precisa (ex: ITIL 4 > Práticas > Gestão de Incidentes)',
      'Estatísticas refinadas de desempenho e comparação com a média dos concorrentes'
    ],
    recursosPrincipais: ['Banco de Questões Exaustivo', 'Teoria por Assunto', 'Estatísticas de Erros', 'Cadernos Compartilhados'],
    indicadoPara: 'Concurseiros em fase de treino intensivo, revisão por questões e estudo reverso para bancas como Cebraspe, FGV e Cesgranrio.',
    planos: [
      {
        nome: 'Plano Padrão',
        precoEstimado: '~R$ 39,90 / mês',
        caracteristicas: ['Acesso ilimitado às questões', 'Filtros avançados', 'Comentários de alunos']
      },
      {
        nome: 'Plano Avançado',
        precoEstimado: '~R$ 49,90 / mês',
        destaque: true,
        caracteristicas: ['Tudo do Padrão', 'Comentários de professores especialistas ilimitados', 'Teoria integrada nos cadernos', 'Estatísticas completas']
      }
    ],
    siteOficialUrl: 'https://www.tecconcursos.com.br/'
  },
  {
    id: 'qconcursos',
    nome: 'Qconcursos (QC Concursos)',
    categoria: 'QUESTOES',
    categoriaLabel: 'Comunidade & Banco de Questões',
    slogan: 'A maior comunidade de estudantes e concurseiros do Brasil',
    descricao: 'Plataforma pioneira no Brasil com acervo gigantesco de provas e gabaritos históricos. Seu maior diferencial é a comunidade engajada: em praticamente qualquer questão obscura de TI há comentários de colegas concurseiros com mnemônicos, mapas mentais e dicas de bancas.',
    notaAvaliacao: 4.7,
    badgeDestaque: 'Maior Comunidade',
    corBorda: 'border-amber-500/40 hover:border-amber-500/70',
    corGradiente: 'from-amber-950/40 to-slate-900',
    pontosFortes: [
      'Milhões de questões e comentários compartilhados pelos próprios alunos',
      'Macetes, mnemônicos e resumos nos fóruns de discussão de cada questão',
      'Simulados online com cronômetro real e ranking entre usuários',
      'Raio-X de bancas examinadoras identificando tópicos mais cobrados'
    ],
    recursosPrincipais: ['Resolução Ilimitada de Questões', 'Comentários da Comunidade', 'Videoaulas de Questões', 'Simulados Cronometrados'],
    indicadoPara: 'Estudantes de todos os níveis que querem treinar milhares de questões diárias com excelente custo-benefício e aproveitar a sabedoria coletiva da comunidade.',
    planos: [
      {
        nome: 'Plano Pro Anual',
        precoEstimado: 'A partir de 12x de ~R$ 19,90',
        caracteristicas: ['Questões ilimitadas', 'Criação de cadernos', 'Acesso à comunidade e estatísticas']
      },
      {
        nome: 'Plano Premium Anual',
        precoEstimado: 'A partir de 12x de ~R$ 29,90',
        destaque: true,
        caracteristicas: ['Tudo do Pro', 'Aulas em vídeo integradas', 'Guias de estudo personalizados', 'Raio-X do edital']
      }
    ],
    siteOficialUrl: 'https://www.qconcursos.com.br/'
  },
  {
    id: 'direcao-concursos',
    nome: 'Direção Concursos (Gaviões da TI)',
    categoria: 'CURSINHOS_COMPLETOS',
    categoriaLabel: 'Cursinho Completo (Foco em Objetividade)',
    slogan: 'Material moderno e direto ao ponto, sem prolixidade',
    descricao: 'Criado por ex-professores do Estratégia, o Direção foca em entregar um material direto ao ponto. Sua plataforma PDF 2.0 permite ler o texto, assistir à videoaula correspondente e tirar dúvidas na mesma janela sem perder o contexto.',
    notaAvaliacao: 4.7,
    corBorda: 'border-orange-500/40 hover:border-orange-500/70',
    corGradiente: 'from-orange-950/40 to-slate-900',
    pontosFortes: [
      'Tecnologia PDF 2.0 unificando vídeo, leitura e anotações na mesma tela',
      'Professores renomados em TI (ex: Gabriel Pacheco e equipe)',
      'Parceria nativa com o Qconcursos na assinatura ilimitada',
      'Materiais objetivos focados nas bancas dominantes (Cebraspe e FGV)'
    ],
    recursosPrincipais: ['PDF 2.0 Interativo', 'Videoaulas Objetivas', 'Acesso ao Qconcursos', 'Mesa de Estudos'],
    indicadoPara: 'Concurseiros que buscam um material mais enxuto que o Estratégia e valorizam uma interface de estudo integrada.',
    planos: [
      {
        nome: 'Assinatura Ilimitada Direção + QC',
        precoEstimado: 'A partir de 12x de ~R$ 89',
        destaque: true,
        caracteristicas: ['Acesso a todos os cursos do Direção', 'Acesso total à plataforma Qconcursos', 'PDF 2.0 e videoaulas']
      }
    ],
    siteOficialUrl: 'https://www.direcaoconcursos.com.br/'
  },
  {
    id: 'alura-ti',
    nome: 'Alura (Formação Técnica Contínua)',
    categoria: 'PRATICA_TECNICA',
    categoriaLabel: 'Cursos Práticos & TI Aplicada',
    slogan: 'A maior escola de tecnologia do Brasil para dominar código, DevOps e Nuvem',
    descricao: 'Embora não seja um cursinho tradicional de concurso, a Alura é o melhor complemento para editais de TI que exigem conhecimentos práticos em desenvolvimento de software (Java, Spring, Python, TypeScript), computação em nuvem (AWS/Azure), bancos relacionais/NoSQL e provas discursivas técnicas.',
    notaAvaliacao: 4.8,
    badgeDestaque: 'Essencial p/ Prova Prática',
    corBorda: 'border-indigo-500/40 hover:border-indigo-500/70',
    corGradiente: 'from-indigo-950/40 to-slate-900',
    pontosFortes: [
      'Mais de 1.400 cursos práticos em todas as áreas de TI moderna',
      'Cobre detalhadamente tecnologias cobradas em editais (Docker, Kubernetes, Git, CI/CD)',
      'Projetos reais aplicados que facilitam resolver questões discursivas de TI',
      'Certificados de conclusão emitidos para cada formação completada'
    ],
    recursosPrincipais: ['Mais de 1.400 Cursos Práticos', 'Formações Hands-on', 'Fórum Técnico de Instrutores', 'App Mobile'],
    indicadoPara: 'Candidatos a cargos de Analista de Sistemas e Engenheiro de Software que precisam aprender a programar ou entender arquiteturas modernas para provas discursivas.',
    planos: [
      {
        nome: 'Plano Plus Anual',
        precoEstimado: '12x de ~R$ 95',
        caracteristicas: ['Acesso a todos os cursos', 'Projetos práticos', 'Certificados ilimitados', 'App móvel offline']
      },
      {
        nome: 'Plano Pro Anual',
        precoEstimado: '12x de ~R$ 130',
        destaque: true,
        caracteristicas: ['Tudo do Plus', 'Acesso a formações de liderança e IA generativa', 'Desafios imersivos']
      }
    ],
    siteOficialUrl: 'https://www.alura.com.br/'
  }
];

interface PreparatoriosViewProps {
  onSelectTopicForStudy?: (topic: Topico) => void;
  onNavigateHome: () => void;
}

export const PreparatoriosView: React.FC<PreparatoriosViewProps> = ({
  onSelectTopicForStudy,
  onNavigateHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PreparatorioCategory>('TODOS');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPreparatorios = PREPARATORIOS_LISTA.filter((item) => {
    const matchesCat = selectedCategory === 'TODOS' || item.categoria === selectedCategory;
    const matchesSearch = 
      item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pontosFortes.some(pf => pf.toLowerCase().includes(searchTerm.toLowerCase())) ||
      item.recursosPrincipais.some(r => r.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex-1 bg-slate-950 text-slate-100 min-h-[calc(100vh-140px)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para o Início</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Guia Independente
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Dados Públicos Consolidados
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-indigo-400" />
              Vitrine de Cursos Preparatórios & Assinaturas de TI
            </h1>
            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              Compare as principais plataformas, planos de assinatura, metodologias (PDFs vs Videoaulas vs Questões) e escolha a ferramenta certa para acelerar sua aprovação em cargos de TI.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#comparativo"
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-200 transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Ver Tabela Comparativa</span>
            </a>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'TODOS', label: 'Todos os Preparatórios' },
              { id: 'CURSINHOS_COMPLETOS', label: 'Cursinhos Completos (Vídeo + PDF)' },
              { id: 'QUESTOES', label: 'Sistemas de Questões' },
              { id: 'PRATICA_TECNICA', label: 'Prática & TI Aplicada' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as PreparatorioCategory)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por curso, recurso ou plano..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Showcase Grid of Preparatorios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPreparatorios.map((prep) => (
            <div
              key={prep.id}
              className={`rounded-2xl border bg-gradient-to-b ${prep.corGradiente} ${prep.corBorda} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl relative overflow-hidden`}
            >
              {prep.badgeDestaque && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    {prep.badgeDestaque}
                  </span>
                </div>
              )}

              <div className="space-y-5">
                {/* Header do Card */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {prep.categoriaLabel}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    {prep.nome}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-300/90 font-medium mt-1">
                    {prep.slogan}
                  </p>
                </div>

                {/* Descrição */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {prep.descricao}
                </p>

                {/* Pontos Fortes em Destaque */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Por que vale a pena para Concursos de TI:
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {prep.pontosFortes.map((ponto, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{ponto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recursos Principais (Badges) */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Recursos Inclusos:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prep.recursosPrincipais.map((rec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-900/80 border border-slate-700/60 text-slate-300"
                      >
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Perfil Indicado */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  <span className="font-bold text-amber-300">💡 Indicado para: </span>
                  {prep.indicadoPara}
                </div>

                {/* Planos & Faixa de Preço */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-amber-400" />
                      Planos e Valores Estimados:
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">Valores públicos</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {prep.planos.map((plano, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl border text-xs flex flex-col justify-between ${
                          plano.destaque
                            ? 'bg-indigo-950/30 border-indigo-500/40 text-slate-200'
                            : 'bg-slate-950/50 border-slate-800/80 text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between font-bold">
                            <span className="text-white">{plano.nome}</span>
                            {plano.destaque && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/30 text-indigo-300 font-semibold uppercase">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="text-amber-400 font-mono font-bold mt-1 text-xs">
                            {plano.precoEstimado}
                          </div>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {plano.caracteristicas.map((carac, cIdx) => (
                            <li key={cIdx} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                              <Check className="w-3 h-3 text-indigo-400 shrink-0 mt-0.5" />
                              <span>{carac}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ação / Link Oficial */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Consulte ofertas vigentes no site da instituição</span>
                </div>
                <a
                  href={prep.siteOficialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 group"
                >
                  <span>Acessar Site Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PLATAFORMAS MODULARES, APOSTILAS & LIVRARIAS ================= */}
        <div className="pt-2 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 text-[11px] font-semibold mb-1">
                <ShoppingBag className="w-3 h-3 text-amber-400" />
                <span>Formatos Complementares & Específicos</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Cursos Modulares Avulsos, Livrarias & Apostilas de TI
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                Alternativas para quem não deseja assinar pacotes ilimitados caros e prefere adquirir apenas uma disciplina isolada de TI ou apostilas pontuais para o edital.
              </p>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">4 opções sob demanda</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Provas de TI */}
            <div className="bg-slate-900/50 hover:bg-slate-900 border border-slate-800/90 hover:border-indigo-500/50 rounded-xl p-4 flex flex-col justify-between transition-all group shadow-sm">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Cursos Avulsos de TI
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold font-mono">100% TI</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Provas de TI (Prof. Walter Cunha)
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pioneira plataforma dedicada exclusivamente a concursos de TI. Permite adquirir matérias e simulados isolados em vídeo (Engenharia de Software, ITIL, Redes e Bancos de Dados) ministrados por peritos e auditores.
                </p>
                <div className="pt-1 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-300">💡 Indicado para: </span>
                  Reforço pontual sem precisar assinar planos anuais caros.
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-400 font-semibold">Disciplinas Avulsas</span>
                <a
                  href="https://www.provasdeti.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:underline"
                >
                  <span>Conhecer</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 2. Apostilas Opção & Nova Concursos */}
            <div className="bg-slate-900/50 hover:bg-slate-900 border border-slate-800/90 hover:border-amber-500/50 rounded-xl p-4 flex flex-col justify-between transition-all group shadow-sm">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Apostilas Digitais & Físicas
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">PDF / Impresso</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  Apostilas Opção & Nova Concursos
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Lojas virtuais consolidadas com apostilas organizadas estritamente na ordem do edital recém-publicado para cargos de TI (ex: Dataprev, Correios TI, Caixa Econômica e BB Tecnologia).
                </p>
                <div className="pt-1 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-300">💡 Indicado para: </span>
                  Reta final de tiro curto e leitura direta do edital.
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-400 font-semibold">A partir de R$ 35</span>
                <a
                  href="https://www.apostilasopcao.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 group-hover:underline"
                >
                  <span>Conhecer</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 3. Editora Juspodivm & Método */}
            <div className="bg-slate-900/50 hover:bg-slate-900 border border-slate-800/90 hover:border-sky-500/50 rounded-xl p-4 flex flex-col justify-between transition-all group shadow-sm">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    Livros Doutrinários
                  </span>
                  <span className="text-[10px] text-sky-400 font-mono font-semibold">Perícia & Fisco</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  Editora Juspodivm & Método
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Livrarias especializadas em doutrina para concursos. Destacam-se os manuais de Informática e TI para Perito Criminal da Polícia Federal e questões comentadas por artigo.
                </p>
                <div className="pt-1 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-300">💡 Indicado para: </span>
                  Candidatos a Perito de TI e provas discursivas avançadas.
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-400 font-semibold">Livros Físicos / E-books</span>
                <a
                  href="https://www.editorajuspodivm.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:underline"
                >
                  <span>Conhecer</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 4. Bibliografia Clássica das Bancas */}
            <div className="bg-slate-900/50 hover:bg-slate-900 border border-slate-800/90 hover:border-emerald-500/50 rounded-xl p-4 flex flex-col justify-between transition-all group shadow-sm">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Bíblias Universitárias
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-semibold">Fonte das Bancas</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Livros Clássicos de TI (Amazon)
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  As bancas (Cebraspe e FGV) extraem conceitos textuais literais das obras canônicas: Tanenbaum (Redes e SO), Pressman/Sommerville (Software) e Navathe (Bancos de Dados).
                </p>
                <div className="pt-1 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-300">💡 Indicado para: </span>
                  Fundamentar recursos e dominar a literalidade cobrada.
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-400 font-semibold">Obras Acadêmicas</span>
                <a
                  href="https://www.amazon.com.br/s?k=tanenbaum+redes+de+computadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group-hover:underline"
                >
                  <span>Ver Obras</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Tabela Comparativa de Recursos */}
        <div id="comparativo" className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              Comparativo Lado a Lado
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Qual preparatório de TI combina com o seu momento de estudos?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Guia rápido para saber qual ferramenta atende melhor suas necessidades imediatas.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">Plataforma</th>
                  <th className="py-3.5 px-4">Formato Central</th>
                  <th className="py-3.5 px-4">Ponto Forte em TI</th>
                  <th className="py-3.5 px-4">Melhor Perfil de Concurseiro</th>
                  <th className="py-3.5 px-4 text-right">Site</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Estratégia Concursos
                  </td>
                  <td className="py-4 px-4 text-slate-300">Livros Digitais (PDFs aprofundados)</td>
                  <td className="py-4 px-4 text-slate-300">Cobertura exaustiva e Trilhas Estratégicas</td>
                  <td className="py-4 px-4 text-slate-300">Tribunais Federais, Fisco e Órgãos de Controle</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://www.estrategiaconcursos.com.br/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1">
                      Acessar <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Gran Cursos Online
                  </td>
                  <td className="py-4 px-4 text-slate-300">Videoaulas dinâmicas e App Mobile</td>
                  <td className="py-4 px-4 text-slate-300">Didática em vídeo e Gran Questões embutido</td>
                  <td className="py-4 px-4 text-slate-300">Candidatos que aprendem melhor ouvindo e assistindo</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://www.grancursosonline.com.br/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1">
                      Acessar <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    TEC Concursos
                  </td>
                  <td className="py-4 px-4 text-slate-300">Resolução de Questões com Teoria</td>
                  <td className="py-4 px-4 text-slate-300">Comentários de professores especialistas de alto nível</td>
                  <td className="py-4 px-4 text-slate-300">Concurseiros em reta final e estudo reverso</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://www.tecconcursos.com.br/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1">
                      Acessar <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Qconcursos
                  </td>
                  <td className="py-4 px-4 text-slate-300">Banco de Questões e Fórum Colaborativo</td>
                  <td className="py-4 px-4 text-slate-300">Volume de questões e macetes da comunidade</td>
                  <td className="py-4 px-4 text-slate-300">Todos os níveis com ótimo custo-benefício</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://www.qconcursos.com.br/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1">
                      Acessar <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Direção Concursos
                  </td>
                  <td className="py-4 px-4 text-slate-300">PDF 2.0 (Vídeo + Leitura integrados)</td>
                  <td className="py-4 px-4 text-slate-300">Objetividade e integração com Qconcursos</td>
                  <td className="py-4 px-4 text-slate-300">Candidatos que querem material conciso e focado</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://www.direcaoconcursos.com.br/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1">
                      Acessar <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    Alura
                  </td>
                  <td className="py-4 px-4 text-slate-300">Cursos Práticos de Programação e DevOps</td>
                  <td className="py-4 px-4 text-slate-300">Projetos práticos hands-on (Java, Cloud, Docker)</td>
                  <td className="py-4 px-4 text-slate-300">Candidatos a Desenvolvimento com prova prática/discursiva</td>
                  <td className="py-4 px-4 text-right">
                    <a href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1">
                      Acessar <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Guia Pedagógico de Complementaridade */}
        <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Como combinar o Flash Concurso TI com o seu Preparatório?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                O estudo de alta retenção não substitui o cursinho — ele potencializa o seu rendimento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-indigo-300 uppercase">1. Teoria Base no Cursinho</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Assista à videoaula ou leia o PDF do seu preparatório (Estratégia, Gran ou Direção) para entender o conceito pela primeira vez.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-emerald-300 uppercase">2. Fixação Ativa no Flash TI</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Utilize nossos flashcards diários com algoritmo de repetição espaçada (SRS) para não esquecer prazos, siglas, portas e conceitos da ISO/ITIL.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-300 uppercase">3. Treino Exaustivo de Questões</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Finalize com baterias diárias no TEC ou Qconcursos para pegar as pegadinhas e o padrão de cobrança da sua banca examinadora.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Jurídico & Transparência Obrigatória */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-500 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-400">
            <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Aviso Legal de Isenção de Responsabilidade & Uso Informativo de Marcas</span>
          </div>
          <p className="leading-relaxed">
            O <strong>Flash Concurso TI</strong> é uma plataforma pedagógica de estudo ativo completamente independente. As marcas registradas, nomes comerciais e logotipos pertencem com exclusividade aos seus respectivos proprietários. A citação e o comparativo têm finalidade estritamente informativa, pedagógica e de orientação vocacional para estudantes, amparados pelo <strong>Art. 132, inciso IV, da Lei nº 9.279/1996 (Lei de Propriedade Industrial)</strong> e pelo direito básico à informação do consumidor.
          </p>
          <p className="leading-relaxed">
            Os valores, nomes de planos e recursos apresentados são de conhecimento público e podem sofrer reajustes, alterações ou promoções relâmpago a qualquer momento pelas instituições mantenedoras sem aviso prévio. Recomendamos verificar os termos atualizados diretamente nas páginas oficiais antes de contratar qualquer serviço.
          </p>
        </div>

      </div>
    </div>
  );
};
