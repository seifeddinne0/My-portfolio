"use client"
import {motion} from "framer-motion"
import { SiTailwindcss, SiJavascript,SiReact } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

import Horizontaline from './Horizontaline';
import Skillscard from './Skillscard';
function Skills(){
    return(
      <div>
        <Horizontaline>
          <h1 className="mx-2 text-2xl montserrat text-center text-red-600">My Skills</h1>
        </Horizontaline>     
        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="flex flex-wrap items-center justify-center gap-4">
        <Skillscard srcImg="/nextJs.webp"altImg="Next" />
        <div className="rounded-2xl border-2 border-neutral-600 p-4">
          <SiReact className="size-12 text-cyan-500"/>
        </div>
        <Skillscard srcImg="/Express.png"altImg="Express"/>
        <div className="rounded-2xl border-2 border-neutral-600 p-4">
          <FaNodeJs className="size-12 text-green-500"/>
        </div>
        <div className="rounded-2xl border-2 border-neutral-600 p-4">  
            <SiTailwindcss className="size-12 text-cyan-500" />
               
        </div>
        <div className="rounded-2xl border-2 border-neutral-600 p-4">
          <SiJavascript className="size-12 text-yellow-500"/>
        </div>
        <Skillscard srcImg="/GIT.png"altImg="Git"/>
        <div className="rounded-2xl border-2 border-neutral-600 p-4">
          <BiLogoPostgresql className="size-12 text-blue-700"/>
        </div>
      </motion.div>
      </div>
      );
}
export default Skills;