import React from 'react'
import Card from '../component/Card'
import Hero from '../component/Hero'
import { Link } from 'react-router-dom'
import img1 from "../assets/test2.png";
import pp from "../assets/Rond_rouge.png"

const NotFoundPage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${img1})` }}>
        <Card style={"bg-base-100 w-1/2 h-3/4 shadow-xl"} title={""} modal={false}>
          <Hero title={"erreur : 404"} image={pp} style={""}>
            <p className="py-6" style={{ fontSize: '15px' }}>
              Vous vous êtes égaré, essayer de rejoindre l'une des page suivante
            </p>  
            
          </Hero>
          <div  className= "flex justify-center gap-2">
                          <Card style={"bg-base-100 w-1/2 h-4/4 shadow-xl"} title={"Mes projets"} modal={false} ><Link to="/portfolio" className="btn btn-primary">Voir</Link></Card>
                          <Card style={"bg-base-100 w-1/2 h-3/4 shadow-xl"} title={"Me connaitre"} modal={false} ><Link to="/cv" className="btn btn-primary">Voir</Link></Card>
                          <Card style={"bg-base-100 w-1/2 h-3/4 shadow-xl"} title={"Me contacter"} modal={false} ><Link to="/contact" className="btn btn-primary">Voir</Link></Card>

                </div>
        </Card>
        </div>
  )
}

export default NotFoundPage