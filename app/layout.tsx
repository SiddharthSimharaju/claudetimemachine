import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claude Time Machine",
  description: "Scroll through every major Claude update — from the beginning to now.",
  openGraph: {
    title: "Claude Time Machine",
    description: "Scroll through every major Claude update — from the beginning to now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="h-full antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
