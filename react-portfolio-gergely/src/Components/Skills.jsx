import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="banner skills-section" id="home">
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
        <div className="slider">slider</div>
      </motion.div>
    </section>
  );
}

export default Skills;
