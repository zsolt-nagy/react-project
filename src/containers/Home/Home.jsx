import React from 'react';
import "./home.css";
import frontend from "./frontend.png";


const Home = () => {
    return (
        <div className="home-container">
            <article className="block-container">
                <img className="home-img" src={frontend} />
                <h1 className="main-title">React Project</h1>
            </article>
        </div>
    )
}

export default Home;
