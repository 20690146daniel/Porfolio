import React, { useState, useEffect } from "react";
import { github } from "./const.js"; 

import Tecnologias from './tecnologias.jsx';

function Skill() {
  
  const [statsUrl, setStatsUrl] = useState(github.stats + "&t=" + new Date().getTime());
  const [mostUrl, setMostUrl] = useState(github.most + "&t=" + new Date().getTime());

  useEffect(() => {
   
    const interval = setInterval(() => {
      setStatsUrl(github.stats + "&t=" + new Date().getTime());
      setMostUrl(github.most + "&t=" + new Date().getTime());
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

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
            fontWeight: 'bold',
            textShadow: '0 0 8px var(--ubuntu-terminal-green)', 
            fontFamily: "'Ubuntu Mono', monospace", 
            letterSpacing: '1px' 
        }}>
          $ github_stats --fetch
        </h2>
        <div className="row justify-content-center g-4"> 
         
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"> 
            <img 
              className='img-fluid shadow-lg rounded' 
              alt="GitHub Stats"
              style={{
                border: '1px solid var(--ubuntu-terminal-green)', 
                boxShadow: '0 0 10px rgba(46, 194, 126, 0.5)', 
                backgroundColor: 'var(--ubuntu-light-purple)', 
                maxWidth: '100%', 
                height: 'auto' 
              }}
            />
          </div>
          
         
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <img 
              className='img-fluid shadow-lg rounded' 
              src={mostUrl} 
              alt="Most Languages"
              style={{
                border: '1px solid var(--ubuntu-terminal-green)',
                boxShadow: '0 0 10px rgba(46, 194, 126, 0.5)',
                backgroundColor: 'var(--ubuntu-light-purple)',
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>

         
          <div className="col-12 col-lg-4"> 
            <Tecnologias />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;