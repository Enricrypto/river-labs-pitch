import SlideShell from "../SlideShell";

const METRICS = [
  { value: "1 mês", label: "para primeira página" },
  { value: "91%",   label: "redução em custos" },
  { value: "< 3h",  label: "por relatório" },
];

const CASES = [
  {
    tag: "Marketing · SEO",
    client: "Washdog",
    context:
      "Novo negócio de lavagem de pets entrando em um mercado saturado, sem presença digital, sem SEO e sem prova social.",
    result:
      "Primeira página no Google em menos de 1 mês e mais de 4.000 impressões orgânicas. Terceiro em buscas com AI (ChatGPT e Claude Code).",
  },
  {
    tag: "Automação · E-commerce",
    client: "VTEX",
    context:
      "As equipes gastavam 10 horas por RFP respondendo manualmente ~117 questões técnicas e de compliance - sem padronização, em EMEA, EUA, Brasil, LATAM e APAC.",
    result:
      "1.094 horas economizadas em 6 meses. $36,4k economizado vs. plataforma externa. 91% de redução no custo anual de ferramentas.",
  },
  {
    tag: "Automação · Engenharia",
    client: "Lumina",
    context:
      "Consultoria de engenharia de incêndio em Dubai. O processo de elaboração de relatórios especializados - coleta de documentos, referenciamento preciso e escrita estruturada - levava de 4 a 5 dias por caso.",
    result:
      "Menos de 3 horas por relatório. O sistema roda na infraestrutura deles. A equipe é dona do sistema.",
  },
];

function DotCluster({ id }: { id: string }) {
  return (
    <svg
      className="absolute top-6 right-0 w-full h-32 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`dots-${id}`} x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(99,102,241,0.28)" />
        </pattern>
        <radialGradient id={`fade-${id}`} cx="100%" cy="0%" r="80%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`mask-${id}`}>
          <rect width="100%" height="100%" fill={`url(#fade-${id})`} />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dots-${id})`} mask={`url(#mask-${id})`} />
    </svg>
  );
}

export default function Slide06Cases({ total }: { total: number }) {
  return (
    <SlideShell slideNum={5} total={total}>
      {/* Section header */}
      <div className="flex-shrink-0 mb-4">
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium tracking-tight text-gray-900 mb-1"
          style={{ fontSize: "clamp(24px,3.2vw,42px)" }}
        >
          Sistemas reais. Resultados medidos.
        </h2>
        <p className="text-gray-500" style={{ fontSize: "clamp(12px,1.3vw,16px)" }}>
          Três soluções para três setores distintos
        </p>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
        {CASES.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#EEF0FF] rounded-2xl flex flex-col relative overflow-hidden"
            style={{ padding: "clamp(14px,1.6vw,24px)" }}
          >
            <DotCluster id={`case-${idx}`} />

            {/* Top content — grows to push result to bottom */}
            <div
              className="relative z-10 flex flex-col flex-1"
              style={{ gap: "clamp(8px,1vw,16px)" }}
            >
              {/* Tag + client */}
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-mono font-bold tracking-widest uppercase text-indigo-300"
                  style={{ fontSize: "clamp(8px,0.8vw,11px)" }}
                >
                  {item.tag}
                </span>
                <h3
                  className="font-[family-name:var(--font-playfair)] font-medium text-gray-900"
                  style={{ fontSize: "clamp(16px,1.9vw,26px)" }}
                >
                  {item.client}
                </h3>
              </div>

              {/* Key metric */}
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-bold text-indigo-500 leading-none tracking-tight"
                  style={{ fontSize: "clamp(32px,4.4vw,58px)" }}
                >
                  {METRICS[idx]?.value}
                </span>
                <span
                  className="font-mono tracking-widest uppercase text-indigo-300"
                  style={{ fontSize: "clamp(7px,0.68vw,10px)", marginTop: 2 }}
                >
                  {METRICS[idx]?.label}
                </span>
              </div>

              {/* Problem */}
              <div className="flex flex-col gap-1">
                <span
                  className="font-mono font-bold tracking-widest uppercase text-gray-400"
                  style={{ fontSize: "clamp(7px,0.72vw,10px)" }}
                >
                  Problema
                </span>
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{ fontSize: "clamp(10px,1vw,14px)" }}
                >
                  {item.context}
                </p>
              </div>
            </div>

            {/* Result — pinned to bottom */}
            <div
              className="relative z-10 flex flex-col gap-1 border-t border-indigo-100"
              style={{
                paddingTop: "clamp(8px,0.8vw,12px)",
                marginTop: "clamp(8px,0.8vw,14px)",
              }}
            >
              <span
                className="font-mono font-bold tracking-widest uppercase text-gray-400"
                style={{ fontSize: "clamp(6px,0.62vw,9px)" }}
              >
                Resultado
              </span>
              <p
                className="font-semibold text-gray-800 leading-snug"
                style={{ fontSize: "clamp(9px,0.85vw,12px)" }}
              >
                {item.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
