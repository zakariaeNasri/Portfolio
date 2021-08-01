import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Services.css';
import { faDesktop,faFileCode,faObjectUngroup,faMobile} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}  className="services">
          <Helmet>
                <title>Services</title>
            </Helmet>

            <h1 className="py-5 Mys">My SErVICES</h1>
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                           

                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="ico" icon={faObjectUngroup} size="2x" /></div>
                                <h3>Analyse and Conception</h3>
                                <p>It is the first thing i do when i begin a project.</p>
                            </div>
                            
                        </div>
                        {/*----------- */}
                        <div className="col-md-3 col-sm-6">
                        
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="ico" icon={faFileCode} size="2x" /></div>
                                <h3>Web Development</h3>
                                <p>Your website will be build with New technologies</p>
                            </div>
                         
                        </div>
                        {/*-------------- */}
                        <div className="col-md-3 col-sm-6">
                           
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="ico" icon={faDesktop}/></div>
                                <h3>Desktop Apps</h3>
                                <p>The best Desktop app with design is here</p>
                            </div>
                            
                        </div>
                        {/*-----------------*/}
                        <div className="col-md-3 col-sm-6">
                           

                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="ico" icon={faMobile}/></div>
                                <h3>Mobile Apps</h3>
                                <p>Mobile app is our speciality Too </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
            
        </motion.div>
  )
}
export default Services;