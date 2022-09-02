import React from "react";
import { motion } from "framer-motion";
import programmer from "./Pictures/undraw_feeling_proud_qne1.svg";
import { BsArrowRightCircle } from "react-icons/bs";

/* variants */
const animatedElement = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    transition: { type: "spring", bounce: 0.5, duration: 1 },
    opacity: 1,
  },
};

const animatedText = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: { opacity: 1, x: 0 },
};

function Home() {
  return (
    <section className="banner home-section" id="home">
      <motion.div
        className="home-left"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
      >
        <motion.div
          className="home-left-welcome-wrapper"
          variants={animatedText}
        >
          <div className="home-left-welcome">Welcome to my Portfolio</div>
        </motion.div>

        <motion.h1 variants={animatedText}>Hi! I'm Gergely!</motion.h1>
        <motion.p variants={animatedText}>
          I'm a Fronted Developer and I build web applications for living using
          React.js.<br></br>
          Well, not exactly... I'm not a professional developer yet, but I spend
          most of my free time building websites just like this one, or the ones
          you can see in the
          <span>
            <a href="#projects"> Projects </a>
          </span>
          section. <br></br>
          If you like my work, or you have anything to share with me about it.
          Don't hesitate to contact me!
        </motion.p>
        <motion.a href="#contact" variants={animatedText}>
          <motion.div
            className="home-left-connect"
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            Lets Connect <BsArrowRightCircle className="right-arrow-svg" />
          </motion.div>
        </motion.a>
      </motion.div>
      <motion.div
        className="home-right"
        variants={animatedElement}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img className="programmer-svg" src={programmer} alt="programmer" />
      </motion.div>
    </section>
  );
}

export default Home;
