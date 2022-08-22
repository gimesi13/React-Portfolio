import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrBluetooth, GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import hacker from "./Pictures/undraw_hacker_mind_-6-y85.svg";

function NavBar() {
  /* STATES */
  const [menuOpened, setMenuOpened] = useState(false);
  const grow = useAnimation();
  const shrink = useAnimation();
  const [navbar, setNavbar] = useState(false);

  /* FUNCTIONS */
  const HandleMenuClick = () => {
    setMenuOpened(!menuOpened);
  };

  // navbar on scroll behavior
  const handleNavBarScroll = () => {
    if (window.scrollY >= 128) {
      shrink.start({ height: 96, background: "transparent" });
      setNavbar(true);
    } else {
      grow.start({ height: 128, background: "lightblue" });
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", handleNavBarScroll);

  return (
    <motion.div className="navbar" animate={navbar ? grow : shrink}>
      <div className="navbar-left">
        <a href="#home">
          <div className="navbar-left-logo">
            <img className="hacker-svg" src={hacker} alt="hacker" />
          </div>
        </a>
      </div>
      <div className="navbar-right">
        <div className="routers">
          <a href="#home">
            <div>Home</div>
          </a>
          <a href="#skills">
            <div>Skills</div>
          </a>
          <a href="#projects">
            <div>Projects</div>
          </a>
        </div>
        <div className="soc-icons">
          <a
            href="https://www.linkedin.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <div>
              <BsLinkedin className="social-icons linkedin" />
            </div>
          </a>
          <a
            href="https://www.facebook.com/gergely.gimesi"
            target={"_blank"}
            rel="noreferrer"
          >
            <div>
              <BsFacebook className="social-icons facebook" />
            </div>
          </a>
          <a
            href="https://github.com/gimesi13/"
            target={"_blank"}
            rel="noreferrer"
          >
            <div>
              <BsGithub className="social-icons github" />
            </div>
          </a>
        </div>
        <div className="connect-button-box">
          <a href="#contact">
            <div className="connect-button">Let's Connect</div>
          </a>
        </div>
      </div>

      <div className="hamburger-box" onClick={HandleMenuClick}>
        {menuOpened ? (
          <GrClose className="hamburger-icon hamburger-icon-close" />
        ) : (
          <GrMenu className="hamburger-icon" />
        )}
      </div>
      {menuOpened ? (
        <div className="dropdown-menu">
          <a href="#home" onClick={HandleMenuClick}>
            <div>Home</div>
          </a>
          <a href="#skills" onClick={HandleMenuClick}>
            <div>Skills</div>
          </a>
          <a href="#projects" onClick={HandleMenuClick}>
            <div>Projects</div>
          </a>
          <a href="#contact" onClick={HandleMenuClick}>
            <div>Contact</div>
          </a>
        </div>
      ) : (
        ""
      )}
    </motion.div>
  );
}

export default NavBar;
