import Link from "next/link";
import { Download, LayoutTemplate } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glass-nav">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
                <LayoutTemplate className="h-5 w-5 text-primary" />
            </div>
            <Link href="/" className="text-xl font-bold text-white tracking-tight hover:text-primary transition-colors">
              {portfolioData.profile.name}
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#experience" className="text-sm font-semibold text-slate-300 hover:text-white hover:underline decoration-primary underline-offset-8 transition-all">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-semibold text-slate-300 hover:text-white hover:underline decoration-accent underline-offset-8 transition-all">
              Projects
            </Link>
          </div>

          <div className="flex items-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 gap-2"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
