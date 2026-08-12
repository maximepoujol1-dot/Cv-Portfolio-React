import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Card from '../component/Card'
import moi from '../assets/moi.png'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const presentation = <div className="hero-content flex-col lg:flex-row">
          <img
            src={moi}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Qui suis-je ?</h1>
            <p className="py-6">
              Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior. Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique et continuer à progresser dans le domaine de l’informatique.
            </p>
            <div  className= "flex flex-wrap gap-4">
              <button className="btn btn-primary"><Link to="/portfolio"> Mes projets </Link></button>
              <button className="btn btn-primary"><Link to="/cv"> me connaitre </Link></button>
              <button className="btn btn-primary"><Link to="/contact"> me contacter</Link></button>
            </div>
            
          </div>
        </div>

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <motion.div initial={{opacity: 0, x: 500}} 
                  animate={{opacity: 1, x: 0}} 
                  transition={{duration: 0.8, ease: "easeIn"}}
                  className="hero bg-base-500 min-h-screen">
        <Card 
              taille= "bg-base-100 w-1/2 h-3/4 shadow-xl" 
              contenu={presentation} 
              title="" 
              theScale = {1.2}
              theY = {-2}
              modal={false}>
              


        </Card>
      </motion.div>
      <Footer/>    
    </>
  )
}

export default Homepage