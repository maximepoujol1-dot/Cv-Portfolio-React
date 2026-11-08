import React from 'react'
import Modal from './Modal'

interface CardFigureProps {
  style?: string
  title: string
  icon: React.ReactNode
  modal: boolean
  children: React.ReactNode
  modalChildren?: React.ReactNode
}

const CardFigure = ({ style = '', title, icon, modal, children, modalChildren }: CardFigureProps) => {
  return (
    <div className="card flex w-full flex-1 flex-col bg-base-100 shadow-sm shadow-black/40">
      <figure className="flex h-40 shrink-0 items-center justify-center bg-base-200">
        {icon}
      </figure>
      <div className={`flex flex-1 flex-col gap-4 p-6 ${style}`}>
  <h2 className="card-title">{title}</h2>
  <div className="flex-1">{children}</div>
  {modal && (
  <div className="mt-2 flex justify-end border-2 border-red-500">
    <Modal>{modalChildren}</Modal>
  </div>
)}
</div>
    </div>
  )
}

export default CardFigure