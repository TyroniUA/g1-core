import React from 'react'
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      {navLinks.map((link, index) => {
        return (
          <Link
          key={`${link.name}-${index}`}
          to={link.link}
        >
          {link.title}
        </Link>
        )
      })}
    </div>
  )
}
