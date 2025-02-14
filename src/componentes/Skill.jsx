import React, { useState, useEffect } from "react";
import { github, skill } from "./const";
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
        <div className="skill-container">
            <img className='Github-stats' src={statsUrl} alt="GitHub Stats" />
            <img className='Most-languages' src={mostUrl} alt="Most Languages" />
            <div className="icono" style={{ textAlign: "left" }}>

                <a target="_blank" rel="noopener norefr">
                    <img
                        className="icono-skill"
                        src={skill.flutter}
                    />
                </a>
            </div>
            <div className="icono" style={{ textAlign: "left" }}>
                <a target="_blank" rel="noopener norefr">
                    <img
                        className="icono-skill"
                        src={skill.react}
                    />
                </a>
            </div>
            <div className="icono" style={{ textAlign: "left" }}>
                <a target="_blank" rel="noopener norefr">
                    <img
                        className="icono-skill"
                        src={skill.laravel}
                    />
                </a>
            </div>
            <div className="icono" style={{ textAlign: "left" }}>
                <a target="_blank" rel="noopener norefr">
                    <img
                        className="icono-skill"
                        src={skill.node}
                    />
                </a>
            </div>
            <div className="icono" style={{ textAlign: "left" }}>
                <a target="_blank" rel="noopener norefr">
                    <img
                        className="icono-skill"
                        src={skill.js}
                    />
                </a>
            </div>
            <div className="icono" style={{ textAlign: "left" }}>
                <a target="_blank" rel="noopener norefr">
                    <img
                        className="icono-skill"
                        src={skill.php}
                    />
                </a>
            </div>


            <div className="icono" style={{ textAlign: "left" }}>
                <a target="_blank" rel="noopener norefr">
                    <img
                        className="icono-skill"
                        src={skill.mongo}
                    />
                </a>
            </div>
            <div className="icono" style={{ textAlign: "left" }}>
                <a target="_blank" rel="noopener norefr">
                    <img
                        className="icono-skill"
                        src={skill.mysql}
                    />
                </a>
            </div>
        </div>





    );
}

export default Skill;
