import * as React from "react"
import AllImages from "../images/partners"

const LogoSection = () => {
  return (
    <div
      className="bg-black w-full py-10"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 1) 95%),
        url("/images/logobg.jpg")`,
      }}
    >
      <div className="container mx-auto p-4">
        <h3 className="text-4xl text-center pb-8 text-white">Наши клиенты</h3>
      </div>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 container mx-auto p-4">
        {AllImages.map((image, index) => (
          <div
            className={`flex justify-center items-center ${
              index === 15 ? `md:col-start-2 lg:col-start-3` : ``
            }`}
            key={index}
          >
            <img
              src={image}
              alt="Логотип партнера"
              className="aspect-video object-contain brightness-0 invert-[1] hover:invert-0 hover:brightness-100 max-w-32 sm:max-w-42 md:max-w-48 md:p-2"
              style={{ transition: "0.2s filter linear" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default LogoSection
