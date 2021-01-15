import React from 'react';
import "./kapcsolat.css";
import email from "../image/email.svg";
import github from "../image/github.svg";
import linkedin from "../image/linkedin.svg";



const Kapcsolat = () => {
    return (
        <div className="contact-container">
            <a href="mailto:torok.gabi@gmail.com." target="_blank"><img src={email} alt="email ikon"className="ikon"/></a>
            <a href="https://github.com/L0la/torok-gabi.github.io.git" target="_blank"><img src={github} alt="github ikon" className="ikon"/></a>
            <a href="https://www.linkedin.com/in/gabi-torok"target="_blank"><img src={linkedin} alt="linkedin ikon" className="ikon"/></a>
        </div>
    )
}

export default Kapcsolat;
