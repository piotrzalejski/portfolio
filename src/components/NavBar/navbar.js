import React, { useState } from "react";
import "./navbar.css"
import logo from "../../assets/logo2-olive.png"
import {Link} from 'react-scroll'
import { Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return(
        <nav className="navbar">
            <a href="/">
                <img src={logo} width={75} height={75} alt="Logo" className="logo" />
            </a>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                 document.getElementById("contact").scrollIntoView({behavior:"smooth"})
            }}>
                Contact Me
            </button>
            <div className="mobileMenu">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div className="navMenu" style={{display: isOpen? 'flex': 'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setOpen(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setOpen(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setOpen(false)}>Portfolio</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setOpen(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar