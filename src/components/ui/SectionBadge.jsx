export default function SectionBadge({ children, variant = "blue" }) {
  const isBlue = variant === "blue";
  
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-tag text-gray-700 text-xs font-bold mb-4 uppercase tracking-widest shadow-sm">
      <div className={`w-2 h-2 rounded-full ${isBlue ? "bg-[#0052CC]" : "bg-[#FF7A00]"}`} />
      {children}
    </div>
  );
}
