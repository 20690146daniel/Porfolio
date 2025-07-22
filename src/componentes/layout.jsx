import React from 'react';
import Perfil from './perfil';
import Proyectos from './proyectos';
import Tecnologias from './tecnologias';
// import Skill from './Skill';
import './colors.css';

const Layout = () => {
    return (
        <div className="ubuntu-terminal-theme" style={{
            backgroundColor: 'var(--ubuntu-terminal-dark)',
            color: 'var(--ubuntu-terminal-text)',
            minHeight: '100vh'
        }}>
            <Perfil />
            <Proyectos />
              {/* <Skill /> */}
            <Tecnologias />
        </div>
    );
};

export default Layout;