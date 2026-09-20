import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Shield, 
  TrendingUp, 
  HeartHandshake, 
  Calculator, 
  Users,
  Building2,
  HelpCircle,
  Briefcase,
  PhoneCall
} from 'lucide-react';
import { HsiLogo } from './HsiLogo';

interface NavbarProps {
  onOpenConsultation: (product?: string) => void;
  onOpenPartnerModal: () => void;
  onOpenChatBot?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation, 
  onOpenPartnerModal,
  onOpenChatBot
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleOpenAi = () => {
    closeMobileMenu();
    if (onOpenChatBot) {
      onOpenChatBot();
      return;
    }
    // Check if chat trigger exists
    const chatBtn = document.getElementById('chatTriggerBtn');
    if (chatBtn) {
      chatBtn.click();
    } else {
      const windowEl = document.getElementById('chatWindow');
      if (windowEl) windowEl.classList.remove('hidden');
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all duration-200 ${
      isActive
        ? 'text-amber-900 bg-amber-100/90 shadow-2xs font-extrabold border border-amber-300/80'
        : 'text-slate-700 hover:text-amber-800 hover:bg-amber-50/70'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b-2 border-amber-300 py-2.5'
          : 'bg-white border-b-2 border-amber-200 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center focus:outline-none group"
          >
            <HsiLogo variant="horizontal" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={navLinkClass}
              >
                <div className="flex items-center gap-1">
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-amber-600' : ''}`} />
                </div>
              </NavLink>

              {/* Mega Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-2xl border-2 border-amber-200 py-3 px-2 z-50 grid gap-1 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[10.5px] font-black uppercase tracking-wider text-amber-900 border-b border-amber-100 flex items-center justify-between">
                    <span>Advisory Verticals (Brochure)</span>
                    <Link 
                      to="/services" 
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-amber-700 hover:underline font-bold text-[10px]"
                    >
                      View All &rarr;
                    </Link>
                  </div>
                  
                  <Link
                    to="/services#mutual-funds"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/80 transition-colors text-left"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-800 shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Mutual Funds & SIP</div>
                      <div className="text-[11px] text-slate-500 leading-snug">Wealth creation, ELSS tax saving, SWP pension cashflow</div>
                    </div>
                  </Link>

                  <Link
                    to="/services#insurance"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/80 transition-colors text-left"
                  >
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Life & Health Protection</div>
                      <div className="text-[11px] text-slate-500 leading-snug">Term insurance, Mediclaim across 25+ insurers</div>
                    </div>
                  </Link>

                  <Link
                    to="/services#real-estate"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/80 transition-colors text-left"
                  >
                    <div className="p-2 rounded-lg bg-purple-100 text-purple-800 shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Fractional Real Estate & Bonds</div>
                      <div className="text-[11px] text-slate-500 leading-snug">8-10% pre-leased CRE yield & RBI Sovereign Gold Bonds</div>
                    </div>
                  </Link>

                  <Link
                    to="/services#loans"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/80 transition-colors text-left"
                  >
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Institutional Loans</div>
                      <div className="text-[11px] text-slate-500 leading-snug">Home loans from 8.40%, LAP & Project Funding</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>

            <NavLink to="/faq" className={navLinkClass}>
              FAQ
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* AI Advisor Button */}
            <button
              onClick={handleOpenAi}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-yellow-50 text-amber-950 text-xs font-extrabold border-2 border-amber-300 shadow-2xs hover:scale-[1.02] transition-all cursor-pointer"
              title="Chat with Horizon AI Financial Advisor"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>✨ Ask AI Advisor</span>
            </button>

            {/* Free Consultation CTA */}
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-600 hover:to-yellow-500 text-slate-950 text-xs font-black shadow-md shadow-amber-300/30 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Free Advisory</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-amber-100 focus:outline-none cursor-pointer border border-amber-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-900" /> : <Menu className="w-6 h-6 text-amber-900" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-amber-300 px-4 pt-3 pb-6 space-y-2.5 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-bold ${
                  isActive ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-700 hover:bg-amber-50'
                }`
              }
            >
              🏠 Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-bold ${
                  isActive ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-700 hover:bg-amber-50'
                }`
              }
            >
              🏢 About Us & Trust Pillars
            </NavLink>

            <NavLink
              to="/services"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-bold ${
                  isActive ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-700 hover:bg-amber-50'
                }`
              }
            >
              💼 Advisory Services
            </NavLink>

            <NavLink
              to="/portfolio"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-bold ${
                  isActive ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-700 hover:bg-amber-50'
                }`
              }
            >
              📊 Model Portfolios & Asset Allocation
            </NavLink>

            <NavLink
              to="/faq"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-bold ${
                  isActive ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-700 hover:bg-amber-50'
                }`
              }
            >
              ❓ FAQ & Knowledge Base
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-bold ${
                  isActive ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-700 hover:bg-amber-50'
                }`
              }
            >
              📍 Contact & BKC Office
            </NavLink>
          </div>

          {/* Action Buttons in Mobile Drawer */}
          <div className="pt-3 border-t border-amber-200 flex flex-col gap-2">
            <button
              onClick={handleOpenAi}
              className="w-full py-2.5 rounded-xl bg-white border-2 border-amber-400 text-amber-950 font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>✨ Ask AI Financial Advisor (24/7)</span>
            </button>

            <button
              onClick={() => {
                closeMobileMenu();
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs shadow-sm flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Free Advisory Session</span>
            </button>

            <button
              onClick={() => {
                closeMobileMenu();
                onOpenPartnerModal();
              }}
              className="w-full py-2.5 rounded-xl border-2 border-amber-300 text-amber-900 font-bold text-xs bg-amber-50 hover:bg-amber-100 flex items-center justify-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Join as Partner / Agency Leader</span>
            </button>
          </div>

          <div className="pt-2 text-center text-[11px] text-slate-500 font-semibold">
            <span>AMFI: ARN-284910 • IRDAI: CA-0821/2022</span>
          </div>
        </div>
      )}
    </header>
  );
};
