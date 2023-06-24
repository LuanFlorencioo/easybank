interface iButton {
  children: React.ReactNode
}

const Button = ({ children }: iButton) => {
  return (
    <button type="button" className="w-max h-max px-7 py-2 bg-gradient-to-r from-green to-cyan rounded-full font-bold text-base text-white hover:opacity-90 active:opacity-60">
      {children}
    </button>
  )
}

export default Button;
