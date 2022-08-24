import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Build from "./Build";

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
        <Build />
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
