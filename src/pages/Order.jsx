import { dataPaket } from "../data/data"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavbarOrder from "../component/NavbarOrder"

const Order = () => {
  const { id } = useParams()
  const [data1, setData1] = useState([])
  // Get api demo

  useEffect(() => {
    const paket = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/paket/dataPaket/${id}`
      )
      const data = response.data
      console.log(data)
    }
    paket()
  }, [])
  console.log(data1)
  return (
    <div className=" w-full py-[200px] h-screen ">
      <NavbarOrder />
      <div className="">
        <h1 className="text-3xl font-bold text-center">Order Sekarang</h1>
        <div className="flex justify-center">
          <div className=" mt-[50px] w-[350px] space-y-8">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {data1.map((result, index) => (
                <option key={index}>{result.title}</option>
              ))}
            </select>

            <button className="w-full py-2 rounded-lg bg-accent">
              <a
                href="https://wa.me/6285648355728?text=Bang%20Order"
                className="text-white"
              >
                Order Sekarang
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
