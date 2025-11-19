"use client"

import ProjectItem from "./projectItem"
import MiniProjectItem from "./miniProjectItem"

import { projectsObject, miniProjectObj } from "../../assets/index"

const ProjectsComponents = () => (
  <section id="Projects" className="w-full py-12 bg-black text-white ">
    <div className="max-w-7xl mx-auto px-4 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-wide">Relevant Projects</h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 rounded" />
      </div>

      <div className="grid gap-15 md:grid-cols-3">
        {projectsObject.map((projectItem) => (
          <ProjectItem key={projectItem.id} projectItem={projectItem} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">Mini Projects</h2>
      <ul className="grid gap-11 sm:grid-cols-2 lg:grid-cols-3">
        {miniProjectObj.map((projectItem) => (
          <MiniProjectItem key={projectItem.id} eachOne={projectItem} />
        ))}
      </ul>
    </div>
  </section>
)

export default ProjectsComponents
