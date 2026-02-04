import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ReservationForm from "@/components/ReservationForm";
import { Card, CardContent } from "@mui/material";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <MenuPreview />
      <WhyChooseUs />
      <Testimonials />

      <AnimatedSection delay={0.2}>
        <section
          id="booking-section"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Reserve"
                title="Book Your Table"
                subtitle="Whether it’s an intimate dinner or a lively celebration, we’ll prepare the perfect table for you."
                align="left"
              />
              <p className="mt-3 text-xs sm:text-sm text-brand-dark/80">
                For groups larger than 10, events, or special occasions, feel free to
                mention it in the special requests field. Our team will reach out to
                confirm the details.
              </p>
            </div>
            <Card className="shadow-soft">
              <CardContent>
                <ReservationForm compact />
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
