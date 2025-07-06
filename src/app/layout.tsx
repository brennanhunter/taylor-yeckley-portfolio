import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taylor Yeckley - Game Designer & Community Builder",
  description: "Portfolio of Taylor Mecenzie Yeckley - Game Designer, Level Designer, and UI/UX Designer creating meaningful gaming experiences that build connections and bring light to players' lives.",
  keywords: "Taylor Yeckley, Game Designer, Level Designer, UI/UX Designer, Unreal Engine 5, Game Development, Portfolio",
  authors: [{ name: "Taylor Mecenzie Yeckley" }],
  openGraph: {
    title: "Taylor Yeckley - Game Designer & Community Builder",
    description: "Creating meaningful gaming experiences that build connections and bring light to players' lives.",
    url: "https://taylor-yeckley-portfolio.vercel.app",
    siteName: "Taylor Yeckley Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}