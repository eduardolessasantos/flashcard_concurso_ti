import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  LogIn, 
  UserPlus, 
  Layers, 
  BookOpen, 
  Cloud, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Mail, 
  Lock, 
  User as UserIcon,
  AlertCircle,
  Brain,
  Target
} from 'lucide-react';

export const AuthGateView: React.FC = () => {
  const { signInWithGoogle, signInEmail, signUpEmail } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSubmitting(true);

    try {
      if (authMode === 'login') {
        await signInEmail(email, password);
      } else {
        if (!displayName.trim()) {
          setErrorMsg('Por favor, informe seu nome.');
          setSubmitting(false);
          return;
        }
        await signUpEmail(email, password, displayName);
      }
    } catch (err: any) {
      if (err?.code === 'auth/invalid-credential' || err?.code === 'auth/user-not-found' || err?.code === 'auth/wrong-password') {
        setErrorMsg('Email ou senha incorretos.');
      } else if (err?.code === 'auth/email-already-in-use') {
        setErrorMsg('Este email já está cadastrado. Faça login ou use outro.');
      } else if (err?.code === 'auth/weak-password') {
        setErrorMsg('A senha deve ter pelo menos 6 caracteres.');
      } else {
        setErrorMsg('Ocorreu um erro na autenticação. Tente novamente.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMsg('');
    setSubmitting(true);
    try {
      await signInWithGoogle();
    } catch (err) {
      setErrorMsg('Falha ao conectar com o Google. Tente com e-mail e senha.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/30 via-slate-950 to-slate-950 overflow-y-auto">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Presentation & Features */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Área Exclusiva de Alunos & Concurseiros</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Acesse seu Estudo Personalizado de <span className="text-indigo-400">TI para Concursos</span>
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
              Faça login ou crie sua conta gratuita para desbloquear o ecossistema completo de repetição espaçada, trilhas teóricas e estatísticas em nuvem.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Flashcards SRS Ativos</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                  Algoritmo Leitner para fixação rápida de questões Cebraspe, FGV e Cesgranrio.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Trilhas Teóricas de TI</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                  Resumos focados em Eng. Software, Java, Python, Banco de Dados e Microsserviços.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Cloud className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Sincronização em Nuvem</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                  Seu histórico, cartões dominados e cards próprios sincronizados em tempo real.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Metas & Aproveitamento</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                  Acompanhe sua curva de retenção, erros reincidentes e metas diárias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form Card */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-slate-900/90 border border-slate-800 rounded-[28px] p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
            {/* Tab switch */}
            <div className="flex gap-2 border-b border-slate-800/80 pb-4 mb-5">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
                  authMode === 'login'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-800/50'
                }`}
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
                  authMode === 'signup'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-800/50'
                }`}
              >
                Cadastrar Grátis
              </button>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Google Quick Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={submitting}
              className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-full font-semibold text-xs flex items-center justify-center gap-2.5 transition-all shadow-sm active:scale-98 mb-4"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Continuar com Google</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-slate-800" />
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">ou com e-mail</span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-medium">
                    Seu Nome:
                  </label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos TI"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-medium">
                  E-mail:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-medium">
                  Senha:
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-2 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : authMode === 'login' ? (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Entrar e Iniciar Estudos</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Criar Minha Conta Grátis</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-[10px] text-slate-500 text-center mt-4">
              Ao continuar, você concorda com o salvamento seguro das suas sessões de estudo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
