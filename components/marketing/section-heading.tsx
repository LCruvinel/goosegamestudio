type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={alignment}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1CB57E]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0f1f1d] sm:text-4xl">{title}</h2>
      {description ? <p className="mx-auto mt-4 max-w-2xl text-base text-[#29463d]">{description}</p> : null}
    </div>
  );
}
