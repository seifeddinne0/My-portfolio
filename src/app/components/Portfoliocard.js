"use client"

import Image from "next/image";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

function PortfolioCard({ title, tagline, bullets, stack, previewImage, altName, demoLink, githubLink, className = "" }) {
  return (
    <article className={`h-[500px] w-full overflow-hidden rounded-2xl border border-red-100 bg-white shadow-[0_18px_50px_-30px_rgba(127,29,29,0.45)] ${className}`}>
      <div className="flex h-full flex-col p-5 sm:p-6">
        <div className="overflow-hidden rounded-xl bg-neutral-100">
          <Image
            className="h-48 w-full object-cover"
            src={previewImage}
            alt={altName}
            width={1200}
            height={675}
          />
        </div>

        <div className="mt-4 flex flex-1 flex-col">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
            <p className="mt-1 text-sm font-medium text-red-700">{tagline}</p>
          </div>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-700">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-red-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4">
            <div className="flex gap-3">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <FaArrowUpRightFromSquare className="size-4" />
                Live Demo
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-red-200 px-4 py-3 text-sm font-semibold text-red-700 transition hover:border-red-300 hover:bg-red-50"
              >
                <FaGithub className="size-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      </article>
  );
}

export default PortfolioCard;