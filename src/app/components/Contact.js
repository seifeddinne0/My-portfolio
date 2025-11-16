"use client"
import { motion } from "framer-motion"
import Horizontaline from "./Horizontaline";
import { useRef, useState } from "react";
function Contact(){
  const formRef = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+\d]+$/; // allows + and digits only
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]+$/u; // alphabetic (incl. accents), spaces, hyphen, apostrophe

  function validateAll() {
    const newErrors = {};
    const fn = firstName.trim();
    const ln = lastName.trim();

    if (!fn) {
      newErrors.firstName = "First name is required.";
    } else if (fn.length > 15) {
      newErrors.firstName = "First name must be 15 characters or less.";
    } else if (!nameRegex.test(fn)) {
      newErrors.firstName = "First name must contain alphabetic characters only.";
    }

    if (!ln) {
      newErrors.lastName = "Last name is required.";
    } else if (ln.length > 15) {
      newErrors.lastName = "Last name must be 15 characters or less.";
    } else if (!nameRegex.test(ln)) {
      newErrors.lastName = "Last name must contain alphabetic characters only.";
    }

    if (!emailRegex.test(email)) newErrors.email = "Enter a valid email address.";
    if (!phone || !phoneRegex.test(phone)) newErrors.phone = "Phone can contain only numbers.";
    if (message.length > 200) newErrors.message = "Message must be 200 characters or less.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateAll()) {
      // submit the form to Formspree
      if (formRef.current) formRef.current.submit();
    }
  }

    return (
      
  <div id="Contact">
        <Horizontaline>
          <h1 className="mx-2 text-2xl montserrat text-center text-red-600" >Contact Me</h1>
        </Horizontaline>

          <motion.div 
          initial={{y:100,opacity:0}} 
          whileInView={{y:0,opacity:1}} 
          transition={{duration:0.5}}
          className="mx-auto max-w-2xl text-center" >
            <p className="mt-2 text-white text-lg/8 t">Let&apos;s create something together.</p>
          </motion.div>
          <form ref={formRef} onSubmit={handleSubmit} action="https://formspree.io/f/xyzzzdzr" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
                <label className="md:ml-6 ml-8 lg:ml-6 text-white block text-sm/6 font-semibold">First name</label>
                <div className="mt-2.5">
                  <input 
                    type="text" 
                    name="first-name" 
                    id="first-name" 
                    value={firstName}
                    maxLength={15}
                    onChange={(e)=> setFirstName(e.target.value)}
                    className="mx-auto w-10/12   block rounded-md text-black px-3.5 py-2 text-base focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                    aria-invalid={!!errors.firstName}
                    aria-describedby="firstName-error"
                  />
                  {errors.firstName && <p id="firstName-error" className="text-red-400 text-sm mt-1 ml-8">{errors.firstName}</p>}
                </div>
              </motion.div>
              <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}>
                <label className="md:ml-6 ml-8 lg:ml-6 text-white block text-sm/6 font-semibold">Last name</label>
                <div className="mt-2.5">
                  <input 
                    type="text" 
                    name="last-name" 
                    id="last-name" 
                    value={lastName}
                    maxLength={15}
                    onChange={(e)=> setLastName(e.target.value)}
                    className="mx-auto w-10/12 block rounded-md text-black px-3.5 py-2 text-base focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                    aria-invalid={!!errors.lastName}
                    aria-describedby="lastName-error"
                  />
                  {errors.lastName && <p id="lastName-error" className="text-red-400 text-sm mt-1 ml-8">{errors.lastName}</p>}
                </div>
              </motion.div>
              <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="sm:col-span-2">
                <label className="md:ml-12 ml-8  text-white block text-sm/6 font-semibold">Email</label>
                <div className="mt-2.5">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className="mx-auto w-10/12 block rounded-md text-black px-3.5 py-2 text-base focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                  />
                  {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1 ml-8">{errors.email}</p>}
                </div>
              </motion.div>
              <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="sm:col-span-2">
                <label  className="ml-8 md:ml-12 text-white block text-sm/6 font-semibold">Phone number</label>
                <div className="mt-2.5">
                  <div className="flex rounded-md has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-red-600">
                  <input 
                    type="text" 
                    name="phone-number" 
                    id="phone-number" 
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                    className="mx-auto w-10/12 block rounded-md text-black px-3.5 py-2 text-base focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                    aria-invalid={!!errors.phone}
                    aria-describedby="phone-error"
                  />
                  </div>
                  {errors.phone && <p id="phone-error" className="text-red-400 text-sm mt-1 ml-8">{errors.phone}</p>}
                </div>
              </motion.div>
              <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="sm:col-span-2">
                <label  className="ml-8 md:ml-12 text-white block text-sm/6 font-semibold">Message</label>
                <div className="mt-2.5">
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="4" 
                    value={message}
                    maxLength={200}
                    onChange={(e)=> setMessage(e.target.value)}
                    className=" mx-auto w-10/12 block rounded-md  px-3.5 py-2 text-base text-black focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error message-count"
                  />
                  <div className="flex justify-between items-center mt-1 ml-8 mr-8">
                    {errors.message ? <p id="message-error" className="text-red-400 text-sm">{errors.message}</p> : <span id="message-count" className="text-gray-300 text-sm">{message.length}/200</span>}
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="mt-10">
              <motion.button whileTap={{scale:0.9}} type="submit" className="block w-10/12 mx-auto rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Contact Me</motion.button>
            </motion.div>
          </form>
        </div>
      );
  }
  export default Contact;
