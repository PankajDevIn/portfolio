import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Sample data for table
const sampleData = [
  { id: 1, project: "Event Management SaaS", status: "Completed", revenue: 12000 },
  { id: 2, project: "Animator Portfolio", status: "In Progress", revenue: 8500 },
  { id: 3, project: "Agency Landing Page", status: "Pending", revenue: 5200 },
];

// Chart data
const chartData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 7000 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 8000 },
];

const statuses = ["All", "Completed", "In Progress", "Pending"];

export default function AgencyDashboardDemo() {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All" ? sampleData : sampleData.filter((d) => d.status === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <nav className="bg-slate-900 shadow px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold text-pink-500"
        >
          Agency Dashboard
        </motion.h1>
        <ul className="flex space-x-6 text-slate-300">
          <li><a href="#overview" className="hover:text-pink-400">Overview</a></li>
          <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#analytics" className="hover:text-pink-400">Analytics</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="py-16 text-center bg-gradient-to-r from-purple-600 to-pink-500">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6">Interactive Admin Panel</h2>
          <p className="text-lg mb-8">
            Manage projects, track performance, and visualize data with responsive charts and tables.
          </p>
        </motion.div>
      </section>

      {/* Filter + Table */}
      <section id="projects" className="py-12 max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-6"
        >
          Project Status Table
        </motion.h3>

        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded ${
                filter === s ? "bg-pink-500 text-white" : "bg-slate-800 text-slate-300"
              } hover:bg-pink-400 transition`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Table */}
        <motion.table
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full text-left border border-slate-700 rounded-lg overflow-hidden"
        >
          <thead className="bg-slate-800">
            <tr>
              <th className="px-4 py-2">Project</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="border-t border-slate-700 hover:bg-slate-800"
              >
                <td className="px-4 py-2">{row.project}</td>
                <td className="px-4 py-2">{row.status}</td>
                <td className="px-4 py-2">${row.revenue.toLocaleString()}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-6"
          >
            Analytics & Charts
          </motion.h3>

          {/* Line Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 rounded-lg p-8 shadow-lg mb-10"
          >
            <h4 className="text-lg font-semibold mb-4">Revenue Growth</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid stroke="#444" />
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#f472b6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 rounded-lg p-8 shadow-lg"
          >
            <h4 className="text-lg font-semibold mb-4">Revenue Comparison</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sampleData}>
                <CartesianGrid stroke="#444" />
                <XAxis dataKey="project" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="revenue" fill="#a78bfa" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Agency Dashboard Demo. All rights reserved.</p>
      </footer>
    </div>
  );
}