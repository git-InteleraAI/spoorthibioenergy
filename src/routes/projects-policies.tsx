import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2, CheckCircle2, ChevronRight, Clock, FileCheck, Layers, Landmark,
  Percent, ShieldCheck, ArrowRight, Table, Sparkles, MapPin, Award, Zap,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress, CursorSpotlight, Particles } from "@/components/fx";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { useTilt3D } from "@/hooks/use-tilt";
import { useMagnetic } from "@/hooks/use-magnetic";

export const Route = createFileRoute("/projects-policies")({
  head: () => ({
    meta: [
      { title: "Projects & Policies — Sphoorthi Bioenergy Private Limited" },
      {
        name: "description",
        content:
          "Discover Sphoorthi Bioenergy's Cluster Parks model, 8-stage project execution timeline, government approvals matrix, SATAT policies, and financial subsidies.",
      },
    ],
  }),
  component: ProjectsPoliciesPage,
});

const executionSteps = [
  {
    step: "01",
    title: "Project Initiation & DPR",
    desc: "Site selection, feedstock survey, soil testing, Detailed Project Report (DPR) preparation, and OMC alignment.",
    timeline: "Month 1 - 2",
  },
  {
    step: "02",
    title: "Statutory Approvals & CTE",
    desc: "Securing Consent to Establish (CTE) from SPCB, land conversion, PESO preliminary approval, and SATAT LOI.",
    timeline: "Month 2 - 3",
  },
  {
    step: "03",
    title: "Civil Works & Foundations",
    desc: "Ground levelling, piling, foundation casting for digesters, pre-hydrolysis tanks, and compressor pads.",
    timeline: "Month 4 - 6",
  },
  {
    step: "04",
    title: "Structural Construction",
    desc: "Erection of CSTR biodigesters, gas holder membranes, solid-liquid separation sheds, and digestate lagoons.",
    timeline: "Month 6 - 8",
  },
  {
    step: "05",
    title: "Mechanical & Electrical Works",
    desc: "Installation of agitators, feeding systems, membrane gas purification units, 250-bar gas compressors, and transformers.",
    timeline: "Month 8 - 10",
  },
  {
    step: "06",
    title: "Instrumentation & Automation",
    desc: "PLC-SCADA control wiring, gas chromatography calibration, IoT sensor integration, and RBHM AI deployment.",
    timeline: "Month 10 - 11",
  },
  {
    step: "07",
    title: "Commissioning & PGTR",
    desc: "Bacterial inoculation, methanogenic seeding, gas flare testing, and Performance Guarantee Test Run (PGTR).",
    timeline: "Month 11 - 12",
  },
  {
    step: "08",
    title: "Commercial Handover & Offtake",
    desc: "Commercial gas cascade filling, OMC dispensing network injection, FOM distribution, and 24/7 O&M management.",
    timeline: "Month 12 Onwards",
  },
];

const statutoryApprovals = [
  {
    category: "Land & Site",
    approval: "Land Conversion & Non-Agricultural (NA) Clearance",
    authority: "District Collector / Revenue Department",
    purpose: "Permits industrial land use for bioenergy plant and digestate storage.",
  },
  {
    category: "Environment",
    approval: "Consent to Establish (CTE) & Consent to Operate (CTO)",
    authority: "State Pollution Control Board (SPCB / CPCB)",
    purpose: "Mandatory environmental clearance for air, water, and zero liquid discharge compliance.",
  },
  {
    category: "Safety & Gas",
    approval: "PESO High-Pressure Storage & Cascade Approval",
    authority: "Petroleum & Explosives Safety Organization (PESO)",
    purpose: "Statutory clearance for 250-bar compressed gas storage, cascades, and filling systems.",
  },
  {
    category: "Industrial",
    approval: "Factory License & Plan Approval",
    authority: "Department of Factories & Boilers",
    purpose: "Ensures structural safety, machinery layout, and worker occupational health standards.",
  },
  {
    category: "Fire Safety",
    approval: "Fire No Objection Certificate (NOC)",
    authority: "State Fire & Emergency Services",
    purpose: "Mandatory fire protection, gas leak detection, and hydrant system clearance.",
  },
  {
    category: "Gas Offtake",
    approval: "SATAT Allocation & Letter of Intent (LOI)",
    authority: "Oil Marketing Companies (IOCL / BPCL / HPCL / GAIL)",
    purpose: "Guarantees long-term commercial off-take agreement for Bio-CNG at retail prices.",
  },
  {
    category: "Electrical",
    approval: "HT Grid Power Sanction & Substation Clearance",
    authority: "State Electricity Distribution Company (DISCOM)",
    purpose: "Provides high-voltage grid connection for plant auxiliary power load.",
  },
  {
    category: "Local Body",
    approval: "Gram Panchayat / Municipal Construction NOC",
    authority: "Local Gram Panchayat / Municipal Corporation",
    purpose: "Local building plan approval and community utility clearance.",
  },
];

