import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolioData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: `${portfolioData.profile.name} | ${portfolioData.profile.role}`,
  description: portfolioData.profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased relative`}>
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-accent/10 blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-500/15 blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
        </div>

        <Navbar />
        <main className="min-h-screen relative z-10 flex flex-col items-center">
          <div className="w-full max-w-5xl">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
