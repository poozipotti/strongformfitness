import type { Metadata } from "next";
import { Slabo_27px, Anton, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});
const slabo = Anton({
  variable: "--font-slabo",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strong Form Nyc",
  description: "Personal Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${slabo.variable} ${anton.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
