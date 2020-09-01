import React from 'react'

export default function Project(props) {

  return (
    <a className="project" href={props.data.url} target={ props.data.url ===  "/crypto" ? 'window' : '_blank' }>
      {props.data.title}
    </a>
  )
}
