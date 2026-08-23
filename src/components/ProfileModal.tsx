import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserProfileData, Banca } from '../types';
import { X, User, Target, Award, Flame, Calendar, LogOut, Check, Sparkles } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  accuracyRate: number;
  totalCardsCount: number;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  accuracyRate,
  totalCardsCount,
}) => {
  const { user, userProfile, updateUserProfileData, logout } = useAuth();
  const [displayName, setDisplayName] = useState(userProfile?.displayName || '');
  const [targetBanca, setTargetBanca] = useState<Banca | 'TODAS'>(userProfile?.targetBanca || 'TODAS');
  const [targetConcurso, setTargetConcurso] = useState(userProfile?.targetConcurso || '');
  const [dailyGoalCards, setDailyGoalCards] = useState(userProfile?.dailyGoalCards || 20);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen || !user) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserProfileData({
      displayName,
      targetBanca,
      targetConcurso,
      dailyGoalCards: Number(dailyGoalCards),
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-[28px] w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'Usuário'}
                className="w-12 h-12 rounded-2xl border-2 border-indigo-500/40 object-cover shadow-lg"
              />
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-lg">
                {(userProfile?.displayName || user.email || 'U')[0].toUpperCase()}
              </div>
            )}
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                {userProfile?.displayName || 'Concurseiro TI'}
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">
                  Cloud Sync Ativo
                </span>
              </h2>
              <p className="text-xs text-slate-400">{user.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-4">
          {savedSuccess && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Metas e perfil atualizados com sucesso na nuvem!</span>
            </div>
          )}

          {/* Quick Stats overview */}
          <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800/80 text-center">
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Aproveitamento</p>
              <p className="text-base font-bold text-indigo-400">{accuracyRate}%</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Meta Diária</p>
              <p className="text-base font-bold text-slate-200">{dailyGoalCards} cards</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Banco Global</p>
              <p className="text-base font-bold text-slate-400">{totalCardsCount}</p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <div>
              <label className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-medium">
                Nome de Exibição:
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-medium">
                  Banca Principal de Foco:
                </label>
                <select
                  value={targetBanca}
                  onChange={(e) => setTargetBanca(e.target.value as Banca | 'TODAS')}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                >
                  <option value="TODAS">Todas as Bancas</option>
                  <option value="Cebraspe">Cebraspe (Cespe)</option>
                  <option value="FGV">FGV</option>
                  <option value="Cesgranrio">Cesgranrio</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-medium">
                  Meta Diária (Cards/Dia):
                </label>
                <input
                  type="number"
                  min="5"
                  max="200"
                  value={dailyGoalCards}
                  onChange={(e) => setDailyGoalCards(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-medium">
                Concurso / Cargo Alvo:
              </label>
              <input
                type="text"
                placeholder="Ex: TCU Auditor TI, BACEN Analista, DATAPREV..."
                value={targetConcurso}
                onChange={(e) => setTargetConcurso(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-full transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Desconectar</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-600/20 transition-all"
            >
              Salvar Preferências
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
