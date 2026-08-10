import React from 'react'

const Form = ({style, styleCategorie, categorie}) => {
  return (
    <div className='flex items-center justify-center'>
    <fieldset className={style}>
            {categorie.map((elt) => (
              
            <div key={elt.id} className="">

              <label className="label">{elt.inside.name}</label>
              <br/>
              <textarea type="text" className={elt.inside.cateStyle} placeholder="My awesome page" /> 
            </div>))}
            <button className="btn btn-neutral mt-4">Envoyer</button>
            
        </fieldset>
    </div>
    
  )
}

export default Form