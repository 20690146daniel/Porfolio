import * as React from 'react';

import RecipeReviewCard from './RecipeReviewCard';
import Skill from './Skill';
import Perfil from './perfil';
import Tecnologias from './Tecnologias';
import './layout.css';

const Layout = () => {
    return (

        <div className="layout">
            <div className="horizontal-section ">
                <Perfil />
                <RecipeReviewCard />
                <Tecnologias/>
               
            </div>
            <Skill />



        </div>


    )
}

export default Layout;