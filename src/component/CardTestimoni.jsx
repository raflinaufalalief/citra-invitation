import { AiFillStar } from "react-icons/ai"
import React from "react"
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

// import swiper styles
import "swiper/css"
import "swiper/css/autoplay"

const CardTestimoni = ({ clients }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={true}
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {clients.map((client, index) => {
        // destructure client
        const { imageUrl, imageAlt, from, title, desc, rating, reviewCount } =
          client
        return (
          // slide
          <SwiperSlide key={index}>
            <div className="overflow-hidden text-center border shadow-xl rounded-xl ">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="object-cover mt-5 bg-center bg-no-repeat rounded-full  w-[100px] h-[100px] mx-auto"
              />
              <div className="p-4">
                <div className="flex align-baseline">
                  <div className="mx-auto text-xs font-semibold tracking-wide uppercase text-accent">
                    {from}
                  </div>
                </div>
                <div className="mt-1 font-medium">{title}</div>
                <div className="font-light text-center ">{desc}</div>
              </div>
              <div className="flex items-center justify-center pb-3">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={` ${
                        i < rating ? "text-yellow-500" : "text-gray-500"
                      }`}
                    />
                  ))}
                <div className="ml-2 text-sm text-gray-600 mobile:flex">
                  {reviewCount} <span>reviews</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default CardTestimoni
