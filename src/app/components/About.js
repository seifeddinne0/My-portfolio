"use client"
import Image from "next/image";
import Horizontaline from "./Horizontaline";

function About(){
    return(
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Horizontaline>
          <h1 className="mx-2 montserrat text-2xl text-center text-red-600">About Me</h1>
        </Horizontaline>
    <div className="mt-14 flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
        <div className="h-full w-full max-w-[420px] p-4 sm:p-3">
          <Image className="mx-auto w-8/12  md:w-full rounded-lg" src="/AboutPhoto.png" alt="profile Photo" width={700} height={700} />
        </div>
        <div className="flex w-full max-w-[620px] items-center justify-center rounded-xl bg-black bg-opacity-20 p-5">
          <p className="text-wrap roboto text-lg text-white md:text-lg">Computer Science graduate specialized in modern web development, with solid hands-on experience in Next.js, React,
TypeScript, and full-stack development. Skilled at designing performant, responsive, and maintainable applications, with
close attention to architecture, security, and best practices. Curious, self-driven, and detail-oriented when solving
technical problems.</p>
        </div>
      </div>
    </div>
  );
}
export default About;