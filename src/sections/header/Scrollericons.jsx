import styles from './Header.css'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

function Scrollericons() {
  return (
    <div className='icons Scrollericons'>
      <a href="https://www.linkedin.com/in/ayoola-ayodeji-969252169/" target='blank'> <FaLinkedin /> </a>
      <a href="https://github.com/casstimmy" target='blank'><BsGithub /> </a>
      <a href="https://www.behance.net/ayoolaayodeji1" target='blank'><FaBehanceSquare /></a>
      <a href="https://www.codewars.com/users/Ayoola%20Ayodeji" target='blank'><SiCodewars /> </a>
    </div>
  )
}

export default Scrollericons
