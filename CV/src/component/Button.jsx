import React from 'react'
import { motion } from 'motion/react'

const Button = ({taille,message}) => {
  return (
    <>
        <button className={"btn " + taille} >{message}</button>
    </>
    
  )
}

export default Button