import React, { useEffect, useRef, useState } from 'react';
import {
  CONSENT_EVENT_NAME,
  CookieConsentStatus,
  getCookieConsent,
} from '../services/cookieConsent';

export type AdcashFormat = '300x250' | '250x250' | '160x600';

interface AdcashBannerProps {
  className?: string;
  zoneId?: string;
  format?: AdcashFormat;
}

declare global {
  interface Window {
    aclib?: {
      runBanner?: (config: { zoneId: string }) => void;
      runAutoTag?: (config: { zoneId: string }) => void;
    };
  }
}

export const AdcashBanner: React.FC<AdcashBannerProps> = ({ 
  className = '', 
  format = '300x250',
  zoneId 
}) => {
  const [consent, setConsent] = useState<CookieConsentStatus | null>(() => getCookieConsent());

  useEffect(() => {
    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsentStatus>;
      setConsent(customEvent.detail ?? getCookieConsent());
    };
    window.addEventListener(CONSENT_EVENT_NAME, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT_NAME, handleConsentChange);
  }, []);

  const getZoneAndDimensions = () => {
    switch (format) {
      case '160x600':
        return {
          zone: zoneId || '12485358',
          width: '160px',
          height: '600px',
          containerClass: 'w-[160px] min-h-[600px]'
        };
      case '250x250':
        return {
          zone: zoneId || '12484154',
          width: '250px',
          height: '250px',
          containerClass: 'w-[250px] min-h-[250px]'
        };
      case '300x250':
      default:
        return {
          zone: zoneId || '12485366',
          width: '300px',
          height: '250px',
          containerClass: 'w-[300px] min-h-[250px]'
        };
    }
  };

  const { zone: effectiveZoneId, width, height, containerClass } = getZoneAndDimensions();
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptInjectedRef = useRef<boolean>(false);

  useEffect(() => {
    if (consent !== 'accepted' || scriptInjectedRef.current || !containerRef.current) return;

    try {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.text = `
        if (window.aclib && typeof window.aclib.runBanner === 'function') {
          aclib.runBanner({
            zoneId: '${effectiveZoneId}',
          });
        } else {
          window.addEventListener('load', function() {
            if (window.aclib && typeof window.aclib.runBanner === 'function') {
              aclib.runBanner({
                zoneId: '${effectiveZoneId}',
              });
            }
          });
        }
      `;
      containerRef.current.appendChild(script);
      scriptInjectedRef.current = true;
    } catch (e) {
      console.warn('Adcash display banner init error:', e);
    }
  }, [consent, effectiveZoneId]);

  if (consent !== 'accepted') {
    return null;
  }

  return (
    <div className={`flex flex-col items-center justify-center my-2 select-none ${className}`}>
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
          Publicidade
        </span>
      </div>
      <div 
        ref={containerRef}
        className={`bg-slate-900/50 border border-slate-800/80 rounded-2xl flex items-center justify-center overflow-hidden transition-all shadow-sm ${containerClass}`}
        style={{ width, minHeight: height }}
      >
        {/* Adcash Banner will be rendered inside this container */}
      </div>
    </div>
  );
};
