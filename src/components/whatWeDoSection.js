import * as React from "react"
import Conferences from "../images/whatwedo/conferences.jpg"
import Seminars from "../images/whatwedo/seminars.webp"
import Business from "../images/whatwedo/business.webp"
import Corporate from "../images/whatwedo/corporate.jpg"
const WhatWeDoSection = () => {
  const itemsData = [
    {
      text: "Конференции",
      img: Conferences,
    },
    {
      text: "Семинары",
      img: Seminars,
    },
    {
      text: "Бизнес-встречи",
      img: Business,
    },
    {
      text: "Корпоративы компаний",
      img: Corporate,
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
        Какие мероприятия мы снимаем?
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-12 lg:p-6">
        {itemsData.map((value, index) => (
          <Item key={index} text={value.text} img={value.img} />
        ))}
      </div>
    </div>
  )
}
export default WhatWeDoSection
