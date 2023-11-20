import React from "react";
import "./intro.css";
import { Link } from "react-scroll"
import memoji from "../../assets/memoji.png"

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, <br/></span>
                <span className="introText">I'm <span className="introName">Piotr <br /></span>a Software Developer</span>
                <p className="introPara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quibusdam veniam! <br />Laudantium neque ipsum porro excepturi, dicta quod aperiam et explicabo?</p>
                <Link><button className="btn">Hire Me</button></Link>
            </div>
            <img src={memoji} alt="" className="bg"/>
        </section>
    )
}

export default Intro;