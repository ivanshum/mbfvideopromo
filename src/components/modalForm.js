import * as React from "react"
import Form from "./form"

const ModalForm = ({ handleSetIsOpen }) => {
  return (
    <div
      className={`fixed bg-white bg-opacity-90 top-0 w-full h-screen z-50 inset-0 p-12 overflow-auto overscroll-contain`}
      onClick={() => handleSetIsOpen(false)}
    >
      <h3 className="text-xl">Заказать обратный звонок</h3>
      <Form
        id="callback"
        title="Оставьте ваш номер телефона и получите консультацию в течение 15 минут"
        offer="Заказать звонок"
      />
    </div>
  )
}
export default ModalForm
