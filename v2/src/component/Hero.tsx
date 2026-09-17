import React from 'react'

interface heroProps {
 title: string
 image: string  
 style: string
 children : React.ReactNode
}

const Hero = ({title,image,style,children}:heroProps) => {
  return (
    <div className={"hero "+style}>
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt="Tailwind CSS hero component"
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Hero