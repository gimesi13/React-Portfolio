import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import hacker from "./Pictures/undraw_hacker_mind_-6-y85.svg";

function NavBar() {
  /* STATES */
  const [menuOpened, setMenuOpened] = useState(false);

  /* FUNCTIONS */
  const HandleMenuClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="#home">
          <div className="navbar-left-logo">
            <img className="hacker-svg" src={hacker} alt="hacker" />
          </div>
        </a>
      </div>
      <div className="navbar-right">
        <div className="routers">
          <div>Home</div>
          <div>Skills</div>
          <div>Projects</div>
        </div>
        <div className="soc-icons">
          <div>
            <BsLinkedin className="social-icons" />
          </div>
          <div>
            <BsFacebook className="social-icons" />
          </div>
          <div>
            <BsGithub className="social-icons" />
          </div>
        </div>
        <div className="connect-button-box">
          <div className="connect-button">Let's Connect</div>
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
          <a href="#home">
            <div>Home</div>
          </a>{" "}
          <a href="#skills">
            <div>Skills</div>
          </a>{" "}
          <a href="#projects">
            <div>Projects</div>
          </a>{" "}
          <a href="#contact">
            <div>Contact</div>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
