import React from 'react'
import Card from './Card'
import Button from './Button'
import { useState } from 'react';


const TriA = ({theProjet}) => {

  theProjet.sort((a, b) => a.title.localeCompare(b.title));

  return (
    theProjet.map((elt) => (
        <div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeIn' }}
          key={elt.id}
          className='flex flex-wrap gap-4'
        >
          <Card
            taille={elt.taille}
            contenu={elt.contenu}
            title={elt.title}
            modal={elt.modal}
            contenuModal={elt.contenuModal}
          />
          <br />
        </div>
      ))
  )
}

const TriZ = ({ theProjet }) => {

  theProjet.sort((a, b) => b.title.localeCompare(a.title));

  return (
     theProjet.map((elt) => (
        <div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeIn' }}
          key={elt.id}
          className='flex flex-wrap gap-4'
        >
          <Card
            taille={elt.taille}
            contenu={elt.contenu}
            title={elt.title}
            modal={elt.modal}
            contenuModal={elt.contenuModal}
          />
          <br />
        </div>
      ))
  )
}

const TriTime = ({theProjet}) => {

  theProjet.sort((a, b) => a.year.localeCompare(b.year));

  return (
     theProjet.map((elt) => (
        <div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeIn' }}
          key={elt.id}
          className='flex flex-wrap gap-4'
        >
          <Card
            taille={elt.taille}
            contenu={elt.contenu}
            title={elt.title}
            modal={elt.modal}
            contenuModal={elt.contenuModal}
          />
          <p>Time</p>
          <br />
        </div>
      ))
  )
}

const Tri = ({theProjet,triProject}) => {

    if (triProject == "A"){
      return (
        <>
            <TriA theProjet={theProjet}/>
        </>
        
      )
    } else if (triProject == "Z") {
      return (
        <>
            <TriZ theProjet={theProjet}/>
        </>
        
      )
    } else if (triProject == "Time" ) {
      return (
        <>
            <TriTime theProjet={theProjet}/>
        </>
        
      )
    }
  
    
}

const Projet = ({projet1, projet2,projet3}) => {
  
  const [typeProjet, setTypeProjet] = useState(projet1);
  const [tri, setTri] = useState("A")

  return ( 

    <>
    <h1>Projet</h1>
    <br/>
    <div className='flex gap-4'>
      <Button taille={"btn-primary"} message={"type1"} onClick={() => { setTypeProjet(projet1); }} />
    
      <Button taille={"btn-primary"} message={"type2"} onClick={() => { setTypeProjet(projet2); }} />
      
      <Button taille={"btn-primary"} message={"type3"} onClick={() => { setTypeProjet(projet3); }} />
    </div>
    

    <br/>

    <h1>TYPE</h1>

    <br/>  

    <div className='flex gap-4'>
      <Button taille={"btn-primary"} message={"triA"} onClick={() => {  setTri("A") }} />
    
      <Button taille={"btn-primary"} message={"typeZ"} onClick={() => {  setTri("Z") }} />
      
      <Button taille={"btn-primary"} message={"typeTime"} onClick={() => {  setTri("Time") }} />
    </div>
    

    <br/> 
      
    <Tri theProjet={typeProjet} triProject={tri}/>

  </>
  )
}

export default Projet

