import React from 'react';

interface EconaseLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light' | 'current';
  showSubtitle?: boolean;
}

export const EconaseLogo: React.FC<EconaseLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showSubtitle = false,
}) => {
  const isDark = variant === 'dark';

  const heightClasses = {
    sm: 'h-6',
    md: 'h-8 sm:h-9',
    lg: 'h-11 sm:h-12',
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="8 0 292 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses} w-auto max-w-full transition-colors duration-200`}
        aria-label="ECONASE"
      >
        <defs>
          <linearGradient id={`goldGrad-${size}-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#E5DDD0' : '#1A1918'} />
            <stop offset="45%" stopColor={isDark ? '#D1C4B0' : '#2A2825'} />
            <stop offset="85%" stopColor={isDark ? '#BFA88F' : '#3D3833'} />
            <stop offset="100%" stopColor={isDark ? '#A68E72' : '#24211D'} />
          </linearGradient>
        </defs>

        <g id="econase-typography">
          {/* Stylized Serif E with wave accent */}
          <path
            d="M 21 15 L 43 15 C 45 15 46 16 46 18 L 46 21 L 43.5 21 C 42.5 18.5 41 18 37 18 L 26 18 L 26 50 L 39 50 C 42.5 50 43.5 49 45 46 L 47 46 L 47 51 C 47 52.8 46 53.5 44 53.5 L 21 53.5 C 19 53.5 18.5 52.5 18.5 50.8 L 18.5 46.5 L 21 46.5 C 22.2 48.8 23 49.8 24.5 49.8 L 24.5 18.8 C 23 18.8 22.2 19.8 21 22 L 18.5 22 L 18.5 17.8 C 18.5 16 19 15 21 15 Z"
            fill={
              variant === 'current'
                ? 'currentColor'
                : `url(#goldGrad-${size}-${variant})`
            }
          />
          {/* Distinctive undulating wave traversing the E */}
          <path
            d="M 6 34.5 C 12 39, 20 30, 28 32.5 C 34.5 34.5 41 38 49 33"
            stroke={
              variant === 'current'
                ? 'currentColor'
                : isDark
                ? '#D9CEBD'
                : '#1A1918'
            }
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Remaining Letters: C O N A S E */}
          <text
            x="74"
            y="51"
            textLength="216"
            lengthAdjust="spacing"
            fill={
              variant === 'current'
                ? 'currentColor'
                : `url(#goldGrad-${size}-${variant})`
            }
            style={{
              fontFamily: 'var(--font-cinzel, "Cinzel", "Bodoni MT", "Didot", "Playfair Display", serif)',
              fontSize: '46px',
              fontWeight: 500,
              letterSpacing: '0.08em',
            }}
          >
            CONASE
          </text>
        </g>
      </svg>

      {showSubtitle && (
        <span
          className={`mt-1.5 text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-serif-luxury ${
            isDark ? 'text-[#8E8E96]' : 'text-[#736B64]'
          }`}
        >
          Perfumería de Autor
        </span>
      )}
    </div>
  );
};
