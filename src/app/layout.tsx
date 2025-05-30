import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
});

export const metadata: Metadata = {
  title: "SOM Corporation | Mais do que uma empresa, um movimento tecnológico",
  description:
    "SOM é um ecossistema de inovação que desenvolve softwares, aplicativos e soluções digitais com tecnologia, design e estratégia para transformar empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${kodeMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
