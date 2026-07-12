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
  const featured = portfolio.projects.filter((p) => p.featured);
  const rest = portfolio.projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-16">
      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 pb-24 pt-8 md:grid-cols-6 md:auto-rows-[minmax(9rem,auto)]"
      >
        <ManifestoCard id="info" className="md:col-span-3 md:row-span-3" />

        {featured[0] && (
          <ProjectCard
            project={featured[0]}
            className="md:col-span-3 md:row-span-3"
          />
        )}

        {featured.slice(1).map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            className="md:col-span-3 md:row-span-2"
          />
        ))}

        {rest.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            className="md:col-span-3 md:row-span-2"
          />
        ))}

        <AIWorkflowCard className="md:col-span-3 md:row-span-2" />

        <SkillsCard className="md:col-span-6" />

        <ContactCard className="md:col-span-6" />
      </motion.div>
    </section>
  );
}
