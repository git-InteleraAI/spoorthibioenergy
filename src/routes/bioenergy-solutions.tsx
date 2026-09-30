import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Factory, Zap, Droplets, Leaf, Cpu, ShieldCheck, Flame, Layers, Award,
  CheckCircle2, ArrowRight, Table, BarChart3, Recycle, Wheat, Sparkles, ChevronRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress, CursorSpotlight, Particles } from "@/components/fx";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { useTilt3D } from "@/hooks/use-tilt";
import { useMagnetic } from "@/hooks/use-magnetic";
import smartPlant from "@/assets/smart-plant.png";
import fujiPlant from "@/assets/fuji-plant.png";
import farmField from "@/assets/farm-field.png";

export const Route = createFileRoute("/bioenergy-solutions")({
  head: () => ({
    meta: [
      { title: "Bioenergy Solutions — Sphoorthi Bioenergy Private Limited" },
      {
        name: "description",
        content:
          "Explore Sphoorthi Bioenergy's comprehensive solutions: Bio-CNG, Green Hydrogen, 4-Stage Digester Tech, Smart Automation, AI-enabled RBHM monitoring, Feedstock Management, and Napier Grass cultivation.",
      },
    ],
  }),
  component: BioenergySolutionsPage,
});

function BioenergySolutionsPage() {
  useRevealOnScroll();
  useTilt3D(8);
  useMagnetic(0.3);

  const [activeTab, setActiveTab] = useState<string>("all");

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
        <Particles count={25} />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-4 animate-rise">
            <span>Home</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold font-semibold">Bioenergy Solutions</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Technology-Driven <span className="text-gradient-emerald">Bioenergy Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              An integrated technological blueprint combining Bio-CNG, Green Hydrogen, advanced 4-stage digester engineering, AI process automation, Napier grass cultivation, and circular feedstock management.
            </p>
          </div>

          {/* Quick Jump Links */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { id: "bio-cng", label: "Bio-CNG & BIS Specs" },
              { id: "renewable-solutions", label: "Renewable Energy Stack" },
              { id: "technology-engineering", label: "4-Stage Digester Tech" },
              { id: "smart-automation", label: "AI & Smart Automation" },
              { id: "research-innovation", label: "R&D & Green Hydrogen" },
              { id: "feedstock-biomass", label: "Feedstock Management" },
              { id: "napier-grass", label: "Napier Grass Cultivation" },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full bg-forest/60 border border-primary/30 px-4 py-2 text-xs font-bold text-foreground hover:bg-gradient-emerald hover:text-primary-foreground transition-all shadow-sm"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — BIO-CNG */}
      <section id="bio-cng" className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Core Renewable Gaseous Fuel</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Bio-CNG (Compressed Bio-Gas)</h2>
          <p className="mt-4 text-muted-foreground">Purified methane generated from organic waste, matching natural gas purity for vehicle fuel and industrial energy.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">What is Bio-CNG & Why is it Critical?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bio-CNG (Compressed Bio-Gas / CBG) is the purified form of biogas produced through anaerobic digestion of organic matter. By removing carbon dioxide, hydrogen sulfide, and moisture, the gas is upgraded to achieve over 90–98% methane concentration.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              It serves as an exact drop-in replacement for fossil Compressed Natural Gas (CNG) and commercial LNG, powering heavy-duty transport, city gas distribution (CGD) networks, and industrial boilers with zero net carbon footprint.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-forest/40 border border-primary/20">
                <div className="text-xs font-bold text-gold uppercase mb-1">High Calorific Value</div>
                <div className="text-lg font-bold text-foreground">~52 MJ / kg</div>
                <div className="text-xs text-muted-foreground">Matches or exceeds commercial CNG standards.</div>
              </div>
              <div className="p-4 rounded-xl bg-forest/40 border border-primary/20">
                <div className="text-xs font-bold text-gold uppercase mb-1">Carbon Reduction</div>
                <div className="text-lg font-bold text-foreground">100% Net Zero</div>
                <div className="text-xs text-muted-foreground">Eligible for carbon credits & ESG offset.</div>
              </div>
            </div>
          </div>

          <div className="glass hover-glow gradient-border rounded-3xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Table className="h-5 w-5 text-primary" /> CBG Quality Specifications (IS 16087:2016 Standard)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border/80 text-primary">
                    <th className="py-3 px-2 font-bold">Parameter</th>
                    <th className="py-3 px-2 font-bold">BIS Standard (IS 16087)</th>
                    <th className="py-3 px-2 font-bold">Sphoorthi Guaranteed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-muted-foreground">
                  <tr>
                    <td className="py-3 px-2 font-semibold text-foreground">Methane (CH₄)</td>
                    <td className="py-3 px-2">Min 90% v/v</td>
                    <td className="py-3 px-2 font-bold text-primary">95% – 98% v/v</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold text-foreground">Carbon Dioxide (CO₂)</td>
                    <td className="py-3 px-2">Max 4% v/v</td>
                    <td className="py-3 px-2 font-bold text-primary">≤ 2.5% v/v</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold text-foreground">Hydrogen Sulfide (H₂S)</td>
                    <td className="py-3 px-2">Max 20 mg/m³</td>
                    <td className="py-3 px-2 font-bold text-primary">≤ 5 mg/m³</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold text-foreground">Oxygen (O₂)</td>
                    <td className="py-3 px-2">Max 0.5% v/v</td>
                    <td className="py-3 px-2 font-bold text-primary">≤ 0.1% v/v</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold text-foreground">Moisture Content</td>
                    <td className="py-3 px-2">No free moisture</td>
                    <td className="py-3 px-2 font-bold text-primary">Dew point -40°C</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold text-foreground">Operating Pressure</td>
                    <td className="py-3 px-2">200 – 250 Bar</td>
                    <td className="py-3 px-2 font-bold text-primary">250 Bar Cascade</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Benefits & Drivers Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl border border-border">
            <Zap className="h-6 w-6 text-primary mb-3" />
            <h4 className="text-lg font-bold text-foreground mb-2">Key Project Drivers</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Mandatory blending targets by Government of India under SATAT, high crude oil import replacement, and rising industrial energy costs.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-border">
            <Leaf className="h-6 w-6 text-emerald-400 mb-3" />
            <h4 className="text-lg font-bold text-foreground mb-2">Environmental Benefits</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Eliminates open stubble burning, prevents organic waste landfill methane leakage, and reduces particulate matter (PM2.5) by over 95%.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-border">
            <Award className="h-6 w-6 text-gold mb-3" />
            <h4 className="text-lg font-bold text-foreground mb-2">ESG & Carbon Credits</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Generates high-value carbon offset credits under international voluntary and compliance markets for corporate ESG alignment.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — RENEWABLE ENERGY SOLUTIONS */}
      <section id="renewable-solutions" className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">End-to-End Stack</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Renewable Energy Solutions</h2>
          <p className="mt-4 text-muted-foreground">Four core clean technology portfolios engineered for commercial scalability.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Compressed Bio-Gas (CBG)", desc: "High-purity Bio-CNG for automobile cascades, industrial heating, and gas grid injection.", icon: Flame, color: "text-primary" },
            { title: "Green Hydrogen", desc: "Next-generation hydrogen extraction through steam methane reforming (SMR) and biological cracking of biomethane.", icon: Zap, color: "text-gold" },
            { title: "Enriched Organic Manure", desc: "High-nutrient Fermented Organic Manure (FOM) and Liquid FOM for soil fertility recovery.", icon: Leaf, color: "text-emerald-400" },
            { title: "Biomass Management", desc: "Decentralized collection, baling, pelletization, and supply chain logistics for raw organic feedstock.", icon: Wheat, color: "text-amber-400" },
          ].map((sol, i) => {
            const Icon = sol.icon;
            return (
              <div key={i} className="glass hover-glow gradient-border rounded-3xl p-7 flex flex-col justify-between">
                <div>
                  <div className={`grid h-12 w-12 place-items-center rounded-xl bg-white/10 ${sol.color} mb-5`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{sol.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{sol.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-semibold text-primary uppercase tracking-widest flex items-center gap-1">
                  Learn Solution <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3 — TECHNOLOGY & PLANT ENGINEERING */}
      <section id="technology-engineering" className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-forest-deep via-forest to-forest-deep p-8 sm:p-14 relative overflow-hidden shadow-card">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Engineering Excellence</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Technology & <span className="text-gradient-emerald">Plant Engineering</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-3xl leading-relaxed">
              Sphoorthi Bioenergy deploys proprietary biological, mechanical, and structural engineering designs to maximize biogas yields and guarantee uninterrupted 24/7 commercial plant uptime.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Advanced Biomass Pretreatment", desc: "Thermal, mechanical, and enzymatic disintegration breaking down lignocellulosic cell walls for rapid digestion." },
                { title: "Biological Pre-Hydrolysis", desc: "Dedicated acidification stage separating volatile fatty acid formation from methanogenesis for process stability." },
                { title: "Continuous Stirred Tank Reactor (CSTR)", desc: "Custom-designed high-volume digesters featuring specialized hydraulic and mechanical agitation loops." },
                { title: "Four-Stage Digester Technology", desc: "Sequential digestion phase ensuring complete feedstock breakdown, maximum methane release, and minimal residual carbon." },
                { title: "Membrane & VPSA Upgradation", desc: "Multi-stage polymeric membrane separation achieving 98%+ methane purity with minimal methane slip (<0.5%)." },
                { title: "Solid-Liquid Separation & Digestate", desc: "High-performance screw press separators and decanter centrifuges separating high-grade solid FOM and liquid LFOM." },
              ].map((tech, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Engineering Tech 0{i + 1}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{tech.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SMART AUTOMATION */}
      <section id="smart-automation" className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Industry 4.0 Bioenergy</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Smart Automation & <span className="text-gradient-emerald">AI Monitoring</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Every Sphoorthi CBG plant is built on a fully automated PLC-SCADA platform integrated with IoT sensors, online gas chromatography, and real-time predictive analytics.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { t: "PLC & SCADA Control Architecture", d: "Centralized automated control of feeding rates, agitator timing, digester temperature, and gas pressure." },
                { t: "Online Gas Quality Analyzers", d: "Continuous real-time measurement of CH4, CO2, H2S, and O2 concentrations with auto-shutoff safety interlocks." },
                { t: "AI-Enabled RBHM (Real-time Biodigester Health Monitoring)", d: "Proprietary digester health intelligence detecting volatile fatty acid (VFA) imbalances before souring occurs." },
                { t: "Remote Cloud Telemetry", d: "24/7 central monitoring sending instant alerts and operational optimization data to plant engineers." },
              ].map((item, idx) => (
                <div key={idx} className="glass p-4 rounded-xl border border-border flex items-start gap-4">
                  <Cpu className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-foreground text-base">{item.t}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-card">
            <img src={smartPlant} alt="Smart Automation System" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-1">
                <Sparkles className="h-4 w-4" /> Predictive Analytics Active
              </div>
              <div className="text-lg font-bold text-foreground">Zero Downtime Digester Operations via AI Control</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — RESEARCH & INNOVATION */}
      <section id="research-innovation" className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Pioneering Frontiers</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Research & <span className="text-gradient-emerald">Innovation</span></h2>
          <p className="mt-4 text-muted-foreground">Translating advanced biochemical R&D into next-generation commercial bioenergy technologies.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Feedstock Characterization & BMP", desc: "Comprehensive lab profiling determining biochemical methane potential (BMP) across diverse organic residues." },
            { title: "Microbial Consortium Development", desc: "Isolating high-efficiency thermophilic and mesophilic bacterial strains for rapid cellulolytic degradation." },
            { title: "Green Hydrogen from CBG", desc: "Catalytic reforming and biological cracking of biomethane for high-purity fuel-cell grade green hydrogen." },
            { title: "Bio-Fertilizer Encapsulation", desc: "Enriching organic digestate with N-fixing and P-solubilizing microflora via micro-encapsulation." },
            { title: "Carbon Capture & Utilization (CCU)", desc: "Capturing high-purity bio-CO2 for food-grade liquid carbon dioxide and dry ice commercial applications." },
            { title: "3rd & 4th Generation Biofuels", desc: "Next-generation algal biomass integration and synthetic bio-gasoline research." },
          ].map((res, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-border hover:border-primary/50 transition-all">
              <div className="text-xs font-bold text-gold uppercase tracking-widest mb-2">Innovation 0{i + 1}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{res.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{res.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — FEEDSTOCK & BIOMASS MANAGEMENT */}
      <section id="feedstock-biomass" className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-forest-deep via-forest to-forest-deep p-8 sm:p-14 relative overflow-hidden shadow-card">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Supply Chain Security</div>
            <h2 className="text-3xl sm:text-5xl font-bold">Feedstock & <span className="text-gradient-emerald">Biomass Management</span></h2>
            <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
              Securing year-round, uninterrupted feedstock supply through robust aggregation logistics and direct partnerships with Farmers and Farmer Producer Organizations (FPOs).
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Paddy Straw & Stubble", desc: "Baled agricultural crop residues collected directly from farms during harvest seasons." },
                { title: "Sugarcane Pressmud", desc: "Nutrient-rich filter cake byproduct from sugar mills with high biogas yield." },
                { title: "Cattle Dung & Dairy Waste", desc: "Reliable co-substrate providing essential methanogenic bacterial inoculum." },
                { title: "Industrial Organic Waste", desc: "Food processing effluent, starch waste, and distillery slop utilized for energy recovery." },
              ].map((fs, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Feedstock 0{idx + 1}</div>
                  <div className="text-base font-bold text-foreground mb-2">{fs.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{fs.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — NAPIER GRASS */}
      <section id="napier-grass" className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">High-Yield Energy Crop</div>
          <h2 className="text-4xl sm:text-6xl font-bold">Why <span className="text-gradient-emerald">Napier Grass</span>?</h2>
          <p className="mt-4 text-muted-foreground text-base">Super Napier (Pakchong-1) is the ultimate high-yield perennial biomass feedstock for commercial Bio-CNG plants.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="glass hover-glow gradient-border rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Agronomic & Energy Advantages</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Massive Yield Per Acre:</strong> Produces 150 – 200 tonnes of green biomass per acre annually across 4 to 6 cuts.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Perennial Crop:</strong> Single planting lasts 7 to 10 years, drastically lowering annual cultivation and tilling costs.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">High Methane Potential:</strong> Yields 60 – 80 NM³ of high-purity Bio-CNG per tonne of green grass.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Guaranteed Farmer Income:</strong> Long-term buyback agreements provide stable, weather-resilient revenues for farming communities.
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Napier Grass Bio-CNG Economics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border/60 text-xs">
                <span className="text-muted-foreground">Biomass Yield / Acre / Year</span>
                <span className="font-bold text-foreground">150 – 200 Tonnes</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border/60 text-xs">
                <span className="text-muted-foreground">Harvest Frequency</span>
                <span className="font-bold text-foreground">4 – 6 Cuts / Year</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border/60 text-xs">
                <span className="text-muted-foreground">CBG Yield / Tonne Grass</span>
                <span className="font-bold text-primary">60 – 80 NM³</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border/60 text-xs">
                <span className="text-muted-foreground">Planting Life Cycle</span>
                <span className="font-bold text-foreground">7 – 10 Years Perennial</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-xs">
                <span className="text-muted-foreground">Farmer Income Security</span>
                <span className="font-bold text-gold">Assured Buyback Contract</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
