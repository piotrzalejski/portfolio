import React from "react";
import "./works.css"
//TODO
//import portfolioimg1 from '../../assets/portfolio-1.png' ... etc
const Works = () => {
    return(
        <section id="works">
            <span className="worksTitle">My Portfolio</span>
            <span className="worksDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sapiente velit cum quaerat voluptatem illo magnam, quod voluptas ratione deserunt quam. Mollitia quos vitae fugiat aspernatur sed aliquid vero voluptatum!</span>
            <div className="worksImgs">
                <img src="https://placehold.co/400x600" alt="" className="worksImg" />
                <img src="https://placehold.co/400x600" alt="" className="worksImg" />
                <img src="https://placehold.co/400x600" alt="" className="worksImg" />
                <img src="https://placehold.co/400x600" alt="" className="worksImg" />
                <img src="https://placehold.co/400x600" alt="" className="worksImg" />
                <img src="https://placehold.co/400x600" alt="" className="worksImg" />
            </div>
            <button className="worksBtn" href="https://github.com/piotrzalejski">
                See More</button>
        </section>
    )
}

export default Works