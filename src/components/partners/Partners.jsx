import React from 'react'
import { motion } from 'framer-motion';

import './partners.css';

import helpAge from '../../Assets/HelpAge-International.webp'
import jHp from '../../Assets/JHPIEGO-1.webp'
import gK from '../../Assets/Kenya-Government-1.webp'
import redCross from '../../Assets/Kenya-Government-1.webp'
import kU from '../../Assets/Kenyatta-University-1.webp'
import nationalCouncil from '../../Assets/National-Council-for-Population-and-Development-NCPD-1.webp'
import un from '../../Assets/United-Nations-1.webp'
import wvi from '../../Assets/World-Vision-International-1.webp'

const Partners = () => {
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    };
  
    const imageVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 }, 
      }),
    };
  
    return (
      <motion.div
        className="partners-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="title">
          <p>Our Clients</p>
        </div>
        <div className="client-logos">
          {[helpAge, jHp, gK, redCross, kU, nationalCouncil, un, wvi].map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt=""
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              custom={index} 
            />
          ))}
        </div>
      </motion.div>
    );
  };

export default Partners
