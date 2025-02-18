import React from "react"; 
import { skill } from "./const";

const Tecnologias = () => {
  return (
    <aside className="tecnologias" style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Tecnologias</h1>

      <div className="icono" style={{ textAlign: "left" }}>
        <a target="_blank" rel="noopener noreferrer"> 
          <img
            className="icono-skill"
            src={skill.flutter}
          />
        </a>
      </div>
      <div className="icono" style={{ textAlign: "left" }}>
        <a target="_blank" rel="noopener noreferrer">
          <img
            className="icono-skill"
            src={skill.react}
          />
        </a>
      </div>
      <div className="icono" style={{ textAlign: "left" }}>
        <a target="_blank" rel="noopener noreferrer">
          <img
            className="icono-skill"
            src={skill.laravel}
          />
        </a>
      </div>
      <div className="icono" style={{ textAlign: "left" }}>
        <a target="_blank" rel="noopener noreferrer">
          <img
            className="icono-skill"
            src={skill.node}
          />
        </a>
      </div>
      <div className="icono" style={{ textAlign: "left" }}>
        <a target="_blank" rel="noopener noreferrer">
          <img
            className="icono-skill"
            src={skill.js}
          />
        </a>
      </div>
      <div className="icono" style={{ textAlign: "left" }}>
        <a target="_blank" rel="noopener noreferrer">
          <img
            className="icono-skill"
            src={skill.php}
          />
        </a>
      </div>
    </aside>
  );
};

export default Tecnologias; 
