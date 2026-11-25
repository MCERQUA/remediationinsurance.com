"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { YEARS_OPTIONS, COPY } from "@/lib/content";
import { QuoteForm, type LegacyQuestion } from "@/components/quote/QuoteForm";
import { ShieldCheck, Phone, Clock, Zap, MapPin } from "lucide-react";

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=${SITE.domain}`;

const REMEDIATION_TYPES = [
  "Mold Remediation",
  "Asbestos Abatement",
  "Lead Abatement",
  "Water / Fire Damage Restoration",
  "Environmental / Hazardous Material Remediation",
  "Demolition / Decontamination",
  "Other",
];

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  { name: "yearsInBusiness", label: "Years in business", type: "select", options: YEARS_OPTIONS },
  { name: "estimated_gross_sales", label: "Estimated gross sales (next 12 months)" },
  { name: "estimated_subcontractor_expenses", label: "Estimated subcontractor expenses (next 12 months)" },
  { name: "estimated_employee_count", label: "Estimated employee count (year total)", type: "number" },
  { name: "estimated_employee_payroll", label: "Estimated employee annual payroll" },
  { name: "estimated_material_costs", label: "Estimated material costs" },
  { name: "percent_subcontractors_insured", label: "Percent of subcontractors with insurance", type: "number" },
  { name: "coverage_for_uninsured_subcontractors", label: "Need coverage for uninsured subcontractors?", type: "select", options: ["Yes", "No"] },
  { name: "prior_year_employee_count", label: "Prior year employee count", type: "number" },
  { name: "prior_year_employee_payroll", label: "Prior year employee payroll" },
  { name: "class_code_1", label: "Class code 1 (+ % of operations)" },
  { name: "class_code_2", label: "Class code 2 (+ % of operations)" },
  { name: "class_code_3", label: "Class code 3 (+ % of operations)" },
  { name: "class_code_4", label: "Class code 4 (+ % of operations)" },
  { name: "class_code_5", label: "Class code 5 (+ % of operations)" },
  { name: "residential_vs_commercial", label: "Residential vs commercial split" },
  { name: "new_vs_existing_construction", label: "New construction vs existing / remodel" },
  { name: "largest_projects", label: "5 largest projects ever (description + dollar amount)", type: "textarea" },
];

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  name: [d.firstName, d.lastName].filter(Boolean).join(" "),
  serviceType: d.tradeType ?? "",
  message: d.notes ?? "",
  street_address: d.address ?? "",
  business_description: d.businessDescription ?? "",
  year_business_started: d.yearBusinessStarted ?? "",
  annual_gross_sales: d.lastGrossSales ?? "",
  prior_year_gross_sales: d.lastGrossSales ?? "",
  prior_year_subcontractor_expenses: d.lastSubcontractingCosts ?? "",
  subcontractors_have_insurance: d.subsCarryInsurance ?? "",
  coverage_types: d.coverageTypes ?? "",
  prior_carrier_name: d.currentCarrier ?? "",
  prior_policy_expiration: d.currentPolicyExpiration ?? "",
});

const trustItems = [
  { icon: ShieldCheck, title: COPY.quote.trustNicheTitle, desc: COPY.quote.trustNicheDesc },
  { icon: Zap, title: "~15-minute quotes", desc: "Real quotes from real markets, fast." },
  { icon: Clock, title: "2-hour claims response", desc: "When a loss hits, you reach a person." },
  { icon: MapPin, title: "All 50 states", desc: "Licensed nationwide — NPN #8608479." },
];

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-clay"><ShieldCheck className="h-3.5 w-3.5" /> Free quote</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {COPY.quote.h1Lead}{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">{COPY.quote.h1Highlight}</span>
              </h1>
              <p className="mt-5 lead">{COPY.quote.lead}</p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <FadeIn key={item.title}>
                    <div className="flex gap-3 p-5 rounded-2xl bg-white border border-adobe shadow-card">
                      <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay/10 text-clay"><item.icon className="h-5 w-5" strokeWidth={2.2} /></span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{item.title}</p>
                        <p className="text-mocha text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-espresso text-cream text-center">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-gold mb-2">Prefer to call?</p>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-cream font-heading font-extrabold text-xl hover:text-gold-light transition-colors"><Phone className="h-5 w-5" />{SITE.phone}</a>
                    <p className="text-xs text-cream/60 mt-1">{SITE.hours}</p>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-2">
                <FadeIn>
                  <div className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9">
                    <QuoteForm
                      formName="quote"
                      tradeName="Remediation"
                      endpoint={WEBHOOK_URL}
                      format="json"
                      netlifyFallback="/__forms.html"
                      extraFields={{ form_name: "quote", source: SITE.domain }}
                      options={{ yn: true, feinRequired: false }}
                      tradeTypeOptions={REMEDIATION_TYPES}
                      defaults={{ coverageTypes: "General Liability" }}
                      legacyQuestions={LEGACY}
                      deriveLegacy={deriveLegacy}
                      classes={{
                        input: "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm",
                        label: "block text-sm font-heading font-semibold text-espresso mb-1.5",
                        legend: "block text-sm font-heading font-semibold text-espresso mb-1.5",
                        heading: "font-heading font-bold text-espresso text-lg border-b border-adobe pb-2",
                        button: "w-full px-8 py-4 bg-clay-gradient text-white font-heading font-bold rounded-full shadow-warm hover:shadow-warm-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed",
                      }}
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
