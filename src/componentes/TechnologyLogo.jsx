import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TechnologyLogo = ({ imageUrl, technologyName, utilidad }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip style={{
            backgroundColor: 'var(--ubuntu-terminal-dark)',
            color: 'var(--ubuntu-terminal-green)',
            border: '1px solid var(--ubuntu-terminal-green)'
        }}>
          <strong>{technologyName}</strong>
          {utilidad && <><br />{utilidad}</>}
        </Tooltip>
      }
    >
      <div className="d-flex justify-content-center">
        <img 
          src={imageUrl}
          alt={technologyName}
          style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            transition: 'all 0.3s ease',
            filter: 'drop-shadow(0 0 5px var(--ubuntu-terminal-green))'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.filter = 'drop-shadow(0 0 10px var(--ubuntu-terminal-green))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'drop-shadow(0 0 5px var(--ubuntu-terminal-green))';
          }}
        />
      </div>
    </OverlayTrigger>
  );
};

export default TechnologyLogo;