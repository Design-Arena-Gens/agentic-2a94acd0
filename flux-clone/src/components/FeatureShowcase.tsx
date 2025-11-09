"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Bolt,
  Braces,
  PenTool,
  Workflow,
  Zap,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Prompt-native canvas",
    description:
      "Sketch with natural language, iterate visually, and let Flux materialize components with semantic understanding.",
    icon: PenTool,
    accent: "from-accent/30 via-accent-light/20 to-transparent",
  },
  {
    title: "Live data prototyping",
    description:
      "Connect to API sandboxes, mock states, and hand off flows that already speak to product metrics.",
    icon: Atom,
    accent: "from-accent-emerald/30 via-white/10 to-transparent",
  },
  {
    title: "Research co-pilot",
    description:
      "Feed transcripts, tickets, or notes and Flux synthesizes insights, opportunities, and job stories into design briefs.",
    icon: Sparkles,
    accent: "from-accent-sky/30 via-white/10 to-transparent",
  },
  {
    title: "Design system aware",
    description:
      "Flux interprets tokens, components, and guardrails, generating on-brand UIs that stay in sync with your library.",
    icon: Workflow,
    accent: "from-accent-amber/25 via-white/10 to-transparent",
  },
  {
    title: "Multi-export engine",
    description:
      "Ship to React, SwiftUI, or Figma with clean constraints, variants, and accessibility heuristics baked in.",
    icon: Braces,
    accent: "from-white/15 via-white/5 to-transparent",
  },
  {
    title: "Team orchestration",
    description:
      "Assign explorations, review with AI summaries, align on rituals, and merge flows without version conflicts.",
    icon: Bolt,
    accent: "from-accent/20 via-accent-emerald/20 to-transparent",
  },
];

export function FeatureShowcase() {
  return (
    <section
      id="product"
      className="relative mx-auto mt-12 max-w-[1100px] px-6 pb-28 md:px-10"
    >
      <div className="absolute -top-20 left-1/2 -z-10 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-white/7 blur-3xl" />

      <div className="text-center lg:text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-muted">
          <Zap className="size-3 text-accent" />
          Craft. Iterate. Ship.
        </span>
        <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
          All of your design rituals, orchestrated by AI.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted md:text-lg lg:mx-0">
          From early concepting to developer pairing, Flux Studio connects every
          step. Generate explorations, pressure-test with data, and ship
          production-ready specs — all without leaving the canvas.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:border-white/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
          >
            <div
              className={`absolute inset-0 -z-10 bg-gradient-to-br ${feature.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
            />
            <feature.icon className="size-9 rounded-2xl border border-white/10 bg-black/60 p-2 text-accent" />
            <h3 className="mt-6 text-lg font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
