import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { box: "size-7", label: "text-[9px]", name: "text-base" },
  md: { box: "size-9", label: "text-[11px]", name: "text-xl" },
  lg: { box: "size-11", label: "text-xs", name: "text-2xl" },
};

export function BrandLogo({ className = "", href, size = "md" }: BrandLogoProps) {
  const s = sizes[size];

  const content = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className={`flex ${s.box} shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff9c4d] via-[#ff8c42] to-[#e67e22] shadow-[0_0_16px_rgba(255,140,66,0.35)] ring-1 ring-white/10`}
        aria-hidden
      >
        <span className={`${s.label} font-black tracking-[-0.5px] text-white`}>
          DTS
        </span>
      </div>
      <span className={`${s.name} font-bold tracking-[-0.5px] text-[var(--text-primary)]`}>
        DTS TECH <span className="text-[var(--accent-orange)]">INSIGHTS</span>
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
