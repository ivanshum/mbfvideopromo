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
      <div className="grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 container mx-auto p-4">
        {AllImages.map(image => (
          <div className="aspect-video flex justify-center items-center">
            <img
              src={image}
              alt="Логотип партнера"
              className="w-full object-fill lg:brightness-0 lg:invert-[1] lg:hover:invert-0 lg:hover:brightness-100"
              style={{ transition: "0.2s filter linear" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default LogoSection
