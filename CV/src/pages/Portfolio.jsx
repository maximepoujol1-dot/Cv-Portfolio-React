import React from 'react'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Projet from '../component/Projet'
import {projetsList, projetsList2, projetsList3} from '../data/datapages'
import { motion } from 'motion/react'

const Portfolio = () => {
  return (
    <>
      <Navbar/>
      <br/>
      <motion.div initial={{opacity: 0, x: 500}} 
                  animate={{opacity: 1, x: 0}} 
                  transition={{duration: 0.8, ease: "easeIn"}}>
        <Card taille= "flex items-center w-full bg-base-100 card shadow-xl" 
                    contenu={<Carousel/>}
                    title="Mes Projets" 
                    modal={false}
                    />
        <br/>    
        <div>
          <Card taille= "w-full bg-base-100 card shadow-xl" 
                    contenu={<Projet projet1={projetsList} projet2={projetsList2} projet3={projetsList3}/>}
                    title="Mes Projets" 
                    modal={false}
                    />
                    
        </div>        
        
      </motion.div>
      <br/>
      <Footer/>    
    </>
  )
}

export default Portfolio