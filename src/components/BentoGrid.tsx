"use client";

import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import { cardStagger } from "@/lib/motion";
import ManifestoCard from "./ManifestoCard";
import ProjectCard from "./ProjectCard";
import SkillsCard from "./SkillsCard";
import AIWorkflowCard from "./AIWorkflowCard";
import ContactCard from "./ContactCard";

export default function BentoGrid() {
  return (
    <section id="work" className="relative z-10 scroll-mt-16">
      <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 md-tall:px-10 md-tall:pt-[9svh] lg:md-tall:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-sm text-muted"
        >
          <span className="text-dim">&gt; </span>ls ./work
        </motion.p>
        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(9rem,auto)]"
        >
          <ManifestoCard id="info" className="md:col-span-3 md:row-span-2" />

          <AIWorkflowCard className="md:col-span-3 md:row-span-2" />

          {/* media projects pair up side by side; text-only ones get a full-width row */}
          {portfolio.projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              className={project.image ? "md:col-span-3" : "md:col-span-6"}
            />
          ))}

          <SkillsCard className="md:col-span-6" />

          <ContactCard className="md:col-span-6" />
        </motion.div>
      </div>
    </section>
  );
}
