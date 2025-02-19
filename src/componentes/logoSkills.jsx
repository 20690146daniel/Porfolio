import React, { useState } from "react";
import { skills } from "./const.js";

const TechnologyLogo = ({ imageUrl, technologyName, utilidad }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="icono"
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img className="logo"
        src={imageUrl}
        alt={technologyName}
      />
      {showTooltip && (
        <div className="tooltip">
          {technologyName} - {utilidad}
        </div>
      )}
    </div>);
};

export default TechnologyLogo;