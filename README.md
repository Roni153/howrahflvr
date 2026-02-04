## Howrah Flavors – Modern Restaurant Website

A production-ready restaurant website for **Howrah Flavors**, built with:

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for utility-first styling
- **MUI (Material UI v5)** as the primary component library
- **Framer Motion** for smooth animations
- **React Hook Form + Zod** for robust form handling and validation
- **Prisma + SQLite** for reservations
- **Lucide React** icons

### Features

- **Home page** with hero, featured menu preview, testimonials, and inline booking form.
- **Daily menu** (`/menu`) sourced from `public/menu.json`.
- **Reservation system** (`/book` and home section) storing data in SQLite via Prisma.
- **Admin area**:
  - `/admin/menu` – manage daily menu items (CRUD on `public/menu.json`).
  - `/admin/reservations` – view, confirm, and delete reservations with an MUI DataGrid.
- **Contact page** (`/contact`) with embedded Google Map, contact info, social links, and a contact form stub.

---

### Getting Started

#### 1. Install dependencies
