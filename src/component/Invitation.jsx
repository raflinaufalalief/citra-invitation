import React from "react"
// import data
import { features } from "../data/data"
import img from "../assets/wedding.png"

const Invitation = () => {
  // destructure features
  const { feature1 } = features
  // destructure feature1
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col Sdesktop:flex-row Sdesktop:items-center Sdesktop:gap-x-[30px] w-full">
          {/* text */}
          <div className="">
            <img src={img} alt="" className="Sdesktop:w-[400px]" />
          </div>
          {/* image */}
          <div className="flex-1">
            <h2 className="mb-2 title Sdesktop:mb-5 Sdesktop:leading-[42px] Sdesktop:text-[35px]">
              {title}
              <span className="text-accent Sdesktop:leading-[42px] Sdesktop:text-[35px]">
                Undangan Digital?
              </span>
            </h2>
            <p className="mb-5 text-left lead Sdesktop:mb-10">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Invitation
