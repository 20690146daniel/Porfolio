import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TechnologyLogo = ({ imageUrl, technologyName, utilidad }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip>
          <strong>{technologyName}</strong>
          {utilidad && ` - ${utilidad}`}
        </Tooltip>
      }
    >
      <div className="d-inline-block p-2">
        <img 
          src={imageUrl}
          alt={technologyName}
          className="img-fluid"
          style={{
            width: '50px',
            height: '50px',
            objectFit: 'contain',
            transition: 'transform 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
    </OverlayTrigger>
  );
};

export default TechnologyLogo;