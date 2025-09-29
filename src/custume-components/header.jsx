"use client"

import AnchorLink from 'react-anchor-link-smooth-scroll'
import { GrReactjs } from 'react-icons/gr'
import { SiAboutdotme } from 'react-icons/si'
import { MdContactMail } from 'react-icons/md'
import { AiFillFilePdf } from 'react-icons/ai'
import { Button } from "@/components/ui/button" 

const HeaderComponent = () => (
  <header className="w-full fixed top-0 left-0 bg-black/70 backdrop-blur-md z-50">
    <div className="max-w-7xl mx-auto flex justify-end items-center px-4 py-3">
      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center">
        <AnchorLink
          href="#about"
          className="text-white hover:text-gray-300 font-medium transition"
        >
          About
        </AnchorLink>
        <AnchorLink
          href="#Projects"
          className="text-white hover:text-gray-300 font-medium transition"
        >
          Projects
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className="text-white hover:text-gray-300 font-medium transition"
        >
          Contact
        </AnchorLink>
        <Button
          asChild
          variant="outline"
          className="border-white bg-black text-white hover:bg-white hover:text-black"
        >
          <a
            href="https://drive.google.com/file/d/1Pr9bWtyoiAU9UjQ0DUPkymwFmqQ9VMA2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Button>
      </div>

      {/* Mobile / Small screens */}
      <div className="flex md:hidden gap-4 items-center">
        <AnchorLink href="#aboutComponent" className="text-white">
          <SiAboutdotme className="h-6 w-6" />
        </AnchorLink>
        <AnchorLink href="#Projects" className="text-white">
          <GrReactjs className="h-6 w-6" />
        </AnchorLink>
        <AnchorLink href="#contact" className="text-white">
          <MdContactMail className="h-6 w-6" />
        </AnchorLink>
        <a
          href="https://drive.google.com/file/d/1-P77C_iQxDjHR12geLcdcPXqnuKb3NDN/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <AiFillFilePdf className="h-6 w-6" />
        </a>
      </div>
    </div>
  </header>
)

export default HeaderComponent
