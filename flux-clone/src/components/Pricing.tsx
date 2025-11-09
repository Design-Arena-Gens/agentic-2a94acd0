"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Users } from "lucide-react";

const tiers = [
  {
    name: "Studio",
    price: "$48",
    cadence: "per seat / month",
    highlights: [
      "Unlimited AI canvases",
      "Component-aware generation",
      "Live collaboration for 5 members",
      "Linear, Slack, and Figma sync",
    ],
    cta: "Start 14-day trial",
    popular: false,
  },
  {
    name: "Organization",
    price: "$96",
    cadence: "per seat / month",
    highlights: [
      "Workspace governance & SSO",
      "Custom prompts & guardrails",
      "Design system auto-sync",
      "Handoff to React, SwiftUI, Web",
      "Dedicated AI throughput",
    ],
    cta: "Talk to sales",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual agreement",
    highlights: [
      "Self-hosted or private cloud",
      "Security review & compliance",
      "Embedding into existing pipelines",
      "Onsite training & rituals design",
    ],
    cta: "Book workshop",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-[1100px] px-6 pb-28 md:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-70" />
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-muted">
          <Users className="size-3 text-accent" />
          Pricing for teams
        </span>
        <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
          Scale design rituals from startup to enterprise.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">
          Choose a plan that adapts to your team. All tiers include Flux AI
          copilots, workspace automation, and integrations.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            className={`relative flex flex-col gap-5 rounded-3xl border border-white/10 bg-black/60 p-8 text-left text-sm text-muted transition hover:border-white/30 ${
              tier.popular ? "ring-glow" : ""
            }`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-gradient-to-r from-accent/50 to-accent-light/60 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-black">
                Most adopted
              </div>
            )}
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">
              {tier.name}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-white">
                {tier.price}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                {tier.cadence}
              </span>
            </div>
            <ul className="space-y-3 leading-relaxed text-muted">
              {tier.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <Sparkles className="mt-1 size-3.5 text-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <a
              href="#get-started"
              className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                tier.popular
                  ? "button-gradient text-black"
                  : "border border-white/15 text-white hover:border-white/40"
              }`}
            >
              {tier.cta}
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
