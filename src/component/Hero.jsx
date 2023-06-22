import React, { useEffect, useRef } from "react"
import Typed from "typed.js"
import patternKiri from "../assets/patte.png"
import patternKanan from "../assets/pattern_kiri.png"

// import data
import { hero } from "../data/data"
// import icons
import { HiOutlineChevronDown } from "react-icons/hi"

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Pernikahan", "Ulang Tahun", "Tunangan"],
      typeSpeed: 120,
      backSpeed: 40,
      loop: true,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])
  // destructure hero data
  const { title, subtitle, btnText, image } = hero
  return (
    <section
      className="relative w-full overflow-x-hidden overflow-y-hidden bg-bg section"
      id="home"
    >
      <img
        src={patternKiri}
        alt=""
        className="absolute w-[300px] left-[-150px] top-[-5px] opacity-70"
      />
      <img
        src={patternKanan}
        alt=""
        className="absolute w-[300px] right-0  bottom-0 opacity-70 mobile:w-[250px] tablet:top-[200px] "
      />
      <div className="mx-auto containers mobile:pt-24 tablet:pt-28">
        <div className="flex items-center text-center Sdesktop:justify-between mobile:flex-col gap-y-8 Sdesktop:gap-y-0 mobile:justify-center Sdesktop:text-left tablet:px-6 tablet:text-left Sdesktop:px-6">
          {/* text */}
          <div className="Sdesktop:w-[500px] tablet:w-[350px] mobile:w-[350px] mobile:z-10 tablet:z-10 ">
            <h1 className="mb-5 text-desc title ">
              {title}
              <br /> <span className="uppercase text-accent" ref={el} />
            </h1>
            <p className="lead">{subtitle}</p>
            {/* btn & comp text */}
            <div>
              <a href="/#harga">
                <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 tablet:mx-0 btn2 mobile:btn-sm Sdesktop:btn-md tablet:btn-sm Sdesktop:btn-lg2 btn-line Sdesktop:gap-x-4 tablet:gap-x-2 mobile:gap-x-1">
                  {btnText}
                  <HiOutlineChevronDown />
                </button>
              </a>
            </div>
          </div>
          {/* image */}
          <div className="Sdesktop:pt-20 mobile:pt-10">
            <img
              src={image}
              alt="hero"
              className="Sdesktop:w-[400px] mobile:w-[300px] tablet:w-[350px] "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

//
// bg-gradient-to-br from-[#EEE5f6] via-[#ffffff] to-[#f0e9f8]
