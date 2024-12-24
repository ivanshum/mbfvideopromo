import * as React from "react"
import ReactVideo from "../components/reactvideo"
import useWindowSize from "../hooks/useWindowSize"
import { RxDesktop } from "react-icons/rx"
import { BsCameraReels } from "react-icons/bs"
import { RxTimer } from "react-icons/rx"
import { IconContext } from "react-icons"
import Form from "./form"

const HeroSection = () => {
  const { width, ar } = useWindowSize()
  return (
    <>
      <div className="relative h-screen">
        <ReactVideo
          width="100%"
          height="100%"
          playing={true}
          playsinline
          loop={true}
          muted={true}
          video={
            ar > 1
              ? `https://cdn.mustbefamily.com/eventssite/eventshero_d.mp4`
              : `https://cdn.mustbefamily.com/eventssite/eventshero_m.mp4`
          }
          poster={
            ar > 1
              ? `https://cdn.mustbefamily.com/eventssite/eventshero_d.jpg`
              : `https://cdn.mustbefamily.com/eventssite/eventshero_m.jpg`
          }
          className={`z-0 relative`}
          alt={`Промо видео`}
        />
        <div className="absolute z-10 top-0 bg-[#000000ad] w-full h-full">
          <div className="flex flex-col justify-center items-center text-white gap-8 p-8 h-full container mx-auto">
            <h1 className="font-semibold text-3xl lg:text-5xl pt-12">
              Видеосъемка мероприятий
            </h1>
            <h2 className="text-xl lg:text-3xl">
              Создадим впечатляющий видеоролик вашего event-события
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2 text-base lg:text-lg">
                <IconContext.Provider
                  value={{ color: "white", size: "1.5rem" }}
                >
                  <div className="p-3 rounded-full bg-black">
                    <RxDesktop />
                  </div>
                </IconContext.Provider>
                <span>Монтаж от 1 недели</span>
              </div>
              <div className="flex flex-row items-center gap-2 text-lg">
                <IconContext.Provider
                  value={{ color: "white", size: "1.5rem" }}
                >
                  <div className="p-3 rounded-full bg-black">
                    <BsCameraReels />
                  </div>
                </IconContext.Provider>
                <span>SDE ролик в день мероприятия</span>
              </div>
              <div className="flex flex-row items-center gap-2 text-lg">
                <IconContext.Provider
                  value={{ color: "white", size: "1.5rem" }}
                >
                  <div className="p-3 rounded-full bg-black">
                    <RxTimer />
                  </div>
                </IconContext.Provider>
                <span>Берем срочные заказы за трое суток</span>
              </div>
            </div>
            {width > 1023 && (
              <div className="bg-white rounded-2xl flex flex-col max-w-[600px] text-black px-8 py-4 gap-2">
                <Form id="hero" />
              </div>
            )}
          </div>
        </div>
      </div>
      {width <= 1023 && (
        <div className="flex flex-col container mx-auto px-8 py-4 gap-2">
          <Form id="hero" />
        </div>
      )}
    </>
  )
}
export default HeroSection
