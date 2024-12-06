import * as React from "react"
import SocialGov from "../images/whatwedo/conferences.jpg"
import MoscowCremlin from "../images/whatwedo/conferences.jpg"
import KostromaGov from "../images/whatwedo/conferences.jpg"
import DesignWeekend from "../images/whatwedo/conferences.jpg"

const TrustSection = () => {
  const itemsData = [
    {
      text: "Общественная палата РФ",
      img: SocialGov,
    },
    {
      text: "Линии Судьбы Москва Кремль",
      img: MoscowCremlin,
    },
    {
      text: "Администрация города Костромы",
      img: KostromaGov,
    },
    {
      text: "Дизайн выходные",
      img: DesignWeekend,
    },
  ]
  const Item = ({ text, img }) => (
    <div className="flex flex-col gap-6 justify-start items-center">
      <img className="w-full rounded-xl" src={img} alt={text} />
      <div className="text-lg lg:text-base xl:text-lg text-slate-700 text-center">
        {text}
      </div>
    </div>
  )
  return (
    <div className="container mx-auto py-10">
      <h3 className="text-3xl text-center">
        Нам доверяют съемку событий государственные структуры
      </h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-12 p-6 lg:p-12">
        {itemsData.map((value, index) => (
          <Item key={index} text={value.text} img={value.img} />
        ))}
      </div>
    </div>
  )
}

export default TrustSection
