import * as React from "react"
import "./src/styles/global.css"
import AppContextProvider from "./src/context/AppContext"
import hydrateReplacer from "./src/utility/hydrateReplacer"
export const wrapRootElement = ({ element }) => (
  <AppContextProvider>{element}</AppContextProvider>
)
export const replaceHydrateFunction = hydrateReplacer
