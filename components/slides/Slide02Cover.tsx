import SlideShell from "../SlideShell";

const team = [
  { img: "/Leonardo_PP.png", name: "Leonardo Werner", role: "Cultura, Pessoas & Governança" },
  { img: "/Enrique_PP.png", name: "Enrique Ibarra", role: "Engenheiro Full Stack | Blockchain" },
  { img: "/Antonio_PP.png", name: "Antonio Rapozo", role: "Dev & Soluções Tech" },
  { img: "/Joao_PP.png", name: "João Guilherme Santos", role: "Arquiteto de Soluções" },
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
        className="flex gap-[14px] flex-shrink-0 pt-[18px]"
        style={{ borderTop: "1px solid var(--g200)" }}
      >
        {team.map((m) => (
          <div key={m.name} className="flex items-center gap-[10px] flex-1">
            <img
              src={m.img}
              alt={m.name}
              className="w-[38px] h-[38px] rounded-full object-cover flex-shrink-0"
              style={{ border: "1.5px solid var(--g200)" }}
            />
            <div>
              <div className="font-[family-name:var(--font-jakarta)] text-[11.5px] font-semibold leading-[1.2]" style={{ color: "var(--g900)" }}>
                {m.name}
              </div>
              <div className="text-[10px] mt-[1px] leading-[1.3]" style={{ color: "var(--g500)" }}>
                {m.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
