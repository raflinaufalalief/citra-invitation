import { useState } from "react"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import { IoCaretDown, IoCloseCircle, IoLogoWhatsapp } from "react-icons/io5"
const Footer = () => {
  const [closeFloting, setCloseFloting] = useState(false)

  const close = () => setCloseFloting((prev) => !prev)
  return (
    <div>
      <div className="fixed right-[100px] bottom-[90px] z-10 ">
        <IoCloseCircle
          onClick={close}
          className={`absolute top-[-80px] right-[20px] text-3xl z-10 text-accent cursor-pointer shadow-lg rounded-full ${
            closeFloting ? "hidden" : ""
          }`}
        />
        <div
          className={`absolute bg-white w-fit  top-[-63px] left-[-150px] px-2 py-2 rounded-lg flex shadow-md ${
            closeFloting ? "hidden" : ""
          }`}
        >
          <h1>Mau tanya-tanya dulu? Char aja ngab</h1>
        </div>

        <IoCaretDown
          className={`absolute top-[-30px] right-[70px] text-2xl text-white shadow-full ${
            closeFloting ? "hidden" : ""
          }`}
        />
        <a
          href="https://wa.me/6285648355728?text=Bang%20Order"
          className="flex items-center px-8 py-4 text-white rounded-full gap-x-2 bg-accent"
        >
          <IoLogoWhatsapp />
          What'sApp
        </a>
      </div>
    </div>
  )
}

export default Footer
