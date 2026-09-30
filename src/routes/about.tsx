import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck, Sprout, Leaf, Cpu, Award, Users, ChevronRight, X, ArrowRight,
  Globe, Zap, HeartHandshake, Building2, CheckCircle2, Sparkles, UserCheck,
  FileText, Activity, BookOpen, Layers,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress, CursorSpotlight, Particles } from "@/components/fx";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { useTilt3D } from "@/hooks/use-tilt";
import { useMagnetic } from "@/hooks/use-magnetic";
import blueprint from "@/assets/blueprint.png";
import farmField from "@/assets/farm-field.png";
import drPeeraImg from "@/assets/dr-peera-kutagolla.jpg";
import drSrinivasImg from "@/assets/dr-srinivas-jukuri.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sphoorthi Bioenergy Private Limited" },
      {
        name: "description",
        content:
          "Learn about Sphoorthi Bioenergy, our vision, mission, 3F Model (Food, Fuel, Fertilizer), executive leadership, R&D capabilities, and integrated business structure.",
      },
    ],
  }),
  component: AboutPage,
});

interface LeaderProfile {
  id: string;
  name: string;
  designation: string;
  avatarText: string;
  bgGradient: string;
  image?: string;
  imagePosition?: string;
  shortSummary: string;
  fullBio: string[];
  highlights: string[];
}

