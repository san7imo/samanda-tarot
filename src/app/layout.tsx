import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samandatarot.com"),
  title: {
    default: "Samanda Tarotista Colombiana",
    template: "%s | Samanda Tarotista Colombiana",
  },
  description:
    "Tarotista colombiana en Madrid: lecturas presenciales y por videollamada, rituales y amuletos con enfoque espiritual premium.",
  openGraph: {
    title: "Samanda Tarotista Colombiana",
    description:
      "Tarotista colombiana en Madrid: lecturas presenciales y por videollamada, rituales y amuletos con enfoque espiritual premium.",
    url: "https://samandatarot.com",
    siteName: "Samanda Tarotista Colombiana",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} bg-ivory font-sans text-olive antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
