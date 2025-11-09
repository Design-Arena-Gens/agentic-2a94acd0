"use client";

import { motion } from "framer-motion";

const integrations = [
  "Figma",
  "Linear",
  "Jira",
  "Slack",
  "Notion",
  "GitHub",
  "Amplitude",
  "Segment",
  "Vercel",
  "Zapier",
  "Superhuman",
  "Loom",
];

export function Integrations() {
  return (
    <section
      id="integrations"
      className="relative mx-auto max-w-[1100px] px-6 pb-28 text-center md:px-10"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-50" />
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Native integrations with the tools product teams live in.
        </h2>
        <p className="mt-4 text-base text-muted md:text-lg">
          Keep your rituals tight. Flux weaves into your stack, syncing tickets,
          delivering design summaries, and exporting code to the repos where it
          ships.
        </p>
      </div>

      <div className="mt-12 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <motion.div
          className="grid gap-4 text-sm text-muted/80 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {integration}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
