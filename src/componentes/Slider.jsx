import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderProjects = ({ projectId }) => {
    const [projectImages, setProjectImages] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => {
                const project = data.find(project => project.id === projectId);
                if (project) {
                    setProjectImages(project.images || []);
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
        arrows: true,
        appendDots: dots => (
            <div style={{
                backgroundColor: 'transparent',
                padding: '10px',
                bottom: '-40px'
            }}>
                <ul style={{
                    margin: '0px',
                    padding: '0px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px'
                }}>{dots}</ul>
            </div>
        ),
    
        customPaging: i => (
            <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: i === settings.currentSlide ? 'var(--ubuntu-terminal-green)' : 'var(--ubuntu-light-purple)', // Verde activo, morado claro inactivo
                border: '1px solid var(--ubuntu-terminal-green)',
                cursor: 'pointer',
                boxShadow: i === settings.currentSlide ? '0 0 5px var(--ubuntu-terminal-green)' : 'none', // Sombra al activo
                transition: 'all 0.3s ease'
            }}></div>
        ),
    
    };

     return (
        <div style={{
            margin: '20px 0',
            border: '2px solid var(--ubuntu-terminal-green)',
            borderRadius: '5px',
            overflow: 'hidden',
            boxShadow: '0 0 15px rgba(46, 194, 126, 0.3)',
            backgroundColor: 'var(--ubuntu-purple)'
        }}>
            <Slider {...settings}>
                {projectImages.length > 0 ? (
                    projectImages.map((image, index) => (
                        <div key={index} style={{
                            
                            height: '350px', 
                            display: 'flex',
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            backgroundColor: 'var(--ubuntu-dark-terminal-bg)' 
                        }}>
                            <img
                                src={image}
                                alt={`Project ${index + 1}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%', 
                                    objectFit: 'contain', 
                                   
                                    border: '1px solid rgba(46, 194, 126, 0.3)',
                                    borderRadius: '3px'
                                }}
                            />
                        </div>
                    ))
                ) : (
                    <div style={{
                        height: '350px', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--ubuntu-purple)',
                        color: 'var(--ubuntu-terminal-green)',
                        fontFamily: "'Ubuntu Mono', monospace"
                    }}>
                        <p>No hay imágenes disponibles</p>
                    </div>
                )}
            </Slider>
        </div>
    );
};

SliderProjects.propTypes = {
    projectId: PropTypes.number.isRequired,
};

export default SliderProjects;