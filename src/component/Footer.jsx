import React from "react"
import { footer } from "../data/data"
import IconFooter1 from "../assets/icons/instagram.png"
import IconFooter2 from "../assets/icons/whatsapp.png"
import IconFooter3 from "../assets/icons/gmail.png"
import IconFooter4 from "../assets/icons/tik-tok.png"

const Footer = () => {
  // data
  const { logo, links, description, subdecsripton } = footer
  return (
    <section className="section">
      <div className="mx-auto containers Sdesktop:px-6 mobile:px-6 tablet:px-6">
        <div className="flex flex-col items-center text-center Sdesktop:flex-row Sdesktop:items-start Sdesktop:text-left Sdesktop:justify-between gap-y-8">
          {/* list 1 */}
          <div className="Sdesktop:w-[300px] tablet:w-[280px]">
            <h1 className="mb-6 text-2xl font-medium ">Tentang Kami</h1>
            {/* <ul className="flex flex-col gap-y-2">
              {links.map((item, index) => {
                // data
                const { href, name } = item
                return (
                  <li key={index}>
                    <a className="transition hover:text-accent" href={href}>
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul> */}
            <p className="mobile:text-center tablet:text-center Sdesktop:text-left lead">
              Citra Invitation adalah sebuah platform undangan online yang
              didedikasikan untuk membantu Anda menciptakan undangan yang indah,
              kreatif, dan mudah dibagikan. Dengan fokus pada kualitas dan
              kemudahan penggunaan, kami memahami pentingnya momen khusus dalam
              hidup Anda.
            </p>
          </div>
          {/* list 2 */}
          <div>
            <h1 className="mb-6 text-2xl font-medium text-center ">
              Metode Pembayaran
            </h1>
            <ul className="flex items-center justify-center mt-8 gap-y-3">
              {description.map((description, index) => {
                // data
                const { icon1 } = description
                return (
                  <li key={index} className="w-[90px] p-4">
                    <img src={icon1} alt="" className="" />
                  </li>
                )
              })}
            </ul>
            <div>
              <ul className="flex items-center justify-center mt-8 gap-y-3">
                {subdecsripton.map((description, index) => {
                  // data
                  const { icon2 } = description
                  return (
                    <li className="w-[90px] p-4" key={index}>
                      <img src={icon2} alt="" className="" />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* nlist 3 */}
          <div>
            <h1 className="justify-center mb-6 text-2xl font-medium ">
              Kontak Kami
            </h1>
            <div className="flex items-center mb-4 mobile:justify-center tablet:justify-center gap-x-2">
              <div>
                <img src={IconFooter4} alt="" />
              </div>
              <p>CitraInvitation</p>
            </div>
            <div className="flex items-center mb-4 mobile:justify-center tablet:justify-center gap-x-2 ">
              <div>
                <img src={IconFooter1} alt="" />
              </div>
              <p>CitraInvitation</p>
            </div>
            <div className="flex items-center mb-4 mobile:justify-center tablet:justify-center gap-x-2">
              <div>
                <img src={IconFooter2} alt="" />
              </div>
              <p>0856-4835-5728</p>
            </div>

            <div className="flex items-center mb-4 mobile:justify-center tablet:justify-center gap-x-2">
              <div>
                <img src={IconFooter3} alt="" />
              </div>
              <p>citrainvitation@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
