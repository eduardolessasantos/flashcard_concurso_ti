import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Building2, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  ArrowLeft,
  GraduationCap
} from 'lucide-react';
import { Topico } from '../types';

export interface ConcursoItem {
  id: string;
  orgao: string;
  cargo: string;
  banca: string;
  salario: string;
  status: 'Inscrições Abertas' | 'Edital Iminente' | 'Autorizado' | 'Homologado / Convocação';
  statusColor: string;
  vagas: string;
  linkEdital: string;
  topicoRecomendado: Topico;
  materiasDestaque: string[];
}

export const CONCURSOS_LISTA: ConcursoItem[] = [
  {
    id: 'trt-rj-ti',
    orgao: 'TRT-1ª Região (Rio de Janeiro)',
    cargo: 'Analista Judiciário - Tecnologia da Informação',
    banca: 'FGV (Fundação Getulio Vargas)',
    salario: 'R$ 15.815,00 + Benefícios',
    status: 'Inscrições Abertas',
    statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    vagas: 'Cadastro Reserva + 12 Vagas Imediatas',
    linkEdital: 'https://conhecimento.fgv.br/concursos',
    topicoRecomendado: 'Engenharia de Software',
    materiasDestaque: ['Engenharia de Software', 'Governança & ITIL 4', 'Segurança da Informação']
  },
  {
    id: 'bacen-ti',
    orgao: 'Banco Central do Brasil (Bacen)',
    cargo: 'Analista - Área 2: Tecnologia da Informação',
    banca: 'Cebraspe',
    salario: 'R$ 22.900,00',
    status: 'Inscrições Abertas',
    statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    vagas: '100 Vagas + CR',
    linkEdital: 'https://www.cebraspe.org.br/concursos',
    topicoRecomendado: 'Bancos de Dados',
    materiasDestaque: ['Big Data & BI', 'Arquitetura de Nuvem', 'Segurança Bancária']
  },
  {
    id: 'tcu-ti',
    orgao: 'TCU (Tribunal de Contas da União)',
    cargo: 'Auditor Federal de Controle Externo - TI',
    banca: 'FGV',
    salario: 'R$ 24.500,00',
    status: 'Edital Iminente',
    statusColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    vagas: 'Previstas 30 Vagas',
    linkEdital: 'https://portal.tcu.gov.br',
    topicoRecomendado: 'Governança & Gestão de TI',
    materiasDestaque: ['COBIT 2019', 'Auditoria de Sistemas', 'Ciência de Dados']
  },
  {
    id: 'inss-ti',
    orgao: 'INSS (Instituto Nacional do Seguro Social)',
    cargo: 'Analista do Seguro Social - Tecnologia da Informação',
    banca: 'Cebraspe',
    salario: 'R$ 9.850,00',
    status: 'Autorizado',
    statusColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    vagas: 'Solicitadas 150 Vagas',
    linkEdital: 'https://www.gov.br/inss',
    topicoRecomendado: 'Legislação & Proteção de Dados',
    materiasDestaque: ['LGPD & LAI', 'Redes de Computadores', 'Sistemas Previdenciários']
  },
  {
    id: 'pf-perito-ti',
    orgao: 'Polícia Federal',
    cargo: 'Perito Criminal Federal - Área 3 (Informática Forense)',
    banca: 'Cebraspe',
    salario: 'R$ 26.500,00',
    status: 'Edital Iminente',
    statusColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    vagas: 'Comissão Formada',
    linkEdital: 'https://www.gov.br/pf',
    topicoRecomendado: 'Segurança da Informação',
    materiasDestaque: ['Criptografia Forense', 'ISO 27002', 'Engenharia Reversa']
  },
  {
    id: 'dataprev-ti',
    orgao: 'Dataprev (Empresa de Tecnologia da Previdência)',
    cargo: 'Analista de Tecnologia da Informação',
    banca: 'Cesgranrio',
    salario: 'R$ 10.250,00 + PLR e Benefícios',
    status: 'Homologado / Convocação',
    statusColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    vagas: 'Convocação Contínua de Aprovados',
    linkEdital: 'https://www.cesgranrio.org.br',
    topicoRecomendado: 'Atualidades & IA',
    materiasDestaque: ['Kubernetes & Docker', 'Inteligência Artificial', 'DevOps & CI/CD']
  }
];

