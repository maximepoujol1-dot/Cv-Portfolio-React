import React from 'react'
import { useTranslation } from 'react-i18next'

interface heroProps {
 title: string
 image: string  
 style: string
 titleStyle: string
 date: string
 children : React.ReactNode
}

const Hero = ({title,image,style,titleStyle, date,children}:heroProps) => {
  const { t } = useTranslation()
  return (
    <div className={"hero "+style}>
      <div className="hero-content flex-col lg:flex-row">
        {image && <img alt={t("common.heroImage")} src={image} className="max-w-sm rounded-lg shadow-2xl shadow-black/40"/> }
        
        <div>
          <div className="flex justify-between items-center w-full">
            <h1 className= {titleStyle ? titleStyle : "text-4xl font-bold"}>{title}</h1>
            {date && <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{date}</span>}
          </div>

          <div>
            {children}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero