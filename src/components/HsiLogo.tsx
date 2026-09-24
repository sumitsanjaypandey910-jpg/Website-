import React from 'react';

interface HsiLogoProps {
  variant?: 'full' | 'horizontal' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  darkTheme?: boolean;
}

export const HsiLogo: React.FC<HsiLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  darkTheme = false
}) => {
  // Dimension mapping
  const markDimensions = {
    sm: { w: 38, h: 38 },
    md: { w: 48, h: 48 },
    lg: { w: 64, h: 64 },
    xl: { w: 100, h: 100 },
  }[size];

  const emblemSvg = (
    <svg
      width={markDimensions.w}
      height={markDimensions.h}
      viewBox="0 0 200 200"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Navy, Orange & Metallic Silver Gradients */}
        <linearGradient id="orangeRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>

        <linearGradient id="orangeFill" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>

        <linearGradient id="navyInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#071220" />
          <stop offset="50%" stopColor="#0a192f" />
          <stop offset="100%" stopColor="#0f2342" />
        </linearGradient>

        <linearGradient id="metallicSilver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f97316" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Outer Orange Ring Circle */}
      <circle cx="100" cy="92" r="82" stroke="url(#orangeRing)" strokeWidth="5.5" fill="url(#navyInner)" />

      {/* Inner Accent Ring */}
      <circle cx="100" cy="92" r="74" stroke="url(#orangeRing)" strokeWidth="1.5" strokeOpacity="0.45" fill="none" />

      {/* Rising Sun Rays at base in Orange */}
      <g stroke="url(#orangeRing)" strokeWidth="2.2" strokeLinecap="round" opacity="0.9">
        <line x1="100" y1="126" x2="100" y2="114" />
        <line x1="86" y1="128" x2="80" y2="118" />
        <line x1="114" y1="128" x2="120" y2="118" />
        <line x1="74" y1="133" x2="65" y2="125" />
        <line x1="126" y1="133" x2="135" y2="125" />
        <line x1="64" y1="140" x2="52" y2="135" />
        <line x1="136" y1="140" x2="148" y2="135" />
      </g>

      {/* Sun disk curve */}
      <path
        d="M 68 135 Q 100 120 132 135"
        stroke="url(#orangeRing)"
        strokeWidth="3.5"
        fill="none"
      />

      {/* Trending Up Chart Bars with Orange Fill */}
      <rect x="94" y="62" width="10" height="20" rx="1.5" fill="url(#orangeFill)" opacity="0.85" />
      <rect x="108" y="52" width="10" height="30" rx="1.5" fill="url(#orangeFill)" opacity="0.95" />
      <rect x="122" y="42" width="10" height="40" rx="1.5" fill="url(#orangeFill)" />

      {/* Upward Growth Arrow Arc */}
      <path
        d="M 86 86 C 102 78, 120 66, 140 46"
        stroke="url(#orangeRing)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <polygon points="144,42 132,46 138,58" fill="url(#orangeRing)" />

      {/* "HSI" Monogram */}
      <text
        x="100"
        y="114"
        textAnchor="middle"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="48"
        fontWeight="800"
        letterSpacing="2"
        fill="url(#metallicSilver)"
        filter="url(#glow)"
      >
        HSI
      </text>

      {/* Bottom Horizon Crest Banner */}
      <path
        d="M 38 145 Q 100 130 162 145 C 150 168, 50 168, 38 145 Z"
        fill="url(#orangeFill)"
      />
      <path
        d="M 44 148 Q 100 134 156 148 C 146 163, 54 163, 44 148 Z"
        fill="#071220"
      />
    </svg>
  );

  if (variant === 'mark-only') {
    return <div className="inline-flex items-center">{emblemSvg}</div>;
  }

  if (variant === 'full') {
    return (
      <div className="flex flex-col items-center text-center select-none group">
        <div className="relative mb-2">
          {emblemSvg}
        </div>
        <div className="flex flex-col items-center">
          <span
            className={`font-heading text-2xl md:text-3xl font-extrabold tracking-[0.25em] ${
              darkTheme ? 'text-white' : 'text-[#0a192f]'
            }`}
          >
            HORIZON
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-[1.5px] w-6 bg-orange-500/80" />
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-orange-500 dark:text-orange-400 uppercase">
              SECURE INVESTMENTS
            </span>
            <span className="h-[1.5px] w-6 bg-orange-500/80" />
          </div>
          <span
            className={`text-[10px] md:text-[11px] font-semibold tracking-[0.22em] mt-1.5 uppercase ${
              darkTheme ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Securing Tomorrow's Wealth
          </span>
        </div>
      </div>
    );
  }

  // Default 'horizontal' layout for Navbar
  return (
    <div className="inline-flex items-center gap-3 select-none group">
      {emblemSvg}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading text-xl md:text-2xl font-black tracking-[0.18em] ${
            darkTheme ? 'text-white' : 'text-[#0a192f]'
          }`}
        >
          HORIZON
        </span>
        <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.22em] text-orange-500 uppercase mt-0.5">
          SECURE INVESTMENTS
        </span>
        <span
          className={`text-[8.5px] md:text-[9.5px] font-semibold tracking-[0.2em] uppercase mt-1 ${
            darkTheme ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Securing Tomorrow's Wealth
        </span>
      </div>
    </div>
  );
};
