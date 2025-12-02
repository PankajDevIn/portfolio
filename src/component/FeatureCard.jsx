export default function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-6 text-center hover:bg-slate-700 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </div>
  );
}