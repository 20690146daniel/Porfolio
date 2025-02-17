import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderProjects = () => {
    const [projects, setProjects] = useState([]);
    const [projectImages, setProjectImages] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setProjectImages(data[0].images);
            })
            .catch((error) => console.error('Error loading projects:', error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {projectImages.map((image, index) => (
                <div key={index}>
                    <img className="slider-image" src={image} alt={`Project ${index + 1}`} style={{ width: '100%' }} />
                </div>
            ))}
        </Slider>
    );
}

export default SliderProjects;
