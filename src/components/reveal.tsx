"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  as?: "div" | "section" | "footer";
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({
  as,
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const Component = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    const node = ref.current;
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Component
      ref={(node) => {
        ref.current = node;
      }}
      style={style}
      className={`${className} reveal ${mounted && !visible ? "reveal-hidden" : "reveal-visible"}`}
    >
      {children}
    </Component>
  );
}
