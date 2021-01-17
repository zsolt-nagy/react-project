import React from 'react';
import "./nav.css";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Nav = () => {
    
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
            <li className="nav-item">
                <NavLink className="navLink" to={"/"} exact active-ClassName="active"><span className="nav-link">Főoldal</span></NavLink>
            </li>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">  
                    <li className="nav-item">
                        <NavLink className="navLink" to={"/Rolam"} active-ClassName="active"><span className="nav-link">Rólam</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navLink" to={"/Kapcsolat"} active-ClassName="active"><span className="nav-link">Kapcsolat</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navLink" to={"/Post"} active-ClassName="active"><span className="nav-link">Recipe API</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;