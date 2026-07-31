import React from 'react'

const Button = ({taille,message}) => {
  return (
    <>
        <button className={"btn " + taille} >{message}</button>
    </>
    
  )
}

export default Button