import * as React from "react"
import Header from "./header"
import "../styles/global.css"
import Footer from "./footer"
import { useAppContext } from "../context/AppContext"
import ModalPolicy from "./modalPolicy"
const Layout = ({ data, children }) => {
  const { isModalOpen, setIsModalOpen } = useAppContext()
  return (
    <div className="flex flex-col">
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        siteSubTitle={data.site.siteMetadata?.sitesubtitle || `SubTitle`}
      />
      <main>{children}</main>
      {isModalOpen && <ModalPolicy handleSetIsModalOpen={setIsModalOpen} />}
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}

export default Layout
