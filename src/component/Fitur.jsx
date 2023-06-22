import React from "react"
import CardFitur from "./CardFitur"

const Fitur = () => {
  return (
    <section id="fitur" className="section bg-bg ">
      <div className="mx-auto containers mobile:px-6 tablet:px-6 Sdesktop:px-6">
        <p className="text-center title">
          Fitur Undangan<span className="text-accent"> Online</span>
        </p>
        <p className="mb-10 text-center lead">
          Dengan fitur-fitur yang telah disediakan, Anda dapat langsung
          memanfaatkannya tanpa perlu menghabiskan waktu untuk pengaturan atau
          konfigurasi.
        </p>
        <CardFitur />
      </div>
    </section>
  )
}

export default Fitur

//
