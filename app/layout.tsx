import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Epic Motion Group | Cinematic Visual Experiences",
  description: "Premium audiovisual production agency. We craft cinematic stories that captivate, inspire, and convert. From concept to final cut.",
  keywords: ["video production", "cinematic", "visual storytelling", "creative agency", "premium content"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebas.variable} ${inter.variable} antialiased selection:bg-primary/20 selection:text-primary`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
