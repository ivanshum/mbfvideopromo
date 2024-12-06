import * as React from "react"
import ReactVideo from "./reactvideo"
import useWindowSize from "../hooks/useWindowSize"
import { useInView } from "react-intersection-observer"

const PortfolioSection = () => {
  const { width, ar } = useWindowSize()
  const itemsData = [
    {
      text: "Это Юрий ЛОЗА",
      file: "_web-mbf_loza_1",
    },
    {
      text: "Он - Десептикон",
      file: "Buriday_Deseptikon",
    },
    {
      text: "Это Юрий ЛОЗА",
      file: "_web-mbf_loza_1",
    },
    {
      text: "Он - Десептикон",
      file: "Buriday_Deseptikon",
    },
    {
      text: "Это Юрий ЛОЗА",
      file: "_web-mbf_loza_1",
    },
    {
      text: "Он - Десептикон",
      file: "Buriday_Deseptikon",
    },
    {
      text: "Это Юрий ЛОЗА",
      file: "_web-mbf_loza_1",
    },
    {
      text: "Он - Десептикон",
      file: "Buriday_Deseptikon",
    },
    {
      text: "Это Юрий ЛОЗА",
      file: "_web-mbf_loza_1",
    },
    {
      text: "Он - Десептикон",
      file: "Buriday_Deseptikon",
    },
    {
      text: "Это Юрий ЛОЗА",
      file: "_web-mbf_loza_1",
    },
    {
      text: "Он - Десептикон",
      file: "Buriday_Deseptikon",
    },
  ]
  const Item = ({ onClick, title, shortUrl, poster }) => {
    const { ref, inView } = useInView({
      /* Optional options */
      threshold: ar < 1 ? 0.5 * ar : 0.5,
    })
    const [hover, setHover] = React.useState(false)
    return (
      <div className="flex flex-col gap-6 justify-start items-center">
        <div
          ref={ref}
          onClick={onClick}
          onMouseEnter={() => {
            setHover(true)
          }}
          onMouseLeave={() => {
            setHover(false)
          }}
          className={`react-player-wrapper aspect-square`}
        >
          <ReactVideo
            width="100%"
            height="100%"
            playing={width < 1024 ? inView : hover}
            playsinline
            loop={true}
            muted={true}
            video={`https://cdn.mustbefamily.com/short/${shortUrl}.mp4`}
            poster={`https://cdn.mustbefamily.com/poster/${poster}.jpg`}
            className={``}
            alt={title}
          />
        </div>
        <div className="text-lg lg:text-base xl:text-lg text-slate-700 text-center">
          {title}
        </div>
      </div>
    )
  }
  return (
    <div className="container mx-auto py-10">
      <h3 className="text-4xl text-center">Портфолио Event видео</h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-12 p-6 lg:p-12">
        {itemsData.map((value, index) => (
          <Item
            key={index}
            title={value.text}
            shortUrl={value.file}
            poster={value.file}
            onClick={() => console.log(value.file)}
          />
        ))}
      </div>
    </div>
  )
}
export default PortfolioSection
