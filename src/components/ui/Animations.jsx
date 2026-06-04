/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";


export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// 1, 2, 3: Composed Animation (Scale + Stagger + Custom Rotation)
export const composedAnimation = {
  hidden: { opacity: 0, scale: 0.8, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.8,
    },
  },
};

// Reusable scroll-triggered wrapper
export function FadeInWhenVisible({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Micro-interaction Text Wrappers
export function StaggerWrap({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerText({ children, className = "" }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

