import { motion } from "framer-motion";
import ProjectCard from "../component/ProjectCard";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Brand Identity Design",
    desc: "Logo, typography, and color system for a startup.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Mobile App UI",
    desc: "Clean and intuitive interface for a fitness app.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Marketing Website",
    desc: "Responsive landing page with conversion-focused layout.",
    image: "https://via.placeholder.com/400x250",
  },
];

export default function PortfolioDemo() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}  <Link to='/'>
        back to HOME
        </Link>
      <section className="py-20 text-center bg-linear-to-r from-purple-500 to-pink-500">
        <h1 className="text-5xl font-bold mb-4">Portfolio Pro Demo</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A sample portfolio layout showcasing creative projects, smooth animations, and client‑friendly presentation.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-800 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}