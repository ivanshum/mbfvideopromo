import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import "react-phone-number-input/style.css"
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input"
import ru from "react-phone-number-input/locale/ru"
import { useAppContext } from "../context/AppContext"
import FormSuccess from "./formSuccess"
import SendFunc from "../utility/formSubmitFunc"

const Form = ({
  id,
  title = `Получите персональное коммерческое предложение с детальной сметой в
        течение дня`,
  offer = `Получить коммерческое предложение`,
}) => {
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    control,
  } = useForm({ mode: "all" })
  const { setIsModalOpen } = useAppContext()
  const onSubmit = data => {
    SendFunc(data[id + "phoneinput"])
    console.log(data[id + "phoneinput"])
  }
  const fieldName = id + "phoneinput"
  return !isSubmitSuccessful ? (
    <>
      <div className="text-lg lg:text-xl">{title}</div>
      <form onSubmit={handleSubmit(onSubmit)} id={id}>
        <label className="block pb-2" htmlFor={fieldName}>
          Ваш номер телефона
        </label>
        <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
          <div>
            <Controller
              name={fieldName}
              control={control}
              rules={{
                validate: value => {
                  try {
                    return isPossiblePhoneNumber(value)
                  } catch (error) {
                    console.error(error)
                    return false
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value = "+7" } }) => (
                <PhoneInput
                  value={value}
                  labels={ru}
                  className={`rounded-lg px-5 py-2.5  box-border border-2 bg-inherit ${
                    errors[fieldName] ? "border-red-500" : "border-gray-800"
                  } lg:h-full`}
                  onBlur={onBlur}
                  onChange={onChange}
                  defaultCountry={"RU"}
                  international
                  addInternationalOption={false}
                  withCountryCallingCode
                  id={fieldName}
                />
              )}
            />
          </div>
          <button
            id={id + "submitbutton"}
            aria-label={offer}
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <div className="flex flex-row gap-2 items-center justify-center text-base">
              <span className="text-sm">{offer}</span>
            </div>
          </button>
        </div>
        <div className="text-sm pt-2">
          Нажимая кнопку, вы соглашаетесь с{" "}
          <a
            onClick={() => setIsModalOpen(true)}
            className="box-border border-b-2 border-dotted border-blue-800 cursor-pointer"
          >
            политикой конфиденциальности
          </a>
        </div>
      </form>
    </>
  ) : (
    <FormSuccess />
  )
}
export default Form
