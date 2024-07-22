export const metadata = {
  title: {
    default: "Alimentos Bambú",
    template: "%s - Alimentos Bambú",
  },
  description: "Mezclas en polvo para preparar bebidas y alimentos",
  openGraph: {
    title: "Alimentos Bambú",
    description: "Somos Alimentos Bambú, conoce nuestros servicios e increibles productos.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo_bambu.png`,
        width: 800,
        height: 600,
        alt: "Logo Alimentos Bambú",
      },
    ],
  },
};
import "@/app/input.css";
import { NavBar } from "@/components/ComponentNavbar/navbar";
import { Footer } from "@/components/ComponentFooter/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body ">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
