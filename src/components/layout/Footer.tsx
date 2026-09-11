import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, MapPin } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background/80 backdrop-blur-md py-12 mt-20 relative z-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {portfolioData.profile.name}
            </h3>
            <p className="text-primary font-medium mt-1">
              {portfolioData.profile.role}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href={`mailto:${portfolioData.profile.email}`} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all">
              <Mail className="h-5 w-5 text-accent" />
              <span>Email</span>
            </a>
            <a href={`tel:${portfolioData.profile.phone}`} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all">
              <Phone className="h-5 w-5 text-accent" />
              <span>Phone</span>
            </a>
            <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all">
              <LinkedinIcon className="h-5 w-5 text-accent" />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-400 p-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>{portfolioData.profile.location}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-slate-500">
            &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-slate-600">Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
