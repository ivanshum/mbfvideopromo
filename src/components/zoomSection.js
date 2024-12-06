import * as React from "react"
import Form from "./form"

const ZoomSection = () => {
  return (
    <div className="bg-black w-full py-10">
      <div className="flex flex-col container mx-auto text-white px-8 py-4 justify-center items-center gap-8">
        <h3 className="text-3xl text-center">
          Запишитесь на Zoom-сессию с руководителем
        </h3>
        <Form
          id="zoom"
          title="Обсудим ваши задачи, рассчитаем стоимость и ответим на все вопросы"
          offer="Записаться"
        />
      </div>
    </div>
  )
}
export default ZoomSection
