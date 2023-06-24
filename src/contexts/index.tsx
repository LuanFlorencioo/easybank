import { createContext, useContext, useState } from "react";

interface iAppContext {
  isOpenNavbar: boolean
  handleOpenNavbar: () => void
}

interface iAppProvider {
  children: React.ReactNode
}

const AppContext = createContext<iAppContext>({} as iAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: iAppProvider) => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const handleOpenNavbar = () => setIsOpenNavbar(!isOpenNavbar);

  const values = {
    isOpenNavbar,
    handleOpenNavbar,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}
