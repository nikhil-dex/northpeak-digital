import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { archivo, archivoBlack, jetbrainsMono } from "@/lib/fonts";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NorthPeak Digital",
  description:
    "NorthPeak Digital helps startups and businesses build modern digital experiences.",

  openGraph: {
    title: "NorthPeak Digital",
    description:
      "Modern websites that convert visitors into customers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
      className={`
      min-h-full 
      flex  
      flex-col 
       ${archivo.variable}
          ${archivoBlack.variable}
          ${jetbrainsMono.variable}
      
      `}>
        {children}
        </body>
    </html>
  );
}
