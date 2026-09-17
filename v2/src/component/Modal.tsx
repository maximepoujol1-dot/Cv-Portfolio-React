import React from 'react'

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({children}:ModalProps) => {
  return (
    <>
    <button className="btn" onClick={()=> (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()}>open modal</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-11/12 max-w-6xl ">
                {children}
                <div className="modal-action ">
                <form method="dialog">
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>
    </>
  )
}

export default Modal