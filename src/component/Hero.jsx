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
  const { title, pretitle, subtitle, btnText, image } = hero
  return (
    <section
      className="section w-full bg-[#E9DED8] overflow-x-hidden relative overflow-y-hidden"
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
      <div className="pt-20 containers ">
        <div className="flex items-center text-center Sdesktop:justify-between mobile:flex-col gap-y-8 Sdesktop:gap-y-0 mobile:justify-center Sdesktop:text-left tablet:px-6 Sdesktop:px-6 mobile:px-6 ">
          {/* text */}
          <div className="Sdesktop:w-[500px] mobile:z-10 tablet:z-10">
            <h1 className="mb-2 title Sdesktop:mb-5 ">
              {title}
              <br /> <span className="uppercase text-accent" ref={el} />
            </h1>
            <p className="mb-5 lead Sdesktop:mb-10">{subtitle}</p>
            {/* btn & comp text */}
            <div className="flex items-center max-w-sm mx-auto Sdesktop:max-w-full Sdesktop:mx-0 gap-x-2 Sdesktop:gap-x-6">
              <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn btn-sm Sdesktop:btn-md Sdesktop:btn-lg2 btn-outline Sdesktop:gap-x-4">
                {btnText}
                <HiOutlineChevronDown />
              </button>
            </div>
          </div>
          {/* image */}
          <div className="">
            <img
              src={image}
              alt="hero"
              className="Sdesktop:w-[400px] mobile:w-[350px] mobile:z-10 tablet:z-10"
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
