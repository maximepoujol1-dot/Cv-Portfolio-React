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
    <div className="flex flex-col min-h-screen bg-base-200">
      <Navbar/>
      <br/>
      <main className="flex-1">
        <div initial={{opacity: 0, x: 500}} 
                    animate={{opacity: 1, x: 0}} 
                    transition={{duration: 0.8, ease: "easeIn"}}>
          <Carousel/>
          <br/>    
          <Card taille= "w-full bg-base-100 card shadow-xl" 
                      contenu={<Projet projet1={projetsList} projet2={projetsList2} projet3={projetsList3}/>}
                      title="" 
                      modal={false}
                      />
                      
                
          
        </div>
      </main>
      <br/>
      <Footer/>    
    </div>
  )
}

export default Portfolio