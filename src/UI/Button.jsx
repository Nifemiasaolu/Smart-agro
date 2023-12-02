function Button({children}) {
  const className = `px-2 py-2 text-xs mt-4 rounded-[8px] bg-golden font-[Livvic] 
  cursor-pointer border-none outline-none text-black uppercase font-semibold `


  return (
    <button className={className}>
      {children}
    </button>
  )
}

export default Button
