import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
});

export const metadata: Metadata = {
  title: "Som Corporation",
  description:
    "Um ecossistema de inovação que une tecnologia, design e estratégia para criar soluções digitais completas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kodeMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
