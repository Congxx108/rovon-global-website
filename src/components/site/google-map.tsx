import { ExternalLink, MapPin } from "lucide-react";

type GoogleMapProps = {
  address: string;
  embedUrl?: string;
  externalUrl?: string;
  title?: string;
  className?: string;
};

export function GoogleMap({
  address,
  embedUrl,
  externalUrl,
  title = "ROVON Global location on Google Maps",
  className = "",
}: GoogleMapProps) {
  return (
    <div className={`overflow-hidden rounded-md border border-stonebrand-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.055)] ${className}`}>
      <div className="flex flex-col gap-3 border-b border-stonebrand-200 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded border border-stonebrand-200 bg-graphite-50 text-graphite-950">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-black text-graphite-950">ROVON Global location</p>
            <p className="mt-1 text-sm leading-6 text-graphite-600">{address}</p>
          </div>
        </div>
        {externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring interactive-button inline-flex w-fit items-center justify-center gap-2 rounded border border-graphite-300 bg-white px-4 py-2 text-[12px] font-bold text-graphite-950 hover:border-graphite-950 hover:bg-graphite-950 hover:text-white"
          >
            View on Google Maps
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : null}
      </div>
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={title}
          className="block h-[360px] w-full border-0 bg-graphite-50"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="grid min-h-[220px] place-items-center bg-graphite-50 p-8 text-center">
          <div className="max-w-md">
            <p className="text-sm font-semibold text-graphite-950">Map preview is not available.</p>
            <p className="mt-2 text-sm leading-6 text-graphite-600">{address}</p>
            {externalUrl ? (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-bold text-graphite-950 underline underline-offset-4"
              >
                View on Google Maps
              </a>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
