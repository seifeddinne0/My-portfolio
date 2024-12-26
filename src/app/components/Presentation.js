import Image from 'next/image';
import Button from './Button';
function Presentation(){
return(
<section className="container mt-20 mb-5 mx-auto">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-5 py-5 lg:mx-32 mx-auto px-4">
      <div>
        <h4 className="xl:text-lg text-xl text-white montserrat mb-2.5">I am</h4>
        <h1 className="xl:text-4xl text-4xl font-bold montserrat leading-tight mb-2.5 text-red-600">Seif Eddine Ben Achour</h1>
        <p className="text-lg xl:text-lg text-white montserrat mb-2.5">Full stack developer</p>
        <Button title="Contact Me"/>
       </div>
      <div className="w-10/12 lg:w-6/12 lg:ml-48">
        <Image
          src="/profile.jpg"
          className="lg:w-12/12 md:rounded-full xl:w-4/5 md:w-3/5 lg:w-[600px] rounded-lg md:mx-auto lg:ml-auto img-fluid" 
          alt="profile photo" 
          width={700} 
          height={500} 
        />  
      </div>
    </div>
</section>
);
}
export default Presentation;    
