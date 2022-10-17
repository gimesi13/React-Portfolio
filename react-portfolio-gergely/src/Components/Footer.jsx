import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Slider from "./Slider";
import { SiSass, SiReact, SiFramer } from "react-icons/si";
import { MdDraw } from "react-icons/md";

//images array
const images = [
  { img: <SiReact />, name: "React.js" },
  { img: <SiSass />, name: "Sass" },
  { img: <SiFramer />, name: "Framer Motion" },
  {
    img: <MdDraw />,
    name: "unDraw",
  },
];

//breakpoints for the carousel slider
const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 300,
    itemsToShow: 2,
  },
  {
    width: 500,
    itemsToShow: 3,
  },
  {
    width: 700,
    itemsToShow: 4,
  },
  {
    width: 900,
    itemsToShow: 5,
  },
];

function Footer() {
  const [scrolltop, setScrollTop] = useState(false);

  // arrow on scroll behavior
  const handleArrowScroll = () => {
    if (window.scrollY >= 1000) {
      !scrolltop && setScrollTop(true);
    } else {
      scrolltop && setScrollTop(false);
    }
  };

  useEffect(() => {
    if (scrolltop === true) {
      let nav = document.getElementById("uparrow");
      nav.classList.add("visible-svg");
    } else {
      let nav = document.getElementById("uparrow");
      nav.classList.remove("visible-svg");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolltop]);

  window.addEventListener("scroll", handleArrowScroll, { passive: true });

  return (
    <section className="banner footer-section" id="footer">
      <div className="wrapper"></div>
      <motion.div
        initial={{
          y: -90,
        }}
        className="footer-build-box"
      >
        <h1>This Website has been built with:</h1>
        <Slider images={images} breakPoints={breakPoints} />
      </motion.div>

      <div className="footer-bottom-container">
        <div className="footer-bottom-left">
          <a href="#home">
            <BsArrowUpCircleFill id="uparrow" className="up-arrow-svg" />
          </a>
        </div>
        <div className="footer-bottom-right">
          <div className="soc-icons-footer">
            <a
              href="https://www.linkedin.com/in/gergely-gimesi-661639207/"
              target={"_blank"}
              rel="noreferrer"
            >
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }}>
                <BsLinkedin className="social-icons linkedin" />
              </motion.div>
            </a>
            <a
              href="https://www.facebook.com/gergely.gimesi"
              target={"_blank"}
              rel="noreferrer"
            >
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }}>
                <BsFacebook className="social-icons facebook" />
              </motion.div>
            </a>
            <a
              href="https://github.com/gimesi13/"
              target={"_blank"}
              rel="noreferrer"
            >
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }}>
                <BsGithub className="social-icons github" />
              </motion.div>
            </a>
          </div>
          <div>Created By Gergely Gimesi © 2022.</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
