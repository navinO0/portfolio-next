"use client"

import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Fade } from "react-awesome-reveal"
import { BiLinkExternal } from "react-icons/bi"
import { SiGithub } from "react-icons/si"

const ProjectItem = ({ projectItem }) => {
  const { projectLink, projectTitle, projectKeyPoints, technologiesUsed, credentials, gitHubLink, thumbnails, docUrl } =
    projectItem

  const autoplay = useRef(Autoplay({ delay: 2500 }))

  return (
    <Fade duration={1500}>
      <Card className="w-full  bg-zinc-900 text-white h-full border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition">
        <CardHeader>
          <CardTitle className="text-lg font-semibold tracking-wide hover:text-blue-400 transition">
            <a href={projectLink} target="_blank" rel="noreferrer">
              {projectTitle}
            </a>
          </CardTitle>
          {credentials && <p className="text-sm text-gray-400">{credentials}</p>}
        </CardHeader>

        <CardContent className="space-y-4">
          {/* <Carousel
            className="w-full overflow-hidden rounded-xl border border-white/10"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {thumbnails.map((item, idx) => (
                <CarouselItem key={idx}>
                  <img src={item.imgUrl} alt={projectTitle} className="h-52 w-full object-cover rounded-xl" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white/70 hover:text-white" />
            <CarouselNext className="text-white/70 hover:text-white" />
          </Carousel> */}

          {/* Key Points */}
          <ScrollArea className="h-100 pr-2">
            <ul className="list-disc list-inside text-sm space-y-1">
              {projectKeyPoints.map((point, idx) => (
                <li key={idx} className="text-gray-300">
                  {point}
                </li>
              ))}
            </ul>
          </ScrollArea>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-white/20 bg-black text-white hover:bg-white hover:text-black">
                <SiGithub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
            <a href={projectLink} target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-white/20 bg-black text-white hover:bg-white hover:text-black">
                <BiLinkExternal className="mr-2 h-4 w-4" />
                Project
              </Button>
            </a>
            {docUrl && (
              <a href={docUrl} target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-white/20 bg-black text-white hover:bg-white hover:text-black">
                  <BiLinkExternal className="mr-2 h-4 w-4" />
                  Docs
                </Button>
              </a>
            )}
          </div>

          <div className="pt-2">
            <p className="text-sm font-medium text-white">Technologies Used:</p>
            <p className="text-xs text-gray-400">{technologiesUsed}</p>
          </div>
        </CardContent>
      </Card>
    </Fade>
  )
}

export default ProjectItem
