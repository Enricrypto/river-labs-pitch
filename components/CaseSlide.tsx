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

const metricStyles = {
  primary: { bg: "var(--dark)", valueColor: "var(--blue)", labelColor: "rgba(255,255,255,0.68)" },
  secondary: { bg: "var(--bg)", valueColor: "var(--g900)", labelColor: "var(--g600)", border: "1px solid var(--g200)" },
  tertiary: { bg: "rgba(181,234,215,0.1)", valueColor: "var(--green-dark)", labelColor: "var(--g600)", border: "1px solid rgba(181,234,215,0.28)" },
};

export default function CaseSlide({ slideNum, total, heading, tag, tagIcon, steps, note, metrics }: Props) {
  return (
    <SlideShell slideNum={slideNum} total={total}>
      <div className="flex-shrink-0 mb-5">
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium leading-[1.1]"
          style={{ fontSize: "clamp(26px,3.2vw,42px)", color: "var(--g900)" }}
        >
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-10 flex-1 items-start">
        {/* Left: steps */}
        <div>
          <div
            className="inline-flex items-center gap-[6px] rounded-full px-3 py-[5px] mb-[18px] font-[family-name:var(--font-jakarta)] text-[11px] font-semibold uppercase tracking-[0.08em]"
            style={{ background: "rgba(163,191,250,0.1)", border: "1px solid rgba(163,191,250,0.25)", color: "var(--blue-dark)" }}
          >
            <Icon icon={tagIcon} width={12} />
            {tag}
          </div>
          <div className="flex flex-col gap-[20px] pl-[18px]" style={{ borderLeft: "2px solid var(--g100)" }}>
            {steps.map((s) => (
              <div key={s.label}>
                <div className="font-[family-name:var(--font-jakarta)] text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--g400)" }}>
                  {s.label}
                </div>
                <div className="font-[family-name:var(--font-playfair)] text-[17px] font-medium leading-[1.2] mt-[3px]" style={{ color: "var(--g900)" }}>
                  {s.title}
                </div>
                <div className="text-[13px] leading-[1.55] mt-[3px]" style={{ color: "var(--g600)" }}>
                  {s.text}
                </div>
              </div>
            ))}
          </div>
          {note && (
            <div
              className="text-[11.5px] leading-[1.5] mt-[18px] px-[14px] py-[10px] rounded-r-lg"
              style={{ background: "rgba(163,191,250,0.07)", borderLeft: "2px solid var(--blue)", color: "var(--g600)" }}
            >
              {note}
            </div>
          )}
        </div>

        {/* Right: metrics */}
        <div className="flex flex-col gap-[12px]">
          {metrics.map((m) => {
            const s = metricStyles[m.variant];
            return (
              <div
                key={m.value}
                className="rounded-[14px] px-5 py-5 flex flex-col gap-[6px]"
                style={{ background: s.bg, border: (s as { border?: string }).border }}
              >
                <div
                  className="font-[family-name:var(--font-playfair)] leading-none tracking-[-0.03em]"
                  style={{ fontSize: m.variant === "primary" ? 54 : 34, color: s.valueColor }}
                >
                  {m.value}
                </div>
                <div className="text-[12.5px] leading-[1.4]" style={{ color: s.labelColor }}>
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
