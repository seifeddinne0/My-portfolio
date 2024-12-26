import {motion} from "framer-motion";
function Horizontaline({ children }) {
    return (
    <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} className="flex items-center justify-center mb-5">
      <hr className="md:w-1/3 w-24 h-[1px] my-8 bg-red-200 border-0 rounded dark:bg-gray-700" />
      {children}
      <hr className="md:w-1/3 w-24 h-[1px] my-8 bg-red-200 border-0 rounded dark:bg-gray-700 " />
  </motion.div>);
  }
  
  export default Horizontaline;