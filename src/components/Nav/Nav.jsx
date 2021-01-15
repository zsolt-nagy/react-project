import React from 'react';
import "./nav.css";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Nav = () => {
    
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
                <Link style={{color: "#c4bfbf"}} to="/" className="nav-link">Főoldal</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">  
                    <li className="nav-item">
                        <Link style={{color: "#c4bfbf"}} className="nav-link" to="/Rolam">Rólam</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color: "#c4bfbf"}} className="nav-link" to="/Kapcsolat">Kapcsolat</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color: "#c4bfbf"}} className="nav-link" to="/Post">News API</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;