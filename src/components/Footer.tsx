import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 text-center text-xs text-muted">
      <p>
        © {new Date().getFullYear()} {portfolio.name} · Built with Next.js
      </p>
    </footer>
  );
}
