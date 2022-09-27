import React from "react";
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
  return (
    <section className="banner footer-section" id="footer">
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
          <motion.a
            href="#home"
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsArrowUpCircleFill className="up-arrow-svg" />
          </motion.a>
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
