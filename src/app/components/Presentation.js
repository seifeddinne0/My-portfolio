"use client"
import Link from "next/link";
import {motion} from "framer-motion"
import Image from 'next/image';
import Button from './Button';
function Presentation(){
return(
<section className="container mt-20 mb-5 mx-auto">
    <div className="flex flex-col-reverse md:flex-row md:ml-14 lg:flex-row items-center gap-5 py-5 lg:mx-32 mx-auto px-4">
      <div>
        <motion.h4 initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7,delay:0.2}} className="xl:text-lg text-xl text-white montserrat mb-2.5">I am</motion.h4>
        <motion.h1 initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.8,delay:0.4}} className="xl:text-4xl text-4xl font-bold montserrat leading-tight mb-2.5 text-red-600">Seif Eddine Ben Achour</motion.h1>
        <motion.p initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.9,delay:0.6}} className="text-lg xl:text-lg text-white montserrat mb-2.5">Full stack developer</motion.p>
        <motion.div 
        initial={{x:-100,opacity:0}} 
        whileInView={{x:0,opacity:1}} 
        transition={{duration:2,delay:0.7, type:"spring", stiffness:190}}
        >
          <Link href="#Contact">
        <Button title="Contact Me"/>      
        </Link>
        </motion.div>
       </div>
      <motion.div 
      initial={{x:100,opacity:0}} 
      whileInView={{x:0,opacity:1}}
      transition={{duration:1}}
      className="w-10/12 lg:w-6/12 lg:ml-48">
        <Image
          src="/profile.jpg"
          className="lg:w-12/12 md:rounded-full sm:w-2/3 sm:mx-auto xl:w-1/2 md:w-3/5 lg:w-[600px] rounded-lg md:mx-auto lg:ml-auto img-fluid" 
          alt="profile photo" 
          width={700} 
          height={500} 
        />  
      </motion.div>
    </div>
</section>
);
}
export default Presentation;    
