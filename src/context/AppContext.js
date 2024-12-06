import * as React from "react"

const defaultContext = {
  isModalOpen: false,
}

const AppContextProvider = ({ value, children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const appContextProps = {
    ...value,
    isModalOpen,
    setIsModalOpen,
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
