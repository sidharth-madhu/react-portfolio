import "./HeroimgStyles.css";
// import IntroImg from "../assets/intro-bg.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="IntroImg" />
            </div>
            <div className="content">
                <p>HI, I'M SIDHARTH MULLA</p>
                <h1>MEARN STACK <br /> DEVELOPER.</h1>
                <div>
                    <Link to="/project" className="btn">VIEW PROJECTS</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Heroimg;
