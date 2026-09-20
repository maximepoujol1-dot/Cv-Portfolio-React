import React from 'react'

export interface insideDividerProps {
  id: number
  name:string
  image?: string
}

interface DividerProps {
  inside: Array<insideDividerProps>
  horizontale : boolean
}

const Divider = ({ inside, horizontale}:DividerProps) => {
  let sens = "grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4"
  if (horizontale) {
    sens = "flex flex-wrap items-center gap-4"
  }
  
  return (
    <div className={sens}>
      {inside.map((element) => (
        <>
        <div key={element.id} className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          <figure className="m-0 flex h-8 w-8 items-center justify-center">
            {element.image}
          </figure>
          <span className="text-sm font-medium">{element.name}</span>
        </div>
        {element.id != inside.length ? (
        <div className="divider divider-horizontal"></div>) : null}
        </>
      ))}
    </div>
  )
}

export default Divider