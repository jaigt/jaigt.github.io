export default function TerminalFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-frame shadow-frame">
      <div className="relative flex h-9 shrink-0 items-center justify-center border-b border-line bg-[#1a1a1a] px-4">
        <span className="font-mono text-xs text-muted">
          jai@nyc — agent-harness — 120×32
        </span>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
