import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Zap, Smartphone, Video } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          Available for Freelance Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          Hi, I'm <span className="bg-linear-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">Pankaj</span>
          <br />
          Full Stack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 mb-10 px-4"
        >
          I transform ideas into digital reality using React, Spring Boot, and AI. 
          From robust backends to stunning video edits, I build complete digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/25">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all hover:scale-105 border border-slate-700">
            Contact Me
          </a>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-slate-500"
        >
           <span className="flex items-center gap-2"><Code2 size={20}/> React</span>
           <span className="flex items-center gap-2"><Cpu size={20}/> Spring Boot</span>
           <span className="flex items-center gap-2"><Zap size={20}/> Tailwind</span>
           <span className="flex items-center gap-2"><Smartphone size={20}/> App Dev</span>
           <span className="flex items-center gap-2"><Video size={20}/> Video Editing</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;