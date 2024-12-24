import * as React from "react"
import ReactVideo from "./reactvideo"
import { useAppContext } from "../context/AppContext"

const ModalVideo = ({ handleSetIsVideoOpen }) => {
  const { videoURL } = useAppContext()
  return (
    <div
      className={`fixed bg-black bg-opacity-90 top-0 w-full h-screen z-50 inset-0 p-0 sm:p-6 md:p-10 lg:p-14 overflow-auto overscroll-contain`}
    >
      <div
        onClick={() => handleSetIsVideoOpen(false)}
        className="absolute flex justify-center items-center right-3 top-3 h-10 w-10 fill-white z-[110] lg:top-1/2 lg:-translate-y-1/2 lg:right-4"
      >
        <svg width="28" height="28" viewBox="0 0 36 36">
          <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
        </svg>
      </div>
      <div className={`fullvideo w-full h-full z-[100] relative bg-black `}>
        <ReactVideo
          width={`100%`}
          height={`100%`}
          controls={true}
          playing
          playsinline
          poster={`https://cdn.mustbefamily.com/eventssite/poster/${videoURL}.jpg`}
          video={`https://cdn.mustbefamily.com/eventssite/full/${videoURL}.mp4`}
        />
      </div>
    </div>
  )
}
export default ModalVideo
