import React from "react"
import CardKatalog from "./CardKatalog"
import { HiOutlineChevronDown } from "react-icons/hi"
import { Link } from "react-router-dom"

const KatalogDetail = () => {
  return (
    <section id="katalog" className="section bg-bg">
      <div className="mx-auto containers Sdesktop:px-6 mobile:px-6 tablet:px-6">
        <p className="text-center title">
          Design Interaktive&nbsp;<span className="text-accent ">Mobile</span>
        </p>
        <p className="mb-10 text-center lead">
          Desain Elegan untuk Acara Anda. Pilih dari berbagai pilihan desain
          kami yang indah dan kustomisasi sesuai preferensi Anda.
        </p>
        <CardKatalog />
        <div className="flex items-center justify-center mx-auto Sdesktop:pt-16 mobile:pt-10 tablet:pt-8 Sdesktop:gap-x-6">
          <Link to="/katalog">
            <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn2 btn-sm Sdesktop:btn-md Sdesktop:btn-lg2 btn-line Sdesktop:gap-x-4 tablet:gap-x-2 mobile:gap-x-1">
              Lihat Selengkapnya
              <HiOutlineChevronDown />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default KatalogDetail
