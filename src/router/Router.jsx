import { Route, Routes } from "react-router-dom"
import Order from "../pages/Order"
import Home from "../pages/Home"
import Katalog from "../pages/Katalog"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="order/:id" element={<Order />} />
      <Route path="/katalog" element={<Katalog />} />
    </Routes>
  )
}

export default Router
