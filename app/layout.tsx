import type { Metadata } from "next";
import { Geist, Geist_Mono, Bagel_Fat_One, Bowlby_One, Space_Mono, Comic_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const bagelFat = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bagel",
});

const bowlbyOne = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bowlby",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const comicNeue = Comic_Neue({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-comic",
});

export const metadata: Metadata = {
  title: "R3TARD MACHINE",
  description: "no wallet · no mint · no token · no utility · no reason",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bagelFat.variable} ${bowlbyOne.variable} ${spaceMono.variable} ${comicNeue.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
