"use client";

import { Fade } from "react-awesome-reveal";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import FlipWords from "./flipcard";


const ContactComponent = () => (
  <div
    id="contact"
    className="bg-black text-white py-16 px-6 flex flex-col items-center"
  >
    <Fade direction="" duration={1000}>
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m excited to explore new opportunities in Full Stack Development! My
          resume is attached, and I’d love to connect with anyone who has or
          knows of relevant openings. Looking forward to new challenges—thank
          you for your time!
        </p>
        {/* <FlipWords /> */}
        <a href="mailto:6y.navin@gmail.com?" target="_blank" rel="noreferrer">
          <button type="button" className="glowing-btn">
            <span className="glowing-txt">
              S<span className="faulty-letter">ay</span>Hello
            </span>
          </button>
        </a>
      </div>

    </Fade>

    <div className="mt-12 flex flex-col items-center space-y-6">
      <ul className="flex gap-6 flex-wrap justify-center">
        <li>
          <a
            href="https://github.com/navinO0"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-blue-500 transition-colors text-3xl"
          >
            <SiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/naveen-kumar-kambham"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-blue-500 transition-colors text-3xl"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:6y.navin@gmail.com?"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-red-500 transition-colors text-3xl"
          >
            <SiGmail />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/o_0.navin?igshid=ZDdkNTZiNTM="
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-pink-500 transition-colors text-3xl"
          >
            <AiOutlineInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100070310269009"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-blue-600 transition-colors text-3xl"
          >
            <FaFacebookSquare />
          </a>
        </li>
      </ul>

      <p className="text-gray-500 text-sm mt-6">Created by Navin</p>
    </div>
  </div>
);

export default ContactComponent;
