import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container" style={{ padding: "1rem" }}>
            <div className="container-fluid text-start">
                <div className="row mt-5">
                    <div className="col-md-4 col-sm-12 ">



                        <div className="social-icon mt-5">
                            <a href="https://www.facebook.com/yousuf313/"><i class="fab fa-facebook icon-list"></i></a>
                            <a href="https://www.linkedin.com/in/yousuf-mohammad-a9a131223/"><i class="fab fa-linkedin icon-list"></i></a>
                            <a href="https://github.com/Yousuf-Mohammad"><i class="fab fa-github icon-list"></i></a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 text-center address">
                        <h3>Contact</h3>
                        <hr />
                        <h6><i className="fas fa-phone-alt list-item" />  +880 1521331371</h6>
                        <h6>  <i className="fas fa-envelope list-item" />       yousuf.mohammad @g.bracu.ac.bd</h6>

                        <h6> <i className="fas fa-home list-item" />20Mohammadia housing ltd. Mohammadpur. Dhaka</h6>

                    </div>
                    <div className="col-md-4 col-sm-12 ">

                        <p className="rightWritting mt-5">
                            Copyright©2022 <br /> Design and Developed by Yousuf Mohammad
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;