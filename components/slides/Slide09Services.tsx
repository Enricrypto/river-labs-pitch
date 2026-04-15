import { Icon } from "@iconify/react";
import SlideShell from "../SlideShell";

const services = [
  {
    icon: "mdi:lightbulb-outline",
    iconColor: "#ffffff",
    iconSize: 17,
    title: "AI Labs",
    desc: "Workshops de co-criação e capacitação para descobrir onde a IA gera valor real no seu contexto — com o time diretamente envolvido na operação.",
    featured: true,
  },
  {
    icon: "mdi:chart-line",
    iconColor: "#ffffff",
    iconSize: 15,
    title: "Inteligência de negócios",
    desc: "Identificamos onde sua operação pode melhorar e desenvolvemos soluções em software e IA para que você tome decisões com base em dados reais do seu negócio.",
    featured: false,
  },
  {
    icon: "mdi:code-braces",
    iconColor: "#ffffff",
    iconSize: 15,
    title: "Desenvolvimento",
    desc: "Soluções proprietárias que se encaixam nos seus sistemas atuais — sem migrações, sem dependência de SaaS. Com acompanhamento contínuo para evoluir junto com o seu negócio.",
    featured: false,
  },
];

export default function Slide09Services({ total }: { total: number }) {
  return (
    <SlideShell slideNum={9} total={total}>
      <div className="flex-shrink-0 mb-5 pt-4">
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium"
          style={{ fontSize: "clamp(26px,3.2vw,42px)", color: "var(--g900)" }}
        >
          Nossas linhas de atuação
        </h2>
      </div>
      <div className="flex-1 flex items-center">
        <div className="grid w-full" style={{ gridTemplateColumns: "1.15fr 1fr 1fr", gap: 14 }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl flex flex-col gap-[10px] transition-all"
              style={{
                padding: "20px 22px",
                background: s.featured
                  ? "linear-gradient(135deg, #EEF0FF 0%, #EDE8FF 100%)"
                  : "linear-gradient(135deg, #F0EBFF 0%, #EEF0FF 100%)",
                border: s.featured ? "none" : "1px solid #E0E7FF",
                borderTop: s.featured ? "3px solid #6366F1" : undefined,
              }}
            >
              <div
                className="w-8 h-8 rounded-[9px] flex items-center justify-center flex-shrink-0"
                style={{ background: "#4F46E5" }}
              >
                <Icon icon={s.icon} width={s.iconSize} style={{ color: s.iconColor }} />
              </div>
              <h3
                className="font-[family-name:var(--font-jakarta)] font-semibold tracking-[-0.01em]"
                style={{
                  fontSize: 18,
                  color: "var(--g900)",
                  marginTop: 0,
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-[14px] leading-[1.55]"
                style={{ color: "var(--g500)" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
