"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function CallToAction() {
  return (
    <section
      id="get-started"
      className="relative mx-auto max-w-[1100px] px-6 pb-28 md:px-10"
    >
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-accent/30 via-accent-light/30 to-transparent p-10 text-center shadow-[0_90px_200px_-80px_rgba(124,92,255,0.8)] md:px-16 md:py-16 lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-black/80">
              <Sparkles className="size-3 text-black/70" />
              AI-first product orgs
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-black md:text-4xl">
              Spin up your Flux workspace and ship your next product iteration
              with an AI pair designer.
            </h2>
            <p className="mt-3 text-base text-black/70 md:text-lg">
              Invite your product, research, and engineering teams. Start with a
              14-day fully featured trial — no credit card required.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="https://agentic-2a94acd0.vercel.app"
              className="flex items-center justify-center gap-3 rounded-full border border-black/10 bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              Launch Flux Studio
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="mailto:team@flux.studio"
              className="flex items-center justify-center gap-3 rounded-full border border-black/20 bg-white/60 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
            >
              Contact product specialists
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
