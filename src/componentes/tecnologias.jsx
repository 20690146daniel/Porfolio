import React from "react";
import { skills } from "./const";
import TechnologyLogo from "./TechnologyLogo";

const Tecnologias = () => {
  return (
    <section className="py-5" style={{
      backgroundColor: '#121212',
      backgroundImage: 'linear-gradient(to bottom, #300a24, #121212)',
      borderTop: '3px solid var(--ubuntu-terminal-green)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '20px',
        display: 'flex',
        gap: '8px'
      }}>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#ff5f56',
          boxShadow: '0 0 2px #ff5f56'
        }}></span>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#ffbd2e',
          boxShadow: '0 0 2px #ffbd2e'
        }}></span>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#27c93f',
          boxShadow: '0 0 2px #27c93f'
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
          $ tecnologias_instaladas --list
        </h2>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col">
              <div className="h-100 p-3 d-flex flex-column align-items-center" style={{
                backgroundColor: 'rgba(94, 39, 80, 0.7)',
                borderRadius: '8px',
                border: '1px solid var(--ubuntu-terminal-green)',
                boxShadow: `
                      0 0 10px rgba(46, 194, 126, 0.3),
                      inset 0 0 10px rgba(46, 194, 126, 0.1)
                  `,
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(4px)',
                cursor: 'pointer',
                height: '100%'
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
                <TechnologyLogo
                  imageUrl={skill.imageUrl}
                  technologyName={skill.name}
                  utilidad={skill.utilidad}
                />
                <h5 className="text-center mt-2 mb-0" style={{
                  color: 'var(--ubuntu-terminal-text)',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  fontFamily: "'Ubuntu Mono', monospace"
                }}>
                  {skill.name}
                </h5>
                {skill.utilidad && (
                  <p className="text-center mt-1 mb-0" style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.75rem',
                    fontFamily: "'Ubuntu Mono', monospace"
                  }}>
                    {skill.utilidad}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

       
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.3)',
          fontFamily: "'Ubuntu Mono', monospace",
          fontSize: '0.8rem'
        }}>
          [danielcervantes@portfolio:~]$ cat bienvenida.txt
          Hola, soy Daniel Cervantes y este es mi portafolio.
          ¡Explora mis proyectos y contáctame!
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;