import * as React from "react"
import { CiPlay1 } from "react-icons/ci"
import { IconContext } from "react-icons"
import { useAppContext } from "../context/AppContext"

/* import AllImages from "../images/feedbacks" */
const FeedbacksSection = () => {
  const { setIsModalVideoOpen, setVideoURL } = useAppContext()

  return (
    <div className="bg-black w-full py-10">
      <div className="flex flex-col container mx-auto text-white px-8 py-4 justify-center items-center gap-8">
        <h3 className="text-3xl text-center">Видео-отзыв от наших клиентов</h3>
        <div className="lg:w-1/2 aspect-video w-full object-cover flex-grow">
          <div
            onClick={() => {
              setIsModalVideoOpen(true)
              setVideoURL("LigaFeedback720")
            }}
            className={`relative object-cover h-full`}
          >
            <img
              src={`https://cdn.mustbefamily.com/eventssite/LigaFeedback720.jpg`}
              width="100%"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-[#00000080] gap-4">
              <IconContext.Provider value={{ size: "4rem", color: "white" }}>
                <CiPlay1 />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FeedbacksSection
