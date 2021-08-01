import React from 'react'
import { motion } from 'framer-motion';
import HandleContact from '../../Components/HandleContact/HandleContact'
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}} className="container">
              <Helmet>
                <title>Contact Me</title>
            </Helmet>
      <HandleContact/>
      
    </motion.div>
  )
}
export default Contact;