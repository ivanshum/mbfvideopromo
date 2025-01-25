import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import "react-phone-number-input/style.css"
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input"
import ru from "react-phone-number-input/locale/ru"
import { useAppContext } from "../context/AppContext"
import SendFunc, { ValidateToken } from "../utility/formSubmitFunc"
import { navigate } from "gatsby"
import { InvisibleSmartCaptcha } from "@yandex/smart-captcha"
const Form = ({
  id,
  title = `Получите персональное коммерческое предложение с детальной сметой в
        течение дня`,
  offer = `Получить коммерческое предложение`,
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "all" })
  const { setIsModalOpen } = useAppContext()

  const onSubmit = data => {
    setVisible(true)
    ValidateToken(data.tokenval).then(response => {
      /* &&    response.host.indexOf("events.mustbefamily.com") !== -1 */
      if (response.status === "ok") {
        SendFunc(data.tokenval, data[id + "phoneinput"], id, {}, () =>
          navigate("/thx-conversion/")
        )
      } else {
        handleReset()
        setVisible(true)
      }
    })
  }
  const fieldName = id + "phoneinput"
  const formRef = React.useRef()
  /* Captcha states and handlers*/
  const [token, setToken] = React.useState("")
  const [visible, setVisible] = React.useState(false)

  const handleChallengeHidden = React.useCallback(() => {
    setVisible(false)
  }, [])
  const [resetCaptcha, setResetCaptcha] = React.useState(0)
  const handleReset = () => {
    setResetCaptcha(prev => prev + 1)
  }
  return (
    <>
      <div className="text-lg lg:text-xl">{title}</div>
      <form onSubmit={handleSubmit(onSubmit)} id={id} ref={formRef}>
        <InvisibleSmartCaptcha
          hideShield
          key={`${id}${resetCaptcha}`}
          sitekey="ysc1_groIhhSDBRkyFdUYaDNvlybAEndJBO81gZkPztbC859af50d"
          onSuccess={tokenvalue => {
            setValue("tokenval", tokenvalue)
            setToken(tokenvalue)
            const timeout = setTimeout(() => {
              formRef.current.dispatchEvent(
                new Event("submit", { cancelable: true, bubbles: true })
              )
              clearTimeout(timeout)
            }, 500)
          }}
          onTokenExpired={handleReset}
          onJavascriptError={() =>
            alert(
              "Произошла ошибка в работе Javascript, попробуйте обновить страницу и попробуйте ещё раз"
            )
          }
          onNetworkError={() =>
            alert(
              "Произошда ошибка соединения с интернетом, проверьте подключение и попробуйте ещё раз, возможно необходимо обновить страницу."
            )
          }
          onChallengeHidden={handleChallengeHidden}
          visible={visible}
        />
        <input
          type="hidden"
          name="tokenval"
          value={token}
          {...register("tokenval", {
            value: token,
            validate: tokenval => {
              if (tokenval == token && token !== "") {
                return true
              } else {
                setVisible(true)
                return false
              }
            },
          })}
        />
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
              <span className="text-sm">
                {errors["tokenval"] ? "Подтвердите что вы не робот" : offer}
              </span>
            </div>
          </button>
        </div>
        <div className="text-sm pt-2">
          Нажимая кнопку, вы соглашаетесь с&nbsp;
          <a
            onClick={() => setIsModalOpen(true)}
            className="underline cursor-pointer"
          >
            политикой конфиденциальности
          </a>
        </div>
      </form>
    </>
  )
}
export default Form
