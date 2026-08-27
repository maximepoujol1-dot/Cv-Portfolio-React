import React from 'react'
import CardFigure from '../component/CardFigure'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { motion } from 'motion/react'

const Contact = () => {
  return (
      <div className="flex flex-col min-h-screen bg-base-200">
          <Navbar/>

        <main className="flex-1">
          <div className="flex flex-col justify-center min-h-screen">
            <br/>
            <div className="flex flex-row h-1/2 justify-center gap-4">
              <CardFigure title="LinkedIn" taille="flex  w-2/5 h-3/5  card shadow-xl" contenu={<></>} button={<a href="https://linkedIn.com" target="_blank" rel="noreferrer" className="btn btn-primary">Voir</a>} theScale = {1.1} theY = {-2} />
              <CardFigure title="Mail" taille="flex  w-2/5 h-3/5 card shadow-xl" contenu={<></>} button={<a href="https://gmail.com" target="_blank" rel="noreferrer" className="btn btn-primary">Voir</a>} theScale = {1.1} theY = {-2} />
            </div>
            <br/>
            <div className="flex flex-row h-1/2 justify-center gap-4">
              <CardFigure title="Github" taille="flex w-2/5 h-3/5  card shadow-xl" contenu={<></>} button={<a href="https://github.com/maximepoujol1-dot" target="_blank" rel="noreferrer" className="btn btn-primary">Voir</a>} theScale = {1.1} theY = {-2} />
              <CardFigure title="Instagram" taille="flex w-2/5 h-3/5 card shadow-xl" contenu={<></>} button={<a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Voir</a>} theScale = {1.1} theY = {-2} />
            </div>
            <br/>
          </div>
        </main>  
        
        
        <Footer/>  
      </div>
        
    
  )
}

export default Contact