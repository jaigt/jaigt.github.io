import { portfolio } from "@/data/portfolio";
import PillNav from "./PillNav";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-bg via-bg/85 to-transparent px-5 pb-6 pt-4 md:px-8 md:pt-5">
      <div className="leading-tight">
        <p className="text-sm font-medium text-text">{portfolio.name}</p>
        <p className="text-xs text-muted">{portfolio.role}</p>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <PillNav />
      </div>

      <nav className="hidden items-center gap-4 text-sm sm:flex md:gap-6">
        {portfolio.socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/80 transition hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
          >
            {social.label} <span aria-hidden>↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
