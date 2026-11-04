import React from 'react'
import { useTranslation } from '../../node_modules/react-i18next'

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({children}:ModalProps) => {
  const { t } = useTranslation()
  return (
    <>
    <button className="btn" onClick={()=> (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()}>{t("common.openModal")}</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-11/12 max-w-6xl ">
                {children}
                <div className="modal-action ">
                <form method="dialog">
                    <button className="btn">{t("common.close")}</button>
                </form>
                </div>
            </div>
        </dialog>
    </>
  )
}

export default Modal