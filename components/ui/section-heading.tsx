type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, intro, id, align = "center" }: Props) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-bold tracking-widest text-brand-orange uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
