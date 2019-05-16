import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa'
import '../../styles/links.scss'

export default function Links() {
  
  return (
    <div className="links">
      <FaGithub />
      <FaLinkedin />
      <FaDev />
      <FaTwitter />
    </div>
  )
}
