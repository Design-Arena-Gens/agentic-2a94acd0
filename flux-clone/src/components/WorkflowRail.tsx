"use client";

import { motion } from "framer-motion";
import { Activity, Bot, Layers, Share2, Sigma, Target } from "lucide-react";

const stages = [
  {
    title: "Brief to blueprint",
    description:
      "Upload research, tickets, or strategy docs. Flux distills the signal into structured briefs, user stories, and acceptance criteria.",
    icon: Target,
    badge: "Input intelligence",
  },
  {
    title: "Concept engine",
    description:
      "Describe flows, states, or UI treatments. Generate multiple explorations automatically aligned to your design system.",
    icon: Bot,
    badge: "Generative",
  },
  {
    title: "Interactive prototyping",
    description:
      "Auto-wire navigation, conditional logic, and real data bindings. Test instantly with stakeholders or customers.",
    icon: Layers,
    badge: "Live canvas",
  },
  {
    title: "Team reviews & rituals",
    description:
      "AI notes, async rituals, and version comparison help you align faster. Flux suggests next iterations or merges automatically.",
    icon: Activity,
    badge: "Feedback loops",
  },
  {
    title: "Developer handoff",
    description:
      "Flux exports production-friendly React & SwiftUI with accessible tokens, while syncing specs to the teams that ship.",
    icon: Share2,
    badge: "Code export",
  },
  {
    title: "Product analytics",
    description:
      "Pull product data, QA accessibility, and monitor adoption. Flux closes the loop by recommending next experiments.",
    icon: Sigma,
    badge: "Closed loop",
  },
];

export function WorkflowRail() {
  return (
    <section
      id="workflows"
      className="relative mx-auto max-w-[1200px] px-6 pb-28 md:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-50" />
      <div className="rounded-[40px] border border-outline/30 bg-black/60 p-8 shadow-[0_80px_180px_-80px_rgba(124,92,255,0.7)] md:p-12">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="self-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-muted md:self-start">
            Automatic rituals
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">
            A single highway for product teams.
          </h2>
          <p className="text-base text-muted md:max-w-3xl md:text-lg">
            Flux treats design work as a living system. Every stage feeds the
            next, with AI copilots orchestrating alignment, documentation, and
            developer handoff automatically.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[320px_auto]">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/20 via-white/5 to-transparent p-6 text-sm text-muted">
              <p>
                “Flux collapsed our design-to-dev handoff from 10 days to 36
                hours. We now generate concepts, test them, and export production
                code in the same workspace.”
              </p>
              <div className="mt-5 text-xs uppercase tracking-[0.3em] text-white/60">
                Reign Product Org • <span className="text-accent">Series D</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-muted">
              <p>
                Connect to Jira, Linear, Slack, Notion, and GitHub. Flux keeps
                the whole team in sync with automated recaps, suggested actions,
                and code-ready specs.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
            <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              Flux Workflow Graph
            </div>

            <div className="relative flex flex-col gap-6 px-6 py-16 before:absolute before:bottom-10 before:left-10 before:top-16 before:w-px before:bg-gradient-to-b before:from-accent before:via-white/40 before:to-transparent md:px-10">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.title}
                    className="relative flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/55 p-6 text-sm text-muted transition hover:border-white/30"
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ delay: index * 0.09, duration: 0.55 }}
                  >
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                      <span className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                        <Icon className="size-5" />
                      </span>
                      {stage.badge}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {stage.title}
                    </h3>
                    <p className="leading-relaxed">{stage.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
