import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import "react-phone-number-input/style.css"
import ru from "react-phone-number-input/locale/ru"
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input"
import { useAppContext } from "../context/AppContext"
import SendFunc, { ValidateToken } from "../utility/formSubmitFunc"
import { navigate } from "gatsby"
import { InvisibleSmartCaptcha } from "@yandex/smart-captcha"

const QuizSection = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all" })
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
  const onSubmit = data => {
    const { ["quizformphone"]: phone, ["tokenval"]: tokenval, ...rest } = data
    const withoutphone = Object.assign({}, rest)
    setVisible(true)
    ValidateToken(tokenval).then(response => {
      /* &&    response.host.indexOf("events.mustbefamily.com") !== -1 */
      if (response.status === "ok") {
        SendFunc(tokenval, phone, "quizform", withoutphone, () =>
          navigate("/thx-conversion/")
        )
      } else {
        handleReset()
        setVisible(true)
      }
    })
  }

  const [frame, setFrame] = React.useState(0)
  const formValues = watch()
  const { setIsModalOpen } = useAppContext()
  const [isDisabled, setIsDisabled] = React.useState(true)
  React.useEffect(() => {
    setIsDisabled(
      frame !== 8
        ? !formValues[`answer${frame}`]
        : !(
            formValues[`quizformphone`] !== undefined &&
            Object.keys(errors).length === 0
          )
    )
  }, [formValues, errors, frame])
  const BackButton = () => (
    <button
      id="quizformsubmitbutton"
      aria-label="Предыдущий вопрос"
      type="button"
      onClick={() => {
        setFrame(frame => frame - 1)
      }}
      className="text-black bg-slate-100 hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-slate-200 disabled:text-slate-400"
    >
      <div className="flex flex-row gap-2 items-center justify-center text-base">
        <span className="text-sm">Предыдущий вопрос</span>
      </div>
    </button>
  )
  const ButtonStep = ({ step, action }) => {
    const phrase =
      step < 7
        ? `Следующий вопрос`
        : step === 7
        ? `Оставить контакты`
        : errors["tokenval"]
        ? "Подтвердите что вы не робот"
        : `Получить предложение`
    const buttonProps =
      step !== 8 ? { type: "button", onClick: action } : { type: "submit" }

    return (
      <button
        {...buttonProps}
        id={`quizformbutton${step}`}
        aria-label={phrase}
        disabled={isDisabled}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-slate-200 disabled:text-slate-400"
      >
        <div className="flex flex-row gap-2 items-center justify-center text-base">
          <span className="text-sm">{phrase}</span>
        </div>
      </button>
    )
  }
  const Answer = ({ step, index, value, text, action }) => {
    return (
      <div className="flex flex-row gap-4">
        <input
          {...register(`answer${step}`, { required: true, onChange: action })}
          type="radio"
          id={`answer${step}_${index}`}
          value={value || text || `${step}_${index}`}
          name={`answer${step}`}
        />
        <label className="text-lg" htmlFor={`answer${step}_${index}`}>
          {text}
        </label>
      </div>
    )
  }
  return (
    <div className="bg-white container mx-auto rounded flex flex-col text-black p-2 lg:p-8 ">
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-center pt-12">
        Пройдите опрос и получите уникальное предложение созданное специально
        для вас
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} id="quizform" ref={formRef}>
        <InvisibleSmartCaptcha
          hideShield
          key={`quizform${resetCaptcha}`}
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
        <div
          className={`${
            frame === 0 ? `block` : `hidden`
          } border border-black rounded-3xl my-8 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
            Ваше мероприятие будет проходить на открытой или закрытой площадке?
          </h4>
          <div className="flex flex-col gap-2">
            <input
              {...register(`question0`)}
              type="hidden"
              value="Ваше мероприятие будет проходить на открытой или закрытой площадке?"
              name={`question0`}
            />
            <Answer
              step={0}
              index={0}
              text={"На открытой площадке"}
              action={() => setFrame(1)}
            />
            <Answer
              step={0}
              index={1}
              text={"В помещении"}
              action={() => setFrame(1)}
            />
          </div>
          <div className="self-end">
            <ButtonStep step={0} action={() => setFrame(1)} />
          </div>
        </div>
        <div
          className={`${
            frame === 1 ? `block` : `hidden`
          } border border-black rounded-3xl my-8 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
            Где будет проходить мероприятие?
          </h4>
          <div className="flex flex-col gap-2">
            <input
              {...register(`question1`)}
              type="hidden"
              value="Где будет проходить мероприятие?"
              name={`question1`}
            />
            <Answer
              step={1}
              index={0}
              text={"Москва"}
              action={() => setFrame(2)}
            />
            <Answer
              step={1}
              index={1}
              text={"Московская область"}
              action={() => setFrame(2)}
            />
            <Answer
              step={1}
              index={2}
              text={"Другое"}
              action={() => setFrame(2)}
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={1} action={() => setFrame(2)} />
          </div>
        </div>
        <div
          className={`${
            frame === 2 ? `block` : `hidden`
          } border border-black rounded-3xl my-8 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
            Какое планируется количество гостей?
          </h4>
          <div className="flex flex-col gap-2 self-center">
            <input
              {...register(`question2`)}
              type="hidden"
              value="Какое планируется количество гостей?"
              name={`question2`}
            />
            <Answer
              step={2}
              index={0}
              text={"До 100"}
              action={() => setFrame(3)}
            />
            <Answer
              step={2}
              index={1}
              text={"100-500"}
              action={() => setFrame(3)}
            />
            <Answer
              step={2}
              index={2}
              text={"500-1000"}
              action={() => setFrame(3)}
            />
            <Answer
              step={2}
              index={3}
              text={"1000 и более"}
              action={() => setFrame(3)}
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={2} action={() => setFrame(3)} />
          </div>
        </div>
        <div
          className={`${
            frame === 3 ? `block` : `hidden`
          } border border-black rounded-3xl my-8 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
            Мероприятие частное или компании?
          </h4>
          <div className="flex flex-col gap-2">
            <input
              {...register(`question3`)}
              type="hidden"
              value="Мероприятие частное или компании?"
              name={`question3`}
              action={() => setFrame(4)}
            />
            <Answer
              step={3}
              index={0}
              value={"Частное"}
              text={"Частное (день рождения и т.д.)"}
              action={() => setFrame(4)}
            />
            <Answer
              step={3}
              index={1}
              value={"Корпоратив"}
              text={"Компании (корпоратив, конференция и т.д.)"}
              action={() => setFrame(4)}
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={3} action={() => setFrame(4)} />
          </div>
        </div>
        <div
          className={`${
            frame === 4 ? `block` : `hidden`
          } border border-black rounded-3xl my-8 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
            Предполагается ли прямая трансляция?
          </h4>
          <div className="flex flex-col gap-2">
            <input
              {...register(`question4`)}
              type="hidden"
              value="Предполагается ли прямая трансляция?"
              name={`question4`}
            />
            <Answer step={4} index={0} text={"Да"} action={() => setFrame(5)} />
            <Answer
              step={4}
              index={1}
              text={"Нет"}
              action={() => setFrame(5)}
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={4} action={() => setFrame(5)} />
          </div>
        </div>
        <div
          className={`${
            frame === 5 ? `block` : `hidden`
          } border border-black rounded-3xl my-8 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
            Предполагается ли видеоинтервью у участников/гостей мероприятия?
          </h4>
          <div className="flex flex-col gap-2">
            <input
              {...register(`question5`)}
              type="hidden"
              value="Предполагается ли видеоинтервью у участников/гостей мероприятия?"
              name={`question5`}
            />
            <Answer step={5} index={0} text={"Да"} action={() => setFrame(6)} />
            <Answer
              step={5}
              index={1}
              text={"Нет"}
              action={() => setFrame(6)}
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={5} action={() => setFrame(6)} />
          </div>
        </div>
        <div
          className={`${
            frame === 6 ? `block` : `hidden`
          } border border-black rounded-3xl my-8 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
            Нужен ли монтаж ролика в день мероприятия (SDE)?
          </h4>
          <div className="flex flex-col gap-2">
            <input
              {...register(`question6`)}
              type="hidden"
              value="Нужен ли монтаж ролика в день мероприятия (SDE)?"
              name={`question6`}
            />
            <Answer step={6} index={0} text={"Да"} action={() => setFrame(7)} />
            <Answer
              step={6}
              index={1}
              text={"Нет"}
              action={() => setFrame(7)}
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={6} action={() => setFrame(7)} />
          </div>
        </div>
        <div
          className={`${
            frame === 7 ? `block` : `hidden`
          } border border-black rounded-3xl my-8 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
            Сколько будет длиться мероприятие?
          </h4>
          <div className="flex flex-col gap-2">
            <input
              {...register(`question7`)}
              type="hidden"
              value="Сколько будет длиться мероприятие?"
              name={`question7`}
            />
            <Answer
              step={7}
              index={0}
              text={"3-4 часа"}
              action={() => setFrame(8)}
            />
            <Answer
              step={7}
              index={1}
              text={"5-6 часов"}
              action={() => setFrame(8)}
            />
            <Answer
              step={7}
              index={2}
              text={"7 и более часов"}
              action={() => setFrame(8)}
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={7} action={() => setFrame(8)} />
          </div>
        </div>
        <div
          className={`${
            frame === 8 ? `block` : `hidden`
          } border border-black rounded-3xl my-8 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          <>
            <h4 className="text-xl md:text-2xl lg:text-3xl text-center">
              Оставте ваши контакты чтобы получить предложение
            </h4>
            <label className="block pb-2" htmlFor={"quizformphone"}>
              Ваш номер телефона
            </label>
            <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
              <div>
                <Controller
                  name={"quizformphone"}
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
                        errors["quizformphone"]
                          ? "border-red-500"
                          : "border-gray-800"
                      } lg:h-full`}
                      onBlur={onBlur}
                      onChange={onChange}
                      defaultCountry={"RU"}
                      international
                      addInternationalOption={false}
                      withCountryCallingCode
                      id={"quizformphone"}
                    />
                  )}
                />
              </div>
            </div>
            <div className="text-sm pt-2">
              Нажимая кнопку, вы соглашаетесь с&nbsp;
              <a
                onClick={() => setIsModalOpen(true)}
                className="box-border border-b-2 border-dotted border-blue-800 cursor-pointer"
              >
                политикой конфиденциальности
              </a>
            </div>
            <div className="flex flex-row justify-between w-full">
              <BackButton />
              <ButtonStep step={8} />
            </div>
          </>
        </div>
      </form>
    </div>
  )
}
export default QuizSection
