import { portfolio } from "@/data/portfolio";
import BentoCard from "./BentoCard";

export default function ContactCard({ className }: { className?: string }) {
  return (
    <BentoCard
      className={`flex flex-col items-start justify-between gap-6 md:flex-row md:items-center ${className ?? ""}`}
    >
      <div>
        <h3 className="text-xl font-medium text-text md:text-2xl">
          Let&apos;s talk<span className="font-serif italic text-dim">.</span>
        </h3>
        <p className="mt-1 text-sm text-muted">
          Open to interesting projects, roles, and conversations.
        </p>
      </div>
      <a
        href={`mailto:${portfolio.email}`}
        className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm text-text transition hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        {portfolio.email}
      </a>
    </BentoCard>
  );
}
