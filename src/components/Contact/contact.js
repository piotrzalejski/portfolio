import React from "react";
import "./contact.css"
//TODO
// import github icon

const Contact = () => {
    return(
        <section id="contact" className="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">
                    Contact Me
                </h1>
                <span className="contactDesc"> Please fill out the form below to discuss any work opportunities</span>
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message"  rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src="" alt="Github" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact