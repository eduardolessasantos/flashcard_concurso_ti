import React from 'react';
import { 
  GraduationCap, 
  ArrowLeft, 
  DollarSign, 
  ShieldCheck, 
  Laptop, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  TrendingUp, 
  Award,
  ArrowRight,
  FileText
} from 'lucide-react';
import { Topico } from '../types';

interface GuiaCarreiraViewProps {
  onSelectTopicForStudy: (topic: Topico) => void;
  onNavigateHome: () => void;
}

export const GuiaCarreiraView: React.FC<GuiaCarreiraViewProps> = ({
  onSelectTopicForStudy,
  onNavigateHome
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 animate-in fade-in duration-300">
      
      {/* Navigation Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 px-3.5 py-2 rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Flashcards & Treino</span>
        </button>

        <span className="text-xs text-indigo-400 font-mono bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          Guia de Carreira Completo
        </span>
      </div>

      {/* Main Title Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
          <GraduationCap className="w-4 h-4" />
          <span>Manual de Orientação Profissional & Estratégia de Aprovação</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Guia Definitivo da Carreira Pública de TI: Salários, Cargos e Plano de Estudos
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          Tudo o que você precisa saber sobre estabilidade, remunerações acima de R$ 25 mil, teletrabalho formal e a rota exata de 6 meses para conquistar sua vaga em tribunais, carreiras fiscais e órgãos federais.
        </p>
      </header>

      {/* 1. Por que ingressar no funcionalismo público em TI */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <ShieldCheck className="w-6 h-6 text-indigo-400" />
          1. Por que Ingressar no Funcionalismo Público em TI?
        </h2>

        <div className="text-sm text-slate-300 space-y-4 leading-relaxed">
          <p>
            O setor de Tecnologia da Informação vive uma contradição no mercado privado: embora a demanda por profissionais seja constante, a rotina nas startups e big techs é frequentemente marcada por jornadas extenuantes, pressão por metas de curto prazo e a incerteza gerada por ciclos sazonais de demissões em massa (lay-offs). Em contrapartida, <strong>o serviço público oferece um modelo de carreira incomparável</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Estabilidade Constitucional
              </h3>
              <p className="text-xs text-slate-400">
                Após o estágio probatório de 3 anos (Art. 41 da CF/88), o servidor estatutário adquire estabilidade real, ficando blindado contra crises econômicas, trocas de gestão ou reduções arbitrárias de quadro.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Laptop className="w-4 h-4 text-indigo-400" />
                Teletrabalho Formalizado (Home Office)
              </h3>
              <p className="text-xs text-slate-400">
                Órgãos como Tribunais Regionais (TRTs, TRFs, TREs), TCU e Bacen contam com regulamentações sólidas que permitem aos analistas de TI atuar 100% ou em regime híbrido flexível de qualquer lugar do Brasil.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                Jornada Balanceada e Saúde Mental
              </h3>
              <p className="text-xs text-slate-400">
                A jornada é fixada em 30 a 40 horas semanais com horas extras estritamente regulamentadas ou compensadas, garantindo tempo de qualidade com família, lazer e aperfeiçoamento contínuo.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" />
                Adicional de Qualificação (AQ)
              </h3>
              <p className="text-xs text-slate-400">
                Pós-graduações, mestrados, doutorados e certificações profissionais (Scrum, AWS, ITIL, CISSP) garantem aumentos salariais automáticos de 5% a 12,5% incorporados ao vencimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. As Grandes Carreiras de TI */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <BookOpen className="w-6 h-6 text-indigo-400" />
          2. As 4 Grandes Carreiras de TI no Setor Público
        </h2>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">A. Analista Judiciário - Área TI (TRTs, TRFs, STJ, TST, TSE)</h3>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                R$ 15.800 a R$ 24.000
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Responsável por manter os sistemas processuais eletrônicos (como o PJe), plataformas de audiências virtuais, segurança contra ataques distribuídos e modernização com IA. É o concurso com maior número de vagas recorrentes do país.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">B. Auditor Fiscal e de Controle - TI (TCU, CGU, Receita Federal, SEFAZ)</h3>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                R$ 21.000 a R$ 33.000
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Atua na fiscalização de grandes bancos de dados, detecção automatizada de fraudes tributárias, mineração de notas fiscais eletrônicas e auditoria de contratos de software do Estado. Exige forte base em Banco de Dados, Estatística e Governança.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">C. Perito Criminal Federal - TI (Polícia Federal)</h3>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                R$ 26.500 a R$ 35.000
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Especialistas em computação forense, quebra de senhas e criptoativos, recuperação de dados deletados, análise de malware e combate a crimes cibernéticos organizados. Demanda grande domínio de Criptografia, Redes e Sistemas Operacionais.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">D. Analista de Empresas Públicas de TI (Dataprev, Serpro, BB Tecnologia)</h3>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                R$ 10.200 a R$ 18.000 + PLR
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Contratação pelo regime CLT com proteção pública. Foco em engenharia de software pura: desenvolvimento em Java/Spring, Python, arquiteturas de nuvem distribuídas, Kubernetes, pipelines de CI/CD e Big Data para benefícios sociais e financeiros.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Tabela Comparativa de Salários */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <DollarSign className="w-6 h-6 text-emerald-400" />
          3. Quanto Ganha um Servidor Público de TI? (Tabela Atualizada 2026)
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead className="bg-slate-950/80 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3.5 px-4">Carreira / Órgão</th>
                <th className="py-3.5 px-4">Escolaridade</th>
                <th className="py-3.5 px-4">Salário Inicial</th>
                <th className="py-3.5 px-4">Salário Final</th>
                <th className="py-3.5 px-4">Auxílios & Benefícios</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-white">Analista Judiciário TI (TRTs / TRFs)</td>
                <td className="py-3.5 px-4">Nível Superior TI</td>
                <td className="py-3.5 px-4 text-emerald-400 font-bold">R$ 15.815,00</td>
                <td className="py-3.5 px-4 text-slate-200">R$ 24.150,00</td>
                <td className="py-3.5 px-4 text-xs text-slate-400">R$ 1.393 (Alimentação) + Saúde + AQ</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-white">Auditor Federal de Controle (TCU)</td>
                <td className="py-3.5 px-4">Qualquer Superior</td>
                <td className="py-3.5 px-4 text-emerald-400 font-bold">R$ 24.500,00</td>
                <td className="py-3.5 px-4 text-slate-200">R$ 34.200,00</td>
                <td className="py-3.5 px-4 text-xs text-slate-400">R$ 1.580 (Alimentação) + Bônus Eficiência</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-white">Analista do Banco Central (Bacen TI)</td>
                <td className="py-3.5 px-4">Nível Superior</td>
                <td className="py-3.5 px-4 text-emerald-400 font-bold">R$ 22.900,00</td>
                <td className="py-3.5 px-4 text-slate-200">R$ 31.800,00</td>
                <td className="py-3.5 px-4 text-xs text-slate-400">Plano de Saúde Integral + Gratificações</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-white">Perito Criminal Federal (PF TI)</td>
                <td className="py-3.5 px-4">Computação / Eng.</td>
                <td className="py-3.5 px-4 text-emerald-400 font-bold">R$ 26.500,00</td>
                <td className="py-3.5 px-4 text-slate-200">R$ 35.800,00</td>
                <td className="py-3.5 px-4 text-xs text-slate-400">Adicional de Fronteira + Porte Funcional</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-white">Analista TI (Dataprev / Serpro)</td>
                <td className="py-3.5 px-4">Superior TI</td>
                <td className="py-3.5 px-4 text-emerald-400 font-bold">R$ 10.250,00</td>
                <td className="py-3.5 px-4 text-slate-200">R$ 19.400,00</td>
                <td className="py-3.5 px-4 text-xs text-slate-400">PLR até 3 salários/ano + Previdência</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Como Começar do Zero: Plano de 6 Meses */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <Calendar className="w-6 h-6 text-indigo-400" />
          4. Como Começar do Zero? O Plano de Estudos de 6 Meses
        </h2>

        <div className="text-sm text-slate-300 space-y-4 leading-relaxed">
          <p>
            Muitos profissionais experientes falham em concursos de TI porque utilizam a mesma abordagem do dia a dia corporativo: tentar resolver problemas pesquisando no Google. <strong>Em concurso público, a velocidade de recordação ativa e o apego à literalidade de normas são soberanos.</strong> Eis o cronograma validado para cobrir o núcleo comum de TI em 180 dias:
          </p>

          <div className="space-y-4 pt-2">
            
            <div className="p-5 rounded-2xl bg-slate-900 border-l-4 border-indigo-500 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Mês 1 e 2: O Núcleo Duro e Conhecimentos Gerais</h3>
                <span className="text-xs text-indigo-400 font-mono">Dias 1 a 60</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc pl-5">
                <li><strong>Língua Portuguesa:</strong> Interpretação de texto no perfil da sua banca-alvo, crase, concordância e regência.</li>
                <li><strong>Engenharia de Software:</strong> Ciclo de vida de software, Scrum/Kanban, TDD, Princípios SOLID e Padrões GoF fundamentais.</li>
                <li><strong>Rotina de Flashcards:</strong> 25 cards diários para consolidar definições do GoF e regras gramaticais.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border-l-4 border-emerald-500 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Mês 3 e 4: Dados, Arquitetura e Legislação</h3>
                <span className="text-xs text-emerald-400 font-mono">Dias 61 a 120</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc pl-5">
                <li><strong>Bancos de Dados:</strong> Propriedades ACID, normalização (1FN a 3FN), SQL DDL/DML e modelagem dimensional (Star vs Snowflake).</li>
                <li><strong>Legislação Aplicada:</strong> LGPD (artigos 7º e 11 sobre bases legais), LAI (prazos de sigilo) e Marco Civil da Internet.</li>
                <li><strong>Rotina de Flashcards:</strong> Aumentar para 40 cards diários, alternando entre Certo/Errado e flashcards conceituais.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border-l-4 border-amber-500 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Mês 5: Governança, Nuvem e Segurança da Informação</h3>
                <span className="text-xs text-amber-400 font-mono">Dias 121 a 150</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc pl-5">
                <li><strong>Governança:</strong> ITIL 4 (SVS, 4 dimensões e práticas) e COBIT 2019 (distinção entre Governança e Gestão nos 40 objetivos).</li>
                <li><strong>Segurança:</strong> ISO 27002:2022 (os 4 novos temas), criptografia simétrica vs assimétrica, hashes e assinaturas digitais.</li>
                <li><strong>Rotina de Flashcards:</strong> 50 cards diários com foco nas pegadinhas clássicas da Cebraspe e FGV.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border-l-4 border-rose-500 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Mês 6: Revisão Espaçada Intensiva e Simulação de Prova</h3>
                <span className="text-xs text-rose-400 font-mono">Dias 151 a 180</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc pl-5">
                <li><strong>Baterias de Questões e SRS:</strong> Realizar apenas revisão ativa de flashcards difíceis e provas completas nos fins de semana.</li>
                <li><strong>Zeramento de Pontos Cegos:</strong> Reestudo direcionado apenas das lacunas identificadas nas estatísticas da plataforma.</li>
                <li><strong>Gestão de Tempo e Redação Discursiva:</strong> Praticar discursivas técnicas com temas de Nuvem, IA e LGPD.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900/60 via-slate-900 to-indigo-900/60 border border-indigo-500/40 text-center space-y-4 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Comece Hoje Mesmo Sua Preparação com Repetição Espaçada
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Não adie sua aprovação. Pratique agora os flashcards gratuitos das disciplinas mais cobradas e domine cada detalhe exigido pelas bancas.
        </p>
        <button
          onClick={onNavigateHome}
          className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-indigo-600/30 inline-flex items-center gap-2"
        >
          <span>Acessar Flashcards Gratuitos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
