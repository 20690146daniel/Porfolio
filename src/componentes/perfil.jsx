import React from "react";
import "./perfil.css";
import SobreMi from "./sobremi.jsx";
import Contacto from "./contacto.jsx";
import { user } from './const'
function Perfil() {

    return (
        <aside className="sidebar">
            <div className="perfil-container">
                <div className="perfil-header">
                    <h1 className="perfil-nombre">{user.name}</h1>
                    <img
                        className="avatar"
                        src={user.img}
                        alt={"Foto de " + user.name}
                        style={{ width: user.imageSize, height: user.imageSize }}
                    />
                    <h2 className="perfil-grado">{user.grado}</h2>
                    <Contacto />
                </div>
                <SobreMi />
            </div>
        </aside>
    );
}

export default Perfil;
