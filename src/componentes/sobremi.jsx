import React from "react";

function SobreMi() {
    const about = {
        titulo: "Sobre Mi",
        sobremi: "Ingeniero en Sistemas Computacionales especializado en desarrollo Full Stack. Experiencia en aplicaciones móviles (React Native/Flutter) y backend escalable (Laravel, Node.js). Apasionado por optimizar rendimiento y crear soluciones innovadoras. Busco oportunidades para aportar mi capacidad técnica y trabajo en equipo en proyectos desafiantes."
    };

    return (
        <div className="p-4" style={{
        
            backgroundColor: 'var(--ubuntu-light-purple)',
            borderRadius: '8px', 
            border: '1px solid var(--ubuntu-terminal-green)', 
            boxShadow: `
                0 0 10px rgba(46, 194, 126, 0.3),
                inset 0 0 10px rgba(46, 194, 126, 0.1)
            `, // Sombra y brillo interior
            backdropFilter: 'blur(4px)', 
            color: 'var(--ubuntu-terminal-text)', 
            fontFamily: "'Ubuntu Mono', monospace" 
        }}>
            <h2 className="mb-4" style={{
                color: 'var(--ubuntu-terminal-green)', 
                borderBottom: '2px solid var(--ubuntu-terminal-green)', 
                paddingBottom: '10px',
                fontSize: '1.8rem', 
                fontWeight: 'bold',
                fontFamily: "'Ubuntu Mono', monospace", 
                textShadow: '0 0 5px rgba(46, 194, 126, 0.7)' 
            }}>
                $ {about.titulo} 
            </h2>
            <p className="lead" style={{
                lineHeight: '1.6',
                color: 'var(--ubuntu-terminal-text)', 
                fontFamily: "'Ubuntu Mono', monospace" 
            }}>
                {about.sobremi}
            </p>
        </div>
    );
}

export default SobreMi;