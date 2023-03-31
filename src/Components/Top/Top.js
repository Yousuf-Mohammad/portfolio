import React from 'react'
import Typical from 'react-typical'
import "./Top.scss";
import cv from "../../Resume/resume_YousufMohammad.pdf"
import img from "../../Image/MyPhoto/334871507_753163819708633_6770262965744113964_n-removebg-preview.png"
import back from "../../Image/Minimal Coding wallpaper (3840x2160).png"


const Top = () => {

    return (
        <div>
            <div >
                <img className="background" src={back} alt="" />

            </div>
            <div className=" row ">
                <div className=" col-sm-12 col-lg-6 col-xl-6">
                    <img className="topImg" id='
                    imageAnimation  ' src={img} alt="" />

                </div>
                <div className=" col-sm-12 col-lg-6 col-xl-6 writting">
                    <h1 className="name">Yousuf Mohammad</h1>
                    <Typical className="type"
                        steps={['Web Developer', 4000, 'Student', 4000, 'Tech Enthusiast', 4000]}
                        loop={Infinity}
                        wrapper="p"
                    />

                    <a href={cv} target="_blank" rel="noreferrer"
                        style={{ textDecoration: "none" }}><button className='button1'>Download Resume</button></a>

                </div>
            </div>
        </div>
    );

};

export default Top;