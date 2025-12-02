import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Video, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-blue-400" size={32} />,
      title: "Full Stack Web Dev",
      description: "Scalable web apps using MERN Stack (React, Node) or Java Spring Boot. Responsive, fast, and secure.",
      skills: ["React", "Java","Python","Spring Boot", "MySQL/Mongo","Tailwind css"]
    },
    {
      icon: <Smartphone className="text-purple-400" size={32} />,
      title: "App Development",
      description: "Cross-platform mobile applications that offer seamless user experiences on iOS and Android.",
      skills: ["React Native", "Flutter", "UI/UX"]
    },
    {
      icon: <Video className="text-pink-400" size={32} />,
      title: "Video Editing",
      description: "Professional video editing for content creators and businesses. Smooth transitions, color grading, and effects.",
      skills: ["Premiere Pro", "After Effects", "Davinci"]
    },
    {
      icon: <Palette className="text-green-400" size={32} />,
      title: "Brand Design",
      description: "Unique logo designs and brand identities that make your business stand out in the market.",
      skills: ["Logo Design", "Figma", "Branding","Adobe Illustrator "]
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Combining technical power with creative flair to deliver comprehensive digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group"
            >
              <div className="mb-4 bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map(skill => (
                  <span key={skill} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;