import Image from 'next/image';
import Button from './Button';
function Presentation(){
return(
<section className="container mt-20 mb-5 mx-auto" id="Home">
  <div className="lg:mx-28 px-4 py-5 ">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-5 py-5 lg:mx-32 mx-auto">
      <div>
        <h4 className="xl:text-lg text-xl text-white tenali-ramakrishna-regular mb-2.5">I am</h4>
        <h1 className="xl:text-4xl text-4xl font-bold tenali-ramakrishna-regular leading-tight mb-2.5 text-red-600">Seif Eddine Ben Achour</h1>
        <p className="text-lg xl:text-lg text-white tenali-ramakrishna-regular mb-2.5">Full stack developer</p>
        <Button title="Contact Me"/>
       </div>
      <div className="w-10/12 sm:w-8/12 lg:w-6/12 lg:ml-48">
        <Image
          src="/profile.jpg"
          className="lg:w-12/12 md:rounded-full w-4/5 rounded-lg md:mx-auto lg:ml-auto img-fluid" 
          alt="profile photo" 
          width={700} 
          height={500} 
        />  
      </div>
    </div>
  </div>
</section>
);
}
export default Presentation;    
