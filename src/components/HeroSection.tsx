import React from 'react';
import { ArrowRight, Sparkles, Calculator, Users } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';
import { HsiLogo } from './HsiLogo';

interface HeroSectionProps {
  onOpenConsultation: (product?: string) => void;
  onOpenPartnerModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation, onOpenPartnerModal }) => {
  const { hero, about, images } = useSiteContent();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071325] via-[#0b1c36] to-[#0a192f] text-white py-16 md:py-24 border-b border-slate-800">
      {/* Background Decorative Mesh & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {images.heroBannerBg && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
            style={{ backgroundImage: `url(${images.heroBannerBg})` }}
          />
        )}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{hero.badge || "AMFI Registered • IRDAI Certified • Mumbai BKC"}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                {hero.headingPrefix}{' '}
                <span className="text-orange-gradient">{hero.headingHighlight}</span>
                {hero.headingSuffix}
              </h1>
              <p className="text-orange-400 font-semibold text-lg sm:text-xl font-heading tracking-wide">
                {about.motto || "Plan Today. Protect Tomorrow. Prosper Always."}
              </p>
            </div>

            {/* Subtitle / Description */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {hero.subtitle}
            </p>

            {/* Quick Filter Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold mr-1">Products:</span>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                Mutual Funds (SIP/SWP)
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                Life & Health Insurance
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                Stocks & Bonds
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                Fraction of Property
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                Loans & Credit
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>{hero.primaryCtaText || "Book Free Financial Consultation"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('calculators')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm border border-slate-600/70 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-orange-400" />
                <span>Calculate SIP & Returns</span>
              </button>

              <button
                onClick={() => onOpenPartnerModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-orange-500/50 hover:bg-orange-500/10 text-orange-300 font-semibold text-sm transition-all cursor-pointer"
              >
                <Users className="w-4 h-4" />
                <span>{hero.secondaryCtaText || "Partner With Us"}</span>
              </button>
            </div>

            {/* Commitment Pledge */}
            <div className="pt-2 text-xs text-slate-400 font-medium tracking-wide">
              <span>Motto: </span>
              <strong className="text-slate-200 font-semibold uppercase">
                {about.motto || "YOUR TRUST, OUR COMMITMENT."}
              </strong>
            </div>

          </div>

          {/* Right Column: Premium Emblem Presentation Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#0c1e38]/95 border border-slate-700/80 shadow-2xl backdrop-blur-sm relative group">
              
              {/* Corner Orange Accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

              {/* Brand Emblem / Custom Logo */}
              <div className="py-2 flex items-center justify-center">
                {images.logoUrl ? (
                  <img src={images.logoUrl} alt="Horizon Secure Investments" className="max-h-24 object-contain" />
                ) : (
                  <HsiLogo variant="full" size="xl" darkTheme={true} />
                )}
              </div>

              {/* Verified Partner Status Bar */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                  <div className="text-xl font-bold text-orange-400">{about.insurancePartnerCount || "25+"}</div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Insurance Partners</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                  <div className="text-xl font-bold text-orange-400">100%</div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Fiduciary Advice</div>
                </div>
              </div>

              {/* Quick Quote Highlight */}
              <div className="mt-4 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-center">
                <div className="text-xs text-orange-200 font-semibold">
                  Dealing with All Major Life, Health & General Insurers
                </div>
                <button
                  onClick={() => scrollToSection('insurance-partners')}
                  className="mt-1 text-[11px] text-orange-400 hover:text-orange-300 underline font-medium cursor-pointer"
                >
                  View Nature of Work Directory &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white">{about.experienceYears || "15+"}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Years of Wealth Leadership</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-orange-400">{about.aum || "₹650+ Cr"}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Advisory Assets (AUM)</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white">{about.investorCount || "18,500+"}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Satisfied Families & HNIs</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-orange-400">{about.insurancePartnerCount || "25+"}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Insurance & AMC Tie-ups</div>
          </div>
        </div>

      </div>
    </section>
  );
};
