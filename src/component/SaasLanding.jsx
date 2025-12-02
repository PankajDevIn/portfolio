// SaasLandingDemo.jsx
import React from "react";
import { motion } from "framer-motion";

export default function SaasLandingDemo() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-indigo-600"
          >
            EventDecor SaaS
          </motion.h1>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
            <li><a href="#portfolio" className="hover:text-indigo-600">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-linear-to-r from-indigo-500 to-pink-500 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Manage & Decorate Events Effortlessly
          </h2>
          <p className="text-lg mb-8">
            A SaaS platform tailored for event managers and decorators to showcase, plan, and impress clients.
          </p>
          <a
            href="#contact"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Event Planning", desc: "Organize timelines, vendors, and budgets seamlessly." },
            { title: "Decor Showcase", desc: "Display stunning decoration samples with interactive galleries." },
            { title: "Client Engagement", desc: "Convert leads with smooth CTAs and live demos." },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow p-8"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-10"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Wedding Bliss", "Corporate Gala", "Birthday Bash"].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="h-40 bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold">
                  {p}
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Stunning decor and seamless management tailored for {p.toLowerCase()}.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-indigo-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-6">Let’s Create Your Dream Event</h2>
          <p className="mb-8">
            Reach out today and let us help you design unforgettable experiences.
          </p>
          <a
            href="mailto:info@eventdecor.com"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} EventDecor SaaS. All rights reserved.</p>
      </footer>
    </div>
  );
}