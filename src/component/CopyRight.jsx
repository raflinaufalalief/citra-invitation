import React from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import IconFooter1 from "../assets/icons/instagram.png"
import IconFooter2 from "../assets/icons/whatsapp.png"
import IconFooter3 from "../assets/icons/gmail.png"
import IconFooter4 from "../assets/icons/tik-tok.png"

const CopyRight = () => {
  return (
    <div className="py-5 bg-bg">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div>
            <a href to="/#">
              <img src={logo} alt="" width={200} />
            </a>
          </div>
          <div className="flex gap-x-2">
            <img src={IconFooter1} alt="" width={20} />
            <img src={IconFooter2} alt="" width={20} />
            <img src={IconFooter3} alt="" width={20} />
            <img src={IconFooter4} alt="" width={20} />
          </div>
          <div className="mobile:text-sm">
            <h1>CitraInvitation © 2023 All Right Reserved</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRight
