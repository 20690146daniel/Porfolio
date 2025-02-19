import React from "react";
import { skills } from "./const";
import TechnologyLogo from "./logoSkills.jsx";

const Tecnologias = () => {
  return (
    <aside className="tecnologias" style={{ display: "flex", flexDirection: "column" }}>
      <h1>Tecnologias</h1>
      <div className="tecnologias-container" >
        {skills.map((skill, index) => (
          <TechnologyLogo
            key={index}
            imageUrl={skill.imageUrl}
            technologyName={skill.name}
            utilidad={skill.utilidad}
          />
        ))}
      </div>
    </aside>

  );
};

export default Tecnologias;