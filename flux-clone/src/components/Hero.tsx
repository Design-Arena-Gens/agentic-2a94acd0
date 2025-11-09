"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const heroMetrics = [
  { label: "Concepts generated", value: "42K+" },
  { label: "Teams onboarded", value: "2.4K" },
  { label: "Avg. iteration speed", value: "3× faster" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-lines opacity-60" />
      <div className="absolute -left-64 top-[-20rem] h-[600px] w-[600px] rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-accent-emerald/20 blur-3xl" />

      <div className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 pb-24 pt-12 md:px-10 lg:pt-20">
        <div className="flex flex-col gap-10 text-center md:gap-14 lg:text-left">
          <span className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted/70 backdrop-blur md:mx-0">
            <Sparkles className="size-3.5 text-accent" />
            Introducing Flux Studio v2.1
          </span>

          <div className="relative">
            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[4.25rem]">
              AI copilots for every product designer. Sketch, iterate & ship in
              a single living canvas.
            </h1>
            <motion.div
              className="absolute -left-10 -top-6 hidden rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent md:inline-flex"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            >
              24/7 AI Pair Designer
            </motion.div>
          </div>

          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted md:max-w-3xl md:text-xl">
            Flux Studio merges generative AI with an end-to-end product design
            stack. Move from text prompts to interactive flows, version control,
            and developer-ready handoff in minutes.
          </p>

          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-start">
            <a
              href="#get-started"
              className="button-gradient flex w-full max-w-sm items-center justify-center gap-3 rounded-full px-6 py-3 text-base font-semibold text-black shadow-[0_16px_44px_-20px_rgba(124,92,255,0.9)] transition duration-200 hover:scale-[1.015] md:w-auto"
            >
              Start designing with AI
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#canvas"
              className="flex items-center gap-3 rounded-full border border-outline/40 bg-white/5 px-6 py-3 text-base font-medium text-muted transition hover:border-outline hover:text-white"
            >
              Watch workspace demo
              <span className="size-2 rounded-full bg-accent-emerald" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:justify-start md:gap-12">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col text-left text-muted/80"
              >
                <span className="text-2xl font-semibold text-white">
                  {metric.value}
                </span>
                <span className="text-xs uppercase tracking-[0.3em]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          id="canvas"
          className="glass relative overflow-hidden border border-outline/30 bg-gradient-to-br from-white/6 via-white/3 to-white/5 px-6 pb-8 pt-6 shadow-[0_55px_120px_-40px_rgba(86,204,242,0.45)]"
          whileHover={{ rotateX: 4, rotateY: -4 }}
          transition={{ type: "spring", stiffness: 140, damping: 14 }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4 text-sm text-muted/70">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                Flux Canvas
              </span>
              <div className="flex items-center gap-1 text-xs">
                <span className="size-2 rounded-full bg-emerald-400" />
                Live collaboration
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full border border-white/10 px-2 py-0.5 uppercase tracking-[0.3em]">
                • Stable build
              </span>
              <span className="rounded-full border border-white/10 px-2 py-0.5 uppercase tracking-[0.3em] text-accent-amber">
                • AI suggestions
              </span>
            </div>
          </div>

          <div className="relative mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
              <div className="mb-5 flex items-center justify-between text-xs text-muted/70">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent" />
                  iOS Subscription Hub
                </span>
                <span>Multi-modal prompt • 45s</span>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/4 via-white/2 to-white/1.5 p-5">
                <div className="flex flex-col gap-3 text-sm text-muted/80">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                      <Sparkles className="size-3 text-accent" />
                      Prompt palette
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-accent-light">
                      Layout v5
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    Create a subscription paywall for a productivity app.
                    Provide two layout variations, emphasize social proof,
                    include testimonials, and render a premium toggle with
                    subtle depth.
                  </p>
                  <div className="grid gap-3 rounded-2xl border border-white/5 bg-black/70 p-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/5 p-3">
                      <span className="text-xs uppercase tracking-[0.24em] text-accent">
                        Variation A
                      </span>
                      <div className="h-48 w-full rounded-lg border border-white/5 bg-gradient-to-br from-accent/40 via-accent-light/30 to-transparent p-4 text-left text-xs text-white shadow-[0_18px_38px_-24px_rgba(124,92,255,0.9)]">
                        <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-white/70">
                          <span>Flux Premium</span>
                          <span>Monthly</span>
                        </div>
                        <div className="mt-4 text-2xl font-semibold">
                          Level up your focus
                        </div>
                        <p className="mt-2 text-sm text-white/80">
                          Unlock rituals, AI planning, and unlimited companion
                          spaces.
                        </p>
                        <div className="mt-6 flex items-baseline gap-2">
                          <span className="text-3xl font-bold">$12</span>
                          <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                            Per month
                          </span>
                        </div>
                        <button className="button-gradient mt-5 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-black">
                          Activate
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/5 p-3">
                      <span className="text-xs uppercase tracking-[0.24em] text-accent">
                        Variation B
                      </span>
                      <div className="h-48 w-full rounded-lg border border-white/5 bg-gradient-to-br from-accent-emerald/30 via-accent-sky/20 to-transparent p-4 text-left text-xs text-white shadow-[0_18px_38px_-24px_rgba(86,204,242,0.9)]">
                        <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-white/70">
                          <span>Productivity Kit</span>
                          <span>Annual</span>
                        </div>
                        <div className="mt-4 text-2xl font-semibold">
                          Design your best year
                        </div>
                        <p className="mt-2 text-sm text-white/80">
                          Guided workflows, team templates, and priority AI
                          credits.
                        </p>
                        <div className="mt-6 flex items-baseline gap-2">
                          <span className="text-3xl font-bold">$96</span>
                          <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                            Per year
                          </span>
                        </div>
                        <button className="mt-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/50">
                          Explore plan
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-xs text-muted/70">
                    <span>Auto linked to Handoff & Spec</span>
                    <span className="text-accent-light">v1.3 Ready</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Live AI suggestions
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Flux understands constraints, design systems, and data. Every
                  prompt becomes a living component in your workspace.
                </p>
                <div className="mt-4 space-y-3 text-sm text-muted/90">
                  <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="mt-1 size-2 rounded-full bg-accent" />
                    <div>
                      <p className="font-medium text-white">
                        Convert layout into interactive flow
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted/70">
                        Auto-wire actions & states
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="mt-1 size-2 rounded-full bg-accent-emerald" />
                    <div>
                      <p className="font-medium text-white">
                        Generate tone-aligned copy
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted/70">
                        Localization ready
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="mt-1 size-2 rounded-full bg-accent-amber" />
                    <div>
                      <p className="font-medium text-white">
                        Export to React, SwiftUI & Figma
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted/70">
                        Dev Mode ↗
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/3 to-white/5 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Connected hubs
                </h3>
                <div className="mt-4 grid gap-4 text-sm text-muted/90">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-3">
                      <span className="size-8 rounded-full bg-accent/20 text-accent ring-1 ring-white/20" />
                      <div>
                        <p className="font-medium text-white">Design Systems</p>
                        <p className="text-xs text-muted/70">
                          Components, tokens, documentation
                        </p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted/70">
                      Synced
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-3">
                      <span className="size-8 rounded-full bg-accent-emerald/20 text-accent-emerald ring-1 ring-white/20" />
                      <div>
                        <p className="font-medium text-white">Research Feed</p>
                        <p className="text-xs text-muted/70">
                          Customer calls & survey insights
                        </p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted/70">
                      Prioritized
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-3">
                      <span className="size-8 rounded-full bg-accent-amber/20 text-accent-amber ring-1 ring-white/20" />
                      <div>
                        <p className="font-medium text-white">Dev Handoff</p>
                        <p className="text-xs text-muted/70">
                          Versioned specs & code export
                        </p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted/70">
                      Automated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
