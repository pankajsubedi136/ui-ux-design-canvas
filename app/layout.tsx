import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Design Canvas",
  description: "Your local Figma alternative for coded UI designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 p-0">
      <body
        className={`${inter.variable} font-sans antialiased m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
