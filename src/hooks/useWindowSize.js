import React from "react"

export default function useWindowSize() {
  const isSSR =
    typeof window !== "undefined"
      ? { innerWidth: window.innerWidth, innerHeight: window.innerHeight }
      : { innerWidth: 1200, innerHeight: 800 }
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR.innerWidth,
    height: isSSR.innerHeight,
    ar: Math.floor((isSSR.innerWidth * 100) / isSSR.innerHeight) / 100,
  })

  function changeWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      ar: Math.floor((window.innerWidth * 100) / window.innerHeight) / 100,
    })
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize)

    return () => {
      window.removeEventListener("resize", changeWindowSize)
    }
  }, [])

  return windowSize
}
