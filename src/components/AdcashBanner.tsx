import React, { useEffect, useRef } from 'react';

interface AdcashBannerProps {
  className?: string;
  zoneId?: string;
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
  zoneId = '12468870' 
}) => {
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
            zoneId: '${zoneId}',
          });
        } else {
          window.addEventListener('load', function() {
            if (window.aclib && typeof window.aclib.runBanner === 'function') {
              aclib.runBanner({
                zoneId: '${zoneId}',
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
  }, [zoneId]);

  return (
    <div className={`flex flex-col items-center justify-center my-3 select-none ${className}`}>
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
          Publicidade
        </span>
      </div>
      <div 
        ref={containerRef}
        className="w-[250px] min-h-[250px] bg-slate-900/50 border border-slate-800/80 rounded-2xl flex items-center justify-center overflow-hidden transition-all shadow-sm"
        style={{ minWidth: '250px', minHeight: '250px' }}
      >
        {/* Adcash 250x250 Banner will be rendered inside this container */}
      </div>
    </div>
  );
};
