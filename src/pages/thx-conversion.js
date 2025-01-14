import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ReactVideo from "../components/reactvideo"
import useWindowSize from "../hooks/useWindowSize"

const ThxConversionPage = ({ data }) => {
  const { ar } = useWindowSize()
  return (
    <Layout data={data} hideFooter>
      <div className="relative h-screen">
        <ReactVideo
          width="100%"
          height="100%"
          playing={true}
          playsinline
          loop={true}
          muted={true}
          video={
            ar > 1
              ? `https://cdn.mustbefamily.com/eventssite/eventshero_d.mp4`
              : `https://cdn.mustbefamily.com/eventssite/eventshero_m.mp4`
          }
          poster={
            ar > 1
              ? `https://cdn.mustbefamily.com/eventssite/eventshero_d.jpg`
              : `https://cdn.mustbefamily.com/eventssite/eventshero_m.jpg`
          }
          className={`z-0 relative`}
          alt={`Промо видео`}
        />
        <div className="absolute z-10 top-0 bg-[#000000ad] w-full h-full">
          <div className="flex flex-col justify-center items-center text-white gap-8 p-8 h-full container mx-auto">
            <div className="text-xl lg:text-2xl">
              Спасибо, мы свяжемся с вами как можно скорее
            </div>
            <div className="text-lg lg:text-xl">
              в течении рабочего дня с 8:00 до 20:00 по Московскому времени
              (GMT+3)
            </div>
            <Link
              to="/"
              className="text-black bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-700 font-medium rounded-lg px-5 py-2.5"
            >
              <div className="flex flex-row gap-2 items-center justify-center text-base">
                <span className="text-lg lg:text-xl">
                  Вернуться к просмотру сайта
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => (
  <Seo title={`${data.site.siteMetadata?.title} | Видео высокого качества`} />
)

export default ThxConversionPage

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
