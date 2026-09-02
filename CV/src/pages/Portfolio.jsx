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

        <div >
          <Carousel/>
          <br/>    
          <Card taille= "w-full bg-base-100 card shadow-xl" 
                      contenu={<Projet projet1={projetsList} projet2={projetsList2} projet3={projetsList3}/>}
                      title="" 
                      modal={false}
                      />
                      
                
          
        </div>

      <br/>
      <Footer/>    
    </div>
  )
}

export default Portfolio