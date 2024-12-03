import PortfolioCard from "./PortfolioCard"
function Portfolio(){
    return(
        <section className="mt-5 mb-5" id="Portfolio">
        <div  className="mt-5 " >
          <div className="d-flex align-items-center justify-content-center mb-5">
            <hr className="flex-grow-1 border-white"/> <h1 className="mx-3 text-center text-danger">My Portfolio</h1><hr className="flex-grow-1 border-white"/>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 flex-wrap">
        <PortfolioCard thumbnail="/KamikazeStore.png" altName="KamikazeStore">
          <p className="card-text">
          A sleek e-commerce site offering seamless shopping and responsive design—perfect for businesses looking to grow online.
          </p>
        </PortfolioCard>
        <PortfolioCard thumbnail="/KamikazeStore.png" altName="KamikazeStore">
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
        </PortfolioCard>
        <PortfolioCard thumbnail="/KamikazeStore.png" altName="KamikazeStore">
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
        </PortfolioCard>
        <PortfolioCard thumbnail="/KamikazeStore.png" altName="KamikazeStore">
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
        </PortfolioCard>
        
        </div>
      </section>
    )
}
export default Portfolio;