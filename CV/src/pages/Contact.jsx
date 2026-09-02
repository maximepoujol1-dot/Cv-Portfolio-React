import React from 'react'
import CardFigure from '../component/CardFigure'
import Card from '../component/Card'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { motion } from 'motion/react'

const formMail = <div justify-center gap-4>
            <br/>
              <input class="input validator" type="email" required placeholder="mail@site.com" />
              <br/>
              <input class="input validator" type="message" required placeholder="objet" />
              <br/>
              <input class="input validator h-24" type="message" required placeholder="message" />
          </div>

const reseau = <div className="flex flex-row h-1/2 justify-center gap-4">
              <CardFigure title="LinkedIn" taille="flex  w-2/5 h-3/5  card shadow-xl" contenu={<></>} button={<a href="https://linkedIn.com" target="_blank" rel="noreferrer" className="btn btn-primary">Voir</a>} theScale = {1.1} theY = {-2} />
              <CardFigure title="Github" taille="flex w-2/5 h-3/5  card shadow-xl" contenu={<></>} button={<a href="https://github.com/maximepoujol1-dot" target="_blank" rel="noreferrer" className="btn btn-primary">Voir</a>} theScale = {1.1} theY = {-2} />
              <CardFigure title="Instagram" taille="flex w-2/5 h-3/5 card shadow-xl" contenu={<></>} button={<a href="https://www.instagram.com/maxime_p28/" target="_blank" rel="noreferrer" className="btn btn-primary">Voir</a>} theScale = {1.1} theY = {-2} />
            </div>

const Contact = () => {
  return (
      <div className="flex flex-col min-h-screen bg-base-200">
          <Navbar/>

        <main className="flex-1">
          <br/>
          <div className="flex flex-row h-1/2 justify-center gap-4">
            <Card title={"Me Contatcter"} taille={"flex  w-2/5 h-3/5  card shadow-xl"} button={<a href="https://linkedIn.com" target="_blank" rel="noreferrer" className="btn btn-primary">Voir</a>} theScale = {1} theY = {0} contenu={formMail}/>
          </div>


          <div className="flex flex-col justify-center min-h-screen">
            <br/>
            <Card title={"Autre réseaux"} taille={"flex  w-full h-3/5  "} button={<></>} theScale = {1} theY = {0} contenu={reseau}/>
            
            <br/>
          </div>
        </main>  
        
        
        <Footer/>  
      </div>
        
    
  )
}

export default Contact