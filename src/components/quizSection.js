import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import "react-phone-number-input/style.css"
import ru from "react-phone-number-input/locale/ru"
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input"
import { useAppContext } from "../context/AppContext"
import FormSuccess from "./formSuccess"
import SendFunc from "../utility/formSubmitFunc"
const QuizSection = () => {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: "all" })
  const onSubmit = data => {
    const { ["quizformphone"]: _, ...rest } = data
    const withoutphone = Object.assign({}, rest)
    SendFunc(data["quizformphone"], withoutphone)
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
  }, [formValues])
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
  const Answer = ({ step, index, value, text }) => {
    return (
      <div className="flex flex-row gap-4">
        <input
          {...register(`answer${step}`, { required: true })}
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
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-center">
        Пройдите опрос и получите уникальное предложение созданное специально
        для вас
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} id="quizform">
        <div
          className={`${
            frame === 0 ? `block` : `hidden`
          } border border-black rounded-3xl my-20 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
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
            <Answer step={0} index={0} text={"На открытой площадке"} />
            <Answer step={0} index={1} text={"В помещении"} />
          </div>
          <div className="self-end">
            <ButtonStep step={0} action={() => setFrame(1)} />
          </div>
        </div>
        <div
          className={`${
            frame === 1 ? `block` : `hidden`
          } border border-black rounded-3xl my-20 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
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
            <Answer step={1} index={0} text={"Москва"} />
            <Answer step={1} index={1} text={"Московская область"} />
            <Answer step={1} index={2} text={"Другое"} />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={1} action={() => setFrame(2)} />
          </div>
        </div>
        <div
          className={`${
            frame === 2 ? `block` : `hidden`
          } border border-black rounded-3xl my-20 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
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
            <Answer step={2} index={0} text={"До 100"} />
            <Answer step={2} index={1} text={"100-500"} />
            <Answer step={2} index={2} text={"500-1000"} />
            <Answer step={2} index={3} text={"1000 и более"} />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={2} action={() => setFrame(3)} />
          </div>
        </div>
        <div
          className={`${
            frame === 3 ? `block` : `hidden`
          } border border-black rounded-3xl my-20 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
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
            />
            <Answer
              step={3}
              index={0}
              text={"Частное (день рождения и т.д.)"}
            />
            <Answer
              step={3}
              index={1}
              text={"Компании (корпоратив, конференция и т.д.)"}
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
          } border border-black rounded-3xl my-20 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
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
            <Answer step={4} index={0} text={"Да"} />
            <Answer step={4} index={1} text={"Нет"} />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={4} action={() => setFrame(5)} />
          </div>
        </div>
        <div
          className={`${
            frame === 5 ? `block` : `hidden`
          } border border-black rounded-3xl my-20 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
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
            <Answer step={5} index={0} text={"Да"} />
            <Answer step={5} index={1} text={"Нет"} />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={5} action={() => setFrame(6)} />
          </div>
        </div>
        <div
          className={`${
            frame === 6 ? `block` : `hidden`
          } border border-black rounded-3xl my-20 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
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
            <Answer step={6} index={0} text={"Да"} />
            <Answer step={6} index={1} text={"Нет"} />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={6} action={() => setFrame(7)} />
          </div>
        </div>
        <div
          className={`${
            frame === 7 ? `block` : `hidden`
          } border border-black rounded-3xl my-20 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
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
            <Answer step={7} index={0} text={"3-4 часа"} />
            <Answer step={7} index={1} text={"5-6 часов"} />
            <Answer step={7} index={2} text={"7 и более часов"} />
          </div>
          <div className="flex flex-row justify-between w-full">
            <BackButton />
            <ButtonStep step={7} action={() => setFrame(8)} />
          </div>
        </div>{" "}
        <div
          className={`${
            frame === 8 ? `block` : `hidden`
          } border border-black rounded-3xl my-20 relative flex flex-col p-4 gap-2 lg:p-8 lg:gap-4 min-h-96 justify-between items-center`}
        >
          {!isSubmitSuccessful ? (
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
                Нажимая кнопку, вы соглашаетесь с{" "}
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
          ) : (
            <FormSuccess />
          )}
        </div>
      </form>
    </div>
  )
}
export default QuizSection
