import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const poppins = Orbitron({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
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
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
