import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { readMenu } from "@/lib/menu";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Daily Menu | Howrah Flavors",
  description:
    "Explore today’s curated menu at Howrah Flavors, featuring starters, mains, desserts, and beverages."
};

export default function MenuPage() {
  const items = readMenu();
  const categories = Array.from(
    new Set(items.map((i) => i.category || "Other"))
  );

  return (
    <AnimatedSection>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Daily Menu"
          title="Today’s Offerings"
          subtitle="Curated each day by our chefs, highlighting seasonal ingredients and regional favorites."
          align="left"
        />
        <p className="mt-2 text-xs text-brand-dark/70">
          This menu updates frequently. Restaurant owners can edit it via the admin
          area or by updating `public/menu.json`.
        </p>

        <div className="mt-8 space-y-10">
          {categories.map((category) => (
            <section key={category} className="space-y-4">
              <h3 className="font-heading text-2xl text-brand-dark">{category}</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items
                  .filter((i) => i.category === category)
                  .map((item) => (
                    <article
                      key={item.id}
                      className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={
                            item.imageUrl ||
                            "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=900&q=80"
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
                          <h4 className="font-heading text-lg">{item.name}</h4>
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
            </section>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
