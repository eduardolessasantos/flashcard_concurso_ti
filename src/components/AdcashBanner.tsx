import React, { useEffect, useRef } from 'react';

export type AdcashFormat = '250x250' | '160x600';

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
  format = '250x250',
  zoneId 
}) => {
  // Use official zoneIds from publisher dashboard according to format
  const effectiveZoneId = zoneId || (format === '160x600' ? '12469042' : '12468870');
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptInjectedRef = useRef<boolean>(false);

  useEffect(() => {
    if (scriptInjectedRef.current || !containerRef.current) return;

    try {
      // Create script element to call aclib.runBanner as recommended by Adcash
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
  }, [effectiveZoneId]);

  const isSkyscraper = format === '160x600';

  return (
    <div className={`flex flex-col items-center justify-center my-2 select-none ${className}`}>
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
          Publicidade
        </span>
      </div>
      <div 
        ref={containerRef}
        className={`bg-slate-900/50 border border-slate-800/80 rounded-2xl flex items-center justify-center overflow-hidden transition-all shadow-sm ${
          isSkyscraper 
            ? 'w-[160px] min-h-[600px]' 
            : 'w-[250px] min-h-[250px]'
        }`}
        style={
          isSkyscraper
            ? { width: '160px', minHeight: '600px' }
            : { width: '250px', minHeight: '250px' }
        }
      >
        {/* Adcash Banner will be rendered inside this container */}
      </div>
    </div>
  );
};
