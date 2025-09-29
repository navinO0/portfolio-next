"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ReactiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 -z-10 grid grid-cols-12 gap-2 w-full h-full bg-black"
    >
      {Array.from({ length: 240 }).map((_, i) => {
        const row = Math.floor(i / 12);
        const col = i % 12;

        const dist = Math.sqrt(
          Math.pow(mousePos.x - col * 80, 2) +
          Math.pow(mousePos.y - row * 80, 2)
        );

        const intensity = Math.max(0, 1 - dist / 600);

        return (
          <motion.div
            key={i}
            className="w-20 h-20 rounded-md"
            animate={{
              backgroundColor: `rgba(59, 130, 246, ${intensity})`,
              scale: 1 + intensity * 0.3,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        );
      })}
    </div>
  );
}
