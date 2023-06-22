import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CardKatalog = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get("https://webadmin.citrainvitation.com/api/desain")
      .then((result) => {
        setData(result.data.products)
      })
  }, [])
  return (
    <>
      <div className="container grid gap-5 py-4 mx-auto Sdesktop:gap-8 Sdesktop:grid-cols-3 tablet:grid-cols-2 ">
        {data.map((index, i) => {
          return (
            <div
              className="text-center transition-all hover:scale-105 hover:shadow-2xl"
              key={i}
            >
              <p className="absolute px-1 py-1 text-sm text-white border rounded-md bg-accent">
                Premium
              </p>
              <Link to={index.link}>
                <img
                  src={index.image}
                  alt=""
                  className="rounded-md gambar-katalog"
                />
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CardKatalog
