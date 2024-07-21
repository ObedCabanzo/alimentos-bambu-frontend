import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title : "Productos",
  description: "Descubre nuestra variedad de productos."
}

export default function ProductsPage() {
  redirect("/productos/bebidas")
}
