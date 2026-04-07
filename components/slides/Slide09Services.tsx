import { Icon } from "@iconify/react";
import SlideShell from "../SlideShell";

const services = [
  {
    icon: "mdi:lightbulb-outline",
    iconColor: "var(--blue)",
    iconSize: 17,
    title: "AI Labs",
    desc: "Workshops de co-criação e capacitação para descobrir onde a IA gera valor real no seu contexto — com o time diretamente envolvido na operação.",
    featured: true,
  },
  {
    icon: "mdi:chart-line",
    iconColor: "var(--purple-dark)",
    iconSize: 15,
    title: "Inteligência de negócios",
    desc: "Identificamos onde sua operação pode melhorar e desenvolvemos soluções em software e IA para que você tome decisões com base em dados reais do seu negócio.",
    featured: false,
  },
  {
    icon: "mdi:code-braces",
    iconColor: "var(--blue-dark)",
    iconSize: 15,
    title: "Desenvolvimento",
    desc: "Soluções proprietárias que se encaixam nos seus sistemas atuais — sem migrações, sem dependência de SaaS. Com acompanhamento contínuo para evoluir junto com o seu negócio.",
    featured: false,
  },
];

export default function Slide09Services({ total }: { total: number }) {
  return (
    <SlideShell slideNum={9} total={total}>
      <div className="flex-shrink-0 mb-4">
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium"
          style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "var(--g900)" }}
        >
          Nossas linhas de atuação
        </h2>
      </div>
      <div className="grid flex-1" style={{ gridTemplateColumns: "1.15fr 1fr 1fr", gap: 12 }}>
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl flex flex-col gap-[9px] transition-all"
            style={{
              padding: 22,
              border: s.featured ? "none" : "1px solid var(--g200)",
              background: s.featured ? "var(--dark)" : "var(--white)",
            }}
          >
            <div
              className="w-8 h-8 rounded-[9px] flex items-center justify-center flex-shrink-0"
              style={{ background: s.featured ? "rgba(255,255,255,0.09)" : "var(--bg)" }}
            >
              <Icon icon={s.icon} width={s.iconSize} style={{ color: s.iconColor }} />
            </div>
            <h3
              className="font-[family-name:var(--font-jakarta)] font-semibold tracking-[-0.01em]"
              style={{
                fontSize: s.featured ? 19 : 17,
                color: s.featured ? "var(--white)" : "var(--g900)",
                marginTop: s.featured ? 6 : 0,
              }}
            >
              {s.title}
            </h3>
            <p
              className="text-sm leading-[1.55]"
              style={{ color: s.featured ? "rgba(255,255,255,0.68)" : "var(--g500)" }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
