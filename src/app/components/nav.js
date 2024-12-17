function Nav(){
    return(
        <nav className="navbar navbar-expand-lg fixed-top"
        id="navbar" >
        <div className="container-fluid">
              <a href="#Home" className="text-decoration-none "><h4 className="ms-3 text-danger">Seif Eddine</h4></a> 
              <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link text-danger" aria-current="page" href="#About">About</a>
              <a className="nav-link text-danger" href="#Portfolio">Portfolio</a>
              <a className="nav-link text-danger" href="#Contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    )
}
export default Nav;