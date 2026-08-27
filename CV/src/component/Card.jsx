import React from 'react'
import Modal from './Modal'
import { motion } from 'motion/react'

const Card = ({taille,contenu, title,modal = false, theScale = 1, theY= 0, contenuModal = <></>}) => {
    return (
    <motion.div whileHover={{scale: theScale, y: theY}} className={"card "+ taille}>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div>{contenu}</div>
            <div className="card-actions justify-end">
            { modal ? <Modal contenu={contenuModal}/> : <></>}
            </div>
        </div>
    </motion.div>
  )
  
}

export default Card