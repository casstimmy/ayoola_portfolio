import styles from './Header.css'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaDribbbleSquare } from "react-icons/fa";

function Socials() {
  return (
    <div className='socials-icons'>
      <a href="http://linkedin.com" target='blank'> <FaLinkedin /> </a>
      <a href="http://github.com" target='blank'> <BsGithub /> </a>
      <a href="http://dribbble.com" target='blank'> <FaDribbbleSquare /> </a>
    </div>
  )
}

export default Socials
