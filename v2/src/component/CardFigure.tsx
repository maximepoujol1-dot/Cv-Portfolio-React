import React from 'react'
import Modal from './Modal'

interface CardFigureProps {
  style: string
  title: string
  img: string
  modal: boolean
  children: React.ReactNode
  modalChildren?: React.ReactNode
}

const CardFigure = ({style,title,img,modal,children,modalChildren}:CardFigureProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={img}
          alt="img" />
      </figure>
      <div className={"card "+style}>
        <h2 className="card-title">{title}</h2>
        <div>
              {children}
            </div>
            <div className="card-actions justify-end">
            { modal ? <Modal children={modalChildren}/> : <></>}
            </div>
      </div>
    </div>
  )
}

export default CardFigure