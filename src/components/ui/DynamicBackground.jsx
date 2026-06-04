import { motion, useScroll, useTransform } from "framer-motion";

export default function DynamicBackground() {
  const { scrollYProgress } = useScroll();

  // Create subtle parallax movements for the orbs based on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

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

      {/* Blue Aurora Orb */}
      <motion.div
        style={{ y: y1, x: x1, background: "radial-gradient(circle, #0052CC, transparent 70%)", willChange: "transform, opacity" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-64 -left-64 w-[800px] h-[800px] rounded-full blur-[120px]"
      />

      {/* Orange Aurora Orb */}
      <motion.div
        style={{ y: y2, x: x2, background: "radial-gradient(circle, #FF7A00, transparent 70%)", willChange: "transform, opacity" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-64 -right-64 w-[900px] h-[900px] rounded-full blur-[120px]"
      />
    </div>
  );
}
