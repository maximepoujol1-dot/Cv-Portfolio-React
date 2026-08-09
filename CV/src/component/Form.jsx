import React from 'react'

const Form = ({titre, style, categorie}) => {
  return (
    <fieldset className={style}>
        <h1 className="fieldset-legend">{titre}</h1>

        {categorie.map((elt) => (<div key={elt.id} className="">

          <label className="label">{elt.name}</label>
          <input type="text" className="input" placeholder="My awesome page" /> 
        </div>))}
        
        
    </fieldset>
  )
}

export default Form