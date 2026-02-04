import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Sparkles, FlameKindling, Wine, Leaf } from "lucide-react";

const highlights = [
  {
    icon: FlameKindling,
    title: "Live Tandoor & Open Kitchen",
    text: "Watch our chefs temper spices, char breads, and slow-cook curries in an open, theatre-style kitchen."
  },
  {
    icon: Leaf,
    title: "Thoughtful Vegetarian Menu",
    text: "From smoky baingan bharta to fragrant paneer dishes, our vegetarian plates get just as much love."
  },
  {
    icon: Wine,
    title: "Signature Cocktails & Chai Bar",
    text: "Enjoy spice-forward cocktails, zero-proof coolers, and an entire section dedicated to chai."
  },
  {
    icon: Sparkles,
    title: "Occasion-Ready Ambience",
    text: "Warm lighting, soft linens, and curated playlists create the perfect backdrop for celebrations."
  }
];

export default function WhyChooseUs() {
  return (
    <AnimatedSection delay={0.15}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="More Than Just a Meal"
          subtitle="We bring together timeless recipes, fresh ingredients, and warm hospitality to create evenings you’ll remember."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group flex flex-col gap-3 rounded-3xl bg-white/90 p-5 shadow-soft transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand.primary/10 text-brand.primary transition group-hover:bg-brand.primary group-hover:text-white">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base text-brand-dark">{h.title}</h3>
              <p className="text-xs text-brand-dark/80">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
