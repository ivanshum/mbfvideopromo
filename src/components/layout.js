import * as React from "react"
import Header from "./header"
import "../styles/global.css"
import Footer from "./footer"
import { useAppContext } from "../context/AppContext"
import ModalPolicy from "./modalPolicy"
import ModalForm from "./modalForm"
const Layout = ({ data, children }) => {
  const { isModalOpen, setIsModalOpen, isModalFormOpen, setIsModalFormOpen } =
    useAppContext()
  return (
    <div className="flex flex-col relative">
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        siteSubTitle={data.site.siteMetadata?.sitesubtitle || `SubTitle`}
      />
      <main>{children}</main>
      {isModalOpen && <ModalPolicy handleSetIsModalOpen={setIsModalOpen} />}
      {isModalFormOpen && <ModalForm handleSetIsOpen={setIsModalFormOpen} />}
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}

export default Layout
