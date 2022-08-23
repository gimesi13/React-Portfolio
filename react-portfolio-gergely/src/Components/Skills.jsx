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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          possimus sequi facilis? Dignissimos aspernatur iusto laborum aperiam
          obcaecati ipsa laboriosam?
        </p>
        <Slider />
      </motion.div>
    </section>
  );
}

export default Skills;
