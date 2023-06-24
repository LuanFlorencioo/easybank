interface iText {
  children: React.ReactNode
  as?: "normal" | "small" | "light"
}

const Text = ({ children, as }: iText) => {
  if (!as || as === "normal") {
    return (
      <p className={`font-normal text-sm text-neutral-100`}>
        {children}
      </p>
    )
  }

  if (as === "light") {
    return (
      <p className={`font-light text-sm text-neutral-100`}>
        {children}
      </p>
    )
  }

  if (as === "small") {
    return (
      <small className={`font-normal text-[10px] text-neutral-100`}>
        {children}
      </small>
    )
  }
}

export default Text;
