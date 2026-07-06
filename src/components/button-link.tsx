"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { AnalyticsEventName, AnalyticsParams } from "@/lib/analytics";
import { trackEvent } from "@/lib/analytics";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
  eventName?: AnalyticsEventName;
  eventParams?: AnalyticsParams;
};

const variants = {
  primary:
    "bg-clay-600 text-white hover:bg-graphite-950 border-clay-600 shadow-none",
  secondary:
    "bg-graphite-950 text-white hover:bg-clay-600 border-graphite-950 shadow-none",
  outline:
    "bg-white text-graphite-950 hover:bg-graphite-950 hover:text-white border-stonebrand-200 hover:border-graphite-950 shadow-none",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  eventName,
  eventParams,
}: ButtonLinkProps) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold tracking-tight transition duration-200 ease-out active:translate-y-px ${variants[variant]} ${className}`;
  const handleClick = () => {
    if (eventName) {
      trackEvent(eventName, eventParams);
    }
  };

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {children}
    </Link>
  );
}
