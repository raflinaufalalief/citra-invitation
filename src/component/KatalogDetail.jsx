import React from "react"
import CardKatalog from "./CardKatalog"
import { HiOutlineChevronDown } from "react-icons/hi"

const KatalogDetail = () => {
  return (
    <section id="katalog" className="w-full section bg-bg ">
      <div className="containers">
        <h1 className="flex items-center justify-center mb-2 text-xl font-bold uppercase text-accent">
          katalog kami
        </h1>
        <p className="mb-2 text-center title Sdesktop:mb-7 ">
          Design Interaktive <span className="text-accent">Mobile</span>
        </p>
        <p className="mb-10 text-center lead">
          We hope this DigiMedia template is useful for your work. You can use
          this template for any purpose. You may contribute a little amount via
          PayPal to support TemplateMo in creating new templates regularly.
        </p>
        <CardKatalog />
        <div className="flex items-center justify-center max-w-sm pt-5 mx-auto Sdesktop:max-w-full Sdesktop:mx-0 gap-x-2 Sdesktop:gap-x-6">
          <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn btn-sm Sdesktop:btn-md Sdesktop:btn-lg2 btn-outline Sdesktop:gap-x-4">
            Lihat Selengkapnya
            <HiOutlineChevronDown />
          </button>
        </div>
      </div>
    </section>
  )
}

export default KatalogDetail
