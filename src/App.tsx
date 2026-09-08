import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustPillars } from './components/TrustPillars';
import { ProductCatalog } from './components/ProductCatalog';
import { Calculators } from './components/Calculators';
import { InsurancePartners } from './components/InsurancePartners';
import { PartnerBenefits } from './components/PartnerBenefits';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PartnerApplicationModal } from './components/PartnerApplicationModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState('');

  const handleOpenConsultation = (productName?: string) => {
    setSelectedProductForModal(productName || 'Mutual Funds (SIP / Lumpsum)');
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleOpenPartnerModal = () => {
    setIsPartnerModalOpen(true);
  };

  const handleClosePartnerModal = () => {
    setIsPartnerModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-200 selection:text-slate-900">
      
      {/* WordPress-style Top Announcement / Regulatory Bar */}
      <TopBar onOpenConsultation={handleOpenConsultation} />

      {/* Main Sticky Header */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenPartnerModal={handleOpenPartnerModal}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <HeroSection
          onOpenConsultation={handleOpenConsultation}
          onOpenPartnerModal={handleOpenPartnerModal}
        />

        {/* 4 Core Pillars from Brochure Footer */}
        <TrustPillars />

        {/* Comprehensive Product Catalog (Brochure Pages 2 & 3) */}
        <ProductCatalog onSelectProduct={handleOpenConsultation} />

        {/* Financial Planning & Wealth Calculators */}
        <Calculators onPlanGoal={handleOpenConsultation} />

        {/* Nature of Work - 25+ Insurance Tie-Ups (Brochure Page 4) */}
        <InsurancePartners onQuoteRequest={handleOpenConsultation} />

        {/* Partner's Benefits & Leadership Track (Brochure Page 5) */}
        <PartnerBenefits onApplyPartner={handleOpenPartnerModal} />

        {/* WordPress-Style Contact & Consultation Desk */}
        <ContactSection />

      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onOpenPartnerModal={handleOpenPartnerModal}
      />

      {/* Floating Action Elements (WhatsApp & Advisory) */}
      <FloatingActions
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenPartnerModal={handleOpenPartnerModal}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        prefilledProduct={selectedProductForModal}
      />

      <PartnerApplicationModal
        isOpen={isPartnerModalOpen}
        onClose={handleClosePartnerModal}
      />

    </div>
  );
}
