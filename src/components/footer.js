import * as React from "react"
import {
  FaTelegram,
  FaPhone,
  /* FaWhatsapp, */ FaInstagram,
} from "react-icons/fa6"
import { IconContext } from "react-icons"
const Footer = () => (
  <div className="p-3 w-full flex items-center justify-center gap-4">
    <IconContext.Provider value={{ size: "3em" }}>
      {/* <a href="tel:+79957737455">
        <FaPhone />
      </a> */}
      <a rel="noreferrer" target="_blank" href="https://t.me/zemliaky">
        <FaTelegram />
      </a>
      {/* <a target="_blank" href="">
        <FaWhatsapp />
      </a> */}
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/zemliaky.ru/"
      >
        <FaInstagram />
      </a>
      <a href="tel:+79959108588">
        <FaPhone />
      </a>
    </IconContext.Provider>
  </div>
)

export default Footer
