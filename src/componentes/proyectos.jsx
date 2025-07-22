import React, { useState, useEffect } from 'react';
import SliderProjects from './Slider'; 

const Proyectos = () => {
  const [expanded, setExpanded] = useState(null);
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const projectsPerPage = 4;

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
      backgroundColor: 'var(--ubuntu-purple)',
      backgroundImage: 'linear-gradient(to bottom, var(--ubuntu-purple), #121212)',
      borderTop: '3px solid var(--ubuntu-terminal-green)', 
      position: 'relative', 
      overflow: 'hidden',
      paddingTop: '40px' 
    }}>
     
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
          boxShadow: '0 0 2px var(--ubuntu-red-button)'
        }}></span>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--ubuntu-yellow-button)',
          boxShadow: '0 0 2px var(--ubuntu-yellow-button)'
        }}></span>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--ubuntu-green-button)',
          boxShadow: '0 0 2px var(--ubuntu-green-button)'
        }}></span>
      </div>

      <div className="container position-relative">
        <h2 className="text-center mb-5" style={{
          color: 'var(--ubuntu-terminal-green)', 
          fontSize: '2rem',
          textShadow: '0 0 8px var(--ubuntu-terminal-green)',
          fontFamily: "'Ubuntu Mono', monospace", 
          position: 'relative',
          letterSpacing: '1px'
        }}>
          $ ls -la /proyectos
        </h2>
        <div className="row g-4">
          {currentProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm" style={{
                // Estilo de tarjeta de terminal
                backgroundColor: 'var(--ubuntu-light-purple)', 
                borderRadius: '8px',
                border: '1px solid var(--ubuntu-terminal-green)', 
                boxShadow: `
                    0 0 10px rgba(46, 194, 126, 0.3),
                    inset 0 0 10px rgba(46, 194, 126, 0.1)
                `,
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(4px)',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `
                    0 0 15px rgba(46, 194, 126, 0.5),
                    inset 0 0 10px rgba(46, 194, 126, 0.2)
                `;
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = `
                    0 0 10px rgba(46, 194, 126, 0.3),
                    inset 0 0 10px rgba(46, 194, 126, 0.1)
                `;
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div className="card-body" style={{ color: 'var(--ubuntu-terminal-text)', fontFamily: "'Ubuntu Mono', monospace" }}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'var(--ubuntu-terminal-green)',
                              color: 'var(--ubuntu-purple)',
                              fontWeight: 'bold'
                          }}>
                      {project.name.charAt(0)}
                    </div>
                    <h3 className="h5 mb-0" style={{ color: 'var(--ubuntu-terminal-green)' }}>{project.name}</h3>
                  </div>
                  <p className="text-muted small" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{project.date}</p>
                  
                  <SliderProjects projectId={project.id} />
                  
                  <p className="mt-3" style={{ color: 'var(--ubuntu-terminal-text)' }}>{project.description}</p>
                  <p className="small" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    <strong>Tecnologías:</strong> {project.technologies.join(', ')}
                  </p>
                  
                  <button 
                    className="btn btn-link p-0 text-decoration-none"
                    onClick={() => handleExpandClick(project.id)}
                    style={{ color: 'var(--ubuntu-terminal-green)' }} 
                  >
                    {expanded === project.id ? 'Ver menos' : 'Ver más'}
                  </button>
                  
                  {expanded === project.id && (
                    <div className="mt-3">
                      <h4 className="h6" style={{ color: 'var(--ubuntu-terminal-green)' }}>Detalles:</h4>
                      {project.details.map((detail, index) => (
                        <p key={index} className="small" style={{ color: 'var(--ubuntu-terminal-text)' }}>{detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {projects.length > projectsPerPage && (
          <nav className="mt-5">
            <ul className="pagination justify-content-center">
              {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
                <li key={index} className="page-item">
                  <button 
                    className={`page-link ${page === index + 1 ? 'active' : ''}`}
                    onClick={() => setPage(index + 1)}
                    style={{
                        backgroundColor: page === index + 1 ? 'var(--ubuntu-terminal-green)' : 'var(--ubuntu-light-purple)',
                        color: page === index + 1 ? 'var(--ubuntu-purple)' : 'var(--ubuntu-terminal-green)',
                        border: '1px solid var(--ubuntu-terminal-green)',
                        fontFamily: "'Ubuntu Mono', monospace",
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => {
                        if (page !== index + 1) {
                            e.currentTarget.style.backgroundColor = 'rgba(46, 194, 126, 0.2)';
                            e.currentTarget.style.color = 'var(--ubuntu-terminal-green)';
                        }
                    }}
                    onMouseLeave={e => {
                        if (page !== index + 1) {
                            e.currentTarget.style.backgroundColor = 'var(--ubuntu-light-purple)';
                            e.currentTarget.style.color = 'var(--ubuntu-terminal-green)';
                        }
                    }}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Proyectos;