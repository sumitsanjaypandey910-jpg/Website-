import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, PhoneCall, Shield, TrendingUp, HeartHandshake, Calculator, Users } from 'lucide-react';
import { HsiLogo } from './HsiLogo';

interface NavbarProps {
  onOpenConsultation: (product?: string) => void;
  onOpenPartnerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenPartnerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2.5'
          : 'bg-white border-b border-slate-200/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none"
          >
            <HsiLogo variant="horizontal" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 rounded-md transition-colors"
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('products')}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 rounded-md transition-colors"
              >
                <span>Products & Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-amber-600' : ''}`} />
              </button>

              {/* Mega Dropdown */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 z-50 grid gap-1 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Portfolio & Solutions (Brochure)
                  </div>
                  
                  <button
                    onClick={() => scrollToSection('products')}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="p-1.5 rounded-md bg-blue-100 text-blue-800 shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Mutual Funds & SIP</div>
                      <div className="text-[11px] text-slate-500">SIP, Lumpsum, SWP & STP Wealth Planners</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('products')}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="p-1.5 rounded-md bg-emerald-100 text-emerald-800 shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Life & Health Insurance</div>
                      <div className="text-[11px] text-slate-500">ULIP, Term, Mediclaim, GMC & Senior Care</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('products')}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="p-1.5 rounded-md bg-amber-100 text-amber-800 shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">General Insurance</div>
                      <div className="text-[11px] text-slate-500">Motor, Fire, Marine, WC & Directors Liability</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('products')}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="p-1.5 rounded-md bg-purple-100 text-purple-800 shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Stocks, Bonds & Real Estate</div>
                      <div className="text-[11px] text-slate-500">NSE/BSE, Govt Bonds & Fractional Property</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('products')}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="p-1.5 rounded-md bg-rose-100 text-rose-800 shrink-0">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Flexible Loans</div>
                      <div className="text-[11px] text-slate-500">Home, LAP, LAS, Working Capital & Project</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('insurance-partners')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 rounded-md transition-colors"
            >
              Insurance Tie-Ups
            </button>

            <button
              onClick={() => scrollToSection('calculators')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 rounded-md transition-colors"
            >
              <Calculator className="w-4 h-4 text-amber-600" />
              <span>Calculators</span>
            </button>

            <button
              onClick={() => scrollToSection('partner-benefits')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/80 rounded-md transition-colors"
            >
              <Users className="w-4 h-4 text-amber-600" />
              <span>Partner With Us</span>
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 rounded-md transition-colors"
            >
              About & Trust
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 rounded-md transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#0b192c] to-[#1a385f] hover:from-[#11243d] hover:to-[#224777] text-white text-xs md:text-sm font-bold shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 transition-all border border-amber-500/30"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Home
          </button>
          
          <button
            onClick={() => scrollToSection('products')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Our Products (Mutual Funds, Insurance, Loans)
          </button>

          <button
            onClick={() => scrollToSection('insurance-partners')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Nature of Work (Insurance Companies)
          </button>

          <button
            onClick={() => scrollToSection('calculators')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            SIP & Loan Calculators
          </button>

          <button
            onClick={() => scrollToSection('partner-benefits')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold text-amber-800 bg-amber-50"
          >
            Partner's Benefits (Leadership Track)
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Trust & Pillars
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact & Advisory Desk
          </button>

          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0b192c] text-white font-bold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Book Advisory Session</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-amber-600 text-amber-800 font-bold text-sm bg-amber-50"
            >
              <Users className="w-4 h-4" />
              <span>Join as Partner / Leader</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
