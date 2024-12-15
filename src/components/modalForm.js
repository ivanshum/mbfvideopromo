import * as React from "react"
import Form from "./form"

const ModalForm = ({ handleSetIsOpen }) => {
  return (
    <div
      className={`fixed bg-white bg-opacity-90 top-0 w-full h-screen z-50 inset-0 p-12 overflow-auto overscroll-contain flex justify-center items-center`}
    >
      <div
        onClick={() => handleSetIsOpen(false)}
        className="fixed flex justify-center items-center right-8 top-3 h-10 w-10 fill-black z-[110]"
      >
        <svg width="28" height="28" viewBox="0 0 36 36">
          <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
        </svg>
      </div>
      <div className="relative w-auto">
        <h3 className="text-xl">Заказать обратный звонок</h3>
        <Form
          id="callback"
          title="Оставьте ваш номер телефона и получите консультацию в течение 15 минут"
          offer="Заказать звонок"
        />
      </div>
    </div>
  )
}
export default ModalForm
