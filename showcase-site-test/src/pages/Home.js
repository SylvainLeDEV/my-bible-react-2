import React,{useRef} from 'react';
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";
import ButtonsScroll from "../components/ButtonsScroll";
import { motion } from "framer-motion"

const Home = () => {

    const contraintsRef = useRef(null)

    const variants = {
        initial: {
            opacity:0,
            transition:{duration:0.5},
            x:100,
        },
        visible:{
            opacity:1,
            x:0
        },
        exit:{
            opacity:0,
            transition:{duration:0.3},
            x:-100,
        }
    }

    return (
        <div>
            <Mouse/>

            <motion.div className="home"
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        variants={variants}>
                <Navigation/>
                <SocialNetwork/>

                <motion.div className="home-main" ref={contraintsRef} >
                    <div className="main-content">
                        <motion.h1 dragConstraints={contraintsRef} drag> TS AGENCY </motion.h1>
                        <h2><DynamicText/></h2>
                    </div>
                </motion.div>

                < ButtonsScroll right={'/project-1'} />
            </motion.div>

        </div>
    );
};

export default Home;