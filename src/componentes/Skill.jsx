import React from 'react';
import { github } from './const'
import './Skill.css';
function Skill() {

    return (
        <div className="skill-container">
            <img className='Github-stats'src={github.stats}/>
            <img className='Most-languages'src={github.most}/>
        </div>
    );
}

export default Skill;
