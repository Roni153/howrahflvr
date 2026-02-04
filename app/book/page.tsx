import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ReservationForm from "@/components/ReservationForm";
import { Card, CardContent } from "@mui/material";

export const metadata = {
  title: "Book a Table | Howrah Flavors",
  description:
    "Reserve your table at Howrah Flavors for an evening of contemporary Indian dining."
};

export default function BookPage() {
  return (
    <AnimatedSection>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr,1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Reservation"
              title="Reserve Your Evening"
              subtitle="Choose your preferred date and time, and we’ll keep a cozy table ready for you."
              align="left"
            />
            <p className="mt-3 text-xs sm:text-sm text-brand-dark/80">
              For same-day reservations after 7 PM, we recommend calling us directly
              for immediate confirmation.
            </p>
          </div>
          <Card className="shadow-soft">
            <CardContent>
              <ReservationForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
