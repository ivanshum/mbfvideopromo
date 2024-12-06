import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import "react-phone-number-input/style.css"
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input"
import ru from "react-phone-number-input/locale/ru"
import { useAppContext } from "../context/AppContext"

const FormHero = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "all" })
  const { setIsModalOpen } = useAppContext()
  const onSubmit = data => console.log(data)

  return (
    <>
      <div className="text-lg lg:text-xl">
        Получите персональное коммерческое предложение с детальной сметой в
        течение дня
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block pb-2" htmlFor="phoneinput">
          Ваш номер телефона
        </label>
        <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
          <div>
            <Controller
              name="phoneinput"
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
                  className={`rounded-lg px-5 py-2.5 border ${
                    errors.phoneinput
                      ? "border-red-500 border-2"
                      : "border-1 border-black"
                  } lg:h-full`}
                  onBlur={onBlur}
                  onChange={onChange}
                  defaultCountry={"RU"}
                  international
                  addInternationalOption={false}
                  withCountryCallingCode
                  id="phoneinput"
                />
              )}
            />
          </div>
          <button
            aria-label="Позвонить"
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <div className="flex flex-row gap-2 items-center justify-center text-base">
              <span className="text-sm">Получить коммерческое предложение</span>
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
  )
}
export default FormHero
