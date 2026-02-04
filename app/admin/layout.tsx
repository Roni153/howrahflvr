import AdminGuard from "@/components/AdminGuard";

export const metadata = {
  title: "Admin | Howrah Flavors",
  description: "Manage daily menu and reservations for Howrah Flavors."
};

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <AdminGuard>{children}</AdminGuard>;
}
