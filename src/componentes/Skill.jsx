import React, { useState, useEffect } from "react";
import { github } from "./.js";
import "./Skill.css";

function Skill() {
    const [statsUrl, setStatsUrl] = useState(github.stats + "&t=" + new Date().getTime());
    const [mostUrl, setMostUrl] = useState(github.most + "&t=" + new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setStatsUrl(github.stats + "&t=" + new Date().getTime());
            setMostUrl(github.most + "&t=" + new Date().getTime());
        }, 3600000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer">
            <h2>Estadisticas de GitHub</h2>
            <div className="skill-container">
                <img className='Github-stats' src={statsUrl} alt="GitHub Stats" />
                <img className='Most-languages' src={mostUrl} alt="Most Languages" />
            </div>

        </footer>





    );
}

export default Skill;
