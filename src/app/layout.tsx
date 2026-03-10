import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Check-up Financeiro | Raio-X do Crédito",
  description: "Descubra o que realmente está travando seu crédito com nosso diagnóstico financeiro individual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-bg-primary text-white`}>
        {children}
      </body>
    </html>
  );
}
