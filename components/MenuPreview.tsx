import Link from "next/link";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { readMenu } from "@/lib/menu";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export default async function MenuPreview() {
  const menu = readMenu().slice(0, 6);

  return (
    <AnimatedSection>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            eyebrow="Today's Selections"
            title="Taste Our Curated Daily Menu"
            subtitle="A changing selection of regional specialties, seasonal produce, and family recipes reimagined with a modern touch."
            align="left"
          />
          <Link
            href="/menu"
            className="text-sm font-medium text-brand.primary hover:underline"
          >
            View full menu →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={
                    item.imageUrl ||
                    "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {item.special && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand.primary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-soft">
                    <BadgeCheck className="h-3 w-3" />
                    Chef&apos;s Special
                  </span>
                )}
              </div>
              <div className="space-y-2 px-4 py-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg">{item.name}</h3>
                  <p className="text-sm font-semibold text-brand.primary">
                    ₹{item.price.toFixed(0)}
                  </p>
                </div>
                <p className="line-clamp-2 text-xs text-brand-dark/80">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className="rounded-full bg-brand.primary/10 px-3 py-1 font-medium text-brand.primary">
                    {item.category}
                  </span>
                  {item.vegetarian && (
                    <span className="rounded-full border border-emerald-500/40 bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                      Veg
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
