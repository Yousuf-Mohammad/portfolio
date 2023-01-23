import { React, useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




import Project from '../Project/Project';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <div className="projects ">
            <div className="projects-texts">
                <h1 className="projects-texts-title">
                    Some of my Projects
                </h1>


            </div>
            <div className="projects-list">
                <Swiper className="swiper"


                    slidesPerView={2}
                    spaceBetween={0}
                    slidesPerGroup={1}

                    pagination={{
                        type: "fraction"

                    }}
                    loop={true}
                    loopFillGroupWithBlank={false}

                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}

                >
                    {projects.map(project => <SwiperSlide> <Project

                        data={project} /></SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default Projects