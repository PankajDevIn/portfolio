import React from 'react';
import { motion } from 'framer-motion';
import { Bot, CheckCircle2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const AISection = () => {
  const templates = [
    { title: "E-Commerce Store", desc: "Full shop functionality", color: "from-orange-400 to-red-500",path:"/ecommerce-demo" },
    { title: "Portfolio Pro", desc: "For creative professionals", color: "from-blue-400 to-cyan-500" ,path:"/portfolio-demo"},
    { title: "SaaS Landing", desc: "High conversion layout", color: "from-purple-400 to-pink-500" , path:"/saas-demo"},
  ];

  return (
    <section id="ai-solutions" className="py-12 md:py-20 relative overflow-hidden bg-slate-900">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 skew-x-12 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm font-semibold mb-6 border border-purple-500/20">
              <Bot size={16} />
              <span>New Service</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Instant Website Creation <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Powered by AI
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Need a website fast? I utilize cutting-edge AI tools combined with manual refinement to generate stunning, functional websites in record time. Perfect for MVPs and startups.
            </p>
            
            <ul className="space-y-4 mb-8 inline-block lg:block text-left">
              {["Rapid Prototyping", "SEO Optimized Content", "Custom AI Integrations"].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <CheckCircle2 className="text-purple-500 mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
                <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
                Get an AI Quote
                </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid gap-4">
              {templates.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-4 rounded-xl flex items-center justify-between hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${card.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {card.title[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{card.title}</h4>
                      <p className="text-slate-400 text-sm">{card.desc}</p>
                    </div>
                  </div>
                  <Link to={card.path}>
                  
                  <ExternalLink className="text-slate-500" size={20} />
                  </Link>
                </motion.div>
              ))}
              <div className="p-4 rounded-xl border border-dashed border-slate-700 text-center text-slate-500">
                + Custom Template
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;