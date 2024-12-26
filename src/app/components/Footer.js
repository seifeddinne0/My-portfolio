import { FaGithubSquare,FaLinkedin } from "react-icons/fa";
function Footer(){
    return(

        <div>
            <hr className="w-full h-[2px] mt-8 bg-red-200 border-0 rounded dark:bg-white" />
        <div className="p-3 flex justify-between items-center ">
      <div className="p-4 text-center roboto text-neutral-700 dark:text-neutral-200">
      © 2025   Seif Eddine Ben Achour
      </div>
        <div className=" flex flex-row items-center gap-2">
        <a
          className="" 
          href="https://www.linkedin.com/in/seif-eddine-ben-achour-2721602b4/"
        ><FaLinkedin className="lg:size-9 size-6 text-red-500 hover:text-red-600" /></a>
         <a
          className=" ml-2 "
          href="https://github.com/seifeddinne0"
        ><FaGithubSquare className="lg:size-9 size-6 text-red-500 hover:text-red-600" /></a>
        </div>
      
    </div>
    </div>
    );
}
export default Footer;