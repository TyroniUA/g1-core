import React from 'react'

export default function TeamCard({
  name, img, text,
  alt
}) {
  return (
    <div
      className=''
    >
      <img
        src={img}
        alt={alt}
        width="200"
        height="auto"
      />
      <h4>
        {name}
      </h4>
      <p>
        {text}
      </p>
    </div>
  )
}
