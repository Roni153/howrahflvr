import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand.primary/90">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl text-brand-dark">{title}</h2>
      {subtitle && (
        <p className="max-w-xl text-sm sm:text-base text-brand-dark/80">{subtitle}</p>
      )}
    </div>
  );
}
