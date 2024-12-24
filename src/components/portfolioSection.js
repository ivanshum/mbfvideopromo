import * as React from "react"
import { useAppContext } from "../context/AppContext"
import PortfolioItem from "./portfolioItem"

const PortfolioSection = () => {
  const { setIsModalVideoOpen, setVideoURL } = useAppContext()
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
      text: "Istanbul Jewelry Show",
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
  return (
    <>
      <h3 className="text-4xl text-center pb-8 mx-auto py-10">
        Портфолио Event видео
      </h3>
      <div className="flex flex-wrap">
        {itemsData.map((value, index) => (
          <PortfolioItem
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
      <div className="h-0">&nbsp;</div>
    </>
  )
}
export default PortfolioSection
