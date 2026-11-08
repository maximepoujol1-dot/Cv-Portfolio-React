import React from 'react'
import type { insideDivider } from '../utility/type'

interface DividerProps {
  inside: Array<insideDivider>
  horizontale : boolean
}

const Divider = ({ inside, horizontale}:DividerProps) => {
  const sens = horizontale
    ? "flex flex-wrap items-center gap-4"
    : "grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4"

  return (
    <div className={sens}>
      {inside.map((element, index) => (
        <React.Fragment key={element.id}>
          <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
            <figure className="m-0 flex h-8 w-8 items-center justify-center">
              {element.image && element.image}
              {element.logo && element.logo}
            </figure>
            <span className="text-sm font-medium">{element.name}</span>
          </div>
          {horizontale && index < inside.length - 1 ? (
            <div className="divider divider-horizontal"></div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Divider