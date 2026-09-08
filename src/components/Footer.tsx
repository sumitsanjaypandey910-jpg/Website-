import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/hsiData';
import { HsiLogo } from './HsiLogo';

interface FooterProps {
  onOpenConsultation: (product?: string) => void;
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenPartnerModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071220] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <HsiLogo variant="horizontal" size="md" darkTheme={true} />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Horizon Secure Investments is India's premier multi-asset wealth and risk management firm. Empowering individuals, families, and businesses to build, preserve, and pass on generational wealth.
            </p>

            <div className="pt-2 text-xs font-heading font-bold text-amber-400">
              "{COMPANY_INFO.motto}"
            </div>

            <div className="flex items-center gap-3 pt-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-amber-400 font-semibold">
                AMFI: {COMPANY_INFO.amfiRegNo}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-slate-300 font-semibold">
                IRDAI: {COMPANY_INFO.irdaiRegNo}
              </span>
            </div>
          </div>

          {/* Column 2: Investment & Wealth (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Investment Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Mutual Funds (SIP / Lumpsum / SWP / STP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Stocks (NSE/BSE, Intraday, F&O)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Bonds & Sovereign Gold Bonds (SGB)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Fraction of Property (Commercial CRE)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('calculators')}
                  className="text-amber-400 font-semibold hover:underline"
                >
                  SIP Wealth Calculator &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Insurance & Credit (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Insurance & Loans
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Life Insurance (ULIP, TULIP, Savings, Child)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Health Insurance (Mediclaim, GMC, GPA, Senior)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  General Insurance (Motor, Fire, Marine, WC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Loans (Home, LAP, LAS, Working Capital)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('insurance-partners')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Nature of Work (25+ Insurers)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Connect & Partner Link (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Partnership & Career
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenPartnerModal}
                  className="text-amber-300 hover:text-white font-bold transition-colors"
                >
                  Grow With Horizon
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('partner-benefits')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Partner's 5 Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation()}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Free Portfolio Review
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Trust & Integrity Pillars
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers Box (Crucial for Financial Portals) */}
        <div className="py-8 text-[11px] text-slate-500 leading-relaxed space-y-2 border-b border-slate-800/80">
          <p>
            <strong>Regulatory Disclaimers & Compliance:</strong> Horizon Secure Investments (HSI) is a registered AMFI Mutual Fund Distributor (ARN: {COMPANY_INFO.amfiRegNo}) and authorized Insurance Channel Partner (IRDAI: {COMPANY_INFO.irdaiRegNo}). Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
          </p>
          <p>
            Insurance is the subject matter of solicitation. The brochure and website details are for illustrative purposes. Features, exclusions, and terms are governed by respective policy wordings issued by partner insurance companies. Loan approvals, interest rates, and loan-to-value ratios are subject to underwriting criteria and sanction by partner banks and NBFCs.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Horizon Secure Investments. All Rights Reserved.
          </div>
          <div className="font-heading tracking-wider font-semibold text-slate-300">
            {COMPANY_INFO.slogan}
          </div>
        </div>

      </div>
    </footer>
  );
};
