import React from 'react'

const Hero = ({inside, sens = false}) => {
  return (
    <div className="">
        {inside.map((elt) => (
        <div key={elt.id} className= { sens ? "hero-content flex-col lg:flex-row" : "hero-content flex-col lg:flex-row-reverse" } >
            <img
            src={elt.image}
            className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
            <h1 className="text-5xl font-bold">{elt.name}</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            </div>
        </div>))}
        </div>
  )
}

export default Hero