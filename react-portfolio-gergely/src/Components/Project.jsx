import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoLogoGithub } from "react-icons/go";
import { HiCode } from "react-icons/hi";

function Project({ project }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <motion.div
      className="project"
      initial="hidden"
      onClick={() => {
        isOpen === false ? setIsOpen(true) : setIsOpen(!isOpen);
      }}
      onHoverStart={() => {
        setIsOpen(true);
      }}
      onHoverEnd={() => {
        setIsOpen(false);
      }}
      
      viewport={{ once: false, amount: 0.3 }}
    >
      <img className="project-thumbnail" src={project.thumbnail} alt="" />

      <motion.div
        className="project-wrapper"
        variants={animateWrapper}
        animate={isOpen ? "show" : "hidden"}
      >
        <motion.h1 variants={animateText}>{project.name}</motion.h1>
        <motion.p variants={animateText}>{project.description}</motion.p>
        <motion.div variants={animateText}>
          <a
            className="live-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            live link
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            <GoLogoGithub className="live-code" />
            <HiCode className="live-code" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Project;
