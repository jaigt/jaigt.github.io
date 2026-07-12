"use client";

import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import TerminalFrame from "./TerminalFrame";
import GlowHeadline from "./GlowHeadline";
import AsciiBanner from "./AsciiBanner";

function appear(delay: number) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.35, delay },
  };
}

export default function Hero() {
  const { terminal, skills, name, socials } = portfolio;
  const github = socials.find((s) => s.label === "GitHub");
  const linkedin = socials.find((s) => s.label === "LinkedIn");

  return (
    <section className="relative h-[100svh] overflow-hidden">
      <span className="sr-only">{name}</span>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute inset-x-4 top-[14svh] bottom-[-6svh] md:inset-x-10 lg:inset-x-16"
      >
        <TerminalFrame>
          <div className="flex h-full flex-col px-5 py-7 font-mono text-[13px] leading-relaxed md:px-12 md:py-9 md:text-sm">
            {/* ASCII banner */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <AsciiBanner />
            </motion.div>

            {/* welcome box */}
            <motion.div
              {...appear(1)}
              className="relative mt-7 rounded-lg border border-dashed border-white/25"
            >
              <span className="absolute -top-2.5 left-4 bg-frame px-2 text-xs text-dim">
                {terminal.version}
              </span>
              <div className="grid md:grid-cols-[1fr_auto_1.1fr]">
                <div className="flex flex-col justify-center gap-3 p-5 md:p-6">
                  <GlowHeadline
                    className="text-[clamp(1.3rem,2.6vw,2.1rem)]"
                    delay={1.3}
                  />
                  <p className="text-xs text-muted">{terminal.modelLine}</p>
                </div>
                <div className="mx-2 hidden border-l border-dashed border-white/15 md:block" />
                <div className="border-t border-dashed border-white/15 p-5 md:border-t-0 md:p-6">
                  <p className="mb-2 text-dim">Recent Activity</p>
                  <table className="text-muted">
                    <tbody>
                      {terminal.recentActivity.map((item) => (
                        <tr key={item.what}>
                          <td className="whitespace-nowrap pr-5 align-top text-text/60">
                            {item.when}
                          </td>
                          <td className="pb-1">{item.what}</td>
                        </tr>
                      ))}
                      <tr>
                        <td />
                        <td className="pt-1 text-muted/60">
                          …/resume for more
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* available tools */}
            <motion.div {...appear(1.5)} className="mt-6">
              <p className="mb-2 text-dim">Available Tools</p>
              <div className="space-y-1">
                {skills.map((group) => (
                  <p key={group.category} className="text-muted">
                    <span className="inline-block w-44 text-text/60">
                      {group.category.toLowerCase()}:
                    </span>
                    {group.items.join(", ")}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* input line pinned to bottom */}
            <motion.div {...appear(2)} className="mt-auto pt-8">
              <a href="#work" className="group block">
                <div className="border-t border-line pt-4">
                  <p className="text-muted transition group-hover:text-text/80">
                    <span className="text-dim">&gt; </span>
                    {terminal.inputHint}
                    <motion.span
                      aria-hidden
                      animate={{ y: [0, 3, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="ml-2 inline-block"
                    >
                      ↓
                    </motion.span>
                    <span
                      aria-hidden
                      className="animate-cursor ml-2 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-dim"
                    />
                  </p>
                </div>
              </a>
              <p className="mt-2.5 pb-1 text-xs text-muted/70">
                {terminal.statusPrefix}
                {github && (
                  <>
                    {" · "}
                    <a
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 transition hover:text-text hover:underline"
                    >
                      /github
                    </a>{" "}
                    to fork
                  </>
                )}
                {linkedin && (
                  <>
                    {" · "}
                    <a
                      href={linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 transition hover:text-text hover:underline"
                    >
                      /linkedin
                    </a>{" "}
                    to chat
                  </>
                )}
              </p>
            </motion.div>
          </div>
        </TerminalFrame>
      </motion.div>
    </section>
  );
}
