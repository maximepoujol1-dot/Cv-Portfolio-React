import React from 'react'

const Modal = ({contenu}) => {
  return (
    <>
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-11/12 max-w-6xl ">
                {contenu}
                <div className="modal-action ">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>
    </>
  )
}

export default Modal