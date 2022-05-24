import React, {useEffect} from 'react';
import {projectsData} from "../data/projectsData";
import {motion} from "framer-motion";

const Project = ({projectNumber}) => {

    const [project] = React.useState(projectsData[projectNumber]);

    const [left, setLeft] = React.useState();
    const [top, setTop] = React.useState();
    const [size, setSize] = React.useState();

    useEffect(() => {
        setLeft(Math.floor(Math.random() * 900) + "px");
        setTop(Math.floor(Math.random() * 350) + "px")
        setSize("scale(" + Math.floor(Math.random() + 0.7) + ")");
    }, [])


    const variants = {
        initial: {
            opacity: 0,
            transition: {duration: 0.5},
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0.4,
            transition: {duration: 0.3},
            x: -800,
        }
    }
    const transition = {
        // Cubic beziers
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6
    }

    const imgVariants = {
        initial: {
            opacity: 0,
            transition: {duration: 0.5},
            x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
            y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1))
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0
        },
        exit: {
            opacity: 0.4,
            transition: {duration: 0.3},
            x: -800,
        }
    }


    return (
        <motion.div className="project-main"
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    transition={transition}
                    variants={variants}>
            <div className="project-content">

                <h1> {project.title} </h1>
                <p> {project.date} </p>

                <ul className="languages">
                    {project.languages.map(language => (
                        <li key={language}> {language} </li>
                    ))}
                </ul>

            </div>
            <motion.div className="img-content"
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        transition={{
                            duration:0.5
                        }}
                        variants={imgVariants}>
                <div className="img-container hover">
                    <span>
                        <h3>{project.title}</h3>
                        <p> {project.infos} </p>
                    </span>
                    <img className='img' src={project.img} alt={project.title}/>
                </div>
                <div className="button-container">
                    <a href={project.link} target='_blank' className='hover'>
                        <span className="button"> Voir le site </span>
                    </a>
                </div>
            </motion.div>
            <span className="random-circle"
                  style={{left, top, transform: size}}
            ></span>
        </motion.div>
    );
};

export default Project;