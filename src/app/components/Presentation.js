import Image from 'next/image';
import ContactMeButton from './ContactMeButton';
function Presentation() {
  return (
    <section className="mt-5 mb-5" id="Home" >
      <div className="container col-xxl-8 px-4 bg-transparent py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 ">
          <Image src="/profile.jpg" className="rounded d-block mx-lg-auto img-fluid" alt="profile photo" width={700} height={500} />          
        </div>
          <div className="col-lg-6">
            <h4 className="text-white ramaraja-regular">I am </h4>
            <h1 className="display-5 fw-bold  lh-1 mb-3 text-danger">Seif Eddine Ben Achour </h1>
            <p className="lead text-white ramaraja-regular"> MERN stack developer </p>
            <a href="#Contact" role="button"><ContactMeButton/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Presentation;