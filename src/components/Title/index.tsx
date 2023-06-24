interface iTitle {
  as: "h1" | "h2" | "h3"
  children: React.ReactNode
}

const Title = ({ as, children }: iTitle) => {
  if (as === "h1") {
    return (
      <h1 className="font-normal text-4xl text-dark">
        {children}
      </h1>
    )
  }

  if (as === "h2") {
    return (
      <h2 className="font-normal text-[32px] text-dark">
        {children}
      </h2>
    )
  }

  if (as === "h3") {
    return (
      <h3 className="font-normal text-xl text-dark">
        {children}
      </h3>
    )
  }
}

export default Title;
