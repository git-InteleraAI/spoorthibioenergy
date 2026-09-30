import { Link } from "@tanstack/react-router";
import { Leaf, MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="mt-32 border-t border-border bg-forest-deep/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-emerald shadow-glow group-hover:scale-105 transition-transform">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-base font-bold tracking-widest text-gradient-emerald">SPHOORTHI</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">BIO ENERGY</div>
            </div>
          </Link>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Sphoorthi Bioenergy Private Limited is committed to engineering a sustainable future through technology-driven bioenergy, CBG, green hydrogen, organic fertilizers, and integrated waste-to-value solutions.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="group grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary hover:scale-110 transition-all"
                aria-label="Social Link"
              >
                <Icon className="h-4 w-4 icon-anim-spin" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-gold mb-4">Quick Links</div>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/bioenergy-solutions" className="hover:text-primary transition-colors">Bioenergy Solutions</Link></li>
            <li><Link to="/projects-policies" className="hover:text-primary transition-colors">Projects & Policies</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-gold mb-4">Bioenergy Solutions</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/bioenergy-solutions" className="hover:text-primary transition-colors">Compressed Bio-Gas (CBG)</Link></li>
            <li><Link to="/bioenergy-solutions" className="hover:text-primary transition-colors">Green Hydrogen Production</Link></li>
            <li><Link to="/bioenergy-solutions" className="hover:text-primary transition-colors">Plant Technology & Engineering</Link></li>
            <li><Link to="/bioenergy-solutions" className="hover:text-primary transition-colors">Napier Grass & Feedstock</Link></li>
            <li><Link to="/bioenergy-solutions" className="hover:text-primary transition-colors">Enriched Organic Manure (FOM)</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-gold mb-4">Contact Info</div>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>Registered Address<br />Road 3, Prashanti Nagar, Plot #17, Hyderabad, Telangana 500048</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>Corporate Office<br />Sphoorthi Bio Energy, Nizampet, Hyderabad 500090</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>+91 9014100416 / +91 9985668524</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>info@sphoorthibioenergy.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Sphoorthi Bioenergy Private Limited. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/bioenergy-solutions" className="hover:text-primary transition-colors">Solutions</Link>
            <Link to="/projects-policies" className="hover:text-primary transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
