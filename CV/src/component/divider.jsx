import React from 'react'

const Divider = ({ inside, horizontale}) => {
  let sens = ""
  if (horizontale) {
    sens = "flex flex-wrap gap-4"
  }
  
  return (
    <div className={sens}>
      {inside.map((elt) => (
        <>
        <div key={elt.id} className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          <figure>
            <img src={elt.image} alt={elt.name} />
          </figure>
          {elt.name}
        </div>
        {elt.id != inside.length ? (
        <div className="divider divider-horizontal"></div>) : null}
        </>
      ))}
    </div>
  )
}

export default Divider