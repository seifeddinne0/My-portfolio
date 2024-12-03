import ContactMeButton from "./ContactMeButton";
function Contact() {
    return (
        <section className="mt-5" id="Contact">
            <div className="mt-5">
                <div className="d-flex align-items-center justify-content-center mb-5">
                    <hr className="flex-grow-1 border-white" />
                    <h1 className="mx-3 text-center text-danger">Contact Me</h1>
                    <hr className="flex-grow-1 border-white" />
                </div>
            </div>
            <div className="d-flex Mobile-contact">
                <div className="w-50 d-flex flex-column align-items-center mx-auto">
                    <h1 className="text-white h1-wrap-balance">Let&apos;s chat.</h1>
                    <p className="text-white text-start">Let&apos;s create something together.</p>
                </div>
                <div className="Form-mobile">
                    <form action="">
                        <div className="mb-3 d-flex flex-column">
                            <label htmlFor="exampleFormControlInput1" className="text-white form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name" />
                        </div>
                        <div className="mb-3 d-flex flex-column">
                            <label htmlFor="exampleFormControlInput2" className="text-white form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3 d-flex flex-column">
                            <label htmlFor="exampleFormControlTextarea1" className="text-white form-label">Your message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <div className="d-flex justify-content-center">
                        <ContactMeButton/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Contact;