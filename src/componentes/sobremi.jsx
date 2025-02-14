import React from "react";

function SobreMi() {

    const about = {
        titulo: "Sobre Mi",
        sobremi:"Soy un ingeniero en sistemas computacionales apasionado por el desarrollo de aplicaciones web y móviles. Cuento con experiencia en liderazgo de proyectos, optimización de sistemas y creación de soluciones eficientes.Me especializo en el uso de tecnologías como Flutter, Laravel, React, Node.js (Express), MongoDB Atlas y Docker, y estoy siempre en busca de aprender nuevas herramientas para crear soluciones innovadoras que aporten valor."

    };

    return (
        <>
            <h1>{about.titulo}</h1>
            <p>{about.sobremi}</p>
        </>
    );

}

export default SobreMi;