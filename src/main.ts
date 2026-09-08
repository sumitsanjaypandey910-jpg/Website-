import { PRODUCTS, INSURANCE_PARTNERS } from './data/hsiData';
import { ProductItem } from './types';

// --- DATA & STATE ---
let currentCategory = 'all';
let currentSearch = '';

// --- HELPER FORMATTER ---
function formatINR(val: number): string {
  return '₹' + Math.round(val).toLocaleString('en-IN');
}

// --- DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initMobileMenu();
  renderProducts();
  initProductFilters();
  initCalculators();
  renderInsurancePartners();
  initModals();
  initContactForms();
  initCodeViewer();
});

// --- COPYRIGHT YEAR ---
function initYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}

// --- MOBILE MENU ---
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

  const mobileConsultBtn = document.getElementById('mobileConsultBtn');
  if (mobileConsultBtn) {
    mobileConsultBtn.addEventListener('click', () => {
      menu.classList.add('hidden');
      openConsultationModal();
    });
  }

  const mobilePartnerBtn = document.getElementById('mobilePartnerBtn');
  if (mobilePartnerBtn) {
    mobilePartnerBtn.addEventListener('click', () => {
      menu.classList.add('hidden');
      openPartnerModal();
    });
  }
}

// --- PRODUCT RENDERING & FILTERING ---
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const filtered = PRODUCTS.filter((prod) => {
    const matchesCat =
      currentCategory === 'all' ||
      (currentCategory === 'wealth' && (prod.category === 'mutual_funds' || prod.category === 'stocks')) ||
      (currentCategory === 'insurance' && (prod.category === 'life_insurance' || prod.category === 'health_insurance' || prod.category === 'general_insurance')) ||
      (currentCategory === 'bonds' && prod.category === 'bonds') ||
      (currentCategory === 'property' && prod.category === 'fractional_property') ||
      (currentCategory === 'loans' && prod.category === 'loans');

    const searchLower = currentSearch.toLowerCase();
    const matchesSearch =
      !searchLower ||
      prod.title.toLowerCase().includes(searchLower) ||
      prod.shortDescription.toLowerCase().includes(searchLower) ||
      prod.subtypes.some((s) => s.toLowerCase().includes(searchLower));

    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500 text-xs">
        No products found matching "<strong>${currentSearch}</strong>". Please try another search term or reset filters.
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (prod) => `
      <div class="hsi-card rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
        <div class="p-6">
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
              ${prod.categoryLabel}
            </span>
            <span class="text-xl">💼</span>
          </div>

          <h3 class="text-lg font-black text-slate-900 font-heading mb-1.5">${prod.title}</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-4">${prod.shortDescription}</p>

          <!-- Subtypes Chips -->
          <div class="mb-4">
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Brochure Offerings:</div>
            <div class="flex flex-wrap gap-1">
              ${prod.subtypes
                .map(
                  (st) =>
                    `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10.5px] font-semibold border border-slate-200">${st}</span>`
                )
                .join('')}
            </div>
          </div>

          <!-- Highlight -->
          <div class="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900">
            <strong>Key Benefit:</strong> ${prod.keyBenefits[0] || 'Personalized allocation and full claim support.'}
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
          <button class="view-detail-btn px-3 py-1.5 rounded text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-200 transition-colors cursor-pointer" data-id="${prod.id}">
            View Details
          </button>
          <button class="prod-enquire-btn px-4 py-1.5 rounded-lg bg-[#0b192c] hover:bg-[#15345a] text-white text-xs font-bold transition-all shadow-xs cursor-pointer" data-name="${prod.title}">
            Enquire Now →
          </button>
        </div>
      </div>
    `
    )
    .join('');

  // Attach button events
  grid.querySelectorAll('.view-detail-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).dataset.id;
      const product = PRODUCTS.find((p) => p.id === id);
      if (product) openProductDetailModal(product);
    });
  });

  grid.querySelectorAll('.prod-enquire-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const name = (e.currentTarget as HTMLElement).dataset.name;
      openConsultationModal(name);
    });
  });
}

function initProductFilters() {
  const container = document.getElementById('productTabContainer');
  const searchInput = document.getElementById('productSearchInput') as HTMLInputElement;

  if (container) {
    container.querySelectorAll('.prod-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.prod-tab-btn').forEach((b) => {
          b.classList.remove('active', 'bg-[#0b192c]', 'text-white');
          b.classList.add('text-slate-600', 'hover:bg-slate-100');
        });

        btn.classList.add('active', 'bg-[#0b192c]', 'text-white');
        btn.classList.remove('text-slate-600', 'hover:bg-slate-100');

        currentCategory = (btn as HTMLElement).dataset.cat || 'all';
        renderProducts();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentSearch = searchInput.value.trim();
      renderProducts();
    });
  }
}

// --- CALCULATORS (SIP, LUMPSUM, LOAN) ---
function initCalculators() {
  const typeSelector = document.getElementById('calcTypeSelector');
  const sipView = document.getElementById('sipCalcView');
  const lumpView = document.getElementById('lumpCalcView');
  const loanView = document.getElementById('loanCalcView');

  if (typeSelector) {
    typeSelector.querySelectorAll('.calc-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        typeSelector.querySelectorAll('.calc-tab-btn').forEach((b) => {
          b.classList.remove('active', 'bg-[#0b192c]', 'text-white');
          b.classList.add('text-slate-600');
        });
        btn.classList.add('active', 'bg-[#0b192c]', 'text-white');
        btn.classList.remove('text-slate-600');

        const type = (btn as HTMLElement).dataset.calc;
        if (sipView) sipView.classList.toggle('hidden', type !== 'sip');
        if (lumpView) lumpView.classList.toggle('hidden', type !== 'lump');
        if (loanView) loanView.classList.toggle('hidden', type !== 'loan');
      });
    });
  }

  // --- SIP Calc Logic ---
  const sipAmountSlider = document.getElementById('sipAmountSlider') as HTMLInputElement;
  const sipRateSlider = document.getElementById('sipRateSlider') as HTMLInputElement;
  const sipYearsSlider = document.getElementById('sipYearsSlider') as HTMLInputElement;

  function updateSip() {
    if (!sipAmountSlider || !sipRateSlider || !sipYearsSlider) return;
    const P = parseFloat(sipAmountSlider.value);
    const annualR = parseFloat(sipRateSlider.value);
    const years = parseFloat(sipYearsSlider.value);

    document.getElementById('sipAmountDisplay')!.textContent = formatINR(P);
    document.getElementById('sipRateDisplay')!.textContent = annualR + '%';
    document.getElementById('sipYearsDisplay')!.textContent = years + ' Years';

    const n = years * 12;
    const r = annualR / 12 / 100;
    const maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvested = P * n;
    const totalGains = maturity - totalInvested;

    document.getElementById('sipMaturityVal')!.textContent = formatINR(maturity);
    document.getElementById('sipInvestedVal')!.textContent = formatINR(totalInvested);
    document.getElementById('sipGainsVal')!.textContent = '+' + formatINR(totalGains);

    const investedPct = Math.round((totalInvested / maturity) * 100);
    const gainsPct = 100 - investedPct;
    const invBar = document.getElementById('sipInvestedBar');
    const gainsBar = document.getElementById('sipGainsBar');
    if (invBar) invBar.style.width = investedPct + '%';
    if (gainsBar) gainsBar.style.width = gainsPct + '%';
  }

  if (sipAmountSlider && sipRateSlider && sipYearsSlider) {
    sipAmountSlider.addEventListener('input', updateSip);
    sipRateSlider.addEventListener('input', updateSip);
    sipYearsSlider.addEventListener('input', updateSip);
    updateSip();
  }

  // --- Lumpsum Calc Logic ---
  const lumpAmountSlider = document.getElementById('lumpAmountSlider') as HTMLInputElement;
  const lumpRateSlider = document.getElementById('lumpRateSlider') as HTMLInputElement;
  const lumpYearsSlider = document.getElementById('lumpYearsSlider') as HTMLInputElement;

  function updateLump() {
    if (!lumpAmountSlider || !lumpRateSlider || !lumpYearsSlider) return;
    const P = parseFloat(lumpAmountSlider.value);
    const annualR = parseFloat(lumpRateSlider.value);
    const years = parseFloat(lumpYearsSlider.value);

    document.getElementById('lumpAmountDisplay')!.textContent = formatINR(P);
    document.getElementById('lumpRateDisplay')!.textContent = annualR + '%';
    document.getElementById('lumpYearsDisplay')!.textContent = years + ' Years';

    const maturity = P * Math.pow(1 + annualR / 100, years);
    const gains = maturity - P;

    document.getElementById('lumpMaturityVal')!.textContent = formatINR(maturity);
    document.getElementById('lumpInvestedVal')!.textContent = formatINR(P);
    document.getElementById('lumpGainsVal')!.textContent = '+' + formatINR(gains);
  }

  if (lumpAmountSlider && lumpRateSlider && lumpYearsSlider) {
    lumpAmountSlider.addEventListener('input', updateLump);
    lumpRateSlider.addEventListener('input', updateLump);
    lumpYearsSlider.addEventListener('input', updateLump);
    updateLump();
  }

  // --- Loan EMI Calc Logic ---
  const loanAmountSlider = document.getElementById('loanAmountSlider') as HTMLInputElement;
  const loanRateSlider = document.getElementById('loanRateSlider') as HTMLInputElement;
  const loanYearsSlider = document.getElementById('loanYearsSlider') as HTMLInputElement;

  function updateLoan() {
    if (!loanAmountSlider || !loanRateSlider || !loanYearsSlider) return;
    const P = parseFloat(loanAmountSlider.value);
    const annualR = parseFloat(loanRateSlider.value);
    const years = parseFloat(loanYearsSlider.value);

    document.getElementById('loanAmountDisplay')!.textContent = formatINR(P);
    document.getElementById('loanRateDisplay')!.textContent = annualR + '%';
    document.getElementById('loanYearsDisplay')!.textContent = years + ' Years';

    const r = annualR / 12 / 100;
    const n = years * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalRepay = emi * n;
    const totalInterest = totalRepay - P;

    document.getElementById('loanEmiVal')!.innerHTML = `${formatINR(emi)}<span class="text-xs font-normal text-slate-400">/mo</span>`;
    document.getElementById('loanPrincipalVal')!.textContent = formatINR(P);
    document.getElementById('loanInterestVal')!.textContent = formatINR(totalInterest);
    document.getElementById('loanTotalVal')!.textContent = formatINR(totalRepay);
  }

  if (loanAmountSlider && loanRateSlider && loanYearsSlider) {
    loanAmountSlider.addEventListener('input', updateLoan);
    loanRateSlider.addEventListener('input', updateLoan);
    loanYearsSlider.addEventListener('input', updateLoan);
    updateLoan();
  }

  document.getElementById('sipActionBtn')?.addEventListener('click', () => {
    const p = sipAmountSlider.value;
    openConsultationModal(`Mutual Funds SIP of ₹${p}/month`);
  });
  document.getElementById('lumpActionBtn')?.addEventListener('click', () => {
    const p = lumpAmountSlider.value;
    openConsultationModal(`Lumpsum Investment of ₹${p}`);
  });
  document.getElementById('loanActionBtn')?.addEventListener('click', () => {
    const p = loanAmountSlider.value;
    openConsultationModal(`Loan Sanction Assessment for ₹${p}`);
  });
}

// --- NATURE OF WORK (25+ INSURANCE PARTNERS) ---
function renderInsurancePartners() {
  const lifeList = document.getElementById('lifeInsList');
  const healthList = document.getElementById('healthInsList');
  const genList = document.getElementById('generalInsList');

  const lifePartners = INSURANCE_PARTNERS.filter((p) => p.category === 'life');
  const healthPartners = INSURANCE_PARTNERS.filter((p) => p.category === 'health');
  const genPartners = INSURANCE_PARTNERS.filter((p) => p.category === 'general');

  if (lifeList) {
    lifeList.innerHTML = lifePartners
      .map(
        (p) => `
        <li class="py-2.5 flex items-center justify-between">
          <span class="font-bold text-slate-800">${p.name}</span>
          <span class="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-medium">${p.highlights[0] || p.speciality}</span>
        </li>
      `
      )
      .join('');
  }

  if (healthList) {
    healthList.innerHTML = healthPartners
      .map(
        (p) => `
        <li class="py-2.5 flex items-center justify-between">
          <span class="font-bold text-slate-800">${p.name}</span>
          <span class="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">${p.highlights[0] || p.speciality}</span>
        </li>
      `
      )
      .join('');
  }

  if (genList) {
    genList.innerHTML = genPartners
      .map(
        (p) => `
        <li class="py-2.5 flex items-center justify-between">
          <span class="font-bold text-slate-800">${p.name}</span>
          <span class="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-medium">${p.highlights[0] || p.speciality}</span>
        </li>
      `
      )
      .join('');
  }

  document.querySelectorAll('.open-quote-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const partner = (e.currentTarget as HTMLElement).dataset.partner;
      openConsultationModal(partner || 'Insurance Quote');
    });
  });
}

// --- MODALS ENGINE ---
function initModals() {
  document.querySelectorAll('.close-modal-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-backdrop').forEach((m) => m.classList.add('hidden'));
    });
  });

  document.getElementById('topReviewBtn')?.addEventListener('click', () => {
    openConsultationModal('Free Portfolio Review');
  });

  document.getElementById('navConsultationBtn')?.addEventListener('click', () => {
    openConsultationModal('Free Advisory Session');
  });

  document.getElementById('heroConsultBtn')?.addEventListener('click', () => {
    openConsultationModal('Free Wealth Advisory Consultation');
  });
  document.getElementById('heroPartnerBtn')?.addEventListener('click', () => {
    openPartnerModal();
  });

  document.querySelectorAll('.open-partner-btn').forEach((btn) => {
    btn.addEventListener('click', () => openPartnerModal());
  });

  document.getElementById('floatingConsultBtn')?.addEventListener('click', () => {
    openConsultationModal('Priority Advisory Session');
  });
}

export function openConsultationModal(productName: string = 'Mutual Funds (SIP / Lumpsum)') {
  const modal = document.getElementById('consultationModal');
  const prodInput = document.getElementById('modalProduct') as HTMLInputElement;
  const form = document.getElementById('modalConsultationForm');
  const successBox = document.getElementById('modalConsultSuccess');

  if (modal) {
    if (prodInput) prodInput.value = productName;
    if (form) form.classList.remove('hidden');
    if (successBox) successBox.classList.add('hidden');
    modal.classList.remove('hidden');
  }
}

export function openPartnerModal() {
  const modal = document.getElementById('partnerModal');
  const form = document.getElementById('partnerAppForm');
  const successBox = document.getElementById('partnerSuccess');

  if (modal) {
    if (form) form.classList.remove('hidden');
    if (successBox) successBox.classList.add('hidden');
    modal.classList.remove('hidden');
  }
}

function openProductDetailModal(product: ProductItem) {
  const modal = document.getElementById('productDetailModal');
  if (!modal) return;

  document.getElementById('detailBadge')!.textContent = product.categoryLabel;
  document.getElementById('detailTitle')!.textContent = product.title;
  document.getElementById('detailShortDesc')!.textContent = product.shortDescription;
  document.getElementById('detailFullDesc')!.textContent = product.detailedDescription;

  const subtypesBox = document.getElementById('detailSubtypes')!;
  subtypesBox.innerHTML = product.subtypes
    .map(
      (st: string) =>
        `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">${st}</span>`
    )
    .join('');

  const benefitsBox = document.getElementById('detailBenefits')!;
  benefitsBox.innerHTML = product.keyBenefits
    .map((b: string) => `<li class="flex items-start gap-1.5"><span>✓</span><span>${b}</span></li>`)
    .join('');

  const enquireBtn = document.getElementById('detailEnquireBtn')!;
  enquireBtn.onclick = () => {
    modal.classList.add('hidden');
    openConsultationModal(product.title);
  };

  modal.classList.remove('hidden');
}

