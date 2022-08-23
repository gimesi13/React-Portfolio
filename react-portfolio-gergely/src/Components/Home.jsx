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
    <section className="banner home-section" id="home">
      <div className="home-left">
        <div className="home-left-welcome">Welcome to my Portfolio</div>
        <h1>Hi! I'm Gergely!</h1>
        <p>
          I'm a Fronted Developer and I build websites using React.js.<br></br>
          Just kidding... I'm not a professional developer yet, but I spend most
          of my free time building websites just like this one, or the ones you
          can see in the
          <span>
            <a href="#projects"> Projects </a>
          </span>
          section. <br></br>
          If you like my work, or you have anything to share with me about it.
          Don't hesitate to contact me!
        </p>
        <a href="#contact">
          <div className="home-left-connect">
            Lets Connect <BsArrowRightCircle className="right-arrow-svg" />
          </div>
        </a>
      </div>
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
