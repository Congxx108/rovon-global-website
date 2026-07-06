import { socialLinks } from "@/data/site";

type SocialLinksProps = {
  label?: string;
  tone?: "dark" | "light";
  className?: string;
};

type SocialIconProps = {
  icon: string;
  className?: string;
  tone?: "dark" | "light";
};

function SocialIcon({ icon, className = "h-4 w-4", tone = "dark" }: SocialIconProps) {
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
        <path d="M14 8.1h2.2V4.5A14.5 14.5 0 0 0 13 4.3c-3.1 0-5.1 1.9-5.1 5.3v3H4.5v4h3.4V24H12v-7.4h3.3l.5-4H12V10c0-1.2.3-1.9 2-1.9Z" fill="#1877F2" />
      </svg>
    );
  }

  if (icon === "tiktok") {
    const mainFill = tone === "light" ? "#ffffff" : "#111111";
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
        <path d="M15.3 3.9c.5 2.3 1.9 3.8 4.1 4v3.2a7 7 0 0 1-3.9-1.2v6.1c0 3.6-2.4 5.9-5.8 5.9-3 0-5.5-2.1-5.5-5.2 0-3.4 2.7-5.5 6.1-5.1v3.4c-1.3-.3-2.4.3-2.4 1.5 0 .9.7 1.5 1.8 1.5 1.3 0 2-.8 2-2.4V3.9h3.6Z" fill="#25F4EE" opacity="0.9" transform="translate(-.7 .45)" />
        <path d="M15.3 3.9c.5 2.3 1.9 3.8 4.1 4v3.2a7 7 0 0 1-3.9-1.2v6.1c0 3.6-2.4 5.9-5.8 5.9-3 0-5.5-2.1-5.5-5.2 0-3.4 2.7-5.5 6.1-5.1v3.4c-1.3-.3-2.4.3-2.4 1.5 0 .9.7 1.5 1.8 1.5 1.3 0 2-.8 2-2.4V3.9h3.6Z" fill="#FE2C55" opacity="0.9" transform="translate(.7 -.35)" />
        <path d="M15.3 3.9c.5 2.3 1.9 3.8 4.1 4v3.2a7 7 0 0 1-3.9-1.2v6.1c0 3.6-2.4 5.9-5.8 5.9-3 0-5.5-2.1-5.5-5.2 0-3.4 2.7-5.5 6.1-5.1v3.4c-1.3-.3-2.4.3-2.4 1.5 0 .9.7 1.5 1.8 1.5 1.3 0 2-.8 2-2.4V3.9h3.6Z" fill={mainFill} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="#E4405F" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="#E4405F" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.4" r="1" fill="#E4405F" />
    </svg>
  );
}

export function SocialLinks({ label, tone = "dark", className = "" }: SocialLinksProps) {
  const visibleLinks = socialLinks.filter((item) => item.href);

  if (visibleLinks.length === 0) {
    return null;
  }

  const linkClass =
    tone === "light"
      ? "border-white/15 bg-white/0 hover:border-white/35 hover:bg-white/10"
      : "border-graphite-200 bg-white hover:border-graphite-300 hover:bg-graphite-50";

  return (
    <div className={className}>
      {label ? <p className={tone === "light" ? "muted-label text-graphite-400" : "muted-label text-graphite-500"}>{label}</p> : null}
      <div className={label ? "mt-3 flex items-center gap-2" : "flex items-center gap-2"}>
        {visibleLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} profile`}
            title={item.name}
            className={`focus-ring interactive-button inline-flex h-8 w-8 items-center justify-center rounded border opacity-80 hover:opacity-100 ${linkClass}`}
          >
            <SocialIcon icon={item.icon} tone={tone} />
          </a>
        ))}
      </div>
    </div>
  );
}
