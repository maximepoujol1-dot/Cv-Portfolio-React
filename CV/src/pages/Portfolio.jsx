import React from 'react'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { motion } from 'motion/react'

let NoFilter = true
let filterRecent = false
let filterAncient = false
let filterAlphabetiqueHaut = false
let filterAlphabetiqueBas = false

let filterType1 = true
let filterType2 = false
let filterType3 = false
let filterType4 = false

const projetsList = [
  {
    id: 1,
    title: "Projet 1",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    modal: true,
  },
  {
    id: 2,
    title: "Projet 2",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    modal: true,
  },
  {
    id: 3,
    title: "Projet 3",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    modal: true,
  },
  {
    id: 4,
    title: "Projet 4",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    modal: true,
  },
  {
    id: 5,
    title: "Projet 5",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    modal: true,
  },
  {
    id: 6,
    title: "Projet 6",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    modal: true,
  },
  {
    id: 7,
    title: "Projet 7",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    modal: true,
  },
  {
    id: 8,
    title: "Projet 8",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    modal: true,
  },
];

const projects = projetsList.map((elt) => (
  <div key={elt.id} className='flex flex-wrap gap-4'>
    <Card
      taille={elt.taille}
      contenu={elt.contenu}
      title={elt.title}
      modal={elt.modal}
    />
    <br />
  </div>
))

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
          <Card taille= "flex items-center w-full bg-base-100 card shadow-xl" 
                    contenu={projects}
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