const leadershipProfiles: LeaderProfile[] = [
  {
    id: "vishnu-vardhan-rao",
    name: "M. Vishnu Vardhan Rao",
    designation: "Chairman & Managing Director — Sphoorthi Bioenergy Pvt. Ltd.",
    avatarText: "VVR",
    bgGradient: "from-emerald-600 to-teal-800",
    shortSummary:
      "Visionary entrepreneur with 41 years of diversified experience across renewable energy, infrastructure, real estate, and technology. Leading end-to-end CBG project incubation, green fuel transition, and rural economic empowerment.",
    highlights: [
      "41+ Years Cross-Industry Leadership",
      "Pioneer of 'BINARY ADS' (India's first moving display business at age 25)",
      "End-to-End CBG & Bioenergy Project Incubation",
      "Major Civil Infrastructure (Bango Dam, WCL Mining, Central Railway)",
      "Venture & Asset Management via DZ Venture LLP & DZ Life Sciences",
    ],
    fullBio: [
      "M. Vishnu Vardhan Rao is the Chairman & Managing Director of Sphoorthi Bioenergy Pvt. Ltd., Nagpur, with 41 years of diversified experience across renewable energy, infrastructure, real estate, and technology sectors.",
      "Mr. Vishnu Vardhan Rao is a postgraduate and visionary entrepreneur known for pioneering innovative business models and sustainable development initiatives. He possesses strong expertise in renewable energy technologies, including CBG, biomass gasification, solar power, and clean fuel solutions.",
      "His vision is focused on creating rural self-reliance through Fuel, Fertilizer, and Food, supporting sustainable village economies across India. He actively develops initiatives for rural youth employment, women empowerment, and community-based entrepreneurship.",
      "His entrepreneurial journey began in the 1980s. At the age of 25, he founded India's first moving electronic display board business, introducing a first-of-its-kind advertising innovation under the name 'BINARY ADS.'",
      "His commitment to clean and green energy laid the foundation for Sphoorthi Bioenergy Pvt. Ltd., which plays a major role in facilitating end-to-end Compressed Bio-Gas (CBG) projects, including project incubation, feedstock sourcing, EPC execution, and Operations & Maintenance.",
      "His specialized observations and expertise focus on reducing costs in CBG projects. He has built a strong multidisciplinary team consisting of specialized experts and highly qualified scientists in the green fuel sector to drive the design and engineering of Biogas and Bio-CBG projects.",
      "His areas of focus include feedstock solutions, anaerobic digestion, biological process optimization, gas purification, laboratory establishment, process diagnostics, Operations & Maintenance, and technology commercialization.",
      "Mr. Rao has a strong social and scientific vision and is deeply passionate about environmental protection and renewable energy. His leadership focuses on the production and commercialization of sustainable gaseous fuels, including CNG, CBG, and Hydrogen.",
      "Under his visionary guidance, a team of young professionals developed retrofit solutions for diesel-operated heavy-duty vehicles and industrial machinery, facilitating the transition from conventional liquid fuels to green fuels. These solutions aim to reduce fuel costs, lower pollution, and contribute to environmental protection.",
      "Another significant milestone under his leadership is the expansion into high-pressure cascade manufacturing to support sustainable gas storage and distribution infrastructure.",
      "Through his business entity, M/s Sphoorthi Promoters, he successfully led civil engineering operations for the Bango Dam Project in Madhya Pradesh, executed mining infrastructure works for Western Coalfields Limited (WCL), and delivered major railway gauge conversion projects across Central India.",
      "These projects demonstrate his extensive expertise in large-scale infrastructure and industrial development.",
      "He is also an accomplished real estate developer with significant experience in aggregating bulk land in and around Nagpur. He oversees venture development, corporate structuring, and diversified asset management through DZ Venture LLP.",
      "Reflecting his interest in nature, spirituality, and public health, he developed DZ Life Sciences, which promotes Ayurvedic healthcare, natural products, and life sciences ventures through innovative business platforms.",
      "He demonstrates exceptional capabilities in strategic leadership, corporate governance, joint ventures, and cross-sector team management. His expertise also includes bulk land acquisition, zoning, infrastructure planning, and strategic investment management.",
      "He holds leadership roles as Chairman, Secretary, Trustee, and Education Administrator across multiple social, spiritual, educational, scientific, and research institutions.",
    ],
  },
  {
    id: "peera-kutagolla",
    name: "Dr. Peera Kutagolla",
    designation: "Director & Chief Scientist — Processing and R&D, Sphoorthi Bioenergy Pvt. Ltd.",
    avatarText: "DPK",
    bgGradient: "from-blue-600 to-emerald-800",
    image: drPeeraImg,
    shortSummary:
      "Ph.D. in Life Sciences with 18+ years of research and industrial experience. Specialist in computational biology, microbial culture development, high-yield CBG process optimization, and Green Hydrogen production.",
    highlights: [
      "Ph.D. in Life Sciences (Computational Biology & Bioinformatics)",
      "18+ Years Industrial & Academic Research Experience",
      "Former Bioinformatics Scientist at Sri Venkateswara Univ & Principal Scientist at PathGene Health Care",
      "Developer of Bioenergy Integrated Circular Economy Business Model",
      "Expert in 4-Stage Digester Tech, Microbial Consortiums & Green Hydrogen",
    ],
    fullBio: [
      "Dr. Peera Kutagolla serves as Director and Chief Scientist — Processing and R&D at Sphoorthi Bioenergy Pvt. Ltd., Nagpur. His work in sustainable energy focuses on advancing biofuel technologies that transform biodegradable waste and renewable biomass into sustainable energy.",
      "Dr. Peera holds a Ph.D. in Life Sciences with specialization in Computational Biology and Bioinformatics and has more than 18 years of research and industrial experience.",
      "His multidisciplinary expertise includes Renewable Energy, Computational Biology, Bioinformatics, Microbial Technology, Molecular Biology, Genomics, and Drug Discovery.",
      "He has published numerous research papers and patents, guided postgraduate, M.Phil., and Ph.D. scholars, received several awards, and served as a publishing partner for reputed journals.",
      "During his professional career, he served as a Bioinformatics Scientist at Sri Venkateswara University, Tirupati, and as Principal Scientist at PathGene Health Care Pvt. Ltd., Tirupati.",
      "Currently, he serves as the scientific lead for R&D laboratories and Whole-Time Director of Sphoorthi Bioenergy Private Limited, Nagpur. He is also associated with VSRI Energy Solutions and serves as an advisor to other reputed companies.",
      "As an incubation and aggregation partner, he has been involved in the incubation and establishment of renewable CBG projects across different states of India in association with industry partners.",
      "With deep knowledge of the biofuels sector and a special interest in the microbial industry, agriculture, and alternative fuels, he has contributed to Microbial Culture Development, Bio-Methane Production, Green Hydrogen Production Technologies from CBG, Organic Fertilizer Development, and Bio-Fertilizer Encapsulation.",
      "He has developed enriched organic manure integrated with bio-fertilizers to support higher-yield organic agricultural production and has received agri-entrepreneur orientation from ANAGU.",
      "His extensive industrial research includes CBG Process Optimization, Development of 3rd and 4th Generation Fuels, Napier Grass Variant Development, Sustainable Feedstock Management from Field to Factory, Biomass Pretreatment, Four-Stage Digester Technology, Maximum Feedstock Utilization, Microbial Consortium Development, High-Quantity CBG Production, CBG-to-Green Hydrogen Production, and FOM and LOM Development.",
      "He is one of the key contributors to the development of the company's Bioenergy Integrated Circular Economy Business Model.",
      "His involvement in developing retrofit solutions for converting diesel engines to CNG has also been recognized.",
      "Dr. Peera plays a central role in the development of Sphoorthi's R&D infrastructure and fundamental research initiatives covering Biofuels, Process Optimization, Process Development, Microbial Technology, CBG Production, Green Hydrogen, Organic Fertilizers, Bio-Fertilizers, Training, and Innovation.",
    ],
  },
  {
    id: "srinivas-jukuri",
    name: "Dr. Srinivas Jukuri",
    designation: "Director — Sphoorthi Bioenergy Pvt. Ltd.",
    avatarText: "DSJ",
    bgGradient: "from-amber-600 to-emerald-800",
    image: drSrinivasImg,
    imagePosition: "object-top",
    shortSummary:
      "Biogas & CBG technologist with 15+ years experience across XLNC Enviro, Mahindra Waste to Energy, CSIR-IICT, and BITS Pilani. Inventor of the AI-enabled RBHM (Real-time Biodigester Health Monitoring) Technology.",
    highlights: [
      "Ph.D. in Biotechnology (Engineering) from JNTU Hyderabad",
      "15+ Years Industrial Biogas & CBG Engineering Leadership",
      "Inventor of AI-enabled RBHM (Real-time Biodigester Health Monitoring)",
      "Founder of RENVITEK Solutions",
      "Expert in Early Warning Indicators, Gas Purification & Biological Pre-Hydrolysis",
    ],
    fullBio: [
      "Dr. Srinivas Jukuri is a distinguished Biogas and Compressed Biogas (CBG) technologist with more than 15 years of professional experience in renewable energy, waste-to-energy, and sustainable resource management.",
      "He has extensive experience in the design engineering, commissioning, optimization, and operation of commercial Biogas and Bio-CBG plants across municipal, industrial, and agricultural sectors at multiple locations across India.",
      "His professional experience includes specialized technical and leadership roles across renewable energy companies and research organizations, including XLNC Enviro Pvt. Ltd., Spantech Engineers Pvt. Ltd., Mahindra Waste to Energy Solutions, Ahuja Engineering Services, CSIR–Indian Institute of Chemical Technology (IICT), BITS Pilani Hyderabad, and EPTRI.",
      "His multidisciplinary experience enables him to translate advanced scientific research into practical and scalable engineering solutions for the bioenergy industry.",
      "Dr. Jukuri earned his Ph.D. in Biotechnology (Engineering) from Jawaharlal Nehru Technological University Hyderabad (JNTUH).",
      "His pioneering research focused on the standardization of early warning indicators and biological pre-hydrolysis for commercial biogas production using food waste, vegetable waste, and agricultural residues.",
      "This research culminated in the development of the AI-enabled RBHM (Real-time Biodigester Health Monitoring) Technology.",
      "RBHM is a proprietary digester health intelligence platform that integrates simplified biological monitoring with predictive analytics to detect process instability at an early stage.",
      "The technology helps plant operators enhance process stability, maximize methane production, improve operational reliability, and reduce plant downtime.",
      "As part of his research contributions, Dr. Jukuri has published work in peer-reviewed international publications and continues to contribute to the advancement of anaerobic digestion technologies through research, technical consultancy, industry training, and innovation.",
      "He is the founder of RENVITEK Solutions and has successfully led the design, commissioning, optimization, troubleshooting, and performance enhancement of numerous commercial Biogas and Bio-CBG projects.",
      "His technical expertise includes Feedstock Characterization, Anaerobic Digestion, Biological Process Optimization, Gas Purification, Laboratory Establishment, Process Diagnostics, Operations & Maintenance, and Technology Commercialization.",
      "Passionate about CBG technology and sustainability, Dr. Jukuri is committed to accelerating the transition toward a circular economy by transforming organic waste into clean energy through engineering excellence, artificial intelligence, and next-generation process intelligence.",
    ],
  },
];

