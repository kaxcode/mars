import React from "react"
import Appbar from "../components/appbar"
import About from "../components/about"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Appbar />
      <About />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kenia</title>
      </Helmet>
    </div>
  )
}

export default index
