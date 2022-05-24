import React from 'react';
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsScroll from "../components/ButtonsScroll";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project1 = () => {
    return (
        <main>
            <Mouse/>

            <div className="project">
                < Navigation/>
                <SocialNetwork/>

                < ButtonsScroll left={'/'} right={'/project-2'}/>
                < Logo/>

                < Project projectNumber={0}/>

            </div>
        </main>
    );
};

export default Project1;