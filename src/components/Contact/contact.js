import React, { useRef } from "react";
import "./contact.css"
import emailjs from '@emailjs/browser';
import githubicon from "../../assets/githubicon.png";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3mjrzap', 'template_a4czc9z', form.current, 'nKdJXJiLOvFx5z3D9')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
              alert('Email Sent!')
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <section id="contact" className="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">
                    Contact Me
                </h1>
                <span className="contactDesc"> Please fill out the form below to discuss any work opportunities</span>
                <form ref={form} action="" className="contactForm" onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name" />
                    <input type="email" className="email" placeholder="Your Email" name="from_email"/>
                    <textarea className="msg" name="message"  rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.github.com/piotrzalejski">
                            <img src={githubicon} width={50} height={50} alt="Github" className="githubIcon" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact