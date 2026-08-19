import { FaEnvelope, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Horizontaline from "./Horizontaline";

function Footer(){
  return(
    <footer className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-8 pt-10">
      <Horizontaline>
        <h1 className="mx-2 text-2xl montserrat text-center text-red-600">Contact Me</h1>
      </Horizontaline>
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="text-center md:text-left">
          <h2 className="montserrat text-2xl font-bold text-red-600 sm:text-3xl">Seif Eddine Ben Achour</h2>
          <div className="my-4 text-lg xl:text-lg text-white montserrat mb-2.5">
            Web Developer
          </div>
          <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-white/70 sm:text-xs">
            © 2026 Seif Eddine Ben Achour. All rights reserved.
          </p>
        </div>

        <div className="space-y-4 text-white">
          <a href="mailto:seifbenachour.te@gmail.com" className="flex items-center gap-4 transition hover:opacity-80">
            <FaEnvelope className="size-8 shrink-0 text-white sm:size-9" />
            <span className="text-sm font-semibold sm:text-base">seifbenachour.te@gmail.com</span>
          </a>
          <a href="https://github.com/seifeddinne0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition hover:opacity-80">
            <FaGithubSquare className="size-8 shrink-0 text-white sm:size-9" />
            <span className="text-sm font-semibold break-all sm:text-base">github.com/seifeddinne0</span>
          </a>
          <a href="https://www.linkedin.com/in/seif-eddine-ben-achour-2721602b4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition hover:opacity-80">
            <FaLinkedin className="size-8 shrink-0 text-white sm:size-9" />
            <span className="text-sm font-semibold break-all sm:text-base">linkedin.com/in/seif-eddine-ben-achour</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;