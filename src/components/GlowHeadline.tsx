"use client";

import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function GlowHeadline({
  className = "text-[clamp(2rem,7vw,4.5rem)]",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const { lines, accent } = portfolio.headline;
  const lastIndex = lines.length - 1;

  return (
    <motion.h1
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.12, delayChildren: delay }}
      className={`font-sans font-medium leading-[1.1] tracking-tight text-text ${className}`}
    >
      {lines.map((line, i) => (
        <motion.span key={i} variants={fadeUp} className="block text-glow">
          {line}
          {i === lastIndex && (
            <span className="font-serif italic tracking-normal text-dim text-glow-dim">
              {accent}
            </span>
          )}
        </motion.span>
      ))}
    </motion.h1>
  );
}
