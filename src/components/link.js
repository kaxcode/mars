import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <Link
      cover
      bg="#FF8A00"
      className="nav-link"
      to={to}
      activeStyle={{
        color: "#FC8AB8",
      }}
      style={{
        color: "#C7C6CC",
      }}
    >
      {children}
    </Link>
  )
}
