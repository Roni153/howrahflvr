"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-brand-dark/10 bg-brand.beige/80">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-xl mb-2">Howrah Flavors</h3>
            <p className="text-sm text-brand-dark/80">
              Authentic Indian flavors crafted with love, in the heart of Howrah.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm uppercase tracking-widest text-brand-dark/70">
              Contact
            </h4>
            <ul className="space-y-1 text-sm text-brand-dark/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                123 Riverside Road, Howrah, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@howrahflavors.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm uppercase tracking-widest text-brand-dark/70">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-soft text-brand-dark hover:text-brand.primary transition"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-soft text-brand-dark hover:text-brand.primary transition"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-soft text-brand-dark hover:text-brand.primary transition"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-brand-dark/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Howrah Flavors. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/menu" className="hover:text-brand.primary transition">
              Daily Menu
            </Link>
            <Link href="/book" className="hover:text-brand.primary transition">
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
