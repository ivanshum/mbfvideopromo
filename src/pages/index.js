import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/heroSection"
import QuizSection from "../components/quizSection"
import WhatWeDoSection from "../components/whatWeDoSection"
import PortfolioSection from "../components/portfolioSection"
import FormSection from "../components/formSection"
import TrustSection from "../components/trustSection"

const IndexPage = ({ data }) => {
  return (
    <Layout data={data}>
      <HeroSection />
      <QuizSection />
      <WhatWeDoSection />
      <PortfolioSection />
      <FormSection />
      <TrustSection />
    </Layout>
  )
}

export const Head = ({ data }) => (
  <Seo title={`${data.site.siteMetadata?.title} | Видео высокого качества`} />
)

export default IndexPage

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
