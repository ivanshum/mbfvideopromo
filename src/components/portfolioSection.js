import * as React from "react"
import ReactVideo from "./reactvideo"
import useWindowSize from "../hooks/useWindowSize"
import { useInView } from "react-intersection-observer"
import { useAppContext } from "../context/AppContext"
import { CiPlay1 } from "react-icons/ci"
import { IconContext } from "react-icons"

const PortfolioSection = () => {
  const { setIsModalVideoOpen, setVideoURL } = useAppContext()
  const { width, ar } = useWindowSize()
  const itemsData = [
    {
      text: "BEMA. Премия за лучший маркетинговый опыт",
      file: "Bema720",
    },
    {
      text: "Avito Premium",
      file: "AvitoPremium720",
    },
    {
      text: "ЛИГА. Новогодний отрыв",
      file: "LigaNewYear720",
    },
    {
      text: "ОПРФ. Форум сообщество. Документальный фильм",
      file: "OPRF720",
    },
    {
      text: "ЛИГА. Совершеннолетний фест",
      file: "LigaFest720",
    },
    {
      text: "РАЭК. Октябрьская сессия",
      file: "RAEKOctober720",
    },
    {
      text: "Конкурс «Лучший в индустрии туризма»",
      file: "Istanbul720",
    },
    {
      text: "TOPDOG. Свобода не погибнет",
      file: "TopdogFreedom720",
    },
    {
      text: "Junwex Санкт-Петербург",
      file: "Junwex720",
    },
    {
      text: "Дизайн выходные. Хроника",
      file: "DWChronicle720",
    },
    {
      text: "1C Bitrix Power",
      file: "1c_bp720",
    },
    {
      text: "ЛИГА. Русская сказка",
      file: "LigaRussianTale",
    },
  ]
  const Item = ({ onClick, title, shortUrl, poster }) => {
    const { ref, inView } = useInView({
      /* Optional options */
      threshold: ar < 1 ? 0.5 * ar : 0.5,
    })
    const [hover, setHover] = React.useState(false)
    return (
      <div className="flex flex-col gap-6 justify-start items-center relative">
        <div
          ref={ref}
          onClick={onClick}
          onMouseEnter={() => {
            setHover(true)
          }}
          onMouseLeave={() => {
            setHover(false)
          }}
          className={`aspect-video relative`}
        >
          <ReactVideo
            width="100%"
            height="100%"
            playing={width < 1024 ? inView : hover}
            playsinline
            loop={true}
            muted={true}
            video={`https://cdn.mustbefamily.com/eventssite/short/${shortUrl}.mp4`}
            className={``}
            alt={title}
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <IconContext.Provider value={{ size: "10rem", color: "white" }}>
              <CiPlay1 />
            </IconContext.Provider>
          </div>
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 md:p-6 lg:p-8">
        {itemsData.map((value, index) => (
          <Item
            key={index}
            title={value.text}
            shortUrl={value.file}
            poster={value.file}
            onClick={() => {
              setIsModalVideoOpen(true)
              setVideoURL(value.file)
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default PortfolioSection
