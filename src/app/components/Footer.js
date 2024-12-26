"use client"
import {motion} from "framer-motion";
import { FaGithubSquare,FaLinkedin } from "react-icons/fa";
function Footer(){
    return(

        <div>
            <motion.hr initial={{y:100, opacity:0}}
             whileInView={{opacity:1,y:0}} 
             transition={{duration:0.5}}  
             className="w-full h-[2px] mt-8 bg-red-200 border-0 rounded dark:bg-white" 
             />
        <div className="p-3 flex justify-between items-center ">
      <motion.div 
        initial={{y:100, opacity:0}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.7}}
        className="p-4 text-center roboto text-neutral-700 dark:text-neutral-200"
         >
      © 2025   Seif Eddine Ben Achour
      </motion.div>
        <motion.div initial={{y:100, opacity:0}} 
        whileInView={{opacity:1,y:0}} 
        transition={{duration:0.7}}  
        className=" flex flex-row items-center gap-2"
        >
        <a
          className="" 
          href="https://www.linkedin.com/in/seif-eddine-ben-achour-2721602b4/"
        ><FaLinkedin className="lg:size-9 size-6 text-red-500 hover:text-red-600" /></a>
         <a
          className=" ml-2 "
          href="https://github.com/seifeddinne0"
        ><FaGithubSquare className="lg:size-9 size-6 text-red-500 hover:text-red-600" /></a>
        </motion.div>
      
    </div>
    </div>
    );
}
export default Footer;