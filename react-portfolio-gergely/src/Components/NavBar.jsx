import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CgMenu, CgClose } from "react-icons/cg";
/* import hacker from "./Pictures/undraw_cloud_files_wmo8.svg";
 */
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

  // navbar on scroll behavior
  const handleNavBarScroll = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    if (navbar === true) {
      const nav = document.getElementById("navbar");
      nav.classList.add("small");
      /*       shrink.set({
        height: 128,
        backgroundColor: "transparent",
        boxShadow: "none",
      });
      shrink.start({
        height: 96,
        backgroundColor: "black",
        boxShadow: `0px 0px 15px 6px #252525`,
      }); */
    } else {
      const nav = document.getElementById("navbar");
      nav.classList.remove("small");
      /*       grow.set({
        height: 96,
        backgroundColor: "black",
        boxShadow: `0px 0px 15px 6px #252525`,
      });
      grow.start({
        height: 128,
        backgroundColor: "transparent",
        boxShadow: "none",
      }); */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navbar]);

  window.addEventListener("scroll", handleNavBarScroll, { passive: true });

  const dropdownVariant = {
    hidden: {
      pointerEvents: "none",
      clipPath: "circle(0% at 100% 0%)",
      transition: { delay: 0.3, duration: 0.5, staggerChildren: 0.05 },
    },
    show: {
      pointerEvents: "auto",
      clipPath: "circle(132.7% at 94% 6%)",
      transition: { duration: 0.5, delayChildren: 0.25, staggerChildren: 0.18 },
    },
  };

  const animateText = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div id="navbar" className="navbar" animate={navbar ? shrink : grow}>
      <div className="navbar-left">
        <a href="#home">
          <div className="navbar-left-logo">
            {/* <img className="hacker-svg" src={hacker} alt="hacker" /> */}
          </div>
        </a>
      </div>
      <div className="navbar-right">
        <div className="routers">
          <a href="#home">
            <motion.div whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
              Home
            </motion.div>
          </a>
          <a href="#skills">
            <motion.div whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
              Skills
            </motion.div>
          </a>
          <a href="#projects">
            <motion.div whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
              Projects
            </motion.div>
          </a>
        </div>
        <div className="soc-icons">
          <a
            href="https://www.linkedin.com/in/gergely-gimesi-661639207/"
            target={"_blank"}
            rel="noreferrer"
          >
            <motion.div whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
              <BsLinkedin className="social-icons linkedin" />
            </motion.div>
          </a>
          <a
            href="https://www.facebook.com/gergely.gimesi"
            target={"_blank"}
            rel="noreferrer"
          >
            <motion.div whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
              <BsFacebook className="social-icons facebook" />
            </motion.div>
          </a>
          <a
            href="https://github.com/gimesi13/"
            target={"_blank"}
            rel="noreferrer"
          >
            <motion.div whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
              <BsGithub className="social-icons github" />
            </motion.div>
          </a>
        </div>
        <div className="connect-button-box">
          <a href="#contact">
            <motion.div
              className="connect-button"
              whileHover={{ borderRadius: 50 }}
              whileTap={{ scale: 0.9 }}
            >
              Let's Connect
            </motion.div>
          </a>
        </div>
      </div>

      <div className="hamburger-box" onClick={HandleMenuClick}>
        {menuOpened ? (
          <motion.div animate={openMenu}>
            <CgClose className="hamburger-icon hamburger-icon-close" />
          </motion.div>
        ) : (
          <motion.div animate={closeMenu}>
            <CgMenu className="hamburger-icon" />
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
                whileTap={{ scale: 0.9 }}
                variants={animateText}
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
