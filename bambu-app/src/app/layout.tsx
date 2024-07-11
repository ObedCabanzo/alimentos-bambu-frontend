export const metadata = {
  title: {
    default: "Alimentos Bambú",
    template: "%s - Alimentos Bambú",
  },
  description: "Mezclas en polvo para preparar bebidas y alimentos",
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
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body className="body ">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