// --- FORMS HANDLING ---
function initContactForms() {
  const pageForm = document.getElementById('contactEnquiryForm') as HTMLFormElement;
  const pageSuccess = document.getElementById('contactSuccessBox');
  const refIdSpan = document.getElementById('contactRefId');
  const waLink = document.getElementById('contactWhatsAppLink') as HTMLAnchorElement;

  if (pageForm) {
    pageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('contactName') as HTMLInputElement).value;
      const phone = (document.getElementById('contactPhone') as HTMLInputElement).value;
      const product = (document.getElementById('contactProduct') as HTMLSelectElement).value;
      const refId = 'HSI-' + Math.floor(100000 + Math.random() * 900000);

      pageForm.classList.add('hidden');
      if (pageSuccess && refIdSpan) {
        refIdSpan.textContent = refId;
        if (waLink) {
          waLink.href = `https://wa.me/919820012345?text=Hello%20HSI,%20my%20enquiry%20reference%20is%20${refId}%20for%20${encodeURIComponent(product)}%20(${encodeURIComponent(name)})`;
        }
        pageSuccess.classList.remove('hidden');
      }
    });
  }

  const modalForm = document.getElementById('modalConsultationForm') as HTMLFormElement;
  const modalSuccess = document.getElementById('modalConsultSuccess');
  if (modalForm && modalSuccess) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalForm.classList.add('hidden');
      modalSuccess.classList.remove('hidden');
    });
  }

  const partnerForm = document.getElementById('partnerAppForm') as HTMLFormElement;
  const partnerSuccess = document.getElementById('partnerSuccess');
  if (partnerForm && partnerSuccess) {
    partnerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      partnerForm.classList.add('hidden');
      partnerSuccess.classList.remove('hidden');
    });
  }
}

// --- CODE VIEWER / EXPORT ---
function initCodeViewer() {
  const viewBtn = document.getElementById('viewSourceBtn');
  const modal = document.getElementById('codeViewerModal');
  const copyBtn = document.getElementById('copyAllHtmlBtn');
  const confirmMsg = document.getElementById('copyConfirmMsg');

  if (viewBtn && modal) {
    viewBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  }

  if (copyBtn && confirmMsg) {
    copyBtn.addEventListener('click', () => {
      const htmlContent = document.documentElement.outerHTML;
      navigator.clipboard.writeText(htmlContent).then(() => {
        confirmMsg.classList.remove('hidden');
        setTimeout(() => confirmMsg.classList.add('hidden'), 2500);
      });
    });
  }
}
