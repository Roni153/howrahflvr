import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is too short"),
  date: z.date({
    required_error: "Please select a date"
  }),
  time: z.string().min(1, "Please select a time"),
  guests: z
    .number({
      required_error: "Please select number of guests"
    })
    .min(1)
    .max(20),
  requests: z.string().optional()
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message should be at least 10 characters")
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type MenuCategory = "Starters" | "Main Course" | "Desserts" | "Beverages";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory | string;
  imageUrl?: string;
  vegetarian?: boolean;
  special?: boolean;
};
