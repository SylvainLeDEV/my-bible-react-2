import React from 'react';
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsScroll from "../components/ButtonsScroll";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project3 = () => {
    return (
        <main>
            <Mouse/>

            <div className="project">
                < Navigation/>
                <SocialNetwork/>


                < Logo/>
                < ButtonsScroll left={'/project-2'} right={'/project-4'}/>

                < Project projectNumber={2}/>

            </div>
        </main>
    );
};

export default Project3;