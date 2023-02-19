import React from 'react'
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar w-100">
      <div
        className='w-40vw  flex flex-between'
      >
        {navLinks.map((link, index) => {
          return (
            <Link
              key={`${link.name}-${index}`}
              className={"regular color-white no-dec"}
              to={link.link}
            >
              {link.title}
            </Link>
          )
        })}
      </div>

    </div>
  )
}
