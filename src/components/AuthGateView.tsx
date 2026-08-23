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
  KeyRound,
  ArrowRight,
  HelpCircle,
  Zap,
  Target
} from 'lucide-react';

export const AuthGateView: React.FC = () => {
  const { signInWithGoogle, signInEmail, signUpEmail, sendPasswordReset, loginAsGuest } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const parseAuthError = (err: any): string => {
    const code = err?.code || '';
    if (code === 'auth/invalid-credential' || code === 'auth/user-not-found' || code === 'auth/wrong-password') {
      return 'E-mail ou senha incorretos. Verifique suas credenciais.';
    }
    if (code === 'auth/email-already-in-use') {
      return 'Este e-mail já está cadastrado. Alterne para a aba "Entrar".';
    }
    if (code === 'auth/weak-password') {
      return 'A senha precisa conter no mínimo 6 caracteres.';
    }
    if (code === 'auth/invalid-email') {
      return 'Por favor, digite um e-mail válido (ex: seuemail@dominio.com).';
    }
    if (code === 'auth/unauthorized-domain') {
      return 'Aviso: Domínio não autorizado no Google Auth. Utilize o login por E-mail e Senha abaixo ou o Acesso como Convidado.';
    }
    if (code === 'auth/popup-blocked') {
      return 'O navegador bloqueou a janela do Google. Permita pop-ups ou faça login com E-mail e Senha.';
    }
    if (code === 'auth/popup-closed-by-user') {
      return 'A janela do Google foi fechada antes da confirmação. Tente novamente.';
    }
    if (code === 'auth/network-request-failed') {
      return 'Falha de conexão com os servidores. Verifique sua conexão com a internet.';
    }
    if (code === 'auth/too-many-requests') {
      return 'Muitas tentativas malsucedidas. Aguarde alguns instantes ou redefina sua senha.';
    }
    return err?.message || 'Ocorreu um erro na autenticação. Tente novamente.';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setSubmitting(true);

    try {
      if (authMode === 'login') {
        if (!email.trim() || !password) {
          setErrorMsg('Preencha seu e-mail e sua senha.');
          setSubmitting(false);
          return;
        }
        await signInEmail(email, password);
      } else if (authMode === 'signup') {
        if (!displayName.trim()) {
          setErrorMsg('Por favor, informe seu nome de concurseiro.');
          setSubmitting(false);
          return;
        }
        if (password.length < 6) {
          setErrorMsg('A senha precisa ter no mínimo 6 caracteres.');
          setSubmitting(false);
          return;
        }
        await signUpEmail(email, password, displayName);
      } else if (authMode === 'forgot') {
        if (!email.trim()) {
          setErrorMsg('Digite seu e-mail para receber as instruções de redefinição.');
          setSubmitting(false);
          return;
        }
        await sendPasswordReset(email);
        setSuccessMsg('Enviamos um link de recuperação para seu e-mail. Verifique sua caixa de entrada e spam.');
      }
    } catch (err: any) {
      setErrorMsg(parseAuthError(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMsg('');
    setSuccessMsg('');
    setSubmitting(true);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      setErrorMsg(parseAuthError(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950 overflow-y-auto">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Presentation & Features */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Área Restrita do Concurseiro de TI</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Acelere sua aprovação com <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Flashcards Inteligentes</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Plataforma focada em <strong>FGV, Cebraspe e Cesgranrio</strong> para cargos de Auditor, Analista e Engenheiro de Software.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Algoritmo Leitner (SRS)</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">
                  Repetição espaçada com cartões classificados em 4 níveis de retenção.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Trilhas Teóricas de TI</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">
                  Eng. de Software, Java/Python, Bancos de Dados e Arquitetura.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Cloud className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Sincronização em Nuvem</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">
                  Seu progresso, cartões dominados e questões customizadas salvos.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Metas & Aproveitamento</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">
                  Controle de taxa de acertos e metas diárias de revisão.
                </p>
              </div>
            </div>
          </div>

          {/* Instant Guest Mode Alternative Banner */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={loginAsGuest}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all shadow-md group"
            >
              <Zap className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Experimentar como Visitante (Acesso Imediato)</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <span className="text-[11px] text-slate-500">Acesso instantâneo sem necessidade de cadastro</span>
          </div>
        </div>

        {/* Right Side: Auth Form Card */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-slate-900/95 border border-slate-800 rounded-[28px] p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
            
            {/* Tab switch */}
            <div className="flex gap-1.5 border-b border-slate-800/80 pb-4 mb-5">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                  setSuccessMsg('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
                  authMode === 'login'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
                }`}
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg('');
                  setSuccessMsg('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
                  authMode === 'signup'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
                }`}
              >
                Cadastrar Grátis
              </button>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-4 p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                <span className="leading-relaxed">{errorMsg}</span>
              </div>
            )}

            {/* Success Message */}
            {successMsg && (
              <div className="mb-4 p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-300 text-xs flex items-start gap-2.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                <span className="leading-relaxed">{successMsg}</span>
              </div>
            )}

            {authMode !== 'forgot' && (
              <>
                {/* Google Quick Button */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={submitting}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 rounded-full font-semibold text-xs flex items-center justify-center gap-2.5 transition-all shadow-sm active:scale-98 mb-4 hover:border-slate-600"
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
              </>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-medium">
                    Seu Nome de Concurseiro:
                  </label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Concurseiro TI"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-slate-950 border border-slate-700/90 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
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
                    className="w-full pl-9 pr-3.5 py-2.5 bg-slate-950 border border-slate-700/90 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              {authMode !== 'forgot' && (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                      Senha:
                    </label>
                    {authMode === 'login' && (
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMode('forgot');
                          setErrorMsg('');
                          setSuccessMsg('');
                        }}
                        className="text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        Esqueceu a senha?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      placeholder="Mínimo 6 caracteres"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-slate-950 border border-slate-700/90 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>
              )}

              {authMode === 'forgot' && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('login');
                      setErrorMsg('');
                      setSuccessMsg('');
                    }}
                    className="text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    ← Voltar para o Login
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-2 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white rounded-full font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : authMode === 'login' ? (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Entrar e Iniciar Estudos</span>
                  </>
                ) : authMode === 'signup' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Criar Minha Conta Grátis</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>Enviar Link de Recuperação</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-slate-800/80 text-center">
              <button
                onClick={loginAsGuest}
                className="text-xs text-slate-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Quer apenas testar? <span className="underline">Acesse como Visitante</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
