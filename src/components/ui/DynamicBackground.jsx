export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#F4F6F8] pointer-events-none">
      {/* Soft Grid Matrix with Vignette Masking */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #000000 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Blue Aurora Orb — static div with lightweight CSS animation */}
      <div
        className="absolute -top-64 -left-64 w-[800px] h-[800px] rounded-full animate-orb-pulse will-change-[opacity]"
        style={{
          background: "radial-gradient(circle, #0052CC, transparent 70%)",
          opacity: 0.3,
        }}
      />

      {/* Orange Aurora Orb — static div with lightweight CSS animation */}
      <div
        className="absolute -bottom-64 -right-64 w-[900px] h-[900px] rounded-full animate-orb-pulse-delayed will-change-[opacity]"
        style={{
          background: "radial-gradient(circle, #FF7A00, transparent 70%)",
          opacity: 0.2,
        }}
      />
    </div>
  );
}
