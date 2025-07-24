import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderProjects = ({ projectId }) => {
    const [projectImages, setProjectImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

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
        adaptiveHeight: true,
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
                backgroundColor: i === settings.currentSlide ? 'var(--ubuntu-terminal-green)' : 'var(--ubuntu-light-purple)',
                border: '1px solid var(--ubuntu-terminal-green)',
                cursor: 'pointer',
                boxShadow: i === settings.currentSlide ? '0 0 5px var(--ubuntu-terminal-green)' : 'none',
                transition: 'all 0.3s ease'
            }}></div>
        ),
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div style={{
            margin: '20px 0',
            border: '2px solid var(--ubuntu-terminal-green)',
            borderRadius: '5px',
            overflow: 'visible',
            boxShadow: '0 0 15px rgba(46, 194, 126, 0.3)',
            backgroundColor: 'var(--ubuntu-purple)',
            position: 'relative',
            zIndex: isHovering ? 10 : 1,
            transition: 'all 0.3s ease'
        }}>
            <Slider {...settings}>
                {projectImages.length > 0 ? (
                    projectImages.map((image, index) => (
                        <div 
                            key={index} 
                            style={{
                                height: '350px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'var(--ubuntu-dark-terminal-bg)',
                                cursor: 'pointer',
                                overflow: 'visible',
                                position: 'relative'
                            }}
                            onClick={() => handleImageClick(image)}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div style={{
                                width: '100%',
                                height: '100%',
                                padding: '10px',
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transform: isHovering ? 'scale(1.1) translateY(-15px)' : 'scale(1)',
                                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                zIndex: isHovering ? 20 : 1,
                                position: 'relative'
                            }}>
                                <img
                                    src={image}
                                    alt={`Project ${projectId} - ${index + 1}`}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        borderRadius: '5px',
                                        boxShadow: isHovering ? '0 20px 30px rgba(0, 0, 0, 0.6)' : '0 5px 15px rgba(0, 0, 0, 0.3)'
                                    }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/800x450?text=Image+Not+Available';
                                    }}
                                />
                            </div>
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

            {/* Modal para imagen ampliada */}
            {selectedImage && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        cursor: 'pointer'
                    }}
                    onClick={closeModal}
                >
                    <div style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        position: 'relative',
                        animation: 'zoomIn 0.3s ease'
                    }}>
                        <img
                            src={selectedImage}
                            alt="Ampliada"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                border: '2px solid var(--ubuntu-terminal-green)',
                                borderRadius: '5px',
                                boxShadow: '0 0 30px rgba(46, 194, 126, 0.5)'
                            }}
                        />
                        <button 
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '0',
                                background: 'var(--ubuntu-terminal-green)',
                                color: '#121212',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                fontSize: '20px',
                                cursor: 'pointer',
                                boxShadow: '0 0 10px rgba(46, 194, 126, 0.7)'
                            }}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            {/* Animaciones CSS */}
            <style jsx>{`
                @keyframes zoomIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                
                @media (max-width: 768px) {
                    .slick-slide > div > div {
                        transition: transform 0.3s ease !important;
                    }
                    .slick-slide:active > div > div {
                        transform: scale(1.1) translateY(-10px) !important;
                    }
                }
            `}</style>
        </div>
    );
};

SliderProjects.propTypes = {
    projectId: PropTypes.number.isRequired,
};

export default SliderProjects;