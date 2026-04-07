import SlideShell from "../SlideShell";

export default function Slide03Accel({ total }: { total: number }) {
  return (
    <SlideShell slideNum={3} total={total}>
      <div className="flex-1 flex flex-col justify-center gap-6" style={{ maxWidth: 680 }}>
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium leading-[1.1] tracking-[-0.025em]"
          style={{ fontSize: "clamp(30px,4.2vw,52px)", color: "var(--g900)" }}
        >
          Aceleração Tecnológica Forçada
        </h2>
      </div>
    </SlideShell>
  );
}
