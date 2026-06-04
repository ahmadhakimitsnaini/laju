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
      className={`inline-flex items-center justify-center gap-2 glass-button text-gray-900 font-bold px-6 py-3 cursor-pointer rounded-xl ${className}`}
    >
      {children}
    </a>
  );
}
