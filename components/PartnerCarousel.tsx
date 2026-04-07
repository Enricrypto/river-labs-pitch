const partners = [
  { src: "/Washdog.png", alt: "Washdog" },
  { src: "/vtex-logo.png", alt: "VTEX" },
  { src: "/atakama-logo.jpg", alt: "Atakama" },
  { src: "/aws-logo.png", alt: "AWS" },
  { src: "/aashtoware-logo.png", alt: "AASHTOWare Bridge" },
];

export default function PartnerCarousel() {
  const doubled = [...partners, ...partners];

  return (
    <div
      className="mt-auto pt-4 overflow-hidden relative flex-shrink-0"
      style={{ borderTop: "1px solid var(--g100)" }}
    >
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, var(--white) 0%, transparent 100%)" }} />
      <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, var(--white) 0%, transparent 100%)" }} />

      <div
        className="flex gap-[60px] w-fit"
        style={{ animation: "scroll-left 40s linear infinite" }}
      >
        {doubled.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt={p.alt}
            className="h-[86px] w-[86px] object-contain object-center flex-shrink-0 grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition-all"
          />
        ))}
      </div>
    </div>
  );
}
