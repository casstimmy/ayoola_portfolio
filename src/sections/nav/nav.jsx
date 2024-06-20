import './nav.css'
import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TbLayoutListFilled } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { BsPhoneVibrateFill } from "react-icons/bs";
import {useState} from 'react'

function Nav() {
  const [activeClass, setActiveClass] = useState('#')
  return (
    <nav>
        <a href='#' onClick={() => setActiveClass('#')} className={activeClass === '#' ? 'active' : ''}><RiHome5Line/></a>
        <a href='#about' onClick={() => setActiveClass('#about')} className={activeClass === '#about' ? 'active' : ''} ><BsFillPersonLinesFill /></a>
        <a href='#experience' onClick={() => setActiveClass('#experience')} className={activeClass === '#experience' ? 'active' : ''}><TbLayoutListFilled /></a>
        <a href='#service' onClick={() => setActiveClass('#service')} className={activeClass === '#service' ? 'active' : ''}><MdDesignServices /></a>
        <a href='#contact' onClick={() => setActiveClass('#contact')} className={activeClass === '#contact' ? 'active' : ''}><BsPhoneVibrateFill /></a>
    </nav>
  )
}

export default Nav
