import React from 'react';
import image from "../../Image/Developer activity2.gif"
import "./About.css"

const About = () => {
    return (
        <div className="container aboutTotal"  >
            <div className='row '>

                <div className='col-sm-12 col-lg-6 about' >
                    <h1 className="aboutme">About Me</h1>

                    <p className="skills">I am Yousuf, A young adult with a zeal to develop websites that benefits people and lives. Passionate about web design and development. Looking forward to broadening my horizon in the field of this technology.

                        <br />
                        <br />
                        <strong>Skill Set</strong> <br />
                        <hr />
                        <ul><b>Comfortable with: </b>  HTML, CSS, Bootstrap, Tailwind, WordPress, JavaScript, React JS,Firebase  </ul>
                        <ul><b>Familiar with: </b> Node JS, Express JS, MongoDB, C# ,ADO.Net , Entity Framework</ul>

                        <ul><b>Tools  : </b>VS Code, Visual Studio, Git, Chrome Debugger.</ul></p>

                </div>
                <div className='col-sm-12 col-lg-6'>
                    <img className="image" src={image} alt="" />
                </div>
            </div>
        </div >
    );
};

export default About;