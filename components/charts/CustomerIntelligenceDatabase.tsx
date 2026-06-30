'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // S.No.
  sNo: number
  // Customer Information
  customerName: string
  businessOverview: string
  industryVertical: string
  totalAnnualRevenue: string
  primaryProcurementFocusAreas: string
  ownershipType: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Proposition 1 - Procurement & Purchase Metrics
  annualProcurementBudget: string
  typicalShellTypesProcured: string
  avgProcurementLeadTime: string
  replacementReorderCycle: string
  keyPurchaseDrivers: string
  // Proposition 2 - Advanced Procurement Metrics
  primaryMotivation: string
  keyPainPoints: string
  upcomingProcurementPrograms: string
  budgetOwnership: string
  procurementModel: string
  // Proposition 3 - Digital & Technology Adoption
  preferredEngagementType: string
  contractPreference: string
  preferredArtilleryShellType: string
  techPerformanceRequirements: string
  integrationRequirements: string
  // Proposition 3 - Future Demand & Expansion
  performanceExpectations: string
  newDefensePrograms: string
  futureAmmunitionDemandOutlook: string
  // Proposition 3 - CMI Insights
  customerBenchmarkingSummary: string
  additionalComments: string
}

const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    customerName: 'Rheinmetall AG',
    businessOverview: 'Leading German defense and automotive group; one of Europe\'s largest manufacturers of 155mm NATO-standard artillery ammunition, propellant charges, and fuze systems. Supplies Bundeswehr and NATO allies.',
    industryVertical: 'Defense Manufacturing & OEM Supply',
    totalAnnualRevenue: '7,200',
    primaryProcurementFocusAreas: '155mm NATO HE shells, Propellant charges, Precision fuzes, HESH rounds',
    ownershipType: 'Public (Listed - Frankfurt SE)',
    keyContactPerson: 'Armin Papperger',
    designation: 'CEO & Head of Ammunition Division',
    emailAddress: 'ammunition.sales@rheinmetall.com',
    phoneNumber: '+49 211 473 01',
    linkedInProfile: 'linkedin.com/company/rheinmetall',
    websiteUrl: 'www.rheinmetall.com',
    annualProcurementBudget: '420',
    typicalShellTypesProcured: '155mm HE, 155mm HESH, 120mm Mortar HE, Illumination rounds',
    avgProcurementLeadTime: '26',
    replacementReorderCycle: '2',
    keyPurchaseDrivers: 'NATO interoperability, precision accuracy, lot traceability, MIL-SPEC compliance',
    primaryMotivation: 'Scaling production capacity to meet NATO Article 3 stockpile commitments; expanding export contracts to Eastern European allies post-2022',
    keyPainPoints: 'Raw material supply chain bottlenecks (propellant compounds, brass casings); long certification cycles for new fuze variants; export licensing delays',
    upcomingProcurementPrograms: 'Bundeswehr 2030 stockpile replenishment (EUR 2.5B); NATO Very High Readiness Joint Task Force (VJTF) ammunition pre-positioning',
    budgetOwnership: 'Chief Procurement Officer (CPO) + Defense Sales Division',
    procurementModel: 'Long-term framework contracts (3–5 years) with NATO member governments + direct OEM procurement',
    preferredEngagementType: 'Government-to-Government (G2G) framework + Direct OEM supply agreements',
    contractPreference: 'Multi-year framework contracts (5-year rolling) with volume-based pricing tiers',
    preferredArtilleryShellType: '155mm NATO HE M107 / DM121; 155mm Extended Range Full Bore (ERFB)',
    techPerformanceRequirements: 'STANAG 4110/4193 compliance, CEP < 100m at 40km, MRUV fuze compatibility, temperature-stable propellant (-46°C to +63°C)',
    integrationRequirements: 'NATO STANAG 4830 interoperability; PzH 2000 howitzer chamber compatibility; NATO JTDLS data-link fuze integration',
    performanceExpectations: 'Minimum 95% lot-acceptance rate; < 0.1% dud rate; shelf life > 15 years under NATO AASTP-1 conditions',
    newDefensePrograms: 'Rheinmetall Unterlüß plant expansion (capacity +200K rounds/year by 2026); new propellant plant in Lithuania (NATO eastern flank)',
    futureAmmunitionDemandOutlook: 'Strong upward trajectory through 2030; EU defence spending mandates and war in Ukraine driving +35% CAGR for 155mm rounds',
    customerBenchmarkingSummary: 'Tier-1 strategic account; largest 155mm NATO shell volume buyer in Europe; critical for any supplier seeking NATO market entry. Multi-year contracts preferred.',
    additionalComments: 'CMI team notes: Rheinmetall is simultaneously a buyer and manufacturer — procurement role is for sub-component and raw material sourcing. Engagement should target both ammunition division and procurement leadership.'
  },
  {
    sNo: 2,
    customerName: 'BAE Systems plc',
    businessOverview: 'UK\'s largest defense contractor. Manufactures and procures 155mm and 105mm artillery ammunition through its Global Combat Systems and Munitions divisions. Key supplier to British Army and NATO.',
    industryVertical: 'Defense OEM & Systems Integration',
    totalAnnualRevenue: '25,300',
    primaryProcurementFocusAreas: '155mm L15A2 HE shells, 120mm Mortar bombs, 105mm Howitzer rounds, Smoke and Illumination shells',
    ownershipType: 'Public (Listed - London SE)',
    keyContactPerson: 'Charles Woodburn',
    designation: 'CEO / VP Munitions & Ordnance',
    emailAddress: 'munitions.procurement@baesystems.com',
    phoneNumber: '+44 1252 373232',
    linkedInProfile: 'linkedin.com/company/bae-systems',
    websiteUrl: 'www.baesystems.com',
    annualProcurementBudget: '560',
    typicalShellTypesProcured: '155mm HE L15A2, 105mm HE L31, 120mm Mortar HE L41, 81mm Mortar Illumination L45',
    avgProcurementLeadTime: '24',
    replacementReorderCycle: '3',
    keyPurchaseDrivers: 'British Army MoD contracts, NATO standardization, export sales to Middle East and Asia-Pacific clients',
    primaryMotivation: 'Supporting UK MoD\'s "Integrated Review" ammunition stockpile targets; winning export contracts to Saudi Arabia, Australia, and India under government-to-government deals',
    keyPainPoints: 'Post-Brexit export licensing complexities; skilled labour shortage at Glascoed and Washington Tyne & Wear facilities; rising copper and RDX costs',
    upcomingProcurementPrograms: 'UK MoD Project Hansom (155mm replenishment, £1.2B); Australian Army Land 17 Phase 1C howitzer ammunition supply',
    budgetOwnership: 'Munitions Division President + UK MoD DE&S (Defence Equipment & Support)',
    procurementModel: 'Prime contractor / Government prime with sub-tier supplier network; ITAR-compliant procurement',
    preferredEngagementType: 'Prime contractor model with government-backed off-take agreements; MoD-approved supplier list entry',
    contractPreference: 'Indefinite Delivery Indefinite Quantity (IDIQ) with minimum order quantities; FMS (Foreign Military Sales) aligned',
    preferredArtilleryShellType: '155mm L15A2 HE; 105mm L31 HESH; 120mm L41A1 Mortar HE',
    techPerformanceRequirements: 'DEF STAN 08-97 compliance; NATO STANAG 4110; insensitive munitions (IM) compliance per AOP-39',
    integrationRequirements: 'AS90 SPH compatibility (155mm); L118 Light Gun (105mm); L16 81mm Mortar system; NATO COBLU fire control',
    performanceExpectations: 'Range > 24.7km for L15A2; < 0.05% premature detonation rate; NATO interoperability certification',
    newDefensePrograms: 'BAE Systems Glascoed facility modernization (£300M investment, 2024–2027); new production line for 155mm Excalibur-compatible shells',
    futureAmmunitionDemandOutlook: 'Demand rising +28% by 2028 driven by UK MoD stockpile rebuild and export pipeline; 120mm mortar demand growing in Asia-Pacific',
    customerBenchmarkingSummary: 'Tier-1 priority account; long-standing MoD relationship provides stable revenue. Key decision influencer for UK allied procurement. High lifetime value.',
    additionalComments: 'CMI notes: BAE Systems has strong interest in "smart" fuze upgrades and Extended Range Munitions (ERM) for 155mm. Any supplier offering IM-compliant propellant will gain competitive advantage.'
  },
  {
    sNo: 3,
    customerName: 'Nammo AS',
    businessOverview: 'Norwegian-Finnish joint venture; specialized defense ammunition manufacturer. Produces a full range of artillery, mortar, and small-caliber ammunition. Supplies Nordic armed forces and NATO partners.',
    industryVertical: 'Defense Ammunition Manufacturing',
    totalAnnualRevenue: '680',
    primaryProcurementFocusAreas: '155mm ERFB shells, 120mm Mortar HE, 81mm Mortar smoke/illumination, 40mm Grenade rounds',
    ownershipType: 'Private (Joint Venture - Norway MoD + Patria Oy)',
    keyContactPerson: 'Morten Brandtzaeg',
    designation: 'President & CEO',
    emailAddress: 'defence.sales@nammo.com',
    phoneNumber: '+47 61 14 60 00',
    linkedInProfile: 'linkedin.com/company/nammo',
    websiteUrl: 'www.nammo.com',
    annualProcurementBudget: '95',
    typicalShellTypesProcured: '155mm HE ERFB-BB, 120mm HE Mortar, 81mm Smoke L37, 40mm HEDP Grenade',
    avgProcurementLeadTime: '20',
    replacementReorderCycle: '4',
    keyPurchaseDrivers: 'NATO standardization, Nordic defence cooperation (NORDEFCO), environmental compliance (lead-free primers)',
    primaryMotivation: 'Meeting Norwegian Armed Forces 5-year procurement plan; expanding market share in Nordic NATO members (Sweden, Finland joining NATO drives demand)',
    keyPainPoints: 'Limited domestic propellant manufacturing capacity; dependency on German and French RDX suppliers; export control restrictions for certain fuze technologies',
    upcomingProcurementPrograms: 'Norwegian Army Project 6460 (155mm replenishment 2024–2029); Swedish Armed Forces 155mm FH77 BW L52 ammunition contract',
    budgetOwnership: 'CFO + Norwegian Defence Materiel Agency (NDMA)',
    procurementModel: 'National champion procurement model; direct government contracts + NATO cooperative logistics',
    preferredEngagementType: 'Direct government contract + Nordic defense cooperation agreements (NORDEFCO framework)',
    contractPreference: 'Long-term national supply contracts (7–10 years); performance-based logistics (PBL)',
    preferredArtilleryShellType: '155mm ERFB-BB (Extended Range Full Bore - Base Bleed); 120mm HE M1120',
    techPerformanceRequirements: 'STANAG 4110 and 4193; lead-free/eco-friendly primer; range > 30km with base bleed; ballistic consistency lot-to-lot < 0.5% SD',
    integrationRequirements: 'M109A6 Paladin and K9 Thunder SPH compatibility; NATO AASM electronic fuze integration; Nordic Artillery Fire Control System (AFCS)',
    performanceExpectations: 'Dud rate < 0.05%; temperature performance -46°C to +63°C; insensitive munition (IM) compliance',
    newDefensePrograms: 'Nammo Raufoss plant expansion for 155mm (NOK 1.2B investment); new mortar assembly line for Nordic export market',
    futureAmmunitionDemandOutlook: 'Significant growth forecast through 2030; Finland and Sweden NATO accession drives 40–50% increase in Nordic ammunition demand',
    customerBenchmarkingSummary: 'Mid-tier strategic account; strong government ties and stable long-term contracts. Key entry point into Nordic and Scandinavian defense procurement ecosystem.',
    additionalComments: 'CMI notes: Nammo is highly focused on environmental compliance in ammunition. Suppliers offering lead-free, RoHS-adjacent components will have strong advantage. Green ammunition trend is real in Nordic markets.'
  },
  {
    sNo: 4,
    customerName: 'Hanwha Defense (Hanwha Aerospace)',
    businessOverview: 'South Korea\'s leading defense conglomerate; manufactures K9 Thunder self-propelled howitzers and procures large volumes of 155mm artillery shells. Major exporter of artillery systems to Australia, India, Finland, Norway, Egypt.',
    industryVertical: 'Defense OEM - Artillery Systems & Ammunition',
    totalAnnualRevenue: '4,100',
    primaryProcurementFocusAreas: '155mm K307 HE shells, 155mm ERFB-BB, 105mm Howitzer rounds, Shell fuze systems',
    ownershipType: 'Public (Listed - Korea Exchange, subsidiary of Hanwha Group)',
    keyContactPerson: 'Son Jae-il',
    designation: 'President & CEO / VP Defense Sales',
    emailAddress: 'defense.procurement@hanwha.com',
    phoneNumber: '+82 2 729 5000',
    linkedInProfile: 'linkedin.com/company/hanwha-defense',
    websiteUrl: 'www.hanwhaaerospace.com',
    annualProcurementBudget: '290',
    typicalShellTypesProcured: '155mm K307 HE, 155mm ERFB-BB, 105mm KM1 HE, 81mm KM43 Mortar HE',
    avgProcurementLeadTime: '22',
    replacementReorderCycle: '3',
    keyPurchaseDrivers: 'ROK Army modernization, export contract support (bundled shell supply with K9 howitzer sales), offset obligations',
    primaryMotivation: 'Bundling artillery shell supply with K9 howitzer export contracts (total package deals to Australia, Poland, Romania); domestic ROK Army 155mm stockpile replenishment under DAPA contracts',
    keyPainPoints: 'Managing shell supply for multiple export customers with different NATO/national specifications; pressures to localize production in buyer countries (offset requirements)',
    upcomingProcurementPrograms: 'Australian Army Land 8116 Phase 2 (K9 + ammunition); Polish Krab/K9 ammunition offset program; ROK Army 5-year stockpile plan (DAPA-2025)',
    budgetOwnership: 'Defense Sales Division VP + ROK DAPA (Defense Acquisition Program Administration)',
    procurementModel: 'Integrated OEM-supply model: artillery system + ammunition bundled; government-to-government + commercial export',
    preferredEngagementType: 'Integrated system + ammunition supply (bundled contracts); government FMS and direct commercial sales',
    contractPreference: 'Turnkey defense supply agreements with in-country offset components; 5–10 year lifecycle support contracts',
    preferredArtilleryShellType: '155mm K307 HE (ROK standard); 155mm NATO ERFB-BB for export customers',
    techPerformanceRequirements: 'STANAG 4110 for export products; KDS (Korean Defense Standard) for domestic supply; electronic time fuze compatibility with K9 FCS',
    integrationRequirements: 'K9 Thunder 155mm/52-cal barrel compatibility; NATO ASCA fire control data-link; Australian Army Elbit LYNX FCS integration',
    performanceExpectations: 'Range > 40km with RAP (Rocket Assisted Projectile); < 0.05% dud rate; temperature stability across Korean peninsula climate range',
    newDefensePrograms: 'K9A2 next-generation SPH program requiring new smart fuze-compatible 155mm shell; Hanwha\'s new Australian manufacturing facility (Geelong) for local shell assembly',
    futureAmmunitionDemandOutlook: 'Very strong; K9 export success (10+ countries) drives long-tail ammunition demand. Projected +45% volume growth by 2030 from export order book.',
    customerBenchmarkingSummary: 'High-priority account with compounding demand from K9 export success. Any supplier able to co-produce or offset in buyer countries gains significant advantage with Hanwha.',
    additionalComments: 'CMI notes: Hanwha is actively seeking ammunition supply partners who can support offset/local manufacturing requirements in Australia and Poland. Joint venture proposals will be well-received.'
  },
  {
    sNo: 5,
    customerName: 'Indian Ordnance Factories Board (OFB / Advanced Weapons & Equipment India Ltd.)',
    businessOverview: 'Government of India\'s defense manufacturing authority; largest producer of artillery shells, mortar bombs, and small arms ammunition in India. Operates 41 ordnance factories including Ammunition Factories at Kirkee, Nalanda, and Khamaria.',
    industryVertical: 'Government Defense Manufacturing (Public Sector)',
    totalAnnualRevenue: '2,800',
    primaryProcurementFocusAreas: '155mm HE shells, 105mm IFG HE, 120mm Mortar HE, 81mm Mortar, 60mm Mortar bombs, Propellant charges',
    ownershipType: 'Government / State-Owned (Ministry of Defence, India)',
    keyContactPerson: 'Director General (Ordnance Factories)',
    designation: 'Director General / Additional Secretary, MoD',
    emailAddress: 'procurement@ofb.gov.in',
    phoneNumber: '+91 33 2249 3000',
    linkedInProfile: 'linkedin.com/company/ordnance-factories-board-india',
    websiteUrl: 'www.ofbindia.gov.in',
    annualProcurementBudget: '380',
    typicalShellTypesProcured: '155mm HE M107 (Bofors), 105mm IFG HE, 120mm HE Mortar M1120, 81mm Mortar HE, 60mm Mortar HE',
    avgProcurementLeadTime: '36',
    replacementReorderCycle: '5',
    keyPurchaseDrivers: 'Atmanirbhar Bharat (self-reliance mandate), Indian Army strategic stockpile targets, MoD capital budget allocation',
    primaryMotivation: 'Achieving ammunition self-sufficiency under Atmanirbhar Bharat Defence policy; reducing dependency on Russian and Israeli ammunition imports; modernizing 155mm shell production under FICV program',
    keyPainPoints: 'Outdated manufacturing equipment at legacy factories; quality control variability across factories; slow procurement cycle (Government Financial Rules compliance adds 18–24 months to any contract); shortage of propellant precursor chemicals',
    upcomingProcurementPrograms: 'Indian Army 155mm stockpile emergency procurement (2024–2026, INR 8,000 Cr); Make-in-India 120mm Mortar HE DRDO project; Ammunition Factory Khamaria modernization',
    budgetOwnership: 'Ministry of Defence (Capital Budget) + OFB DG / Advanced Weapons & Equipment India Ltd. Board',
    procurementModel: 'Government procurement (DPP 2020); competitive tendering (GeM portal); strategic partnership with private Indian defense firms; limited FMS/G2G',
    preferredEngagementType: 'Make-in-India strategic partnerships; ToT (Transfer of Technology) agreements; Joint Ventures with Indian private defense companies',
    contractPreference: 'Long-term government supply orders (3–7 years); DPP 2020-compliant with Indigenization Quotient (IQ) requirements',
    preferredArtilleryShellType: '155mm HE (Bofors-compatible and ATHOS-compatible); 105mm IFG HE; 120mm HE Mortar; 81mm Smoke and Illumination',
    techPerformanceRequirements: 'JSS (Joint Services Specification) compliance; DRDO-certified propellant; fuze qualification per ARDE Pune standards; shelf life > 20 years',
    integrationRequirements: 'Bofors FH-77B compatibility (Indian Army primary); ATHOS 2052 (new induction); Indigenous Gun System (IGS) 155mm/52-cal; Pinaka MRLS future integration',
    performanceExpectations: 'Minimum 95% proof acceptance rate; max 0.1% dud rate; desert, high-altitude (Siachen), and jungle environment performance certification',
    newDefensePrograms: 'FICV (Future Infantry Combat Vehicle) ammunition program; Project Shakti 155mm smart shell development; DRDO Helina-shell guided munition',
    futureAmmunitionDemandOutlook: 'Massive growth expected through 2035; India\'s defense capex rising to USD 200B by 2030. 155mm demand alone projected at 1M+ rounds/year by 2027.',
    customerBenchmarkingSummary: 'Largest volume opportunity in Asia; complex procurement requiring ToT and Make-in-India compliance. Long lead times but enormous scale. Joint venture or partnership model recommended.',
    additionalComments: 'CMI notes: India is seeking technology transfer partners who can help modernize Ammunition Factory Khamaria for 155mm ERFB production. Companies willing to localize 40–60% of content will win large long-term contracts.'
  },
  {
    sNo: 6,
    customerName: 'Elbit Systems Ltd.',
    businessOverview: 'Israel\'s largest defense electronics and systems company. Procures 155mm and mortar ammunition to support integrated artillery systems (ATMOS 2000, SIGMA), UAV-guided munitions, and exports to 100+ countries.',
    industryVertical: 'Defense Electronics, Systems Integration & Ammunition',
    totalAnnualRevenue: '5,500',
    primaryProcurementFocusAreas: '155mm HE shells (ATMOS-compatible), 120mm Mortar HE, Precision-guided 155mm rounds, Fuze systems',
    ownershipType: 'Public (Listed - NASDAQ, Tel Aviv SE)',
    keyContactPerson: 'Bezhalel (Butzi) Machlis',
    designation: 'CEO / EVP Land Systems Division',
    emailAddress: 'land.systems@elbit.co.il',
    phoneNumber: '+972 4 831 6666',
    linkedInProfile: 'linkedin.com/company/elbit-systems',
    websiteUrl: 'www.elbitsystems.com',
    annualProcurementBudget: '210',
    typicalShellTypesProcured: '155mm HE M107/M795, 120mm HE Mortar, Precision-guided 155mm (CIMS-compatible), Illumination rounds',
    avgProcurementLeadTime: '18',
    replacementReorderCycle: '2',
    keyPurchaseDrivers: 'IDF operational requirements, export contract bundling (artillery systems + shells), precision guidance upgrade programs',
    primaryMotivation: 'Bundling precision-guided munitions (PGM) upgrades with conventional shell procurement for export customers; supporting IDF stockpile under MOD Israel contracts; expanding ATMOS 2000 export ammunition supply',
    keyPainPoints: 'ITAR restrictions on US-origin components in shells sold to certain markets; geopolitical sensitivity of shell supply chains; precision fuze technology export controls (US, EU dual-use regulations)',
    upcomingProcurementPrograms: 'IDF Operation readiness procurement 2024–2026; ATMOS 2000 customer ammunition bundling (Thailand, Cameroon, Philippines, Ecuador); 120mm mortar precision upgrade (IMM - Intelligent Mortar Munition)',
    budgetOwnership: 'Land Systems Division EVP + Israeli MOD Armament Development Authority (RAFAEL/DDR&D)',
    procurementModel: 'Integrated system + ammunition supply; government-to-government FMS; direct commercial export under Israeli MOD license',
    preferredEngagementType: 'Bundled system+ammunition export deals; co-development partnerships for precision-guided shells',
    contractPreference: 'Long-term supply agreements with export flexibility; dual-source supply arrangements for risk management',
    preferredArtilleryShellType: '155mm M795 HE (M231 fuze); precision-guided 155mm BONUS/SMArt-compatible; 120mm HE Mortar (precision variant)',
    techPerformanceRequirements: 'Precision CEP < 10m for guided variants; M231 fuze compatibility; STANAG 4110; low-collateral-damage (LCD) warhead capability',
    integrationRequirements: 'ATMOS 2000 155mm/52-cal gun compatibility; IDF BMS (Battle Management System) fire control; NATO ASCA interoperability for export customers',
    performanceExpectations: 'Guided rounds: CEP < 10m; conventional HE: range > 30km; urban warfare IM compliance; dual-mode (impact/proximity) fuze',
    newDefensePrograms: 'Elbit Precision Artillery Shell (EPAS) development program; IMM (Intelligent Mortar Munition) for 120mm; export program for ATMOS to Southeast Asia',
    futureAmmunitionDemandOutlook: 'Strong, precision-guided segment growing fastest (+60% CAGR for PGM shells). Conventional HE demand also elevated post-2023 conflict cycle.',
    customerBenchmarkingSummary: 'High-value, technology-forward account. Opportunity in both conventional shell supply and precision-guidance partnerships. ITAR-free supply chains are highly valued by Elbit.',
    additionalComments: 'CMI notes: Elbit is particularly interested in ITAR-free 155mm shell options from European or Indian suppliers. Any supplier offering guidance kit integration (fuze+actuator) will command premium pricing.'
  },
  {
    sNo: 7,
    customerName: 'General Dynamics Ordnance and Tactical Systems (GD-OTS)',
    businessOverview: 'US defense contractor and largest producer of 155mm artillery shells for the US Army. Operates facilities in Scranton (PA), Wilkes-Barre (PA), and Camden (AR). Primary supplier under US Army Organic Industrial Base programs.',
    industryVertical: 'Defense Ordnance Manufacturing & Government Contracting',
    totalAnnualRevenue: '3,800',
    primaryProcurementFocusAreas: '155mm M795 HE, 155mm M107 HE, 120mm Mortar M934 HE, 81mm Mortar M821 HE, 60mm Mortar M720 HE',
    ownershipType: 'Public (Listed - NYSE, subsidiary of General Dynamics Corp.)',
    keyContactPerson: 'Steve Elgin',
    designation: 'President, GD-OTS / VP US Army Programs',
    emailAddress: 'ots.procurement@gd.com',
    phoneNumber: '+1 703 876 3000',
    linkedInProfile: 'linkedin.com/company/general-dynamics-ordnance',
    websiteUrl: 'www.gd-ots.com',
    annualProcurementBudget: '750',
    typicalShellTypesProcured: '155mm M795 HE, 155mm M107 HE (legacy), 120mm M934A1 HE Mortar, 81mm M821A1 HE Mortar, 40mm M430A1 HEDP Grenade',
    avgProcurementLeadTime: '30',
    replacementReorderCycle: '3',
    keyPurchaseDrivers: 'US Army TACOM contracts, FY DoD budget authorization, Ukraine Security Assistance drawdown replenishment',
    primaryMotivation: 'Fulfilling US Army drawdown replenishment orders (post-Ukraine Security Assistance); responding to US DoD multi-year procurement (MYP) contracts for 155mm; expanding capacity under Defense Production Act Title III',
    keyPainPoints: 'Workforce capacity constraints at Scranton Army Ammunition Plant (SCAAP); raw material availability (RDX, Composition B explosive fill); long DoD acquisition cycle; competition from new US entrants seeking OIB contracts',
    upcomingProcurementPrograms: 'US Army FY2025 155mm shell procurement (M795, >500K rounds); USMC 155mm Lightweight 155mm Howitzer ammunition program; US Army Mortar Modernization Initiative (MMI)',
    budgetOwnership: 'US Army ASA(ALT) (Acquisition, Logistics & Technology) + DoD TACOM Life Cycle Management Command',
    procurementModel: 'US Government prime contractor (CPFF and FFP contracts); DoD OTA (Other Transaction Authority) for rapid prototyping; Foreign Military Sales (FMS) for allied nation supply',
    preferredEngagementType: 'US DoD prime contract with OIB (Organic Industrial Base) designation; FMS agent for allied supply',
    contractPreference: 'Multi-Year Procurement (MYP) contracts (5-year); Indefinite Delivery Indefinite Quantity (IDIQ) with firm fixed-price options',
    preferredArtilleryShellType: '155mm M795 HE (primary); 155mm XM1113 RAP (Rocket Assisted Projectile) for extended range; 120mm M934A1',
    techPerformanceRequirements: 'MIL-STD-1512 compliance; Insensitive Munitions (IM) per MIL-STD-2105D; EPAF (Electronic Point-Detonating) fuze M739A1 compatibility; RDX-based Comp B fill',
    integrationRequirements: 'M109A7 Paladin Howitzer 155mm/39-cal compatibility; M777A2 lightweight howitzer; M252 81mm Mortar; AFATDS fire direction system integration',
    performanceExpectations: 'M795: max range 22.4km; < 0.01% dud rate (DoD standard); IM compliance (insensitive to fast cook-off, bullet impact, shaped charge jet); 15+ year storage life',
    newDefensePrograms: 'Scranton facility 155mm capacity expansion ($550M DoD investment, 2024–2027); XM1128 precision kit for M795 shell; US Army Long Range Precision Fires (LRPF) shell development',
    futureAmmunitionDemandOutlook: 'Very strong through 2032; Ukraine replenishment, NDAA FY2024 multi-year authority, and Pacific deterrence posture all driving sustained high-volume 155mm demand from US DoD.',
    customerBenchmarkingSummary: 'Largest single-country volume buyer globally for 155mm shells. Critical account for any supplier in the US defense market. ITAR, DFARS, and Buy American Act compliance mandatory.',
    additionalComments: 'CMI notes: GD-OTS is under significant pressure to increase production speed. Suppliers who can offer rapid delivery of raw materials (RDX, steel forgings, copper rotating bands) under Defense Production Act will find open doors.'
  },
  {
    sNo: 8,
    customerName: 'KNDS (Nexter Systems) - France',
    businessOverview: 'Franco-German defense group (KNDS = KMW + Nexter). Nexter Systems is France\'s primary artillery manufacturer (CAESAR SPH, AUF1) and major procurement entity for 155mm ammunition for French Army (Armée de Terre) and export customers.',
    industryVertical: 'Defense OEM - Artillery Systems & Ammunition',
    totalAnnualRevenue: '2,200',
    primaryProcurementFocusAreas: '155mm OFM 155 F1 HE shells, 155mm ERFB-BB, 120mm Mortar HE, 81mm Mortar, Precision-guided 155mm (Bonus)',
    ownershipType: 'State-Owned / JV (French Government + KMW Germany)',
    keyContactPerson: 'Philippe Burtin',
    designation: 'CEO, KNDS / President Nexter Systems',
    emailAddress: 'munitions.export@nexter-group.fr',
    phoneNumber: '+33 1 41 37 30 00',
    linkedInProfile: 'linkedin.com/company/nexter-systems',
    websiteUrl: 'www.knds.com',
    annualProcurementBudget: '180',
    typicalShellTypesProcured: '155mm OFM 155 F1 HE, 155mm BONUS (precision), 120mm HE Mortar, 81mm Mortar HE/Smoke/Illumination',
    avgProcurementLeadTime: '22',
    replacementReorderCycle: '4',
    keyPurchaseDrivers: 'French Army Loi de Programmation Militaire (LPM), CAESAR export ammunition bundling, NATO Article 3 compliance',
    primaryMotivation: 'Supplying French Army under LPM 2024–2030 (EUR 413B defense budget); bundling 155mm shell supply with CAESAR SPH export deals to Denmark, Czech Republic, Morocco, Saudi Arabia, Ukraine',
    keyPainPoints: 'Limited propellant production capacity in France (Eurenco dependency); export licensing for shells supplied to conflict zones; competition from German and US suppliers in CAESAR export markets',
    upcomingProcurementPrograms: 'French Army Munitions Critiques program (EUR 1B, 155mm stockpile 2024–2028); Ukraine CAESAR ammunition supply (EU EPF funding); Saudi Arabia CAESAR MOU ammunition supply',
    budgetOwnership: 'DGA (Direction Générale de l\'Armement) + Nexter Munitions Division / KNDS Export Division',
    procurementModel: 'DGA prime contract (France domestic); G2G export via DGA-FI (France International); commercial export with DGA authorization',
    preferredEngagementType: 'DGA-authorized supply partnerships; CAESAR export bundled ammunition supply; EU European Defence Fund collaborative procurement',
    contractPreference: 'Long-term DGA framework contracts (Programme de Commandes Pluriannuelles - PCP); export FMS-equivalent via DGA-FI',
    preferredArtilleryShellType: '155mm OFM 155 F1 HE (French standard); 155mm BONUS anti-armor; 155mm SMAP smoke; 120mm HE Porte-Corps',
    techPerformanceRequirements: 'NF-GAM (French MIL-STD) compliance; STANAG 4110 for export; BONUS dual-mode sensor (infrared + millimetric radar); IM compliance per AOP-39',
    integrationRequirements: 'CAESAR 155mm/52-cal gun (wheeled SPH) barrel compatibility; AUF1 TA tracked SPH; TRF1 towed gun; ATLAS fire control system integration; NATO ASCA for interoperability',
    performanceExpectations: 'Range > 42km for ERFB-BB; BONUS CEP < 5m (anti-armor); OFM155 F1 max range 24km; illumination shell minimum 60-second burn at 600m burst height',
    newDefensePrograms: 'CAESAR Mk II next-gen 155mm shell program (digital fuze ready); Nexter Munitions precision 155mm shell for export; KNDS collaborative development with Rheinmetall for next-gen European 155mm standard',
    futureAmmunitionDemandOutlook: 'Strong growth through 2030; CAESAR global success (6 new export customers since 2022) drives sustained ammunition tail demand. LPM 2024-2030 ensures domestic baseline.',
    customerBenchmarkingSummary: 'Strategic European account; key to penetrating French-speaking defense markets. CAESAR export success creates compounding ammunition demand. Partnership with Nexter Munitions offers pan-European visibility.',
    additionalComments: 'CMI notes: Nexter/KNDS is actively pursuing a common European 155mm shell standard with Germany. Suppliers who engage with both Rheinmetall and Nexter on harmonized specs will have first-mover advantage in the EU defense single market.'
  }
]

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({
  title = 'Customer Intelligence Database - Global Artillery Shells Market',
  height = 800
}: CustomerIntelligenceDatabaseProps) {
  const [openProposition, setOpenProposition] = useState<number | null>(1)

  const toggleProposition = (num: number) => {
    setOpenProposition(openProposition === num ? null : num)
  }

  const cellClass = 'border border-gray-300 px-2 py-1.5 text-xs text-gray-800 align-top whitespace-normal min-w-[120px]'
  const headerCellClass = 'border border-gray-300 px-2 py-2 text-xs font-bold text-gray-900 text-center whitespace-nowrap'

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" style={{ maxHeight: height, display: 'flex', flexDirection: 'column' }}>
      {/* Title */}
      <div className="bg-gray-800 text-white px-4 py-3 flex-shrink-0">
        <h2 className="text-sm font-bold">{title}</h2>
        <p className="text-xs text-gray-300 mt-0.5">8 Profiled Customers · 3 Proposition Tiers · Artillery Shells Global Market</p>
      </div>

      {/* Scrollable content */}
      <div className="overflow-y-auto flex-1">

        {/* ─── PROPOSITION 1 ─── */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleProposition(1)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">STANDARD</span>
              <span className="text-sm font-semibold text-gray-800">Proposition 1 — Standard Customer Intelligence (13 Columns)</span>
            </div>
            {openProposition === 1 ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
          </button>

          {openProposition === 1 && (
            <div className="overflow-x-auto">
              <table className="border-collapse text-xs w-full" style={{ minWidth: '1600px' }}>
                <thead>
                  <tr>
                    <th className={headerCellClass} style={{ backgroundColor: '#D0D0D0' }} rowSpan={2}>S.No.</th>
                    {/* Customer Information */}
                    <th className={headerCellClass} style={{ backgroundColor: '#E8C4A0' }} colSpan={6}>Customer Information</th>
                    {/* Contact Details */}
                    <th className={headerCellClass} style={{ backgroundColor: '#87CEEB' }} colSpan={6}>Contact Details</th>
                  </tr>
                  <tr>
                    {/* Customer Info sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Customer Name / Company Name</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Business Overview</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Industry Vertical</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Total Annual Revenue (US$ Million)</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Primary Artillery Shell Procurement Focus Areas</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Ownership Type</th>
                    {/* Contact sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Key Contact Person</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Designation / Role</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Email Address</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Phone / WhatsApp Number</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>LinkedIn Profile</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Website URL</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleCustomerData.map((row, idx) => (
                    <tr key={row.sNo} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`${cellClass} text-center font-medium`}>{row.sNo}</td>
                      <td className={`${cellClass} font-semibold text-blue-800 min-w-[160px]`}>{row.customerName}</td>
                      <td className={`${cellClass} min-w-[280px]`}>{row.businessOverview}</td>
                      <td className={cellClass}>{row.industryVertical}</td>
                      <td className={`${cellClass} text-center`}>{row.totalAnnualRevenue}</td>
                      <td className={`${cellClass} min-w-[200px]`}>{row.primaryProcurementFocusAreas}</td>
                      <td className={cellClass}>{row.ownershipType}</td>
                      <td className={`${cellClass} font-medium`}>{row.keyContactPerson}</td>
                      <td className={cellClass}>{row.designation}</td>
                      <td className={`${cellClass} text-blue-600`}>{row.emailAddress}</td>
                      <td className={cellClass}>{row.phoneNumber}</td>
                      <td className={`${cellClass} text-blue-600`}>{row.linkedInProfile}</td>
                      <td className={`${cellClass} text-blue-600`}>{row.websiteUrl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ─── PROPOSITION 2 ─── */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleProposition(2)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">ADVANCE</span>
              <span className="text-sm font-semibold text-gray-800">Proposition 2 — Advance Customer Intelligence (17 Columns)</span>
            </div>
            {openProposition === 2 ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
          </button>

          {openProposition === 2 && (
            <div className="overflow-x-auto">
              <table className="border-collapse text-xs w-full" style={{ minWidth: '2600px' }}>
                <thead>
                  <tr>
                    <th className={headerCellClass} style={{ backgroundColor: '#D0D0D0' }} rowSpan={2}>S.No.</th>
                    {/* Customer Information */}
                    <th className={headerCellClass} style={{ backgroundColor: '#E8C4A0' }} colSpan={6}>Customer Information</th>
                    {/* Contact Details */}
                    <th className={headerCellClass} style={{ backgroundColor: '#87CEEB' }} colSpan={6}>Contact Details</th>
                    {/* Procurement Metrics - Advance */}
                    <th className={headerCellClass} style={{ backgroundColor: '#90EE90' }} colSpan={5}>Procurement &amp; Purchase Metrics</th>
                  </tr>
                  <tr>
                    {/* Customer Info sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Customer Name / Company Name</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Business Overview</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Industry Vertical</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Total Annual Revenue (US$ Million)</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Primary Artillery Shell Procurement Focus Areas</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Ownership Type</th>
                    {/* Contact sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Key Contact Person</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Designation / Role</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Email Address</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Phone / WhatsApp Number</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>LinkedIn Profile</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Website URL</th>
                    {/* Advanced procurement sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Primary Motivation for Artillery Shell Procurement</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Key Pain Points</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Upcoming Procurement Programs &amp; Modernization Initiatives</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Budget Ownership</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Procurement Model</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleCustomerData.map((row, idx) => (
                    <tr key={row.sNo} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`${cellClass} text-center font-medium`}>{row.sNo}</td>
                      <td className={`${cellClass} font-semibold text-blue-800 min-w-[160px]`}>{row.customerName}</td>
                      <td className={`${cellClass} min-w-[280px]`}>{row.businessOverview}</td>
                      <td className={cellClass}>{row.industryVertical}</td>
                      <td className={`${cellClass} text-center`}>{row.totalAnnualRevenue}</td>
                      <td className={`${cellClass} min-w-[200px]`}>{row.primaryProcurementFocusAreas}</td>
                      <td className={cellClass}>{row.ownershipType}</td>
                      <td className={`${cellClass} font-medium`}>{row.keyContactPerson}</td>
                      <td className={cellClass}>{row.designation}</td>
                      <td className={`${cellClass} text-blue-600`}>{row.emailAddress}</td>
                      <td className={cellClass}>{row.phoneNumber}</td>
                      <td className={`${cellClass} text-blue-600`}>{row.linkedInProfile}</td>
                      <td className={`${cellClass} text-blue-600`}>{row.websiteUrl}</td>
                      <td className={`${cellClass} min-w-[240px]`}>{row.primaryMotivation}</td>
                      <td className={`${cellClass} min-w-[220px]`}>{row.keyPainPoints}</td>
                      <td className={`${cellClass} min-w-[240px]`}>{row.upcomingProcurementPrograms}</td>
                      <td className={`${cellClass} min-w-[180px]`}>{row.budgetOwnership}</td>
                      <td className={`${cellClass} min-w-[220px]`}>{row.procurementModel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ─── PROPOSITION 3 ─── */}
        <div>
          <button
            onClick={() => toggleProposition(3)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-white text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#7C3AED' }}>PREMIUM</span>
              <span className="text-sm font-semibold text-gray-800">Proposition 3 — Premium Customer Intelligence (32 Columns)</span>
            </div>
            {openProposition === 3 ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
          </button>

          {openProposition === 3 && (
            <div className="overflow-x-auto">
              <table className="border-collapse text-xs w-full" style={{ minWidth: '4200px' }}>
                <thead>
                  <tr>
                    <th className={headerCellClass} style={{ backgroundColor: '#D0D0D0' }} rowSpan={2}>S.No.</th>
                    {/* Customer Information */}
                    <th className={headerCellClass} style={{ backgroundColor: '#E8C4A0' }} colSpan={6}>Customer Information</th>
                    {/* Contact Details */}
                    <th className={headerCellClass} style={{ backgroundColor: '#87CEEB' }} colSpan={6}>Contact Details</th>
                    {/* Procurement - Standard */}
                    <th className={headerCellClass} style={{ backgroundColor: '#90EE90' }} colSpan={5}>Procurement &amp; Purchase Metrics (Standard)</th>
                    {/* Procurement - Advanced */}
                    <th className={headerCellClass} style={{ backgroundColor: '#90EE90' }} colSpan={5}>Procurement &amp; Purchase Metrics (Advanced)</th>
                    {/* Digital & Technology */}
                    <th className={headerCellClass} style={{ backgroundColor: '#DDA0DD' }} colSpan={5}>Digital &amp; Technology Adoption Metrics</th>
                    {/* Future Demand */}
                    <th className={headerCellClass} style={{ backgroundColor: '#F4A460' }} colSpan={3}>Future Demand &amp; Expansion Metrics</th>
                    {/* CMI Insights */}
                    <th className={headerCellClass} style={{ backgroundColor: '#87CEEB' }} colSpan={2}>CMI Insights</th>
                  </tr>
                  <tr>
                    {/* Customer Info sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Customer Name / Company Name</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Business Overview</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Industry Vertical</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Total Annual Revenue (US$ Million)</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Primary Artillery Shell Procurement Focus Areas</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5DCB0' }}>Ownership Type</th>
                    {/* Contact sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Key Contact Person</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Designation / Role</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Email Address</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Phone / WhatsApp Number</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>LinkedIn Profile</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Website URL</th>
                    {/* Standard procurement sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Annual Artillery Shell Procurement Budget (US$ Million)</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Typical Shell Types Procured</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Average Procurement Lead Time (Weeks)</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Replacement / Reorder Cycle (Years)</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Key Purchase Drivers</th>
                    {/* Advanced procurement sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Primary Motivation for Procurement</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Key Pain Points</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Upcoming Procurement Programs &amp; Modernization Initiatives</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Budget Ownership</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#A8DCA8' }}>Procurement Model</th>
                    {/* Digital & Technology sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#D8A8D8' }}>Preferred Engagement Type</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#D8A8D8' }}>Contract Preference</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#D8A8D8' }}>Preferred Artillery Shell Type</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#D8A8D8' }}>Technology &amp; Performance Requirements</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#D8A8D8' }}>Integration Requirements (Weapon Platforms / NATO Standards, etc.)</th>
                    {/* Future Demand sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#F5B880' }}>Performance Expectations</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5B880' }}>New Defense Programs / Capacity Expansion Planned</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#F5B880' }}>Future Ammunition Demand Outlook</th>
                    {/* CMI Insights sub-headers */}
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Customer Benchmarking Summary (Potential Customers)</th>
                    <th className={headerCellClass} style={{ backgroundColor: '#B0E0E6' }}>Additional Comments / Notes By CMI Team</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleCustomerData.map((row, idx) => (
                    <tr key={row.sNo} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`${cellClass} text-center font-medium`}>{row.sNo}</td>
                      <td className={`${cellClass} font-semibold text-blue-800 min-w-[160px]`}>{row.customerName}</td>
                      <td className={`${cellClass} min-w-[280px]`}>{row.businessOverview}</td>
                      <td className={cellClass}>{row.industryVertical}</td>
                      <td className={`${cellClass} text-center`}>{row.totalAnnualRevenue}</td>
                      <td className={`${cellClass} min-w-[200px]`}>{row.primaryProcurementFocusAreas}</td>
                      <td className={cellClass}>{row.ownershipType}</td>
                      <td className={`${cellClass} font-medium`}>{row.keyContactPerson}</td>
                      <td className={cellClass}>{row.designation}</td>
                      <td className={`${cellClass} text-blue-600`}>{row.emailAddress}</td>
                      <td className={cellClass}>{row.phoneNumber}</td>
                      <td className={`${cellClass} text-blue-600`}>{row.linkedInProfile}</td>
                      <td className={`${cellClass} text-blue-600`}>{row.websiteUrl}</td>
                      <td className={`${cellClass} text-center`}>{row.annualProcurementBudget}</td>
                      <td className={`${cellClass} min-w-[200px]`}>{row.typicalShellTypesProcured}</td>
                      <td className={`${cellClass} text-center`}>{row.avgProcurementLeadTime}</td>
                      <td className={`${cellClass} text-center`}>{row.replacementReorderCycle}</td>
                      <td className={`${cellClass} min-w-[220px]`}>{row.keyPurchaseDrivers}</td>
                      <td className={`${cellClass} min-w-[240px]`}>{row.primaryMotivation}</td>
                      <td className={`${cellClass} min-w-[220px]`}>{row.keyPainPoints}</td>
                      <td className={`${cellClass} min-w-[240px]`}>{row.upcomingProcurementPrograms}</td>
                      <td className={`${cellClass} min-w-[180px]`}>{row.budgetOwnership}</td>
                      <td className={`${cellClass} min-w-[220px]`}>{row.procurementModel}</td>
                      <td className={`${cellClass} min-w-[200px]`}>{row.preferredEngagementType}</td>
                      <td className={`${cellClass} min-w-[200px]`}>{row.contractPreference}</td>
                      <td className={`${cellClass} min-w-[200px]`}>{row.preferredArtilleryShellType}</td>
                      <td className={`${cellClass} min-w-[240px]`}>{row.techPerformanceRequirements}</td>
                      <td className={`${cellClass} min-w-[240px]`}>{row.integrationRequirements}</td>
                      <td className={`${cellClass} min-w-[220px]`}>{row.performanceExpectations}</td>
                      <td className={`${cellClass} min-w-[240px]`}>{row.newDefensePrograms}</td>
                      <td className={`${cellClass} min-w-[220px]`}>{row.futureAmmunitionDemandOutlook}</td>
                      <td className={`${cellClass} min-w-[240px]`}>{row.customerBenchmarkingSummary}</td>
                      <td className={`${cellClass} min-w-[240px]`}>{row.additionalComments}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* Footer */}
      <div className="bg-gray-100 px-4 py-2 flex-shrink-0 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Demo data · 8 profiled customers · Artillery Shells Global Market · Shell types: 155mm NATO HE, 105mm Howitzer, 120mm Mortar HE, 81mm Mortar, 60mm Mortar, 40mm Grenade (HE, HEAT, HESH, Illumination, Smoke, APDS)
        </p>
      </div>
    </div>
  )
}
