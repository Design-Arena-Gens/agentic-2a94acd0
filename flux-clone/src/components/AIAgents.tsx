"use client";

import { motion } from "framer-motion";
import { Brain, Pen, Radar, Workflow } from "lucide-react";

const agents = [
  {
    name: "Briefsmith",
    description:
      "Transforms raw context into structured design briefs with goals, constraints, and success metrics aligned to your OKRs.",
    icon: Brain,
    glow: "from-accent/30 via-white/8 to-transparent",
  },
  {
    name: "Canvas Crafter",
    description:
      "Co-draws flows, generates variants, and rewrites copy with your voice and component library baked in.",
    icon: Pen,
    glow: "from-accent-emerald/30 via-white/10 to-transparent",
  },
  {
    name: "Ritual Runner",
    description:
      "Automates standups, crits, and retros with AI summaries, action items, and suggested merges.",
    icon: Workflow,
    glow: "from-accent-sky/30 via-white/10 to-transparent",
  },
  {
    name: "Signal Scout",
    description:
      "Combines usage analytics, feedback, and roadmap priorities to surface the next high-impact experiments.",
    icon: Radar,
    glow: "from-accent-amber/30 via-white/10 to-transparent",
  },
];

export function AIAgents() {
  return (
    <section id="ai" className="relative mx-auto max-w-[1100px] px-6 pb-28 md:px-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/6 via-transparent to-transparent opacity-70" />
      <div className="rounded-[40px] border border-white/10 bg-white/5 px-8 py-12 md:px-14 md:py-16">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-muted">
            Autonomous agents
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
            Specialized AI partners that accelerate every ritual.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">
            Flux Agents adapt to your org’s rituals, datasets, and systems. They
            work side-by-side with your team to push design work forward.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-muted transition hover:border-white/30"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${agent.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
                />
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                    <Icon className="size-5" />
                  </span>
                  Flux Agent
                </div>
                <div className="mt-4 text-lg font-semibold text-white">
                  {agent.name}
                </div>
                <p className="mt-2 leading-relaxed">{agent.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
