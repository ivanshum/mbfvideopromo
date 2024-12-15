import * as React from "react"
import SocialGov from "../images/trust/oprf.jpg"
import MoscowCremlin from "../images/trust/kremlin.jpg"
import DesignWeekend from "../images/trust/dw.jpg"

const TrustSection = () => {
  const itemsData = [
    {
      text: "Общественная палата РФ",
      img: SocialGov,
    },
    {
      text: "Государственный Кремлевский дворец",
      img: MoscowCremlin,
    },
    {
      text: "Дизайн выходные",
      img: DesignWeekend,
    },
  ]
  const Item = ({ text, img }) => (
    <div className="flex flex-col gap-2 justify-start items-center pb-2">
      <img className="w-full rounded-xl" src={img} alt={text} />
      <div className="text-lg lg:text-base xl:text-lg text-slate-700 text-center">
        {text}
      </div>
    </div>
  )
  return (
    <div className="container mx-auto py-10 px-6">
      <h3 className="text-3xl text-center pb-8">
        Нам доверяют съемку событий государственные структуры
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12 md:p-6">
        {itemsData.map((value, index) => (
          <Item key={index} text={value.text} img={value.img} />
        ))}
      </div>
    </div>
  )
}

export default TrustSection
