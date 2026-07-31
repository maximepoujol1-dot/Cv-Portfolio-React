import React from 'react'
import { Form } from 'react-router-dom'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const Contact = () => {
  return (
    <>
        <Navbar/>
        <h1>Contact</h1>
        <Form/>
        <Footer/>  
    </>
  )
}

export default Contact