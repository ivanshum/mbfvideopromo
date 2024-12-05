import * as React from "react"
import Logo from "../images/logo.png"
import { MdPhone } from "react-icons/md"
const Header = ({ siteTitle, siteSubTitle }) => (
  <div className="p-3 w-full flex flex-row justify-between items-center">
    <img className="h-20" src={Logo} alt="Логотип Mustbefamily" />
    <div>
      <h1 className="text-xl lg:text-xl font-bold uppercase hidden md:block">
        {siteTitle}
      </h1>
      <h2 className="text-lg lg:text-lg uppercase hidden lg:block">
        {siteSubTitle}
      </h2>
    </div>
    <button
      type="button"
      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <MdPhone className="" />
        <span className="uppercase">Позвонить</span>
      </div>
    </button>
  </div>
)

export default Header
