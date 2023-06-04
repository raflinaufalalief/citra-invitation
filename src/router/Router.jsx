import { Route, Routes } from "react-router-dom"
import Orders from "../pages/Orders"
import Home from "../pages/Home"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Orders />} />
    </Routes>
  )
}

export default Router
