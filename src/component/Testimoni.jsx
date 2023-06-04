import React from "react"
// import data
import { testimonials } from "../data/data"
// import components

import CardTestimoni from "./CardTestimoni"

const Testimonials = () => {
  // destructure testimonials
  const { title, clients } = testimonials
  return (
    <section className="section" id="testimoni">
      <div className="container mx-auto">
        {/* title */}
        <h1
          className="flex items-center justify-center mb-2 text-xl font-bold uppercase text-accent"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h1>
        <p className="mb-2 text-center title lg:mb-7 ">Apa Kata Mereka?</p>
        <p className="mb-10 text-center lead">
          We hope this DigiMedia template is useful for your work. You can use
          this template for any purpose.
        </p>
        {/* slider */}
        <div data-aos="fade-up" data-aos-delay="400">
          <CardTestimoni clients={clients} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
