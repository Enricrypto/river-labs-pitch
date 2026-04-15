import SlideShell from "../SlideShell";
import Logo from "../Logo";

export default function Slide13Closing({ total }: { total: number }) {
  return (
    <SlideShell slideNum={10} total={total} bg="var(--bg)">
      <div className="flex-1 flex flex-col justify-center gap-5">
        <div
          className="self-center w-full rounded-[20px] p-12 relative overflow-hidden flex flex-col justify-center"
          style={{ background: "#0F1D56", maxWidth: 820 }}
        >
          {/* Dot pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="closing-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#closing-dots)" />
          </svg>
          {/* Glow blob */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{ bottom: -80, right: -80, width: 384, height: 384, background: "rgba(99,102,241,0.2)", filter: "blur(100px)" }}
          />
          <p
            className="relative z-10 font-[family-name:var(--font-playfair)] italic leading-[1.5] m-0"
            style={{ fontSize: "clamp(20px,2.6vw,30px)", color: "#fafafa", maxWidth: 740 }}
          >
            Nosso objetivo é ser um{" "}
            <em style={{ color: "#A5B4FC", fontStyle: "normal" }}>parceiro contínuo</em>{" "}
            que pense, provoque e co-desenvolva soluções tecnológicas para o seu negócio.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
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
