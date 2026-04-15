import SlideShell from "../SlideShell";

export default function Slide05Bridge({ total }: { total: number }) {
  return (
    <SlideShell slideNum={5} total={total}>
      <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: 680 }}>
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium leading-[1.05] tracking-[-0.025em]"
          style={{ fontSize: "clamp(36px,5.5vw,64px)", color: "var(--g900)" }}
        >
          Sistemas reais. Resultados medidos.
        </h2>
        <p
          className="mt-4 font-(family-name:--font-jakarta)"
          style={{ fontSize: "clamp(14px,1.4vw,18px)", color: "var(--g500)" }}
        >
          Três soluções para três setores distintos.
        </p>
      </div>
    </SlideShell>
  );
}
