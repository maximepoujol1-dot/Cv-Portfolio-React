import React from 'react'
import { motion } from 'motion/react'

const Button = ({ taille, message, onClick }) => {
  return (
    <>
      <button className={"btn " + taille} onClick={onClick} type="button">
        {message}
      </button>
    </>
  )
}

export default Button