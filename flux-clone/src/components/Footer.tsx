"use client";

import { Github, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Canvas", href: "#product" },
      { label: "Workflows", href: "#workflows" },
      { label: "Updates", href: "#updates" },
      { label: "AI Agents", href: "#ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "API", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-[1100px] px-6 pb-16 md:px-10">
      <div className="rounded-[40px] border border-white/10 bg-white/5 px-8 py-12 md:px-12 md:py-14">
        <div className="grid gap-10 text-sm text-muted md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold uppercase tracking-[0.32em] text-white">
              FX
            </span>
            <p className="text-base text-muted">
              Flux Studio is the AI-native workspace for teams that ship product
              experiences. Based in San Francisco, building the future of design
              rituals.
            </p>
            <div className="flex gap-3 text-muted">
              <a
                href="https://twitter.com"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 transition hover:border-white/40 hover:text-white"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="https://github.com"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 transition hover:border-white/40 hover:text-white"
              >
                <Github className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-3">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {section.title}
                </div>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a className="transition hover:text-white" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.3em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Flux Studio Labs</span>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