function ProjectsPoliciesPage() {
  useRevealOnScroll();
  useTilt3D(8);
  useMagnetic(0.3);

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden bg-background">
      <ScrollProgress />
      <CursorSpotlight />

      {/* Global Background Elements */}
      <div aria-hidden className="fixed inset-0 -z-10 bg-forest-deep/70" />
      <div aria-hidden className="fixed inset-0 -z-10 bg-gradient-to-b from-forest-deep/40 via-forest-deep/75 to-forest-deep/95" />
      <div aria-hidden className="pointer-events-none fixed -z-10 top-1/4 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-[140px] animate-glow-pulse" />
      <div aria-hidden className="pointer-events-none fixed -z-10 bottom-0 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[160px] animate-glow-pulse" style={{ animationDelay: "1.6s" }} />

      <Header />

      {/* Hero Banner Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <Particles count={20} />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-4 animate-rise">
            <span>Home</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold font-semibold">Projects & Policies</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Projects, Clusters & <span className="text-gradient-emerald">Government Frameworks</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Explore Sphoorthi Bioenergy's Cluster Parks model, structured 8-stage EPC execution timeline, comprehensive regulatory approvals matrix, SATAT mandates, and financial subsidies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Bioenergy Parks & Cluster Model */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-forest-deep via-forest to-forest-deep p-8 sm:p-14 relative overflow-hidden shadow-card">
          <div className="relative z-10 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Decentralized Regional Energy Hubs</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Bioenergy Parks & <span className="text-gradient-emerald">Cluster Model</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base">
              Instead of isolated small plants, Sphoorthi Bioenergy pioneers the Bioenergy Cluster Park Model. Each central bio-refinery collects biomass within a 15–25 km radius, operating integrated CBG production, Green Hydrogen units, organic fertilizer plants, and farmer training facilities under one master blueprint.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Central Bio-Refinery", desc: "Industrial-scale digesters producing 10–30 TPD of 98%+ pure Bio-CNG." },
                { title: "Green Hydrogen Hub", desc: "Dedicated biomethane catalytic cracking unit supplying fuel-cell grade H2." },
                { title: "Organic Fertilizer Plant", desc: "Automated solid FOM pelletization and liquid LFOM micro-encapsulation lines." },
                { title: "Farmer Training Centre", desc: "Agronomic support hub providing energy crop seeds, bio-manure, and soil testing." },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Park Component 0{idx + 1}</div>
                  <div className="text-base font-bold text-foreground mb-2">{item.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Project Execution Timeline */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Turnkey EPC Roadmap</div>
          <h2 className="text-4xl sm:text-6xl font-bold">Project Execution <span className="text-gradient-emerald">Timeline</span></h2>
          <p className="mt-4 text-muted-foreground text-base">From feasibility and site allocation to full commercial commissioning within 12 months.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executionSteps.map((item) => (
            <div key={item.step} className="glass hover-glow gradient-border rounded-3xl p-6 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-primary group-hover:scale-110 transition-transform">{item.step}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/30">
                    <Clock className="h-3 w-3" /> {item.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Permissions & Approvals Matrix */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Statutory & Regulatory Clearances</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Permissions & <span className="text-gradient-emerald">Approvals Matrix</span></h2>
          <p className="mt-4 text-muted-foreground">Clean structured overview of government licenses and statutory clearances required for commercial Bio-CNG projects.</p>
        </div>

        <div className="glass hover-glow gradient-border rounded-3xl p-6 sm:p-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border/80 text-primary uppercase tracking-wider font-bold">
                  <th className="py-4 px-3">Category</th>
                  <th className="py-4 px-3">Approval / License Name</th>
                  <th className="py-4 px-3">Issuing Authority</th>
                  <th className="py-4 px-3">Statutory Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-muted-foreground">
                {statutoryApprovals.map((app, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-3 font-bold text-gold">{app.category}</td>
                    <td className="py-3.5 px-3 font-semibold text-foreground">{app.approval}</td>
                    <td className="py-3.5 px-3 text-primary">{app.authority}</td>
                    <td className="py-3.5 px-3 text-muted-foreground">{app.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Government Policies */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">National Support Policies</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Government <span className="text-gradient-emerald">Policies & Frameworks</span></h2>
          <p className="mt-4 text-muted-foreground">Key national initiatives driving mandatory adoption and price support for Bio-CNG and Organic Manure.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "SATAT Initiative (MoPNG)",
              desc: "Sustainable Alternative Towards Affordable Transportation launched by Ministry of Petroleum & Natural Gas. Guarantees OMC off-take of CBG at standardized commercial prices.",
              badge: "National Mandate",
            },
            {
              title: "Mandatory CBG Blending (CBFO)",
              desc: "Government mandate requiring City Gas Distribution (CGD) entities to blend 1% CBG into CNG/PNG networks, scaling up to 5% by 2028-29.",
              badge: "5% Blending Target",
            },
            {
              title: "GOBARdhan Scheme",
              desc: "Galvanizing Organic Bio-Agro Resources Dhan scheme under Ministry of Jal Shakti offering single-window portal clearance and rural infrastructure support.",
              badge: "Single Window Portal",
            },
            {
              title: "Market Development Assistance (MDA)",
              desc: "PM-PRANAM scheme granting ₹1,500 per tonne financial assistance to promote Fermented Organic Manure (FOM) sale and distribution to farmers.",
              badge: "₹1,500 / Tonne Support",
            },
            {
              title: "Pollution Control Board Guidelines",
              desc: "CPCB and SPCB classification of CBG plants under White/Orange categories, facilitating fast-track Consent to Establish (CTE) & CTO clearances.",
              badge: "Fast-Track Clearance",
            },
            {
              title: "Zero Duty & Export Incentives",
              desc: "Custom duty waivers on imported membrane gas upgradation components and eligibility for international carbon credit revenue streams.",
              badge: "Customs Exemption",
            },
          ].map((pol, i) => (
            <div key={i} className="glass hover-glow rounded-3xl p-7 border border-border flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/30 mb-4">
                  <Landmark className="h-3 w-3" /> {pol.badge}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">{pol.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{pol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Financial Assistance & Subsidies */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-forest-deep via-forest to-forest-deep p-8 sm:p-14 relative overflow-hidden shadow-card">
          <div className="relative z-10 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Capital & Subsidies</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Financial Assistance & <span className="text-gradient-emerald">Subsidies</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              Attractive capital grants, priority sector bank funding, machinery subsidies, and state-level incentives designed to maximize Return on Investment (ROI) for CBG plant developers.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-primary mb-1">Up to ₹10 Crore</div>
                <div className="text-sm font-bold text-foreground mb-2">MNRE Central Financial Assistance (CFA)</div>
                <div className="text-xs text-muted-foreground leading-relaxed">Direct capital subsidy provided by Ministry of New and Renewable Energy per 4.8 TPD CBG project.</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-gold mb-1">50% – 80% Subsidy</div>
                <div className="text-sm font-bold text-foreground mb-2">Biomass Aggregation Machinery</div>
                <div className="text-xs text-muted-foreground leading-relaxed">Financial support under CRM scheme for purchasing balers, rakes, harvesters, and straw choppers.</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-emerald-400 mb-1">Priority Sector</div>
                <div className="text-sm font-bold text-foreground mb-2">RBI Priority Sector Lending (PSL)</div>
                <div className="text-xs text-muted-foreground leading-relaxed">RBI classification allowing commercial banks to extend concessional debt financing for CBG projects.</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-primary mb-1">CGD Grid Injection</div>
                <div className="text-sm font-bold text-foreground mb-2">Pipeline Infrastructure Support</div>
                <div className="text-xs text-muted-foreground leading-relaxed">Capex reimbursement for connecting CBG plant cascades directly to nearby City Gas Distribution pipelines.</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-gold mb-1">100% SGST Waiver</div>
                <div className="text-sm font-bold text-foreground mb-2">State-Level Fiscal Incentives</div>
                <div className="text-xs text-muted-foreground leading-relaxed">State subsidies including SGST reimbursement, electricity duty exemptions, and stamp duty waivers.</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-emerald-400 mb-1">Carbon Offsets</div>
                <div className="text-sm font-bold text-foreground mb-2">Voluntary Carbon Credit Revenue</div>
                <div className="text-xs text-muted-foreground leading-relaxed">Additional revenue streams from verified carbon units (VCUs) traded on global carbon exchanges.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
