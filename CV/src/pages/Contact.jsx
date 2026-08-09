import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Form from '../component/Form'


const categorie = [
  {id: 1, name: "mail"},
  {id: 2, name: "objet"},
  {id: 3, name: "message"}
]  

const Contact = () => {
  return (
    <>
        <Navbar/>
        <Form titre={"me contacter"} style={"fieldset bg-base-200 border-base-300 rounded-box w-1/2 center p-4"} categorie={ categorie}/>
        <Footer/>  
    </>
  )
}

export default Contact