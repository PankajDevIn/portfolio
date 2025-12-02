import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Pankaj.dev
          </span>
          <p className="text-slate-500 mt-2 text-sm">© {new Date().getFullYear()} Pankaj. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;