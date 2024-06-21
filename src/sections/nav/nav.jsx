import "./nav.css";
import React, { useState, useEffect, useRef } from "react";
import { RiHome5Line } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TbLayoutListFilled } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { BsPhoneVibrateFill } from "react-icons/bs";

function Nav() {
  const [activeClass, setActiveClass] = useState("#home");
  const markerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const list = navRef.current.querySelectorAll("a");

    const moveIndicator = (target) => {
      const marker = markerRef.current;
      marker.style.left = `${target.offsetLeft}px`;
      marker.style.width = `${target.offsetWidth}px`;
    };

    list.forEach((link) => {
      link.addEventListener("click", (e) => {
        setActiveClass(e.currentTarget.getAttribute("href"));
        moveIndicator(e.currentTarget);
      });
    });

    // Move indicator to the active item on initial load
    const activeLink = navRef.current.querySelector(`a[href="${activeClass}"]`);
    if (activeLink) {
      moveIndicator(activeLink);
    }

    return () => {
      list.forEach((link) => {
        link.removeEventListener("click", (e) => {
          moveIndicator(e.currentTarget);
        });
      });
    };
  }, [activeClass]);

  return (
    <nav ref={navRef}>
      <a href="#home" className={activeClass === "#home" ? "active" : ""}>
        <RiHome5Line />
        <text>Home</text>
      </a>
      <a href="#about" className={activeClass === "#about" ? "active" : ""}>
        <BsFillPersonLinesFill />
        <text>About</text>
      </a>
      <a
        href="#experience"
        className={activeClass === "#experience" ? "active" : ""}
      >
        <TbLayoutListFilled />
        <text>Works</text>
      </a>
      <a href="#service" className={activeClass === "#service" ? "active" : ""}>
        <MdDesignServices />
        <text>Service</text>
      </a>
      <a href="#contact" className={activeClass === "#contact" ? "active" : ""}>
        <BsPhoneVibrateFill />
        <text>Contact</text>
      </a>
      <div id="marker" ref={markerRef}>
        <span></span>
      </div>
    </nav>
  );
}

export default Nav;
