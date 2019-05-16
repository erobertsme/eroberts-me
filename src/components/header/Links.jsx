import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa'

export default function Links() {
  
  return (
    <div className="links">
      <a href="https://github.com/omfgtora/"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/eroberts-me/"><FaLinkedin /></a>
      <a href="https://dev.to/eroberts"><FaDev /></a>
      <a href="https://twitter.com/eroberts_me"><FaTwitter /></a>
    </div>
  )
}
