import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, Building2, Calculator, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/hsiData';
import { HsiLogo } from './HsiLogo';

interface HeroSectionProps {
  onOpenConsultation: (product?: string) => void;
  onOpenPartnerModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation, onOpenPartnerModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#081220] via-[#0d1e34] to-[#0a182b] text-white py-16 md:py-24 border-b border-amber-500/20">
      {/* Background Decorative Mesh & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AMFI & IRDAI Registered Wealth & Insurance Advisory</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                Securing <span className="text-gold-gradient">Tomorrow's</span> Wealth
              </h1>
              <p className="text-amber-400 font-semibold text-lg sm:text-xl font-heading tracking-wide">
                Plan Today. Protect Tomorrow. Prosper Always.
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Horizon Secure Investments delivers comprehensive wealth accumulation, risk protection, and institutional credit solutions under one roof. Partnering with 25+ premier insurance companies and leading asset management houses to build and protect your family's future.
            </p>

            {/* Quick Filter Tags (From Brochure) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold mr-1">Products:</span>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors"
              >
                Mutual Funds (SIP/SWP)
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors"
              >
                Life & Health Insurance
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors"
              >
                Stocks & Bonds
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors"
              >
                Fraction of Property
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-colors"
              >
                Loans & Credit
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] transition-all"
              >
                <span>Book Free Financial Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('calculators')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm border border-slate-600/70 transition-all"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Calculate SIP & Returns</span>
              </button>

              <button
                onClick={() => onOpenPartnerModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg border border-amber-500/50 hover:bg-amber-500/10 text-amber-300 font-semibold text-sm transition-all"
              >
                <Users className="w-4 h-4" />
                <span>Partner With Us</span>
              </button>
            </div>

            {/* Commitment Pledge */}
            <div className="pt-2 text-xs text-slate-400 font-medium tracking-wide">
              <span>Motto: </span>
              <strong className="text-slate-200 font-semibold">YOUR TRUST, OUR COMMITMENT.</strong>
            </div>

          </div>

          {/* Right Column: Premium Emblem Presentation Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1a2e]/95 border border-amber-500/30 shadow-2xl backdrop-blur-sm relative group">
              
              {/* Corner Gold Accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

              {/* Full Brand Emblem */}
              <div className="py-2">
                <HsiLogo variant="full" size="xl" darkTheme={true} />
              </div>

              {/* Verified Partner Status Bar */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div className="text-xl font-bold text-amber-400">25+</div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Insurance Partners</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div className="text-xl font-bold text-amber-400">100%</div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Objective Advice</div>
                </div>
              </div>

              {/* Quick Quote Highlight */}
              <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
                <div className="text-xs text-amber-200 font-semibold">
                  Dealing with All Major Life, Health & General Insurers
                </div>
                <button
                  onClick={() => scrollToSection('insurance-partners')}
                  className="mt-1 text-[11px] text-amber-400 hover:text-amber-300 underline font-medium"
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
            <div className="text-2xl sm:text-3xl font-black text-white">{COMPANY_INFO.experienceYears}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Years of Wealth Leadership</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">{COMPANY_INFO.aum}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Advisory Assets (AUM)</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white">{COMPANY_INFO.investorCount}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Families & MSMEs Protected</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">{COMPANY_INFO.partnerCount}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Empowered Business Partners</div>
          </div>
        </div>

      </div>
    </section>
  );
};
