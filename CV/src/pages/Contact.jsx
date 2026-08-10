import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Form from '../component/Form'


const categorie = [
  {id: 1, inside : {name: "mail", cateStyle: "input w-full"}},
  {id: 2, inside : {name: "objet", cateStyle: "input w-full"}},
  {id: 3, inside : {name: "message", cateStyle: "textarea w-full h-32"}}
]  



const Contact = () => {
  return (
    <>
        <Navbar/>
        <br/>
        <h1 className="flex items-center justify-center">ME CONTACTER</h1>
        <br/>
        <Form style={"fieldset bg-base-200 border-base-300 rounded-box w-1/2 p-4"} categorie={ categorie}/>
        <br/>
        <Footer/>  
    </>
  )
}

export default Contact