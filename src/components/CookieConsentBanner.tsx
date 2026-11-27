import React, { useEffect, useState } from 'react';
import { Cookie, ShieldCheck } from 'lucide-react';
import {
  CookieConsentStatus,
  applyGoogleConsent,
  getCookieConsent,
  saveCookieConsent,
} from '../services/cookieConsent';

interface CookieConsentBannerProps {
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  forceOpen = false,
  onCloseForceOpen,
  onOpenPrivacyPolicy,
}) => {
  const [consent, setConsent] = useState<CookieConsentStatus | null>(() => getCookieConsent());
  const [isVisible, setIsVisible] = useState<boolean>(() => getCookieConsent() === null);

  useEffect(() => {
    const stored = getCookieConsent();
    if (stored) {
      applyGoogleConsent(stored);
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setIsVisible(true);
    }
  }, [forceOpen]);

  const handleDecision = (decision: CookieConsentStatus) => {
    saveCookieConsent(decision);
    setConsent(decision);
    setIsVisible(false);
    if (onCloseForceOpen) {
      onCloseForceOpen();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferências de cookies e privacidade"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto pointer-events-auto rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/90 shadow-2xl px-4 py-3.5 sm:px-6 sm:py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
        <div className="flex items-start gap-3 max-w-2xl">
          <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            {consent ? <ShieldCheck className="w-4 h-4" /> : <Cookie className="w-4 h-4" />}
          </div>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
              Sua privacidade e uso de cookies (LGPD)
            </p>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              Usamos armazenamento essencial para salvar seu progresso de estudo e, com sua permissão, cookies de análise (Google Analytics) e publicidade (Google AdSense). Você pode aceitar ou recusar cookies não essenciais.{' '}
              <button
                type="button"
                onClick={() => {
                  onOpenPrivacyPolicy();
                  if (forceOpen && onCloseForceOpen) onCloseForceOpen();
                }}
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 font-medium cursor-pointer"
              >
                Ler Política de Privacidade
              </button>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 justify-end">
          <button
            type="button"
            onClick={() => handleDecision('rejected')}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            Recusar não essenciais
          </button>
          <button
            type="button"
            onClick={() => handleDecision('accepted')}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors whitespace-nowrap cursor-pointer"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
};