const integratedUnits = [
  {
    title: "Corporate Administrative Headquarters",
    desc: "Central command governing strategic expansion, project financing, corporate governance, regulatory compliance, and cross-sector partnerships.",
    icon: Building2,
  },
  {
    title: "Advanced R&D Centres",
    desc: "State-of-the-art biological and chemical laboratories focused on BMP testing, microbial consortium isolation, pre-hydrolysis, and Green Hydrogen production.",
    icon: FlaskIcon,
  },
  {
    title: "Regional Tech Development & Training Centres",
    desc: "Dedicated facilities providing hands-on operational training, digester diagnostics, automation calibration, and skill development for plant engineers and operators.",
    icon: Cpu,
  },
  {
    title: "Bioenergy Clusters",
    desc: "Decentralized regional energy hubs aggregating biomass feedstock, operating multi-stage biodigesters, and feeding clean compressed gas directly into distribution networks.",
    icon: Layers,
  },
  {
    title: "Commercial Bio-CNG & Green Hydrogen Facilities",
    desc: "Industrial-scale CBG refineries featuring membrane/VPSA gas upgradation, 250-bar cascade filling stations, and high-purity hydrogen reforming units.",
    icon: Zap,
  },
  {
    title: "Biomass Pre-processing Units",
    desc: "High-capacity aggregation hubs equipped with heavy-duty balers, chippers, and thermal/enzymatic pretreatment systems for agricultural residues and Napier grass.",
    icon: Sprout,
  },
  {
    title: "Organic Fertilizer Manufacturing",
    desc: "Processing digestate into standardized, high-density Fermented Organic Manure (FOM) rich in humus, macro/micronutrients, and organic carbon.",
    icon: Leaf,
  },
  {
    title: "Bio-Fertilizer Manufacturing",
    desc: "Formulating Liquid Fermented Organic Manure (LFOM) enriched with beneficial nitrogen-fixing and phosphate-solubilizing bio-inoculants.",
    icon: ShieldCheck,
  },
  {
    title: "Farmer / FPO Integration",
    desc: "Direct partnership networks with Farmers and Farmer Producer Organizations (FPOs) ensuring guaranteed buyback of energy crops and sustainable income generation.",
    icon: HeartHandshake,
  },
];

