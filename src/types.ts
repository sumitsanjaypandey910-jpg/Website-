export interface ProductSubcategory {
  id: string;
  name: string;
  tags: string[];
  description: string;
  keyHighlights: string[];
  targetAudience: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'mutual_funds' | 'life_insurance' | 'health_insurance' | 'general_insurance' | 'stocks' | 'bonds' | 'fractional_property' | 'loans';
  categoryLabel: string;
  iconName: string;
  shortDescription: string;
  subtypes: string[];
  detailedDescription: string;
  keyBenefits: string[];
  motto?: string;
  colorScheme: {
    badgeBg: string;
    badgeText: string;
    border: string;
    gradient: string;
    accent: string;
  };
}

export interface InsuranceCompany {
  name: string;
  category: 'life' | 'health' | 'general';
  categoryName: string;
  logoPlaceholder: string;
  claimSettlementRatio?: string;
  speciality: string;
  highlights: string[];
}

export interface PartnerBenefit {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  perks: string[];
  badge: string;
}

export interface TrustPillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  productInterest: string;
  investmentHorizon?: string;
  estimatedBudget?: string;
  notes?: string;
  timestamp: string;
}

export interface PartnerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  currentProfession: string;
  experienceYears: string;
  interests: string[];
  message: string;
  timestamp: string;
}
