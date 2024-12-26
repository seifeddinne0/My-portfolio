"use client"
import {motion} from "framer-motion"
import Horizontaline from "./Horizontaline";
function Contact(){
    return (
      
<div id="Contact">
      <Horizontaline>
        <h1 className="mx-2 text-2xl montserrat text-center text-red-600" >Contact Me</h1>
      </Horizontaline>

        <div className="mx-auto max-w-2xl text-center" >
          <p className="mt-2 text-lg/8 texredoutline-red-500">Let&apos;s create something together.</p>
        </div>
        <form action="https://formspree.io/f/xyzzzdzr" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
              <label className="md:ml-6 ml-8 lg:ml-6 text-white block text-sm/6 font-semibold">First name</label>
              <div className="mt-2.5">
                <input type="text" name="first-name" id="first-name" className="mx-auto w-10/12   block rounded-md text-black px-3.5 py-2 text-base focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"/>
              </div>
            </motion.div>
            <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
              <label className="md:ml-6 ml-8 lg:ml-6 text-white block text-sm/6 font-semibold">Last name</label>
              <div className="mt-2.5">
                <input type="text" name="last-name" id="last-name" className="mx-auto w-10/12 block rounded-md text-black px-3.5 py-2 text-base focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"/>
              </div>
            </motion.div>
            <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="sm:col-span-2">
              <label className="md:ml-12 ml-8  text-white block text-sm/6 font-semibold">Email</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" className="mx-auto w-10/12 block rounded-md text-black px-3.5 py-2 text-base focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"/>
              </div>
            </motion.div>
            <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="sm:col-span-2">
              <label  className="ml-8 md:ml-12 text-white block text-sm/6 font-semibold">Phone number</label>
              <div className="mt-2.5">
                <div className="flex rounded-md has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-red-600">
                <input type="text" name="phone-number" id="phonr-number" className="mx-auto w-10/12 block rounded-md text-black px-3.5 py-2 text-base focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"/>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="sm:col-span-2">
              <label  className="ml-8 md:ml-12 text-white block text-sm/6 font-semibold">Message</label>
              <div className="mt-2.5">
                <textarea name="message" id="message" rows="4" className=" mx-auto w-10/12 block rounded-md  px-3.5 py-2 text-base text-black focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"></textarea>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="mt-10">
            <button type="submit" className="block w-10/12 mx-auto rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Contact Me</button>
          </motion.div>
        </form>
      </div>
    );
}
export default Contact;