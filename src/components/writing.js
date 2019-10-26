// For the section on homepage containing links to written articles

import React from "react"
import "./writing.css"

const Writing = props => (
  <div className="Writing">
    <h3 className="ArticleTitle">
      <a href={props.link} target="_blank">
        {props.title}
      </a>
    </h3>
    <p className="ArticleDesc">{props.desc}</p>
  </div>
)

export default Writing
