import React from 'react';
import './App.css';
import Perfil from './componentes/perfil';
import Skill from './componentes/Skill';

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'inherit', flex: 1 }}>
        <div>
          <Perfil />


        </div>

        <Skill />

      </div>
    </>

  );
}

export default App;
