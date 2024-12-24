"use client"
import { useEffect, useRef } from "react";

const VantaNet = () => {
  const vantaRef = useRef(null);  // Reference to the div element

  useEffect(() => {
    // Dynamically load Three.js and Vanta.js libraries
    if (typeof window !== "undefined") {
      const scriptThree = document.createElement("script");
      scriptThree.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      scriptThree.onload = () => {
        const scriptVanta = document.createElement("script");
        scriptVanta.src = "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.net.min.js";
        scriptVanta.onload = () => {
          window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x8c5e5e,
            backgroundColor: 0x202025,
            points: 11.0,
            maxDistance: 20.0,
            spacing: 16.0,
          });
        };
        document.body.appendChild(scriptVanta);
      };
      document.body.appendChild(scriptThree);
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();  // Cleanup Vanta effect on unmount
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",  // Fix the background in place
        top: 0,
        left: 0,
        width: "100vw",  // Full viewport width
        height: "100vh", // Full viewport height
        zIndex: -1,  // Make sure it's behind all content
      }}
    />
  );
};

export default VantaNet;
