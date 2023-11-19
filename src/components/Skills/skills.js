import React from "react";
import "./skills.css";

const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle">About Me</span>
            <span className="skillDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur adipisci in accusantium porro pariatur beatae earum nam dolores quam quae velit dolore ipsa dicta architecto labore iste voluptatibus similique numquam, nesciunt dignissimos perspiciatis ut veritatis! Corporis doloremque ab itaque! Eos deserunt corporis suscipit voluptatibus laborum similique, tenetur mollitia nisi temporibus quos, ut dolore, eaque obcaecati impedit omnis possimus saepe numquam accusamus. Labore ut provident obcaecati, voluptate saepe cumque explicabo dolorum non, sint necessitatibus accusamus inventore iste dolores atque animi? Corrupti accusamus, tempore consectetur eius odit quidem delectus. Quod a adipisci deserunt, perferendis consequatur quisquam esse doloribus debitis officia quasi omnis?</span>
            <div className="skillBars">
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Game Dev</h2>
                        <p>This is demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>QA Testing</h2>
                        <p>This is demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Full Stack</h2>
                        <p>This is demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills