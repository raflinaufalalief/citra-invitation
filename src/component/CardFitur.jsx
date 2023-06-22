import React from "react"
import { product } from "../data/data"

const CardFitur = () => {
  // destructure product data
  const { cards } = product
  return (
    <>
      <div className="grid grid-rows-2 gap-5 Sdesktop:gap-8 Sdesktop:grid-cols-4 tablet:grid-cols-2">
        {cards.map((card, i) => {
          // destructure card
          const { icon, title, subtitle, delay } = card
          return (
            <div
              key={i}
              className="pt-5 transition-all bg-white rounded-xl hover:scale-105 hover:shadow-xl"
            >
              {/* icons */}
              <img src={icon} alt="" className="mx-auto" />
              <div className="p-4 text-center">
                {/* title */}
                <h1 className="text-lg font-semibold">{title}</h1>
                {/* subtitle */}
                <p className="pt-2 text-sm leading-tight">{subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CardFitur
