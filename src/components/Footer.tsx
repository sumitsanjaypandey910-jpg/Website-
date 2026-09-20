import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Clock, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
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

  return (
    <footer className="bg-[#071220] text-slate-300 border-t-2 border-amber-500/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <HsiLogo variant="horizontal" size="md" darkTheme={true} />
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Horizon Secure Investments (HSI) is India's premier certified multi-asset wealth and risk management firm. Empowering 18,500+ families and business owners to build, protect, and pass on generational wealth.
            </p>

            <div className="pt-1 text-xs font-heading font-bold text-amber-400">
              "{COMPANY_INFO.motto}"
            </div>

            {/* Regulatory Registrations */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-400 font-bold">
                AMFI: {COMPANY_INFO.amfiRegNo}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-bold">
                IRDAI: {COMPANY_INFO.irdaiRegNo}
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Connect on Social Channels:
              </span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-[#0077b5] border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="Connect on LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="Follow on X (Twitter)"
                  aria-label="Twitter X"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-[#ff0000] border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="Watch on YouTube"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-[#E1306C] border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="Follow on Instagram"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-[#1877F2] border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="Like on Facebook"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919820012345?text=Hello%20Horizon%20Secure%20Investments%2C%20I%20would%20like%20to%20know%20more%20about%20your%20wealth%20and%20insurance%20advisory."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-[#25D366] border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="Direct WhatsApp Chat"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Website Pages Navigation (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Company Pages
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>About Us & Trust</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Advisory Services</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Model Portfolios</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>FAQ & Knowledge Base</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Contact & BKC Office</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Investment Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Advisory Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/services#mutual-funds" className="hover:text-amber-300 transition-colors">
                  Mutual Funds (SIP, Lumpsum, ELSS Tax)
                </Link>
              </li>
              <li>
                <Link to="/services#insurance" className="hover:text-amber-300 transition-colors">
                  Life & Term Protection (25+ Insurers)
                </Link>
              </li>
              <li>
                <Link to="/services#health" className="hover:text-amber-300 transition-colors">
                  Family Health & 1-Crore Mediclaim
                </Link>
              </li>
              <li>
                <Link to="/services#real-estate" className="hover:text-amber-300 transition-colors">
                  Fractional Commercial Real Estate (CRE)
                </Link>
              </li>
              <li>
                <Link to="/services#bonds" className="hover:text-amber-300 transition-colors">
                  RBI Sovereign Gold Bonds & 54EC Bonds
                </Link>
              </li>
              <li>
                <Link to="/services#loans" className="hover:text-amber-300 transition-colors">
                  Home Loans & Loan Against Property (LAP)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details (3.5 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              Headquarters & Desk
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-300 font-bold text-white transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-500">Toll-Free: {COMPANY_INFO.tollFree}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-300 transition-colors truncate">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.operatingHours} IST</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-black text-xs transition-all shadow-sm cursor-pointer text-center"
              >
                Schedule Free Portfolio Audit
              </button>
              <button
                onClick={onOpenPartnerModal}
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-bold text-xs transition-colors cursor-pointer text-center"
              >
                Join as Partner / Leader &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers Box */}
        <div className="py-6 text-[11px] text-slate-500 leading-relaxed space-y-2 border-b border-slate-800/80">
          <p>
            <strong className="text-slate-400">Regulatory Disclaimers & Compliance:</strong> Horizon Secure Investments (HSI) is a registered AMFI Mutual Fund Distributor (ARN: {COMPANY_INFO.amfiRegNo}) and authorized Insurance Corporate Channel Partner (IRDAI: {COMPANY_INFO.irdaiRegNo}). Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
          </p>
          <p>
            Insurance is the subject matter of solicitation. Policy terms, exclusions, and claim settlement are governed by respective insurance underwriters (25+ institutional partners). Loan approvals, interest rates, and loan-to-value ratios are subject to sanction by partner banks and NBFCs.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Horizon Secure Investments. All Rights Reserved.
          </div>
          <div className="font-heading tracking-wider font-bold text-amber-400">
            {COMPANY_INFO.slogan}
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Back to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
