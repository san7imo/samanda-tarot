import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

const variants: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary: "bg-gold text-plum shadow-[0_14px_30px_-18px_rgba(244,195,137,0.85)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-18px_rgba(244,195,137,0.75)]",
  secondary:
    "border-gold/70 text-gold hover:bg-gold/10 hover:-translate-y-0.5",
  ghost: "text-gold hover:bg-gold/10",
};

const sizes: Record<NonNullable<CTAButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-4 text-sm",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: CTAButtonProps) {
  const isExternal = external ?? href.startsWith("http");
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
