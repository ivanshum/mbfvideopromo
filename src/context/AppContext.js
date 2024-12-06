import * as React from "react"

const defaultContext = {
  isModalOpen: false,
  isModalFormOpen: false,
}

const AppContextProvider = ({ value, children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isModalFormOpen, setIsModalFormOpen] = React.useState(false)
  const appContextProps = {
    ...value,
    isModalOpen,
    setIsModalOpen,
    isModalFormOpen,
    setIsModalFormOpen,
  }
  return (
    <AppContext.Provider value={appContextProps}>
      {children}
    </AppContext.Provider>
  )
}
export const AppContext = React.createContext(defaultContext)
export const useAppContext = () => React.useContext(AppContext)
export default AppContextProvider
