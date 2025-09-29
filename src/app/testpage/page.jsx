"use client";

import { useRef } from "react";
import { FaDatabase, FaNodeJs, FaReact, FaJs, FaServer, FaCode, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGithub, SiGit, SiConfluence, SiJenkins, SiJmeter, SiVisualstudiocode } from "react-icons/si";

export default function DeveloperBackground() {
  const icons = [FaDatabase, FaNodeJs, FaReact, FaJs, FaServer, FaCode, SiMongodb, SiExpress, SiGithub, SiGit, SiConfluence, SiJenkins];
  const iconRefs = useRef([]);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    iconRefs.current.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = rect.left + rect.width / 2 - mouseX;
      const dy = rect.top + rect.height / 2 - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repelRadius = 100;
      let translateX = 0,
        translateY = 0;
      if (dist < repelRadius) {
        const force = (repelRadius - dist) / 10; // adjust strength
        const angle = Math.atan2(dy, dx);
        translateX = force * Math.cos(angle);
        translateY = force * Math.sin(angle);
      }
      el.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${el.dataset.rotate}deg)`;
    });
  };

  return (
    <div
      className="relative w-full min-h-screen bg-zinc-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: 70 }).map((_, idx) => {
        const Icon = icons[Math.floor(Math.random() * icons.length)];
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 24 + 16;
        const rotate = Math.random() * 360;

        return (
          <div
            key={idx}
            ref={(el) => (iconRefs.current[idx] = el)}
            className="absolute text-gray-400/20 animate-spin-slow pointer-events-none"
            data-rotate={rotate}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              fontSize: size,
              transform: `rotate(${rotate}deg)`,
            }}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}
