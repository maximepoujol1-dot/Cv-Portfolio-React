import React from 'react'
import Modal from './Modal'

interface CardProps {
  style: string
  title: string
  titleClassName?: string
  modal: boolean
  children: React.ReactNode | undefined
  modalChildren?: React.ReactNode
}

const Card = ({style,title,titleClassName="",modal,children,modalChildren}:CardProps) => {
    return (
        <div className={"card flex flex-col "+style}>
            <h2 className={"card-title "+titleClassName}>{title}</h2>
            <div className="mb-4 flex flex-1 flex-col">
              {children}
            </div>
            <div className="card-actions justify-end">
            { modal ? <Modal children={modalChildren}/> : <></>}
            </div>
        </div>
  )
  
}

export default Card