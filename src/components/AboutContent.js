import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React1 from "../assets/MERN.webp"
import React2 from "../assets/mern2.png"


import React from 'react'

function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a MEARN stack developer. i create responsive secure websites for my clients.</p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>



        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent