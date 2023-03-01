import React from 'react'

export default function FeatureSection({ title, id, classes, main = false, children }) {
  return (
    <section
      id={id}
      className={`padding-5vw ${classes}` || "padding-5vw"}
    >
      {main
        ?

        <h1>
          {title}
        </h1>
        : <h2>
          {title}
        </h2>
      }

      <>
        {children}
      </>

    </section>)
}
