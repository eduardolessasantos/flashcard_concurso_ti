import React, { useState } from 'react';

interface SectionBackdropProps {
  imageSrc: string;
  alt: string;
  intensity?: 'subtle' | 'balanced' | 'hero';
  position?: 'center' | 'top' | 'bottom';
  priority?: boolean;
  className?: string;
}

const POSITION_CLASS: Record<NonNullable<SectionBackdropProps['position']>, string> = {
  center: 'object-center',
  top: 'object-top',
  bottom: 'object-bottom',
};

const IMAGE_OPACITY_CLASS: Record<NonNullable<SectionBackdropProps['intensity']>, string> = {
  subtle: 'opacity-[0.14] sm:opacity-[0.17]',
  balanced: 'opacity-[0.20] sm:opacity-[0.24]',
  hero: 'opacity-[0.26] sm:opacity-[0.32]',
};

const SCRIM_CLASS: Record<NonNullable<SectionBackdropProps['intensity']>, string> = {
  subtle:
    'bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950',
  balanced:
    'bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950',
  hero:
    'bg-gradient-to-b from-slate-950/75 via-slate-950/60 to-slate-950',
};

export const SectionBackdrop: React.FC<SectionBackdropProps> = ({
  imageSrc,
  alt,
  intensity = 'balanced',
  position = 'center',
  priority = false,
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {/* Fallback ambient surface */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950" />

      {/* Smooth responsive background photography */}
      {!hasError && (
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 h-full w-full object-cover ${POSITION_CLASS[position]} scale-[1.02] transition-opacity duration-700 ease-out motion-reduce:transition-none ${
            isLoaded ? IMAGE_OPACITY_CLASS[intensity] : 'opacity-0'
          }`}
        />
      )}

      {/* Measured contrast & seamless edge-blending scrim */}
      <div className={`absolute inset-0 ${SCRIM_CLASS[intensity]}`} />

      {/* Soft side radial vignette for wide desktop viewports */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,6,23,0.78)_100%)]" />
    </div>
  );
};
