export default function BrowserFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-frame shadow-frame">
      <div className="relative flex h-8 shrink-0 items-center bg-gradient-to-b from-[#d8d8d8] via-[#b8b8b8] to-[#8f8f8f] px-4 md:h-9">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span
          aria-hidden
          className="absolute right-4 text-lg leading-none text-black/30"
        >
          +
        </span>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
