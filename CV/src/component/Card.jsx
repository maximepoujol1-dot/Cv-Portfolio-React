import React from 'react'
import Modal from './Modal'
const Card = ({taille,contenu, title,modal}) => {
  if (modal) {
    return (
    <div className={"card "+ taille}>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <ul>{contenu}</ul>
            <div className="card-actions justify-end">
            <Modal/>
            </div>
        </div>
    </div>
  )
  } else {
    return (<>
    <div className={"card "+ taille}>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div>{contenu}</div>
            <div className="card-actions justify-end">
            </div>
        </div>
    </div>
    <br/>
    </>
    
  )
  }
  
}

export default Card