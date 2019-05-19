import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa'

export default function Links() {
  
  return (
    <div className="links">
      <a href="https://github.com/omfgtora/" target="_blank"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/eroberts-me/" target="_blank"><FaLinkedin /></a>
      <a href="https://dev.to/eroberts" target="_blank"><FaDev /></a>
      <a href="https://twitter.com/eroberts_me" target="_blank"><FaTwitter /></a>
    </div>
  )
}
