"use client" 
import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Presentation from "./components/Presentation";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import VantaNet from "./components/VantaNet";
import Loading from "./components/Loading";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a data fetch
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
}, []);

  return (
    <div className="overflow-x-hidden" style={{ position: "relative", zIndex: 1 }} id="Hero">
      <div>
       {isLoading ? <Loading /> : <></>}
      </div>
      <VantaNet/>
      <Nav/>
      <Presentation/>
      <About/>
      <Skills/> 
      <Portfolio/> 
      <Contact/>
      <Footer/>
    </div>
  );
}
