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
  Calculator,
  BookMarked,
  Globe,
  PenTool,
  ArrowRight
} from 'lucide-react';

export const AuthGateView: React.FC = () => {
  const { signInWithGoogle, signInEmail, signUpEmail, sendPasswordReset } = useAuth();
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
      return 'Aviso: Domínio não autorizado no Google Auth. Utilize o login por E-mail e Senha abaixo.';
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
      return 'Muitas tentativas. Aguarde alguns instantes ou redefina sua senha.';
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
            <span>Área Exclusiva de Estudos do Concurseiro</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Sua aprovação com <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Estudo Teórico & Flashcards</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Plataforma individualizada com <strong>Português, RLM, Inglês Técnico e TI</strong> com repetição espaçada e anotações à mão para FGV, Cebraspe e Cesgranrio.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <BookMarked className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Conhecimentos Gerais & TI</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">
                  Português, RLM, Inglês Técnico, Engenharia de Software, Bancos de Dados e Arquitetura.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <PenTool className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Anotações à Mão Didáticas</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">
                  Exemplos práticos no estilo caderno de concurseiro para fixação visual imediata.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Flashcards com SRS Inteligente</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">
                  Repetição espaçada com cartões de múltipla escolha e certo/errado comentados.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Cloud className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Progresso Privado na Nuvem</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">
                  Suas anotações, histórico de acertos e lições concluídas salvos na sua conta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Card Form */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/90 border border-slate-800 rounded-[28px] p-6 sm:p-8 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl relative">
            
            {/* Top Switcher Tabs */}
            <div className="flex gap-2 p-1 bg-slate-950 rounded-2xl border border-slate-800 mb-6">
              <button
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                  setSuccessMsg('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                  authMode === 'login'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg('');
                  setSuccessMsg('');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                  authMode === 'signup'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Criar Conta
              </button>
            </div>

            {/* Google One-Click Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={submitting}
              type="button"
              className="w-full py-3 px-4 bg-white hover:bg-slate-100 active:scale-98 text-slate-900 rounded-full font-bold text-xs shadow-md transition-all flex items-center justify-center gap-3 mb-5 border border-slate-200"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continuar com Google</span>
            </button>

            <div className="relative flex py-2 items-center mb-5">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink mx-3 text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                ou com e-mail
              </span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            {/* Error & Success Feedback Alerts */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-start gap-2.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
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
                    <span>Entrar na Minha Área de Estudos</span>
                  </>
                ) : authMode === 'signup' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Criar Minha Conta & Acessar</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>Enviar Link de Recuperação</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
