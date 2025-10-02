"use client"

import { Fade } from "react-awesome-reveal"
import { RiGamepadFill } from "react-icons/ri"
import { BsEmojiHeartEyes, BsGithub } from "react-icons/bs"
import { IoMdPhotos } from "react-icons/io"
import { BiLinkExternal } from "react-icons/bi"

const MiniProjectItem = ({ eachOne }) => {
  const { projectLink, projectTitle, projectAbt, gitHubLink, technologiesUsed } = eachOne

  const renderIcon = () => {
    switch (projectTitle) {
      case "Emoji Game":
        return <BsEmojiHeartEyes className="text-3xl text-pink-400" />
      case "Mini Games (Match Game)":
        return <IoMdPhotos className="text-3xl text-blue-400" />
      case "Mini Games (Rock paper Scissors)":
        return <RiGamepadFill className="text-3xl text-green-400" />
      default:
        return null
    }
  }

  return (
    <Fade duration={1500}>
  <li className="relative group p-4 bg-zinc-900 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition overflow-hidden">
    <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in-out"></span>

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-3">
        {renderIcon()}
        <div className="flex gap-3">
          <a href={gitHubLink} target="_blank" rel="noreferrer">
            <BsGithub className="text-lg text-white/70 hover:text-white" />
          </a>
          <a href={projectLink} target="_blank" rel="noreferrer">
            <BiLinkExternal className="text-lg text-white/70 hover:text-white" />
          </a>
        </div>
      </div>

      <h3 className="text-base font-semibold mb-2 hover:text-blue-400 transition">
        <a href={projectLink} target="_blank" rel="noreferrer">
          {projectTitle}
        </a>
      </h3>
      <p className="text-sm text-gray-300 mb-2">{projectAbt}</p>
      <p className="text-xs text-gray-400">{technologiesUsed}</p>
    </div>
  </li>
</Fade>

  )
}

export default MiniProjectItem
