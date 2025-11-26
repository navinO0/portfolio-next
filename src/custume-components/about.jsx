"use client";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import {
    SiJavascript,
    SiExpress,
    SiNodedotjs,
    SiJira,
    SiPostgresql,
    SiApachekafka,
    SiElasticsearch,
    SiFastify,
    SiGithub,
    SiMongodb,
    SiApachejmeter,
    SiConfluence,
    SiPm2,
    SiGit,
    SiPostman,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { experienceContent } from "../../assets";
import ScrambledText from "./scrambled-text";

const techStackIcons = [
    { icon: AiFillHtml5, label: "HTML" },
    { icon: IoLogoCss3, label: "CSS" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: GrReactjs, label: "React" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiExpress, label: "Express.js" },
    { icon: SiFastify, label: "Fastify" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: DiRedis, label: "Redis" },
    { icon: SiElasticsearch, label: "Elasticsearch" },
    { icon: SiApachekafka, label: "Kafka" },
    { icon: SiApachejmeter, label: "JMeter" },
    { icon: SiGit, label: "Git" },
    { icon: SiGithub, label: "GitHub" },
    { icon: SiJira, label: "Jira" },
    { icon: SiConfluence, label: "Confluence" },
    { icon: SiPm2, label: "PM2" },
    { icon: SiPostman, label: "Postman" },
];



const AboutComponent = () => {
    return (
        <section
            id="about"
            className="flex justify-center items-center py-16 px-6 bg-black text-white"
        >
            <Fade duration={2000} >
                <div className="max-w-7xl w-full  rounded-3xl bg-black/70 backdrop-blur-md  shadow-2xl space-y-8">

                    <h2 className="text-3xl font-bold text-center text-white">About Me</h2>
                    <Separator className="border-gray-700" />

                    <div className="space-y-6 text-gray-300">
                        {/* <ScrambledText
                            className="!text-grey-300  "
                            radius={100}
                            duration={1.2}
                            speed={0.5}
                            scrambleChars=".:"
                        > */}
                            {/* Hello! My name is <span className="font-semibold">Naveen</span>,
                            and I’m a FULL STACK SOFTWARE DEVELOPER with 3+ years of cumulative experience (2+ years professional, 1+ year
                            certified industry experience) in developing scalable, production-grade Web Services and Microservices.
                            Proficient in both front-end and back-end development, specializing in API Development and API Integration.
                            Strong foundation in multiple back-end languages including Node.js, and JavaScript frameworks like Fastify
                            (similar to Express.js). Expertise in database technologies (PostgreSQL, Redis) and implementing robust security
                            and data protection settings using JWT, OAuth, and AES/RSA encryption. Proven ability to collaborate in a
                            remote team environment to deploy software systems and contribute to complex projects from conception to
                            end */}

                        {/* </ScrambledText> */}

                        {/* <ScrambledText
                            className="scrambled-text-demo"
                            radius={100}
                            duration={1.2}
                            speed={0.5}
                            scrambleChars=".:"
                        > */}
                            {/* Exploring DevOps, CI/CD, and cloud technologies (AWS, Azure) has
                            further fueled my passion for building robust and efficient
                            systems. I’m grateful to have turned my passion into a career,
                            constantly learning and improving to create impactful digital
                            experiences! */}
                        {/* </ScrambledText> */}

                        <p>
                        Hello! My name is <span className="font-semibold">Naveen</span>,
                        and I’m a Backend Developer with 2 years of experience in building
                        scalable and high-performance web applications. My journey started
                        with a passion for problem-solving and creating efficient digital
                        solutions. Over time, I honed my skills in Node.js, Express.js,
                        Fastify, SQL, NoSQL, and React.js, focusing on API development,
                        performance optimization, and system security. Currently, I'm
                        seeking opportunities to apply my expertise in a dynamic and
                        innovative environment. Let's collaborate and bring your ideas to
                        life!
                    </p>
                    <p>
                        Exploring DevOps, CI/CD, and cloud technologies (AWS, Azure) has
                        further fueled my passion for building robust and efficient
                        systems. I’m grateful to have turned my passion into a career,
                        constantly learning and improving to create impactful digital
                        experiences!
                    </p>
                    </div>

                    {/* Tech Stack Typed */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Tech Stack</h3>
                        <ReactTyped
                            className="block !text-gray-300 text-block"
                            strings={[
                                "JavaScript Development",
                                "React Library",
                                "Node.js Development",
                                "RESTful API Design",
                                "SQL Databases",
                                "MongoDB (NoSQL)",
                                "Elasticsearch",
                                "Redis",
                                "Kafka",
                                "Git & GitHub",
                                "Testing & Debugging",
                            ]}
                            typeSpeed={60}
                            backSpeed={40}
                            backDelay={700}
                            loop
                        />
                    </div>



                    <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
                        {techStackIcons.map(({ icon: Icon, label }, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center gap-2 text-center cursor-pointer"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 0 }}
                                animate={{
                                    opacity: [1, 0.6, 1, 0.8, 1], // flicker effect
                                    y: [0, -12, 0, -6, 0],        // bounce oddly
                                    rotate: [0, 3, -3, 2, 0],     // wobble effect
                                }}
                                transition={{
                                    delay: idx * 0.2,    // stagger each icon
                                    duration: 2,         // cycle duration
                                    repeat: Infinity,    // loop forever
                                    repeatType: "mirror",
                                    ease: "easeInOut",
                                }}
                                viewport={{ once: false }}
                            >
                                <Icon className="text-4xl text-white transition-colors duration-300 hover:text-blue-400" />
                                <Badge
                                    variant="outline"
                                    className="text-gray-300 border-gray-600 transition-colors duration-300 hover:text-blue-400 hover:border-blue-400"
                                >
                                    {label}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>


                    {/* Experience */}
                    <div className="flex gap-50">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Experience</h3>
                            <ul className=" list-inside space-y-2 text-gray-300">
                                {experienceContent.company.map((item, idx) => (
                                    <Fade key={idx} duration={1200} >
                                        <li className="text-lg font-semibold list-style-none text-white-300">{item}</li>
                                    </Fade>
                                ))}
                                {experienceContent.expContent.map((item, idx) => (
                                    <Fade key={idx} duration={1200} >
                                        <li className="list-disc list-style-disc">{item}</li>
                                    </Fade>
                                ))}
                            </ul>
                        </div>
                        {/* Company Logo */}
                        {/* <div className="mt-6 hidden md:flex justify-center items-center">
                            <Fade duration={2000} >
                                <img
                                    src="https://res.cloudinary.com/dzapdxkgc/image/upload/v1740598607/Quantela_Logo_White-1_xtebtj.svg"
                                    alt="Quantela Logo"
                                    className="h-16 object-contain"
                                />
                            </Fade>
                        </div> */}
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default AboutComponent;
