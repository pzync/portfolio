// For the section on homepage containing links to written articles

import React from "react"
import "./writing.css"

const Writing = props => (
  <div className="Writing">
    <a href={props.link} target="_blank">
      <h3 className="ArticleTitle"> {props.title}</h3>
      <p className="ArticleDesc">{props.desc}</p>
    </a>
  </div>
)

export default Writing
