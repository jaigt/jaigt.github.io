import Image from "next/image";
import type { Project } from "@/data/portfolio";
import BentoCard from "./BentoCard";

export default function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  // without media the card spans the full grid row, so lay it out horizontally
  const wide = !project.image;

  return (
    <BentoCard
      className={`flex flex-col ${wide ? "md:flex-row md:items-end md:justify-between md:gap-12" : ""} ${className ?? ""}`}
    >
      {project.image && (
        <div className="relative mb-5 aspect-video overflow-hidden rounded-xl border border-line">
          {project.image.endsWith(".webm") || project.image.endsWith(".mp4") ? (
            <video
              src={project.image}
              autoPlay
              muted
              loop
              playsInline
              aria-label={project.imageAlt ?? `Demo of ${project.title}`}
              className="absolute inset-0 size-full object-cover object-top"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.imageAlt ?? `Screenshot of ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              unoptimized={project.image.endsWith(".gif")}
              className="object-cover object-top"
            />
          )}
        </div>
      )}
      <div className={wide ? "max-w-3xl" : "flex flex-1 flex-col"}>
        <h3 className="text-base font-medium text-text">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
      <div className={wide ? "md:shrink-0" : ""}>
        <div
          className={`mt-4 flex flex-wrap gap-1.5 ${wide ? "md:justify-end" : ""}`}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-0.5 text-xs text-dim"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className={`mt-4 flex gap-4 text-sm ${wide ? "md:justify-end" : ""}`}
        >
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/80 underline-offset-4 transition hover:text-text hover:underline"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/80 underline-offset-4 transition hover:text-text hover:underline"
            >
              Live <span aria-hidden>↗</span>
            </a>
          )}
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/80 underline-offset-4 transition hover:text-text hover:underline"
            >
              Website <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </BentoCard>
  );
}
