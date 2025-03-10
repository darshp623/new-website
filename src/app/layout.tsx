import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    icon: "/profile-pic.PNG",
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
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
