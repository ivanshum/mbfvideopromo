import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data }) => (
  <Layout data={data}>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = ({ data }) => (
  <Seo title={`${data.site.siteMetadata?.title} | Видео высокого качества`} />
)

export default NotFoundPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        sitesubtitle
      }
    }
  }
`
