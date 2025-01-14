import * as React from "react"
import { MdPhone } from "react-icons/md"
import { IconContext } from "react-icons"
import { useAppContext } from "../context/AppContext"

const Footer = () => {
  const { setIsModalFormOpen } = useAppContext()
  return (
    <>
      <div className="p-3 w-full flex items-center justify-center text-center">
        <div>
          Все права защищены
          <br />
          &copy;&nbsp;
          <a href="https://mustbefamily.com" className="underline">
            Must Be Family
          </a>
          &nbsp;2024
        </div>
      </div>
      <div className="fixed bottom-0 right-0 h-12 w-12 m-2 text-3xl lg:text-4xl lg:h-14 lg:w-14 z-[200] lg:m-4 bg-black rounded-full flex justify-center items-center">
        <a href="tel:+79038976575" onClick={() => setIsModalFormOpen(true)}>
          <IconContext.Provider value={{ color: "white" }}>
            <MdPhone />
          </IconContext.Provider>
        </a>
      </div>
      <div
        style={{ "--myscalevar": 1.1, "--myanimdelay": 250 }}
        className="scale-up-center delay-[500] fixed bottom-0 right-0 h-12 w-12 m-2 lg:h-14 lg:w-14 z-[199] lg:m-4 bg-[#00000093] rounded-full"
      >
        &nbsp;
      </div>
      <div
        style={{ "--myscalevar": 1.3, "--myanimdelay": 500 }}
        className="scale-up-center delay-[750] fixed bottom-0 right-0 h-12 w-12 m-2 lg:h-14 lg:w-14 z-[198] lg:m-4 bg-[#00000063] rounded-full"
      >
        &nbsp;
      </div>
      <div
        style={{ "--myscalevar": 1.5, "--myanimdelay": 750 }}
        className="scale-up-center delay-[1000] fixed bottom-0 right-0 h-12 w-12 m-2 lg:h-14 lg:w-14 z-[197] lg:m-4 bg-[#0000002f] rounded-full"
      >
        &nbsp;
      </div>
    </>
  )
}

export default Footer
