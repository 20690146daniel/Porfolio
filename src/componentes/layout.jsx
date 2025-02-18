import * as React from 'react';
import RecipeReviewCard from './RecipeReviewCard';
import Skill from './Skill';
import Perfil from './perfil.jsx';
import Tecnologias from './tecnologias.jsx';
import './Layout.css';

const Layout = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="layout">
            {isMobile ? (
                <div className="vertical-section">
                    <Perfil />
                    <RecipeReviewCard />
                    <Tecnologias />
                    <Skill />
                </div>
            ) : (
                <div className="horizontal-section">
                    <Perfil />
                    <RecipeReviewCard />
                    <Tecnologias />
                </div>
            )}
        </div>
    );
};

export default Layout;
