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
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Kenia.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        UI Engineer
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
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
