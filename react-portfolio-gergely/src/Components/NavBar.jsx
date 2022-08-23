import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence, Variants } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import hacker from "./Pictures/undraw_hacker_mind_-6-y85.svg";

function NavBar() {
  /* STATES */
  const [menuOpened, setMenuOpened] = useState(false);
  const grow = useAnimation();
  const shrink = useAnimation();
  const openMenu = useAnimation();
  const closeMenu = useAnimation();
  const [navbar, setNavbar] = useState(false);

  ///hamburger menu items///
  const menuItems = [
    { text: "Home", href: "#home" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  /* FUNCTIONS */

  //useAnimation hook
  const HandleMenuClick = () => {
    if (menuOpened === true) {
      openMenu.set({ scale: 0 });
      openMenu.start({ scale: 1 });
    } else {
      closeMenu.set({ scale: 0 });
      closeMenu.start({ scale: 1 });
    }
    setMenuOpened(!menuOpened);
  };

  /* still performance issues */
  // navbar on scroll behavior //bad for performance, need to work on it
  const handleNavBarScroll = () => {
    if (window.scrollY >= 128) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    if (navbar === true) {
      shrink.set({ height: 128, background: "lightblue" });
      shrink.start({ height: 96, background: "transparent" });
    } else {
      grow.set({ height: 96, background: "transparent" });
      grow.start({ height: 128, background: "lightblue" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navbar]);

  window.addEventListener("scroll", handleNavBarScroll, { passive: true });

  const dropdownVariant = {
    hidden: {
      clipPath: "circle(0% at 100% 0%)",
      transition: { duration: 0.5 },
    },
    show: {
      clipPath: "circle(132.7% at 94% 6%)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div className="navbar" animate={navbar ? shrink : grow}>
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
          <motion.div animate={openMenu}>
            <GrClose className="hamburger-icon hamburger-icon-close" />
          </motion.div>
        ) : (
          <motion.div animate={closeMenu}>
            <GrMenu className="hamburger-icon" />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        <motion.div
          className="dropdown-menu"
          variants={dropdownVariant}
          initial={false}
          animate={menuOpened ? "show" : "hidden"}
        >
          {menuItems.map((item) => {
            return (
              <motion.a
                onClick={HandleMenuClick}
                key={item.href}
                href={item.href}
              >
                <div>{item.text}</div>
              </motion.a>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default NavBar;
