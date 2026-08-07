import React from 'react'

const Divider = ({ inside }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {inside.map((elt) => (
        <>
        <div key={elt.id} className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          <figure>
            <img src={elt.image} alt={elt.name} />
          </figure>
          {elt.name}
        </div>
        <div className="divider divider-horizontal"></div>
        </>
      ))}
    </div>
  )
}

export default Divider