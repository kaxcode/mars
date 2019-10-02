import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FC8AB8" }}>
        <span style={{ color: "#7B65A5" }}>Hello, I'm </span>
        Kenia.
      </div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/kaxcode">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/kaxcode">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://keniavalladarez@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
