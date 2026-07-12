import { portfolio } from "@/data/portfolio";
import BentoCard from "./BentoCard";

export default function AIWorkflowCard({ className }: { className?: string }) {
  const { title, intro, items, outro } = portfolio.aiWorkflow;

  return (
    <BentoCard className={className}>
      <h3 className="text-base font-medium text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{intro}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.name} className="text-sm leading-relaxed">
            <span className="font-mono text-xs text-dim">▸ </span>
            <span className="text-text/90">{item.name}</span>
            <span className="text-muted"> — {item.description}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-line pt-4 text-sm italic leading-relaxed text-muted">
        {outro}
      </p>
    </BentoCard>
  );
}
