import React from "react"
// import data
import { features } from "../data/data"

const Invitation = () => {
  // destructure features
  const { feature1 } = features
  // destructure feature1
  const { title, subtitle, image, desc } = feature1
  return (
    <section className="section">
      <div className="containers">
        <div className="flex items-center text-center gap-x-3 Sdesktop:justify-between mobile:flex-col gap-y-8 Sdesktop:gap-y-0 mobile:justify-center Sdesktop:text-left tablet:px-6 Sdesktop:px-6 tablet:text-left">
          {/* image */}
          <div>
            <img
              src={image}
              alt=""
              className="Sdesktop:w-[450px] mobile:w-[350px] tablet:w-[400px] "
            />
          </div>
          {/* text */}
          <div className="Sdesktop:w-[550px] mobile:w-[350px] tablet:w-[300px] ">
            <h2 className="title">
              {title}
              <span className="text-accent title">Undangan Digital?</span>
            </h2>
            <p className="lead">{subtitle}</p>
            <p className="text-lg ">
              {desc} <span className="font-semibold">Undangan Digital.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Invitation
