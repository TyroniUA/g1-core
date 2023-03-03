import React from 'react'

export default function LinksWithTitle({title, links=[]}) {
  console.log(links.length)
  return (
    <section
    className='titleList'
    >
      <h6>{title}</h6>
      <ul>
        {links?.map(link => 
          <li
          key={link.name}
          >
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </li>
          )}
      </ul>
      </section>
  )
}
