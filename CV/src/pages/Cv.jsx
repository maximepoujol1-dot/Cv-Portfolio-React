import React from 'react'
import Card from '../component/Card'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Divider from '../component/divider'
import Hero from '../component/Hero'
import Modal from '../component/Modal'

const hard_skills = [
  {id: 1, name: "golang", image: "/favicon.svg"},
  {id: 2, name:"javascript", image: "/favicon.svg"},
  {id: 3, name:"react", image: "/favicon.svg"},
  {id: 4, name: "C", image: "/favicon.svg"},
  {id: 5, name:"C++", image: "/favicon.svg"},
  {id: 6, name:"SQL", image: "/favicon.svg"}
];

const soft_skills = [
  {id: 1, name: "code", image: "/favicon.svg"},
  {id: 2, name: "lire", image: "/favicon.svg"},
  {id: 3, name: "ecrire", image: "/favicon.svg"}
];

const Experience = [
  {id: 1, name: "code", image: "/favicon.svg"},
  {id: 2, name: "lire", image: "/favicon.svg"},
  {id: 3, name: "ecrire", image: "/favicon.svg"}
]   

const hobbie = [
  <div>
    <ul>
            <br />
            <li>Judo <Modal/></li>
            <br />
            <li>JV <Modal/></li>
            <br />
            <li>cinéma <Modal/></li>
            <br />
            <li>histoire <Modal/></li>
            
            </ul>

  </div>
]   

const skills = [ <Card   
                    taille= "w-full bg-base-100 card shadow-xl" 
                    contenu={<Divider inside={hard_skills} horizontale={true}/>}
                    title="- Hard Skills :" 
                    modal={false}
                  />, <Card  
                    taille= "w-full bg-base-100 card shadow-xl" 
                    contenu={<Divider inside={soft_skills} horizontale={true}/>}
                    title="- Soft Skills :" 
                    modal={false}
                  /> 
                ]

const Cv = () => {
  return (
    <>
        <Navbar/>
        <br />
        <div >
            <Card  
              taille= "w-full bg-base-100 card-xl shadow-xs" 
              contenu={<p>Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior. Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique et continuer à progresser dans le domaine de l’informatique.</p>} 
              title="Présentation" 
              modal={false}
            />
            <br />
            <Card  
              taille= "w-full bg-base-100 card-xl shadow-xs" 
              contenu={<Hero inside={Experience}/>} 
              title="Experience et formation" 
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
        <Footer/>  
    </>
  )
}

export default Cv