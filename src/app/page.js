import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Presentation from "./components/Presentation";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import VantaNet from "./components/VantaNet";
export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 1 }} id="Hero">
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
