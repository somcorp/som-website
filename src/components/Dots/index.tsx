"use client";

import { motion } from "framer-motion";

export function Dots() {
  return (
    <div className="flex ml-2 space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          .
        </motion.span>
      ))}
    </div>
  );
}
