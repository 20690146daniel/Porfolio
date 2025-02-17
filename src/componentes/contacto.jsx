import React from "react";
import { user } from './const'
function Contacto() {


    return (

        <>
            <h2 className="titulo-contacto">{user.titulo}</h2>
            <div className="perfil-contacto">

                <div className="icono" style={{ textAlign: "left" }}>
                    <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                        <img
                            className="icono-img"
                            src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg"
                            alt="linkedin logo"
                        />
                    </a>
                </div>
                <div className="icono" style={{ textAlign: "left" }}>
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="icono-img"
                            src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg"
                            alt="gmail logo"
                        />
                    </a>
                </div>

                <div className="icono" style={{ textAlign: "left" }}>
                    <a href={user.github} target="_blank" rel="noopener noreferrer">
                        <img
                            className="icono-img"
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                            alt="Logo de GitHub - Visita mi perfil"
                            style={{
                                filter: "invert(1)",
                                transition: "opacity 0.2s ease",
                            }}
                        />
                    </a>
                </div>
            </div>
        </>

    );

}
export default Contacto;