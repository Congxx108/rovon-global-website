import { socialLinks } from "@/data/site";

type SocialLinksProps = {
  label?: string;
  tone?: "dark" | "light";
  className?: string;
};

type SocialIconProps = {
  icon: string;
  className?: string;
};

function SocialIcon({ icon, className = "h-4 w-4" }: SocialIconProps) {
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
        <path d="M14 8.1h2.2V4.5A14.5 14.5 0 0 0 13 4.3c-3.1 0-5.1 1.9-5.1 5.3v3H4.5v4h3.4V24H12v-7.4h3.3l.5-4H12V10c0-1.2.3-1.9 2-1.9Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
        <path d="M15.8 3.5c.4 2.6 1.9 4.2 4.4 4.4v3.8a7.4 7.4 0 0 1-4.2-1.3v6.2c0 3.7-2.5 6.2-6.2 6.2-3.2 0-5.9-2.2-5.9-5.5 0-3.7 3-5.9 6.7-5.4v3.9c-1.5-.4-2.7.3-2.7 1.5 0 1 .8 1.7 1.9 1.7 1.4 0 2.1-.8 2.1-2.5v-13h3.9Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.4" r="1" fill="currentColor" />
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
      ? "border-white/15 text-graphite-400 hover:border-white/35 hover:bg-white/10 hover:text-white"
      : "border-graphite-200 text-graphite-500 hover:border-graphite-400 hover:bg-graphite-50 hover:text-graphite-950";

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
            className={`focus-ring inline-flex h-8 w-8 items-center justify-center rounded border transition ${linkClass}`}
          >
            <SocialIcon icon={item.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}
