// ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, desc, link }) {
  return (
    <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
      {/* Website preview inside iframe */}
      <div className="w-full h-48">
        <iframe
          src={link}
          title={title}
          className="w-full h-full border-0"
        />
      </div>

      {/* Card content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-slate-400 mb-4">{desc}</p>

        {/* Clickable CTA */}
        <Link
          to={link}
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition"
        >
          View Full Page
        </Link>
      </div>
    </div>
  );
}