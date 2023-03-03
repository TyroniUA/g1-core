import React from 'react'
import LinksWithTitle from "./linksWithTitle";
import mainLogoGreen from "../assets/images/mainLogoGreen.png";
import { navLinks } from "../utils/constants"

export default function Footer() {
  return (
    <section className="flex flex-between padding-5vw">
      <div>
        <img src={mainLogoGreen}
          alt="G1Core all rights reserver"
          width='30'
          height='30'
        />
        <p>
          © 2021 G1Core. All rights reserved.
        </p>
      </div>
      <div className="flex w-30vw flex-evenly">
        <LinksWithTitle
          title="Navigation"
          links={navLinks.map(link => {
            return {
              title: link.title,
              url: link.link,
              name: link.title
            }
          })}
        />
        <LinksWithTitle
          title="Contact Us"
          links={navLinks.map(link => {
            return {
              title: link.title,
              url: link.link,
              name: link.title
            }
          })}
        />

      </div>
    </section>
  )
}
