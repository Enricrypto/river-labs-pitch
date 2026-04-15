import { Icon } from "@iconify/react";
import SlideShell from "./SlideShell";
import PartnerCarousel from "./PartnerCarousel";

interface CaseStep {
  label: string;
  title: string;
  text: string;
}

interface Metric {
  value: string;
  label: string;
  variant: "primary" | "secondary" | "tertiary";
}

interface Props {
  slideNum: number;
  total: number;
  heading: string;
  tag: string;
  tagIcon: string;
  steps: CaseStep[];
  note?: React.ReactNode;
  metrics: Metric[];
}

function DotCluster({ id, dark = false }: { id: string; dark?: boolean }) {
  const dotColor = dark ? "rgba(255,255,255,0.18)" : "rgba(99,102,241,0.28)";
  return (
    <svg
      className="absolute top-6 right-0 w-full h-24 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`dots-${id}`} x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill={dotColor} />
        </pattern>
        <radialGradient id={`fade-${id}`} cx="100%" cy="0%" r="80%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="0.4" />
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

const metricStyles = {
  primary: { bg: "#0F1D56", valueColor: "#A5B4FC", labelColor: "rgba(255,255,255,0.6)" },
  secondary: { bg: "#EEF0FF", valueColor: "#6366F1", labelColor: "#6B7280", border: "1px solid #E0E7FF" },
  tertiary: { bg: "linear-gradient(135deg, #EEF0FF 0%, #EDE8FF 100%)", valueColor: "#4F46E5", labelColor: "#6B7280", border: "1px solid #E0E7FF" },
};

export default function CaseSlide({ slideNum, total, heading, tag, tagIcon, steps, note, metrics }: Props) {
  return (
    <SlideShell slideNum={slideNum} total={total}>
      {/* Heading */}
      <div className="flex-shrink-0 mb-5 pt-4">
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium leading-[1.1]"
          style={{ fontSize: "clamp(26px,3.2vw,42px)", color: "var(--g900)" }}
        >
          {heading}
        </h2>
      </div>

      {/* Main grid — natural flow, left-aligned */}
      <div className="grid grid-cols-2 gap-10 flex-1 items-center">

        {/* Left column */}
        <div>
          {/* Tag pill */}
          <div
            className="inline-flex items-center gap-[6px] rounded-full px-3 py-[5px] mb-[18px] font-mono text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#A5B4FC" }}
          >
            <Icon icon={tagIcon} width={12} />
            {tag}
          </div>

          {/* Steps */}
          <div
            className="flex flex-col gap-[22px] pl-5"
            style={{ borderLeft: "2px solid #E0E7FF" }}
          >
            {steps.map((s) => (
              <div key={s.label}>
                <div
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] mb-[4px]"
                  style={{ color: "#9CA3AF" }}
                >
                  {s.label}
                </div>
                <div
                  className="font-[family-name:var(--font-playfair)] font-medium leading-[1.2] mb-[5px]"
                  style={{ fontSize: 18, color: "var(--g900)" }}
                >
                  {s.title}
                </div>
                <div
                  className="leading-[1.6]"
                  style={{ fontSize: 13, color: "var(--g600)" }}
                >
                  {s.text}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          {note && (
            <div
              className="leading-[1.5] mt-5 px-[14px] py-[10px] rounded-r-lg"
              style={{
                fontSize: 11.5,
                background: "rgba(99,102,241,0.07)",
                borderLeft: "2px solid #6366F1",
                color: "var(--g600)",
              }}
            >
              {note}
            </div>
          )}
        </div>

        {/* Right column: metric cards, natural sizing */}
        <div className="flex flex-col gap-[10px]">
          {metrics.map((m) => {
            const s = metricStyles[m.variant];
            return (
              <div
                key={m.value}
                className="rounded-[14px] px-5 py-5 flex flex-col gap-[6px] relative overflow-hidden"
                style={{ background: s.bg, border: (s as { border?: string }).border }}
              >
                <DotCluster id={`${slideNum}-${m.variant}`} dark={m.variant === "primary"} />
                <div
                  className="relative z-10 font-[family-name:var(--font-playfair)] leading-none tracking-[-0.03em]"
                  style={{ fontSize: m.variant === "primary" ? 52 : 34, color: s.valueColor }}
                >
                  {m.value}
                </div>
                <div
                  className="relative z-10 leading-[1.4]"
                  style={{ fontSize: 13, color: s.labelColor }}
                >
                  {m.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <PartnerCarousel />
    </SlideShell>
  );
}
