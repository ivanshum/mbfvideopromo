import * as React from "react"
import Logo from "../images/logo.png"

const Header = ({ siteTitle, siteSubTitle }) => {
  const [firstRowSubTitle, secondRowSubTitle] = siteSubTitle.split("#")
  return (
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
  )
}

export default Header
