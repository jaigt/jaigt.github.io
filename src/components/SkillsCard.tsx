import { portfolio } from "@/data/portfolio";
import BentoCard from "./BentoCard";

export default function SkillsCard({ className }: { className?: string }) {
  return (
    <BentoCard className={className}>
      <h3 className="text-base font-medium text-text">Skills</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {portfolio.skills.map((group) => (
          <div key={group.category}>
            <p className="mb-2 text-xs uppercase tracking-wider text-muted">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line px-2.5 py-0.5 text-xs text-dim"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
