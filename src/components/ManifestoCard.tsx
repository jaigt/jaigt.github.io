import { portfolio } from "@/data/portfolio";
import BentoCard from "./BentoCard";

export default function ManifestoCard({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <BentoCard className={`scroll-mt-24 ${className ?? ""}`} id={id}>
      <h2 className="mb-6 text-lg font-medium leading-snug">
        {portfolio.name}
        <span className="text-muted"> — {portfolio.bio}</span>
      </h2>
      <div className="space-y-4 border-t border-line pt-6">
        {portfolio.manifesto.map((line, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-text/85">
            {line}
          </p>
        ))}
      </div>
    </BentoCard>
  );
}
