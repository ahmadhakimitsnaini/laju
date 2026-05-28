export default function SectionBadge({ children, variant = "blue" }) {
  const isBlue = variant === "blue";
  const bgClass = isBlue ? "bg-[#0052CC]/20" : "bg-[#FF7A00]/20";
  const borderClass = isBlue ? "border-[#0052CC]/30" : "border-[#FF7A00]/30";
  
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${bgClass} border ${borderClass} text-white text-xs font-semibold mb-4 uppercase tracking-widest`}>
      {children}
    </div>
  );
}
