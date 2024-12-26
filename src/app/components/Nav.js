"use client";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // For swipe detection
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect swipe gesture
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left (close sidebar)
      setIsMenuOpen(false);
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right (open sidebar)
      setIsMenuOpen(true);
    }
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup
    };
  }, [isMenuOpen]);

  // Add swipe event listeners to the entire page
  useEffect(() => {
    const handleTouchStartPage = (e) => setTouchStartX(e.touches[0].clientX);
    const handleTouchMovePage = (e) => setTouchEndX(e.touches[0].clientX);
    const handleTouchEndPage = () => {
      if (touchStartX - touchEndX > 50) {
        setIsMenuOpen(false); // Swipe left (close sidebar)
      } else if (touchEndX - touchStartX > 50) {
        setIsMenuOpen(true); // Swipe right (open sidebar)
      }
    };

    document.addEventListener("touchstart", handleTouchStartPage);
    document.addEventListener("touchmove", handleTouchMovePage);
    document.addEventListener("touchend", handleTouchEndPage);

    return () => {
      document.removeEventListener("touchstart", handleTouchStartPage);
      document.removeEventListener("touchmove", handleTouchMovePage);
      document.removeEventListener("touchend", handleTouchEndPage);
    };
  }, [touchStartX, touchEndX]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow z-10">
      <div className="px-4 flex place-items-center justify-between py-2">
        <Link href="/" className="text-decoration-none">
          <h4 className="text-red-600 montserrat font-bold text-2xl">
            Seif Eddine
          </h4>
        </Link>

        {/* Hamburger button */}
        <button
          className="bg-red-600 p-2 rounded-md text-white focus:outline-none md:hidden"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoClose className="text-black w-7 h-7" />
          ) : (
            <RxHamburgerMenu className="text-black w-7 h-7" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-95 text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="px-6 py-7 mt-5 items-center">
          <div>
            <Image
              src="/profileSide.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full mx-auto mt-5 mb-5"
            />
          </div>

          <Link
            className="flex justify-around montserrat text-lg text-red-600 pt-4 hover:text-red-800"
            href="#About"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaRegUser className="size-6 text-red-800 " />
            About Me
          </Link>

          <Link
            className="flex justify-around montserrat mb-4 text-lg text-red-600 pt-4 hover:text-red-800 "
            href="#Portfolio"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaFolderOpen className="size-6 text-red-800" /> Portfolio
          </Link>

          <Link
            className="flex justify-around montserrat text-lg text-red-600 hover:text-red-800"
            href="#Contact"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaEnvelope className="size-6 text-red-800" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
