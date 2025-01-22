'use client'
import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }} // Initial state: slightly smaller and rotated
      whileInView={{
        opacity: 1,            // Fully visible when in view
        scale: 1,              // Full size when in view
        rotate: 0,             // Remove rotation when in view
      }}
      transition={{
        delay: delay || 0, // Stagger the animation with a custom delay
        duration: 0.6,      // Increased duration for smoother animation
        type: "spring",     // Spring easing for a natural, bouncy feel
        stiffness: 100,     // Stiffness for a bounce effect
        damping: 15,        // Damping to reduce the overshoot of the spring
      }}
      viewport={{ once: true }} // Animation triggers only once when the section is in view
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
