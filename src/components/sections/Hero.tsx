"use client";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 md:py-36 relative px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      <motion.div 
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex-1 max-w-3xl">
          <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
            Available for new opportunities
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl font-bold tracking-tight text-white sm:text-8xl mb-6 leading-tight">
            Hi, I&apos;m <span className="text-gradient">Teja</span>.<br />
            <span className="text-slate-400 font-medium text-5xl sm:text-7xl">{portfolioData.profile.role}</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-2xl text-slate-300 leading-relaxed mb-10">
            {portfolioData.profile.summary}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="#projects" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-300 gap-2">
              View Projects <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="/resume.pdf" download className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 gap-2">
              <Download className="h-5 w-5" /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex-shrink-0 relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_50px_rgba(99,102,241,0.2)]">
            <Image 
              src="/profile.png" 
              alt="Teja" 
              fill 
              priority
              className="object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          {/* Decorative elements around image */}
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-2xl"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
