import React from 'react'
import Modal from './Modal'
import rectangle from '../assets/rectangle.png'
import { motion } from 'motion/react'

const CardFigure = ({taille,contenu, title, button = <></>, theScale = 1, theY= 0}) => {
  return (
    <>
      <motion.div whileHover={{scale: theScale, y: theY}} className={"card "+ taille}>
        <figure>
          <img
            src={rectangle}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {contenu}
          <div className="card-actions justify-end">
            {button}
          </div>
        </div>
      </motion.div>
      <br />
    </>
  )
}

export default CardFigure