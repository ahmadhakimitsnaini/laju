export default function GradientButton({ children, href, onClick, className = "" }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF7A00]/30 ${className}`}
      style={{ background: "linear-gradient(135deg, #FF7A00, #FF9A3C)" }}
    >
      {children}
    </a>
  );
}
