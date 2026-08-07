import React from 'react'
import Card from '../component/Card'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Divider from '../component/divider'

const hard_skills = [
  {id: 1, name: "code", image: "/favicon.svg"},
  {id: 2, name:"lire", image: "/favicon.svg"},
  {id: 3, name:"ecrire", image: "/favicon.svg"}
];

const soft_skills = [
  {id: 1, name: "code", image: "/favicon.svg"},
  {id: 2, name: "lire", image: "/favicon.svg"},
  {id: 3, name: "ecrire", image: "/favicon.svg"}
];

const skills = [ <Card   
                    taille= "w-96 bg-base-100 card shadow-xs" 
                    contenu={<Divider inside={hard_skills}/>}
                    title="Hard Skills" 
                    modal={false}
                  />, <Card  
                    taille= "w-96 bg-base-100 card shadow-xs" 
                    contenu={<Divider inside={soft_skills}/>}
                    title="Soft Skills" 
                    modal={false}
                  /> ]

const Cv = () => {
  return (
    <>
        <Navbar/>
        <div >
            <Card  
              taille= "w-96 bg-base-100 card-xl shadow-xl" 
              contenu={<p>pas encore de job</p>} 
              title="Experience" 
              modal={false}
            />

            <Card  
              taille= "w-96 bg-base-100 card-xl shadow-xl" 
              contenu={skills} 
              title="Compétence" 
              modal={false}
            />
            

            
        </div>
        
        
        <Footer/>  
    </>
  )
}

export default Cv