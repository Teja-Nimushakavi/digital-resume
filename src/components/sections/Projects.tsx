"use client";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-20 px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-primary rounded-full"></span>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="glass-card p-8 group hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
              </div>
              <p className="text-slate-300 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-xs font-semibold bg-surface-light text-accent border border-white/5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
