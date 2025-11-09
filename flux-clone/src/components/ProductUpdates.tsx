"use client";

import { motion } from "framer-motion";
import { Calendar, Cpu, Sparkles } from "lucide-react";

const updates = [
  {
    title: "Flux Canvas v2.1",
    date: "April 12, 2024",
    description:
      "New real-time prompt cards, Canvas branches, and automatic dev-mode exports with component diffing.",
    icon: Sparkles,
    label: "Release",
  },
  {
    title: "Systems Sync",
    date: "March 28, 2024",
    description:
      "Import tokens from Figma, push updates to Storybook, and apply guardrails across prompts.",
    icon: Cpu,
    label: "Integration",
  },
  {
    title: "Insights Autopilot",
    date: "March 10, 2024",
    description:
      "Summarize research calls, map insights to roadmap priorities, and auto-generate opportunity solution trees.",
    icon: Calendar,
    label: "AI",
  },
];

export function ProductUpdates() {
  return (
    <section
      id="updates"
      className="relative mx-auto max-w-[1100px] px-6 pb-28 md:px-10"
    >
      <div className="rounded-[40px] border border-white/10 bg-white/5 px-8 py-12 md:px-12 md:py-16">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-muted">
            Product Changelog
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
            Ship mode, all the time.
          </h2>
          <p className="mt-3 text-base text-muted md:text-lg">
            Flux ships weekly improvements across generation, collaboration, and
            developer pairing. Subscribe to stay in the loop.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {updates.map((update, index) => {
            const Icon = update.icon;
            return (
              <motion.div
                key={update.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-muted transition hover:border-white/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                    <Icon className="size-5" />
                  </span>
                  {update.label}
                </div>
                <div className="text-lg font-semibold text-white">
                  {update.title}
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {update.date}
                </div>
                <p className="leading-relaxed">{update.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
