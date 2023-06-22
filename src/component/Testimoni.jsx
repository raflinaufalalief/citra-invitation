import React from "react"
// import data
import { testimonials } from "../data/data"
// import components

import CardTestimoni from "./CardTestimoni"

const Testimonials = () => {
  // destructure testimonials
  const { title, subtitle, clients } = testimonials
  return (
    <section className="section" id="testimoni">
      <div className="container mx-auto text-center Sdesktop:px-6 tablet:px-6 mobile:px-6 ">
        {/* title */}
        <h1
          className="flex items-center justify-center mb-2 title "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}&nbsp;<span className=" text-accent">Pelanggan</span>
        </h1>
        <p className=" lead">{subtitle}</p>

        {/* slider */}
        <div data-aos="fade-up" data-aos-delay="400">
          <CardTestimoni clients={clients} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
