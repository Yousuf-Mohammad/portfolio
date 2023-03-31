
import './Project.css'
import live from "../../Image/web.png"
import git from "../../Image/git.png"
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


const Project = ({ data }) => {
    const { img, link, Git, name, logos } = data;

    return (
        <div className="wholeProject">
            <div className="project ">
                <div className="project-browser">
                    <div className="project-circle"></div>
                    <div className="project-circle"></div>
                    <div className="project-circle"></div>
                    <a href={link} target='_blank' rel="noreferrer" style={{ margin: "10px" }}>

                        <button className='onscreenbtn'><img src={live} style={{ width: "25px", marginRight: '10px' }} alt="" />Live site</button>

                    </a>
                    <a href={Git} target='_blank' rel="noreferrer" style={{}}>

                        <button className='onscreenbtn'><img src={git} style={{ width: "25px", marginRight: '10px' }} alt="" />code</button>
                    </a>
                </div>


                <div className="imgScroll">
                    <img src={img} alt="" className="project-img" />
                </div>





            </div>
            <div className="projectStack" >
                <h1 className='projectName'>{name}</h1>
                <div className="logos">
                    {logos.map(logo => (
                        // console.log(`"${logo}"`)
                        <img src={logo} alt="" className="projectLogo" />
                    ))}


                </div>

            </div>
        </div>

    )
}

export default Project
