import React from 'react'
import Modal from './Modal'

interface CardProps {
  style: string
  title: string
  modal: boolean
  children: React.ReactNode | undefined
  modalChildren?: React.ReactNode
}

const Card = ({style,title,modal,children,modalChildren}:CardProps) => {
    return (
        <div className={"card "+style}>
            <h2 className="card-title">{title}</h2>
            <div>
              {children}
            </div>
            <div className="card-actions justify-end">
            { modal ? <Modal children={modalChildren}/> : <></>}
            </div>
        </div>
  )
  
}

export default Card