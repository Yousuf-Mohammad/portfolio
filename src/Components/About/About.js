import React from 'react';
import image from "../../Image/Developer activity2.gif"
import "./About.css"
import html from '../../Image/logos/html.png'
import css from '../../Image/logos/css.png'
import js from '../../Image/logos/js.png'
import Bootstrap from '../../Image/logos/Bootstrp.png'
import sass from '../../Image/logos/Sass.png'
import mui from '../../Image/logos/MUI.png'
import react from '../../Image/logos/reactjs.png'
import Firebase from '../../Image/logos/firebase.png'
import node from '../../Image/logos/nodeJS.png'
import MongoDB from '../../Image/logos/mongodb.png'
import strapi from '../../Image/logos/strapi.png'
import git from '../../Image/logos/git.png'
import redux from '../../Image/logos/redux.png'

const About = () => {
    return (
        <div className="container aboutTotal"  >
            <div className='row '>

                <div className='col-sm-12 col-lg-6 about' >
                    <h1 className="aboutme">About Me</h1>
                    <hr /><hr />

                    <p className="skills">Hi, I'm Yousuf, and I'm an enthusiastic and dedicated web developer with a passion for creating websites that make a positive impact on people's lives. I love designing websites that are not only aesthetically pleasing but also user-friendly and effective in achieving their intended purpose. <br /> <br />

                        Web design and development have always fascinated me, and I'm constantly seeking new ways to learn and broaden my skillset in this field.</p>

                    {/* <br />
                        <br />
                        <strong>Skill Set</strong> <br />
                        <hr />
                        <ul><b>Comfortable with: </b>  HTML, CSS, Bootstrap, Tailwind, WordPress, JavaScript, React JS,Firebase  </ul>
                        <ul><b>Familiar with: </b> Node JS, Express JS, MongoDB, C# ,ADO.Net , Entity Framework</ul>

                        <ul><b>Tools  : </b>VS Code, Visual Studio, Git, Chrome Debugger.</ul></p> */}

                    <div className="workedwith">
                        <h1 className="stack">I have worked using</h1>
                        <hr />
                        <div className="logos">
                            <img src={html} alt="" width='50px' className="logo" />
                            <img src={css} alt="" width='50px' className="logo" />
                            <img src={js} alt="" width='50px' className="logo" />
                            <img src={Bootstrap} alt="" width='50px' className="logo" />
                            <img src={react} alt="" width='50px' className="logo" />
                            <img src={mui} alt="" width='50px' className="logo" />
                            <img src={Firebase} alt="" width='50px' className="logo" />
                            <img src={sass} alt="" width='50px' className="logo" />
                            <img src={node} alt="" width='50px' className="logo" />
                            <img src={MongoDB} alt="" width='50px' className="logo" />
                            <img src={git} alt="" width='50px' className="logo" />
                            <img src={strapi} alt="" width='40px' className="logo" />
                            <img src={redux} alt="" width='40px' className="logo" />
                        </div>

                    </div>

                </div>
                <div className='col-sm-12 col-lg-6'>
                    <img className="image" src={image} alt="" />
                </div>
            </div>
        </div >
    );
};

export default About;