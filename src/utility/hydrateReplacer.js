import * as ReactDOM from "react-dom/client"

const hydrateReplacer = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}

export default hydrateReplacer
