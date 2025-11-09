"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Flux has become our ritual. Prompts turn into shippable components, the AI summaries keep leadership in the loop, and dev handoff is finally painless.",
    name: "Sasha Levy",
    title: "Head of Product Design • Monocle",
  },
  {
    quote:
      "We aligned research, design, and engineering in a single canvas. Flux cut our concept cycles from four weeks to six days.",
    name: "Mateo Ruiz",
    title: "Director of Design • Vast",
  },
  {
    quote:
      "The AI co-pilot understands our design system better than new hires. Our best product ideas now start as conversations with Flux.",
    name: "Niamh Chen",
    title: "VP Product • Locale",
  },
];

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-[1100px] px-6 pb-28 md:px-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-70" />

      <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 md:p-14">
        <div className="text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-muted">
            Trusted teams
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
            2,400+ design and product leaders run on Flux.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-muted"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <p className="text-left text-lg font-medium text-white/90">
                “{testimonial.quote}”
              </p>
              <div className="pt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                {testimonial.name}
              </div>
              <div className="text-xs text-muted">{testimonial.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
