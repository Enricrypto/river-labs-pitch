import SlideShell from "../SlideShell";

const sectors = [
  { label: "Logística", icon: "🚚", bg: "rgba(163,191,250,0.12)", color: "var(--blue-dark)" },
  { label: "Varejo / E-commerce", icon: "🏪", bg: "rgba(181,234,215,0.15)", color: "var(--green-dark)" },
  { label: "Serviços", icon: "🏢", bg: "rgba(215,189,226,0.15)", color: "var(--purple-dark)" },
  { label: "Compliance", icon: "⚖️", bg: "rgba(252,211,77,0.15)", color: "var(--amber-dark)" },
];

export default function Slide10Sectors({ total }: { total: number }) {
  return (
    <SlideShell slideNum={10} total={total}>
      <div className="flex-shrink-0 mb-4">
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium"
          style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "var(--g900)" }}
        >
          Setores de atuação
        </h2>
      </div>
      <div
        className="grid flex-1"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, width: "100%", maxWidth: 800, margin: "0 auto", alignContent: "center" }}
      >
        {sectors.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl flex flex-col items-center justify-center gap-3"
            style={{ padding: "24px 16px", border: "1px solid var(--g200)", background: "var(--white)" }}
          >
            <p
              className="font-[family-name:var(--font-jakarta)] text-sm font-semibold text-center"
              style={{ color: "var(--g900)" }}
            >
              {s.label}
            </p>
            <div
              className="flex items-center justify-center rounded-2xl"
              style={{ width: 72, height: 72, background: s.bg, fontSize: 36 }}
            >
              {s.icon}
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
