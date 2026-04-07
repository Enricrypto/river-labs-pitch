import { Icon } from "@iconify/react";
import SlideShell from "../SlideShell";

export default function Slide11Triad({ total }: { total: number }) {
  return (
    <SlideShell slideNum={11} total={total}>
      <div className="flex-shrink-0 mb-4">
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium"
          style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "var(--g900)" }}
        >
          Nossa abordagem
        </h2>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex-shrink-0" style={{ width: 620, height: 400 }}>
          {/* SVG lines */}
          <svg
            viewBox="0 0 380 270"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          >
            <polygon points="190,18 30,252 350,252" fill="none" stroke="rgba(163,191,250,0.18)" strokeWidth="1.5" strokeDasharray="6,4" />
            <line x1="190" y1="140" x2="190" y2="58" stroke="rgba(163,191,250,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="190" y1="140" x2="88" y2="222" stroke="rgba(181,234,215,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="190" y1="140" x2="292" y2="222" stroke="rgba(215,189,226,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
          </svg>

          {/* Center node */}
          <div
            className="absolute flex flex-col items-center justify-center gap-[3px] rounded-full z-10"
            style={{
              top: "50%", left: "50%", transform: "translate(-50%,-50%)",
              width: 72, height: 72,
              background: "var(--dark)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
            }}
          >
            <Icon icon="mdi:account-group-outline" width={20} style={{ color: "var(--blue)" }} />
            <span className="font-[family-name:var(--font-jakarta)] text-[10px] font-bold uppercase tracking-[0.1em] mt-[2px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Pessoas
            </span>
          </div>

          {/* Top: Co-criamos */}
          <TriadCard className="absolute left-1/2 top-0 -translate-x-1/2" label="Co-criamos" labelColor="var(--blue-dark)" text="Junto ao time da operação" />

          {/* Bottom-left: Capacitamos */}
          <TriadCard className="absolute left-0 bottom-0" label="Capacitamos" labelColor="var(--green-dark)" text="Treinamos o time para usar e evoluir a ferramenta" />

          {/* Bottom-right: Entregamos */}
          <TriadCard className="absolute right-0 bottom-0" label="Entregamos" labelColor="var(--purple-dark)" text="Uma ferramenta pronta para ser usada — na sua infraestrutura" />
        </div>
      </div>
    </SlideShell>
  );
}

function TriadCard({ className, label, labelColor, text }: { className: string; label: string; labelColor: string; text: string }) {
  return (
    <div
      className={`${className} rounded-xl text-center z-10`}
      style={{
        background: "var(--white)",
        border: "1px solid var(--g200)",
        padding: "10px 14px",
        minWidth: 116,
        maxWidth: 210,
        boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="font-[family-name:var(--font-jakarta)] text-[15px] font-bold uppercase tracking-[0.08em] mb-[3px]"
        style={{ color: labelColor }}
      >
        {label}
      </div>
      <div className="text-sm leading-[1.35]" style={{ color: "var(--g600)" }}>
        {text}
      </div>
    </div>
  );
}
