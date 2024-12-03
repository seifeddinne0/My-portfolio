import SkillsCard from "./SkillsCard";
function About(){
    return(
        <section id="About">
        <div className="mb-5">
            <div className="d-flex align-items-center justify-content-center ">
            <hr className="flex-grow-1 border-white"/> <h1 className="mx-3 text-center text-danger">About</h1><hr className="flex-grow-1 border-white"/>
            </div>
          <p className="text-center text-white h1-wrap-balance mx-auto">I’m a Computer science student with a deep enthusiasm for technology and hands-on experience in front-end development. I enjoy bringing creative designs to life on the web and exploring data to uncover insights. With a background in robotics and experience with Arduino, I’m always eager to learn new technologies and take on challenges that push my boundaries.</p>
        </div> 
        <div  className="mt-5" >
  <div className="d-flex align-items-center justify-content-center mb-5">
    <hr className="flex-grow-1 border-white"/> <h1 className="mx-3 text-center text-danger">My Skills</h1><hr className="flex-grow-1 border-white"/>
  </div>
  <div className="d-flex justify-content-evenly flex-wrap mb-5">
    <SkillsCard srcImg="/html-5.png" classNameImg="card-image-top my-auto" altImg="HTML" />
    <SkillsCard srcImg="/css-3.png" classNameImg="card-image-top my-auto" altImg="CSS3"/>
    <SkillsCard srcImg="/Bootstrap.png" classNameImg="card-image-top my-auto" altImg="Bootstrap"/>
    <SkillsCard srcImg="/JavaScript.png" classNameImg="card-image-top my-auto " altImg="JavaScript"/>
    <SkillsCard srcImg="/GIT.png" classNameImg="card-image-top my-auto" altImg="Git"/>
    <SkillsCard srcImg="/PostgreSQL.png" classNameImg="card-image-top my-auto" altImg="GitHub"/>
    <SkillsCard srcImg="/React.png" classNameImg="card-image-top my-auto" altImg="React"/>
    <SkillsCard srcImg="/nextJs.png" classNameImg="card-image-top my-auto" altImg="Next"/>
    <SkillsCard srcImg="/nodejs.svg" classNameImg="card-image-top my-auto" altImg="NodeJS"/>
  
    </div>
</div>
      </section> 
    )
}
export default About;