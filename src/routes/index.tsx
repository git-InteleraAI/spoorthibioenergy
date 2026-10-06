import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Factory, FlaskConical, Droplets, Leaf, Beaker, Recycle, Grid3x3, Wheat,
  ArrowRight, Menu, X, Mail, MapPin, Phone, Linkedin, Twitter, Instagram,
  Zap, Sprout, Cpu, ShieldCheck, Play, Download, ChevronDown, Facebook, Youtube,
  Check,
} from "lucide-react";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { useTilt3D } from "@/hooks/use-tilt";
import { useMagnetic } from "@/hooks/use-magnetic";
import { ScrollProgress, CursorSpotlight, Particles } from "@/components/fx";

import fujiPlant from "@/assets/fuji-plant.png";
import smartPlant from "@/assets/smart-plant.png";
import farmField from "@/assets/farm-field.png";
import blueprint from "@/assets/blueprint.png";
import heroBgImage from "@/assets/hero-bg.png";
import logoImg from "@/assets/logo.png";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Sitewide/hero backgrounds reuse the Fuji plant photo (only one Fuji shot supplied).
// Swap these three for dedicated images any time — drop new files in src/assets
// and repoint the imports below.
const fujiAsset = { url: fujiPlant };
const smartAsset = { url: smartPlant };
const farmAsset = { url: farmField };
const blueprintAsset = { url: blueprint };
const fujiHeroAsset = { url: heroBgImage };
const fujiHeroNew = { url: heroBgImage };
const fujiHeroBg = { url: heroBgImage };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sphoorthi Bio Energy — Technology-Driven Bio-Energy" },
      { name: "description", content: "Engineering a sustainable future through technology-driven bio-energy, biogas, CBG and integrated waste-to-value solutions." },
      { property: "og:image", content: smartAsset.url },
      { name: "twitter:image", content: smartAsset.url },
    ],
  }),
  component: Home,
});

function Home() {
  useRevealOnScroll();
  useTilt3D(8);
  useMagnetic(0.3);
  return (
    <div id="home" className="relative min-h-screen text-foreground overflow-x-hidden">
      <ScrollProgress />
      <CursorSpotlight />
      {/* Fixed sitewide background image removed */}
      {/* Deep forest tint so image reads through but content stays legible */}
      <div aria-hidden className="fixed inset-0 -z-10 bg-forest-deep/70" />
      <div aria-hidden className="fixed inset-0 -z-10 bg-gradient-to-b from-forest-deep/40 via-forest-deep/75 to-forest-deep/95" />
      {/* Faint animated glow orbs global */}
      <div aria-hidden className="pointer-events-none fixed -z-10 top-1/4 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-[140px] animate-glow-pulse" />
      <div aria-hidden className="pointer-events-none fixed -z-10 bottom-0 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[160px] animate-glow-pulse" style={{ animationDelay: "1.6s" }} />

      <Header />
      <Hero />
      <Marquee />
      <SectionWrap><About /></SectionWrap>
      <Divider label="Core Competencies" />
      <SectionWrap><Services /></SectionWrap>
      <Divider label="Projects" />
      <SectionWrap><Projects /></SectionWrap>
      <Divider label="Technology" />
      <SectionWrap><Technology /></SectionWrap>
      <Divider label="Sustainability" />
      <SectionWrap><Sustainability /></SectionWrap>
      <Footer />
    </div>
  );
}

