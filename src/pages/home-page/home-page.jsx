import React from "react";

const HomePage = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light-slate">
          <a className="navbar-brand text-slate" href="#">
            ENIBLA
          </a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Dashboard <span className="sr-only"></span>
              </a>
              <a className="nav-item nav-link" href="#">
                Orders
              </a>
              <a className="nav-item nav-link" href="#">
                Vendors
              </a>
              <form>
                <button className="btn btn-slate " type="button" >
                  Settings
              </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HomePage;