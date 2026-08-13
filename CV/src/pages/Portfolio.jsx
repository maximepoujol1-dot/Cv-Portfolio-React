import React from 'react'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Projet from '../component/Projet'
import { motion } from 'motion/react'

const projetsList = [
  {
    id: 1,
    title: "Projet 1",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2025",
    modal: true,
  },
  {
    id: 2,
    title: "Projet 2",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2025",
    modal: true,
  }
];

const projetsList2 = [
  
  {
    id: 3,
    title: "Projet 3",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2026",
    modal: true,
  },
  {
    id: 4,
    title: "Projet 4",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2025",
    modal: true,
  }
];


const projetsList3 = [
    {
    id: 5,
    title: "Projet 5",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2026",
    modal: true,
  },
  {
    id: 6,
    title: "Projet 6",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2025",
    modal: true,
  },
];




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