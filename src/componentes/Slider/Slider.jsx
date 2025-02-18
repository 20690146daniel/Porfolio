import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Importa PropTypes
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderProjects = ({ projectId }) => {
    const [projects, setProjects] = useState([]);
    const [projectImages, setProjectImages] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                // Encuentra el proyecto específico basado en el projectId
                const project = data.find(project => project.id === projectId);
                if (project) {
                    setProjectImages(project.images);
                }
            })
            .catch((error) => console.error('Error loading projects:', error));
    }, [projectId]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <Slider {...settings}>
            {projectImages.map((image, index) => (
                <div
                    key={index} className="slider-container"                >
                    <img
                        className="slider-image"
                        src={image}
                        alt={`Project ${index + 1}`}
                    />
                </div>
            ))}
        </Slider>

    );
}


SliderProjects.propTypes = {
    projectId: PropTypes.number.isRequired,
};

export default SliderProjects;