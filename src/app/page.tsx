"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EmBreve() {
  return (
    <main className="relative flex flex-col md:flex-row  items-center justify-center text-center h-screen bg-black text-white text-7xl font-semibold uppercase">
      <span>Em breve</span>
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

      <Image className="absolute bottom-10" src="/logo-som.png" alt="Logo Som Corporation" width={140} height={41} />
    </main>
  );
}
