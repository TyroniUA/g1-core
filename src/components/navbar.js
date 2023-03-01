import React from 'react'
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";
import mainLogo from "../assets/images/mainLogo.png"

export default function Navbar() {
  return (
    <div className="navbar w-100">
      <div
        className='w-40vw  flex flex-between flex-align'
      >
        <img
          src={mainLogo}
          width="40"
          height="40"
          alt="Click to go to the top of the website"
        />
        {navLinks.map((link, index) => {
          return (
            <a
              key={`${link.name}-${index}`}
              className={"regular color-white no-dec"}
              href={link.link}
            >
              {link.title}
            </a>
          )
        })}
      </div>

    </div>
  )
}
