import React from "react"
import CardFitur from "./CardFitur"

const Fitur = () => {
  return (
    <section id="fitur" className="section bg-bg ">
      <div className="container mx-auto ">
        <h1 className="flex items-center justify-center mb-2 text-xl font-bold uppercase text-accent t9xt-white/70">
          Fitur Unggulan
        </h1>
        <p className="mb-2 text-center text-black/80 title lg:mb-7 ">
          Fitur Undangan Online
        </p>
        <p className="mb-10 text-center text-black/80 lead">
          We hope this DigiMedia template is useful for your work. You can use
          this template for any purpose.
        </p>
        <CardFitur />
      </div>
    </section>
  )
}

export default Fitur

//
