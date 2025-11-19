"use client";

import { useRef } from "react";
import IntroComponent from "@/custume-components/intro";
import AboutComponent from "@/custume-components/about";
import ProjectsComponents from "@/custume-components/projects";
import HeaderComponent from "@/custume-components/header";
import ExperienceShowCaseCard from "@/custume-components/eperience-showc";
import { experiences } from "../../assets/index";
import ContactComponent from "@/custume-components/contact";
import StarfieldCanvas from "@/custume-components/bg-stars";
import LightCursor from "../custume-components/light-cursor";

import {
  FaDatabase,
  FaNodeJs,
  FaReact,
  FaJs,
  FaServer,
  FaCode,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiGithub,
  SiGit,
  SiConfluence,
  SiJenkins,
  SiPostman,
  SiNpm,
  SiYarn,
  SiTypescript,
  SiWebpack,
  SiBabel,
  SiRedux,
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiStorybook,
  SiFirebase,
  SiLinux,
  SiUbuntu,
  SiHeroku,
} from "react-icons/si";

import { IconType } from "react-icons";

export default function Page() {
  const icons: IconType[] = [
    FaDatabase,
    FaNodeJs,
    FaReact,
    FaJs,
    FaServer,
    FaCode,
    SiMongodb,
    SiExpress,
    SiGithub,
    SiGit,
    SiConfluence,
    SiJenkins,
    FaDocker,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaJava,
    SiPostman,
    SiNpm,
    SiYarn,
    SiTypescript,
    SiWebpack,
    SiBabel,
    SiRedux,
    SiNextdotjs,
    SiGraphql,
    SiTailwindcss,
    SiStorybook,
    SiFirebase,
    SiLinux,
    SiUbuntu,
    SiHeroku,
  ];

  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
        const force = (repelRadius - dist) / 10;
        const angle = Math.atan2(dy, dx);
        translateX = force * Math.cos(angle);
        translateY = force * Math.sin(angle);
      }
      el.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${el.dataset.rotate}deg)`;
    });
  };

  type IconPos = {
    top: number;
    left: number;
    size: number;
  };

  const occupied: IconPos[] = [];


  function isOverlapping(newTop: number, newLeft: number, size: number, buffer = 10) {
    return occupied.some(icon => {
      const dx = icon.left - newLeft;
      const dy = icon.top - newTop;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < (icon.size / 2 + size / 2 + buffer); // add a small buffer
    });
  }


  function generatePosition(size: number) {
    let top, left;
    let attempts = 0;

    do {
      top = Math.random() * 100;
      left = Math.random() * 100;
      attempts++;
      if (attempts > 100) break; // fail-safe
    } while (isOverlapping(top, left, size));

    occupied.push({ top, left, size });
    return { top, left };
  }


  return (
    <div
      className="relative w-full min-h-screen bg-zinc-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: 100 }).map((_, idx) => {
        const Icon = icons[Math.floor(Math.random() * icons.length)];
        const size = Math.random() * 100 + 16;
        const { top, left } = generatePosition(size);
        const rotate = Math.random() * 360;

        return (
          <div
            key={idx}
            ref={(el) => { iconRefs.current[idx] = el; }}
            className="absolute text-gray-400/20 pointer-events-none transition-transform duration-200 ease-out hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            data-rotate={rotate}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              fontSize: size,
              transform: `rotate(${rotate}deg)`,
            }}
          >
            {/* <Icon /> */}
          </div>
        );
      })}
      <LightCursor />
      <HeaderComponent />
      <IntroComponent />
      <AboutComponent />
      <ExperienceShowCaseCard experiences={experiences} />
      <ProjectsComponents />
      <ContactComponent />
       <StarfieldCanvas>
      <main></main>
      </StarfieldCanvas>
    </div>
  );
}
