"use client"
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegUser,FaFolderOpen,FaEnvelope } from "react-icons/fa";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference for the sidebar to detect clicks outside
  const sidebarRef = useRef(null);

  // Toggle the menu on button click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicked outside of the sidebar
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
        <Link href="#Hero" className="text-decoration-none">
          <h4 className="text-red-600 ramaraja-regular font-bold text-2xl">
            Seif Eddine
          </h4>
        </Link>

        {/* Hamburger button */}
        <button
          className="bg-red-600 p-2 rounded-md text-white focus:outline-none md:hidden"
          type="button"
          onClick={toggleMenu} // Trigger the toggle function
        >
          {isMenuOpen ? (
            <IoClose className="text-black w-7 h-7" /> // Show 'X' when menu is open
          ) : (
            <RxHamburgerMenu className="text-black w-7 h-7" /> // Show hamburger when menu is closed
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef} // Add reference to the sidebar
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-95 text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="px-6 py-7 mt-5 items-center" >
        <div>
          <Image src="/profileSide.jpg" alt="Profile" width={100} height={100} className="rounded-full mx-auto mt-5 mb-5"/>
        </div>
        
          <Link
            className="flex justify-around text-lg text-red-600 pt-4 hover:text-red-800"
            href="#About"
            onClick={() => setIsMenuOpen(false)} // Close the sidebar when link is clicked
          ><FaRegUser className="size-6 text-red-800 "/>
            About Me
          </Link>
          
          <Link
            className="flex justify-around mb-4 text-lg text-red-600 pt-4 hover:text-red-800 "
            href="#Portfolio"
            onClick={() => setIsMenuOpen(false)} // Close the sidebar when link is clicked
          >
            <FaFolderOpen className="size-6 text-red-800" /> Portfolio
          </Link>
          
          
          <Link
            className="flex justify-around text-lg text-red-600 hover:text-red-800"
            href="#Contact"
            onClick={() => setIsMenuOpen(false)} // Close the sidebar when link is clicked
          ><FaEnvelope className="size-6 text-red-800" />
            Contact
          </Link>
      </div>
      </div>

      {/* Main content, push the page content when sidebar is open */}
      <div
        className= "md:flex hidden items-center space-x-4 px-4 py-2 absolute top-0 right-0 z-10"
      >
        <a className="ramaraja-regular text-lg text-red-600 hover:text-red-800" href="#About">
          About
        </a>
        <a className="ramaraja-regular text-lg text-red-600 hover:text-red-800" href="#Portfolio">
          Portfolio
        </a>
        <a className="ramaraja-regular text-lg text-red-600 hover:text-red-800" href="#Contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
