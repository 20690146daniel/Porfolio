import React from "react";

function SobreMi() {

    const about = {
        titulo: "Sobre Mi",
        sobremi:"Egresado de Ingeniería en Sistemas Computacionales con experiencia en desarrollo y mantenimiento de aplicaciones web y móviles. Lideré proyectos como una app de citas médicas con Flutter y MongoDB Atlas, y optimicé sistemas en Laravel, incorporando módulos avanzados con gráficos interactivos y generación de informes. Diseñé contenedores Docker para mejorar la escalabilidad y despliegue. Apasionado por aprender nuevas tecnologías y crear soluciones eficientes que aporten valor."

    };

    return (
        <>
            <h1>{about.titulo}</h1>
            <p>{about.sobremi}</p>
        </>
    );

}

export default SobreMi;