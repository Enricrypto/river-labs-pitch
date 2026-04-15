import SlideShell from "../SlideShell";

const options = [
  { letter: "A", text: "Ainda estamos avaliando se faz sentido investir" },
  { letter: "B", text: "Já usamos algumas ferramentas, mas de forma dispersa" },
  { letter: "C", text: "Há uma iniciativa em andamento que precisa de estrutura" },
  { letter: "D", text: "Queremos implementar algo novo e não sabemos por onde começar" },
];

export default function Slide01Opening({ total }: { total: number }) {
  return (
    <SlideShell slideNum={1} total={total} bg="var(--bg)">
      <div className="flex-1 flex flex-col justify-center items-center">
        <p
          className="font-[family-name:var(--font-playfair)] font-medium leading-[1.2] mb-5 text-center"
          style={{ fontSize: "clamp(22px,3vw,38px)", color: "var(--g900)", maxWidth: 620 }}
        >
          Qual é o momento da sua empresa em relação à tecnologia?
        </p>
        <div className="flex flex-col gap-2" style={{ maxWidth: 600 }}>
          {options.map((o) => (
            <div
              key={o.letter}
              className="flex items-start gap-[9px] px-[14px] py-3 rounded-[11px] border cursor-default transition-all"
              style={{ borderColor: "#E0E7FF", background: "var(--white)" }}
            >
              <span
                className="font-[family-name:var(--font-jakarta)] text-[10px] font-bold rounded-[5px] px-[6px] py-[2px] flex-shrink-0 mt-[1px]"
                style={{ color: "#6366F1", background: "rgba(99,102,241,0.12)" }}
              >
                {o.letter}
              </span>
              <span className="text-[13px] leading-[1.4]" style={{ color: "var(--g700)" }}>
                {o.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
