import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import heroImage from '../../Assets/hero-illustration-bg.png';
import './hero.css'

const HeroSection = () => {
  // Scroll progress animation
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '50%']);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Initial animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className='hero-section'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        <motion.div className="hero-left">
          <motion.div 
            className="subtitle"
            variants={itemVariants}
          >
            <motion.div 
              className="subtitle-line"
              initial={{ width: 0 }}
              animate={{ width: '50px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <span>Total Education Consultancy</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Empowering Communities,<br /> 
            One Step at a Time.
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            Simba Education Consultants integrates counseling, community outreach, and sustainable<br />
            development to create meaningful impact across personal and societal levels.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="hero-right"
          style={{ y: backgroundY }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="image-background"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          {/* Uncomment if you want to use the image */}
          {/* <motion.img 
            src={heroImage} 
            alt=""
            className="hero-image"
            style={{ opacity }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          /> */}
        </motion.div>
      </div>

    </motion.div>
  )
}

export default HeroSection
