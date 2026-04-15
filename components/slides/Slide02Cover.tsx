import SlideShell from "../SlideShell";

const team = [
  { img: "/Leonardo_PP.png", name: "Leonardo Werner", role: "Cultura, Pessoas & Governança" },
  { img: "/Joao_PP.png", name: "João Guilherme Santos", role: "Arquiteto de Soluções" },
  { img: "/Antonio_PP.png", name: "Antonio Rapozo", role: "Dev & Soluções Tech" },
  { img: "/Enrique_PP.png", name: "Enrique Ibarra", role: "Engenheiro Full Stack | Blockchain" },
];

export default function Slide02Cover({ total }: { total: number }) {
  return (
    <SlideShell slideNum={2} total={total} bg="var(--bg)">
      <div className="flex-1 flex flex-col justify-center py-4">
        <h1
          className="font-[family-name:var(--font-playfair)] font-medium leading-[1.1] tracking-[-0.025em] mb-[14px]"
          style={{ fontSize: "clamp(30px,4.2vw,52px)", color: "var(--g900)", maxWidth: 620 }}
        >
          Transformação digital que começa{" "}
          <em style={{ color: "var(--g500)", fontStyle: "italic" }}>pelas pessoas,</em> não pela ferramenta.
        </h1>
      </div>
      <div
        className="flex gap-[20px] flex-shrink-0 pt-[22px]"
        style={{ borderTop: "1px solid #E0E7FF" }}
      >
        {team.map((m) => (
          <div key={m.name} className="flex items-center gap-[14px] flex-1">
            <img
              src={m.img}
              alt={m.name}
              className="rounded-full object-cover flex-shrink-0"
              style={{ width: 52, height: 52, border: "1.5px solid #E0E7FF" }}
            />
            <div>
              <div
                className="font-[family-name:var(--font-jakarta)] font-semibold leading-[1.2]"
                style={{ fontSize: 14, color: "var(--g900)" }}
              >
                {m.name}
              </div>
              <div
                className="mt-[3px] leading-[1.3]"
                style={{ fontSize: 12, color: "var(--g500)" }}
              >
                {m.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
