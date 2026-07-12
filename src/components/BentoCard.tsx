"use client";

import { motion } from "motion/react";
import { cardReveal } from "@/lib/motion";

export default function BentoCard({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      variants={cardReveal}
      className={`rounded-3xl border border-line bg-surface p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-surface-hover hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] md:p-7 ${className}`}
    >
      {children}
    </motion.div>
  );
}
