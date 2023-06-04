import React from "react"
import Router from "./router/Router"
import { ChakraProvider } from "@chakra-ui/react"
import Header from "./component/Header"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <Header />
      <ChakraProvider>
        <Router />
      </ChakraProvider>
      <Footer />
    </>
  )
}

export default App
