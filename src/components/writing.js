// For the section on homepage containing links to written articles

import React from "react"
import "./writing.css"

const Writing = props => (
  <article className="Writing">
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <h6 className="ArticleTitle"> {props.title}</h6>
      <p className="ArticleDesc">{props.desc}</p>
    </a>
  </article>
)

export default Writing
