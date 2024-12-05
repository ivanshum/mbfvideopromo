import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/global.css"
import Footer from "./footer"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          sitesubtitle
        }
      }
    }
  `)

  return (
    <div className="flex flex-col">
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        siteSubTitle={data.site.siteMetadata?.sitesubtitle || `SubTitle`}
      />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}

export default Layout
