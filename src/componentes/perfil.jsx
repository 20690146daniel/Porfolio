import React from "react";
import SobreMi from "./SobreMi"; 
import Contacto from "./contacto";
import { user } from './const';

function Perfil() {
    return (
        <header className="py-5" style={{
            backgroundColor: 'var(--ubuntu-purple)', 
            backgroundImage: 'linear-gradient(to bottom, var(--ubuntu-purple), #121212)', 
            borderBottom: '3px solid var(--ubuntu-terminal-green)', 
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
                <div className="row align-items-center">

                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <img
                            src={user.img}
                            alt={`Foto de ${user.name}`}
                            className="img-fluid rounded-circle border border-3"
                            style={{
                                width: '220px', 
                                height: '220px', 
                                objectFit: 'cover',
                                borderColor: 'var(--ubuntu-terminal-green) !important',
                                boxShadow: '0 0 15px rgba(46, 194, 126, 0.6)'
                            }}
                        />
                        <h1 className="mt-3 mb-3" style={{
                            color: 'var(--ubuntu-terminal-green)',
                            fontWeight: 'bold',
                            fontFamily: "'Ubuntu Mono', monospace",
                            textShadow: '0 0 5px var(--ubuntu-terminal-green)'
                        }}>
                            {user.name}
                        </h1>
                        <Contacto />
                    </div>


                    <div className="col-md-8">
                        <SobreMi />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Perfil;