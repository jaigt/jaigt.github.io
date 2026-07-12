"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Work", href: "/#work" },
  { label: "Resume", href: "/resume" },
] as const;

export default function PillNav() {
  const pathname = usePathname();
  const onResume = pathname.startsWith("/resume");

  return (
    <nav
      aria-label="Section navigation"
      className="relative flex items-center rounded-full border border-line bg-frame p-1 shadow-card"
    >
      <span
        aria-hidden
        className="absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full bg-white/10 transition-transform duration-300 ease-out"
        style={{
          transform: onResume ? "translateX(100%)" : "translateX(0)",
        }}
      />
      {items.map((item) => {
        const active = item.href === "/resume" ? onResume : !onResume;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative z-10 rounded-full px-5 py-1.5 text-sm transition-colors duration-300 ${
              active ? "text-text" : "text-muted hover:text-text"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
