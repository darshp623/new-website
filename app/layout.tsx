import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { StarsBackground } from "./components/stars-background";
import CursorTrail from "./components/CursorTrail";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Darsh Patel | Personal Portfolio",
  description: "Darsh Patel's personal portfolio showcasing skills, projects, and experiences",
  keywords: "Darsh Patel, portfolio, web developer, computer science, UMBC",
  authors: [{ name: "Darsh Patel" }],
  icons: {
    icon: "/darsh_pfp.png",
  },
};

export const viewport = { width: 'device-width', initialScale: 1 };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased relative`}>
        <StarsBackground className="z-0" /> {/* Add the background */}
        <CursorTrail />
        <Navbar />
        <main className="relative z-10"> {/* Ensure content is above background */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}