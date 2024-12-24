import * as React from "react"
import Logo from "../images/logo.png"
import { MdPhone } from "react-icons/md"
import { IconContext } from "react-icons"
import { useAppContext } from "../context/AppContext"

const Header = ({ siteTitle, siteSubTitle }) => {
  const { setIsModalFormOpen } = useAppContext()
  const [firstRowSubTitle, secondRowSubTitle] = siteSubTitle.split("#")
  return (
    <>
      <div className="p-3 w-full flex flex-row justify-center md:justify-between items-center absolute top-0 z-50 bg-transparent text-white">
        <div className="text-xl flex-grow w-1/2 lg:text-xl font-bold uppercase hidden md:block">
          {siteTitle}
        </div>
        <img
          className="h-20 brightness-0 invert-[1] flex-shrink"
          src={Logo}
          alt="Логотип Mustbefamily"
        />
        <div className="text-sm flex-grow w-1/2 lg:text-base uppercase hidden lg:block text-right text-balance">
          {firstRowSubTitle}
          <br />
          {secondRowSubTitle}
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

export default Header
