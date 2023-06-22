import { useState } from "react"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import { IoCaretDown, IoCloseCircle, IoLogoWhatsapp } from "react-icons/io5"
const Floating = () => {
  const [closeFloting, setCloseFloting] = useState(false)

  const close = () => setCloseFloting((prev) => !prev)
  return (
    <div>
      <div className="fixed Sdesktop:right-[50px] tablet:right-[30px] mobile:right-[20px] bottom-[90px] z-10 ">
        <IoCloseCircle
          onClick={close}
          className={`absolute top-[-100px] right-[-20px] text-3xl z-10 text-accent cursor-pointer shadow-lg rounded-full ${
            closeFloting ? "hidden" : ""
          }`}
        />
        <div
          className={`absolute bg-white w-fit  top-[-80px] left-[-130px] px-2 py-2 rounded-lg flex shadow-md ${
            closeFloting ? "hidden" : ""
          }`}
        >
          <h1>Mau tanya-tanya dulu? Chat aja ngab</h1>
        </div>

        <IoCaretDown
          className={`absolute top-[-25px] right-[70px] text-2xl text-white shadow-full ${
            closeFloting ? "hidden" : ""
          }`}
        />
        <a
          href="https://wa.me/6285648355728?text=Bang%20Order"
          className="flex items-center px-8 py-4 text-white rounded-full gap-x-2 bg-accent hover:bg-accent/80"
        >
          <IoLogoWhatsapp />
          What'sApp
        </a>
      </div>
    </div>
  )
}

export default Floating
