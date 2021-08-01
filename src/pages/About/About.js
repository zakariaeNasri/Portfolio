import { motion } from 'framer-motion'
import React from 'react'
import myphoto from '../../Photos/Myphoto.png'
import './About.css'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}} className="container cont py-5">
            <Helmet>
                <title>About me</title>
            </Helmet>
        <div className="row">
            <div className="col-lg-6 d-sm-flex justify-content-sm-center justify-content-lg-start col-xm-12">
           
                <div className="photo-wrap mb-5">

                <img className="profile-img" src={`${myphoto}`} alt="Me" ></img>
                </div>
               
            </div>
            <div className="bio col-lg-6 col-xm-12">
               
                <h1 className="aboutmehead">About me</h1>
                <p className="aboutmep">Hello ! , Im Zakariae , im Full-stack Web And Desktop Devlopper for 2 years.
                    Technologie i use is (HTML5, CSS3, Javascript ,ReactJs, Nodejs, Bootstrap, PHP , ADO.NET......).
                      I create responsive Websites that are displayed on all devices desktops and smartphones.
                    Off course before we begin developping any app ,landing page , business website or E-commerce ,
                    i need to have a ready-made project layout .</p>
                    
            </div>
            
        </div>
        
    </motion.div>
</>
  )
}
export default About;