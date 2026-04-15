import { Icon } from "@iconify/react";
import SlideShell from "../SlideShell";

const steps = [
  { num: "01", title: "Descoberta", deliverable: "Mapa de processo", bg: "rgba(99,102,241,0.07)", border: "rgba(99,102,241,0.2)", icon: "mdi:magnify", iconColor: "#6366F1", iconBg: "rgba(99,102,241,0.15)" },
  { num: "02", title: "Diagnóstico", deliverable: "Matriz de casos", bg: "rgba(99,102,241,0.07)", border: "rgba(99,102,241,0.2)", icon: "mdi:chart-bar", iconColor: "#6366F1", iconBg: "rgba(99,102,241,0.15)" },
  { num: "03", title: "Design da solução", deliverable: "Plano de arquitetura", bg: "rgba(99,102,241,0.07)", border: "rgba(99,102,241,0.2)", icon: "mdi:cpu-64-bit", iconColor: "#6366F1", iconBg: "rgba(99,102,241,0.15)" },
  { num: "04", title: "Piloto", deliverable: "Protótipo + métricas", bg: "rgba(99,102,241,0.07)", border: "rgba(99,102,241,0.2)", icon: "mdi:rocket-launch-outline", iconColor: "#6366F1", iconBg: "rgba(99,102,241,0.15)" },
  { num: "05", title: "Deploy & Otimização", deliverable: "Sistema em produção", bg: "rgba(99,102,241,0.07)", border: "rgba(99,102,241,0.2)", icon: "mdi:trending-up", iconColor: "#6366F1", iconBg: "rgba(99,102,241,0.15)" },
];

export default function Slide12Process({ total }: { total: number }) {
  return (
    <SlideShell slideNum={9} total={total}>
      <div className="flex-shrink-0 mb-4 pt-4">
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium"
          style={{ fontSize: "clamp(26px,3.2vw,42px)", color: "var(--g900)" }}
        >
          Passo a passo da jornada
        </h2>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-[14px]">
        <div
          className="flex items-stretch gap-[6px] rounded-[18px] flex-shrink-0"
          style={{ background: "var(--white)", border: "1px solid var(--g100)", padding: 14, boxShadow: "0 2px 18px rgba(0,0,0,0.04)" }}
        >
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-stretch gap-[6px] flex-1">
              <div
                className="flex-1 rounded-xl flex flex-col gap-[6px] cursor-default"
                style={{ padding: "12px 10px", background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: s.iconBg }}>
                  <Icon icon={s.icon} width={14} style={{ color: s.iconColor }} />
                </div>
                <div className="font-[family-name:var(--font-jakarta)] text-[10px] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--g700)" }}>
                  {s.num}
                </div>
                <div className="font-[family-name:var(--font-jakarta)] text-[13px] font-bold leading-[1.2]" style={{ color: "var(--g800)" }}>
                  {s.title}
                </div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.06em] mt-auto pt-[6px]"
                  style={{ color: "var(--g600)", borderTop: `1px solid ${s.border}` }}
                >
                  {s.deliverable}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center flex-shrink-0" style={{ color: "var(--g300)" }}>
                  <Icon icon="mdi:chevron-right" width={11} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
