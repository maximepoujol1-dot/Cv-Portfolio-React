import React from 'react'

export interface insideDividerProps {
  id: number
  name:string
  elt : React.ReactNode
  image?: string
}

interface DividerProps {
  inside: Array<insideDividerProps>
  horizontale : boolean
}

const Divider = ({ inside, horizontale}:DividerProps) => {
  let sens = ""
  if (horizontale) {
    sens = "flex flex-wrap gap-4"
  }
  
  return (
    <div className={sens}>
      {inside.map((element) => (
        <>
        <div key={element.id} className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          <figure>
            {element.elt}
          </figure>
          {element.name}
        </div>
        {element.id != inside.length ? (
        <div className="divider divider-horizontal"></div>) : null}
        </>
      ))}
    </div>
  )
}

export default Divider