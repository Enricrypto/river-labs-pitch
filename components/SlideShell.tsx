import Logo from "./Logo";

interface Props {
  slideNum: number;
  total: number;
  dark?: boolean;
  bg?: string;
  children: React.ReactNode;
}

export default function SlideShell({ slideNum, total, dark = false, bg, children }: Props) {
  return (
    <div
      className="w-full h-full flex flex-col"
      style={{
        padding: "32px 48px",
        background: bg ?? (dark ? "var(--dark)" : "var(--white)"),
      }}
    >
      {/* Topbar */}
      <div className="flex items-center justify-between mb-5 flex-shrink-0">
        <Logo light={dark} />
        <span
          className="font-[family-name:var(--font-jakarta)] text-[10px] font-medium tracking-[0.06em]"
          style={{ color: dark ? "rgba(255,255,255,0.55)" : "var(--g400)" }}
        >
          {String(slideNum).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
