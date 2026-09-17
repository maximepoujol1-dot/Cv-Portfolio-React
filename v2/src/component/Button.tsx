interface ButtonProps {
  style: string
  click: ()=> void
  children: React.ReactNode
}

const Button = ({children,style,click}:ButtonProps) => {
  return (
    <>
      <button className={"btn "+style} onClick={() => click} type="button">
        {children}
      </button>
    </>
  )
}

export default Button