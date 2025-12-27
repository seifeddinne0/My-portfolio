"use client"

import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

function PortfolioCard({ images, altName, children, githubLink }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="col mb-3">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-100"
      >
        <div className="relative group">
          <Image
            className="rounded-t-lg w-full h-auto"
            src={images[currentImageIndex]}
            alt={`${altName} - Image ${currentImageIndex + 1}`}
            width={700}
            height={700}
          />

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        <div className="p-6">
          {children}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2"
          >
            <FaGithubSquare className="size-12 text-red-500 hover:text-red-600" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default PortfolioCard;  
