import * as React from "react"
import Logo from "../images/logo.png"
import { MdPhone } from "react-icons/md"
import { IconContext } from "react-icons"
import { useAppContext } from "../context/AppContext"

const Header = ({ siteTitle, siteSubTitle }) => {
  const { setIsModalFormOpen } = useAppContext()
  return (
    <div className="p-3 w-full flex flex-row justify-between items-center sticky top-0 z-50 bg-white">
      <img className="h-20" src={Logo} alt="Логотип Mustbefamily" />
      <div>
        <div className="text-xl lg:text-xl font-bold uppercase hidden md:block">
          {siteTitle}
        </div>
        <div className="text-sm lg:text-base uppercase hidden lg:block">
          {siteSubTitle}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <button
          aria-label="Позвонить"
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          <div className="flex flex-row gap-2 items-center justify-center text-base">
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <MdPhone />
            </IconContext.Provider>
            <span className="text-sm uppercase">+7(903)897-65-75</span>
          </div>
        </button>
        <button
          type="button"
          aria-label="Заказать звонок"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={() => setIsModalFormOpen(true)}
        >
          <div className="flex flex-row gap-2 items-center justify-center text-base">
            <span className="text-sm uppercase">Заказать звонок</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Header