interface ConcursosAbertosViewProps {
  onSelectTopicForStudy: (topic: Topico) => void;
  onNavigateHome: () => void;
}

export const ConcursosAbertosView: React.FC<ConcursosAbertosViewProps> = ({
  onSelectTopicForStudy,
  onNavigateHome
}) => {
  const [filterBanca, setFilterBanca] = useState<string>('TODAS');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredConcursos = CONCURSOS_LISTA.filter((item) => {
    const matchesBanca = filterBanca === 'TODAS' || item.banca.includes(filterBanca);
    const matchesSearch = 
      item.orgao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.materiasDestaque.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesBanca && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 animate-in fade-in duration-300">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 px-3.5 py-2 rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Flashcards & Estudos</span>
        </button>

        <span className="text-xs text-indigo-400 font-mono bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          Painel Oficial 2026
        </span>
      </div>

      {/* Header & Panorama Geral */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Briefcase className="w-4 h-4" />
          <span>Monitoramento Contínuo de Editais & Vagas</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Concursos Abertos e Previstos de TI – Vagas, Editais e Salários para 2026
        </h1>
        
        {/* Panorama 300+ palavras com foco em SEO e AdSense */}
        <div className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-3">
          <p>
            O ano de <strong>2026 consolida o maior ciclo de contratações de Tecnologia da Informação da história do serviço público brasileiro</strong>. A transformação digital dos órgãos federais, o avanço da Inteligência Artificial aplicada ao Judiciário, os requisitos de segurança cibernética da LGPD e as demandas por auditoria contínua de dados em tribunais de contas geraram um déficit histórico de especialistas em TI nos quadros do Estado.
          </p>
          <p>
            Diferente do mercado privado de tecnologia — que tem enfrentado oscilações e ciclos de lay-offs globais —, a carreira pública oferece <strong>estabilidade estatutária constitucional, remunerações iniciais que variam entre R$ 9.800,00 e mais de R$ 26.500,00 mensais</strong>, planos de cargos e salários estruturados, regimes modernos de teletrabalho formalizado e jornada de trabalho de 30 a 40 horas semanais com previdência protegida.
          </p>
          <p>
            As principais bancas examinadoras do país, em especial <strong>Cebraspe, FGV e Fundação Cesgranrio</strong>, reformularam drasticamente seus editais. Questões superficiais de informática básica foram substituídas por matérias aprofundadas de <em>Engenharia de Software (SOLID, Microsserviços), Bancos de Dados (NoSQL e OLAP), Governança (ITIL 4 e COBIT 2019) e Segurança da Informação (ISO 27002:2022)</em>. Abaixo, você encontra os principais concursos monitorados com links diretos e atalhos para treinar suas matérias com os nossos flashcards.
          </p>
        </div>
      </header>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por órgão, cargo ou matéria..."
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {['TODAS', 'FGV', 'Cebraspe', 'Cesgranrio'].map((banca) => (
            <button
              key={banca}
              onClick={() => setFilterBanca(banca)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterBanca === banca
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {banca}
            </button>
          ))}
        </div>
      </div>

      {/* Cards de Concursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredConcursos.map((concurso) => (
          <div
            key={concurso.id}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-5 group shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-indigo-400 uppercase tracking-wider">
                    {concurso.banca}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {concurso.orgao}
                  </h3>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border shrink-0 ${concurso.statusColor}`}>
                  {concurso.status}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                    Cargo:
                  </span>
                  <span className="font-semibold text-slate-200">{concurso.cargo}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    Remuneração:
                  </span>
                  <span className="font-bold text-emerald-400">{concurso.salario}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    Vagas:
                  </span>
                  <span className="font-medium text-slate-300">{concurso.vagas}</span>
                </div>
              </div>

              {/* Matérias em destaque */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-slate-400 font-semibold">Disciplinas Cruciais no Edital:</span>
                <div className="flex flex-wrap gap-1.5">
                  {concurso.materiasDestaque.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-0.5 rounded-lg bg-slate-800 border border-slate-700/60 text-[11px] text-slate-300"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={concurso.linkEdital}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
              >
                <span>Página Oficial / Edital</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => {
                  onSelectTopicForStudy(concurso.topicoRecomendado);
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Estudar com Flashcards</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
