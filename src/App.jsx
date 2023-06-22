import React from "react"
import Router from "./router/Router"
import Header from "./component/Header"
import Floating from "./component/Floating"

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Floating />
    </div>
  )
}

export default App
