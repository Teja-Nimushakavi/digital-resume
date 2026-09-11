"use client";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-20 px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-16 flex items-center gap-4">
          <span className="w-12 h-1 bg-accent rounded-full"></span>
          Experience
        </h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 pl-8 space-y-12">
          {portfolioData.experience.map((job, index) => (
            <motion.div 
              key={job.id} 
              className="relative md:pl-0 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative">
                {/* Timeline Node for Mobile */}
                <div className="absolute -left-[41px] md:hidden top-1 w-5 h-5 rounded-full bg-surface border-4 border-accent shadow-[0_0_15px_rgba(20,184,166,0.5)] group-hover:bg-accent transition-colors duration-300"></div>
                
                {/* Timeline Info for Desktop */}
                <div className="md:col-span-1 mb-2 md:mb-0 pt-1 text-right pr-8 hidden md:block relative">
                   <div className="absolute right-[-5px] top-2 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(20,184,166,0.8)] group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-sm font-bold text-accent uppercase tracking-wider">
                    {job.duration}
                  </p>
                </div>
                
                {/* Job Card */}
                <div className="md:col-span-3 glass-card p-6 md:p-8 relative hover:border-primary/40 transition-colors">
                   <p className="text-sm font-bold text-accent uppercase tracking-wider md:hidden mb-4">
                    {job.duration}
                  </p>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {job.role}
                    </h3>
                  </div>
                  <h4 className="text-lg text-slate-400 mb-6 font-medium">
                    {job.company}
                  </h4>
                  <ul className="list-none space-y-3 text-slate-300">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="leading-relaxed relative pl-6">
                        <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-white/20 group-hover:bg-primary/50 transition-colors"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
