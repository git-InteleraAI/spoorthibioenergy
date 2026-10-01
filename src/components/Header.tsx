import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube,
} from "lucide-react";
import logoImg from "@/assets/logo.png";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Bioenergy Solutions", href: "/bioenergy-solutions" },
  { label: "Projects & Policies", href: "/projects-policies" },
  { label: "Contact Us", href: "/contact" },
];

export const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = useRouterState({
    select: (s) => s.location?.pathname || "/",
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-forest-deep/80 border-b border-border/60" : "bg-transparent"
      }`}
    >
      {/* Top utility row — social icons */}
      <div className="hidden lg:flex justify-end mx-auto max-w-7xl px-6 pt-3">
        <div className="flex items-center gap-2">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="grid h-7 w-7 place-items-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Social Link"
            >
              <s.icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3.5 group">
          <img
            src={logoImg}
            alt="Sphoorthi Bio Energy SBPL Logo"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(34,197,94,0.35)]"
          />
          <div className="leading-tight">
            <div className="text-base font-black tracking-[0.2em] text-gradient-emerald">SPHOORTHI</div>
            <div className="text-[9px] uppercase tracking-[0.35em] text-muted-foreground">BIO ENERGY</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((n) => {
            const isActive = currentPath === n.href || (n.href !== "/" && currentPath.startsWith(n.href));
            return (
              <Link
                key={n.href}
                to={n.href}
                className={`relative flex items-center gap-1 text-[13px] font-medium transition-colors group ${
                  isActive ? "text-primary" : "text-foreground/85 hover:text-primary"
                }`}
              >
                {n.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-forest-deep/95 backdrop-blur-xl animate-rise">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((n) => {
              const isActive = currentPath === n.href || (n.href !== "/" && currentPath.startsWith(n.href));
              return (
                <Link
                  key={n.href}
                  to={n.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
