import React, { useState } from "react";
import { motion } from "framer-motion";

function Project() {
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
      Project image
      <motion.div className="project-wrapper" variants={animateWrapper}>
        <motion.h1 variants={animateText}>Hostel Website</motion.h1>
        <motion.p variants={animateText}>Design and Development</motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Project;
