import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aditi Sen",
    text: "Every dish felt like home, yet plated with the elegance of a five-star restaurant. The flavors took me straight back to childhood visits to my grandparents in Howrah.",
    role: "Food Blogger"
  },
  {
    name: "Rahul Mehta",
    text: "From the chai-spiced cocktails to the smoked tandoori platters, Howrah Flavors strikes the perfect balance between comfort and sophistication.",
    role: "Local Guide"
  },
  {
    name: "Priya & Ankit",
    text: "We celebrated our anniversary here and the team went above and beyond. The ambiance, the lighting, the soft music—it was simply magical.",
    role: "Regular Guests"
  }
];

export default function Testimonials() {
  return (
    <AnimatedSection delay={0.1}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Guest Stories"
          title="Why Guests Love Dining With Us"
          subtitle="Thoughtfully prepared food, warm service, and a space that welcomes you like family."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex h-full flex-col justify-between rounded-3xl bg-white px-5 py-6 shadow-soft"
            >
              <Quote className="absolute -top-4 right-6 h-8 w-8 text-brand.primary/30" />
              <blockquote className="text-sm text-brand-dark/80">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 pt-4 text-xs border-t border-brand-dark/10">
                <p className="font-semibold text-brand-dark">{t.name}</p>
                <p className="text-brand-dark/70">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
