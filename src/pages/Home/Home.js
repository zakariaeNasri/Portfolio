import React from 'react'
import Typed from "react-typed";
import {AnimatePresence, motion} from'framer-motion';

import dev from '../../Photos/Dev.svg'
import About from "../About/About"
import './Home.css';
import { Link } from 'react-router-dom';
import { Opacity } from 'tsparticles/Options/Classes/Particles/Opacity/Opacity';
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <>
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}} className="header-wraper">
          <Helmet>
                <title>Hire a web dev</title>
            </Helmet>
        <div className="main-info">
          
        <img className="dev" src={dev}></img>
            <h1 className="Title">Welcome To My website </h1>
            <Typed
            className="typed-txt"
            strings={["Hello!!" , "My name is ","Zakariae Nasri","and im a Programmer"]} 
            typeSpeed={100}
            backSpeed={120}
            loop
            />
            
        </div>
        
        
        </motion.div>
        
    
    
    </>
  )
}
export default Home;