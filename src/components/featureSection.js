import React from 'react'

export default function FeatureSection({ title, classes, children }) {
  return (
    <section
      className={classes || ""}
    >
      <h2>
        {title}
      </h2>
      <div>
        {children}
      </div>
    </section>)
}
