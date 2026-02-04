"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Utensils } from "lucide-react";
import { Button } from "@mui/material";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/book", label: "Book Table" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/80 backdrop-blur border-b border-white/60 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-brand-dark hover:opacity-90 transition"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand.primary text-white shadow-soft">
            <Utensils className="h-5 w-5" />
          </span>
          <span className="font-heading text-xl sm:text-2xl tracking-wide">
            Howrah <span className="text-brand.primary">Flavors</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition hover:text-brand.primary ${
                  active ? "text-brand.primary" : "text-brand-dark/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            component={Link}
            href="/book"
            variant="contained"
            color="primary"
            size="small"
          >
            Reserve Now
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-brand-dark/10 bg-white p-2 text-brand-dark shadow-soft md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-brand-dark/5 shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-col space-y-2 px-4 py-4 sm:px-6">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-brand.primary/10 text-brand.primary"
                      : "text-brand-dark/80 hover:bg-brand.primary/5"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              component={Link}
              href="/book"
              variant="contained"
              color="primary"
              size="small"
              onClick={() => setOpen(false)}
            >
              Reserve Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
