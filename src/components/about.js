import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa"

import "./about.css"

import kenia from "./../images/kenia.png"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FC8AB8" }}>
        <span style={{ color: "#7B65A5" }}>Hello, I'm </span>
        Kenia.
      </div>

      <div className="mt-3 container">
        <div className="row">
          <img className="col-md-auto bioImage" src={kenia} alt="" />
          <p className="col">UI Engineer with a love for JS and Design.</p>
        </div>
      </div>

      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/kaxcode">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/kaxcode">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto:keniavalladarez@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
