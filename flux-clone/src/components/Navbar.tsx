import { cn } from "@/lib/utils";
import { Menu, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Workflows", href: "#workflows" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Updates", href: "#updates" },
];

export function Navbar() {
  return (
    <header className="relative z-20 flex items-center justify-between rounded-full border border-outline/20 bg-black/40 px-6 py-4 backdrop-blur-xl md:px-10">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold uppercase tracking-[0.32em] text-accent-light ring-glow">
          FX
        </span>
        <div className="hidden flex-col sm:flex">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-muted/80">
            Flux Studio
          </span>
          <span className="text-sm text-muted/80">{`Design with AI`}</span>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-sm text-muted/90 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={cn(
              "font-medium transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_16px_rgba(124,92,255,0.65)]"
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button className="hidden items-center gap-2 rounded-full border border-outline/40 px-4 py-2 text-sm text-muted transition hover:border-outline hover:text-white xl:flex">
          <Sparkles className="size-4 text-accent" />
          Flux OS
        </button>
        <a
          href="#get-started"
          className="button-gradient hidden items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-black md:flex"
        >
          Launch Workspace
        </a>
        <button className="inline-flex size-11 items-center justify-center rounded-full border border-outline/40 text-muted transition hover:border-outline hover:text-white lg:hidden">
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  );
}
