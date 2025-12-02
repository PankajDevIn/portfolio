import { motion } from "framer-motion";
import FeatureCard from "../component/FeatureCard";
import { Link } from "react-router-dom";
const features = [
  {
    title: "Fast Setup",
    desc: "Launch your SaaS product in minutes with our streamlined onboarding.",
    icon: "⚡",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Built to grow with your business, handling thousands of users effortlessly.",
    icon: "📈",
  },
  {
    title: "Secure by Default",
    desc: "Enterprise-grade security baked into every layer of the platform.",
    icon: "🔒",
  },
];

export default function SaasDemo() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}

<Link to='/'>
        back to  HOME
        </Link>

      <section className="py-20 text-center bg-linear-to-r from-blue-500 to-cyan-500">
        <h1 className="text-5xl font-bold mb-4">SaaS Landing Demo</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A sample landing page designed for SaaS products, optimized for conversions and clarity.
        </p>
        <button className="mt-6 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-200 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-800 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Starter", "Pro", "Enterprise"].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-700 rounded-lg p-6 text-center hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-4">{plan}</h3>
              <p className="text-slate-400 mb-6">
                {plan === "Starter" && "$19/mo"}
                {plan === "Pro" && "$49/mo"}
                {plan === "Enterprise" && "Custom"}
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                Choose {plan}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-linear-to-r from-purple-500 to-pink-500">
        <h2 className="text-4xl font-bold mb-4">Ready to Scale?</h2>
        <p className="text-lg mb-6">Join thousands of teams building with our SaaS platform.</p>
        <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 transition">
          Start Free Trial
        </button>
      </section>
    </div>
  );
}