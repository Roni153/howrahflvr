"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormValues
} from "@/lib/validation";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Howrah Flavors",
  description:
    "Get in touch with Howrah Flavors for reservations, events, or general inquiries."
};

export default function ContactPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (values: ContactFormValues) => {
    // In production, integrate with Resend/Nodemailer
    console.log("Contact form submitted", values);
    alert(
      "Thank you for your message. Our team will get back to you shortly."
    );
    reset();
  };

  return (
    <AnimatedSection>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit & Connect"
          title="We’d Love to Hear From You"
          subtitle="Planning a celebration, company dinner, or just curious about our menu? Reach out and we’ll be happy to help."
          align="left"
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          <Card className="overflow-hidden shadow-soft">
            <div className="aspect-[16/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.66718495545!2d88.312!3d22.586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM1JzA5LjYiTiA4OMKwMTgnNDMuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <CardContent className="space-y-3">
              <Typography variant="subtitle1" className="font-semibold">
                Howrah Flavors
              </Typography>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  123 Riverside Road, Howrah, West Bengal, India
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  hello@howrahflavors.com
                </p>
              </div>
              <div className="mt-3 flex gap-3">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand.primary/10 text-brand.primary"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand.primary/10 text-brand.primary"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand.primary/10 text-brand.primary"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Send us a message
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                This form is a placeholder. You can connect it to an email service
                like Resend or Nodemailer to receive messages directly.
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      fullWidth
                      {...register("name")}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      type="email"
                      fullWidth
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      fullWidth
                      multiline
                      minRows={4}
                      {...register("message")}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
