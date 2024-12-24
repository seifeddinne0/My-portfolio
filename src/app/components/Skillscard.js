import Image from "next/image";
function Skillscard({srcImg,altImg}) {
    return (
      <div className="rounded-2xl border-2 border-neutral-600 p-4">  
        <Image className="size-12" src={srcImg} alt={altImg} width={700} height={700} />
        
      </div>
    
    );
}
export default Skillscard;
