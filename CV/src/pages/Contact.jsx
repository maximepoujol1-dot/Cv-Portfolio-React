import React from 'react'
import Card from '../component/Card'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Form from '../component/Form'
import { motion } from 'motion/react'

const categorie = [
  {id: 1, inside : {name: "mail", cateStyle: "input w-full"}},
  {id: 2, inside : {name: "objet", cateStyle: "input w-full"}},
  {id: 3, inside : {name: "message", cateStyle: "textarea w-full h-32"}}
]  

const formulaire = <>
                      <br/>
                      <h1 className="flex items-center justify-center">ME CONTACTER</h1>
                      <br/>
                      <Form style={"fieldset bg-base-200 border-base-300 rounded-box w-1/2 p-4"} categorie={ categorie}/>
                      <br/>    
                    </>





const Contact = () => {
  return (
      <div className="flex flex-col min-h-screen bg-base-200">
          <Navbar/>

        <main className="flex-1">
          <div className="hero bg-base-500 min-h-screen" initial={{opacity: 0, x: 500}} 
                            animate={{opacity: 1, x: 0}} 
                            transition={{duration: 0.8,ease: "easeIn"}}>
            
            <Card 
              taille= "bg-base-100 w-1/2 h-3/4 shadow-xl" 
              contenu={formulaire} 
              title="" 
              theScale = {1}
              theY = {0}
              modal={false}>
              


            </Card>
          </div>
        </main>  
        
        
        <Footer/>  
      </div>
        
    
  )
}

export default Contact