import { Link } from "react-router-dom"
import { dataNavLink } from "../data/data"
import { HiMenu } from "react-icons/hi"
import { useState } from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className="fixed top-0 z-20 w-full shadow-md bg-bg">
      <div className="containers py-7 mobile:mx-4 tablet:mx-6">
        <div className="flex justify-between Sdesktop:items-center">
          <img src={logo} alt="logo" className="w-[250px] mobile:w-[200px]" />
          <nav className="flex items-center">
            <div
              className="text-2xl font-extrabold icon_humberger Sdesktop:hidden"
              onClick={() => setMenu((prev) => !prev)}
            >
              <HiMenu />
            </div>
            <ul className="">
              <div
                className={`transition-all ease-in-out duration-200 mobile:absolute mobile:mt-10 mobile:bg-bg mobile:w-full mobile:p-4 tablet:absolute Sdesktop:flex Sdesktop:gap-x-9 Sdesktop:items-center tablet:mt-10 tablet:bg-bg tablet:w-full tablet:p-5 z-20 ${
                  menu ? "right-0" : "right-[-1500px]" /*  && 'hidden' */
                }`}
              >
                {dataNavLink.map((result, index) => (
                  <li
                    onClick={() => setMenu((prev) => !prev)}
                    key={index}
                    className="text-lg font-normal list hover:text-accent text-black/75 mobile:space-y-3 mobile:my-3 tablet:my-4"
                  >
                    <a href={result.path}>{result.name}</a>
                  </li>
                ))}
                <button
                  onClick={() => setMenu((prev) => !prev)}
                  className="px-5 py-3 rounded-md hover:bg-text Sdesktop:font-medium mobile:mt-4 tablet:mt-4 text-bg bg-accent"
                >
                  <Link to={"/order"}>Order Sekarang</Link>
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