/* Wraps every section with a subtle blueprint watermark + scroll reveal */
function SectionWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative reveal" data-reveal>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${blueprintAsset.url})` }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {children}
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* hero background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fujiHeroBg.url})` }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-forest-deep/60" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/30 via-forest-deep/60 to-forest-deep/90" />
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-[140px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <Particles count={30} />

      <div className="mx-auto w-full max-w-5xl px-6 items-center">
        {/* LEFT — headline + CTA */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-background/80 backdrop-blur-md px-4 py-2 border border-primary/20 shadow-sm animate-rise">
            <img src={logoImg} alt="SBPL Logo" className="h-5 w-auto object-contain filter drop-shadow-[0_1px_4px_rgba(34,197,94,0.4)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-foreground tracking-wide">Sphoorthi Bioenergy (SBPL) — Renewable Energy Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight">
            <span className="text-foreground split-word mr-3" style={{ animationDelay: "0ms" }}>Transforming</span><br className="hidden md:block"/>
            <span className="text-foreground split-word mr-3" style={{ animationDelay: "70ms" }}>Organic</span><br className="hidden md:block"/>
            <span className="text-foreground split-word mr-3" style={{ animationDelay: "140ms" }}>matter</span>
            <span className="text-foreground split-word mr-3" style={{ animationDelay: "210ms" }}>Into</span>
            <span className="text-primary text-glow split-word mr-3" style={{ animationDelay: "280ms" }}>Clean</span><br className="hidden md:block"/>
            <span className="text-primary text-glow split-word mr-3" style={{ animationDelay: "350ms" }}>Energy</span>
          </h1>

          <div className="mt-8 flex flex-wrap gap-3 animate-rise" style={{ animationDelay: "400ms" }}>
             <span className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground shadow-sm">
               <Check className="h-4 w-4 text-primary" /> Zero landfill waste
             </span>
             <span className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground shadow-sm">
               <Check className="h-4 w-4 text-primary" /> 98%+ Methane purity
             </span>
             <span className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground shadow-sm">
  
             </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-rise" style={{ animationDelay: "500ms" }}>
            <span data-magnetic className="inline-block">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-glow shine"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </span>
            <span data-magnetic className="inline-block">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur-sm border border-border px-8 py-4 text-sm font-bold text-foreground hover:bg-background transition-all shine"
              >
                Book Consultation
              </a>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

function GridBg() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0V60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const items = ["Commercial Biogas", "CBG Upgradation", "Zero Liquid Discharge", "Anaerobic Digestion", "Digestate Management", "Waste-to-Energy", "Compressed Bio-Gas", "Circular Economy"];
  return (
    <div className="border-y border-border/60 bg-forest-deep/50 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-16">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            <Sprout className="h-4 w-4 text-primary" /> {t}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Divider ---------------- */
function Divider({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-center gap-6 py-16">
        <div className="section-divider flex-1" />
        <div className="text-xs uppercase tracking-[0.4em] text-primary flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
          {label}
        </div>
        <div className="section-divider flex-1" />
      </div>
    </div>
  );
}

/* ---------------- About ---------------- */
function About() {
  const features = [
    { icon: ShieldCheck, title: "Domain Expertise", body: "Led by Dr Kv Sarma, a bio-energy pioneer with 20+ years of hands-on experience across the biogas & CBG value chain." },
    { icon: Sprout, title: "Customized Solutions", body: "Every feedstock is different — we hand-tune each plant around your organics, geography and offtake." },
    { icon: Leaf, title: "Sustainability First", body: "We approach every project from separation, process control, biogas maximisation to digestate use." },
    { icon: Cpu, title: "Tech-Driven, Field-Tested", body: "From pre-engineering pilot plants to fully certified installations, we bring technology to bio-chemistry." },
    { icon: MapPin, title: "Strong Local Roots", body: "Headquartered in Hyderabad with deep relationships across Central, Northern, Western and Eastern India." },
    { icon: FlaskConical, title: "Technical Collaborations", body: "We work with respected DST and industry partners on compression, sensing, plant automation & performance." },
  ];
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-12">
      <div className="grid lg:grid-cols-[1.05fr_1.4fr] gap-14 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Welcome to Sphoorthi Bio Energy</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Technology-driven solutions for <span className="text-gradient-emerald">sustainable energy</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Sphoorthi Bio Energy is committed to engineering & customising future-forward processes driven by ZLD, CBG, solid-and-wastewater upcycling. We specialise in converting agricultural residues and organic wastes into reliable, high-value renewable energy and environmentally compliant treatment systems.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We integrate commercial and technological R&amp;D, and delivery services tailored to specific client requirements — into resilient, cost-effective and sustainable futures.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-emerald px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform">
              Explore our R&amp;D partnerships <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 relative rounded-2xl overflow-hidden aspect-video shadow-card group">
            <img src={farmAsset.url} alt="Sustainable field" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="grid place-items-center h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 ml-1" />
              </div>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-tilt
              className="group glass hover-glow tilt-3d gradient-border shine rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 animate-rise"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-gradient-emerald group-hover:text-primary-foreground transition-all">
                <f.icon className="h-5 w-5 icon-anim" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              <div className="section-divider mt-5" />
              <div className="mt-4 text-xs uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services / Core Competencies ---------------- */
function Services() {
  const services = [
    { icon: Droplets, title: "Water & Wastewater", body: "End-to-end water treatment solutions covering STP, ETP, RO, ZLD, MLD and ATFD systems." },
    { icon: Recycle, title: "Digestate Management", body: "Digestate is the nutrient-rich residual material generated from the anaerobic digestion (AD) process." },
    { icon: Beaker, title: "Biogas Lab Services", body: "COMBIOgas H₂S, DMC and more sampling solutions for tailor-made organic waste management." },
    { icon: Grid3x3, title: "Composting Systems", body: "BIODIGEST H, DMC and more compliant systems for solutions for sustainable organic systems." },
    { icon: Wheat, title: "Biomass Briquettes & Pellets", body: "Biomass briquettes and pellets are produced from renewable biomass residues such as agricultural byproducts, forestry, waste and wood-based biomass." },
  ];
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Our Services</div>
        <h2 className="text-4xl md:text-6xl font-bold">Core <span className="text-gradient-emerald">Competencies</span></h2>
        <p className="mt-5 text-muted-foreground">A full-spectrum stack — from feedstock intake to power, fuel and fertilizer.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Featured card 1 */}
        <div data-tilt className="lg:row-span-2 glass hover-glow tilt-3d gradient-border shine rounded-3xl p-8 flex flex-col justify-between hover:border-primary/50 transition-all group animate-rise">
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/40 text-primary group-hover:bg-gradient-emerald group-hover:text-primary-foreground transition-all">
              <Factory className="h-6 w-6 icon-anim-spin" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Commercial Biogas-CBG</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Full-scale facilities for continuous production of Raw CBG, and CBG for long-term revenue generation.
            </p>
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Blueprint featured — spans 2 */}
        <div className="lg:col-span-2 rounded-3xl border border-primary/30 bg-gradient-to-br from-forest-deep to-forest p-8 relative overflow-hidden shadow-glow animate-rise" style={{ animationDelay: "80ms" }}>
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 30%, oklch(0.78 0.19 150 / 0.5), transparent 60%)" }} />
          <div className="relative">
            <div className="text-center text-xs uppercase tracking-[0.35em] text-primary mb-6">Integrated Waste-to-Value Blueprint</div>
            <BlueprintFlow />
          </div>
        </div>

        {services.map((s, i) => (
          <div
            key={s.title}
            data-tilt
            className="glass hover-glow tilt-3d gradient-border shine rounded-3xl p-7 hover:border-primary/50 transition-all duration-500 group animate-rise"
            style={{ animationDelay: `${(i + 2) * 80}ms` }}
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-primary/30 text-primary group-hover:bg-gradient-emerald group-hover:text-primary-foreground transition-all">
              <s.icon className="h-5 w-5 icon-anim" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-xs text-primary uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
              Learn more <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlueprintFlow() {
  return (
    <div className="relative">
      <img src={blueprintAsset.url} alt="Integrated waste-to-value blueprint" className="w-full h-auto rounded-2xl" />
      {/* animated flow dots overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[18%] h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
        <div className="absolute top-1/2 left-[42%] h-2 w-2 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 left-[68%] h-2 w-2 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  const projects = [
    { img: fujiAsset.url, tag: "Waste-to-Energy", title: "Bio-Energy", loc: "Shizuoka, Japan", stat: "12 MW" },
    { img: smartAsset.url, tag: "Smart Utility", title: "Wastewater treatment", loc: "Hyderabad, India", stat: "40 MLD" },
    { img: farmAsset.url, tag: "Agri Circular", title: "Biomass cultivation and harvesting", loc: "Punjab Belt", stat: "68K T/yr" },
  ];
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Featured Projects</div>
          <h2 className="text-4xl md:text-6xl font-bold max-w-2xl">Plants that <span className="text-gradient-emerald">power</span> a cleaner tomorrow.</h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:gap-4 transition-all">
          View all case studies <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article key={p.title} data-tilt className="group tilt-3d hover-glow shine relative rounded-3xl overflow-hidden border border-border animate-rise" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
            <div className="absolute inset-0 p-7 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/40 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-primary">{p.tag}</span>
                <span className="text-xs text-gold font-semibold">{p.stat}</span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.loc}</div>
                <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  Case study <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Technology ---------------- */
function Technology() {
  return (
    <section id="technology" className="relative mx-auto max-w-7xl px-6">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-card group animate-rise">
          <img src={smartAsset.url} alt="Smart plant technology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
            {["IoT Sensing", "Predictive AI", "24/7 Telemetry", "Autopilot"].map((t) => (
              <span key={t} className="rounded-full bg-forest-deep/70 backdrop-blur border border-primary/40 px-3 py-1 text-xs text-primary">{t}</span>
            ))}
          </div>
        </div>
        <div className="animate-rise" style={{ animationDelay: "150ms" }}>
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Technology Stack</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Every plant is a <span className="text-gradient-emerald">connected</span>, self-tuning system.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Sphoorthi Bio Energy plants are instrumented from intake to offtake. Real-time gas composition, digester chemistry, energy dispatch and effluent quality stream into a unified console — so operators intervene before problems occur.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { t: "Digital twin per plant", d: "Simulate feedstock changes before you commit tonnage." },
              { t: "Remote optimization loop", d: "Our engineers tune your plant weekly from HQ." },
              { t: "Compliance-ready logs", d: "Audit trails for MoEFCC, CPCB and international standards." },
            ].map((it, i) => (
              <li key={it.t} className="flex gap-4 group animate-rise" style={{ animationDelay: `${i * 100 + 200}ms` }}>
                <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary group-hover:bg-gradient-emerald group-hover:text-primary-foreground transition-all">
                  <ShieldCheck className="h-4 w-4 icon-anim-pulse" />
                </div>
                <div>
                  <div className="font-semibold">{it.t}</div>
                  <div className="text-sm text-muted-foreground">{it.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sustainability CTA ---------------- */
function Sustainability() {
  return (
    <section id="sustainability" className="mx-auto max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-forest to-forest-deep p-10 md:p-16">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 20%, oklch(0.78 0.19 150 / 0.4), transparent 55%)" }} />
        <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-accent/20 blur-[100px]" />

        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to transform waste <span className="text-gradient-gold">into energy</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Building a pan-India network of Biogas & CBG plants for a cleaner, more sustainable future.
          </p>
        </div>

        <div className="relative mt-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="text-gold">Goal: 200,000</span>
          </div>
          <div className="h-2.5 rounded-full bg-forest-deep border border-border overflow-hidden">
            <div className="h-full bg-gradient-gold rounded-full relative" style={{ width: "71%" }}>
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)", backgroundSize: "200% 100%", animation: "shimmer 2.5s linear infinite" }} />
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-emerald px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform">
            Contact our advisory team <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
            <Download className="h-4 w-4" /> Download annual report
          </a>
        </div>
      </div>
    </section>
  );
}


