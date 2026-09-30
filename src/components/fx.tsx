import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-counter";

/* Scroll progress bar */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setP(Math.max(0, Math.min(1, scrolled)));
    };
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_12px_var(--color-emerald-glow)] transition-[width] duration-150"
        style={{ width: `${p * 100}%` }}
      />
    </div>
  );
}

/* Cursor spotlight follower */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[400px] w-[400px] rounded-full opacity-40 mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, oklch(0.78 0.19 150 / 0.35), transparent 60%)",
        transition: "transform 120ms cubic-bezier(0.16,1,0.3,1)",
      }}
    />
  );
}

/* Floating particles — eco energy motes */
export function Particles({ count = 26 }: { count?: number }) {
  const items = useRef(
    Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 5,
      delay: Math.random() * 8,
      dur: 10 + Math.random() * 14,
      opacity: 0.15 + Math.random() * 0.5,
    }))
  ).current;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary animate-float-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            boxShadow: "0 0 10px currentColor",
          }}
        />
      ))}
    </div>
  );
}

/* Count-up statistic */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const { ref, val } = useCountUp(to);
  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
