import React from "react"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Appbar />
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kenia</title>
      </Helmet>
    </div>
  )
}

export default index
