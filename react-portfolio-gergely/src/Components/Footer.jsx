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
          <a href="#home">
            <BsArrowUpCircleFill className="up-arrow-svg" />
          </a>
        </div>
        <div className="footer-bottom-right">
          <div className="soc-icons-footer">
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
          <div>Created By Gergely Gimesi on 2022.</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
