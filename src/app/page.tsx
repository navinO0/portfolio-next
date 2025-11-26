"use client";
import IntroComponent from "@/custume-components/intro";
import AboutComponent from "@/custume-components/about";
import ProjectsComponents from "@/custume-components/projects";
import HeaderComponent from "@/custume-components/header";
import ExperienceShowCaseCard from "@/custume-components/eperience-showc";
import { experiences } from "../../assets/index";
import ContactComponent from "@/custume-components/contact";
import StarfieldCanvas from "@/custume-components/bg-stars";
import LightCursorSmooth from "@/custume-components/light-cursor";
export default function Page() {
  return (
    <div
      className="relative w-full min-h-screen bg-zinc-900 overflow-hidden"
    >
      <StarfieldCanvas>
      <main></main>
      </StarfieldCanvas>
      <LightCursorSmooth />
      <HeaderComponent />
      <IntroComponent />
      <AboutComponent />
      <ExperienceShowCaseCard experiences={experiences} />
      <ProjectsComponents />
      <ContactComponent />
      

    </div>
  );
}
