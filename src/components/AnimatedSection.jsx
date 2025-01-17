// components/AnimatedSection.js
'use client';

import { motion } from 'framer-motion';

export default function AnimatedSection({ children, initial, animate, transition }) {
  return (
    <motion.div
      initial={initial || { opacity: 0, y: 20 }}
      animate={animate || { opacity: 1, y: 0 }}
      transition={transition || { duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
