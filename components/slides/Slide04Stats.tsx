import SlideShell from "../SlideShell";

function DotCluster({ id }: { id: string }) {
  return (
    <svg
      className="absolute top-6 right-0 w-full h-36 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`dots-${id}`} x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(165,180,252,0.2)" />
        </pattern>
        <radialGradient id={`fade-${id}`} cx="100%" cy="0%" r="70%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="55%"  stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`mask-${id}`}>
          <rect width="100%" height="100%" fill={`url(#fade-${id})`} />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dots-${id})`} mask={`url(#mask-${id})`} />
    </svg>
  );
}

const stats = [
  {
    num: "88%",
    color: "#6366F1",
    label: <>das empresas dizem usar IA — mas só <strong style={{ color: "rgba(255,255,255,0.95)" }}>6%</strong> se consideram high performers em captura de valor real.</>,
    source: "McKinsey Global Survey on AI, 2025",
  },
  {
    num: "70%",
    color: "#818CF8",
    label: <>das iniciativas de transformação digital falham em atingir seus objetivos.</>,
    source: "McKinsey / Gartner, 2025–2026",
  },
  {
    num: "+80%",
    color: "#A5B4FC",
    label: <>dos projetos de IA ficam presos em pilotos que nunca chegam à operação real.</>,
    source: "MIT / RAND, via LinkedIn",
  },
];

export default function Slide04Stats({ total }: { total: number }) {
  return (
    <SlideShell slideNum={4} total={total} dark>
      <div className="pt-4 mb-8 flex-shrink-0">
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium leading-[1.1]"
          style={{ fontSize: "clamp(28px,4vw,48px)", color: "var(--white)", maxWidth: 620 }}
        >
          A tecnologia está aí.<br />
          <em style={{ color: "var(--blue)", fontStyle: "italic" }}>A estratégia, não necessariamente.</em>
        </h2>
      </div>
      <div className="flex-1 flex items-center">
        <div
          className="grid grid-cols-3 rounded-[14px] overflow-hidden w-full"
          style={{ gap: 1, background: "rgba(99,102,241,0.15)" }}
        >
        {stats.map((s, i) => (
          <div
            key={s.num}
            className="flex flex-col justify-between relative overflow-hidden"
            style={{ background: "rgba(99,102,241,0.18)", padding: "24px 22px", border: "1px solid rgba(99,102,241,0.25)" }}
          >
            <DotCluster id={`stat-${i}`} />
            <div className="relative z-10">
              <div
                className="font-[family-name:var(--font-playfair)] font-medium leading-none tracking-[-0.04em]"
                style={{ fontSize: "clamp(44px,6vw,76px)", color: s.color }}
              >
                {s.num}
              </div>
              <div className="text-[15px] leading-[1.55] mt-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                {s.label}
              </div>
            </div>
            <div className="relative z-10 text-[11px] italic mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              {s.source}
            </div>
          </div>
        ))}
        </div>
      </div>
    </SlideShell>
  );
}