function FlaskIcon(props: any) {
  return <Award {...props} />;
}

function AboutPage() {
  useRevealOnScroll();
  useTilt3D(8);
  useMagnetic(0.3);

  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

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
            <span className="text-gold font-semibold">About Us</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Engineering the <span className="text-gradient-emerald">Sustainable Future</span> of Bioenergy.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sphoorthi Bioenergy Private Limited is a pioneering renewable energy company headquartered in Nagpur and Hyderabad, dedicated to accelerating India's transition toward clean fuels, circular bioeconomy, and rural self-reliance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Company Overview */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 reveal" data-reveal>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Company Overview</div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Transforming Organic Waste into <span className="text-gradient-emerald">High-Value Clean Energy</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sphoorthi Bioenergy Private Limited is leading the renewable energy transformation by developing technology-driven bioenergy infrastructure across India. We specialize in end-to-end Compressed Bio-Gas (CBG / Bio-CNG) projects, Green Hydrogen production technologies, biomass gasification, and high-nutrient bio-fertilizers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              By deploying state-of-the-art multi-stage anaerobic digestion, biological pre-hydrolysis, membrane gas purification, and AI-enabled process monitoring, we bridge the gap between scientific innovation and commercial execution.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "Renewable Energy", "Bio-CNG & CBG", "Green Hydrogen", "Biomass Tech",
                "Organic Fertilizers", "Circular Economy", "Soil Health", "Farmer Income",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-forest/40 border border-primary/20 p-3 text-xs font-semibold text-foreground shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-card group">
            <img src={farmField} alt="Bioenergy Farm and Facility" className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-[1500ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl border border-white/10">
              <div className="text-xs uppercase tracking-widest text-gold font-bold mb-1">Our Core Commitment</div>
              <div className="text-lg font-bold text-foreground">Creating Rural Self-Reliance Through Sustainable Bio-Ecosystems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 & 3: Vision & Mission */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass hover-glow gradient-border rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-emerald text-primary-foreground shadow-glow mb-6">
                <Globe className="h-7 w-7" />
              </div>
              <div className="text-xs uppercase tracking-[0.35em] text-gold mb-2">Our Foundation</div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                To build a resilient, zero-carbon India by transforming agricultural and organic waste into high-grade clean fuels and high-yield organic nutrients — fostering energy security, environmental regeneration, and self-reliant rural economies across every state.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/60 text-xs font-semibold text-primary uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Energy Independence & Rural Prosperity
            </div>
          </div>

          <div className="glass hover-glow gradient-border rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-accent-foreground shadow-glow mb-6">
                <Zap className="h-7 w-7" />
              </div>
              <div className="text-xs uppercase tracking-[0.35em] text-gold mb-2">Our Mission</div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                To engineer world-class commercial CBG and Green Hydrogen infrastructure, develop high-efficiency biological R&D models, standardize digester process intelligence, and forge sustainable farmer-integrated biomass supply chains that displace fossil fuels and rebuild soil health.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/60 text-xs font-semibold text-gold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Technology-Driven Waste-To-Value
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Challenge We Address */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Critical National Issues</div>
          <h2 className="text-3xl sm:text-5xl font-bold">The Challenge <span className="text-gradient-emerald">We Address</span></h2>
          <p className="mt-4 text-muted-foreground">Addressing India's core energy, environmental, and agricultural vulnerabilities through sustainable technological solutions.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Increasing Energy Demand", body: "Rapid industrialization and transport growth drive unprecedented demand for gaseous and liquid fuels across urban and rural sectors." },
            { title: "Fossil Fuel Dependency", body: "High reliance on imported crude oil and natural gas exposes the economy to international price volatility and supply chain shocks." },
            { title: "Environmental Pollution", body: "Uncontrolled open burning of crop stubble, landfill methane emissions, and smog severely degrade air quality and public health." },
            { title: "Agricultural Waste Burden", body: "Over 500 million tonnes of crop residues and organic waste remain unutilized annually, creating disposal and fire hazards." },
            { title: "Declining Soil Health", body: "Excessive application of chemical fertilizers depletes soil organic carbon, micronutrients, and vital biological microflora." },
            { title: "Climate Change & ESG Mandates", body: "Urgent necessity to decarbonize heavy mobility and industrial heating to meet national net-zero targets and global carbon standards." },
          ].map((ch, idx) => (
            <div key={ch.title} className="glass hover-glow rounded-2xl p-6 border border-border/80 hover:border-primary/50 transition-all">
              <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Challenge 0{idx + 1}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{ch.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ch.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Integrated Solution */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-forest-deep via-forest to-forest-deep p-8 sm:p-14 relative overflow-hidden shadow-card">
          <div className="relative z-10 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Our Integrated Ecosystem</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              An End-to-End <span className="text-gradient-emerald">Renewable Bioenergy Blueprint</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base">
              Sphoorthi Bioenergy seamlessly integrates the entire value chain — from farm-level biomass collection to biological digestion, precision gas upgradation, cascade filling, and nutrient recovery.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-primary mb-1">01</div>
                <div className="font-bold text-foreground mb-2">Feedstock Intake</div>
                <div className="text-xs text-muted-foreground leading-relaxed">Napier grass, paddy straw, pressmud, dung, and organic industrial residues.</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-primary mb-1">02</div>
                <div className="font-bold text-foreground mb-2">Refinement & AD</div>
                <div className="text-xs text-muted-foreground leading-relaxed">Biological pre-hydrolysis, CSTR 4-stage digesters, membrane CBG refinement.</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-primary mb-1">03</div>
                <div className="font-bold text-foreground mb-2">Dual Offtake</div>
                <div className="text-xs text-muted-foreground leading-relaxed">CBG/Green Hydrogen for clean mobility + enriched organic manure (FOM) for farms.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 3F Model (Food | Fuel | Fertilizer) */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Core Philosophy</div>
          <h2 className="text-4xl sm:text-6xl font-bold">The <span className="text-gradient-emerald">3F Model</span></h2>
          <p className="mt-4 text-muted-foreground text-base">Our integrated triad creating sustainable economic value for agriculture, energy, and community health.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Food */}
          <div className="glass hover-glow gradient-border rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-emerald text-primary-foreground shadow-glow mb-6 group-hover:scale-110 transition-transform">
                <Sprout className="h-8 w-8" />
              </div>
              <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Pillar 01</div>
              <h3 className="text-3xl font-black text-foreground mb-4">FOOD</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By replenishing agricultural soils with organic humus and microflora from digestate, our model restores soil organic carbon (SOC), boosts crop productivity, eliminates toxic chemical runoff, and ensures food security for future generations.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/60 text-xs font-semibold text-primary uppercase tracking-widest">
              Soil Health & Crop Security
            </div>
          </div>

          {/* Card 2: Fuel */}
          <div className="glass hover-glow gradient-border rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold text-accent-foreground shadow-glow mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8" />
              </div>
              <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Pillar 02</div>
              <h3 className="text-3xl font-black text-foreground mb-4">FUEL</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming low-density organic waste into 98%+ pure Compressed Bio-Gas (CBG) and Green Hydrogen. This clean green fuel powers transport cascades, replaces industrial diesel, and secures 24/7 grid base-load power.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/60 text-xs font-semibold text-gold uppercase tracking-widest">
              Clean CBG & Green Hydrogen
            </div>
          </div>

          {/* Card 3: Fertilizer */}
          <div className="glass hover-glow gradient-border rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-700 text-white shadow-glow mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="h-8 w-8" />
              </div>
              <div className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Pillar 03</div>
              <h3 className="text-3xl font-black text-foreground mb-4">FERTILIZER</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Extracting Fermented Organic Manure (FOM) and Liquid Fermented Organic Manure (LFOM) rich in N-P-K, micronutrients, and beneficial bacteria. Returns nutrients directly back to farmers to reduce synthetic fertilizer expenditures.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/60 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Enriched Organic Manure (FOM)
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Our Impact */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Quantifiable Results</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Our <span className="text-gradient-emerald">Impact</span></h2>
          <p className="mt-4 text-muted-foreground">Delivering environmental, economic, and social value across rural and industrial landscapes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Renewable Energy Generation", desc: "Production of high-purity CBG and Green Hydrogen substituting fossil CNG and diesel." },
            { title: "Farmer Empowerment", desc: "Assured long-term income for farmers cultivating energy crops like Napier grass." },
            { title: "Rural Employment", desc: "Direct and indirect green job creation across biomass harvesting, logistics, and plant operations." },
            { title: "Organic Agriculture", desc: "Standardized Fermented Organic Manure boosting soil organic matter and crop immunity." },
            { title: "Carbon Reduction", desc: "Massive reduction in greenhouse gas emissions and complete elimination of stubble burning." },
            { title: "Circular Economy", desc: "100% waste utilization model with zero liquid discharge and zero landfill waste." },
            { title: "Energy Independence", desc: "Directly contributing to national fuel import substitution under the SATAT framework." },
            { title: "Soil Health Restoration", desc: "Rebuilding organic carbon and microbial diversity in depleted agricultural soils." },
          ].map((imp) => (
            <div key={imp.title} className="glass p-6 rounded-2xl border border-border hover:border-primary/50 transition-all">
              <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">{imp.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{imp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership / Core Team Section */}
      <section id="leadership" className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Executive Leadership</div>
          <h2 className="text-4xl sm:text-6xl font-bold">Our <span className="text-gradient-emerald">Leadership Team</span></h2>
          <p className="mt-4 text-muted-foreground text-base">Guided by veteran entrepreneurs, chief bioenergy scientists, and distinguished technologists.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {leadershipProfiles.map((leader) => (
            <div
              key={leader.id}
              className="glass hover-glow gradient-border rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 group"
            >
              <div>
                {/* Avatar Header */}
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={`h-24 w-24 rounded-2xl object-cover ${leader.imagePosition || "object-center"} border-2 border-primary/40 shadow-glow mb-6 group-hover:scale-105 transition-transform`}
                  />
                ) : (
                  <div className={`h-24 w-24 rounded-2xl bg-gradient-to-br ${leader.bgGradient} flex items-center justify-center text-white text-2xl font-black shadow-glow mb-6 group-hover:scale-105 transition-transform`}>
                    {leader.avatarText}
                  </div>
                )}

                <div className="text-xs font-bold text-gold uppercase tracking-widest mb-1">Executive Board</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{leader.name}</h3>
                <div className="text-xs font-semibold text-primary mb-4 leading-snug">{leader.designation}</div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {leader.shortSummary}
                </p>

                <div className="space-y-2 mb-8">
                  {leader.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedLeader(leader)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary/15 border border-primary/40 px-5 py-3 text-xs font-bold text-primary hover:bg-gradient-emerald hover:text-primary-foreground transition-all shadow-sm group-hover:shadow-glow"
              >
                <UserCheck className="h-4 w-4" /> View Full Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Profile Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-rise">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-forest-deep border border-primary/40 p-6 sm:p-10 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 border-b border-border/80 pb-6">
              {selectedLeader.image ? (
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className={`h-20 w-20 shrink-0 rounded-2xl object-cover ${selectedLeader.imagePosition || "object-center"} border-2 border-primary/40 shadow-glow`}
                />
              ) : (
                <div className={`h-20 w-20 shrink-0 rounded-2xl bg-gradient-to-br ${selectedLeader.bgGradient} flex items-center justify-center text-white text-2xl font-black shadow-glow`}>
                  {selectedLeader.avatarText}
                </div>
              )}
              <div>
                <div className="text-xs uppercase tracking-widest text-gold font-bold">Executive Profile</div>
                <h3 className="text-3xl font-black text-foreground">{selectedLeader.name}</h3>
                <div className="text-sm font-bold text-primary mt-1">{selectedLeader.designation}</div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mb-8 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs font-bold text-gold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Key Accomplishments & Leadership Focus
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {selectedLeader.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Biography Paragraphs */}
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <div className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Detailed Biography</div>
              {selectedLeader.fullBio.map((paragraph, pIdx) => (
                <p key={pIdx} className="bg-forest/20 p-4 rounded-xl border border-white/5 text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border flex justify-end">
              <button
                onClick={() => setSelectedLeader(null)}
                className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-glow"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Integrated Business Structure */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Corporate Blueprint</div>
          <h2 className="text-4xl sm:text-6xl font-bold">Integrated <span className="text-gradient-emerald">Business Structure</span></h2>
          <p className="mt-4 text-muted-foreground text-base">A coordinated operational network covering administrative HQ, scientific R&D, regional hubs, and agricultural partnerships.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integratedUnits.map((unit) => {
            const Icon = unit.icon;
            return (
              <div key={unit.title} className="glass hover-glow rounded-3xl p-7 border border-border hover:border-primary/50 transition-all group">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-gradient-emerald group-hover:text-primary-foreground transition-all mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{unit.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{unit.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Technology Partnerships */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-forest-deep via-forest to-forest-deep p-8 sm:p-14 relative overflow-hidden shadow-card">
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Global Alliances</div>
            <h2 className="text-3xl sm:text-5xl font-bold">Global Technology <span className="text-gradient-emerald">Partnerships</span></h2>
            <p className="mt-4 text-muted-foreground text-base">
              Collaborating with leading DST, academic, and industrial technology partners to deliver international-standard anaerobic digesters, membrane gas upgradation, gas compression cascades, and predictive AI diagnostics.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Anaerobic Digestion", desc: "Multi-stage CSTR and thermophilic pre-hydrolysis biological engineering." },
                { title: "Membrane Upgradation", desc: "98%+ Methane purity gas purification and carbon dioxide recovery." },
                { title: "High-Pressure Cascades", desc: "250-bar cascade storage manufacturing and clean gas transportation." },
                { title: "Process Intelligence", desc: "AI-enabled Real-time Biodigester Health Monitoring (RBHM) integration." },
              ].map((tech, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Tech Area 0{i + 1}</div>
                  <div className="text-lg font-bold text-foreground mb-2">{tech.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{tech.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
