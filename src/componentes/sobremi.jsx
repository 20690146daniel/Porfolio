import React from "react";

function SobreMi() {

    const about = {
        titulo: "Sobre Mi",
        sobremi:"Ingeniero en Sistemas Computacionales con experiencia en el desarrollo de aplicaciones web y móviles. Lidero proyectos y optimizo sistemas para crear soluciones eficientes y de calidad. Mi stack tecnológico incluye Flutter, Laravel, React, Node.js (Express), MongoDB Atlas y Docker. Me mantengo actualizado sobre las últimas tendencias tecnológicas para ofrecer siempre soluciones innovadoras."

    };

    return (
        <>
            <h1>{about.titulo}</h1>
            <p>{about.sobremi}</p>
        </>
    );

}

export default SobreMi;