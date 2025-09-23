"use client";

import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const IntroComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-6 w-screen text-white">
      <Fade duration={2000} triggerOnce>
        {/* Glassmorphism Container */}
        <div class="w-full md:max-w-7xl mx-auto p-8 rounded-3xl bg-black/70 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center gap-8">
          
          {/* Avatar */}
          {/* <Avatar className="w-32 h-32 border-2 border-gray-300 shadow-lg">
            <AvatarImage src="/profile.jpg" alt="Profile" />
            <AvatarFallback>NK</AvatarFallback>
          </Avatar> */}

          <div className="flex-1 space-y-6 text-start  md:text-left">
            <p className="text-sm uppercase tracking-wide text-gray-400">
              Hi, My Name is
            </p>

            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white">
                Naveen Kumar
              </h1>
              <h3 className="text-lg font-medium text-gray-300 mt-2">
                I Build Things for the Web.
              </h3>
            </div>

            <div className="text-base text-gray-300 text-start w-full md:min-w-7xl leading-relaxed">
              <ReactTyped
                className="block"
                strings={[
                  "Logical and results-driven full stack developer dedicated to building and optimizing user-focused websites and applications. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor.",
                ]}
                typeSpeed={30}
                backSpeed={50}
                smartBackspace
                fadeOut
              />
            </div>

            <div className="pt-2">
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default IntroComponent;
