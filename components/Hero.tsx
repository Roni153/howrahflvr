"use client";

import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1604908176997-125188f2c3b5?auto=format&fit=crop&w=1600&q=80"
          alt="Indian cuisine at Howrah Flavors"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-white"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand.primary/80">
            Authentic Indian Dining
          </p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Howrah <span className="text-brand.primary">Flavors</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-100/90">
            Experience handcrafted dishes inspired by the bustling streets and quiet riversides
            of Howrah. A contemporary space where tradition meets modern comfort.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={scrollToBooking}
            >
              Book a Table
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={Link}
              href="/menu"
              sx={{
                borderColor: "rgba(255,255,255,0.7)",
                color: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)"
                }
              }}
            >
              View Today&apos;s Menu
            </Button>
          </div>
          <div className="mt-8 flex gap-8 text-xs text-gray-100/90">
            <div>
              <p className="font-semibold">Open Today</p>
              <p>12:00 PM – 11:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p>Riverside Road, Howrah</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
