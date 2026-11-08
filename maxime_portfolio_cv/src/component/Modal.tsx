import { useRef, type ReactNode } from 'react'
import { linkClass } from '../utility/constants'

interface ModalProps {
  children: ReactNode
  triggerLabel?: string
}

const Modal = ({ children, triggerLabel = 'open modal' }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button type="button" className={linkClass}onClick={() => dialogRef.current?.showModal()}>
        {triggerLabel}
      </button>
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          {children}
          <div className="modal-action">
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