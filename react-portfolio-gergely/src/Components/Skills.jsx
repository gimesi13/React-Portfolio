import React from "react";
import { motion } from "framer-motion";
import Slider from "./Slider";

function Skills({ setLocation }) {
  return (
    <section className="banner skills-section">
      <div className="navlink navlink-t2" id="skills" />
      <motion.div
        initial={{
          y: -90,
        }}
        className="skills"
      >
        <h1>Skills</h1>
        <p>
          Developing my skills is very important to me. Fortunately, I enjoy the
          process and there is always sooooo much to learn in Web Development...
          Here some technologies I'm already familiar with:
        </p>
        <Slider />
      </motion.div>
    </section>
  );
}

export default Skills;
