import "./FooterStyles.css";


import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Kakkanad, kerala</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            123456789
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            sidharth.madhu03@gmail.com
                        </h4>
                    </div>
                </div>



                <div className="right">
                    <h4>
                        About Me
                    </h4>
                    <p>I completed MEARN stack web devlopement  course from Luminar technolab Kochi and i am currently  working as a freelancer.</p>


                    <div className="social">
                        <a href="https://github.com/sidharth-madhu" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/sidharth-mulla-594644321" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Footer