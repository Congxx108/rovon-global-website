type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="editorial-eyebrow mb-4">ROVON Global</p>
      <h2 className="headline-serif text-3xl font-semibold leading-tight tracking-tight text-graphite-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-graphite-600 md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

