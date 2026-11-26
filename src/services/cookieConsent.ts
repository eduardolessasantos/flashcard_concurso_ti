export type CookieConsentStatus = 'accepted' | 'rejected';

const CONSENT_STORAGE_KEY = 'flashconcursoti_cookie_consent_v1';
export const CONSENT_EVENT_NAME = 'flashconcursoti:consent-change';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function getCookieConsent(): CookieConsentStatus | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === 'accepted' || value === 'rejected') {
      return value;
    }
    return null;
  } catch {
    return null;
  }
}

export function applyGoogleConsent(status: CookieConsentStatus): void {
  if (typeof window === 'undefined') return;
  const grantState = status === 'accepted' ? 'granted' : 'denied';

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: grantState,
      ad_user_data: grantState,
      ad_personalization: grantState,
      analytics_storage: grantState,
    });
  }
}

export function saveCookieConsent(status: CookieConsentStatus): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    // Ignore storage quota errors in restricted browsing modes
  }

  applyGoogleConsent(status);

  window.dispatchEvent(
    new CustomEvent<CookieConsentStatus>(CONSENT_EVENT_NAME, {
      detail: status,
    })
  );
}
