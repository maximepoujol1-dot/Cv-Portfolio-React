import React from 'react'
import img1 from "../assets/ck3_wallpaper.jpg";
import Card from '../component/Card'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Divider from '../component/divider'
import Hero from '../component/Hero'
import Modal from '../component/Modal'
import { hard_skills, soft_skills, Experience, formation } from '../data/datapages'
import { motion } from 'motion/react'

const hobbie = [
  <div>
    <ul>
            <br />
            <li>Judo <Modal contenu={<img src= {img1} className="w-full" />}/></li>
            <br />
            <li>JV <Modal contenu={<img src= {img1} className="w-full" />}/></li>
            <br />
            <li>cinéma <Modal contenu={<img src= {img1} className="w-full" />}/></li>
            <br />
            <li>histoire <Modal contenu={<img src= {img1} className="w-full" />}/></li>
            
            </ul>

  </div>
]   

const skills = [ <Card   
                    taille= "w-full bg-base-100 card shadow-xl" 
                    contenu={<Divider inside={hard_skills} horizontale={true}/>}
                    title="Hard Skills :" 
                    modal={false}
                  />, <Card  
                    taille= "w-full bg-base-100 card shadow-xl" 
                    contenu={<Divider inside={soft_skills} horizontale={true}/>}
                    title="Soft Skills :" 
                    modal={false}
                  /> 
                ]

const Cv = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">

      <Navbar/>
        <br />
        <main className="flex-1">
          <div initial={{opacity: 0, x: 500}} 
                          animate={{opacity: 1, x: 0}} 
                          transition={{duration: 0.8,ease: "easeIn"}}>
              <Card  
                taille= "w-full bg-base-100 card-xl shadow-xs" 
                contenu={<p>Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior. Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique et continuer à progresser dans le domaine de l’informatique.</p>} 
                title="Présentation" 
                modal={false}
              />
              <br />
              <Card  
                taille= "w-full bg-base-100 card-xl shadow-xs" 
                contenu={<Hero inside={formation} sens={true}/>} 
                title="Formation" 
                modal={false}
              />
              <br />
              <Card  
                taille= "w-full bg-base-100 card-xl shadow-xs" 
                contenu={<Hero inside={Experience}/>} 
                title="Experience" 
                modal={false}
              />
              <br />
              <Card  
                taille= "w-full bg-base-100 card-xl shadow-xs" 
                contenu={skills} 
                title="Compétence" 
                modal={false}
              />
              <Card  
                taille= "w-full bg-base-100 card-xl shadow-xs" 
                contenu={hobbie} 
                title="Hobbie" 
                modal={false}
              />
          </div>

        </main>
        
        
        <Footer/> 

    </div>
  )
}

export default Cv


 