import { RxHamburgerMenu } from "react-icons/rx";
function Nav(){
    return(
        <nav className="fixed top-0 h-14 w-full bg-black shadow z-10" id="navbar">
  <div className="px-4 flex place-items-center justify-between py-2">
    <a href="#Home" className="text-decoration-none">
      <h4 className="text-red-600 ramaraja-regular  font-bold text-2xl">Seif Eddine</h4>
    </a>
    <button 
      className="bg-red-600 p-2 rounded-md text-white focus:outline-none md:hidden"
      type="button" 
    >
      <RxHamburgerMenu className="text-black w-7 h-6" />
    </button>
    <div className="hidden md:flex items-center space-x-4" id="navbarNavAltMarkup">
      <a className="ramaraja-regular text-lg text-red-600 hover:text-red-800" href="#About">About</a>
      <a className="ramaraja-regular text-lg text-red-600 hover:text-red-800" href="#Portfolio">Portfolio</a>
      <a className="ramaraja-regular text-lg text-red-600 hover:text-red-800" href="#Contact">Contact</a>
    </div>
  </div>
</nav>

    );
}
export default Nav;