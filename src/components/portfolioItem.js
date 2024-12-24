import * as React from "react"
import ReactVideo from "./reactvideo"
import useWindowSize from "../hooks/useWindowSize"
import { useInView } from "react-intersection-observer"
import { CiPlay1 } from "react-icons/ci"
import { IconContext } from "react-icons"

const PortfolioItem = ({ onClick, title, shortUrl, poster }) => {
  const { width, ar } = useWindowSize()
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: ar < 1 ? 0.5 * ar : 0.5,
  })
  const [hover, setHover] = React.useState(false)
  return (
    <div className="lg:w-1/2 aspect-video w-full object-cover flex-grow">
      <div
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
        className={`relative object-cover h-full`}
      >
        <ReactVideo
          width="100%"
          height="100%"
          playing={width < 1024 ? inView : hover}
          playsinline
          loop={true}
          muted={true}
          poster={`https://cdn.mustbefamily.com/eventssite/poster/${poster}.jpg`}
          video={`https://cdn.mustbefamily.com/eventssite/short/${shortUrl}.mp4`}
          className={``}
          alt={title}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-[#00000080] gap-4">
          <IconContext.Provider value={{ size: "4rem", color: "white" }}>
            <CiPlay1 />
          </IconContext.Provider>
          <div className="text-base lg:text-lg text-white text-center uppercase font-bold">
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}
export default PortfolioItem
