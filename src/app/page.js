import Nav from "./components/nav";
import Presentation from "./components/Presentation";
import About from "./components/about";
import Portfolio from "./components/Portfolio";
import Footer from "./components/footer";
import Contact from "./components/contact";

function Home() {
  return (
  <div className="bg-dark"> 
  <Nav/>
  <Presentation/>
  <About/>
  <Portfolio/>
  <Contact/>
  <Footer/> 
  </div>
  );
}
export default Home;