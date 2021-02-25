import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="container-fluid bg-dark py-3">
            <div className="row">
              <div className="col-md-12 text-white d-flex justify-content-center">
                <div className="row mt-4">
                  <a className="mr-3 lead">Home  |  </a>
                  <a className="mr-3 lead">Employee  |  </a>
                  <a className="mr-3 lead">Stocks  |  </a>
                  <a className="mr-3 lead">About Us </a>
                </div>
              </div>
            </div>
            <div className="row text-white d-flex justify-content-center mt-2">
              <h3>Connect</h3>
            </div>

            <div className="row text-white d-flex justify-content-center mt-2">
              <a className="h2"><i class="fab fa-facebook mr-4"></i></a>
              <a className="h2"><i class="fab fa-instagram mr-4"></i></a>
              <a className="h2"><i class="fab fa-twitter mr-4"></i></a>
              <a className="h2"><i class="fab fa-linkedin mr-4"></i></a>
            </div>
          </div>
          <div className="bg-primary container-fluid d-flex justify-content-center text-white py-4">
            <div className="row">
              <div className="col text-center">
                <p className="lead">Qui ea aliqua nostrud proident cupidatat consequat reprehenderit exercitation.</p>
                <p>Qui ea aliqua reprehenderit exercitation.</p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
