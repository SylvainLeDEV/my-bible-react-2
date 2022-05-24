import React from 'react';
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsScroll from "../components/ButtonsScroll";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project2 = () => {
    return (
        <main>
            <Mouse/>

            <div className="project">
                < Navigation/>
                <SocialNetwork/>

                < ButtonsScroll left={'/project-1'} right={'/project-3'}/>
                < Logo/>

                < Project projectNumber={1}/>

            </div>
        </main>
    );
};

export default Project2;