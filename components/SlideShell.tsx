import Logo from "./Logo";

interface Props {
  slideNum: number;
  total: number;
  dark?: boolean;
  bg?: string;
  children: React.ReactNode;
}

function DotPattern({ id }: { id: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`dots-${id}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dots-${id})`} />
    </svg>
  );
}

export default function SlideShell({ slideNum, total, dark = false, bg, children }: Props) {
  return (
    <div
      className="w-full h-full flex flex-col relative overflow-hidden"
      style={{
        padding: "32px 48px",
        background: bg ?? (dark ? "var(--navy)" : "var(--white)"),
      }}
    >
      {dark && (
        <>
          <DotPattern id={slideNum} />
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              bottom: -80,
              right: -80,
              width: 384,
              height: 384,
              background: "rgba(99,102,241,0.2)",
              filter: "blur(100px)",
            }}
          />
        </>
      )}

      {/* Topbar */}
      <div className="relative z-10 flex items-center justify-between mb-5 flex-shrink-0">
        <Logo light={dark} />
        <span
          className="font-[family-name:var(--font-jakarta)] text-[10px] font-medium tracking-[0.06em]"
          style={{ color: dark ? "rgba(255,255,255,0.55)" : "var(--g400)" }}
        >
          {String(slideNum).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
