import React from 'react';
import { ExternalLink } from 'lucide-react';
import { title } from 'framer-motion/client';

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "Modern SaaS landing page with navbar, hero, and feature blocks.",
    link: "/saas-landing-demo"
  },
  {
    id: 2,
    title: "Animator and Designer Portfolio",
    description: "Creative portfolio landing page with hero, logo showcase, and services blocks.",
    link: "/agency-landing-demo"
  },
  {
    id: 3,
    title: "Portfolio Showcase",
    description: "Interactive portfolio project highlighting featured work and demos.",
    link: "/agency-dashboard-demo"
  },
   {
    id: 4,
    title: "Edited Video Showcase",
    description: "A creative edited video project demonstrating motion graphics and storytelling.",
    video: "/assets/editedvid.mp4" // replace with your video link
  }

  
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Live preview iframe for all projects */}
              {/* <div className="w-full h-40">
                <iframe
                  src={project.link}
                  title={project.title}
                  className="w-full h-full border-0 pointer-events-none"
                />
              </div> */}
         <div className="w-full h-40 relative">
  {project.video ? (
    <video
      src={project.video}
      title={project.title}
      controls
      className="w-full h-full object-cover relative z-10"
    />
  ) : (
    <iframe
      src={project.link}
      title={project.title}
      className="w-full h-full border-0 pointer-events-none relative z-10"
    />
  )}

  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none z-0" />
</div>



              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10" />

              {/* Card content */}
              <div className="p-5 relative z-20">
                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">React • Tailwind • Framer Motion</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
