import React from "react";
import { motion } from "framer-motion";

function Project({ project }) {
  const animateWrapper = {
    hidden: {
      clipPath: "circle(0% at 50% -10%)",
    },
    show: {
      clipPath: "circle(132.7% at 94% 6%)",
      transition: { duration: 0.3, delayChildren: 0.25, staggerChildren: 0.18 },
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
    <motion.div className="project" initial="hidden" whileHover="show">
      <img className="project-thumbnail" src={project.thumbnail} alt="" />

      <motion.div className="project-wrapper" variants={animateWrapper}>
        <motion.h1 variants={animateText}>{project.name}</motion.h1>
        <motion.p variants={animateText}>{project.description}</motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Project;
