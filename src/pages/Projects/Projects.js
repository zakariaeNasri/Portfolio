import React from 'react'
import Carous from'../../Components/Carousel/Caroussel'
import {AnimatePresence, motion} from'framer-motion';
import Helmet from'react-helmet'


const Projects = () => {
    return (
        <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}  >
            <Helmet>
                <title>Projects</title>
            </Helmet>
            
            <Carous/>
        </motion.div>
    )
}

export default Projects
