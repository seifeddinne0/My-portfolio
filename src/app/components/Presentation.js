"use client"
import Image from 'next/image';
function Presentation() {
  return (
    <section className="mt-20 mb-5 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse items-center gap-8 py-5 md:flex-row md:justify-between">
        <div className="w-full max-w-lg text-center md:text-left">
          <h4 className="xl:text-lg text-xl text-white montserrat mb-2.5">Hi There!</h4>
          <h1 className="my-4  xl:text-4xl text-4xl font-bold montserrat leading-tight mb-2.5 text-red-600">I am Seif Eddine Ben Achour</h1>
          <p className="text-lg xl:text-lg text-white montserrat mb-2.5">Web developer</p>
          <div className="my-4 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="/cv seifeddine ben achour.pdf" download="Seif_Eddine_Ben_Achour_CV.pdf" className="inline-flex items-center rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-700">
              Download CV
            </a>
          </div>
        </div>
        <div className="w-full max-w-[220px] md:max-w-[260px] lg:max-w-[300px]">
          <Image
            src="/profile-picture.png"
            className="mx-auto w-full rounded-full"
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
