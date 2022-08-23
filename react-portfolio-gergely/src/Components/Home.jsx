import React from "react";
import { motion } from "framer-motion";
import programmer from "./Pictures/undraw_programming_re_kg9v.svg";
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

function Home() {
  return (
    <motion.section
      className="banner home-section"
      id="home"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.3 }}
      /* transition={{ staggerChildren: 1 }} */
    >
      <div className="home-left">
        <div className="home-left-welcome">Welcome to my Portfolio</div>
        <h1>Hi! I'm Gergely!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum
          sit nam labore sapiente commodi pariatur architecto? Explicabo nisi
          ipsam totam? Consectetur aliquam accusamus sit assumenda quia. Eius,
          rerum quo!
        </p>
        <a href="#contact">
          <div className="home-left-connect">
            Lets Connect <BsArrowRightCircle className="right-arrow-svg" />
          </div>
        </a>
      </div>
      <motion.div className="home-right" variants={animatedElement}>
        <img className="programmer-svg" src={programmer} alt="programmer" />
      </motion.div>
    </motion.section>
  );
}

export default Home;
