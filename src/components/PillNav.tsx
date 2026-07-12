"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PillNav() {
  const pathname = usePathname();
  const onResume = pathname.startsWith("/resume");

  const itemClass = (active: boolean) =>
    `relative z-10 rounded-full px-5 py-1.5 text-sm transition-colors duration-300 ${
      active ? "text-text" : "text-muted hover:text-text"
    }`;

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
      {/* plain <a>: hash-only navigation must bypass the Next router — with
          static export + trailingSlash the router re-encodes the current hash
          and stacks #work%23work on every click */}
      <a href="/#work" className={itemClass(!onResume)}>
        Work
      </a>
      <Link href="/resume" className={itemClass(onResume)}>
        Resume
      </Link>
    </nav>
  );
}
