export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-[10px]">
      <svg
        viewBox="0 0 64 64"
        className="w-[26px] h-[26px] flex-shrink-0"
        fill="none"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={light ? "rgba(255,255,255,0.8)" : "var(--g900)"}
      >
        <path d="M10 24 Q21 8 32 24 T54 24" />
        <path d="M10 40 Q21 24 32 40 T54 40" />
      </svg>
      <span
        className="font-[family-name:var(--font-jakarta)] text-[17px] font-medium tracking-[-0.01em]"
        style={{ color: light ? "rgba(255,255,255,0.8)" : "var(--g900)" }}
      >
        River Labs
      </span>
    </div>
  );
}
