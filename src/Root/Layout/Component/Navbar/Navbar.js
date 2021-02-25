import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar bg-dark">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand text-white mt-1 ml-5">
                            <h3>React Routing <i className="fab fa-react"></i> </h3>
                        </Link>
                        <ul className="nav navbar-light mt-2 ml-auto lead ">
                            <li className="nav-item"><Link to="/" className="text-white mr-3 navbar-link">Home |</Link></li>
                            <li><Link to="/Employee" className="text-white mr-3 navbar-link">Employees |</Link></li>
                            <li><Link to="/Stock" className="text-white mr-3 navbar-link">Stock |</Link></li>
                            <li><Link to="/About" className="text-white mr-3 navbar-link">About-us</Link></li>
                        </ul>
                    </div>
                </nav>
                
            </React.Fragment>
        );
    }
}

export default Navbar;

