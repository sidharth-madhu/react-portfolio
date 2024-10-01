import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false)
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/"> <h1>Portfolio</h1></Link>

            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

        </div>


    );
}

export default Navbar