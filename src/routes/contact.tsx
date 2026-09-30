import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronRight, Sparkles,
  Building2, Handshake, Landmark, ArrowRight, ShieldCheck, HelpCircle,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress, CursorSpotlight, Particles } from "@/components/fx";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { useTilt3D } from "@/hooks/use-tilt";
import { useMagnetic } from "@/hooks/use-magnetic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Sphoorthi Bioenergy Private Limited" },
      {
        name: "description",
        content:
          "Get in touch with Sphoorthi Bioenergy Private Limited for Bio-CNG project incubation, technology partnerships, investor relations, and farmer FPO collaborations.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useRevealOnScroll();
  useTilt3D(8);
  useMagnetic(0.3);

  const [inquiryType, setInquiryType] = useState<string>("General Inquiry");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSelectCTA = (type: string) => {
    setInquiryType(type);
    const formElement = document.getElementById("inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <span className="text-gold font-semibold">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Get in Touch With <span className="text-gradient-emerald">Sphoorthi Bioenergy</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you are planning a commercial CBG plant, exploring technology licensing, seeking investor opportunities, or partnering as an FPO, our expert bioenergy team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards + Form */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 reveal" data-reveal>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Registered Address */}
            <div className="glass hover-glow gradient-border rounded-3xl p-7">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-emerald text-primary-foreground shadow-glow">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold font-bold mb-1">Registered Address</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Corporate Registered HQ</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Road 3, Prashanti Nagar, Plot #17,<br />
                    Hyderabad, Telangana 500048, India
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Office */}
            <div className="glass hover-glow gradient-border rounded-3xl p-7">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-accent-foreground shadow-glow">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold font-bold mb-1">Corporate Office</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Sphoorthi Bioenergy Pvt. Ltd.</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Nizampet, Hyderabad 500090,<br />
                    Telangana & Nagpur Operations, India
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-border">
                <Phone className="h-5 w-5 text-primary mb-3" />
                <div className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Direct Phone</div>
                <div className="text-xs font-bold text-foreground">+91 9014100416</div>
                <div className="text-xs font-bold text-foreground">+91 9985668524</div>
              </div>

              <div className="glass p-6 rounded-2xl border border-border">
                <Mail className="h-5 w-5 text-primary mb-3" />
                <div className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Official Email</div>
                <div className="text-xs font-bold text-foreground break-all">info@sphoorthibioenergy.in</div>
              </div>
            </div>

            {/* Hours & Map Placeholder Card */}
            <div className="glass p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-3">
                <Clock className="h-4 w-4" /> Working Hours
              </div>
              <div className="text-xs text-muted-foreground space-y-1 mb-4">
                <div className="flex justify-between">
                  <span>Monday – Saturday:</span>
                  <span className="font-semibold text-foreground">9:00 AM – 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold text-foreground">Closed (Emergency Support Only)</span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden h-36 bg-forest border border-white/10 flex items-center justify-center text-center p-4">
                <div className="relative z-10">
                  <MapPin className="h-7 w-7 text-primary mx-auto mb-2 animate-bounce" />
                  <div className="text-xs font-bold text-foreground">Hyderabad & Nagpur Facilities</div>
                  <div className="text-[10px] text-muted-foreground">Pan-India Bioenergy Project Sites</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div id="inquiry-form" className="lg:col-span-7">
            <div className="glass hover-glow gradient-border rounded-3xl p-8 sm:p-10 relative">
              <div className="text-xs uppercase tracking-[0.35em] text-gold mb-2">Connect With Us</div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send an Inquiry</h2>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-rise">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-emerald text-primary-foreground mx-auto shadow-glow">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Thank You for Reaching Out!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong className="text-primary">{inquiryType}</strong> has been transmitted successfully to Sphoorthi Bioenergy's corporate advisory team. We will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", phone: "", organization: "", message: "" });
                    }}
                    className="mt-4 rounded-full bg-primary/20 border border-primary/40 px-6 py-2.5 text-xs font-bold text-primary hover:bg-gradient-emerald hover:text-primary-foreground transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full rounded-xl bg-forest/80 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@company.com"
                        className="w-full rounded-xl bg-forest/80 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl bg-forest/80 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        Organization / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company Name or FPO"
                        className="w-full rounded-xl bg-forest/80 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full rounded-xl bg-forest border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bio-CNG Projects">Bio-CNG Projects & Turnkey EPC</option>
                      <option value="Investors">Investors & Project Funding</option>
                      <option value="Technology Partnerships">Technology & R&D Partnerships</option>
                      <option value="Farmer/FPO Partnerships">Farmer / FPO Napier Cultivation</option>
                      <option value="Government/Institutional Partnerships">Government / Institutional Partnerships</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please detail your project requirements, location, estimated capacity, or questions..."
                      className="w-full rounded-xl bg-forest/80 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-emerald px-8 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-glow"
                  >
                    <Send className="h-4 w-4" /> Submit Official Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action (CTA) Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 reveal" data-reveal>
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-forest-deep via-forest to-forest-deep p-10 sm:p-16 text-center relative overflow-hidden shadow-card">
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.35em] text-gold font-bold mb-3">Empowering Energy Transition</div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-foreground">
              Join India's Renewable <span className="text-gradient-emerald">Energy Revolution</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              Partner with Sphoorthi Bioenergy to build high-capacity CBG refineries, invest in clean tech assets, or establish sustainable agricultural supply chains.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleSelectCTA("Technology Partnerships")}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-emerald px-8 py-4 text-sm font-bold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              >
                <Handshake className="h-4 w-4" /> Partner With Us
              </button>

              <button
                onClick={() => handleSelectCTA("Investors")}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold text-accent-foreground shadow-glow hover:scale-105 transition-transform"
              >
                <Landmark className="h-4 w-4" /> Invest With Us
              </button>

              <button
                onClick={() => handleSelectCTA("Bio-CNG Projects")}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-8 py-4 text-sm font-bold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                <Building2 className="h-4 w-4" /> Start a Bio-CNG Project
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
