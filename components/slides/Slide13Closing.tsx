import SlideShell from "../SlideShell";
import Logo from "../Logo";

export default function Slide13Closing({ total }: { total: number }) {
  return (
    <SlideShell slideNum={13} total={total} bg="var(--bg)">
      <div className="flex-1 flex flex-col justify-center gap-7" style={{ maxWidth: 700 }}>
        <div className="rounded-[20px] p-8" style={{ background: "var(--dark)" }}>
          <p
            className="font-[family-name:var(--font-playfair)] italic leading-[1.5] m-0"
            style={{ fontSize: "clamp(17px,2.2vw,24px)", color: "var(--white)" }}
          >
            Nosso objetivo é ser um{" "}
            <em style={{ color: "var(--green)", fontStyle: "normal" }}>parceiro contínuo</em>{" "}
            que pense, provoque e co-desenvolva soluções tecnológicas para o seu negócio.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Logo />
          <div className="w-px h-5" style={{ background: "var(--g200)" }} />
          <span className="text-[11px]" style={{ color: "var(--g500)" }}>
            www.riverlabs-ai.com
          </span>
        </div>
      </div>
    </SlideShell>
  );
}
