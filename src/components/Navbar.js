import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Daily News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/entertainemnt">Entertainemnt</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar