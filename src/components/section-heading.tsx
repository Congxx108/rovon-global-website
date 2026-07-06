import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="editorial-eyebrow mb-3">ROVON Global</p>
      <h2 className="headline-serif text-3xl font-black leading-[1.08] text-graphite-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-graphite-600 md:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
