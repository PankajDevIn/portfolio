// AnimatorPortfolio.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AnimatorPortfolio() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-pink-500"
          >
            Animator’s Portfolio
          </motion.h1>
          <ul className="flex space-x-6 font-medium text-white">
            <li><a href="#hero" className="hover:text-pink-400">Home</a></li>
            <li><a href="#logos" className="hover:text-pink-400">Logo Design</a></li>
            <li><a href="#portfolio" className="hover:text-pink-400">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-28 pb-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bringing Stories to Life with Animation
          </h2>
          <p className="text-lg mb-8">
            Stunning visuals, creative logo designs, and captivating motion graphics for brands and events.
          </p>
          <a
            href="#portfolio"
            className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            View My Work
          </a>
        </motion.div>
      </section>

      {/* Logo Design Section */}
      <section id="logos" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-10"
          >
            Logo Design Showcase
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Creative Studio", "Event Decor", "Motion Brand"].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-lg shadow p-8 flex items-center justify-center text-purple-600 font-bold text-xl"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Demo Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-10"
          >
            Portfolio Demos
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {["Animated Short Film", "Brand Motion Graphics"].map((demo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="rounded-lg shadow overflow-hidden"
              >
                <div className="h-56 bg-purple-200 flex items-center justify-center text-purple-700 font-bold">
                  {demo}
                </div>
                <div className="p-6 text-left">
                  <p className="text-gray-600">
                    A showcase of {demo.toLowerCase()} with stunning visuals and smooth animations.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-purple-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-6">Let’s Collaborate</h2>
          <p className="mb-8">
            Reach out today and let’s create unforgettable animations together.
          </p>
          <a
            href="mailto:animator@portfolio.com"
            className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Animator’s Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}