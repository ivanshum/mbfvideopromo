import * as React from "react"
import ReactVideo from "./reactvideo"
import { useAppContext } from "../context/AppContext"

const ModalVideo = ({ handleSetIsVideoOpen }) => {
  const { videoURL } = useAppContext()
  return (
    <div
      className={`fixed bg-black bg-opacity-90 top-0 w-full h-screen z-50 inset-0 p-14 overflow-auto overscroll-contain`}
    >
      <div
        onClick={() => handleSetIsVideoOpen(false)}
        className="absolute top-0 right-0 text-white font-extrabold text-lg p-2 cursor-pointer m-2 border border-white rounded-full w-12 h-12 text-center"
      >
        X
      </div>
      <div className={`react-player-wrapper w-full h-full z-[100] relative`}>
        <ReactVideo
          width={`100%`}
          height={`100%`}
          controls={true}
          playsinline
          video={`https://cdn.mustbefamily.com/eventssite/full/${videoURL}.mp4`}
        />
      </div>
    </div>
  )
}
export default ModalVideo
