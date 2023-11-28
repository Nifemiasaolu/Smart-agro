function Button({children}) {
  const className = `px-3 text-xs mt-4 rounded-[4px] bg-golden font-[Livvic] 
  cursor-pointer border-none outline-none text-black capitalize font-semibold `


  return (
    <button className={className}>
      {children}
    </button>
  )
}

export default Button
