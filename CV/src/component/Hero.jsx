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
                <div className='flex justify-between items-center'>
                    <h1 className="text-5xl font-bold">{elt.name}</h1>
                    {elt.date ? <div className="badge badge-xl">{elt.date}</div> : null}
                </div>
            
            <p className="py-6">
              {elt.message}
            </p>
            </div>
        </div>))}
        </div>
  )
}

export default Hero