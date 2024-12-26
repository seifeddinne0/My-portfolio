import { SiTailwindcss } from "react-icons/si";
import Horizontaline from './Horizontaline';
import Skillscard from './Skillscard';
function Skills(){
    return(
      <div>
        <Horizontaline>
          <h1 className="mx-2 text-2xl montserrat text-center text-red-600">My Skills</h1>
        </Horizontaline>     
        <div className="flex flex-wrap items-center justify-center gap-4">
        <Skillscard srcImg="/nextJs.png"altImg="Next" />
        <Skillscard srcImg="/React.png"altImg="React"/>
        <Skillscard srcImg="/Express.png"altImg="Express"/>
        <Skillscard srcImg="/nodejs.svg"altImg="NodeJS"/>
        <div className="rounded-2xl border-2 border-neutral-600 p-4">  
            <SiTailwindcss className="size-12 text-cyan-500" />
               
        </div>
        <Skillscard srcImg="/JavaScript.png" altImg="JavaScript"/>
        <Skillscard srcImg="/GIT.png"altImg="Git"/>
        <Skillscard srcImg="/PostgreSQL.png"altImg="PostgreSQL"/> 
      </div>
      </div>
      );
}
export default Skills;