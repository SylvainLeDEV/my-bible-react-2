import React from 'react';
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsScroll from "../components/ButtonsScroll";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project4 = () => {
    return (
        <main>
            <Mouse/>

            <div className="project">
                < Navigation/>
                <SocialNetwork/>

                < ButtonsScroll left={'/project-3'} right={'/contact'}/>
                < Logo/>

                < Project projectNumber={3}/>

            </div>
        </main>
    );
};

export default Project4;