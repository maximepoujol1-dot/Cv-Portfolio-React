import React from 'react'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { motion } from 'motion/react'

const carouselCard = <div> 
  
  <Card taille= "flex items-center w-3/4 bg-base-100 card shadow-xl" 
                    contenu={<Carousel/>}
                    title="Mes Projets" 
                    modal={false}
                    />
                    <Card taille= "flex items-center w-3/4 bg-base-100 card shadow-xl" 
                    contenu={""}
                    title="Mes Projets" 
                    modal={false}
                    />
</div> 

const Portfolio = () => {
  return (
    <>
      <Navbar/>
      <br/>
      <motion.div initial={{opacity: 0, x: 500}} 
                  animate={{opacity: 1, x: 0}} 
                  transition={{duration: 0.8, ease: "easeIn"}}>
        <Card taille= "flex items-center w-full bg-base-100 card shadow-xl" 
                    contenu={carouselCard}
                    title=""
                    modal={false}
                    />
      </motion.div>
      <br/>
      <Footer/>    
    </>
  )
}

export default Portfolio