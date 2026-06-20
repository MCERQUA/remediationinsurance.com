// Centralized site data — used across nav, footer, schema, CTAs
// Remediation Insurance — environmental remediation contractor insurance

export const SITE = {
  name: "Remediation Insurance",
  legalName: "Remediation Insurance (by Contractors Choice Agency)",
  domain: "remediationinsurance.com",
  url: "https://remediationinsurance.com",
  tagline: "Insurance for Environmental Remediation Contractors",
  description:
    "Specialized commercial insurance for environmental remediation contractors — contractor pollution liability, GL, professional liability, workers' comp, commercial auto, umbrella, tools and equipment, and bonds. Soil cleanup, UST removal, hazmat, brownfield. All 50 states. 15-minute quotes.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Remediation",
  brandSub: "Contractor Insurance",
  nicheShort: "remediation contractor",
  nicheShortCap: "Remediation Contractor",
  nichePlural: "remediation contractors",
  nichePluralCap: "Remediation Contractors",
  operator: "remediation operation",
  operatorCap: "Remediation Operation",
  industry: "environmental remediation",
  industryCap: "Environmental Remediation",
  audience: "remediation contractors",
  audienceCap: "Remediation Contractors",
  ownerTitle: "remediation contractor",
  regionPill: "Texas · California · National",
  serviceSuffix: "Remediation Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "The essential coverage for every remediation job",
    description:
      "The defining coverage for remediation contractors. Insures sudden and gradual pollutant release, third-party bodily injury from contamination, cleanup costs, and regulatory defense — on a claims-made form with a retroactive date that protects prior work.",
    icon: "Droplets",
    keywords: ["contractor pollution liability insurance", "CPL insurance remediation", "environmental contractor pollution coverage", "remediation pollution liability"],
  },
  {
    slug: "general-liability",
    title: "General Liability Coverage",
    short: "Premises, operations & completed work",
    description:
      "Third-party bodily injury and property damage coverage for your remediation operations — site access, equipment damage, completed operations, and contractual liability for indemnity agreements in government and private remediation contracts.",
    icon: "ShieldCheck",
    keywords: ["general liability remediation contractor", "remediation contractor GL", "environmental contractor general liability", "remediation operations liability"],
  },
  {
    slug: "professional-liability",
    title: "Professional Liability (E&O)",
    short: "For site assessment and remediation design errors",
    description:
      "Errors and omissions coverage for remediation contractors who design remedial action plans, conduct Phase II assessments, or provide consulting services — covering missed contamination, incorrect RAP design, and failure to achieve regulatory closure.",
    icon: "FileText",
    keywords: ["professional liability remediation contractor", "E&O remediation", "remediation errors omissions insurance", "environmental consultant professional liability"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For hazmat crews and HAZWOPER-trained workers",
    description:
      "Coverage for the injury patterns in remediation work — chemical exposure, confined space entry, heat stress in encapsulating suits, and excavation hazards. Proper class codes for environmental remediation labor (8868).",
    icon: "HardHat",
    keywords: ["workers compensation remediation contractor", "hazmat worker workers comp", "environmental remediation workers compensation", "HAZWOPER workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Specialized Vehicles",
    short: "Vacuum trucks, work trucks & equipment trailers",
    description:
      "Coverage for vacuum trucks, work trucks, equipment trailers, and specialty vehicles used on remediation projects — including DOT placard requirements, HazMat endorsements, and multi-state radius-of-operation coverage.",
    icon: "Truck",
    keywords: ["commercial auto remediation contractor", "vacuum truck insurance", "hazmat truck insurance", "environmental contractor vehicle insurance"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella",
    short: "Excess limits above GL, CPL & auto",
    description:
      "Excess liability coverage that sits above your general liability, contractor pollution liability, and commercial auto — providing the higher combined limits required by Superfund NCP contracts, PRPs, and government environmental remediation agreements.",
    icon: "Umbrella",
    keywords: ["commercial umbrella remediation contractor", "excess liability remediation", "environmental contractor umbrella insurance", "Superfund contractor umbrella"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Coverage",
    short: "Monitoring wells, SVE systems & sampling gear",
    description:
      "Inland marine coverage for the specialized equipment remediation contractors depend on — soil vapor extraction systems, monitoring well equipment, sampling tools, pumps, air monitoring devices, and decontamination equipment.",
    icon: "Wrench",
    keywords: ["tools equipment remediation contractor", "environmental equipment insurance", "SVE equipment coverage", "remediation contractor inland marine"],
  },
  {
    slug: "bonds",
    title: "Contractor License & Surety Bonds",
    short: "Performance, payment & license bonds",
    description:
      "Surety bonds for environmental remediation contractors — performance and payment bonds for CERCLA and state Superfund projects, license bonds, and financial assurance bonds required by regulatory agencies for site closure.",
    icon: "FileCheck",
    keywords: ["contractor bonds remediation", "environmental surety bonds", "CERCLA contractor bond", "remediation contractor license bond"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas-southwest", name: "Texas & Southwest", region: "TX · OK · NM · AZ", blurb: "Superfund sites, UST removals, and industrial brownfields across Texas, Oklahoma, New Mexico, and Arizona. We place contractor pollution liability, GL, workers' comp, and bonds for remediation contractors working these high-volume petroleum and industrial contamination markets." },
  { slug: "southeast", name: "Southeast", region: "FL · GA · AL · SC", blurb: "Coastal contamination, industrial site cleanup, and landfill closures across Florida, Georgia, Alabama, and South Carolina. Programs built for the Southeast's unique regulatory environment and high-humidity remediation exposures." },
  { slug: "midwest", name: "Midwest", region: "IL · OH · MI · IN", blurb: "Rust Belt brownfields, petroleum contamination, and industrial legacy sites across Illinois, Ohio, Michigan, and Indiana. Coverage for contractors tackling the dense brownfield inventory of the Great Lakes region." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · CT", blurb: "Dense brownfield redevelopment, Superfund NCP sites, and urban remediation across New York, Pennsylvania, New Jersey, and Connecticut. Coverage structured for the Northeast's high-liability, high-regulatory-scrutiny environment." },
  { slug: "california", name: "California", region: "CA · Pacific Coast", blurb: "DTSC oversight, strict RCRA compliance, and refinery cleanups across California. Programs for contractors navigating California's rigorous regulatory requirements and complex contaminated-site inventory." },
  { slug: "mountain-states", name: "Mountain States", region: "CO · UT · WY · MT", blurb: "Mining Superfund sites, hardrock mine remediation, and tailings cleanup across Colorado, Utah, Wyoming, and Montana. Coverage for contractors on some of the most technically complex remediation projects in the country." },
  { slug: "mid-atlantic", name: "Mid-Atlantic", region: "VA · MD · DC · DE", blurb: "Federal site remediation, DoD environmental contracts, and Chesapeake watershed projects across Virginia, Maryland, DC, and Delaware. Programs for contractors working government and federal environmental remediation agreements." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "WA · OR · AK", blurb: "Timber and mining contamination, Hanford nuclear cleanup contractors, and salmon habitat restoration across Washington, Oregon, and Alaska. Coverage for contractors on the Pacific Northwest's unique and technically demanding remediation projects." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Remediation-specialist agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 300, suffix: "+", label: "Remediation contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring environmental contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We do UST removals across three states and the petroleum contamination exposure was killing our old GL carrier. These folks placed CPL with a solid retroactive date that covered our prior projects and got us under GL at a rate that made sense. Night and day from the generic contractor markets.", name: "Marcus T.", role: "Owner / UST Removal Contractor", location: "Texas" },
  { quote: "Our remedial action plan design had an error that delayed site closure by eight months. The professional liability E&O covered the regulatory defense costs and the client's additional remediation expenses. Without it we'd have eaten a six-figure loss.", name: "Sandra R.", role: "Principal Environmental Consultant", location: "New Jersey" },
  { quote: "We bid a Superfund NCP project and the PRP required combined GL and CPL limits that our old carrier wouldn't write. CCA placed the program with an umbrella on top in under a week. The project manager said it was the fastest insurance package he'd seen on a Superfund bid.", name: "Derek M.", role: "Operations Manager", location: "Ohio" },
] as const;
