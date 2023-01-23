
import './Project.css'
import live from "../../Image/web.png"
import git from "../../Image/git.png"

const Project = ({ data }) => {
    const { img, link, Git } = data;

    return (
        <div className="project ">
            <div className="project-browser">
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <a href={link} target='_blank' rel="noreferrer" style={{ margin: "10px" }}>

                    <button className='onscreenbtn'><img src={live} style={{ width: "25px" }} alt="" />Live site</button>

                </a>
                <a href={Git} target='_blank' rel="noreferrer" style={{}}>

                    <button className='onscreenbtn'><img src={git} style={{ width: "25px" }} alt="" />code</button>
                </a>
            </div>
            {/* <a href={link} target='_blank' rel="noreferrer"></a> */}

            <img src={img} alt="" className="project-img" />



        </div>

    )
}

export default Project
