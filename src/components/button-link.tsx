import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-clay-600 text-white hover:bg-clay-700 border-clay-600 shadow-sm hover:shadow-card",
  secondary:
    "bg-navy-950 text-white hover:bg-navy-800 border-navy-950 shadow-sm hover:shadow-card",
  outline:
    "bg-white/80 text-navy-950 hover:bg-sand-50 border-stonebrand-200 hover:border-clay-500/40",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition duration-200 ease-out active:translate-y-px ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
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

