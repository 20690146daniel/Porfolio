import React, { useState, useEffect } from 'react';
import SliderProjects from './Slider';

const Proyectos = () => {
  const [expanded, setExpanded] = useState(null);
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const projectsPerPage = 4;
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  const handleExpandClick = (projectId) => {
    setExpanded(expanded === projectId ? null : projectId);
  };

  const indexOfLastProject = page * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <section className="py-5" style={{ 
      backgroundColor: '#0a0a0a',
      backgroundImage: 'radial-gradient(circle at 50% 50%, var(--ubuntu-purple) 0%, #121212 70%)',
      borderTop: '3px solid var(--ubuntu-terminal-green)', 
      position: 'relative', 
      overflow: 'hidden',
      paddingTop: '40px',
      minHeight: '100vh'
    }}>
     
      {/* Terminal window dots */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '20px',
        display: 'flex',
        gap: '8px',
        zIndex: 10
      }}>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--ubuntu-red-button)',
          boxShadow: '0 0 5px var(--ubuntu-red-button)'
        }}></span>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--ubuntu-yellow-button)',
          boxShadow: '0 0 5px var(--ubuntu-yellow-button)'
        }}></span>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--ubuntu-green-button)',
          boxShadow: '0 0 5px var(--ubuntu-green-button)'
        }}></span>
      </div>

      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(46, 194, 126, ${Math.random() * 0.1 + 0.05}) 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(10px)',
            opacity: 0.7,
            animation: `float ${Math.random() * 20 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }} />
        ))}
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h2 className="text-center mb-5" style={{
          color: 'var(--ubuntu-terminal-green)', 
          fontSize: '2.5rem',
          textShadow: '0 0 15px var(--ubuntu-terminal-green)',
          fontFamily: "'Ubuntu Mono', monospace", 
          position: 'relative',
          letterSpacing: '2px',
          marginBottom: '3rem !important'
        }}>
          $ ls -la /proyectos/
          <span style={{
            display: 'inline-block',
            width: '10px',
            height: '20px',
            backgroundColor: 'var(--ubuntu-terminal-green)',
            marginLeft: '5px',
            animation: 'blink 1s step-end infinite'
          }}></span>
        </h2>
        
        <div className="row g-4 justify-content-center">
          {currentProjects.map((project) => (
            <div 
              key={project.id} 
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="card h-100" style={{
                backgroundColor: 'rgba(30, 30, 30, 0.7)', 
                borderRadius: '15px',
                border: '1px solid rgba(46, 194, 126, 0.3)', 
                boxShadow: `
                  0 5px 15px rgba(0, 0, 0, 0.5),
                  inset 0 0 10px rgba(46, 194, 126, 0.1)
                `,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                transform: hoveredProject === project.id ? 'translateY(-10px) scale(1.03)' : 'translateY(0) scale(1)',
                overflow: 'visible',
                position: 'relative',
                zIndex: hoveredProject === project.id ? 5 : 1
              }}>
                {/* Glow effect on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
                    rgba(46, 194, 126, 0.15), transparent 70%)`,
                  opacity: hoveredProject === project.id ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  zIndex: -1
                }}></div>
                
                <div className="card-body d-flex flex-column" style={{ 
                  color: 'var(--ubuntu-terminal-text)', 
                  fontFamily: "'Ubuntu Mono', monospace",
                  padding: '1.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{
                              width: '50px',
                              height: '50px',
                              background: 'linear-gradient(135deg, var(--ubuntu-terminal-green), #2ac280)',
                              color: 'var(--ubuntu-purple)',
                              fontWeight: 'bold',
                              fontSize: '1.2rem',
                              boxShadow: '0 0 10px var(--ubuntu-terminal-green)',
                              transition: 'transform 0.3s ease',
                              transform: hoveredProject === project.id ? 'rotate(15deg) scale(1.1)' : 'rotate(0) scale(1)'
                          }}>
                      {project.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="h5 mb-0" style={{ 
                        color: 'var(--ubuntu-terminal-green)',
                        textShadow: '0 0 5px rgba(46, 194, 126, 0.5)'
                      }}>
                        {project.name}
                      </h3>
                      <p className="text-muted small" style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.8rem'
                      }}>
                        {project.date}
                      </p>
                    </div>
                  </div>
                  
                  {/* Project image slider - ahora con efecto de sobresalir */}
                  <div style={{
                    borderRadius: '10px',
                    overflow: 'visible',
                    marginBottom: '1rem',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                    transform: hoveredProject === project.id ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                    position: 'relative',
                    zIndex: hoveredProject === project.id ? 10 : 1
                  }}>
                    <SliderProjects projectId={project.id} />
                  </div>
                  
                  <p className="mt-2 mb-3" style={{ 
                    color: 'var(--ubuntu-terminal-text)',
                    flexGrow: 1,
                    fontSize: '0.9rem'
                  }}>
                    {project.description}
                  </p>
                  
                  {/* Technologies chips */}
                  <div className="mb-3" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} style={{
                        backgroundColor: 'rgba(46, 194, 126, 0.1)',
                        color: 'var(--ubuntu-terminal-green)',
                        padding: '3px 10px',
                        borderRadius: '20px',
                        fontSize: '0.7rem',
                        border: '1px solid rgba(46, 194, 126, 0.3)',
                        transition: 'all 0.2s ease',
                        ':hover': {
                          backgroundColor: 'rgba(46, 194, 126, 0.3)',
                          transform: 'scale(1.05)'
                        }
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    className="btn align-self-start mt-auto"
                    onClick={() => handleExpandClick(project.id)}
                    style={{ 
                      color: 'var(--ubuntu-terminal-green)',
                      background: 'transparent',
                      border: '1px solid var(--ubuntu-terminal-green)',
                      borderRadius: '20px',
                      padding: '5px 15px',
                      fontSize: '0.8rem',
                      transition: 'all 0.3s ease',
                      ':hover': {
                        background: 'rgba(46, 194, 126, 0.2)',
                        transform: 'translateY(-2px)'
                      }
                    }} 
                  >
                    {expanded === project.id ? '▲ Ver menos' : '▼ Ver más'}
                  </button>
                  
                  {expanded === project.id && (
                    <div className="mt-3" style={{
                      animation: 'fadeIn 0.5s ease'
                    }}>
                      <h4 className="h6 mb-2" style={{ 
                        color: 'var(--ubuntu-terminal-green)',
                        textShadow: '0 0 5px rgba(46, 194, 126, 0.3)'
                      }}>
                        Detalles del Proyecto:
                      </h4>
                      <ul style={{
                        paddingLeft: '1rem',
                        fontSize: '0.85rem'
                      }}>
                        {project.details.map((detail, index) => (
                          <li key={index} className="mb-2" style={{ 
                            color: 'var(--ubuntu-terminal-text)',
                            position: 'relative',
                            paddingLeft: '1rem'
                          }}>
                            <span style={{
                              position: 'absolute',
                              left: 0,
                              color: 'var(--ubuntu-terminal-green)'
                            }}>▹</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination with modern style */}
        {projects.length > projectsPerPage && (
          <nav className="mt-5">
            <ul className="pagination justify-content-center" style={{
              gap: '5px'
            }}>
              <li className="page-item">
                <button 
                  className="page-link"
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--ubuntu-terminal-green)',
                    border: '1px solid var(--ubuntu-terminal-green)',
                    fontFamily: "'Ubuntu Mono', monospace",
                    borderRadius: '20px',
                    marginRight: '10px',
                    minWidth: '80px',
                    opacity: page === 1 ? 0.5 : 1,
                    cursor: page === 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  ← Anterior
                </button>
              </li>
              
              {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
                <li key={index} className="page-item">
                  <button 
                    className={`page-link ${page === index + 1 ? 'active' : ''}`}
                    onClick={() => setPage(index + 1)}
                    style={{
                      backgroundColor: page === index + 1 ? 'var(--ubuntu-terminal-green)' : 'transparent',
                      color: page === index + 1 ? '#121212' : 'var(--ubuntu-terminal-green)',
                      border: `1px solid ${page === index + 1 ? 'var(--ubuntu-terminal-green)' : 'rgba(46, 194, 126, 0.5)'}`,
                      fontFamily: "'Ubuntu Mono', monospace",
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      ':hover': {
                        backgroundColor: page === index + 1 ? 'var(--ubuntu-terminal-green)' : 'rgba(46, 194, 126, 0.1)'
                      }
                    }}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              
              <li className="page-item">
                <button 
                  className="page-link"
                  onClick={() => setPage(p => Math.min(Math.ceil(projects.length / projectsPerPage), p + 1))}
                  disabled={page === Math.ceil(projects.length / projectsPerPage)}
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--ubuntu-terminal-green)',
                    border: '1px solid var(--ubuntu-terminal-green)',
                    fontFamily: "'Ubuntu Mono', monospace",
                    borderRadius: '20px',
                    marginLeft: '10px',
                    minWidth: '80px',
                    opacity: page === Math.ceil(projects.length / projectsPerPage) ? 0.5 : 1,
                    cursor: page === Math.ceil(projects.length / projectsPerPage) ? 'not-allowed' : 'pointer'
                  }}
                >
                  Siguiente →
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, 10px) rotate(5deg); }
          50% { transform: translate(0, 20px) rotate(0deg); }
          75% { transform: translate(-10px, 10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Proyectos;