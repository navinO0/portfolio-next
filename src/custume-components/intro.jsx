"use client";

import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { introConent } from "../../assets";
import KaioAnimated from "../custume-components/name-card";

const IntroComponent = () => {
  return (
    <div className="flex justify-center items-center  min-h-screen bg-black   text-white">
      <Fade duration={2000} >
        {/* Glassmorphism Container */}
        <div class="  w-full md:max-w-7xl mx-auto p-8 rounded-3xl bg-black/70 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center gap-8">

          {/* Avatar */}
          {/* <Avatar className="w-32 h-32 border-2 border-gray-300 shadow-lg">
            <AvatarImage src="/profile.jpg" alt="Profile" />
            <AvatarFallback>NK</AvatarFallback>
          </Avatar> */}

          <div className="flex-1 space-y-6 text-start  md:text-left">
            <p className="text-sm  tracking-wide text-blue-500">
              Hi, My Name is
            </p>


            <div>
              <div>
  
  <h1 className="block md:hidden text-4xl font-bold tracking-tight text-red-400">
    Naveen Kumar
  </h1>


  <div className="hidden md:block">
    <KaioAnimated />
  </div>
</div>


              <h3 className="text-lg font-medium text-gray-300 mt-2">
                I Build Things for the Web.
              </h3>
            </div>

            <div className="text-base font-light font-sans max-w-screen font-typewriter text-l text-gray-300 text-start w-full md:min-w-[70vw] max-w-screen leading-relaxed">
              <ReactTyped
                className="block"
                strings={introConent}
                typeSpeed={10}
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
