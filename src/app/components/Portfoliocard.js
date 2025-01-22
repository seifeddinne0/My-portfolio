import Image from "next/image";
import Button from "./Button";
import {motion} from "framer-motion";
function PortfolioCard({thumbnail,altName,children}) {
  return (
    <div className="col mb-3">
  <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-100">
          <Image
            className="rounded-t-lg"
            src={thumbnail}
            alt={altName}
            width={700} height={700}/>
        <div className="p-6">
          {children}
           <Button title="View" />
        </div>
      </motion.div>
      </div>
  );
}
    export default PortfolioCard;  
