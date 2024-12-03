import CardButton from "./CardButton";
function PortfolioCard({thumbnail, altName,children}) {
    return(
        <div className="col mb-3">
          <div className="card shadow-sm">
            <img src={thumbnail} alt={altName}/>
            <div className="card-body">
              {children}
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="KamikazeShop/kamikaze.html"><CardButton/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default PortfolioCard;