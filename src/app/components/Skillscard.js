import { motion } from "framer-motion";
import Image from "next/image";
function Skillscard({srcImg,altImg}) {
    return (
      <div className="rounded-2xl border-2 border-neutral-600 p-4"> 
        <motion.div initial={{scale:0.8}} animate={{scale:1.2}} transition={{duration:1,repeat:Infinity,repeatType:"reverse"}}> 
        <Image className="size-12" src={srcImg} alt={altImg} width={700} height={700} />
        </motion.div>
      </div>
    
    );
}
export default Skillscard;
