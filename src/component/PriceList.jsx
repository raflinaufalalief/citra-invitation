import React, { useState } from "react"
import { Link } from "react-router-dom"
// import data
import { dataPaket } from "../data/data"
// import icons
import { HiCheck, HiShoppingCart } from "react-icons/hi"

const PriceList = () => {
  // index state
  // destructure pricing
  const { title, subtitle, cards } = dataPaket
  return (
    <section id="harga" className="section">
      <div className="mx-auto containers Sdesktop:px-6 mobile:px-6 tablet:px-6 ">
        <h2
          className="text-center title"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}&nbsp;
          <span className=" text-accent">Paket</span>
        </h2>
        <p className="mb-10 text-center lead">{subtitle}</p>
        {/* cards */}
        <div className="gap-x-4 flex flex-col Sdesktop:flex-row Sdesktop:gap-x-5 gap-y-[30px] lg:gap-y-0 justify-center items-center">
          {cards.map((card, cardIndex) => {
            // data card
            const { title, price, borderColor, description } = card
            // card
            return (
              <div
                data-aos="fade-up"
                data-aos-delay=""
                data-aos-offset="300"
                key={cardIndex}
              >
                <div
                  className="mx-auto rounded-xl cursor-pointer max-w-[350px] pricing-table "
                  style={{ backgroundColor: borderColor }}
                >
                  {/* card title */}
                  <div className="text-lg font-semibold text-center text-white">
                    {title}
                  </div>
                  {/* card price */}
                  <div className="mb-5 text-5xl font-semibold text-center text-white ">
                    {price}
                  </div>
                  {/* card services */}
                  <div className="flex flex-col mb-6 gap-y-2">
                    {description.map((desc, index) => {
                      // data desc
                      const { titleDesc, titleDesc2 } = desc
                      return (
                        <div
                          className="flex items-center space-x-2 "
                          key={index}
                        >
                          <div className="mr-2">
                            <HiCheck className="text-2xl text-green-600 " />
                          </div>
                          <div>
                            <h1 className="font-bold text-white">
                              {titleDesc}
                            </h1>
                            <h1 className="text-white/70">{titleDesc2}</h1>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div>
                    <button className=" text-white btn2 btn-lg space-x-[14px] bg-accent hover:bg-accent/70 transition-all">
                      <Link to={`/order/${card.id}`}>Pesan Sekarang</Link>
                      <HiShoppingCart />
                    </button>
                  </div>
                  {/* btn */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PriceList
