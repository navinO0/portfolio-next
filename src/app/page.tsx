import IntroComponent from "@/custume-components/intro";
import AboutComponent from "@/custume-components/about";
import ProjectsComponents from "@/custume-components/projects";
import HeaderComponent from "@/custume-components/header";
import ExperienceShowCaseCard from "@/custume-components/eperience-showc";
import { experiences } from "../../assets/index";
import ContactComponent from "@/custume-components/contact";

export default function Page() {
  return (
    <>
      <HeaderComponent />
      <IntroComponent />
      <AboutComponent />
      <ExperienceShowCaseCard experiences={experiences} />
      <ProjectsComponents />
      <ContactComponent />
    </>
  );
}